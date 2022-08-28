import type { GetServerSideProps, NextPage } from "next";

import {
	GetBlocksDocument,
	GetBlocksQuery,
	useGetBlocksQuery,
	GetExtrinsicsDocument,
	GetExtrinsicsQuery,
	useGetExtrinsicsQuery,
} from "@/libs/api/generated";
import { usePolling } from "@/libs/hooks";
import { Block, ExtrinsicSimple } from "@/libs/components";
import { queryClient } from "@/libs/client";
import { dehydrate, DehydratedState, useHydrate } from "@tanstack/react-query";
import { prefetch } from "@/libs/utils";

export const getServerSideProps: GetServerSideProps = async () => {
	await prefetch("GetBlocks", GetBlocksDocument);
	await prefetch("GetExtrinsics", GetExtrinsicsDocument);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

interface HomeProps {
	dehydratedState: DehydratedState;
}

const Home: NextPage<HomeProps> = ({ dehydratedState }) => {
	useHydrate(dehydratedState);

	const { app_blocks: blocks } = usePolling<GetBlocksQuery>(
		{} as GetBlocksQuery,
		useGetBlocksQuery
	);
	const { app_extrinsics: extrinsics } = usePolling<GetExtrinsicsQuery>(
		{} as GetExtrinsicsQuery,
		useGetExtrinsicsQuery
	);

	return (
		<div className="h-screen p-8 m-auto grid grid-cols-2 gap-4 max-h-[95vh]">
			<div className="border-2 rounded h-full overflow-y-auto p-2">
				<h1 className="text-xl font-mono p-4">Latest Blocks</h1>
				{blocks?.map((block) => (
					<Block
						key={block?.id}
						hash={block?.hash}
						timestamp={block?.created_at}
						parentHash={block?.parent_hash}
						height={block?.id}
						extrinsicsCount={block?.extrinsics_aggregate?.aggregate?.count}
					/>
				))}
			</div>
			<div className="border-2 rounded h-full overflow-y-auto p-2">
				<h1 className="text-xl font-mono p-4">Latest Extrinsics</h1>
				{extrinsics?.map((extrinsic) => (
					<ExtrinsicSimple
						key={extrinsic?.id}
						id={extrinsic?.id}
						hash={extrinsic?.hash}
						signer={extrinsic?.signer}
						timestamp={extrinsic?.created_at}
						eventsCount={extrinsic?.events_aggregate?.aggregate?.count}
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
