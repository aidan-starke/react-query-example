import type { GetServerSideProps, NextPage } from "next";

import clsx from "clsx";
import { FormEvent, useCallback, useMemo } from "react";
import { useActionState, usePolling, useTheme } from "@/libs/hooks";
import JSONPretty from "react-json-pretty";
import { execute, fetchData } from "@/libs/utils";
import { GET_FULL_BLOCK_ACTION } from "@/libs/constants";
import {
	GetBlocksQuery,
	GetBlocksDocument,
	useGetBlocksQuery,
} from "@/libs/api/generated";

export const getServerSideProps: GetServerSideProps = async () => {
	const { app_blocks: blocks } = (await fetchData(
		GetBlocksDocument
	)) as GetBlocksQuery;

	return {
		props: {
			initialBlock: blocks[blocks.length - 1].id,
		},
	};
};

interface ActionsProps {
	initialBlock: number;
}

const Actions: NextPage<ActionsProps> = ({ initialBlock }) => {
	const latestBlock = useLatestBlock(initialBlock);
	const isDarkMode = useTheme((state) => state.theme === "Dark");
	const { error, loading, blockData, blockNumber, updateState } =
		useActionState();

	const onFormSubmit = useCallback(
		async (e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			if (!blockNumber)
				return updateState("error", "Please enter a block number");

			updateState("loading", true);
			updateState("error", undefined);

			const { data, errors } = await execute(GET_FULL_BLOCK_ACTION, {
				id: blockNumber,
			});
			updateState("loading", false);

			if (errors) return updateState("error", errors[0].message);

			updateState("blockData", data.GetFullBlock);
		},
		[blockNumber]
	);

	return (
		<div className="p-8 w-screen h-screen">
			<div className="w-2/3 m-auto">
				<h1 className="text-lg tracking-wide text-center mb-4">
					Latest Block: {latestBlock}
				</h1>
				<form
					onSubmit={onFormSubmit}
					className="w-1/3 justify-center space-y-2 p-4 m-auto mb-6"
				>
					<fieldset className="p-4">
						<label htmlFor="blockNumber">Block Number</label>
						<input
							className={clsx(
								"border rounded border-gray-500 shadow w-full outline-none p-2",
								isDarkMode && "bg-gray-300 text-gray-600"
							)}
							id="blockNumber"
							type="number"
							value={blockNumber}
							onChange={(e) => updateState("blockNumber", e.target.value)}
						/>
					</fieldset>
					<button
						type="submit"
						className={clsx(
							"rounded flex m-auto bg-gray-500 border-b-2 border-gray-300 p-2 text-white hover:text-gray-500 hover:bg-white shadow duration-300",
							loading && "text-gray-300"
						)}
						disabled={loading}
					>
						{loading ? "Fetching..." : "Fetch Block"}
					</button>
				</form>
				{error && <div>{error}</div>}
				{blockData && <JSONPretty className="text-sm" data={blockData} />}
			</div>
		</div>
	);
};

export default Actions;

const useLatestBlock = (initialBlock: number) => {
	const { app_blocks: blocks } = usePolling<GetBlocksQuery>(
		{} as GetBlocksQuery,
		useGetBlocksQuery
	);

	return useMemo<string | number>(
		() => (blocks ? blocks[blocks.length - 1].id : initialBlock),
		[blocks, initialBlock]
	);
};
