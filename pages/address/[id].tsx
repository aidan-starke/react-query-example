import type { GetServerSideProps, NextPage } from "next";
import { fetchData } from "@/libs/utils/prefetch";
import {
	GetAccountByIdDocument,
	GetAccountByIdQuery,
	useGetAccountByIdQuery,
} from "@/libs/api/generated";
import { usePolling } from "@/libs/hooks";
import { Transfer } from "@/libs/components";
import { useTheme } from "@/libs/hooks";
import clsx from "clsx";

export const getServerSideProps: GetServerSideProps = async (context) => {
	const address = context?.params?.id;
	const accountData = (await fetchData(GetAccountByIdDocument, {
		id: address,
	})) as GetAccountByIdQuery;

	return {
		props: {
			address,
			accountData,
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
	const isDarkMode = useTheme((state) => state.theme === "Dark");

	return (
		<div className="h-screen p-8 m-auto space-y-4 max-h-[95vh]">
			<div>
				<h1 className="text-xl">
					Address{" "}
					<span
						className={clsx(
							"prose font-mono text-sm",
							isDarkMode && "text-gray-300"
						)}
					>
						{address}
					</span>
				</h1>
			</div>
			<div className="grid grid-cols-2 gap-4">
				<div>
					<div
						className="border-2 rounded h-full p-2 overflow-y-auto max-h-[85vh]"
						suppressHydrationWarning
					>
						<h1 className="text-xl font-mono p-2">Transfers In</h1>
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
					<div
						className="border-2 rounded h-full p-2 overflow-y-auto max-h-[85vh]"
						suppressHydrationWarning
					>
						<h1 className="text-xl font-mono p-2">Transfers Out</h1>
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
		account,
		transfers: [transfersOut, transfersIn],
	};
};
