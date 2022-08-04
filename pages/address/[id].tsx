import type { GetServerSideProps, NextPage } from "next";
import { Layout } from "@/libs/components/Layout";

export const getServerSideProps: GetServerSideProps = async (context) => {
	return {
		props: {
			address: context?.params?.id,
		},
	};
};

interface AddressProps {
	address: string;
}

const Address: NextPage<AddressProps> = ({ address }) => {
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
