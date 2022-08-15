import { getDistance } from "@/libs/utils";
import { FC, useState } from "react";
import JSONPretty from "react-json-pretty";
import clsx from "clsx";
import { useTheme } from "@/libs/hooks";
import { Extrinsic as ExtrinsicInterface } from "@/libs/types";

interface ExtrinsicProps {
	extrinsic: ExtrinsicInterface;
	eventsCount?: number;
}

export const Extrinsic: FC<ExtrinsicProps> = ({ extrinsic, eventsCount }) => {
	const [viewArgs, setViewArgs] = useState<boolean>(false);
	const isDarkMode = useTheme((state) => state.theme === "Dark");

	return (
		<>
			<a
				href={`/extrinsic/${extrinsic?.id}`}
				className={clsx(
					"truncate text-sm font-mono prose text-blue-600",
					isDarkMode && "text-blue-200"
				)}
			>
				{extrinsic?.hash}
			</a>
			<div className="flex items-center">
				<p
					className={clsx(
						"prose flex-1 font-mono text-sm",
						isDarkMode && "text-gray-300"
					)}
				>
					{extrinsic?.call_section}.{extrinsic?.call_method}
				</p>
				<button
					className={clsx(
						"font-mono text-xs border p-2 shadow rounded text-gray-600 duration-300",
						viewArgs && "bg-gray-200",
						!viewArgs && isDarkMode && "!text-gray-100"
					)}
					onClick={() => setViewArgs(!viewArgs)}
				>
					{viewArgs ? "Hide" : "View"} Args
				</button>
			</div>
			{eventsCount ? (
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
			) : (
				<a
					href={`/address/${extrinsic?.signer}`}
					className={clsx(
						"text-sm font-mono prose truncate text-blue-600",
						isDarkMode && "text-blue-200"
					)}
				>
					{extrinsic?.signer}
				</a>
			)}
			<p>{getDistance(extrinsic?.created_at as string)}</p>
			{viewArgs && (
				<div className="border p-2 max-w-fit min-w-fit shadow rounded">
					<JSONPretty
						data={extrinsic?.call_args}
						className={clsx(
							"text-xs text-gray-600",
							isDarkMode && "!text-gray-100"
						)}
					/>
				</div>
			)}
		</>
	);
};
