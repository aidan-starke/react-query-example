import {
	fetcher,
	GetBlocksDocument,
	GetBlocksQuery,
	GetBlocksQueryVariables,
	GetTransfersQuery,
	GetTransfersQueryVariables,
	useGetBlocksQuery,
	useGetTransfersQuery,
	GetTransfersDocument,
} from "@/libs/api/generated";
import type { GetStaticProps, NextPage } from "next";
import { usePolling } from "@/libs/hooks";
import { Block, Transfer } from "@/libs/components";
import { queryClient, client } from "@/libs/client";
import { dehydrate } from "@tanstack/react-query";

export const getStaticProps: GetStaticProps = async () => {
	await queryClient.prefetchQuery(
		["GetBlocks"],
		fetcher<GetBlocksQuery, GetBlocksQueryVariables>(client, GetBlocksDocument)
	);

	await queryClient.prefetchQuery(
		["GetTransfers"],
		fetcher<GetTransfersQuery, GetTransfersQueryVariables>(
			client,
			GetTransfersDocument
		)
	);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
	const { blocks } = usePolling<GetBlocksQuery>({}, useGetBlocksQuery);
	const { transfers } = usePolling<GetTransfersQuery>({}, useGetTransfersQuery);

	return (
		<div className="h-screen p-8 m-auto grid grid-cols-2 gap-4">
			<div className="border-2 rounded h-full overflow-y-auto p-2">
				<h1 className="text-xl font-mono p-4">Latest Blocks</h1>
				{blocks?.nodes?.map((block) => (
					<Block
						key={block?.id}
						hash={block?.id}
						height={block?.number}
						timestamp={block?.timestamp}
						parentHash={block?.parentHash}
						extrinsics={block?.extrinsics?.edges
							?.map(({ node }) => node?.id)
							.filter((e) => e?.length)}
					/>
				))}
			</div>
			<div className="border-2 rounded h-full overflow-y-auto p-2">
				<h1 className="text-xl font-mono p-4">Latest Transfers</h1>
				{transfers?.nodes?.map((transfer) => (
					<Transfer
						key={transfer?.id}
						timestamp={transfer?.timestamp}
						from={transfer?.fromId}
						to={transfer?.toId}
						amount={transfer?.amount}
						token={transfer?.tokenId}
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
