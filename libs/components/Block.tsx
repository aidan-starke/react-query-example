import { FC } from "react";
import {
	applyDarkModeLink,
	applyDarkModeText,
	getDistance,
	applyDarkModeBackground,
} from "@/libs/utils";
import { useTheme } from "@/libs/hooks";
import { Layout } from "@/libs/components";

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
					className={applyDarkModeBackground(
						"prose bg-gray-200 h-12 w-12 flex items-center rounded",
						isDarkMode
					)}
				>
					<p className="text-center w-full">Bk</p>
				</div>
				<div>
					<a
						className={applyDarkModeLink(
							"text-blue-600 font-mono text-sm",
							isDarkMode
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
						className={applyDarkModeText("font-mono text-gray-500", isDarkMode)}
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
						className={applyDarkModeText(
							"font-mono text-gray-500 truncate",
							isDarkMode
						)}
					>
						{hash}
					</span>
				</p>
				<p className="flex">
					Parent&nbsp;
					<span
						className={applyDarkModeText(
							"font-mono text-gray-500 truncate",
							isDarkMode
						)}
					>
						{parentHash}
					</span>
				</p>
			</div>
		</Layout.TableWrapper>
	);
};
