export interface Extrinsic {
	__typename?: "app_extrinsics";
	created_at: any;
	hash: string;
	signer?: string | null;
	call_section: string;
	call_method: string;
	call_args?: any | null;
}

export type Extrinsics = Array<Extrinsic>;
