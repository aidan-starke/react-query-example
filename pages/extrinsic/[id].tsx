import type { GetServerSideProps, NextPage } from "next";
import { fetchData } from "@/libs/utils/prefetch";
import {
	GetExtrinsicByIdDocument,
	GetExtrinsicByIdQuery,
} from "@/libs/api/generated";
import { useTheme } from "@/libs/hooks";
import clsx from "clsx";
import { Layout } from "@/libs/components";
import JSONPretty from "react-json-pretty";

export const getServerSideProps: GetServerSideProps = async (context) => {
	const id = context?.params?.id as string;
	const { app_extrinsics_by_pk: extrinsic } = (await fetchData(
		GetExtrinsicByIdDocument,
		{
			id,
		}
	)) as GetExtrinsicByIdQuery;

	return {
		props: {
			id,
			extrinsic,
		},
	};
};

interface ExtrinsicProps {
	id: string;
	extrinsic: GetExtrinsicByIdQuery;
}

const Extrinsic: NextPage<ExtrinsicProps> = ({ id, extrinsic }) => {
	const isDarkMode = useTheme((state) => state.theme === "Dark");

	return (
		<div className="h-screen p-8 m-auto space-y-4 max-h-[90vh]">
			<div>
				<h1 className="text-xl">
					Extrinsic{" "}
					<span
						className={clsx(
							"prose font-mono text-sm",
							isDarkMode && "text-gray-300"
						)}
					>
						{id}
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
				<JSONPretty data={extrinsic} />
			</div>
		</div>
	);
};

export default Extrinsic;
