import { FC } from "react";
import { getDistance } from "@/libs/utils";
import { useTheme } from "@/libs/hooks";
import { Layout } from "@/libs/components";
import clsx from "clsx";

interface BlockProps {
	hash?: string;
	height?: number;
	timestamp?: string;
	parentHash?: string | null;
	extrinsics?: (string | undefined)[];
	number?: string;
}

export const Block: FC<BlockProps> = ({
	hash,
	height,
	timestamp,
	parentHash,
	extrinsics,
	number,
}) => {
	const isDarkMode = useTheme((state) => state.theme === "Dark");

	return (
		<Layout.TableWrapper>
			<div className="flex space-x-2">
				<div
					className={clsx(
						"prose bg-gray-200 h-12 w-12 flex items-center rounded",
						isDarkMode && "bg-gray-300"
					)}
				>
					<p className="text-center w-full">Bk</p>
				</div>
				<div>
					<a
						className={clsx(
							"text-blue-600 font-mono text-sm",
							isDarkMode && "text-blue-200"
						)}
						href={`/block/${number}`}
					>
						{height}
					</a>
					<p className="text-sm">{getDistance(timestamp as string)}</p>
				</div>
			</div>

			<div className="text-sm flex">
				<p>
					<span
						className={clsx(
							"font-mono text-gray-500",
							isDarkMode && "text-gray-300"
						)}
					>
						{extrinsics?.length ?? 0}
					</span>{" "}
					{extrinsics?.length === 1 ? "extrinsic" : "extrinsics"}
				</p>
			</div>

			<div className="text-sm space-y-px">
				<p className="flex">
					Hash&nbsp;
					<span
						className={clsx(
							"font-mono text-gray-500 truncate",
							isDarkMode && "text-gray-300"
						)}
					>
						{hash}
					</span>
				</p>
				<p className="flex">
					Parent&nbsp;
					<span
						className={clsx(
							"font-mono text-gray-500 truncate",
							isDarkMode && "text-gray-300"
						)}
					>
						{parentHash}
					</span>
				</p>
			</div>
		</Layout.TableWrapper>
	);
};
