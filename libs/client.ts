import { GraphQLClient } from "graphql-request";
import { QueryClient } from "@tanstack/react-query";

export const client = new GraphQLClient(
	"https://api.subquery.network/sq/AcalaNetwork/acala"
);

export const queryClient = new QueryClient();
