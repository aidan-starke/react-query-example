import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient(
	"https://api.subquery.network/sq/AcalaNetwork/acala"
);
