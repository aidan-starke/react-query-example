import { useEffect } from "react";
import { client } from "@/libs/client";
import { SetStateAction } from "jotai";
import { GetExtrinsicsByAccountQuery } from "@/libs/api/generated";

export const useAtomPolling = (
	setAtom: (update: SetStateAction<GetExtrinsicsByAccountQuery>) => void,
	queryFunction: Function,
	queryParams?: Record<string, unknown>,
	refetchInterval: number = 5000
) => {
	const { data, isFetching } = queryFunction(client, queryParams, {
		refetchInterval,
		refetchIntervalInBackground: true,
	});

	useEffect(() => {
		if (!data) return;

		setAtom(data);
	}, [data, isFetching]);
};
