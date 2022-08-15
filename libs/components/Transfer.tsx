import { FC, useMemo } from "react";
import { utils as ethers } from "ethers";
import { getDistance } from "@/libs/utils";
import { useTheme } from "@/libs/hooks";
import { Layout } from "@/libs/components";
import clsx from "clsx";

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
	const isDarkMode = useTheme((state) => state.theme === "Dark");

	return (
		<Layout.TableWrapper>
			<div className="flex space-x-2">
				<div
					className={clsx(
						"prose bg-gray-200 h-12 w-12 flex items-center rounded-3xl",
						isDarkMode && "bg-gray-300"
					)}
				>
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
						className={clsx(
							"text-blue-600 font-mono text-sm",
							isDarkMode && "text-blue-200"
						)}
					>
						{from}
					</a>
				</p>
				<p className="truncate">
					To&nbsp;
					<a
						href={`/address/${to}`}
						className={clsx(
							"text-blue-600 font-mono text-sm",
							isDarkMode && "text-blue-200"
						)}
					>
						{to}
					</a>
				</p>
			</div>

			<div className="text-sm">
				<p className="text-right">
					<span
						className={clsx(
							"font-mono text-gray-500",
							isDarkMode && "!text-gray-300"
						)}
					>
						{value}
					</span>{" "}
					{token?.replace(/[^A-Z]/g, "")}
				</p>
			</div>
		</Layout.TableWrapper>
	);
};
