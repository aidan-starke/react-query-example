import { GetExtrinsicByIdQuery } from "@/libs/api/generated";
import { getDistance } from "@/libs/utils";
import { FC, useState } from "react";
import JSONPretty from "react-json-pretty";
import clsx from "clsx";
import { useTheme } from "@/libs/hooks";

interface ExtrinsicProps {
	extrinsic: GetExtrinsicByIdQuery["extrinsic"];
}

export const Extrinsic: FC<ExtrinsicProps> = ({ extrinsic }) => {
	const [viewArgs, setViewArgs] = useState<boolean>(false);
	const isDarkMode = useTheme((state) => state.theme === "Dark");

	return (
		<>
			<p
				className={clsx(
					"truncate text-sm font-mono prose",
					isDarkMode && "text-gray-300"
				)}
			>
				{extrinsic?.id}
			</p>
			<div className="flex items-center">
				<p
					className={clsx(
						"prose flex-1 font-mono text-sm",
						isDarkMode && "text-gray-300"
					)}
				>
					{extrinsic?.section}.{extrinsic?.method}
				</p>
				<button
					className={clsx(
						"font-mono text-xs border p-2 shadow rounded text-gray-600 duration-300",
						viewArgs && "bg-gray-200",
						!viewArgs && isDarkMode && "text-gray-100"
					)}
					onClick={() => setViewArgs(!viewArgs)}
				>
					{viewArgs ? "Hide" : "View"} Args
				</button>
			</div>
			<a
				href={`/address/${extrinsic?.signerId}`}
				className={clsx(
					"text-sm font-mono prose truncate text-blue-600",
					isDarkMode && "text-blue-200"
				)}
			>
				{extrinsic?.signerId}
			</a>
			<p>{getDistance(extrinsic?.timestamp as string)}</p>
			{viewArgs && (
				<div className="border p-2 max-w-fit min-w-fit shadow rounded">
					<JSONPretty
						data={extrinsic?.args}
						className={clsx(
							"text-xs text-gray-600",
							isDarkMode && "text-gray-100"
						)}
					/>
				</div>
			)}
		</>
	);
};
