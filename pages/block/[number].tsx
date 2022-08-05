import type { GetServerSideProps, NextPage } from "next";
import {
	GetBlockByNumberDocument,
	GetBlockByNumberQuery,
	GetExtrinsicByIdDocument,
	GetExtrinsicByIdQuery,
} from "@/libs/api/generated";
import { Extrinsic } from "@/libs/components";
import { fetchData } from "@/libs/utils/prefetch";
import { Layout } from "@/libs/components/Layout";
import Decimal from "decimal.js";
import { AcalaBlock } from "@/libs/types";

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { blocks } = (await fetchData(GetBlockByNumberDocument, {
		number: new Decimal(context?.params?.number as string),
	})) as GetBlockByNumberQuery;
	const extrinsics = await Promise.all(
		(blocks?.nodes[0]?.extrinsics?.edges as any)?.map(
			async ({ node }: { node: { id: string } }) =>
				await fetchData(GetExtrinsicByIdDocument, {
					id: node?.id,
				})
		)
	);

	return {
		props: {
			block: blocks?.nodes[0],
			extrinsics: extrinsics.map((extrinsic) => extrinsic.extrinsic),
		},
	};
};

interface BlockProps {
	block: AcalaBlock;
	extrinsics: Array<GetExtrinsicByIdQuery["extrinsic"]>;
}

const Block: NextPage<BlockProps> = ({ block, extrinsics }) => {
	return (
		<div className="h-screen p-8 m-auto space-y-4 max-h-[89vh]">
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
