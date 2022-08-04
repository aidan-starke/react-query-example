import { useEffect, useState } from "react";

import { client } from "@/libs/client";

export const usePolling = <T>(
	initialData: T,
	queryFunction: Function,
	queryParams?: Record<string, unknown>,
	refetchInterval: number = 5000
) => {
	const [polledData, setPolledData] = useState<T>(initialData);

	const { data, isFetching } = queryFunction(client, queryParams, {
		refetchInterval,
		refetchIntervalInBackground: true,
	});

	useEffect(() => {
		setPolledData(data);
	}, [data, isFetching]);

	return polledData;
};
