import "@/libs/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider, Hydrate } from "@tanstack/react-query";

import { queryClient } from "@/libs/client";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<h1 className="font-mono text-center text-2xl pt-6">
					<a
						href="/"
						className="p-2 border-blue-600 hover:border-b-2 duration-100"
					>
						Acala Explorer
					</a>
				</h1>
				<Component {...pageProps} />
			</Hydrate>
		</QueryClientProvider>
	);
}

export default MyApp;
