export interface AcalaBlock {
	__typename?: "Block";
	id: string;
	number?: any | null;
	extrinsics: {
		__typename?: "ExtrinsicsConnection";
		edges: Array<{
			__typename?: "ExtrinsicsEdge";
			node?: { __typename?: "Extrinsic"; id: string } | null;
		}>;
	};
}
