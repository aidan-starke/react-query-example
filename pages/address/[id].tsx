import type { GetServerSideProps, NextPage } from "next";
import { fetchData } from "@/libs/utils";
import {
	GetExtrinsicsByAccountDocument,
	GetExtrinsicsByAccountQuery,
	useGetExtrinsicsByAccountQuery,
} from "@/libs/api/generated";
import { useAtomPolling } from "@/libs/hooks";
import { useTheme } from "@/libs/hooks";
import clsx from "clsx";
import { Extrinsic, Layout } from "@/libs/components";
import { atom, useAtom } from "jotai";
import { useHydrateAtoms } from "jotai/utils";

export const getServerSideProps: GetServerSideProps = async (context) => {
	const address = context?.params?.id;
	const initialExtrinsics = (await fetchData(GetExtrinsicsByAccountDocument, {
		account: address,
	})) as GetExtrinsicsByAccountQuery;

	return {
		props: {
			address,
			initialExtrinsics,
		},
	};
};

const extrinsicAtom = atom<GetExtrinsicsByAccountQuery>(
	{} as GetExtrinsicsByAccountQuery
);

interface AddressProps {
	address: string;
	initialExtrinsics: GetExtrinsicsByAccountQuery;
}

const Address: NextPage<AddressProps> = ({ address, initialExtrinsics }) => {
	useHydrateAtoms([[extrinsicAtom, initialExtrinsics]] as const);

	const [{ app_extrinsics: extrinsics }, setExtrinsics] =
		useAtom(extrinsicAtom);
	useAtomPolling(setExtrinsics, useGetExtrinsicsByAccountQuery, {
		account: address,
	});

	const { isDarkMode } = useTheme();

	return (
		<div className="h-screen p-8 m-auto space-y-4 max-h-[90vh]">
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
			<div className="border-2 rounded h-full p-2 overflow-y-auto">
				<Layout.TableRow rowClassName="text-lg grid-cols-4">
					<p>Tx Hash</p>
					<p>Method</p>
					<p>Events</p>
					<p>Age</p>
				</Layout.TableRow>
				{extrinsics?.map((extrinsic) => (
					<Layout.TableRow
						rowClassName="space-y-px grid-cols-4"
						key={extrinsic?.hash}
					>
						<Extrinsic
							extrinsic={extrinsic}
							eventsCount={extrinsic?.events_aggregate?.aggregate?.count}
						/>
					</Layout.TableRow>
				))}
			</div>
		</div>
	);
};

export default Address;
