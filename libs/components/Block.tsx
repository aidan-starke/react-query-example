import { FC } from "react";
import { getDistance } from "@/libs/utils";

interface BlockProps {
	hash: string | undefined;
	height: number | undefined;
	timestamp: string | undefined;
	parentHash: string | null | undefined;
	extrinsics: (string | undefined)[] | undefined;
}

export const Block: FC<BlockProps> = ({
	hash,
	height,
	timestamp,
	parentHash,
	extrinsics,
}) => {
	return (
		<div className="p-4 grid grid-cols-3 items-center border-b">
			<div className="flex space-x-2">
				<div className="prose bg-gray-200 h-12 w-12 flex items-center rounded">
					<p className="text-center w-full">Bk</p>
				</div>
				<div>
					<a
						className="text-blue-600 font-mono text-sm"
						href={`/extrinsics/${hash}`}
					>
						{height}
					</a>
					<p className="text-sm">{getDistance(timestamp as string)}</p>
				</div>
			</div>

			<div className="text-sm flex">
				<p>
					<span className="font-mono text-gray-500">
						{extrinsics?.length ?? 0}
					</span>{" "}
					{extrinsics?.length === 1 ? "extrinsic" : "extrinsics"}
				</p>
			</div>

			<div className="text-sm space-y-px">
				<p className="flex">
					Hash&nbsp;
					<span className="font-mono text-gray-500 truncate">{hash}</span>
				</p>
				<p className="flex">
					Parent&nbsp;
					<span className="font-mono text-gray-500 truncate">{parentHash}</span>
				</p>
			</div>
		</div>
	);
};
