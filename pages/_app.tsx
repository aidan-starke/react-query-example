import "@/libs/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider, Hydrate } from "@tanstack/react-query";

import { queryClient } from "@/libs/client";
import { useTheme } from "@/libs/hooks";
import clsx from "clsx";
import { ThemeSwitch } from "@/libs/components";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
	const isDarkMode = useTheme((state) => state.theme === "Dark");

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<div
					className={clsx(
						"h-screen w-screen",
						isDarkMode && "bg-gray-600 text-gray-100"
					)}
				>
					<h1 className="font-mono text-center text-2xl pt-6">
						<a
							href="/"
							className={clsx(
								"p-2 border-blue-600 hover:border-b-2 duration-100",
								isDarkMode && "border-blue-200"
							)}
						>
							Acala Explorer
						</a>
					</h1>
					<ThemeSwitch />
					<Head>
						<title>Acala Explorer</title>
					</Head>
					<Component {...pageProps} />
				</div>
			</Hydrate>
		</QueryClientProvider>
	);
}

export default MyApp;
