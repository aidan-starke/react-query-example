import { GetExtrinsicByIdQuery } from "@/libs/api/generated";
import { getDistance } from "@/libs/utils";
import { FC, useState } from "react";
import JSONPretty from "react-json-pretty";
import clsx from "clsx";

interface ExtrinsicProps {
	extrinsic: GetExtrinsicByIdQuery["extrinsic"];
}

export const Extrinsic: FC<ExtrinsicProps> = ({ extrinsic }) => {
	const [viewArgs, setViewArgs] = useState<boolean>(false);

	return (
		<>
			<p className="truncate text-sm font-mono prose">{extrinsic?.id}</p>
			<div className="flex items-center">
				<p className="prose flex-1 font-mono text-sm">
					{extrinsic?.section}.{extrinsic?.method}
				</p>
				<button
					className={clsx(
						"font-mono text-xs border p-2 shadow rounded text-gray-600 duration-300",
						viewArgs && "bg-gray-200"
					)}
					onClick={() => setViewArgs(!viewArgs)}
				>
					{viewArgs ? "Hide" : "View"} Args
				</button>
			</div>
			<a
				href={`/address/${extrinsic?.signerId}`}
				className="text-sm font-mono prose truncate text-blue-600"
			>
				{extrinsic?.signerId}
			</a>
			<p>{getDistance(extrinsic?.timestamp as string)}</p>
			{viewArgs && (
				<div className="border p-2 max-w-fit min-w-fit shadow rounded">
					<JSONPretty
						data={extrinsic?.args}
						className="text-xs text-gray-600"
					/>
				</div>
			)}
		</>
	);
};
