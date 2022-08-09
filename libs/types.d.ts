export interface AcalaBlock {
	__typename?: "Block";
	id: string;
	number?: any | null;
	timestamp?: any | null;
	parentHash?: string | null;
	extrinsics: {
		__typename?: "ExtrinsicsConnection";
		edges: Array<{
			__typename?: "ExtrinsicsEdge";
			node?: { __typename?: "Extrinsic"; id: string } | null;
		}>;
	};
}

export interface AcalaTransfer {
	__typename?: "Transfer";
	id: string;
	fromId?: string | null;
	toId?: string | null;
	tokenId?: string | null;
	amount?: string | null;
	timestamp?: any | null;
}

export type AcalaBlocks = Array<AcalaBlock | null>;
export type AcalaTransfers = Array<AcalaTransfer | null>;
