import type { GetServerSideProps, NextPage } from "next";
import {
	GetBlockByIdDocument,
	GetBlockByIdQuery,
	GetExtrinsicByIdDocument,
	GetExtrinsicByIdQuery,
} from "@/libs/api/generated";
import { Extrinsic } from "@/libs/components";
import { fetchData } from "@/libs/utils/prefetch";
import { Layout } from "@/libs/components/Layout";

export const getServerSideProps: GetServerSideProps = async (context) => {
	const blockData = (await fetchData(GetBlockByIdDocument, {
		id: context?.params?.hash,
	})) as GetBlockByIdQuery;
	const extrinsics = await Promise.all(
		(blockData?.block?.extrinsics?.edges as any)?.map(
			async ({ node }: { node: { id: string } }) =>
				await fetchData(GetExtrinsicByIdDocument, {
					id: node?.id,
				})
		)
	);

	return {
		props: {
			block: blockData.block,
			extrinsics: extrinsics.map((extrinsic) => extrinsic.extrinsic),
		},
	};
};

interface BlockProps {
	block: GetBlockByIdQuery["block"];
	extrinsics: Array<GetExtrinsicByIdQuery["extrinsic"]>;
}

const Block: NextPage<BlockProps> = ({ block, extrinsics }) => {
	return (
		<div className="h-screen p-8 m-auto space-y-4">
			<div>
				<h1 className="text-xl">Extrinsics</h1>
				<p>
					For block{" "}
					<span className="font-mono text-sm text-gray-500">
						{block?.number}
					</span>
				</p>
			</div>
			<div className="border-2 rounded h-full p-2 overflow-y-auto">
				<Layout.TableRow rowClassName="text-lg grid-cols-4">
					<p>Tx Hash</p>
					<p>Method</p>
					<p>Signer</p>
					<p>Age</p>
				</Layout.TableRow>
				{extrinsics?.map((extrinsic) => (
					<Layout.TableRow
						rowClassName="space-y-px grid-cols-4"
						key={extrinsic?.id}
					>
						<Extrinsic extrinsic={extrinsic} />
					</Layout.TableRow>
				))}
			</div>
		</div>
	);
};

export default Block;
