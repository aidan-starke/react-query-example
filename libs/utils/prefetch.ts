import { client, queryClient } from "@/libs/client";
import { fetcher } from "@/libs/api/generated";

export const prefetch = async (queryKey: string, query: string) =>
	await queryClient.prefetchQuery([queryKey], fetcher(client, query));

export const fetchData = async (
	query: string,
	variables?: Record<string, unknown>
) => {
	const fetchData = fetcher(client, query, variables);
	return await fetchData();
};
