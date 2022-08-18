import { FC } from "react";
import { getDistance } from "@/libs/utils";
import { Layout } from "@/libs/components";
import clsx from "clsx";
import { useTheme } from "@/libs/hooks";

interface BlockProps {
	hash?: string;
	height?: string;
	timestamp?: string;
	parentHash?: string;
	extrinsicsCount?: number;
}

export const Block: FC<BlockProps> = ({
	hash,
	height,
	timestamp,
	parentHash,
	extrinsicsCount,
}) => {
	const { isDarkMode } = useTheme();

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
						href={`/block/${height}`}
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
							isDarkMode && "!text-gray-300"
						)}
					>
						{extrinsicsCount ?? 0}
					</span>{" "}
					{extrinsicsCount === 1 ? "extrinsic" : "extrinsics"}
				</p>
			</div>

			<div className="text-sm space-y-px">
				<p className="flex">
					Hash&nbsp;
					<span
						className={clsx(
							"font-mono text-gray-500 truncate",
							isDarkMode && "!text-gray-300"
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
							isDarkMode && "!text-gray-300"
						)}
					>
						{parentHash}
					</span>
				</p>
			</div>
		</Layout.TableWrapper>
	);
};
