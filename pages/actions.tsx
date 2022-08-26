import type { GetServerSideProps, NextPage } from "next";

import clsx from "clsx";
import { FormEvent, useCallback, useMemo } from "react";
import {
	ActionState,
	useActionState,
	usePolling,
	useTheme,
} from "@/libs/hooks";
import JSONPretty from "react-json-pretty";
import { execute, fetchData } from "@/libs/utils";
import {
	GET_BLOCK_WITH_VALIDATOR,
	GET_FULL_BLOCK_ACTION,
} from "@/libs/constants";
import {
	GetBlocksQuery,
	GetBlocksDocument,
	useGetBlocksQuery,
} from "@/libs/api/generated";

export const getServerSideProps: GetServerSideProps = async () => {
	const { app_blocks: blocks } = (await fetchData(
		GetBlocksDocument
	)) as GetBlocksQuery;

	const { id, hash } = blocks[0];

	return {
		props: {
			initialBlock: {
				id,
				hash,
			},
		},
	};
};

interface LatestBlock {
	id: string;
	hash: string;
}

interface ActionsProps {
	initialBlock: LatestBlock;
}

const Actions: NextPage<ActionsProps> = ({ initialBlock }) => {
	const latestBlock = useLatestBlock(initialBlock);
	const isDarkMode = useTheme((state) => state.theme === "Dark");

	const { error, loading, blockData, formInput, updateState } =
		useActionState();
	const { isBlockHash, onFormSubmit } = useForm(useActionState());

	const loadingText = useMemo<string>(() => {
		if (!loading) return isBlockHash ? "Fetch Validator" : "Fetch Block";

		return "Fetching...";
	}, [loading, isBlockHash]);

	return (
		<div className="p-8">
			<div className="w-2/3 m-auto">
				<h1 className="text-lg tracking-wide text-center">Latest Block</h1>
				<p className="text-center"># {latestBlock.id}</p>
				<p className="text-center mb-4">{latestBlock.hash}</p>
				<form
					onSubmit={onFormSubmit}
					className="w-1/3 justify-center space-y-2 p-4 m-auto mb-6"
				>
					<fieldset className="p-4">
						<label htmlFor="formInput">Block Number / Hash</label>
						<input
							className={clsx(
								"border rounded border-gray-500 shadow w-full outline-none p-2",
								isDarkMode && "bg-gray-300 text-gray-600"
							)}
							id="formInput"
							type="text"
							value={formInput}
							onChange={(e) => updateState("formInput", e.target.value)}
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
						{loadingText}
					</button>
				</form>
				{error && <div>{error}</div>}
				{Object.keys(blockData)?.length > 0 && (
					<JSONPretty className="text-sm" data={blockData} />
				)}
			</div>
		</div>
	);
};

export default Actions;

const useLatestBlock = (initialBlock: LatestBlock) => {
	const { app_blocks: blocks } = usePolling<GetBlocksQuery>(
		{} as GetBlocksQuery,
		useGetBlocksQuery
	);

	return useMemo<LatestBlock>(() => {
		if (!blocks) return initialBlock;

		const { id, hash } = blocks[0];

		return { id, hash };
	}, [blocks, initialBlock]);
};

const useForm = ({
	formInput,
	updateState,
	overrideState,
}: Partial<ActionState>) => {
	const isBlockHash = formInput?.startsWith("0x");

	const getFullBlockAction = useCallback(async () => {
		const { data, errors } = await execute(GET_FULL_BLOCK_ACTION, {
			id: formInput,
		});
		updateState?.("loading", false);

		if (errors) return overrideState?.("error", errors[0].message);

		updateState?.("blockData", data.GetFullBlock);
	}, [formInput, updateState, overrideState]);

	const getBlockWithValidatorAction = useCallback(async () => {
		const { data, errors } = await execute(GET_BLOCK_WITH_VALIDATOR, {
			blockHash: formInput,
		});
		updateState?.("loading", false);

		if (errors) return overrideState?.("error", errors[0].message);

		updateState?.("blockData", data.GetBlockWithValidator);
	}, [formInput, updateState, overrideState]);

	const onFormSubmit = useCallback(
		async (e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			if (!formInput)
				return updateState?.("error", "Please enter a block hash or number");

			updateState?.("loading", true);
			updateState?.("error", undefined);

			if (isBlockHash) return await getBlockWithValidatorAction();

			await getFullBlockAction();
		},
		[
			formInput,
			updateState,
			isBlockHash,
			getFullBlockAction,
			getBlockWithValidatorAction,
		]
	);

	return {
		isBlockHash,
		onFormSubmit,
	};
};
