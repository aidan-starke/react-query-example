import type { GetServerSideProps, NextPage } from "next";
import { Layout } from "@/libs/components/Layout";
import { fetchData } from "@/libs/utils/prefetch";
import {
	GetAccountByIdDocument,
	GetAccountByIdQuery,
	GetExtrinsicByIdDocument,
	useGetAccountByIdQuery,
} from "@/libs/api/generated";
import { usePolling } from "@/libs/hooks";

interface AccountTransfer {
	__typename?: "Transfer";
	id: string;
	fromId?: string | null;
	toId?: string | null;
	tokenId?: string | null;
	amount?: string | null;
}

type AccountTransfers = Array<AccountTransfer>;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const address = context?.params?.id;
	const accountData = (await fetchData(GetAccountByIdDocument, {
		id: address,
	})) as GetAccountByIdQuery;

	const transfersOut = accountData?.account?.transferOut?.nodes ?? [];
	const transfersIn = accountData?.account?.transferIn?.nodes ?? [];

	return {
		props: {
			address,
			initialData: accountData,
			transfers: [transfersOut, transfersIn],
		},
	};
};

interface AddressProps {
	address: string;
	initialData: GetAccountByIdQuery;
	transfers: [AccountTransfers, AccountTransfers];
}

const Address: NextPage<AddressProps> = ({
	address,
	initialData,
	transfers,
}) => {
	const [transfersOut, transfersIn] = transfers;

	const accountData = usePolling<GetAccountByIdQuery>(
		initialData,
		useGetAccountByIdQuery,
		{ id: address }
	);

	console.log({ accountData });

	return (
		<div className="h-screen p-8 m-auto space-y-4">
			<div>
				<h1 className="text-xl">
					Address <span className="prose font-mono text-sm">{address}</span>
				</h1>
			</div>
			<div className="border-2 rounded h-full p-2 overflow-y-auto">
				<Layout.TableRow rowClassName="text-lg grid-cols-7">
					<p>Tx Hash</p>
					<p>Method</p>
					<p>Block</p>
					<p>Age</p>
					<p>From</p>
					<p>To</p>
					<p>Value</p>
				</Layout.TableRow>
			</div>
		</div>
	);
};

export default Address;
