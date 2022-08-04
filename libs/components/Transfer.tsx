import { FC, useMemo } from "react";

import { utils as ethers } from "ethers";
import { getDistance } from "@/libs/utils";

interface TransferProps {
	timestamp: string | undefined;
	from: string | null | undefined;
	to: string | null | undefined;
	amount: string | null | undefined;
	token: string | null | undefined;
}

export const Transfer: FC<TransferProps> = ({
	timestamp,
	from,
	to,
	amount,
	token,
}) => {
	const value = useMemo(() => {
		if (!amount) return 0;
		if (token?.includes("DOT")) return ethers.formatUnits(amount, 10);
		if (token?.includes("ACA") || token?.includes("AUSD"))
			return ethers.formatUnits(amount, 12);

		return 0;
	}, [amount, token]);

	return (
		<div className="p-4 grid grid-cols-3 items-center border-b">
			<div className="flex space-x-2">
				<div className="bg-gray-200 h-12 w-12 flex items-center rounded-3xl">
					<p className="text-center w-full">Tx</p>
				</div>
				<div className="flex items-center">
					<p className="text-sm">{getDistance(timestamp as string)}</p>
				</div>
			</div>

			<div className="text-sm space-y-px">
				<p className="truncate">
					From&nbsp;
					<span className="font-mono text-gray-500 text-xs">{from}</span>
				</p>
				<p className="truncate">
					To&nbsp;
					<span className="font-mono text-gray-500 text-xs">{to}</span>
				</p>
			</div>

			<div className="text-sm">
				<p className="text-right">
					<span className="font-mono text-gray-500">{value}</span>{" "}
					{token?.replace(/[^A-Z]/g, "")}
				</p>
			</div>
		</div>
	);
};
