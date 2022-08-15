import { FC } from "react";
import { getDistance } from "@/libs/utils";
import { useTheme } from "@/libs/hooks";
import { Layout } from "@/libs/components";
import clsx from "clsx";

interface ExtrinsicSimpleProps {
	id?: string;
	hash?: string;
	signer?: string | null;
	timestamp?: string;
	eventsCount?: number;
}

export const ExtrinsicSimple: FC<ExtrinsicSimpleProps> = ({
	id,
	hash,
	signer,
	timestamp,
	eventsCount,
}) => {
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

			<div className="text-sm flex">
				<p>
					<span
						className={clsx(
							"font-mono text-gray-500",
							isDarkMode && "!text-gray-300"
						)}
					>
						{eventsCount ?? 0}
					</span>{" "}
					{eventsCount === 1 ? "event" : "events"}
				</p>
			</div>

			<div className="text-sm space-y-px">
				<p className="truncate">
					Signer&nbsp;
					<a
						href={`/address/${signer}`}
						className={clsx(
							"text-blue-600 font-mono text-sm",
							isDarkMode && "text-blue-200"
						)}
					>
						{signer}
					</a>
				</p>
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
			</div>
		</Layout.TableWrapper>
	);
};
