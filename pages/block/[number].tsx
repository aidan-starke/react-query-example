import type { GetServerSideProps, NextPage } from "next";
import { GetBlockByIdDocument, GetBlockByIdQuery } from "@/libs/api/generated";
import { Extrinsic } from "@/libs/components";
import { fetchData } from "@/libs/utils";
import { Layout } from "@/libs/components/Layout";
import { useTheme } from "@/libs/hooks";
import clsx from "clsx";
import { Extrinsics } from "@/libs/types";

export const getServerSideProps: GetServerSideProps = async (context) => {
	const blockNumber = context?.params?.number as string;
	const { app_blocks_by_pk: block } = (await fetchData(GetBlockByIdDocument, {
		id: blockNumber,
	})) as GetBlockByIdQuery;

	return {
		props: {
			block: {
				hash: block?.hash,
				number: blockNumber,
			},
			extrinsics: block?.extrinsics,
		},
	};
};

interface BlockProps {
	block: {
		hash: string;
		number: number;
	};
	extrinsics: Extrinsics;
}

const Block: NextPage<BlockProps> = ({ block, extrinsics }) => {
	const { isDarkMode } = useTheme();

	return (
		<div className="h-screen p-8 m-auto space-y-4 max-h-[89vh]">
			<div>
				<h1 className="text-xl">Extrinsics</h1>
				<p>
					For block{" "}
					<span
						className={clsx(
							"font-mono text-sm text-gray-500",
							isDarkMode && "!text-gray-300"
						)}
					>
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
						key={extrinsic?.hash}
					>
						<Extrinsic extrinsic={extrinsic} />
					</Layout.TableRow>
				))}
			</div>
		</div>
	);
};

export default Block;
