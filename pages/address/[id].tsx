import type { GetServerSideProps, NextPage } from "next";
import { prefetch } from "@/libs/utils/prefetch";
import {
	GetAccountByIdDocument,
	GetAccountByIdQuery,
	useGetAccountByIdQuery,
} from "@/libs/api/generated";
import { usePolling } from "@/libs/hooks";
import { dehydrate } from "@tanstack/react-query";
import { queryClient } from "@/libs/client";
import { Transfer } from "@/libs/components";

export const getServerSideProps: GetServerSideProps = async (context) => {
	const address = context?.params?.id;
	await prefetch("GetAccountById", GetAccountByIdDocument);

	return {
		props: {
			address,
			dehydratedState: dehydrate(queryClient),
		},
	};
};

interface AddressProps {
	address: string;
	accountData: GetAccountByIdQuery;
}

const Address: NextPage<AddressProps> = ({ address, accountData }) => {
	const {
		transfers: [transfersOut, transfersIn],
	} = useAccount(address, accountData);

	return (
		<div className="h-screen p-8 m-auto space-y-4">
			<div>
				<h1 className="text-xl">
					Address <span className="prose font-mono text-sm">{address}</span>
				</h1>
			</div>
			<div className="grid grid-cols-2 gap-4">
				<div>
					<h1 className="text-xl">Transfers In</h1>
					<div className="border-2 rounded h-full p-2 overflow-y-auto">
						{transfersIn?.map((transfer) => (
							<Transfer
								key={transfer?.id}
								timestamp={transfer?.timestamp}
								from={transfer?.fromId}
								to={transfer?.toId}
								amount={transfer?.amount}
								token={transfer?.tokenId}
							/>
						))}
					</div>
				</div>
				<div>
					<h1 className="text-xl">Transfers Out</h1>
					<div className="border-2 rounded h-full p-2 overflow-y-auto">
						{transfersOut?.map((transfer) => (
							<Transfer
								key={transfer?.id}
								timestamp={transfer?.timestamp}
								from={transfer?.fromId}
								to={transfer?.toId}
								amount={transfer?.amount}
								token={transfer?.tokenId}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Address;

const useAccount = (address: string, initialData: GetAccountByIdQuery) => {
	const data = usePolling<GetAccountByIdQuery>(
		initialData,
		useGetAccountByIdQuery,
		{ id: address }
	);

	const account = data?.account;
	const transfersOut = account?.transferOut?.nodes;
	const transfersIn = account?.transferIn?.nodes;

	return {
		account: account,
		transfers: [transfersOut, transfersIn],
	};
};
