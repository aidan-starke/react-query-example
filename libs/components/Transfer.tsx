import { FC, useMemo } from "react";

import { utils as ethers } from "ethers";
import { getDistance } from "@/libs/utils";

interface TransferProps {
	timestamp?: string | null;
	from?: string | null;
	to?: string | null;
	amount?: string | null;
	token?: string | null;
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
				<div className="prose bg-gray-200 h-12 w-12 flex items-center rounded-3xl">
					<p className="text-center w-full">Tf</p>
				</div>
				<div className="flex items-center">
					<p className="text-sm">{getDistance(timestamp as string)}</p>
				</div>
			</div>

			<div className="text-sm space-y-px">
				<p className="truncate">
					From&nbsp;
					<a
						href={`/address/${from}`}
						className="text-blue-600 font-mono text-xs"
					>
						{from}
					</a>
				</p>
				<p className="truncate">
					To&nbsp;
					<a
						href={`/address/${to}`}
						className="text-blue-600 font-mono text-xs"
					>
						{to}
					</a>
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
