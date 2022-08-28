import { useMemo } from "react";
import { client } from "@/libs/client";

export const usePolling = <T>(
	initialData: T,
	queryFunction: Function,
	queryParams?: Record<string, unknown>,
	refetchInterval: number = 5000
) => {
	const { data, isFetching } = queryFunction(client, queryParams, {
		refetchInterval,
		refetchIntervalInBackground: true,
	});

	return useMemo<T>(
		() => (data ? data : initialData),
		[data, initialData, isFetching]
	);
};
