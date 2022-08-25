import { NextApiRequest, NextApiResponse } from "next";
import { execute, getApiInstance } from "@/libs/utils";
import { API_ENDPOINT, GET_BLOCK_WITH_VALIDATOR } from "@/libs/constants";
import { ApiPromise } from "@polkadot/api";

let api: ApiPromise;

export default async function getBlockWithValidator(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const { blockHash } = req.body.input;

		if (!api) api = await getApiInstance(API_ENDPOINT);
		const header = await api.derive.chain.getHeader(blockHash);

		const { data, errors } = await execute(GET_BLOCK_WITH_VALIDATOR, {
			blockHash,
		});
		if (errors) throw errors[0];

		return res.json({
			...data.app_blocks[0],
			validator: header?.author?.toString(),
		});
	} catch (error: any) {
		return res.status(400).json({
			message: error?.message ?? error,
		});
	}
}
