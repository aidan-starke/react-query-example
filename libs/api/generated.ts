import { GraphQLClient } from "graphql-request";
import { RequestInit } from "graphql-request/dist/types.dom";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};

export function fetcher<TData, TVariables>(
	client: GraphQLClient,
	query: string,
	variables?: TVariables,
	headers?: RequestInit["headers"]
) {
	return async (): Promise<TData> =>
		client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	BigFloat: any;
	Cursor: any;
	Date: any;
	Datetime: any;
	JSON: any;
};

export type Account = Node & {
	__typename?: "Account";
	/** Reads and enables pagination through a set of `Account`. */
	accountsByTransferFromIdAndToId: AccountAccountsByTransferFromIdAndToIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Account`. */
	accountsByTransferToIdAndFromId: AccountAccountsByTransferToIdAndFromIdManyToManyConnection;
	/** Reads and enables pagination through a set of `BalanceChangedRecord`. */
	balanceChangedRecords: BalanceChangedRecordsConnection;
	/** Reads and enables pagination through a set of `Balance`. */
	balances: BalancesConnection;
	/** Reads and enables pagination through a set of `Block`. */
	blocksByExtrinsicSignerIdAndBlockId: AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Block`. */
	blocksByOracleFeedRecordAccountIdAndBlockId: AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Call`. */
	calls: CallsConnection;
	/** Reads and enables pagination through a set of `Call`. */
	callsByCallSignerIdAndParentCallId: AccountCallsByCallSignerIdAndParentCallIdManyToManyConnection;
	/** Reads a single `Block` that is related to this `Account`. */
	createAtBlock?: Maybe<Block>;
	createAtBlockId?: Maybe<Scalars["String"]>;
	/** Reads and enables pagination through a set of `DexAction`. */
	dexActions: DexActionsConnection;
	/** Reads and enables pagination through a set of `Extrinsic`. */
	extrinsics: ExtrinsicsConnection;
	/** Reads and enables pagination through a set of `Extrinsic`. */
	extrinsicsByCallSignerIdAndExtrinsicId: AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Extrinsic`. */
	extrinsicsByDexActionAccountIdAndExtrinsicId: AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Extrinsic`. */
	extrinsicsByHomaActionAccountIdAndExtrinsicId: AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Extrinsic`. */
	extrinsicsByIncentiveActionAccountIdAndExtrinsicId: AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Extrinsic`. */
	extrinsicsByLoanActionAccountIdAndExtrinsicId: AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Extrinsic`. */
	extrinsicsByNFTActionAccountIdAndExtrinsicId: AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyConnection;
	/** Reads and enables pagination through a set of `HomaAction`. */
	homaActions: HomaActionsConnection;
	id: Scalars["String"];
	/** Reads and enables pagination through a set of `IncentiveAction`. */
	incentiveActions: IncentiveActionsConnection;
	/** Reads and enables pagination through a set of `LoanAction`. */
	loanActions: LoanActionsConnection;
	/** Reads and enables pagination through a set of `NFTAction`. */
	nFTActions: NftActionsConnection;
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
	/** Reads and enables pagination through a set of `OracleFeedRecord`. */
	oracleFeedRecords: OracleFeedRecordsConnection;
	/** Reads and enables pagination through a set of `Pool`. */
	poolsByDexActionAccountIdAndPoolId: AccountPoolsByDexActionAccountIdAndPoolIdManyToManyConnection;
	/** Reads and enables pagination through a set of `LoanPosition`. */
	position: LoanPositionsConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByBalanceAccountIdAndTokenId: AccountTokensByBalanceAccountIdAndTokenIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByBalanceChangedRecordAccountIdAndTokenId: AccountTokensByBalanceChangedRecordAccountIdAndTokenIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByDexActionAccountIdAndToken0Id: AccountTokensByDexActionAccountIdAndToken0IdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByDexActionAccountIdAndToken1Id: AccountTokensByDexActionAccountIdAndToken1IdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByLoanPositionOwnerIdAndCollateralId: AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByOracleFeedRecordAccountIdAndTokenId: AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByTransferFromIdAndTokenId: AccountTokensByTransferFromIdAndTokenIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByTransferToIdAndTokenId: AccountTokensByTransferToIdAndTokenIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Transfer`. */
	transferIn: TransfersConnection;
	/** Reads and enables pagination through a set of `Transfer`. */
	transferOut: TransfersConnection;
	txCount?: Maybe<Scalars["BigFloat"]>;
};

export type AccountAccountsByTransferFromIdAndToIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<AccountFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};

export type AccountAccountsByTransferToIdAndFromIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<AccountFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};

export type AccountBalanceChangedRecordsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<BalanceChangedRecordFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<BalanceChangedRecordsOrderBy>>;
};

export type AccountBalancesArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<BalanceFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<BalancesOrderBy>>;
};

export type AccountBlocksByExtrinsicSignerIdAndBlockIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<BlockFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};

export type AccountBlocksByOracleFeedRecordAccountIdAndBlockIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<BlockFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};

export type AccountCallsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<CallFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<CallsOrderBy>>;
};

export type AccountCallsByCallSignerIdAndParentCallIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<CallFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<CallsOrderBy>>;
};

export type AccountDexActionsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<DexActionFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<DexActionsOrderBy>>;
};

export type AccountExtrinsicsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<ExtrinsicFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<ExtrinsicsOrderBy>>;
};

export type AccountExtrinsicsByCallSignerIdAndExtrinsicIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<ExtrinsicFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<ExtrinsicsOrderBy>>;
};

export type AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<ExtrinsicFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<ExtrinsicsOrderBy>>;
};

export type AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<ExtrinsicFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<ExtrinsicsOrderBy>>;
};

export type AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<ExtrinsicFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<ExtrinsicsOrderBy>>;
};

export type AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<ExtrinsicFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<ExtrinsicsOrderBy>>;
};

export type AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<ExtrinsicFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<ExtrinsicsOrderBy>>;
};

export type AccountHomaActionsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<HomaActionFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<HomaActionsOrderBy>>;
};

export type AccountIncentiveActionsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<IncentiveActionFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<IncentiveActionsOrderBy>>;
};

export type AccountLoanActionsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<LoanActionFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<LoanActionsOrderBy>>;
};

export type AccountNFtActionsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<NftActionFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<NftActionsOrderBy>>;
};

export type AccountOracleFeedRecordsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<OracleFeedRecordFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<OracleFeedRecordsOrderBy>>;
};

export type AccountPoolsByDexActionAccountIdAndPoolIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<PoolFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<PoolsOrderBy>>;
};

export type AccountPositionArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<LoanPositionFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<LoanPositionsOrderBy>>;
};

export type AccountTokensByBalanceAccountIdAndTokenIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type AccountTokensByBalanceChangedRecordAccountIdAndTokenIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type AccountTokensByDexActionAccountIdAndToken0IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type AccountTokensByDexActionAccountIdAndToken1IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type AccountTokensByLoanPositionOwnerIdAndCollateralIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type AccountTokensByOracleFeedRecordAccountIdAndTokenIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type AccountTokensByTransferFromIdAndTokenIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type AccountTokensByTransferToIdAndTokenIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type AccountTransferInArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TransferFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TransfersOrderBy>>;
};

export type AccountTransferOutArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TransferFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TransfersOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Transfer`. */
export type AccountAccountsByTransferFromIdAndToIdManyToManyConnection = {
	__typename?: "AccountAccountsByTransferFromIdAndToIdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<AccountAggregates>;
	/** A list of edges which contains the `Account`, info from the `Transfer`, and the cursor to aid in pagination. */
	edges: Array<AccountAccountsByTransferFromIdAndToIdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<AccountAggregates>>;
	/** A list of `Account` objects. */
	nodes: Array<Maybe<Account>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Account` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Account` values, with data from `Transfer`. */
export type AccountAccountsByTransferFromIdAndToIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<AccountsGroupBy>;
		having?: InputMaybe<AccountsHavingInput>;
	};

/** A `Account` edge in the connection, with data from `Transfer`. */
export type AccountAccountsByTransferFromIdAndToIdManyToManyEdge = {
	__typename?: "AccountAccountsByTransferFromIdAndToIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Account` at the end of the edge. */
	node?: Maybe<Account>;
	/** Reads and enables pagination through a set of `Transfer`. */
	transferIn: TransfersConnection;
};

/** A `Account` edge in the connection, with data from `Transfer`. */
export type AccountAccountsByTransferFromIdAndToIdManyToManyEdgeTransferInArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<TransferFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<TransfersOrderBy>>;
	};

/** A connection to a list of `Account` values, with data from `Transfer`. */
export type AccountAccountsByTransferToIdAndFromIdManyToManyConnection = {
	__typename?: "AccountAccountsByTransferToIdAndFromIdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<AccountAggregates>;
	/** A list of edges which contains the `Account`, info from the `Transfer`, and the cursor to aid in pagination. */
	edges: Array<AccountAccountsByTransferToIdAndFromIdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<AccountAggregates>>;
	/** A list of `Account` objects. */
	nodes: Array<Maybe<Account>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Account` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Account` values, with data from `Transfer`. */
export type AccountAccountsByTransferToIdAndFromIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<AccountsGroupBy>;
		having?: InputMaybe<AccountsHavingInput>;
	};

/** A `Account` edge in the connection, with data from `Transfer`. */
export type AccountAccountsByTransferToIdAndFromIdManyToManyEdge = {
	__typename?: "AccountAccountsByTransferToIdAndFromIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Account` at the end of the edge. */
	node?: Maybe<Account>;
	/** Reads and enables pagination through a set of `Transfer`. */
	transferOut: TransfersConnection;
};

/** A `Account` edge in the connection, with data from `Transfer`. */
export type AccountAccountsByTransferToIdAndFromIdManyToManyEdgeTransferOutArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<TransferFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<TransfersOrderBy>>;
	};

export type AccountAggregates = {
	__typename?: "AccountAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

/** A connection to a list of `Block` values, with data from `Extrinsic`. */
export type AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyConnection = {
	__typename?: "AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<BlockAggregates>;
	/** A list of edges which contains the `Block`, info from the `Extrinsic`, and the cursor to aid in pagination. */
	edges: Array<AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<BlockAggregates>>;
	/** A list of `Block` objects. */
	nodes: Array<Maybe<Block>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Block` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Block` values, with data from `Extrinsic`. */
export type AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<BlocksGroupBy>;
		having?: InputMaybe<BlocksHavingInput>;
	};

/** A `Block` edge in the connection, with data from `Extrinsic`. */
export type AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyEdge = {
	__typename?: "AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** Reads and enables pagination through a set of `Extrinsic`. */
	extrinsics: ExtrinsicsConnection;
	/** The `Block` at the end of the edge. */
	node?: Maybe<Block>;
};

/** A `Block` edge in the connection, with data from `Extrinsic`. */
export type AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyEdgeExtrinsicsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<ExtrinsicFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<ExtrinsicsOrderBy>>;
	};

/** A connection to a list of `Block` values, with data from `OracleFeedRecord`. */
export type AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyConnection =
	{
		__typename?: "AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<BlockAggregates>;
		/** A list of edges which contains the `Block`, info from the `OracleFeedRecord`, and the cursor to aid in pagination. */
		edges: Array<AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<BlockAggregates>>;
		/** A list of `Block` objects. */
		nodes: Array<Maybe<Block>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Block` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Block` values, with data from `OracleFeedRecord`. */
export type AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<BlocksGroupBy>;
		having?: InputMaybe<BlocksHavingInput>;
	};

/** A `Block` edge in the connection, with data from `OracleFeedRecord`. */
export type AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyEdge = {
	__typename?: "AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Block` at the end of the edge. */
	node?: Maybe<Block>;
	/** Reads and enables pagination through a set of `OracleFeedRecord`. */
	oracleFeedRecords: OracleFeedRecordsConnection;
};

/** A `Block` edge in the connection, with data from `OracleFeedRecord`. */
export type AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyEdgeOracleFeedRecordsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<OracleFeedRecordFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<OracleFeedRecordsOrderBy>>;
	};

/** A connection to a list of `Call` values, with data from `Call`. */
export type AccountCallsByCallSignerIdAndParentCallIdManyToManyConnection = {
	__typename?: "AccountCallsByCallSignerIdAndParentCallIdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<CallAggregates>;
	/** A list of edges which contains the `Call`, info from the `Call`, and the cursor to aid in pagination. */
	edges: Array<AccountCallsByCallSignerIdAndParentCallIdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<CallAggregates>>;
	/** A list of `Call` objects. */
	nodes: Array<Maybe<Call>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Call` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Call` values, with data from `Call`. */
export type AccountCallsByCallSignerIdAndParentCallIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<CallsGroupBy>;
		having?: InputMaybe<CallsHavingInput>;
	};

/** A `Call` edge in the connection, with data from `Call`. */
export type AccountCallsByCallSignerIdAndParentCallIdManyToManyEdge = {
	__typename?: "AccountCallsByCallSignerIdAndParentCallIdManyToManyEdge";
	/** Reads and enables pagination through a set of `Call`. */
	calls: CallsConnection;
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Call` at the end of the edge. */
	node?: Maybe<Call>;
};

/** A `Call` edge in the connection, with data from `Call`. */
export type AccountCallsByCallSignerIdAndParentCallIdManyToManyEdgeCallsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<CallFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<CallsOrderBy>>;
};

/** A connection to a list of `Extrinsic` values, with data from `Call`. */
export type AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyConnection =
	{
		__typename?: "AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<ExtrinsicAggregates>;
		/** A list of edges which contains the `Extrinsic`, info from the `Call`, and the cursor to aid in pagination. */
		edges: Array<AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<ExtrinsicAggregates>>;
		/** A list of `Extrinsic` objects. */
		nodes: Array<Maybe<Extrinsic>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Extrinsic` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Extrinsic` values, with data from `Call`. */
export type AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<ExtrinsicsGroupBy>;
		having?: InputMaybe<ExtrinsicsHavingInput>;
	};

/** A `Extrinsic` edge in the connection, with data from `Call`. */
export type AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyEdge = {
	__typename?: "AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyEdge";
	/** Reads and enables pagination through a set of `Call`. */
	calls: CallsConnection;
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Extrinsic` at the end of the edge. */
	node?: Maybe<Extrinsic>;
};

/** A `Extrinsic` edge in the connection, with data from `Call`. */
export type AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyEdgeCallsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<CallFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<CallsOrderBy>>;
	};

/** A connection to a list of `Extrinsic` values, with data from `DexAction`. */
export type AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyConnection =
	{
		__typename?: "AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<ExtrinsicAggregates>;
		/** A list of edges which contains the `Extrinsic`, info from the `DexAction`, and the cursor to aid in pagination. */
		edges: Array<AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<ExtrinsicAggregates>>;
		/** A list of `Extrinsic` objects. */
		nodes: Array<Maybe<Extrinsic>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Extrinsic` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Extrinsic` values, with data from `DexAction`. */
export type AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<ExtrinsicsGroupBy>;
		having?: InputMaybe<ExtrinsicsHavingInput>;
	};

/** A `Extrinsic` edge in the connection, with data from `DexAction`. */
export type AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyEdge =
	{
		__typename?: "AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** Reads and enables pagination through a set of `DexAction`. */
		dexActions: DexActionsConnection;
		/** The `Extrinsic` at the end of the edge. */
		node?: Maybe<Extrinsic>;
	};

/** A `Extrinsic` edge in the connection, with data from `DexAction`. */
export type AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyEdgeDexActionsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<DexActionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<DexActionsOrderBy>>;
	};

/** A connection to a list of `Extrinsic` values, with data from `HomaAction`. */
export type AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyConnection =
	{
		__typename?: "AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<ExtrinsicAggregates>;
		/** A list of edges which contains the `Extrinsic`, info from the `HomaAction`, and the cursor to aid in pagination. */
		edges: Array<AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<ExtrinsicAggregates>>;
		/** A list of `Extrinsic` objects. */
		nodes: Array<Maybe<Extrinsic>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Extrinsic` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Extrinsic` values, with data from `HomaAction`. */
export type AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<ExtrinsicsGroupBy>;
		having?: InputMaybe<ExtrinsicsHavingInput>;
	};

/** A `Extrinsic` edge in the connection, with data from `HomaAction`. */
export type AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyEdge =
	{
		__typename?: "AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** Reads and enables pagination through a set of `HomaAction`. */
		homaActions: HomaActionsConnection;
		/** The `Extrinsic` at the end of the edge. */
		node?: Maybe<Extrinsic>;
	};

/** A `Extrinsic` edge in the connection, with data from `HomaAction`. */
export type AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyEdgeHomaActionsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<HomaActionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<HomaActionsOrderBy>>;
	};

/** A connection to a list of `Extrinsic` values, with data from `IncentiveAction`. */
export type AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyConnection =
	{
		__typename?: "AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<ExtrinsicAggregates>;
		/** A list of edges which contains the `Extrinsic`, info from the `IncentiveAction`, and the cursor to aid in pagination. */
		edges: Array<AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<ExtrinsicAggregates>>;
		/** A list of `Extrinsic` objects. */
		nodes: Array<Maybe<Extrinsic>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Extrinsic` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Extrinsic` values, with data from `IncentiveAction`. */
export type AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<ExtrinsicsGroupBy>;
		having?: InputMaybe<ExtrinsicsHavingInput>;
	};

/** A `Extrinsic` edge in the connection, with data from `IncentiveAction`. */
export type AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyEdge =
	{
		__typename?: "AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** Reads and enables pagination through a set of `IncentiveAction`. */
		incentiveActions: IncentiveActionsConnection;
		/** The `Extrinsic` at the end of the edge. */
		node?: Maybe<Extrinsic>;
	};

/** A `Extrinsic` edge in the connection, with data from `IncentiveAction`. */
export type AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyEdgeIncentiveActionsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<IncentiveActionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<IncentiveActionsOrderBy>>;
	};

/** A connection to a list of `Extrinsic` values, with data from `LoanAction`. */
export type AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyConnection =
	{
		__typename?: "AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<ExtrinsicAggregates>;
		/** A list of edges which contains the `Extrinsic`, info from the `LoanAction`, and the cursor to aid in pagination. */
		edges: Array<AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<ExtrinsicAggregates>>;
		/** A list of `Extrinsic` objects. */
		nodes: Array<Maybe<Extrinsic>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Extrinsic` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Extrinsic` values, with data from `LoanAction`. */
export type AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<ExtrinsicsGroupBy>;
		having?: InputMaybe<ExtrinsicsHavingInput>;
	};

/** A `Extrinsic` edge in the connection, with data from `LoanAction`. */
export type AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyEdge =
	{
		__typename?: "AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** Reads and enables pagination through a set of `LoanAction`. */
		loanActions: LoanActionsConnection;
		/** The `Extrinsic` at the end of the edge. */
		node?: Maybe<Extrinsic>;
	};

/** A `Extrinsic` edge in the connection, with data from `LoanAction`. */
export type AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyEdgeLoanActionsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<LoanActionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<LoanActionsOrderBy>>;
	};

/** A connection to a list of `Extrinsic` values, with data from `NFTAction`. */
export type AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyConnection =
	{
		__typename?: "AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<ExtrinsicAggregates>;
		/** A list of edges which contains the `Extrinsic`, info from the `NFTAction`, and the cursor to aid in pagination. */
		edges: Array<AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<ExtrinsicAggregates>>;
		/** A list of `Extrinsic` objects. */
		nodes: Array<Maybe<Extrinsic>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Extrinsic` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Extrinsic` values, with data from `NFTAction`. */
export type AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<ExtrinsicsGroupBy>;
		having?: InputMaybe<ExtrinsicsHavingInput>;
	};

/** A `Extrinsic` edge in the connection, with data from `NFTAction`. */
export type AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyEdge =
	{
		__typename?: "AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** Reads and enables pagination through a set of `NFTAction`. */
		nFTActions: NftActionsConnection;
		/** The `Extrinsic` at the end of the edge. */
		node?: Maybe<Extrinsic>;
	};

/** A `Extrinsic` edge in the connection, with data from `NFTAction`. */
export type AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyEdgeNFtActionsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<NftActionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<NftActionsOrderBy>>;
	};

/** A filter to be used against `Account` object types. All fields are combined with a logical ‘and.’ */
export type AccountFilter = {
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<AccountFilter>>;
	/** Filter by the object’s `createAtBlockId` field. */
	createAtBlockId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Negates the expression. */
	not?: InputMaybe<AccountFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<AccountFilter>>;
	/** Filter by the object’s `txCount` field. */
	txCount?: InputMaybe<BigFloatFilter>;
};

/** A connection to a list of `Pool` values, with data from `DexAction`. */
export type AccountPoolsByDexActionAccountIdAndPoolIdManyToManyConnection = {
	__typename?: "AccountPoolsByDexActionAccountIdAndPoolIdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<PoolAggregates>;
	/** A list of edges which contains the `Pool`, info from the `DexAction`, and the cursor to aid in pagination. */
	edges: Array<AccountPoolsByDexActionAccountIdAndPoolIdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<PoolAggregates>>;
	/** A list of `Pool` objects. */
	nodes: Array<Maybe<Pool>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Pool` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Pool` values, with data from `DexAction`. */
export type AccountPoolsByDexActionAccountIdAndPoolIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<PoolsGroupBy>;
		having?: InputMaybe<PoolsHavingInput>;
	};

/** A `Pool` edge in the connection, with data from `DexAction`. */
export type AccountPoolsByDexActionAccountIdAndPoolIdManyToManyEdge = {
	__typename?: "AccountPoolsByDexActionAccountIdAndPoolIdManyToManyEdge";
	/** Reads and enables pagination through a set of `DexAction`. */
	actions: DexActionsConnection;
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Pool` at the end of the edge. */
	node?: Maybe<Pool>;
};

/** A `Pool` edge in the connection, with data from `DexAction`. */
export type AccountPoolsByDexActionAccountIdAndPoolIdManyToManyEdgeActionsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<DexActionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<DexActionsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `Balance`. */
export type AccountTokensByBalanceAccountIdAndTokenIdManyToManyConnection = {
	__typename?: "AccountTokensByBalanceAccountIdAndTokenIdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<TokenAggregates>;
	/** A list of edges which contains the `Token`, info from the `Balance`, and the cursor to aid in pagination. */
	edges: Array<AccountTokensByBalanceAccountIdAndTokenIdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<TokenAggregates>>;
	/** A list of `Token` objects. */
	nodes: Array<Maybe<Token>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Token` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Token` values, with data from `Balance`. */
export type AccountTokensByBalanceAccountIdAndTokenIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `Balance`. */
export type AccountTokensByBalanceAccountIdAndTokenIdManyToManyEdge = {
	__typename?: "AccountTokensByBalanceAccountIdAndTokenIdManyToManyEdge";
	/** Reads and enables pagination through a set of `Balance`. */
	balances: BalancesConnection;
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
};

/** A `Token` edge in the connection, with data from `Balance`. */
export type AccountTokensByBalanceAccountIdAndTokenIdManyToManyEdgeBalancesArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<BalanceFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<BalancesOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `BalanceChangedRecord`. */
export type AccountTokensByBalanceChangedRecordAccountIdAndTokenIdManyToManyConnection =
	{
		__typename?: "AccountTokensByBalanceChangedRecordAccountIdAndTokenIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `BalanceChangedRecord`, and the cursor to aid in pagination. */
		edges: Array<AccountTokensByBalanceChangedRecordAccountIdAndTokenIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `BalanceChangedRecord`. */
export type AccountTokensByBalanceChangedRecordAccountIdAndTokenIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `BalanceChangedRecord`. */
export type AccountTokensByBalanceChangedRecordAccountIdAndTokenIdManyToManyEdge =
	{
		__typename?: "AccountTokensByBalanceChangedRecordAccountIdAndTokenIdManyToManyEdge";
		/** Reads and enables pagination through a set of `BalanceChangedRecord`. */
		balanceChangedRecords: BalanceChangedRecordsConnection;
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** The `Token` at the end of the edge. */
		node?: Maybe<Token>;
	};

/** A `Token` edge in the connection, with data from `BalanceChangedRecord`. */
export type AccountTokensByBalanceChangedRecordAccountIdAndTokenIdManyToManyEdgeBalanceChangedRecordsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<BalanceChangedRecordFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<BalanceChangedRecordsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `DexAction`. */
export type AccountTokensByDexActionAccountIdAndToken0IdManyToManyConnection = {
	__typename?: "AccountTokensByDexActionAccountIdAndToken0IdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<TokenAggregates>;
	/** A list of edges which contains the `Token`, info from the `DexAction`, and the cursor to aid in pagination. */
	edges: Array<AccountTokensByDexActionAccountIdAndToken0IdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<TokenAggregates>>;
	/** A list of `Token` objects. */
	nodes: Array<Maybe<Token>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Token` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Token` values, with data from `DexAction`. */
export type AccountTokensByDexActionAccountIdAndToken0IdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `DexAction`. */
export type AccountTokensByDexActionAccountIdAndToken0IdManyToManyEdge = {
	__typename?: "AccountTokensByDexActionAccountIdAndToken0IdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** Reads and enables pagination through a set of `DexAction`. */
	dexActionsByToken0Id: DexActionsConnection;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
};

/** A `Token` edge in the connection, with data from `DexAction`. */
export type AccountTokensByDexActionAccountIdAndToken0IdManyToManyEdgeDexActionsByToken0IdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<DexActionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<DexActionsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `DexAction`. */
export type AccountTokensByDexActionAccountIdAndToken1IdManyToManyConnection = {
	__typename?: "AccountTokensByDexActionAccountIdAndToken1IdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<TokenAggregates>;
	/** A list of edges which contains the `Token`, info from the `DexAction`, and the cursor to aid in pagination. */
	edges: Array<AccountTokensByDexActionAccountIdAndToken1IdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<TokenAggregates>>;
	/** A list of `Token` objects. */
	nodes: Array<Maybe<Token>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Token` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Token` values, with data from `DexAction`. */
export type AccountTokensByDexActionAccountIdAndToken1IdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `DexAction`. */
export type AccountTokensByDexActionAccountIdAndToken1IdManyToManyEdge = {
	__typename?: "AccountTokensByDexActionAccountIdAndToken1IdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** Reads and enables pagination through a set of `DexAction`. */
	dexActionsByToken1Id: DexActionsConnection;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
};

/** A `Token` edge in the connection, with data from `DexAction`. */
export type AccountTokensByDexActionAccountIdAndToken1IdManyToManyEdgeDexActionsByToken1IdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<DexActionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<DexActionsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `LoanPosition`. */
export type AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyConnection =
	{
		__typename?: "AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `LoanPosition`, and the cursor to aid in pagination. */
		edges: Array<AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `LoanPosition`. */
export type AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `LoanPosition`. */
export type AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyEdge = {
	__typename?: "AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** Reads and enables pagination through a set of `LoanPosition`. */
	loanPositionsByCollateralId: LoanPositionsConnection;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
};

/** A `Token` edge in the connection, with data from `LoanPosition`. */
export type AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyEdgeLoanPositionsByCollateralIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<LoanPositionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<LoanPositionsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `OracleFeedRecord`. */
export type AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyConnection =
	{
		__typename?: "AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `OracleFeedRecord`, and the cursor to aid in pagination. */
		edges: Array<AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `OracleFeedRecord`. */
export type AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `OracleFeedRecord`. */
export type AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyEdge = {
	__typename?: "AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
	/** Reads and enables pagination through a set of `OracleFeedRecord`. */
	oracleFeedRecords: OracleFeedRecordsConnection;
};

/** A `Token` edge in the connection, with data from `OracleFeedRecord`. */
export type AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyEdgeOracleFeedRecordsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<OracleFeedRecordFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<OracleFeedRecordsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `Transfer`. */
export type AccountTokensByTransferFromIdAndTokenIdManyToManyConnection = {
	__typename?: "AccountTokensByTransferFromIdAndTokenIdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<TokenAggregates>;
	/** A list of edges which contains the `Token`, info from the `Transfer`, and the cursor to aid in pagination. */
	edges: Array<AccountTokensByTransferFromIdAndTokenIdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<TokenAggregates>>;
	/** A list of `Token` objects. */
	nodes: Array<Maybe<Token>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Token` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Token` values, with data from `Transfer`. */
export type AccountTokensByTransferFromIdAndTokenIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `Transfer`. */
export type AccountTokensByTransferFromIdAndTokenIdManyToManyEdge = {
	__typename?: "AccountTokensByTransferFromIdAndTokenIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
	/** Reads and enables pagination through a set of `Transfer`. */
	transfers: TransfersConnection;
};

/** A `Token` edge in the connection, with data from `Transfer`. */
export type AccountTokensByTransferFromIdAndTokenIdManyToManyEdgeTransfersArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<TransferFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<TransfersOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `Transfer`. */
export type AccountTokensByTransferToIdAndTokenIdManyToManyConnection = {
	__typename?: "AccountTokensByTransferToIdAndTokenIdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<TokenAggregates>;
	/** A list of edges which contains the `Token`, info from the `Transfer`, and the cursor to aid in pagination. */
	edges: Array<AccountTokensByTransferToIdAndTokenIdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<TokenAggregates>>;
	/** A list of `Token` objects. */
	nodes: Array<Maybe<Token>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Token` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Token` values, with data from `Transfer`. */
export type AccountTokensByTransferToIdAndTokenIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `Transfer`. */
export type AccountTokensByTransferToIdAndTokenIdManyToManyEdge = {
	__typename?: "AccountTokensByTransferToIdAndTokenIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
	/** Reads and enables pagination through a set of `Transfer`. */
	transfers: TransfersConnection;
};

/** A `Token` edge in the connection, with data from `Transfer`. */
export type AccountTokensByTransferToIdAndTokenIdManyToManyEdgeTransfersArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TransferFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TransfersOrderBy>>;
};

/** A connection to a list of `Account` values. */
export type AccountsConnection = {
	__typename?: "AccountsConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<AccountAggregates>;
	/** A list of edges which contains the `Account` and cursor to aid in pagination. */
	edges: Array<AccountsEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<AccountAggregates>>;
	/** A list of `Account` objects. */
	nodes: Array<Maybe<Account>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Account` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Account` values. */
export type AccountsConnectionGroupedAggregatesArgs = {
	groupBy: Array<AccountsGroupBy>;
	having?: InputMaybe<AccountsHavingInput>;
};

/** A `Account` edge in the connection. */
export type AccountsEdge = {
	__typename?: "AccountsEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Account` at the end of the edge. */
	node?: Maybe<Account>;
};

/** Grouping methods for `Account` for usage during aggregation. */
export enum AccountsGroupBy {
	CreateAtBlockId = "CREATE_AT_BLOCK_ID",
	TxCount = "TX_COUNT",
}

/** Conditions for `Account` aggregates. */
export type AccountsHavingInput = {
	AND?: InputMaybe<Array<AccountsHavingInput>>;
	OR?: InputMaybe<Array<AccountsHavingInput>>;
};

/** Methods to use when ordering `Account`. */
export enum AccountsOrderBy {
	BalancesCountAsc = "BALANCES_COUNT_ASC",
	BalancesCountDesc = "BALANCES_COUNT_DESC",
	BalanceChangedRecordsCountAsc = "BALANCE_CHANGED_RECORDS_COUNT_ASC",
	BalanceChangedRecordsCountDesc = "BALANCE_CHANGED_RECORDS_COUNT_DESC",
	CallsCountAsc = "CALLS_COUNT_ASC",
	CallsCountDesc = "CALLS_COUNT_DESC",
	CreateAtBlockIdAsc = "CREATE_AT_BLOCK_ID_ASC",
	CreateAtBlockIdDesc = "CREATE_AT_BLOCK_ID_DESC",
	DexActionsCountAsc = "DEX_ACTIONS_COUNT_ASC",
	DexActionsCountDesc = "DEX_ACTIONS_COUNT_DESC",
	ExtrinsicsCountAsc = "EXTRINSICS_COUNT_ASC",
	ExtrinsicsCountDesc = "EXTRINSICS_COUNT_DESC",
	HomaActionsCountAsc = "HOMA_ACTIONS_COUNT_ASC",
	HomaActionsCountDesc = "HOMA_ACTIONS_COUNT_DESC",
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	IncentiveActionsCountAsc = "INCENTIVE_ACTIONS_COUNT_ASC",
	IncentiveActionsCountDesc = "INCENTIVE_ACTIONS_COUNT_DESC",
	LoanActionsCountAsc = "LOAN_ACTIONS_COUNT_ASC",
	LoanActionsCountDesc = "LOAN_ACTIONS_COUNT_DESC",
	Natural = "NATURAL",
	NFtactionsCountAsc = "N_FTACTIONS_COUNT_ASC",
	NFtactionsCountDesc = "N_FTACTIONS_COUNT_DESC",
	OracleFeedRecordsCountAsc = "ORACLE_FEED_RECORDS_COUNT_ASC",
	OracleFeedRecordsCountDesc = "ORACLE_FEED_RECORDS_COUNT_DESC",
	PositionCountAsc = "POSITION_COUNT_ASC",
	PositionCountDesc = "POSITION_COUNT_DESC",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	TransferInCountAsc = "TRANSFER_IN_COUNT_ASC",
	TransferInCountDesc = "TRANSFER_IN_COUNT_DESC",
	TransferOutCountAsc = "TRANSFER_OUT_COUNT_ASC",
	TransferOutCountDesc = "TRANSFER_OUT_COUNT_DESC",
	TxCountAsc = "TX_COUNT_ASC",
	TxCountDesc = "TX_COUNT_DESC",
}

export type Balance = Node & {
	__typename?: "Balance";
	/** Reads a single `Account` that is related to this `Balance`. */
	account?: Maybe<Account>;
	accountId?: Maybe<Scalars["String"]>;
	balance?: Maybe<Scalars["String"]>;
	collateral?: Maybe<Scalars["String"]>;
	id: Scalars["String"];
	incentive?: Maybe<Scalars["String"]>;
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
	/** Reads a single `Token` that is related to this `Balance`. */
	token?: Maybe<Token>;
	tokenId?: Maybe<Scalars["String"]>;
	total?: Maybe<Scalars["String"]>;
};

export type BalanceAggregates = {
	__typename?: "BalanceAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

export type BalanceChangedRecord = Node & {
	__typename?: "BalanceChangedRecord";
	/** Reads a single `Account` that is related to this `BalanceChangedRecord`. */
	account?: Maybe<Account>;
	accountId?: Maybe<Scalars["String"]>;
	balance?: Maybe<Scalars["String"]>;
	blockNumber?: Maybe<Scalars["BigFloat"]>;
	collateral?: Maybe<Scalars["String"]>;
	id: Scalars["String"];
	incentive?: Maybe<Scalars["String"]>;
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
	timestamp?: Maybe<Scalars["Datetime"]>;
	/** Reads a single `Token` that is related to this `BalanceChangedRecord`. */
	token?: Maybe<Token>;
	tokenId?: Maybe<Scalars["String"]>;
	total?: Maybe<Scalars["String"]>;
};

export type BalanceChangedRecordAggregates = {
	__typename?: "BalanceChangedRecordAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

/** A filter to be used against `BalanceChangedRecord` object types. All fields are combined with a logical ‘and.’ */
export type BalanceChangedRecordFilter = {
	/** Filter by the object’s `accountId` field. */
	accountId?: InputMaybe<StringFilter>;
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<BalanceChangedRecordFilter>>;
	/** Filter by the object’s `balance` field. */
	balance?: InputMaybe<StringFilter>;
	/** Filter by the object’s `blockNumber` field. */
	blockNumber?: InputMaybe<BigFloatFilter>;
	/** Filter by the object’s `collateral` field. */
	collateral?: InputMaybe<StringFilter>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Filter by the object’s `incentive` field. */
	incentive?: InputMaybe<StringFilter>;
	/** Negates the expression. */
	not?: InputMaybe<BalanceChangedRecordFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<BalanceChangedRecordFilter>>;
	/** Filter by the object’s `timestamp` field. */
	timestamp?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `tokenId` field. */
	tokenId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `total` field. */
	total?: InputMaybe<StringFilter>;
};

/** A connection to a list of `BalanceChangedRecord` values. */
export type BalanceChangedRecordsConnection = {
	__typename?: "BalanceChangedRecordsConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<BalanceChangedRecordAggregates>;
	/** A list of edges which contains the `BalanceChangedRecord` and cursor to aid in pagination. */
	edges: Array<BalanceChangedRecordsEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<BalanceChangedRecordAggregates>>;
	/** A list of `BalanceChangedRecord` objects. */
	nodes: Array<Maybe<BalanceChangedRecord>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `BalanceChangedRecord` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `BalanceChangedRecord` values. */
export type BalanceChangedRecordsConnectionGroupedAggregatesArgs = {
	groupBy: Array<BalanceChangedRecordsGroupBy>;
	having?: InputMaybe<BalanceChangedRecordsHavingInput>;
};

/** A `BalanceChangedRecord` edge in the connection. */
export type BalanceChangedRecordsEdge = {
	__typename?: "BalanceChangedRecordsEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `BalanceChangedRecord` at the end of the edge. */
	node?: Maybe<BalanceChangedRecord>;
};

/** Grouping methods for `BalanceChangedRecord` for usage during aggregation. */
export enum BalanceChangedRecordsGroupBy {
	AccountId = "ACCOUNT_ID",
	Balance = "BALANCE",
	BlockNumber = "BLOCK_NUMBER",
	Collateral = "COLLATERAL",
	Incentive = "INCENTIVE",
	Timestamp = "TIMESTAMP",
	TokenId = "TOKEN_ID",
	Total = "TOTAL",
}

/** Conditions for `BalanceChangedRecord` aggregates. */
export type BalanceChangedRecordsHavingInput = {
	AND?: InputMaybe<Array<BalanceChangedRecordsHavingInput>>;
	OR?: InputMaybe<Array<BalanceChangedRecordsHavingInput>>;
};

/** Methods to use when ordering `BalanceChangedRecord`. */
export enum BalanceChangedRecordsOrderBy {
	AccountIdAsc = "ACCOUNT_ID_ASC",
	AccountIdDesc = "ACCOUNT_ID_DESC",
	BalanceAsc = "BALANCE_ASC",
	BalanceDesc = "BALANCE_DESC",
	BlockNumberAsc = "BLOCK_NUMBER_ASC",
	BlockNumberDesc = "BLOCK_NUMBER_DESC",
	CollateralAsc = "COLLATERAL_ASC",
	CollateralDesc = "COLLATERAL_DESC",
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	IncentiveAsc = "INCENTIVE_ASC",
	IncentiveDesc = "INCENTIVE_DESC",
	Natural = "NATURAL",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	TimestampAsc = "TIMESTAMP_ASC",
	TimestampDesc = "TIMESTAMP_DESC",
	TokenIdAsc = "TOKEN_ID_ASC",
	TokenIdDesc = "TOKEN_ID_DESC",
	TotalAsc = "TOTAL_ASC",
	TotalDesc = "TOTAL_DESC",
}

/** A filter to be used against `Balance` object types. All fields are combined with a logical ‘and.’ */
export type BalanceFilter = {
	/** Filter by the object’s `accountId` field. */
	accountId?: InputMaybe<StringFilter>;
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<BalanceFilter>>;
	/** Filter by the object’s `balance` field. */
	balance?: InputMaybe<StringFilter>;
	/** Filter by the object’s `collateral` field. */
	collateral?: InputMaybe<StringFilter>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Filter by the object’s `incentive` field. */
	incentive?: InputMaybe<StringFilter>;
	/** Negates the expression. */
	not?: InputMaybe<BalanceFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<BalanceFilter>>;
	/** Filter by the object’s `tokenId` field. */
	tokenId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `total` field. */
	total?: InputMaybe<StringFilter>;
};

/** A connection to a list of `Balance` values. */
export type BalancesConnection = {
	__typename?: "BalancesConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<BalanceAggregates>;
	/** A list of edges which contains the `Balance` and cursor to aid in pagination. */
	edges: Array<BalancesEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<BalanceAggregates>>;
	/** A list of `Balance` objects. */
	nodes: Array<Maybe<Balance>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Balance` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Balance` values. */
export type BalancesConnectionGroupedAggregatesArgs = {
	groupBy: Array<BalancesGroupBy>;
	having?: InputMaybe<BalancesHavingInput>;
};

/** A `Balance` edge in the connection. */
export type BalancesEdge = {
	__typename?: "BalancesEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Balance` at the end of the edge. */
	node?: Maybe<Balance>;
};

/** Grouping methods for `Balance` for usage during aggregation. */
export enum BalancesGroupBy {
	AccountId = "ACCOUNT_ID",
	Balance = "BALANCE",
	Collateral = "COLLATERAL",
	Incentive = "INCENTIVE",
	TokenId = "TOKEN_ID",
	Total = "TOTAL",
}

/** Conditions for `Balance` aggregates. */
export type BalancesHavingInput = {
	AND?: InputMaybe<Array<BalancesHavingInput>>;
	OR?: InputMaybe<Array<BalancesHavingInput>>;
};

/** Methods to use when ordering `Balance`. */
export enum BalancesOrderBy {
	AccountIdAsc = "ACCOUNT_ID_ASC",
	AccountIdDesc = "ACCOUNT_ID_DESC",
	BalanceAsc = "BALANCE_ASC",
	BalanceDesc = "BALANCE_DESC",
	CollateralAsc = "COLLATERAL_ASC",
	CollateralDesc = "COLLATERAL_DESC",
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	IncentiveAsc = "INCENTIVE_ASC",
	IncentiveDesc = "INCENTIVE_DESC",
	Natural = "NATURAL",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	TokenIdAsc = "TOKEN_ID_ASC",
	TokenIdDesc = "TOKEN_ID_DESC",
	TotalAsc = "TOTAL_ASC",
	TotalDesc = "TOTAL_DESC",
}

/** A filter to be used against BigFloat fields. All fields are combined with a logical ‘and.’ */
export type BigFloatFilter = {
	/** Not equal to the specified value, treating null like an ordinary value. */
	distinctFrom?: InputMaybe<Scalars["BigFloat"]>;
	/** Equal to the specified value. */
	equalTo?: InputMaybe<Scalars["BigFloat"]>;
	/** Greater than the specified value. */
	greaterThan?: InputMaybe<Scalars["BigFloat"]>;
	/** Greater than or equal to the specified value. */
	greaterThanOrEqualTo?: InputMaybe<Scalars["BigFloat"]>;
	/** Included in the specified list. */
	in?: InputMaybe<Array<Scalars["BigFloat"]>>;
	/** Is null (if `true` is specified) or is not null (if `false` is specified). */
	isNull?: InputMaybe<Scalars["Boolean"]>;
	/** Less than the specified value. */
	lessThan?: InputMaybe<Scalars["BigFloat"]>;
	/** Less than or equal to the specified value. */
	lessThanOrEqualTo?: InputMaybe<Scalars["BigFloat"]>;
	/** Equal to the specified value, treating null like an ordinary value. */
	notDistinctFrom?: InputMaybe<Scalars["BigFloat"]>;
	/** Not equal to the specified value. */
	notEqualTo?: InputMaybe<Scalars["BigFloat"]>;
	/** Not included in the specified list. */
	notIn?: InputMaybe<Array<Scalars["BigFloat"]>>;
};

export type Block = Node & {
	__typename?: "Block";
	/** Reads and enables pagination through a set of `Account`. */
	accountsByCreateAtBlockId: AccountsConnection;
	/** Reads and enables pagination through a set of `Account`. */
	accountsByExtrinsicBlockIdAndSignerId: BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Account`. */
	accountsByOracleFeedRecordBlockIdAndAccountId: BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Block`. */
	blocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockId: BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Block`. */
	blocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockId: BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Block`. */
	blocksByProvisionPoolEndAtBlockIdAndStartAtBlockId: BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Block`. */
	blocksByProvisionPoolStartAtBlockIdAndEndAtBlockId: BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Event`. */
	events: EventsConnection;
	extrinsicRoot?: Maybe<Scalars["String"]>;
	/** Reads and enables pagination through a set of `Extrinsic`. */
	extrinsics: ExtrinsicsConnection;
	/** Reads and enables pagination through a set of `Extrinsic`. */
	extrinsicsByEventBlockIdAndExtrinsicId: BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyConnection;
	id: Scalars["String"];
	/** Reads and enables pagination through a set of `LoanParam`. */
	loanParamsByStartAtBlockId: LoanParamsConnection;
	/** Reads and enables pagination through a set of `LoanParamsHistory`. */
	loanParamsHistoriesByEndAtBlockId: LoanParamsHistoriesConnection;
	/** Reads and enables pagination through a set of `LoanParamsHistory`. */
	loanParamsHistoriesByStartAtBlockId: LoanParamsHistoriesConnection;
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
	number?: Maybe<Scalars["BigFloat"]>;
	/** Reads and enables pagination through a set of `OracleFeedRecord`. */
	oracleFeedRecords: OracleFeedRecordsConnection;
	parentHash?: Maybe<Scalars["String"]>;
	/** Reads and enables pagination through a set of `ProvisionPool`. */
	provisionPoolsByEndAtBlockId: ProvisionPoolsConnection;
	/** Reads and enables pagination through a set of `ProvisionPool`. */
	provisionPoolsByStartAtBlockId: ProvisionPoolsConnection;
	specVersion?: Maybe<Scalars["String"]>;
	stateRoot?: Maybe<Scalars["String"]>;
	timestamp?: Maybe<Scalars["Datetime"]>;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByLoanParamStartAtBlockIdAndCollateralId: BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByLoanParamsHistoryEndAtBlockIdAndCollateralId: BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByLoanParamsHistoryStartAtBlockIdAndCollateralId: BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByOracleFeedRecordBlockIdAndTokenId: BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByProvisionPoolEndAtBlockIdAndPoolTokenId: BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByProvisionPoolEndAtBlockIdAndToken0Id: BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByProvisionPoolEndAtBlockIdAndToken1Id: BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByProvisionPoolStartAtBlockIdAndPoolTokenId: BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByProvisionPoolStartAtBlockIdAndToken0Id: BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByProvisionPoolStartAtBlockIdAndToken1Id: BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyConnection;
};

export type BlockAccountsByCreateAtBlockIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<AccountFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};

export type BlockAccountsByExtrinsicBlockIdAndSignerIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<AccountFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};

export type BlockAccountsByOracleFeedRecordBlockIdAndAccountIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<AccountFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};

export type BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<BlockFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};

export type BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<BlockFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};

export type BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<BlockFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};

export type BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<BlockFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};

export type BlockEventsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<EventFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

export type BlockExtrinsicsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<ExtrinsicFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<ExtrinsicsOrderBy>>;
};

export type BlockExtrinsicsByEventBlockIdAndExtrinsicIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<ExtrinsicFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<ExtrinsicsOrderBy>>;
};

export type BlockLoanParamsByStartAtBlockIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<LoanParamFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<LoanParamsOrderBy>>;
};

export type BlockLoanParamsHistoriesByEndAtBlockIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<LoanParamsHistoryFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<LoanParamsHistoriesOrderBy>>;
};

export type BlockLoanParamsHistoriesByStartAtBlockIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<LoanParamsHistoryFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<LoanParamsHistoriesOrderBy>>;
};

export type BlockOracleFeedRecordsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<OracleFeedRecordFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<OracleFeedRecordsOrderBy>>;
};

export type BlockProvisionPoolsByEndAtBlockIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<ProvisionPoolFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<ProvisionPoolsOrderBy>>;
};

export type BlockProvisionPoolsByStartAtBlockIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<ProvisionPoolFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<ProvisionPoolsOrderBy>>;
};

export type BlockTokensByLoanParamStartAtBlockIdAndCollateralIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type BlockTokensByOracleFeedRecordBlockIdAndTokenIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Extrinsic`. */
export type BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyConnection = {
	__typename?: "BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<AccountAggregates>;
	/** A list of edges which contains the `Account`, info from the `Extrinsic`, and the cursor to aid in pagination. */
	edges: Array<BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<AccountAggregates>>;
	/** A list of `Account` objects. */
	nodes: Array<Maybe<Account>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Account` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Account` values, with data from `Extrinsic`. */
export type BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<AccountsGroupBy>;
		having?: InputMaybe<AccountsHavingInput>;
	};

/** A `Account` edge in the connection, with data from `Extrinsic`. */
export type BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyEdge = {
	__typename?: "BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** Reads and enables pagination through a set of `Extrinsic`. */
	extrinsics: ExtrinsicsConnection;
	/** The `Account` at the end of the edge. */
	node?: Maybe<Account>;
};

/** A `Account` edge in the connection, with data from `Extrinsic`. */
export type BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyEdgeExtrinsicsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<ExtrinsicFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<ExtrinsicsOrderBy>>;
	};

/** A connection to a list of `Account` values, with data from `OracleFeedRecord`. */
export type BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyConnection =
	{
		__typename?: "BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<AccountAggregates>;
		/** A list of edges which contains the `Account`, info from the `OracleFeedRecord`, and the cursor to aid in pagination. */
		edges: Array<BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<AccountAggregates>>;
		/** A list of `Account` objects. */
		nodes: Array<Maybe<Account>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Account` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Account` values, with data from `OracleFeedRecord`. */
export type BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<AccountsGroupBy>;
		having?: InputMaybe<AccountsHavingInput>;
	};

/** A `Account` edge in the connection, with data from `OracleFeedRecord`. */
export type BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyEdge = {
	__typename?: "BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Account` at the end of the edge. */
	node?: Maybe<Account>;
	/** Reads and enables pagination through a set of `OracleFeedRecord`. */
	oracleFeedRecords: OracleFeedRecordsConnection;
};

/** A `Account` edge in the connection, with data from `OracleFeedRecord`. */
export type BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyEdgeOracleFeedRecordsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<OracleFeedRecordFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<OracleFeedRecordsOrderBy>>;
	};

export type BlockAggregates = {
	__typename?: "BlockAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

/** A connection to a list of `Block` values, with data from `LoanParamsHistory`. */
export type BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyConnection =
	{
		__typename?: "BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<BlockAggregates>;
		/** A list of edges which contains the `Block`, info from the `LoanParamsHistory`, and the cursor to aid in pagination. */
		edges: Array<BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<BlockAggregates>>;
		/** A list of `Block` objects. */
		nodes: Array<Maybe<Block>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Block` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Block` values, with data from `LoanParamsHistory`. */
export type BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<BlocksGroupBy>;
		having?: InputMaybe<BlocksHavingInput>;
	};

/** A `Block` edge in the connection, with data from `LoanParamsHistory`. */
export type BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyEdge =
	{
		__typename?: "BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** Reads and enables pagination through a set of `LoanParamsHistory`. */
		loanParamsHistoriesByStartAtBlockId: LoanParamsHistoriesConnection;
		/** The `Block` at the end of the edge. */
		node?: Maybe<Block>;
	};

/** A `Block` edge in the connection, with data from `LoanParamsHistory`. */
export type BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyEdgeLoanParamsHistoriesByStartAtBlockIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<LoanParamsHistoryFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<LoanParamsHistoriesOrderBy>>;
	};

/** A connection to a list of `Block` values, with data from `LoanParamsHistory`. */
export type BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyConnection =
	{
		__typename?: "BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<BlockAggregates>;
		/** A list of edges which contains the `Block`, info from the `LoanParamsHistory`, and the cursor to aid in pagination. */
		edges: Array<BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<BlockAggregates>>;
		/** A list of `Block` objects. */
		nodes: Array<Maybe<Block>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Block` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Block` values, with data from `LoanParamsHistory`. */
export type BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<BlocksGroupBy>;
		having?: InputMaybe<BlocksHavingInput>;
	};

/** A `Block` edge in the connection, with data from `LoanParamsHistory`. */
export type BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyEdge =
	{
		__typename?: "BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** Reads and enables pagination through a set of `LoanParamsHistory`. */
		loanParamsHistoriesByEndAtBlockId: LoanParamsHistoriesConnection;
		/** The `Block` at the end of the edge. */
		node?: Maybe<Block>;
	};

/** A `Block` edge in the connection, with data from `LoanParamsHistory`. */
export type BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyEdgeLoanParamsHistoriesByEndAtBlockIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<LoanParamsHistoryFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<LoanParamsHistoriesOrderBy>>;
	};

/** A connection to a list of `Block` values, with data from `ProvisionPool`. */
export type BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyConnection =
	{
		__typename?: "BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<BlockAggregates>;
		/** A list of edges which contains the `Block`, info from the `ProvisionPool`, and the cursor to aid in pagination. */
		edges: Array<BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<BlockAggregates>>;
		/** A list of `Block` objects. */
		nodes: Array<Maybe<Block>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Block` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Block` values, with data from `ProvisionPool`. */
export type BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<BlocksGroupBy>;
		having?: InputMaybe<BlocksHavingInput>;
	};

/** A `Block` edge in the connection, with data from `ProvisionPool`. */
export type BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyEdge =
	{
		__typename?: "BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** The `Block` at the end of the edge. */
		node?: Maybe<Block>;
		/** Reads and enables pagination through a set of `ProvisionPool`. */
		provisionPoolsByStartAtBlockId: ProvisionPoolsConnection;
	};

/** A `Block` edge in the connection, with data from `ProvisionPool`. */
export type BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyEdgeProvisionPoolsByStartAtBlockIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<ProvisionPoolFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<ProvisionPoolsOrderBy>>;
	};

/** A connection to a list of `Block` values, with data from `ProvisionPool`. */
export type BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyConnection =
	{
		__typename?: "BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<BlockAggregates>;
		/** A list of edges which contains the `Block`, info from the `ProvisionPool`, and the cursor to aid in pagination. */
		edges: Array<BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<BlockAggregates>>;
		/** A list of `Block` objects. */
		nodes: Array<Maybe<Block>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Block` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Block` values, with data from `ProvisionPool`. */
export type BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<BlocksGroupBy>;
		having?: InputMaybe<BlocksHavingInput>;
	};

/** A `Block` edge in the connection, with data from `ProvisionPool`. */
export type BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyEdge =
	{
		__typename?: "BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** The `Block` at the end of the edge. */
		node?: Maybe<Block>;
		/** Reads and enables pagination through a set of `ProvisionPool`. */
		provisionPoolsByEndAtBlockId: ProvisionPoolsConnection;
	};

/** A `Block` edge in the connection, with data from `ProvisionPool`. */
export type BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyEdgeProvisionPoolsByEndAtBlockIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<ProvisionPoolFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<ProvisionPoolsOrderBy>>;
	};

/** A connection to a list of `Extrinsic` values, with data from `Event`. */
export type BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyConnection = {
	__typename?: "BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<ExtrinsicAggregates>;
	/** A list of edges which contains the `Extrinsic`, info from the `Event`, and the cursor to aid in pagination. */
	edges: Array<BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<ExtrinsicAggregates>>;
	/** A list of `Extrinsic` objects. */
	nodes: Array<Maybe<Extrinsic>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Extrinsic` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Extrinsic` values, with data from `Event`. */
export type BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<ExtrinsicsGroupBy>;
		having?: InputMaybe<ExtrinsicsHavingInput>;
	};

/** A `Extrinsic` edge in the connection, with data from `Event`. */
export type BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyEdge = {
	__typename?: "BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** Reads and enables pagination through a set of `Event`. */
	events: EventsConnection;
	/** The `Extrinsic` at the end of the edge. */
	node?: Maybe<Extrinsic>;
};

/** A `Extrinsic` edge in the connection, with data from `Event`. */
export type BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyEdgeEventsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<EventFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<EventsOrderBy>>;
	};

/** A filter to be used against `Block` object types. All fields are combined with a logical ‘and.’ */
export type BlockFilter = {
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<BlockFilter>>;
	/** Filter by the object’s `extrinsicRoot` field. */
	extrinsicRoot?: InputMaybe<StringFilter>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Negates the expression. */
	not?: InputMaybe<BlockFilter>;
	/** Filter by the object’s `number` field. */
	number?: InputMaybe<BigFloatFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<BlockFilter>>;
	/** Filter by the object’s `parentHash` field. */
	parentHash?: InputMaybe<StringFilter>;
	/** Filter by the object’s `specVersion` field. */
	specVersion?: InputMaybe<StringFilter>;
	/** Filter by the object’s `stateRoot` field. */
	stateRoot?: InputMaybe<StringFilter>;
	/** Filter by the object’s `timestamp` field. */
	timestamp?: InputMaybe<DatetimeFilter>;
};

/** A connection to a list of `Token` values, with data from `LoanParam`. */
export type BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyConnection =
	{
		__typename?: "BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `LoanParam`, and the cursor to aid in pagination. */
		edges: Array<BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `LoanParam`. */
export type BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `LoanParam`. */
export type BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyEdge =
	{
		__typename?: "BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** Reads and enables pagination through a set of `LoanParam`. */
		loanParamsByCollateralId: LoanParamsConnection;
		/** The `Token` at the end of the edge. */
		node?: Maybe<Token>;
	};

/** A `Token` edge in the connection, with data from `LoanParam`. */
export type BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyEdgeLoanParamsByCollateralIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<LoanParamFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<LoanParamsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `LoanParamsHistory`. */
export type BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyConnection =
	{
		__typename?: "BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `LoanParamsHistory`, and the cursor to aid in pagination. */
		edges: Array<BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `LoanParamsHistory`. */
export type BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `LoanParamsHistory`. */
export type BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyEdge =
	{
		__typename?: "BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** Reads and enables pagination through a set of `LoanParamsHistory`. */
		loanParamsHistoriesByCollateralId: LoanParamsHistoriesConnection;
		/** The `Token` at the end of the edge. */
		node?: Maybe<Token>;
	};

/** A `Token` edge in the connection, with data from `LoanParamsHistory`. */
export type BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyEdgeLoanParamsHistoriesByCollateralIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<LoanParamsHistoryFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<LoanParamsHistoriesOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `LoanParamsHistory`. */
export type BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyConnection =
	{
		__typename?: "BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `LoanParamsHistory`, and the cursor to aid in pagination. */
		edges: Array<BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `LoanParamsHistory`. */
export type BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `LoanParamsHistory`. */
export type BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyEdge =
	{
		__typename?: "BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** Reads and enables pagination through a set of `LoanParamsHistory`. */
		loanParamsHistoriesByCollateralId: LoanParamsHistoriesConnection;
		/** The `Token` at the end of the edge. */
		node?: Maybe<Token>;
	};

/** A `Token` edge in the connection, with data from `LoanParamsHistory`. */
export type BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyEdgeLoanParamsHistoriesByCollateralIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<LoanParamsHistoryFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<LoanParamsHistoriesOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `OracleFeedRecord`. */
export type BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyConnection =
	{
		__typename?: "BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `OracleFeedRecord`, and the cursor to aid in pagination. */
		edges: Array<BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `OracleFeedRecord`. */
export type BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `OracleFeedRecord`. */
export type BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyEdge = {
	__typename?: "BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
	/** Reads and enables pagination through a set of `OracleFeedRecord`. */
	oracleFeedRecords: OracleFeedRecordsConnection;
};

/** A `Token` edge in the connection, with data from `OracleFeedRecord`. */
export type BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyEdgeOracleFeedRecordsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<OracleFeedRecordFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<OracleFeedRecordsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `ProvisionPool`. */
export type BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyConnection =
	{
		__typename?: "BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `ProvisionPool`, and the cursor to aid in pagination. */
		edges: Array<BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `ProvisionPool`. */
export type BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `ProvisionPool`. */
export type BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyEdge =
	{
		__typename?: "BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** The `Token` at the end of the edge. */
		node?: Maybe<Token>;
		/** Reads and enables pagination through a set of `ProvisionPool`. */
		provisionPoolsByPoolTokenId: ProvisionPoolsConnection;
	};

/** A `Token` edge in the connection, with data from `ProvisionPool`. */
export type BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyEdgeProvisionPoolsByPoolTokenIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<ProvisionPoolFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<ProvisionPoolsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `ProvisionPool`. */
export type BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyConnection =
	{
		__typename?: "BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `ProvisionPool`, and the cursor to aid in pagination. */
		edges: Array<BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `ProvisionPool`. */
export type BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `ProvisionPool`. */
export type BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyEdge = {
	__typename?: "BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
	/** Reads and enables pagination through a set of `ProvisionPool`. */
	provisionPoolsByToken0Id: ProvisionPoolsConnection;
};

/** A `Token` edge in the connection, with data from `ProvisionPool`. */
export type BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyEdgeProvisionPoolsByToken0IdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<ProvisionPoolFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<ProvisionPoolsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `ProvisionPool`. */
export type BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyConnection =
	{
		__typename?: "BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `ProvisionPool`, and the cursor to aid in pagination. */
		edges: Array<BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `ProvisionPool`. */
export type BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `ProvisionPool`. */
export type BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyEdge = {
	__typename?: "BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
	/** Reads and enables pagination through a set of `ProvisionPool`. */
	provisionPoolsByToken1Id: ProvisionPoolsConnection;
};

/** A `Token` edge in the connection, with data from `ProvisionPool`. */
export type BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyEdgeProvisionPoolsByToken1IdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<ProvisionPoolFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<ProvisionPoolsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `ProvisionPool`. */
export type BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyConnection =
	{
		__typename?: "BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `ProvisionPool`, and the cursor to aid in pagination. */
		edges: Array<BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `ProvisionPool`. */
export type BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `ProvisionPool`. */
export type BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyEdge =
	{
		__typename?: "BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** The `Token` at the end of the edge. */
		node?: Maybe<Token>;
		/** Reads and enables pagination through a set of `ProvisionPool`. */
		provisionPoolsByPoolTokenId: ProvisionPoolsConnection;
	};

/** A `Token` edge in the connection, with data from `ProvisionPool`. */
export type BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyEdgeProvisionPoolsByPoolTokenIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<ProvisionPoolFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<ProvisionPoolsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `ProvisionPool`. */
export type BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyConnection =
	{
		__typename?: "BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `ProvisionPool`, and the cursor to aid in pagination. */
		edges: Array<BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `ProvisionPool`. */
export type BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `ProvisionPool`. */
export type BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyEdge =
	{
		__typename?: "BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** The `Token` at the end of the edge. */
		node?: Maybe<Token>;
		/** Reads and enables pagination through a set of `ProvisionPool`. */
		provisionPoolsByToken0Id: ProvisionPoolsConnection;
	};

/** A `Token` edge in the connection, with data from `ProvisionPool`. */
export type BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyEdgeProvisionPoolsByToken0IdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<ProvisionPoolFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<ProvisionPoolsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `ProvisionPool`. */
export type BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyConnection =
	{
		__typename?: "BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `ProvisionPool`, and the cursor to aid in pagination. */
		edges: Array<BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `ProvisionPool`. */
export type BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `ProvisionPool`. */
export type BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyEdge =
	{
		__typename?: "BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** The `Token` at the end of the edge. */
		node?: Maybe<Token>;
		/** Reads and enables pagination through a set of `ProvisionPool`. */
		provisionPoolsByToken1Id: ProvisionPoolsConnection;
	};

/** A `Token` edge in the connection, with data from `ProvisionPool`. */
export type BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyEdgeProvisionPoolsByToken1IdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<ProvisionPoolFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<ProvisionPoolsOrderBy>>;
	};

/** A connection to a list of `Block` values. */
export type BlocksConnection = {
	__typename?: "BlocksConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<BlockAggregates>;
	/** A list of edges which contains the `Block` and cursor to aid in pagination. */
	edges: Array<BlocksEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<BlockAggregates>>;
	/** A list of `Block` objects. */
	nodes: Array<Maybe<Block>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Block` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Block` values. */
export type BlocksConnectionGroupedAggregatesArgs = {
	groupBy: Array<BlocksGroupBy>;
	having?: InputMaybe<BlocksHavingInput>;
};

/** A `Block` edge in the connection. */
export type BlocksEdge = {
	__typename?: "BlocksEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Block` at the end of the edge. */
	node?: Maybe<Block>;
};

/** Grouping methods for `Block` for usage during aggregation. */
export enum BlocksGroupBy {
	ExtrinsicRoot = "EXTRINSIC_ROOT",
	Number = "NUMBER",
	ParentHash = "PARENT_HASH",
	SpecVersion = "SPEC_VERSION",
	StateRoot = "STATE_ROOT",
	Timestamp = "TIMESTAMP",
}

/** Conditions for `Block` aggregates. */
export type BlocksHavingInput = {
	AND?: InputMaybe<Array<BlocksHavingInput>>;
	OR?: InputMaybe<Array<BlocksHavingInput>>;
};

/** Methods to use when ordering `Block`. */
export enum BlocksOrderBy {
	AccountsByCreateAtBlockIdCountAsc = "ACCOUNTS_BY_CREATE_AT_BLOCK_ID_COUNT_ASC",
	AccountsByCreateAtBlockIdCountDesc = "ACCOUNTS_BY_CREATE_AT_BLOCK_ID_COUNT_DESC",
	EventsCountAsc = "EVENTS_COUNT_ASC",
	EventsCountDesc = "EVENTS_COUNT_DESC",
	ExtrinsicsCountAsc = "EXTRINSICS_COUNT_ASC",
	ExtrinsicsCountDesc = "EXTRINSICS_COUNT_DESC",
	ExtrinsicRootAsc = "EXTRINSIC_ROOT_ASC",
	ExtrinsicRootDesc = "EXTRINSIC_ROOT_DESC",
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	LoanParamsByStartAtBlockIdCountAsc = "LOAN_PARAMS_BY_START_AT_BLOCK_ID_COUNT_ASC",
	LoanParamsByStartAtBlockIdCountDesc = "LOAN_PARAMS_BY_START_AT_BLOCK_ID_COUNT_DESC",
	LoanParamsHistoriesByEndAtBlockIdCountAsc = "LOAN_PARAMS_HISTORIES_BY_END_AT_BLOCK_ID_COUNT_ASC",
	LoanParamsHistoriesByEndAtBlockIdCountDesc = "LOAN_PARAMS_HISTORIES_BY_END_AT_BLOCK_ID_COUNT_DESC",
	LoanParamsHistoriesByStartAtBlockIdCountAsc = "LOAN_PARAMS_HISTORIES_BY_START_AT_BLOCK_ID_COUNT_ASC",
	LoanParamsHistoriesByStartAtBlockIdCountDesc = "LOAN_PARAMS_HISTORIES_BY_START_AT_BLOCK_ID_COUNT_DESC",
	Natural = "NATURAL",
	NumberAsc = "NUMBER_ASC",
	NumberDesc = "NUMBER_DESC",
	OracleFeedRecordsCountAsc = "ORACLE_FEED_RECORDS_COUNT_ASC",
	OracleFeedRecordsCountDesc = "ORACLE_FEED_RECORDS_COUNT_DESC",
	ParentHashAsc = "PARENT_HASH_ASC",
	ParentHashDesc = "PARENT_HASH_DESC",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	ProvisionPoolsByEndAtBlockIdCountAsc = "PROVISION_POOLS_BY_END_AT_BLOCK_ID_COUNT_ASC",
	ProvisionPoolsByEndAtBlockIdCountDesc = "PROVISION_POOLS_BY_END_AT_BLOCK_ID_COUNT_DESC",
	ProvisionPoolsByStartAtBlockIdCountAsc = "PROVISION_POOLS_BY_START_AT_BLOCK_ID_COUNT_ASC",
	ProvisionPoolsByStartAtBlockIdCountDesc = "PROVISION_POOLS_BY_START_AT_BLOCK_ID_COUNT_DESC",
	SpecVersionAsc = "SPEC_VERSION_ASC",
	SpecVersionDesc = "SPEC_VERSION_DESC",
	StateRootAsc = "STATE_ROOT_ASC",
	StateRootDesc = "STATE_ROOT_DESC",
	TimestampAsc = "TIMESTAMP_ASC",
	TimestampDesc = "TIMESTAMP_DESC",
}

/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
export type BooleanFilter = {
	/** Not equal to the specified value, treating null like an ordinary value. */
	distinctFrom?: InputMaybe<Scalars["Boolean"]>;
	/** Equal to the specified value. */
	equalTo?: InputMaybe<Scalars["Boolean"]>;
	/** Greater than the specified value. */
	greaterThan?: InputMaybe<Scalars["Boolean"]>;
	/** Greater than or equal to the specified value. */
	greaterThanOrEqualTo?: InputMaybe<Scalars["Boolean"]>;
	/** Included in the specified list. */
	in?: InputMaybe<Array<Scalars["Boolean"]>>;
	/** Is null (if `true` is specified) or is not null (if `false` is specified). */
	isNull?: InputMaybe<Scalars["Boolean"]>;
	/** Less than the specified value. */
	lessThan?: InputMaybe<Scalars["Boolean"]>;
	/** Less than or equal to the specified value. */
	lessThanOrEqualTo?: InputMaybe<Scalars["Boolean"]>;
	/** Equal to the specified value, treating null like an ordinary value. */
	notDistinctFrom?: InputMaybe<Scalars["Boolean"]>;
	/** Not equal to the specified value. */
	notEqualTo?: InputMaybe<Scalars["Boolean"]>;
	/** Not included in the specified list. */
	notIn?: InputMaybe<Array<Scalars["Boolean"]>>;
};

export type Call = Node & {
	__typename?: "Call";
	/** Reads and enables pagination through a set of `Account`. */
	accountsByCallParentCallIdAndSignerId: CallAccountsByCallParentCallIdAndSignerIdManyToManyConnection;
	args?: Maybe<Scalars["JSON"]>;
	/** Reads and enables pagination through a set of `Call`. */
	calls: CallsConnection;
	/** Reads a single `Extrinsic` that is related to this `Call`. */
	extrinsic?: Maybe<Extrinsic>;
	extrinsicId?: Maybe<Scalars["String"]>;
	/** Reads and enables pagination through a set of `Extrinsic`. */
	extrinsicsByCallParentCallIdAndExtrinsicId: CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyConnection;
	id: Scalars["String"];
	isSuccess?: Maybe<Scalars["Boolean"]>;
	method?: Maybe<Scalars["String"]>;
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
	/** Reads a single `Call` that is related to this `Call`. */
	parentCall?: Maybe<Call>;
	parentCallId?: Maybe<Scalars["String"]>;
	section?: Maybe<Scalars["String"]>;
	/** Reads a single `Account` that is related to this `Call`. */
	signer?: Maybe<Account>;
	signerId?: Maybe<Scalars["String"]>;
	timestamp?: Maybe<Scalars["Datetime"]>;
};

export type CallAccountsByCallParentCallIdAndSignerIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<AccountFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};

export type CallCallsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<CallFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<CallsOrderBy>>;
};

export type CallExtrinsicsByCallParentCallIdAndExtrinsicIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<ExtrinsicFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<ExtrinsicsOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Call`. */
export type CallAccountsByCallParentCallIdAndSignerIdManyToManyConnection = {
	__typename?: "CallAccountsByCallParentCallIdAndSignerIdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<AccountAggregates>;
	/** A list of edges which contains the `Account`, info from the `Call`, and the cursor to aid in pagination. */
	edges: Array<CallAccountsByCallParentCallIdAndSignerIdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<AccountAggregates>>;
	/** A list of `Account` objects. */
	nodes: Array<Maybe<Account>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Account` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Account` values, with data from `Call`. */
export type CallAccountsByCallParentCallIdAndSignerIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<AccountsGroupBy>;
		having?: InputMaybe<AccountsHavingInput>;
	};

/** A `Account` edge in the connection, with data from `Call`. */
export type CallAccountsByCallParentCallIdAndSignerIdManyToManyEdge = {
	__typename?: "CallAccountsByCallParentCallIdAndSignerIdManyToManyEdge";
	/** Reads and enables pagination through a set of `Call`. */
	calls: CallsConnection;
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Account` at the end of the edge. */
	node?: Maybe<Account>;
};

/** A `Account` edge in the connection, with data from `Call`. */
export type CallAccountsByCallParentCallIdAndSignerIdManyToManyEdgeCallsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<CallFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<CallsOrderBy>>;
};

export type CallAggregates = {
	__typename?: "CallAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

/** A connection to a list of `Extrinsic` values, with data from `Call`. */
export type CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyConnection =
	{
		__typename?: "CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<ExtrinsicAggregates>;
		/** A list of edges which contains the `Extrinsic`, info from the `Call`, and the cursor to aid in pagination. */
		edges: Array<CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<ExtrinsicAggregates>>;
		/** A list of `Extrinsic` objects. */
		nodes: Array<Maybe<Extrinsic>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Extrinsic` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Extrinsic` values, with data from `Call`. */
export type CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<ExtrinsicsGroupBy>;
		having?: InputMaybe<ExtrinsicsHavingInput>;
	};

/** A `Extrinsic` edge in the connection, with data from `Call`. */
export type CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyEdge = {
	__typename?: "CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyEdge";
	/** Reads and enables pagination through a set of `Call`. */
	calls: CallsConnection;
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Extrinsic` at the end of the edge. */
	node?: Maybe<Extrinsic>;
};

/** A `Extrinsic` edge in the connection, with data from `Call`. */
export type CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyEdgeCallsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<CallFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<CallsOrderBy>>;
	};

/** A filter to be used against `Call` object types. All fields are combined with a logical ‘and.’ */
export type CallFilter = {
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<CallFilter>>;
	/** Filter by the object’s `args` field. */
	args?: InputMaybe<JsonFilter>;
	/** Filter by the object’s `extrinsicId` field. */
	extrinsicId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Filter by the object’s `isSuccess` field. */
	isSuccess?: InputMaybe<BooleanFilter>;
	/** Filter by the object’s `method` field. */
	method?: InputMaybe<StringFilter>;
	/** Negates the expression. */
	not?: InputMaybe<CallFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<CallFilter>>;
	/** Filter by the object’s `parentCallId` field. */
	parentCallId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `section` field. */
	section?: InputMaybe<StringFilter>;
	/** Filter by the object’s `signerId` field. */
	signerId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `timestamp` field. */
	timestamp?: InputMaybe<DatetimeFilter>;
};

/** A connection to a list of `Call` values. */
export type CallsConnection = {
	__typename?: "CallsConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<CallAggregates>;
	/** A list of edges which contains the `Call` and cursor to aid in pagination. */
	edges: Array<CallsEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<CallAggregates>>;
	/** A list of `Call` objects. */
	nodes: Array<Maybe<Call>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Call` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Call` values. */
export type CallsConnectionGroupedAggregatesArgs = {
	groupBy: Array<CallsGroupBy>;
	having?: InputMaybe<CallsHavingInput>;
};

/** A `Call` edge in the connection. */
export type CallsEdge = {
	__typename?: "CallsEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Call` at the end of the edge. */
	node?: Maybe<Call>;
};

/** Grouping methods for `Call` for usage during aggregation. */
export enum CallsGroupBy {
	Args = "ARGS",
	ExtrinsicId = "EXTRINSIC_ID",
	IsSuccess = "IS_SUCCESS",
	Method = "METHOD",
	ParentCallId = "PARENT_CALL_ID",
	Section = "SECTION",
	SignerId = "SIGNER_ID",
	Timestamp = "TIMESTAMP",
}

/** Conditions for `Call` aggregates. */
export type CallsHavingInput = {
	AND?: InputMaybe<Array<CallsHavingInput>>;
	OR?: InputMaybe<Array<CallsHavingInput>>;
};

/** Methods to use when ordering `Call`. */
export enum CallsOrderBy {
	ArgsAsc = "ARGS_ASC",
	ArgsDesc = "ARGS_DESC",
	CallsCountAsc = "CALLS_COUNT_ASC",
	CallsCountDesc = "CALLS_COUNT_DESC",
	ExtrinsicIdAsc = "EXTRINSIC_ID_ASC",
	ExtrinsicIdDesc = "EXTRINSIC_ID_DESC",
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	IsSuccessAsc = "IS_SUCCESS_ASC",
	IsSuccessDesc = "IS_SUCCESS_DESC",
	MethodAsc = "METHOD_ASC",
	MethodDesc = "METHOD_DESC",
	Natural = "NATURAL",
	ParentCallIdAsc = "PARENT_CALL_ID_ASC",
	ParentCallIdDesc = "PARENT_CALL_ID_DESC",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	SectionAsc = "SECTION_ASC",
	SectionDesc = "SECTION_DESC",
	SignerIdAsc = "SIGNER_ID_ASC",
	SignerIdDesc = "SIGNER_ID_DESC",
	TimestampAsc = "TIMESTAMP_ASC",
	TimestampDesc = "TIMESTAMP_DESC",
}

/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
	/** Not equal to the specified value, treating null like an ordinary value. */
	distinctFrom?: InputMaybe<Scalars["Datetime"]>;
	/** Equal to the specified value. */
	equalTo?: InputMaybe<Scalars["Datetime"]>;
	/** Greater than the specified value. */
	greaterThan?: InputMaybe<Scalars["Datetime"]>;
	/** Greater than or equal to the specified value. */
	greaterThanOrEqualTo?: InputMaybe<Scalars["Datetime"]>;
	/** Included in the specified list. */
	in?: InputMaybe<Array<Scalars["Datetime"]>>;
	/** Is null (if `true` is specified) or is not null (if `false` is specified). */
	isNull?: InputMaybe<Scalars["Boolean"]>;
	/** Less than the specified value. */
	lessThan?: InputMaybe<Scalars["Datetime"]>;
	/** Less than or equal to the specified value. */
	lessThanOrEqualTo?: InputMaybe<Scalars["Datetime"]>;
	/** Equal to the specified value, treating null like an ordinary value. */
	notDistinctFrom?: InputMaybe<Scalars["Datetime"]>;
	/** Not equal to the specified value. */
	notEqualTo?: InputMaybe<Scalars["Datetime"]>;
	/** Not included in the specified list. */
	notIn?: InputMaybe<Array<Scalars["Datetime"]>>;
};

export type Dex = Node & {
	__typename?: "Dex";
	id: Scalars["String"];
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
	poolCount?: Maybe<Scalars["Int"]>;
	totalTVLUSD?: Maybe<Scalars["String"]>;
	totalVolumeUSD?: Maybe<Scalars["String"]>;
};

export type DexAction = Node & {
	__typename?: "DexAction";
	/** Reads a single `Account` that is related to this `DexAction`. */
	account?: Maybe<Account>;
	accountId?: Maybe<Scalars["String"]>;
	data?: Maybe<Scalars["JSON"]>;
	/** Reads a single `Extrinsic` that is related to this `DexAction`. */
	extrinsic?: Maybe<Extrinsic>;
	extrinsicId?: Maybe<Scalars["String"]>;
	id: Scalars["String"];
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
	/** Reads a single `Pool` that is related to this `DexAction`. */
	pool?: Maybe<Pool>;
	poolId?: Maybe<Scalars["String"]>;
	subType?: Maybe<Scalars["String"]>;
	timestamp?: Maybe<Scalars["Datetime"]>;
	/** Reads a single `Token` that is related to this `DexAction`. */
	token0?: Maybe<Token>;
	token0Amount?: Maybe<Scalars["String"]>;
	token0Id?: Maybe<Scalars["String"]>;
	/** Reads a single `Token` that is related to this `DexAction`. */
	token1?: Maybe<Token>;
	token1Amount?: Maybe<Scalars["String"]>;
	token1Id?: Maybe<Scalars["String"]>;
	type?: Maybe<Scalars["String"]>;
	volumeUSD?: Maybe<Scalars["String"]>;
};

export type DexActionAggregates = {
	__typename?: "DexActionAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

/** A filter to be used against `DexAction` object types. All fields are combined with a logical ‘and.’ */
export type DexActionFilter = {
	/** Filter by the object’s `accountId` field. */
	accountId?: InputMaybe<StringFilter>;
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<DexActionFilter>>;
	/** Filter by the object’s `data` field. */
	data?: InputMaybe<JsonFilter>;
	/** Filter by the object’s `extrinsicId` field. */
	extrinsicId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Negates the expression. */
	not?: InputMaybe<DexActionFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<DexActionFilter>>;
	/** Filter by the object’s `poolId` field. */
	poolId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `subType` field. */
	subType?: InputMaybe<StringFilter>;
	/** Filter by the object’s `timestamp` field. */
	timestamp?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `token0Amount` field. */
	token0Amount?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token0Id` field. */
	token0Id?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token1Amount` field. */
	token1Amount?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token1Id` field. */
	token1Id?: InputMaybe<StringFilter>;
	/** Filter by the object’s `type` field. */
	type?: InputMaybe<StringFilter>;
	/** Filter by the object’s `volumeUSD` field. */
	volumeUSD?: InputMaybe<StringFilter>;
};

/** A connection to a list of `DexAction` values. */
export type DexActionsConnection = {
	__typename?: "DexActionsConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<DexActionAggregates>;
	/** A list of edges which contains the `DexAction` and cursor to aid in pagination. */
	edges: Array<DexActionsEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<DexActionAggregates>>;
	/** A list of `DexAction` objects. */
	nodes: Array<Maybe<DexAction>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `DexAction` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `DexAction` values. */
export type DexActionsConnectionGroupedAggregatesArgs = {
	groupBy: Array<DexActionsGroupBy>;
	having?: InputMaybe<DexActionsHavingInput>;
};

/** A `DexAction` edge in the connection. */
export type DexActionsEdge = {
	__typename?: "DexActionsEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `DexAction` at the end of the edge. */
	node?: Maybe<DexAction>;
};

/** Grouping methods for `DexAction` for usage during aggregation. */
export enum DexActionsGroupBy {
	AccountId = "ACCOUNT_ID",
	Data = "DATA",
	ExtrinsicId = "EXTRINSIC_ID",
	PoolId = "POOL_ID",
	SubType = "SUB_TYPE",
	Timestamp = "TIMESTAMP",
	Token0Amount = "TOKEN0_AMOUNT",
	Token0Id = "TOKEN0_ID",
	Token1Amount = "TOKEN1_AMOUNT",
	Token1Id = "TOKEN1_ID",
	Type = "TYPE",
	VolumeUSD = "VOLUME_U_S_D",
}

/** Conditions for `DexAction` aggregates. */
export type DexActionsHavingInput = {
	AND?: InputMaybe<Array<DexActionsHavingInput>>;
	OR?: InputMaybe<Array<DexActionsHavingInput>>;
};

/** Methods to use when ordering `DexAction`. */
export enum DexActionsOrderBy {
	AccountIdAsc = "ACCOUNT_ID_ASC",
	AccountIdDesc = "ACCOUNT_ID_DESC",
	DataAsc = "DATA_ASC",
	DataDesc = "DATA_DESC",
	ExtrinsicIdAsc = "EXTRINSIC_ID_ASC",
	ExtrinsicIdDesc = "EXTRINSIC_ID_DESC",
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	Natural = "NATURAL",
	PoolIdAsc = "POOL_ID_ASC",
	PoolIdDesc = "POOL_ID_DESC",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	SubTypeAsc = "SUB_TYPE_ASC",
	SubTypeDesc = "SUB_TYPE_DESC",
	TimestampAsc = "TIMESTAMP_ASC",
	TimestampDesc = "TIMESTAMP_DESC",
	Token0AmountAsc = "TOKEN0_AMOUNT_ASC",
	Token0AmountDesc = "TOKEN0_AMOUNT_DESC",
	Token0IdAsc = "TOKEN0_ID_ASC",
	Token0IdDesc = "TOKEN0_ID_DESC",
	Token1AmountAsc = "TOKEN1_AMOUNT_ASC",
	Token1AmountDesc = "TOKEN1_AMOUNT_DESC",
	Token1IdAsc = "TOKEN1_ID_ASC",
	Token1IdDesc = "TOKEN1_ID_DESC",
	TypeAsc = "TYPE_ASC",
	TypeDesc = "TYPE_DESC",
	VolumeUSDAsc = "VOLUME_U_S_D_ASC",
	VolumeUSDDesc = "VOLUME_U_S_D_DESC",
}

export type DexAggregates = {
	__typename?: "DexAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

/** A connection to a list of `DexDayDatum` values. */
export type DexDayDataConnection = {
	__typename?: "DexDayDataConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<DexDayDatumAggregates>;
	/** A list of edges which contains the `DexDayDatum` and cursor to aid in pagination. */
	edges: Array<DexDayDataEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<DexDayDatumAggregates>>;
	/** A list of `DexDayDatum` objects. */
	nodes: Array<Maybe<DexDayDatum>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `DexDayDatum` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `DexDayDatum` values. */
export type DexDayDataConnectionGroupedAggregatesArgs = {
	groupBy: Array<DexDayDataGroupBy>;
	having?: InputMaybe<DexDayDataHavingInput>;
};

/** A `DexDayDatum` edge in the connection. */
export type DexDayDataEdge = {
	__typename?: "DexDayDataEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `DexDayDatum` at the end of the edge. */
	node?: Maybe<DexDayDatum>;
};

/** Grouping methods for `DexDayDatum` for usage during aggregation. */
export enum DexDayDataGroupBy {
	DailyVolumeUSD = "DAILY_VOLUME_U_S_D",
	Date = "DATE",
	PoolCount = "POOL_COUNT",
	TotalTVLUSD = "TOTAL_T_V_L_U_S_D",
	TotalVolumeUSD = "TOTAL_VOLUME_U_S_D",
}

/** Conditions for `DexDayDatum` aggregates. */
export type DexDayDataHavingInput = {
	AND?: InputMaybe<Array<DexDayDataHavingInput>>;
	OR?: InputMaybe<Array<DexDayDataHavingInput>>;
};

/** Methods to use when ordering `DexDayDatum`. */
export enum DexDayDataOrderBy {
	DailyVolumeUSDAsc = "DAILY_VOLUME_U_S_D_ASC",
	DailyVolumeUSDDesc = "DAILY_VOLUME_U_S_D_DESC",
	DateAsc = "DATE_ASC",
	DateDesc = "DATE_DESC",
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	Natural = "NATURAL",
	PoolCountAsc = "POOL_COUNT_ASC",
	PoolCountDesc = "POOL_COUNT_DESC",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	TotalTVLUSDAsc = "TOTAL_T_V_L_U_S_D_ASC",
	TotalTVLUSDDesc = "TOTAL_T_V_L_U_S_D_DESC",
	TotalVolumeUSDAsc = "TOTAL_VOLUME_U_S_D_ASC",
	TotalVolumeUSDDesc = "TOTAL_VOLUME_U_S_D_DESC",
}

export type DexDayDatum = Node & {
	__typename?: "DexDayDatum";
	dailyVolumeUSD?: Maybe<Scalars["String"]>;
	date?: Maybe<Scalars["Datetime"]>;
	id: Scalars["String"];
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
	poolCount?: Maybe<Scalars["Int"]>;
	totalTVLUSD?: Maybe<Scalars["String"]>;
	totalVolumeUSD?: Maybe<Scalars["String"]>;
};

export type DexDayDatumAggregates = {
	__typename?: "DexDayDatumAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

/** A filter to be used against `DexDayDatum` object types. All fields are combined with a logical ‘and.’ */
export type DexDayDatumFilter = {
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<DexDayDatumFilter>>;
	/** Filter by the object’s `dailyVolumeUSD` field. */
	dailyVolumeUSD?: InputMaybe<StringFilter>;
	/** Filter by the object’s `date` field. */
	date?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Negates the expression. */
	not?: InputMaybe<DexDayDatumFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<DexDayDatumFilter>>;
	/** Filter by the object’s `poolCount` field. */
	poolCount?: InputMaybe<IntFilter>;
	/** Filter by the object’s `totalTVLUSD` field. */
	totalTVLUSD?: InputMaybe<StringFilter>;
	/** Filter by the object’s `totalVolumeUSD` field. */
	totalVolumeUSD?: InputMaybe<StringFilter>;
};

/** A filter to be used against `Dex` object types. All fields are combined with a logical ‘and.’ */
export type DexFilter = {
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<DexFilter>>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Negates the expression. */
	not?: InputMaybe<DexFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<DexFilter>>;
	/** Filter by the object’s `poolCount` field. */
	poolCount?: InputMaybe<IntFilter>;
	/** Filter by the object’s `totalTVLUSD` field. */
	totalTVLUSD?: InputMaybe<StringFilter>;
	/** Filter by the object’s `totalVolumeUSD` field. */
	totalVolumeUSD?: InputMaybe<StringFilter>;
};

/** A connection to a list of `Dex` values. */
export type DexesConnection = {
	__typename?: "DexesConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<DexAggregates>;
	/** A list of edges which contains the `Dex` and cursor to aid in pagination. */
	edges: Array<DexesEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<DexAggregates>>;
	/** A list of `Dex` objects. */
	nodes: Array<Maybe<Dex>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Dex` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Dex` values. */
export type DexesConnectionGroupedAggregatesArgs = {
	groupBy: Array<DexesGroupBy>;
	having?: InputMaybe<DexesHavingInput>;
};

/** A `Dex` edge in the connection. */
export type DexesEdge = {
	__typename?: "DexesEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Dex` at the end of the edge. */
	node?: Maybe<Dex>;
};

/** Grouping methods for `Dex` for usage during aggregation. */
export enum DexesGroupBy {
	PoolCount = "POOL_COUNT",
	TotalTVLUSD = "TOTAL_T_V_L_U_S_D",
	TotalVolumeUSD = "TOTAL_VOLUME_U_S_D",
}

/** Conditions for `Dex` aggregates. */
export type DexesHavingInput = {
	AND?: InputMaybe<Array<DexesHavingInput>>;
	OR?: InputMaybe<Array<DexesHavingInput>>;
};

/** Methods to use when ordering `Dex`. */
export enum DexesOrderBy {
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	Natural = "NATURAL",
	PoolCountAsc = "POOL_COUNT_ASC",
	PoolCountDesc = "POOL_COUNT_DESC",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	TotalTVLUSDAsc = "TOTAL_T_V_L_U_S_D_ASC",
	TotalTVLUSDDesc = "TOTAL_T_V_L_U_S_D_DESC",
	TotalVolumeUSDAsc = "TOTAL_VOLUME_U_S_D_ASC",
	TotalVolumeUSDDesc = "TOTAL_VOLUME_U_S_D_DESC",
}

export type Event = Node & {
	__typename?: "Event";
	/** Reads a single `Block` that is related to this `Event`. */
	block?: Maybe<Block>;
	blockId?: Maybe<Scalars["String"]>;
	blockNumber?: Maybe<Scalars["BigFloat"]>;
	data?: Maybe<Scalars["JSON"]>;
	/** Reads a single `Extrinsic` that is related to this `Event`. */
	extrinsic?: Maybe<Extrinsic>;
	extrinsicId?: Maybe<Scalars["String"]>;
	id: Scalars["String"];
	index?: Maybe<Scalars["Int"]>;
	method?: Maybe<Scalars["String"]>;
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
	section?: Maybe<Scalars["String"]>;
	timestamp?: Maybe<Scalars["Datetime"]>;
};

export type EventAggregates = {
	__typename?: "EventAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

/** A filter to be used against `Event` object types. All fields are combined with a logical ‘and.’ */
export type EventFilter = {
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<EventFilter>>;
	/** Filter by the object’s `blockId` field. */
	blockId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `blockNumber` field. */
	blockNumber?: InputMaybe<BigFloatFilter>;
	/** Filter by the object’s `data` field. */
	data?: InputMaybe<JsonFilter>;
	/** Filter by the object’s `extrinsicId` field. */
	extrinsicId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Filter by the object’s `index` field. */
	index?: InputMaybe<IntFilter>;
	/** Filter by the object’s `method` field. */
	method?: InputMaybe<StringFilter>;
	/** Negates the expression. */
	not?: InputMaybe<EventFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<EventFilter>>;
	/** Filter by the object’s `section` field. */
	section?: InputMaybe<StringFilter>;
	/** Filter by the object’s `timestamp` field. */
	timestamp?: InputMaybe<DatetimeFilter>;
};

/** A connection to a list of `Event` values. */
export type EventsConnection = {
	__typename?: "EventsConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<EventAggregates>;
	/** A list of edges which contains the `Event` and cursor to aid in pagination. */
	edges: Array<EventsEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<EventAggregates>>;
	/** A list of `Event` objects. */
	nodes: Array<Maybe<Event>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Event` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Event` values. */
export type EventsConnectionGroupedAggregatesArgs = {
	groupBy: Array<EventsGroupBy>;
	having?: InputMaybe<EventsHavingInput>;
};

/** A `Event` edge in the connection. */
export type EventsEdge = {
	__typename?: "EventsEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Event` at the end of the edge. */
	node?: Maybe<Event>;
};

/** Grouping methods for `Event` for usage during aggregation. */
export enum EventsGroupBy {
	BlockId = "BLOCK_ID",
	BlockNumber = "BLOCK_NUMBER",
	Data = "DATA",
	ExtrinsicId = "EXTRINSIC_ID",
	Index = "INDEX",
	Method = "METHOD",
	Section = "SECTION",
	Timestamp = "TIMESTAMP",
}

/** Conditions for `Event` aggregates. */
export type EventsHavingInput = {
	AND?: InputMaybe<Array<EventsHavingInput>>;
	OR?: InputMaybe<Array<EventsHavingInput>>;
};

/** Methods to use when ordering `Event`. */
export enum EventsOrderBy {
	BlockIdAsc = "BLOCK_ID_ASC",
	BlockIdDesc = "BLOCK_ID_DESC",
	BlockNumberAsc = "BLOCK_NUMBER_ASC",
	BlockNumberDesc = "BLOCK_NUMBER_DESC",
	DataAsc = "DATA_ASC",
	DataDesc = "DATA_DESC",
	ExtrinsicIdAsc = "EXTRINSIC_ID_ASC",
	ExtrinsicIdDesc = "EXTRINSIC_ID_DESC",
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	IndexAsc = "INDEX_ASC",
	IndexDesc = "INDEX_DESC",
	MethodAsc = "METHOD_ASC",
	MethodDesc = "METHOD_DESC",
	Natural = "NATURAL",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	SectionAsc = "SECTION_ASC",
	SectionDesc = "SECTION_DESC",
	TimestampAsc = "TIMESTAMP_ASC",
	TimestampDesc = "TIMESTAMP_DESC",
}

export type Extrinsic = Node & {
	__typename?: "Extrinsic";
	/** Reads and enables pagination through a set of `Account`. */
	accountsByCallExtrinsicIdAndSignerId: ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Account`. */
	accountsByDexActionExtrinsicIdAndAccountId: ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Account`. */
	accountsByHomaActionExtrinsicIdAndAccountId: ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Account`. */
	accountsByIncentiveActionExtrinsicIdAndAccountId: ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Account`. */
	accountsByLoanActionExtrinsicIdAndAccountId: ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Account`. */
	accountsByNFTActionExtrinsicIdAndAccountId: ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyConnection;
	args?: Maybe<Scalars["JSON"]>;
	/** Reads a single `Block` that is related to this `Extrinsic`. */
	block?: Maybe<Block>;
	blockId?: Maybe<Scalars["String"]>;
	/** Reads and enables pagination through a set of `Block`. */
	blocksByEventExtrinsicIdAndBlockId: ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Call`. */
	calls: CallsConnection;
	/** Reads and enables pagination through a set of `Call`. */
	callsByCallExtrinsicIdAndParentCallId: ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyConnection;
	/** Reads and enables pagination through a set of `DexAction`. */
	dexActions: DexActionsConnection;
	/** Reads and enables pagination through a set of `Event`. */
	events: EventsConnection;
	/** Reads and enables pagination through a set of `HomaAction`. */
	homaActions: HomaActionsConnection;
	id: Scalars["String"];
	/** Reads and enables pagination through a set of `IncentiveAction`. */
	incentiveActions: IncentiveActionsConnection;
	isSigned?: Maybe<Scalars["Boolean"]>;
	isSuccess?: Maybe<Scalars["Boolean"]>;
	/** Reads and enables pagination through a set of `LoanAction`. */
	loanActions: LoanActionsConnection;
	method?: Maybe<Scalars["String"]>;
	/** Reads and enables pagination through a set of `NFTAction`. */
	nFTActions: NftActionsConnection;
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
	nonce?: Maybe<Scalars["BigFloat"]>;
	/** Reads and enables pagination through a set of `Pool`. */
	poolsByDexActionExtrinsicIdAndPoolId: ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyConnection;
	section?: Maybe<Scalars["String"]>;
	signature?: Maybe<Scalars["String"]>;
	/** Reads a single `Account` that is related to this `Extrinsic`. */
	signer?: Maybe<Account>;
	signerId?: Maybe<Scalars["String"]>;
	timestamp?: Maybe<Scalars["Datetime"]>;
	tip?: Maybe<Scalars["String"]>;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByDexActionExtrinsicIdAndToken0Id: ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByDexActionExtrinsicIdAndToken1Id: ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyConnection;
};

export type ExtrinsicAccountsByCallExtrinsicIdAndSignerIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<AccountFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};

export type ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<AccountFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};

export type ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<AccountFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};

export type ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<AccountFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};

export type ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<AccountFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};

export type ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<AccountFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};

export type ExtrinsicBlocksByEventExtrinsicIdAndBlockIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<BlockFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};

export type ExtrinsicCallsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<CallFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<CallsOrderBy>>;
};

export type ExtrinsicCallsByCallExtrinsicIdAndParentCallIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<CallFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<CallsOrderBy>>;
};

export type ExtrinsicDexActionsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<DexActionFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<DexActionsOrderBy>>;
};

export type ExtrinsicEventsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<EventFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

export type ExtrinsicHomaActionsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<HomaActionFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<HomaActionsOrderBy>>;
};

export type ExtrinsicIncentiveActionsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<IncentiveActionFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<IncentiveActionsOrderBy>>;
};

export type ExtrinsicLoanActionsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<LoanActionFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<LoanActionsOrderBy>>;
};

export type ExtrinsicNFtActionsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<NftActionFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<NftActionsOrderBy>>;
};

export type ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<PoolFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<PoolsOrderBy>>;
};

export type ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Call`. */
export type ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyConnection =
	{
		__typename?: "ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<AccountAggregates>;
		/** A list of edges which contains the `Account`, info from the `Call`, and the cursor to aid in pagination. */
		edges: Array<ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<AccountAggregates>>;
		/** A list of `Account` objects. */
		nodes: Array<Maybe<Account>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Account` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Account` values, with data from `Call`. */
export type ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<AccountsGroupBy>;
		having?: InputMaybe<AccountsHavingInput>;
	};

/** A `Account` edge in the connection, with data from `Call`. */
export type ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyEdge = {
	__typename?: "ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyEdge";
	/** Reads and enables pagination through a set of `Call`. */
	calls: CallsConnection;
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Account` at the end of the edge. */
	node?: Maybe<Account>;
};

/** A `Account` edge in the connection, with data from `Call`. */
export type ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyEdgeCallsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<CallFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<CallsOrderBy>>;
	};

/** A connection to a list of `Account` values, with data from `DexAction`. */
export type ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyConnection =
	{
		__typename?: "ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<AccountAggregates>;
		/** A list of edges which contains the `Account`, info from the `DexAction`, and the cursor to aid in pagination. */
		edges: Array<ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<AccountAggregates>>;
		/** A list of `Account` objects. */
		nodes: Array<Maybe<Account>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Account` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Account` values, with data from `DexAction`. */
export type ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<AccountsGroupBy>;
		having?: InputMaybe<AccountsHavingInput>;
	};

/** A `Account` edge in the connection, with data from `DexAction`. */
export type ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyEdge =
	{
		__typename?: "ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** Reads and enables pagination through a set of `DexAction`. */
		dexActions: DexActionsConnection;
		/** The `Account` at the end of the edge. */
		node?: Maybe<Account>;
	};

/** A `Account` edge in the connection, with data from `DexAction`. */
export type ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyEdgeDexActionsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<DexActionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<DexActionsOrderBy>>;
	};

/** A connection to a list of `Account` values, with data from `HomaAction`. */
export type ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyConnection =
	{
		__typename?: "ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<AccountAggregates>;
		/** A list of edges which contains the `Account`, info from the `HomaAction`, and the cursor to aid in pagination. */
		edges: Array<ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<AccountAggregates>>;
		/** A list of `Account` objects. */
		nodes: Array<Maybe<Account>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Account` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Account` values, with data from `HomaAction`. */
export type ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<AccountsGroupBy>;
		having?: InputMaybe<AccountsHavingInput>;
	};

/** A `Account` edge in the connection, with data from `HomaAction`. */
export type ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyEdge =
	{
		__typename?: "ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** Reads and enables pagination through a set of `HomaAction`. */
		homaActions: HomaActionsConnection;
		/** The `Account` at the end of the edge. */
		node?: Maybe<Account>;
	};

/** A `Account` edge in the connection, with data from `HomaAction`. */
export type ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyEdgeHomaActionsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<HomaActionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<HomaActionsOrderBy>>;
	};

/** A connection to a list of `Account` values, with data from `IncentiveAction`. */
export type ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyConnection =
	{
		__typename?: "ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<AccountAggregates>;
		/** A list of edges which contains the `Account`, info from the `IncentiveAction`, and the cursor to aid in pagination. */
		edges: Array<ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<AccountAggregates>>;
		/** A list of `Account` objects. */
		nodes: Array<Maybe<Account>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Account` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Account` values, with data from `IncentiveAction`. */
export type ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<AccountsGroupBy>;
		having?: InputMaybe<AccountsHavingInput>;
	};

/** A `Account` edge in the connection, with data from `IncentiveAction`. */
export type ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyEdge =
	{
		__typename?: "ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** Reads and enables pagination through a set of `IncentiveAction`. */
		incentiveActions: IncentiveActionsConnection;
		/** The `Account` at the end of the edge. */
		node?: Maybe<Account>;
	};

/** A `Account` edge in the connection, with data from `IncentiveAction`. */
export type ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyEdgeIncentiveActionsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<IncentiveActionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<IncentiveActionsOrderBy>>;
	};

/** A connection to a list of `Account` values, with data from `LoanAction`. */
export type ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyConnection =
	{
		__typename?: "ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<AccountAggregates>;
		/** A list of edges which contains the `Account`, info from the `LoanAction`, and the cursor to aid in pagination. */
		edges: Array<ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<AccountAggregates>>;
		/** A list of `Account` objects. */
		nodes: Array<Maybe<Account>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Account` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Account` values, with data from `LoanAction`. */
export type ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<AccountsGroupBy>;
		having?: InputMaybe<AccountsHavingInput>;
	};

/** A `Account` edge in the connection, with data from `LoanAction`. */
export type ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyEdge =
	{
		__typename?: "ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** Reads and enables pagination through a set of `LoanAction`. */
		loanActions: LoanActionsConnection;
		/** The `Account` at the end of the edge. */
		node?: Maybe<Account>;
	};

/** A `Account` edge in the connection, with data from `LoanAction`. */
export type ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyEdgeLoanActionsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<LoanActionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<LoanActionsOrderBy>>;
	};

/** A connection to a list of `Account` values, with data from `NFTAction`. */
export type ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyConnection =
	{
		__typename?: "ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<AccountAggregates>;
		/** A list of edges which contains the `Account`, info from the `NFTAction`, and the cursor to aid in pagination. */
		edges: Array<ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<AccountAggregates>>;
		/** A list of `Account` objects. */
		nodes: Array<Maybe<Account>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Account` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Account` values, with data from `NFTAction`. */
export type ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<AccountsGroupBy>;
		having?: InputMaybe<AccountsHavingInput>;
	};

/** A `Account` edge in the connection, with data from `NFTAction`. */
export type ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyEdge =
	{
		__typename?: "ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** Reads and enables pagination through a set of `NFTAction`. */
		nFTActions: NftActionsConnection;
		/** The `Account` at the end of the edge. */
		node?: Maybe<Account>;
	};

/** A `Account` edge in the connection, with data from `NFTAction`. */
export type ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyEdgeNFtActionsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<NftActionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<NftActionsOrderBy>>;
	};

export type ExtrinsicAggregates = {
	__typename?: "ExtrinsicAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

/** A connection to a list of `Block` values, with data from `Event`. */
export type ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyConnection = {
	__typename?: "ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<BlockAggregates>;
	/** A list of edges which contains the `Block`, info from the `Event`, and the cursor to aid in pagination. */
	edges: Array<ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<BlockAggregates>>;
	/** A list of `Block` objects. */
	nodes: Array<Maybe<Block>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Block` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Block` values, with data from `Event`. */
export type ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<BlocksGroupBy>;
		having?: InputMaybe<BlocksHavingInput>;
	};

/** A `Block` edge in the connection, with data from `Event`. */
export type ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyEdge = {
	__typename?: "ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** Reads and enables pagination through a set of `Event`. */
	events: EventsConnection;
	/** The `Block` at the end of the edge. */
	node?: Maybe<Block>;
};

/** A `Block` edge in the connection, with data from `Event`. */
export type ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyEdgeEventsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<EventFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<EventsOrderBy>>;
	};

/** A connection to a list of `Call` values, with data from `Call`. */
export type ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyConnection =
	{
		__typename?: "ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<CallAggregates>;
		/** A list of edges which contains the `Call`, info from the `Call`, and the cursor to aid in pagination. */
		edges: Array<ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<CallAggregates>>;
		/** A list of `Call` objects. */
		nodes: Array<Maybe<Call>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Call` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Call` values, with data from `Call`. */
export type ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<CallsGroupBy>;
		having?: InputMaybe<CallsHavingInput>;
	};

/** A `Call` edge in the connection, with data from `Call`. */
export type ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyEdge = {
	__typename?: "ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyEdge";
	/** Reads and enables pagination through a set of `Call`. */
	calls: CallsConnection;
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Call` at the end of the edge. */
	node?: Maybe<Call>;
};

/** A `Call` edge in the connection, with data from `Call`. */
export type ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyEdgeCallsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<CallFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<CallsOrderBy>>;
	};

/** A filter to be used against `Extrinsic` object types. All fields are combined with a logical ‘and.’ */
export type ExtrinsicFilter = {
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<ExtrinsicFilter>>;
	/** Filter by the object’s `args` field. */
	args?: InputMaybe<JsonFilter>;
	/** Filter by the object’s `blockId` field. */
	blockId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Filter by the object’s `isSigned` field. */
	isSigned?: InputMaybe<BooleanFilter>;
	/** Filter by the object’s `isSuccess` field. */
	isSuccess?: InputMaybe<BooleanFilter>;
	/** Filter by the object’s `method` field. */
	method?: InputMaybe<StringFilter>;
	/** Filter by the object’s `nonce` field. */
	nonce?: InputMaybe<BigFloatFilter>;
	/** Negates the expression. */
	not?: InputMaybe<ExtrinsicFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<ExtrinsicFilter>>;
	/** Filter by the object’s `section` field. */
	section?: InputMaybe<StringFilter>;
	/** Filter by the object’s `signature` field. */
	signature?: InputMaybe<StringFilter>;
	/** Filter by the object’s `signerId` field. */
	signerId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `timestamp` field. */
	timestamp?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `tip` field. */
	tip?: InputMaybe<StringFilter>;
};

/** A connection to a list of `Pool` values, with data from `DexAction`. */
export type ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyConnection =
	{
		__typename?: "ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<PoolAggregates>;
		/** A list of edges which contains the `Pool`, info from the `DexAction`, and the cursor to aid in pagination. */
		edges: Array<ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<PoolAggregates>>;
		/** A list of `Pool` objects. */
		nodes: Array<Maybe<Pool>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Pool` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Pool` values, with data from `DexAction`. */
export type ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<PoolsGroupBy>;
		having?: InputMaybe<PoolsHavingInput>;
	};

/** A `Pool` edge in the connection, with data from `DexAction`. */
export type ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyEdge = {
	__typename?: "ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyEdge";
	/** Reads and enables pagination through a set of `DexAction`. */
	actions: DexActionsConnection;
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Pool` at the end of the edge. */
	node?: Maybe<Pool>;
};

/** A `Pool` edge in the connection, with data from `DexAction`. */
export type ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyEdgeActionsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<DexActionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<DexActionsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `DexAction`. */
export type ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyConnection =
	{
		__typename?: "ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `DexAction`, and the cursor to aid in pagination. */
		edges: Array<ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `DexAction`. */
export type ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `DexAction`. */
export type ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyEdge = {
	__typename?: "ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** Reads and enables pagination through a set of `DexAction`. */
	dexActionsByToken0Id: DexActionsConnection;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
};

/** A `Token` edge in the connection, with data from `DexAction`. */
export type ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyEdgeDexActionsByToken0IdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<DexActionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<DexActionsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `DexAction`. */
export type ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyConnection =
	{
		__typename?: "ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `DexAction`, and the cursor to aid in pagination. */
		edges: Array<ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `DexAction`. */
export type ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `DexAction`. */
export type ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyEdge = {
	__typename?: "ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** Reads and enables pagination through a set of `DexAction`. */
	dexActionsByToken1Id: DexActionsConnection;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
};

/** A `Token` edge in the connection, with data from `DexAction`. */
export type ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyEdgeDexActionsByToken1IdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<DexActionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<DexActionsOrderBy>>;
	};

/** A connection to a list of `Extrinsic` values. */
export type ExtrinsicsConnection = {
	__typename?: "ExtrinsicsConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<ExtrinsicAggregates>;
	/** A list of edges which contains the `Extrinsic` and cursor to aid in pagination. */
	edges: Array<ExtrinsicsEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<ExtrinsicAggregates>>;
	/** A list of `Extrinsic` objects. */
	nodes: Array<Maybe<Extrinsic>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Extrinsic` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Extrinsic` values. */
export type ExtrinsicsConnectionGroupedAggregatesArgs = {
	groupBy: Array<ExtrinsicsGroupBy>;
	having?: InputMaybe<ExtrinsicsHavingInput>;
};

/** A `Extrinsic` edge in the connection. */
export type ExtrinsicsEdge = {
	__typename?: "ExtrinsicsEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Extrinsic` at the end of the edge. */
	node?: Maybe<Extrinsic>;
};

/** Grouping methods for `Extrinsic` for usage during aggregation. */
export enum ExtrinsicsGroupBy {
	Args = "ARGS",
	BlockId = "BLOCK_ID",
	IsSigned = "IS_SIGNED",
	IsSuccess = "IS_SUCCESS",
	Method = "METHOD",
	Nonce = "NONCE",
	Section = "SECTION",
	Signature = "SIGNATURE",
	SignerId = "SIGNER_ID",
	Timestamp = "TIMESTAMP",
	Tip = "TIP",
}

/** Conditions for `Extrinsic` aggregates. */
export type ExtrinsicsHavingInput = {
	AND?: InputMaybe<Array<ExtrinsicsHavingInput>>;
	OR?: InputMaybe<Array<ExtrinsicsHavingInput>>;
};

/** Methods to use when ordering `Extrinsic`. */
export enum ExtrinsicsOrderBy {
	ArgsAsc = "ARGS_ASC",
	ArgsDesc = "ARGS_DESC",
	BlockIdAsc = "BLOCK_ID_ASC",
	BlockIdDesc = "BLOCK_ID_DESC",
	CallsCountAsc = "CALLS_COUNT_ASC",
	CallsCountDesc = "CALLS_COUNT_DESC",
	DexActionsCountAsc = "DEX_ACTIONS_COUNT_ASC",
	DexActionsCountDesc = "DEX_ACTIONS_COUNT_DESC",
	EventsCountAsc = "EVENTS_COUNT_ASC",
	EventsCountDesc = "EVENTS_COUNT_DESC",
	HomaActionsCountAsc = "HOMA_ACTIONS_COUNT_ASC",
	HomaActionsCountDesc = "HOMA_ACTIONS_COUNT_DESC",
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	IncentiveActionsCountAsc = "INCENTIVE_ACTIONS_COUNT_ASC",
	IncentiveActionsCountDesc = "INCENTIVE_ACTIONS_COUNT_DESC",
	IsSignedAsc = "IS_SIGNED_ASC",
	IsSignedDesc = "IS_SIGNED_DESC",
	IsSuccessAsc = "IS_SUCCESS_ASC",
	IsSuccessDesc = "IS_SUCCESS_DESC",
	LoanActionsCountAsc = "LOAN_ACTIONS_COUNT_ASC",
	LoanActionsCountDesc = "LOAN_ACTIONS_COUNT_DESC",
	MethodAsc = "METHOD_ASC",
	MethodDesc = "METHOD_DESC",
	Natural = "NATURAL",
	NonceAsc = "NONCE_ASC",
	NonceDesc = "NONCE_DESC",
	NFtactionsCountAsc = "N_FTACTIONS_COUNT_ASC",
	NFtactionsCountDesc = "N_FTACTIONS_COUNT_DESC",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	SectionAsc = "SECTION_ASC",
	SectionDesc = "SECTION_DESC",
	SignatureAsc = "SIGNATURE_ASC",
	SignatureDesc = "SIGNATURE_DESC",
	SignerIdAsc = "SIGNER_ID_ASC",
	SignerIdDesc = "SIGNER_ID_DESC",
	TimestampAsc = "TIMESTAMP_ASC",
	TimestampDesc = "TIMESTAMP_DESC",
	TipAsc = "TIP_ASC",
	TipDesc = "TIP_DESC",
}

export type HomaAction = Node & {
	__typename?: "HomaAction";
	/** Reads a single `Account` that is related to this `HomaAction`. */
	account?: Maybe<Account>;
	accountId?: Maybe<Scalars["String"]>;
	data?: Maybe<Scalars["JSON"]>;
	/** Reads a single `Extrinsic` that is related to this `HomaAction`. */
	extrinsic?: Maybe<Extrinsic>;
	extrinsicId?: Maybe<Scalars["String"]>;
	id: Scalars["String"];
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
	subType?: Maybe<Scalars["String"]>;
	timestamp?: Maybe<Scalars["Datetime"]>;
	type?: Maybe<Scalars["String"]>;
};

export type HomaActionAggregates = {
	__typename?: "HomaActionAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

/** A filter to be used against `HomaAction` object types. All fields are combined with a logical ‘and.’ */
export type HomaActionFilter = {
	/** Filter by the object’s `accountId` field. */
	accountId?: InputMaybe<StringFilter>;
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<HomaActionFilter>>;
	/** Filter by the object’s `data` field. */
	data?: InputMaybe<JsonFilter>;
	/** Filter by the object’s `extrinsicId` field. */
	extrinsicId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Negates the expression. */
	not?: InputMaybe<HomaActionFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<HomaActionFilter>>;
	/** Filter by the object’s `subType` field. */
	subType?: InputMaybe<StringFilter>;
	/** Filter by the object’s `timestamp` field. */
	timestamp?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `type` field. */
	type?: InputMaybe<StringFilter>;
};

/** A connection to a list of `HomaAction` values. */
export type HomaActionsConnection = {
	__typename?: "HomaActionsConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<HomaActionAggregates>;
	/** A list of edges which contains the `HomaAction` and cursor to aid in pagination. */
	edges: Array<HomaActionsEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<HomaActionAggregates>>;
	/** A list of `HomaAction` objects. */
	nodes: Array<Maybe<HomaAction>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `HomaAction` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `HomaAction` values. */
export type HomaActionsConnectionGroupedAggregatesArgs = {
	groupBy: Array<HomaActionsGroupBy>;
	having?: InputMaybe<HomaActionsHavingInput>;
};

/** A `HomaAction` edge in the connection. */
export type HomaActionsEdge = {
	__typename?: "HomaActionsEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `HomaAction` at the end of the edge. */
	node?: Maybe<HomaAction>;
};

/** Grouping methods for `HomaAction` for usage during aggregation. */
export enum HomaActionsGroupBy {
	AccountId = "ACCOUNT_ID",
	Data = "DATA",
	ExtrinsicId = "EXTRINSIC_ID",
	SubType = "SUB_TYPE",
	Timestamp = "TIMESTAMP",
	Type = "TYPE",
}

/** Conditions for `HomaAction` aggregates. */
export type HomaActionsHavingInput = {
	AND?: InputMaybe<Array<HomaActionsHavingInput>>;
	OR?: InputMaybe<Array<HomaActionsHavingInput>>;
};

/** Methods to use when ordering `HomaAction`. */
export enum HomaActionsOrderBy {
	AccountIdAsc = "ACCOUNT_ID_ASC",
	AccountIdDesc = "ACCOUNT_ID_DESC",
	DataAsc = "DATA_ASC",
	DataDesc = "DATA_DESC",
	ExtrinsicIdAsc = "EXTRINSIC_ID_ASC",
	ExtrinsicIdDesc = "EXTRINSIC_ID_DESC",
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	Natural = "NATURAL",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	SubTypeAsc = "SUB_TYPE_ASC",
	SubTypeDesc = "SUB_TYPE_DESC",
	TimestampAsc = "TIMESTAMP_ASC",
	TimestampDesc = "TIMESTAMP_DESC",
	TypeAsc = "TYPE_ASC",
	TypeDesc = "TYPE_DESC",
}

export type IncentiveAction = Node & {
	__typename?: "IncentiveAction";
	/** Reads a single `Account` that is related to this `IncentiveAction`. */
	account?: Maybe<Account>;
	accountId?: Maybe<Scalars["String"]>;
	data?: Maybe<Scalars["JSON"]>;
	/** Reads a single `Extrinsic` that is related to this `IncentiveAction`. */
	extrinsic?: Maybe<Extrinsic>;
	extrinsicId?: Maybe<Scalars["String"]>;
	id: Scalars["String"];
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
	subType?: Maybe<Scalars["String"]>;
	timestamp?: Maybe<Scalars["Datetime"]>;
	type?: Maybe<Scalars["String"]>;
};

export type IncentiveActionAggregates = {
	__typename?: "IncentiveActionAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

/** A filter to be used against `IncentiveAction` object types. All fields are combined with a logical ‘and.’ */
export type IncentiveActionFilter = {
	/** Filter by the object’s `accountId` field. */
	accountId?: InputMaybe<StringFilter>;
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<IncentiveActionFilter>>;
	/** Filter by the object’s `data` field. */
	data?: InputMaybe<JsonFilter>;
	/** Filter by the object’s `extrinsicId` field. */
	extrinsicId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Negates the expression. */
	not?: InputMaybe<IncentiveActionFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<IncentiveActionFilter>>;
	/** Filter by the object’s `subType` field. */
	subType?: InputMaybe<StringFilter>;
	/** Filter by the object’s `timestamp` field. */
	timestamp?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `type` field. */
	type?: InputMaybe<StringFilter>;
};

/** A connection to a list of `IncentiveAction` values. */
export type IncentiveActionsConnection = {
	__typename?: "IncentiveActionsConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<IncentiveActionAggregates>;
	/** A list of edges which contains the `IncentiveAction` and cursor to aid in pagination. */
	edges: Array<IncentiveActionsEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<IncentiveActionAggregates>>;
	/** A list of `IncentiveAction` objects. */
	nodes: Array<Maybe<IncentiveAction>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `IncentiveAction` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `IncentiveAction` values. */
export type IncentiveActionsConnectionGroupedAggregatesArgs = {
	groupBy: Array<IncentiveActionsGroupBy>;
	having?: InputMaybe<IncentiveActionsHavingInput>;
};

/** A `IncentiveAction` edge in the connection. */
export type IncentiveActionsEdge = {
	__typename?: "IncentiveActionsEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `IncentiveAction` at the end of the edge. */
	node?: Maybe<IncentiveAction>;
};

/** Grouping methods for `IncentiveAction` for usage during aggregation. */
export enum IncentiveActionsGroupBy {
	AccountId = "ACCOUNT_ID",
	Data = "DATA",
	ExtrinsicId = "EXTRINSIC_ID",
	SubType = "SUB_TYPE",
	Timestamp = "TIMESTAMP",
	Type = "TYPE",
}

/** Conditions for `IncentiveAction` aggregates. */
export type IncentiveActionsHavingInput = {
	AND?: InputMaybe<Array<IncentiveActionsHavingInput>>;
	OR?: InputMaybe<Array<IncentiveActionsHavingInput>>;
};

/** Methods to use when ordering `IncentiveAction`. */
export enum IncentiveActionsOrderBy {
	AccountIdAsc = "ACCOUNT_ID_ASC",
	AccountIdDesc = "ACCOUNT_ID_DESC",
	DataAsc = "DATA_ASC",
	DataDesc = "DATA_DESC",
	ExtrinsicIdAsc = "EXTRINSIC_ID_ASC",
	ExtrinsicIdDesc = "EXTRINSIC_ID_DESC",
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	Natural = "NATURAL",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	SubTypeAsc = "SUB_TYPE_ASC",
	SubTypeDesc = "SUB_TYPE_DESC",
	TimestampAsc = "TIMESTAMP_ASC",
	TimestampDesc = "TIMESTAMP_DESC",
	TypeAsc = "TYPE_ASC",
	TypeDesc = "TYPE_DESC",
}

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
	/** Not equal to the specified value, treating null like an ordinary value. */
	distinctFrom?: InputMaybe<Scalars["Int"]>;
	/** Equal to the specified value. */
	equalTo?: InputMaybe<Scalars["Int"]>;
	/** Greater than the specified value. */
	greaterThan?: InputMaybe<Scalars["Int"]>;
	/** Greater than or equal to the specified value. */
	greaterThanOrEqualTo?: InputMaybe<Scalars["Int"]>;
	/** Included in the specified list. */
	in?: InputMaybe<Array<Scalars["Int"]>>;
	/** Is null (if `true` is specified) or is not null (if `false` is specified). */
	isNull?: InputMaybe<Scalars["Boolean"]>;
	/** Less than the specified value. */
	lessThan?: InputMaybe<Scalars["Int"]>;
	/** Less than or equal to the specified value. */
	lessThanOrEqualTo?: InputMaybe<Scalars["Int"]>;
	/** Equal to the specified value, treating null like an ordinary value. */
	notDistinctFrom?: InputMaybe<Scalars["Int"]>;
	/** Not equal to the specified value. */
	notEqualTo?: InputMaybe<Scalars["Int"]>;
	/** Not included in the specified list. */
	notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

/** A filter to be used against JSON fields. All fields are combined with a logical ‘and.’ */
export type JsonFilter = {
	/** Contained by the specified JSON. */
	containedBy?: InputMaybe<Scalars["JSON"]>;
	/** Contains the specified JSON. */
	contains?: InputMaybe<Scalars["JSON"]>;
	/** Contains all of the specified keys. */
	containsAllKeys?: InputMaybe<Array<Scalars["String"]>>;
	/** Contains any of the specified keys. */
	containsAnyKeys?: InputMaybe<Array<Scalars["String"]>>;
	/** Contains the specified key. */
	containsKey?: InputMaybe<Scalars["String"]>;
	/** Not equal to the specified value, treating null like an ordinary value. */
	distinctFrom?: InputMaybe<Scalars["JSON"]>;
	/** Equal to the specified value. */
	equalTo?: InputMaybe<Scalars["JSON"]>;
	/** Greater than the specified value. */
	greaterThan?: InputMaybe<Scalars["JSON"]>;
	/** Greater than or equal to the specified value. */
	greaterThanOrEqualTo?: InputMaybe<Scalars["JSON"]>;
	/** Included in the specified list. */
	in?: InputMaybe<Array<Scalars["JSON"]>>;
	/** Is null (if `true` is specified) or is not null (if `false` is specified). */
	isNull?: InputMaybe<Scalars["Boolean"]>;
	/** Less than the specified value. */
	lessThan?: InputMaybe<Scalars["JSON"]>;
	/** Less than or equal to the specified value. */
	lessThanOrEqualTo?: InputMaybe<Scalars["JSON"]>;
	/** Equal to the specified value, treating null like an ordinary value. */
	notDistinctFrom?: InputMaybe<Scalars["JSON"]>;
	/** Not equal to the specified value. */
	notEqualTo?: InputMaybe<Scalars["JSON"]>;
	/** Not included in the specified list. */
	notIn?: InputMaybe<Array<Scalars["JSON"]>>;
};

export type LoanAction = Node & {
	__typename?: "LoanAction";
	/** Reads a single `Account` that is related to this `LoanAction`. */
	account?: Maybe<Account>;
	accountId?: Maybe<Scalars["String"]>;
	data?: Maybe<Scalars["JSON"]>;
	/** Reads a single `Extrinsic` that is related to this `LoanAction`. */
	extrinsic?: Maybe<Extrinsic>;
	extrinsicId?: Maybe<Scalars["String"]>;
	id: Scalars["String"];
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
	subType?: Maybe<Scalars["String"]>;
	timestamp?: Maybe<Scalars["Datetime"]>;
	type?: Maybe<Scalars["String"]>;
};

export type LoanActionAggregates = {
	__typename?: "LoanActionAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

/** A filter to be used against `LoanAction` object types. All fields are combined with a logical ‘and.’ */
export type LoanActionFilter = {
	/** Filter by the object’s `accountId` field. */
	accountId?: InputMaybe<StringFilter>;
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<LoanActionFilter>>;
	/** Filter by the object’s `data` field. */
	data?: InputMaybe<JsonFilter>;
	/** Filter by the object’s `extrinsicId` field. */
	extrinsicId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Negates the expression. */
	not?: InputMaybe<LoanActionFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<LoanActionFilter>>;
	/** Filter by the object’s `subType` field. */
	subType?: InputMaybe<StringFilter>;
	/** Filter by the object’s `timestamp` field. */
	timestamp?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `type` field. */
	type?: InputMaybe<StringFilter>;
};

/** A connection to a list of `LoanAction` values. */
export type LoanActionsConnection = {
	__typename?: "LoanActionsConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<LoanActionAggregates>;
	/** A list of edges which contains the `LoanAction` and cursor to aid in pagination. */
	edges: Array<LoanActionsEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<LoanActionAggregates>>;
	/** A list of `LoanAction` objects. */
	nodes: Array<Maybe<LoanAction>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `LoanAction` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `LoanAction` values. */
export type LoanActionsConnectionGroupedAggregatesArgs = {
	groupBy: Array<LoanActionsGroupBy>;
	having?: InputMaybe<LoanActionsHavingInput>;
};

/** A `LoanAction` edge in the connection. */
export type LoanActionsEdge = {
	__typename?: "LoanActionsEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `LoanAction` at the end of the edge. */
	node?: Maybe<LoanAction>;
};

/** Grouping methods for `LoanAction` for usage during aggregation. */
export enum LoanActionsGroupBy {
	AccountId = "ACCOUNT_ID",
	Data = "DATA",
	ExtrinsicId = "EXTRINSIC_ID",
	SubType = "SUB_TYPE",
	Timestamp = "TIMESTAMP",
	Type = "TYPE",
}

/** Conditions for `LoanAction` aggregates. */
export type LoanActionsHavingInput = {
	AND?: InputMaybe<Array<LoanActionsHavingInput>>;
	OR?: InputMaybe<Array<LoanActionsHavingInput>>;
};

/** Methods to use when ordering `LoanAction`. */
export enum LoanActionsOrderBy {
	AccountIdAsc = "ACCOUNT_ID_ASC",
	AccountIdDesc = "ACCOUNT_ID_DESC",
	DataAsc = "DATA_ASC",
	DataDesc = "DATA_DESC",
	ExtrinsicIdAsc = "EXTRINSIC_ID_ASC",
	ExtrinsicIdDesc = "EXTRINSIC_ID_DESC",
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	Natural = "NATURAL",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	SubTypeAsc = "SUB_TYPE_ASC",
	SubTypeDesc = "SUB_TYPE_DESC",
	TimestampAsc = "TIMESTAMP_ASC",
	TimestampDesc = "TIMESTAMP_DESC",
	TypeAsc = "TYPE_ASC",
	TypeDesc = "TYPE_DESC",
}

export type LoanParam = Node & {
	__typename?: "LoanParam";
	/** Reads a single `Token` that is related to this `LoanParam`. */
	collateral?: Maybe<Token>;
	collateralId?: Maybe<Scalars["String"]>;
	debitExchangeRate?: Maybe<Scalars["String"]>;
	globalInterestRatePerSec?: Maybe<Scalars["String"]>;
	id: Scalars["String"];
	interestRatePerSec?: Maybe<Scalars["String"]>;
	liquidationPenalty?: Maybe<Scalars["String"]>;
	liquidationRatio?: Maybe<Scalars["String"]>;
	maximumTotalDebitValue?: Maybe<Scalars["String"]>;
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
	requiredCollateralRatio?: Maybe<Scalars["String"]>;
	/** Reads a single `Block` that is related to this `LoanParam`. */
	startAtBlock?: Maybe<Block>;
	startAtBlockId?: Maybe<Scalars["String"]>;
	startAtBlockNumber?: Maybe<Scalars["BigFloat"]>;
};

export type LoanParamAggregates = {
	__typename?: "LoanParamAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

/** A filter to be used against `LoanParam` object types. All fields are combined with a logical ‘and.’ */
export type LoanParamFilter = {
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<LoanParamFilter>>;
	/** Filter by the object’s `collateralId` field. */
	collateralId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `debitExchangeRate` field. */
	debitExchangeRate?: InputMaybe<StringFilter>;
	/** Filter by the object’s `globalInterestRatePerSec` field. */
	globalInterestRatePerSec?: InputMaybe<StringFilter>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Filter by the object’s `interestRatePerSec` field. */
	interestRatePerSec?: InputMaybe<StringFilter>;
	/** Filter by the object’s `liquidationPenalty` field. */
	liquidationPenalty?: InputMaybe<StringFilter>;
	/** Filter by the object’s `liquidationRatio` field. */
	liquidationRatio?: InputMaybe<StringFilter>;
	/** Filter by the object’s `maximumTotalDebitValue` field. */
	maximumTotalDebitValue?: InputMaybe<StringFilter>;
	/** Negates the expression. */
	not?: InputMaybe<LoanParamFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<LoanParamFilter>>;
	/** Filter by the object’s `requiredCollateralRatio` field. */
	requiredCollateralRatio?: InputMaybe<StringFilter>;
	/** Filter by the object’s `startAtBlockId` field. */
	startAtBlockId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `startAtBlockNumber` field. */
	startAtBlockNumber?: InputMaybe<BigFloatFilter>;
};

/** A connection to a list of `LoanParam` values. */
export type LoanParamsConnection = {
	__typename?: "LoanParamsConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<LoanParamAggregates>;
	/** A list of edges which contains the `LoanParam` and cursor to aid in pagination. */
	edges: Array<LoanParamsEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<LoanParamAggregates>>;
	/** A list of `LoanParam` objects. */
	nodes: Array<Maybe<LoanParam>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `LoanParam` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `LoanParam` values. */
export type LoanParamsConnectionGroupedAggregatesArgs = {
	groupBy: Array<LoanParamsGroupBy>;
	having?: InputMaybe<LoanParamsHavingInput>;
};

/** A `LoanParam` edge in the connection. */
export type LoanParamsEdge = {
	__typename?: "LoanParamsEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `LoanParam` at the end of the edge. */
	node?: Maybe<LoanParam>;
};

/** Grouping methods for `LoanParam` for usage during aggregation. */
export enum LoanParamsGroupBy {
	CollateralId = "COLLATERAL_ID",
	DebitExchangeRate = "DEBIT_EXCHANGE_RATE",
	GlobalInterestRatePerSec = "GLOBAL_INTEREST_RATE_PER_SEC",
	InterestRatePerSec = "INTEREST_RATE_PER_SEC",
	LiquidationPenalty = "LIQUIDATION_PENALTY",
	LiquidationRatio = "LIQUIDATION_RATIO",
	MaximumTotalDebitValue = "MAXIMUM_TOTAL_DEBIT_VALUE",
	RequiredCollateralRatio = "REQUIRED_COLLATERAL_RATIO",
	StartAtBlockId = "START_AT_BLOCK_ID",
	StartAtBlockNumber = "START_AT_BLOCK_NUMBER",
}

/** Conditions for `LoanParam` aggregates. */
export type LoanParamsHavingInput = {
	AND?: InputMaybe<Array<LoanParamsHavingInput>>;
	OR?: InputMaybe<Array<LoanParamsHavingInput>>;
};

/** A connection to a list of `LoanParamsHistory` values. */
export type LoanParamsHistoriesConnection = {
	__typename?: "LoanParamsHistoriesConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<LoanParamsHistoryAggregates>;
	/** A list of edges which contains the `LoanParamsHistory` and cursor to aid in pagination. */
	edges: Array<LoanParamsHistoriesEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<LoanParamsHistoryAggregates>>;
	/** A list of `LoanParamsHistory` objects. */
	nodes: Array<Maybe<LoanParamsHistory>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `LoanParamsHistory` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `LoanParamsHistory` values. */
export type LoanParamsHistoriesConnectionGroupedAggregatesArgs = {
	groupBy: Array<LoanParamsHistoriesGroupBy>;
	having?: InputMaybe<LoanParamsHistoriesHavingInput>;
};

/** A `LoanParamsHistory` edge in the connection. */
export type LoanParamsHistoriesEdge = {
	__typename?: "LoanParamsHistoriesEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `LoanParamsHistory` at the end of the edge. */
	node?: Maybe<LoanParamsHistory>;
};

/** Grouping methods for `LoanParamsHistory` for usage during aggregation. */
export enum LoanParamsHistoriesGroupBy {
	CollateralId = "COLLATERAL_ID",
	EndAtBlockId = "END_AT_BLOCK_ID",
	EndAtBlockNumber = "END_AT_BLOCK_NUMBER",
	GlobalInterestRatePerSec = "GLOBAL_INTEREST_RATE_PER_SEC",
	InterestRatePerSec = "INTEREST_RATE_PER_SEC",
	LiquidationPenalty = "LIQUIDATION_PENALTY",
	LiquidationRatio = "LIQUIDATION_RATIO",
	MaximumTotalDebitValue = "MAXIMUM_TOTAL_DEBIT_VALUE",
	RequiredCollateralRatio = "REQUIRED_COLLATERAL_RATIO",
	StartAtBlockId = "START_AT_BLOCK_ID",
	StartAtBlockNumber = "START_AT_BLOCK_NUMBER",
}

/** Conditions for `LoanParamsHistory` aggregates. */
export type LoanParamsHistoriesHavingInput = {
	AND?: InputMaybe<Array<LoanParamsHistoriesHavingInput>>;
	OR?: InputMaybe<Array<LoanParamsHistoriesHavingInput>>;
};

/** Methods to use when ordering `LoanParamsHistory`. */
export enum LoanParamsHistoriesOrderBy {
	CollateralIdAsc = "COLLATERAL_ID_ASC",
	CollateralIdDesc = "COLLATERAL_ID_DESC",
	EndAtBlockIdAsc = "END_AT_BLOCK_ID_ASC",
	EndAtBlockIdDesc = "END_AT_BLOCK_ID_DESC",
	EndAtBlockNumberAsc = "END_AT_BLOCK_NUMBER_ASC",
	EndAtBlockNumberDesc = "END_AT_BLOCK_NUMBER_DESC",
	GlobalInterestRatePerSecAsc = "GLOBAL_INTEREST_RATE_PER_SEC_ASC",
	GlobalInterestRatePerSecDesc = "GLOBAL_INTEREST_RATE_PER_SEC_DESC",
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	InterestRatePerSecAsc = "INTEREST_RATE_PER_SEC_ASC",
	InterestRatePerSecDesc = "INTEREST_RATE_PER_SEC_DESC",
	LiquidationPenaltyAsc = "LIQUIDATION_PENALTY_ASC",
	LiquidationPenaltyDesc = "LIQUIDATION_PENALTY_DESC",
	LiquidationRatioAsc = "LIQUIDATION_RATIO_ASC",
	LiquidationRatioDesc = "LIQUIDATION_RATIO_DESC",
	MaximumTotalDebitValueAsc = "MAXIMUM_TOTAL_DEBIT_VALUE_ASC",
	MaximumTotalDebitValueDesc = "MAXIMUM_TOTAL_DEBIT_VALUE_DESC",
	Natural = "NATURAL",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	RequiredCollateralRatioAsc = "REQUIRED_COLLATERAL_RATIO_ASC",
	RequiredCollateralRatioDesc = "REQUIRED_COLLATERAL_RATIO_DESC",
	StartAtBlockIdAsc = "START_AT_BLOCK_ID_ASC",
	StartAtBlockIdDesc = "START_AT_BLOCK_ID_DESC",
	StartAtBlockNumberAsc = "START_AT_BLOCK_NUMBER_ASC",
	StartAtBlockNumberDesc = "START_AT_BLOCK_NUMBER_DESC",
}

export type LoanParamsHistory = Node & {
	__typename?: "LoanParamsHistory";
	/** Reads a single `Token` that is related to this `LoanParamsHistory`. */
	collateral?: Maybe<Token>;
	collateralId?: Maybe<Scalars["String"]>;
	/** Reads a single `Block` that is related to this `LoanParamsHistory`. */
	endAtBlock?: Maybe<Block>;
	endAtBlockId?: Maybe<Scalars["String"]>;
	endAtBlockNumber?: Maybe<Scalars["BigFloat"]>;
	globalInterestRatePerSec?: Maybe<Scalars["String"]>;
	id: Scalars["String"];
	interestRatePerSec?: Maybe<Scalars["String"]>;
	liquidationPenalty?: Maybe<Scalars["String"]>;
	liquidationRatio?: Maybe<Scalars["String"]>;
	maximumTotalDebitValue?: Maybe<Scalars["String"]>;
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
	requiredCollateralRatio?: Maybe<Scalars["String"]>;
	/** Reads a single `Block` that is related to this `LoanParamsHistory`. */
	startAtBlock?: Maybe<Block>;
	startAtBlockId?: Maybe<Scalars["String"]>;
	startAtBlockNumber?: Maybe<Scalars["BigFloat"]>;
};

export type LoanParamsHistoryAggregates = {
	__typename?: "LoanParamsHistoryAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

/** A filter to be used against `LoanParamsHistory` object types. All fields are combined with a logical ‘and.’ */
export type LoanParamsHistoryFilter = {
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<LoanParamsHistoryFilter>>;
	/** Filter by the object’s `collateralId` field. */
	collateralId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `endAtBlockId` field. */
	endAtBlockId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `endAtBlockNumber` field. */
	endAtBlockNumber?: InputMaybe<BigFloatFilter>;
	/** Filter by the object’s `globalInterestRatePerSec` field. */
	globalInterestRatePerSec?: InputMaybe<StringFilter>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Filter by the object’s `interestRatePerSec` field. */
	interestRatePerSec?: InputMaybe<StringFilter>;
	/** Filter by the object’s `liquidationPenalty` field. */
	liquidationPenalty?: InputMaybe<StringFilter>;
	/** Filter by the object’s `liquidationRatio` field. */
	liquidationRatio?: InputMaybe<StringFilter>;
	/** Filter by the object’s `maximumTotalDebitValue` field. */
	maximumTotalDebitValue?: InputMaybe<StringFilter>;
	/** Negates the expression. */
	not?: InputMaybe<LoanParamsHistoryFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<LoanParamsHistoryFilter>>;
	/** Filter by the object’s `requiredCollateralRatio` field. */
	requiredCollateralRatio?: InputMaybe<StringFilter>;
	/** Filter by the object’s `startAtBlockId` field. */
	startAtBlockId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `startAtBlockNumber` field. */
	startAtBlockNumber?: InputMaybe<BigFloatFilter>;
};

/** Methods to use when ordering `LoanParam`. */
export enum LoanParamsOrderBy {
	CollateralIdAsc = "COLLATERAL_ID_ASC",
	CollateralIdDesc = "COLLATERAL_ID_DESC",
	DebitExchangeRateAsc = "DEBIT_EXCHANGE_RATE_ASC",
	DebitExchangeRateDesc = "DEBIT_EXCHANGE_RATE_DESC",
	GlobalInterestRatePerSecAsc = "GLOBAL_INTEREST_RATE_PER_SEC_ASC",
	GlobalInterestRatePerSecDesc = "GLOBAL_INTEREST_RATE_PER_SEC_DESC",
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	InterestRatePerSecAsc = "INTEREST_RATE_PER_SEC_ASC",
	InterestRatePerSecDesc = "INTEREST_RATE_PER_SEC_DESC",
	LiquidationPenaltyAsc = "LIQUIDATION_PENALTY_ASC",
	LiquidationPenaltyDesc = "LIQUIDATION_PENALTY_DESC",
	LiquidationRatioAsc = "LIQUIDATION_RATIO_ASC",
	LiquidationRatioDesc = "LIQUIDATION_RATIO_DESC",
	MaximumTotalDebitValueAsc = "MAXIMUM_TOTAL_DEBIT_VALUE_ASC",
	MaximumTotalDebitValueDesc = "MAXIMUM_TOTAL_DEBIT_VALUE_DESC",
	Natural = "NATURAL",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	RequiredCollateralRatioAsc = "REQUIRED_COLLATERAL_RATIO_ASC",
	RequiredCollateralRatioDesc = "REQUIRED_COLLATERAL_RATIO_DESC",
	StartAtBlockIdAsc = "START_AT_BLOCK_ID_ASC",
	StartAtBlockIdDesc = "START_AT_BLOCK_ID_DESC",
	StartAtBlockNumberAsc = "START_AT_BLOCK_NUMBER_ASC",
	StartAtBlockNumberDesc = "START_AT_BLOCK_NUMBER_DESC",
}

export type LoanPosition = Node & {
	__typename?: "LoanPosition";
	/** Reads a single `Token` that is related to this `LoanPosition`. */
	collateral?: Maybe<Token>;
	collateralAmount?: Maybe<Scalars["String"]>;
	collateralId?: Maybe<Scalars["String"]>;
	debitAmount?: Maybe<Scalars["String"]>;
	id: Scalars["String"];
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
	/** Reads a single `Account` that is related to this `LoanPosition`. */
	owner?: Maybe<Account>;
	ownerId?: Maybe<Scalars["String"]>;
};

export type LoanPositionAggregates = {
	__typename?: "LoanPositionAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

/** A filter to be used against `LoanPosition` object types. All fields are combined with a logical ‘and.’ */
export type LoanPositionFilter = {
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<LoanPositionFilter>>;
	/** Filter by the object’s `collateralAmount` field. */
	collateralAmount?: InputMaybe<StringFilter>;
	/** Filter by the object’s `collateralId` field. */
	collateralId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `debitAmount` field. */
	debitAmount?: InputMaybe<StringFilter>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Negates the expression. */
	not?: InputMaybe<LoanPositionFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<LoanPositionFilter>>;
	/** Filter by the object’s `ownerId` field. */
	ownerId?: InputMaybe<StringFilter>;
};

/** A connection to a list of `LoanPosition` values. */
export type LoanPositionsConnection = {
	__typename?: "LoanPositionsConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<LoanPositionAggregates>;
	/** A list of edges which contains the `LoanPosition` and cursor to aid in pagination. */
	edges: Array<LoanPositionsEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<LoanPositionAggregates>>;
	/** A list of `LoanPosition` objects. */
	nodes: Array<Maybe<LoanPosition>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `LoanPosition` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `LoanPosition` values. */
export type LoanPositionsConnectionGroupedAggregatesArgs = {
	groupBy: Array<LoanPositionsGroupBy>;
	having?: InputMaybe<LoanPositionsHavingInput>;
};

/** A `LoanPosition` edge in the connection. */
export type LoanPositionsEdge = {
	__typename?: "LoanPositionsEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `LoanPosition` at the end of the edge. */
	node?: Maybe<LoanPosition>;
};

/** Grouping methods for `LoanPosition` for usage during aggregation. */
export enum LoanPositionsGroupBy {
	CollateralAmount = "COLLATERAL_AMOUNT",
	CollateralId = "COLLATERAL_ID",
	DebitAmount = "DEBIT_AMOUNT",
	OwnerId = "OWNER_ID",
}

/** Conditions for `LoanPosition` aggregates. */
export type LoanPositionsHavingInput = {
	AND?: InputMaybe<Array<LoanPositionsHavingInput>>;
	OR?: InputMaybe<Array<LoanPositionsHavingInput>>;
};

/** Methods to use when ordering `LoanPosition`. */
export enum LoanPositionsOrderBy {
	CollateralAmountAsc = "COLLATERAL_AMOUNT_ASC",
	CollateralAmountDesc = "COLLATERAL_AMOUNT_DESC",
	CollateralIdAsc = "COLLATERAL_ID_ASC",
	CollateralIdDesc = "COLLATERAL_ID_DESC",
	DebitAmountAsc = "DEBIT_AMOUNT_ASC",
	DebitAmountDesc = "DEBIT_AMOUNT_DESC",
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	Natural = "NATURAL",
	OwnerIdAsc = "OWNER_ID_ASC",
	OwnerIdDesc = "OWNER_ID_DESC",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
}

export type NftAction = Node & {
	__typename?: "NFTAction";
	/** Reads a single `Account` that is related to this `NFTAction`. */
	account?: Maybe<Account>;
	accountId?: Maybe<Scalars["String"]>;
	data?: Maybe<Scalars["JSON"]>;
	/** Reads a single `Extrinsic` that is related to this `NFTAction`. */
	extrinsic?: Maybe<Extrinsic>;
	extrinsicId?: Maybe<Scalars["String"]>;
	id: Scalars["String"];
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
	subType?: Maybe<Scalars["String"]>;
	timestamp?: Maybe<Scalars["Datetime"]>;
	type?: Maybe<Scalars["String"]>;
};

export type NftActionAggregates = {
	__typename?: "NFTActionAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

/** A filter to be used against `NFTAction` object types. All fields are combined with a logical ‘and.’ */
export type NftActionFilter = {
	/** Filter by the object’s `accountId` field. */
	accountId?: InputMaybe<StringFilter>;
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<NftActionFilter>>;
	/** Filter by the object’s `data` field. */
	data?: InputMaybe<JsonFilter>;
	/** Filter by the object’s `extrinsicId` field. */
	extrinsicId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Negates the expression. */
	not?: InputMaybe<NftActionFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<NftActionFilter>>;
	/** Filter by the object’s `subType` field. */
	subType?: InputMaybe<StringFilter>;
	/** Filter by the object’s `timestamp` field. */
	timestamp?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `type` field. */
	type?: InputMaybe<StringFilter>;
};

/** Grouping methods for `NFTAction` for usage during aggregation. */
export enum NftActionsGroupBy {
	AccountId = "ACCOUNT_ID",
	Data = "DATA",
	ExtrinsicId = "EXTRINSIC_ID",
	SubType = "SUB_TYPE",
	Timestamp = "TIMESTAMP",
	Type = "TYPE",
}

/** Conditions for `NFTAction` aggregates. */
export type NftActionsHavingInput = {
	AND?: InputMaybe<Array<NftActionsHavingInput>>;
	OR?: InputMaybe<Array<NftActionsHavingInput>>;
};

/** A connection to a list of `NFTAction` values. */
export type NftActionsConnection = {
	__typename?: "NftActionsConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<NftActionAggregates>;
	/** A list of edges which contains the `NFTAction` and cursor to aid in pagination. */
	edges: Array<NftActionsEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<NftActionAggregates>>;
	/** A list of `NFTAction` objects. */
	nodes: Array<Maybe<NftAction>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `NFTAction` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `NFTAction` values. */
export type NftActionsConnectionGroupedAggregatesArgs = {
	groupBy: Array<NftActionsGroupBy>;
	having?: InputMaybe<NftActionsHavingInput>;
};

/** A `NFTAction` edge in the connection. */
export type NftActionsEdge = {
	__typename?: "NftActionsEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `NFTAction` at the end of the edge. */
	node?: Maybe<NftAction>;
};

/** Methods to use when ordering `NFTAction`. */
export enum NftActionsOrderBy {
	AccountIdAsc = "ACCOUNT_ID_ASC",
	AccountIdDesc = "ACCOUNT_ID_DESC",
	DataAsc = "DATA_ASC",
	DataDesc = "DATA_DESC",
	ExtrinsicIdAsc = "EXTRINSIC_ID_ASC",
	ExtrinsicIdDesc = "EXTRINSIC_ID_DESC",
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	Natural = "NATURAL",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	SubTypeAsc = "SUB_TYPE_ASC",
	SubTypeDesc = "SUB_TYPE_DESC",
	TimestampAsc = "TIMESTAMP_ASC",
	TimestampDesc = "TIMESTAMP_DESC",
	TypeAsc = "TYPE_ASC",
	TypeDesc = "TYPE_DESC",
}

/** An object with a globally unique `ID`. */
export type Node = {
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
};

export type OracleFeedRecord = Node & {
	__typename?: "OracleFeedRecord";
	/** Reads a single `Account` that is related to this `OracleFeedRecord`. */
	account?: Maybe<Account>;
	accountId?: Maybe<Scalars["String"]>;
	/** Reads a single `Block` that is related to this `OracleFeedRecord`. */
	block?: Maybe<Block>;
	blockId?: Maybe<Scalars["String"]>;
	blockNumber?: Maybe<Scalars["BigFloat"]>;
	id: Scalars["String"];
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
	price?: Maybe<Scalars["String"]>;
	provider?: Maybe<Scalars["String"]>;
	/** Reads a single `Token` that is related to this `OracleFeedRecord`. */
	token?: Maybe<Token>;
	tokenId?: Maybe<Scalars["String"]>;
};

export type OracleFeedRecordAggregates = {
	__typename?: "OracleFeedRecordAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

/** A filter to be used against `OracleFeedRecord` object types. All fields are combined with a logical ‘and.’ */
export type OracleFeedRecordFilter = {
	/** Filter by the object’s `accountId` field. */
	accountId?: InputMaybe<StringFilter>;
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<OracleFeedRecordFilter>>;
	/** Filter by the object’s `blockId` field. */
	blockId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `blockNumber` field. */
	blockNumber?: InputMaybe<BigFloatFilter>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Negates the expression. */
	not?: InputMaybe<OracleFeedRecordFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<OracleFeedRecordFilter>>;
	/** Filter by the object’s `price` field. */
	price?: InputMaybe<StringFilter>;
	/** Filter by the object’s `provider` field. */
	provider?: InputMaybe<StringFilter>;
	/** Filter by the object’s `tokenId` field. */
	tokenId?: InputMaybe<StringFilter>;
};

/** A connection to a list of `OracleFeedRecord` values. */
export type OracleFeedRecordsConnection = {
	__typename?: "OracleFeedRecordsConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<OracleFeedRecordAggregates>;
	/** A list of edges which contains the `OracleFeedRecord` and cursor to aid in pagination. */
	edges: Array<OracleFeedRecordsEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<OracleFeedRecordAggregates>>;
	/** A list of `OracleFeedRecord` objects. */
	nodes: Array<Maybe<OracleFeedRecord>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `OracleFeedRecord` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `OracleFeedRecord` values. */
export type OracleFeedRecordsConnectionGroupedAggregatesArgs = {
	groupBy: Array<OracleFeedRecordsGroupBy>;
	having?: InputMaybe<OracleFeedRecordsHavingInput>;
};

/** A `OracleFeedRecord` edge in the connection. */
export type OracleFeedRecordsEdge = {
	__typename?: "OracleFeedRecordsEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `OracleFeedRecord` at the end of the edge. */
	node?: Maybe<OracleFeedRecord>;
};

/** Grouping methods for `OracleFeedRecord` for usage during aggregation. */
export enum OracleFeedRecordsGroupBy {
	AccountId = "ACCOUNT_ID",
	BlockId = "BLOCK_ID",
	BlockNumber = "BLOCK_NUMBER",
	Price = "PRICE",
	Provider = "PROVIDER",
	TokenId = "TOKEN_ID",
}

/** Conditions for `OracleFeedRecord` aggregates. */
export type OracleFeedRecordsHavingInput = {
	AND?: InputMaybe<Array<OracleFeedRecordsHavingInput>>;
	OR?: InputMaybe<Array<OracleFeedRecordsHavingInput>>;
};

/** Methods to use when ordering `OracleFeedRecord`. */
export enum OracleFeedRecordsOrderBy {
	AccountIdAsc = "ACCOUNT_ID_ASC",
	AccountIdDesc = "ACCOUNT_ID_DESC",
	BlockIdAsc = "BLOCK_ID_ASC",
	BlockIdDesc = "BLOCK_ID_DESC",
	BlockNumberAsc = "BLOCK_NUMBER_ASC",
	BlockNumberDesc = "BLOCK_NUMBER_DESC",
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	Natural = "NATURAL",
	PriceAsc = "PRICE_ASC",
	PriceDesc = "PRICE_DESC",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	ProviderAsc = "PROVIDER_ASC",
	ProviderDesc = "PROVIDER_DESC",
	TokenIdAsc = "TOKEN_ID_ASC",
	TokenIdDesc = "TOKEN_ID_DESC",
}

/** Information about pagination in a connection. */
export type PageInfo = {
	__typename?: "PageInfo";
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars["Cursor"]>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars["Boolean"];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars["Boolean"];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars["Cursor"]>;
};

export type Pool = Node & {
	__typename?: "Pool";
	/** Reads and enables pagination through a set of `Account`. */
	accountsByDexActionPoolIdAndAccountId: PoolAccountsByDexActionPoolIdAndAccountIdManyToManyConnection;
	/** Reads and enables pagination through a set of `DexAction`. */
	actions: DexActionsConnection;
	/** Reads and enables pagination through a set of `PoolDayDatum`. */
	dayData: PoolDayDataConnection;
	exchange0?: Maybe<Scalars["String"]>;
	exchange1?: Maybe<Scalars["String"]>;
	/** Reads and enables pagination through a set of `Extrinsic`. */
	extrinsicsByDexActionPoolIdAndExtrinsicId: PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyConnection;
	fee?: Maybe<Scalars["String"]>;
	/** Reads and enables pagination through a set of `PoolHourDatum`. */
	hourData: PoolHourDataConnection;
	id: Scalars["String"];
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
	/** Reads a single `Token` that is related to this `Pool`. */
	token0?: Maybe<Token>;
	token0Amount?: Maybe<Scalars["String"]>;
	token0Id?: Maybe<Scalars["String"]>;
	token0TVL?: Maybe<Scalars["String"]>;
	token0Volume?: Maybe<Scalars["String"]>;
	/** Reads a single `Token` that is related to this `Pool`. */
	token1?: Maybe<Token>;
	token1Amount?: Maybe<Scalars["String"]>;
	token1Id?: Maybe<Scalars["String"]>;
	token1TVL?: Maybe<Scalars["String"]>;
	token1Volume?: Maybe<Scalars["String"]>;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByDexActionPoolIdAndToken0Id: PoolTokensByDexActionPoolIdAndToken0IdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByDexActionPoolIdAndToken1Id: PoolTokensByDexActionPoolIdAndToken1IdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByPoolDayDatumPoolIdAndToken0Id: PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByPoolDayDatumPoolIdAndToken1Id: PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByPoolHourDatumPoolIdAndToken0Id: PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByPoolHourDatumPoolIdAndToken1Id: PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyConnection;
	tvlUSD?: Maybe<Scalars["String"]>;
	txCount?: Maybe<Scalars["BigFloat"]>;
	volumeUSD?: Maybe<Scalars["String"]>;
};

export type PoolAccountsByDexActionPoolIdAndAccountIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<AccountFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};

export type PoolActionsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<DexActionFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<DexActionsOrderBy>>;
};

export type PoolDayDataArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<PoolDayDatumFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<PoolDayDataOrderBy>>;
};

export type PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<ExtrinsicFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<ExtrinsicsOrderBy>>;
};

export type PoolHourDataArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<PoolHourDatumFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<PoolHourDataOrderBy>>;
};

export type PoolTokensByDexActionPoolIdAndToken0IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type PoolTokensByDexActionPoolIdAndToken1IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type PoolTokensByPoolDayDatumPoolIdAndToken0IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type PoolTokensByPoolDayDatumPoolIdAndToken1IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type PoolTokensByPoolHourDatumPoolIdAndToken0IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type PoolTokensByPoolHourDatumPoolIdAndToken1IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `DexAction`. */
export type PoolAccountsByDexActionPoolIdAndAccountIdManyToManyConnection = {
	__typename?: "PoolAccountsByDexActionPoolIdAndAccountIdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<AccountAggregates>;
	/** A list of edges which contains the `Account`, info from the `DexAction`, and the cursor to aid in pagination. */
	edges: Array<PoolAccountsByDexActionPoolIdAndAccountIdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<AccountAggregates>>;
	/** A list of `Account` objects. */
	nodes: Array<Maybe<Account>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Account` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Account` values, with data from `DexAction`. */
export type PoolAccountsByDexActionPoolIdAndAccountIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<AccountsGroupBy>;
		having?: InputMaybe<AccountsHavingInput>;
	};

/** A `Account` edge in the connection, with data from `DexAction`. */
export type PoolAccountsByDexActionPoolIdAndAccountIdManyToManyEdge = {
	__typename?: "PoolAccountsByDexActionPoolIdAndAccountIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** Reads and enables pagination through a set of `DexAction`. */
	dexActions: DexActionsConnection;
	/** The `Account` at the end of the edge. */
	node?: Maybe<Account>;
};

/** A `Account` edge in the connection, with data from `DexAction`. */
export type PoolAccountsByDexActionPoolIdAndAccountIdManyToManyEdgeDexActionsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<DexActionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<DexActionsOrderBy>>;
	};

export type PoolAggregates = {
	__typename?: "PoolAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

/** A connection to a list of `PoolDayDatum` values. */
export type PoolDayDataConnection = {
	__typename?: "PoolDayDataConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<PoolDayDatumAggregates>;
	/** A list of edges which contains the `PoolDayDatum` and cursor to aid in pagination. */
	edges: Array<PoolDayDataEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<PoolDayDatumAggregates>>;
	/** A list of `PoolDayDatum` objects. */
	nodes: Array<Maybe<PoolDayDatum>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `PoolDayDatum` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `PoolDayDatum` values. */
export type PoolDayDataConnectionGroupedAggregatesArgs = {
	groupBy: Array<PoolDayDataGroupBy>;
	having?: InputMaybe<PoolDayDataHavingInput>;
};

/** A `PoolDayDatum` edge in the connection. */
export type PoolDayDataEdge = {
	__typename?: "PoolDayDataEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `PoolDayDatum` at the end of the edge. */
	node?: Maybe<PoolDayDatum>;
};

/** Grouping methods for `PoolDayDatum` for usage during aggregation. */
export enum PoolDayDataGroupBy {
	Date = "DATE",
	Exchange0 = "EXCHANGE0",
	Exchange1 = "EXCHANGE1",
	PoolId = "POOL_ID",
	Token0Amount = "TOKEN0_AMOUNT",
	Token0Close = "TOKEN0_CLOSE",
	Token0High = "TOKEN0_HIGH",
	Token0Id = "TOKEN0_ID",
	Token0Low = "TOKEN0_LOW",
	Token0Open = "TOKEN0_OPEN",
	Token1Amount = "TOKEN1_AMOUNT",
	Token1Id = "TOKEN1_ID",
	TvlUSD = "TVL_U_S_D",
	TxCount = "TX_COUNT",
	VolumeToken0 = "VOLUME_TOKEN0",
	VolumeToken1 = "VOLUME_TOKEN1",
	VolumeUSD = "VOLUME_U_S_D",
}

/** Conditions for `PoolDayDatum` aggregates. */
export type PoolDayDataHavingInput = {
	AND?: InputMaybe<Array<PoolDayDataHavingInput>>;
	OR?: InputMaybe<Array<PoolDayDataHavingInput>>;
};

/** Methods to use when ordering `PoolDayDatum`. */
export enum PoolDayDataOrderBy {
	DateAsc = "DATE_ASC",
	DateDesc = "DATE_DESC",
	Exchange0Asc = "EXCHANGE0_ASC",
	Exchange0Desc = "EXCHANGE0_DESC",
	Exchange1Asc = "EXCHANGE1_ASC",
	Exchange1Desc = "EXCHANGE1_DESC",
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	Natural = "NATURAL",
	PoolIdAsc = "POOL_ID_ASC",
	PoolIdDesc = "POOL_ID_DESC",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	Token0AmountAsc = "TOKEN0_AMOUNT_ASC",
	Token0AmountDesc = "TOKEN0_AMOUNT_DESC",
	Token0CloseAsc = "TOKEN0_CLOSE_ASC",
	Token0CloseDesc = "TOKEN0_CLOSE_DESC",
	Token0HighAsc = "TOKEN0_HIGH_ASC",
	Token0HighDesc = "TOKEN0_HIGH_DESC",
	Token0IdAsc = "TOKEN0_ID_ASC",
	Token0IdDesc = "TOKEN0_ID_DESC",
	Token0LowAsc = "TOKEN0_LOW_ASC",
	Token0LowDesc = "TOKEN0_LOW_DESC",
	Token0OpenAsc = "TOKEN0_OPEN_ASC",
	Token0OpenDesc = "TOKEN0_OPEN_DESC",
	Token1AmountAsc = "TOKEN1_AMOUNT_ASC",
	Token1AmountDesc = "TOKEN1_AMOUNT_DESC",
	Token1IdAsc = "TOKEN1_ID_ASC",
	Token1IdDesc = "TOKEN1_ID_DESC",
	TvlUSDAsc = "TVL_U_S_D_ASC",
	TvlUSDDesc = "TVL_U_S_D_DESC",
	TxCountAsc = "TX_COUNT_ASC",
	TxCountDesc = "TX_COUNT_DESC",
	VolumeToken0Asc = "VOLUME_TOKEN0_ASC",
	VolumeToken0Desc = "VOLUME_TOKEN0_DESC",
	VolumeToken1Asc = "VOLUME_TOKEN1_ASC",
	VolumeToken1Desc = "VOLUME_TOKEN1_DESC",
	VolumeUSDAsc = "VOLUME_U_S_D_ASC",
	VolumeUSDDesc = "VOLUME_U_S_D_DESC",
}

export type PoolDayDatum = Node & {
	__typename?: "PoolDayDatum";
	date?: Maybe<Scalars["Datetime"]>;
	exchange0?: Maybe<Scalars["String"]>;
	exchange1?: Maybe<Scalars["String"]>;
	id: Scalars["String"];
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
	/** Reads a single `Pool` that is related to this `PoolDayDatum`. */
	pool?: Maybe<Pool>;
	poolId?: Maybe<Scalars["String"]>;
	/** Reads a single `Token` that is related to this `PoolDayDatum`. */
	token0?: Maybe<Token>;
	token0Amount?: Maybe<Scalars["String"]>;
	token0Close?: Maybe<Scalars["String"]>;
	token0High?: Maybe<Scalars["String"]>;
	token0Id: Scalars["String"];
	token0Low?: Maybe<Scalars["String"]>;
	token0Open?: Maybe<Scalars["String"]>;
	/** Reads a single `Token` that is related to this `PoolDayDatum`. */
	token1?: Maybe<Token>;
	token1Amount?: Maybe<Scalars["String"]>;
	token1Id: Scalars["String"];
	tvlUSD?: Maybe<Scalars["String"]>;
	txCount?: Maybe<Scalars["BigFloat"]>;
	volumeToken0?: Maybe<Scalars["String"]>;
	volumeToken1?: Maybe<Scalars["String"]>;
	volumeUSD?: Maybe<Scalars["String"]>;
};

export type PoolDayDatumAggregates = {
	__typename?: "PoolDayDatumAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

/** A filter to be used against `PoolDayDatum` object types. All fields are combined with a logical ‘and.’ */
export type PoolDayDatumFilter = {
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<PoolDayDatumFilter>>;
	/** Filter by the object’s `date` field. */
	date?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `exchange0` field. */
	exchange0?: InputMaybe<StringFilter>;
	/** Filter by the object’s `exchange1` field. */
	exchange1?: InputMaybe<StringFilter>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Negates the expression. */
	not?: InputMaybe<PoolDayDatumFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<PoolDayDatumFilter>>;
	/** Filter by the object’s `poolId` field. */
	poolId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token0Amount` field. */
	token0Amount?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token0Close` field. */
	token0Close?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token0High` field. */
	token0High?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token0Id` field. */
	token0Id?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token0Low` field. */
	token0Low?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token0Open` field. */
	token0Open?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token1Amount` field. */
	token1Amount?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token1Id` field. */
	token1Id?: InputMaybe<StringFilter>;
	/** Filter by the object’s `tvlUSD` field. */
	tvlUSD?: InputMaybe<StringFilter>;
	/** Filter by the object’s `txCount` field. */
	txCount?: InputMaybe<BigFloatFilter>;
	/** Filter by the object’s `volumeToken0` field. */
	volumeToken0?: InputMaybe<StringFilter>;
	/** Filter by the object’s `volumeToken1` field. */
	volumeToken1?: InputMaybe<StringFilter>;
	/** Filter by the object’s `volumeUSD` field. */
	volumeUSD?: InputMaybe<StringFilter>;
};

/** A connection to a list of `Extrinsic` values, with data from `DexAction`. */
export type PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyConnection =
	{
		__typename?: "PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<ExtrinsicAggregates>;
		/** A list of edges which contains the `Extrinsic`, info from the `DexAction`, and the cursor to aid in pagination. */
		edges: Array<PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<ExtrinsicAggregates>>;
		/** A list of `Extrinsic` objects. */
		nodes: Array<Maybe<Extrinsic>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Extrinsic` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Extrinsic` values, with data from `DexAction`. */
export type PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<ExtrinsicsGroupBy>;
		having?: InputMaybe<ExtrinsicsHavingInput>;
	};

/** A `Extrinsic` edge in the connection, with data from `DexAction`. */
export type PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyEdge = {
	__typename?: "PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** Reads and enables pagination through a set of `DexAction`. */
	dexActions: DexActionsConnection;
	/** The `Extrinsic` at the end of the edge. */
	node?: Maybe<Extrinsic>;
};

/** A `Extrinsic` edge in the connection, with data from `DexAction`. */
export type PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyEdgeDexActionsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<DexActionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<DexActionsOrderBy>>;
	};

/** A filter to be used against `Pool` object types. All fields are combined with a logical ‘and.’ */
export type PoolFilter = {
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<PoolFilter>>;
	/** Filter by the object’s `exchange0` field. */
	exchange0?: InputMaybe<StringFilter>;
	/** Filter by the object’s `exchange1` field. */
	exchange1?: InputMaybe<StringFilter>;
	/** Filter by the object’s `fee` field. */
	fee?: InputMaybe<StringFilter>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Negates the expression. */
	not?: InputMaybe<PoolFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<PoolFilter>>;
	/** Filter by the object’s `token0Amount` field. */
	token0Amount?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token0Id` field. */
	token0Id?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token0TVL` field. */
	token0TVL?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token0Volume` field. */
	token0Volume?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token1Amount` field. */
	token1Amount?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token1Id` field. */
	token1Id?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token1TVL` field. */
	token1TVL?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token1Volume` field. */
	token1Volume?: InputMaybe<StringFilter>;
	/** Filter by the object’s `tvlUSD` field. */
	tvlUSD?: InputMaybe<StringFilter>;
	/** Filter by the object’s `txCount` field. */
	txCount?: InputMaybe<BigFloatFilter>;
	/** Filter by the object’s `volumeUSD` field. */
	volumeUSD?: InputMaybe<StringFilter>;
};

/** A connection to a list of `PoolHourDatum` values. */
export type PoolHourDataConnection = {
	__typename?: "PoolHourDataConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<PoolHourDatumAggregates>;
	/** A list of edges which contains the `PoolHourDatum` and cursor to aid in pagination. */
	edges: Array<PoolHourDataEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<PoolHourDatumAggregates>>;
	/** A list of `PoolHourDatum` objects. */
	nodes: Array<Maybe<PoolHourDatum>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `PoolHourDatum` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `PoolHourDatum` values. */
export type PoolHourDataConnectionGroupedAggregatesArgs = {
	groupBy: Array<PoolHourDataGroupBy>;
	having?: InputMaybe<PoolHourDataHavingInput>;
};

/** A `PoolHourDatum` edge in the connection. */
export type PoolHourDataEdge = {
	__typename?: "PoolHourDataEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `PoolHourDatum` at the end of the edge. */
	node?: Maybe<PoolHourDatum>;
};

/** Grouping methods for `PoolHourDatum` for usage during aggregation. */
export enum PoolHourDataGroupBy {
	Date = "DATE",
	Exchange0 = "EXCHANGE0",
	Exchange1 = "EXCHANGE1",
	PoolId = "POOL_ID",
	Token0Amount = "TOKEN0_AMOUNT",
	Token0Close = "TOKEN0_CLOSE",
	Token0High = "TOKEN0_HIGH",
	Token0Id = "TOKEN0_ID",
	Token0Low = "TOKEN0_LOW",
	Token0Open = "TOKEN0_OPEN",
	Token1Amount = "TOKEN1_AMOUNT",
	Token1Id = "TOKEN1_ID",
	TvlUSD = "TVL_U_S_D",
	TxCount = "TX_COUNT",
	VolumeToken0 = "VOLUME_TOKEN0",
	VolumeToken1 = "VOLUME_TOKEN1",
	VolumeUSD = "VOLUME_U_S_D",
}

/** Conditions for `PoolHourDatum` aggregates. */
export type PoolHourDataHavingInput = {
	AND?: InputMaybe<Array<PoolHourDataHavingInput>>;
	OR?: InputMaybe<Array<PoolHourDataHavingInput>>;
};

/** Methods to use when ordering `PoolHourDatum`. */
export enum PoolHourDataOrderBy {
	DateAsc = "DATE_ASC",
	DateDesc = "DATE_DESC",
	Exchange0Asc = "EXCHANGE0_ASC",
	Exchange0Desc = "EXCHANGE0_DESC",
	Exchange1Asc = "EXCHANGE1_ASC",
	Exchange1Desc = "EXCHANGE1_DESC",
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	Natural = "NATURAL",
	PoolIdAsc = "POOL_ID_ASC",
	PoolIdDesc = "POOL_ID_DESC",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	Token0AmountAsc = "TOKEN0_AMOUNT_ASC",
	Token0AmountDesc = "TOKEN0_AMOUNT_DESC",
	Token0CloseAsc = "TOKEN0_CLOSE_ASC",
	Token0CloseDesc = "TOKEN0_CLOSE_DESC",
	Token0HighAsc = "TOKEN0_HIGH_ASC",
	Token0HighDesc = "TOKEN0_HIGH_DESC",
	Token0IdAsc = "TOKEN0_ID_ASC",
	Token0IdDesc = "TOKEN0_ID_DESC",
	Token0LowAsc = "TOKEN0_LOW_ASC",
	Token0LowDesc = "TOKEN0_LOW_DESC",
	Token0OpenAsc = "TOKEN0_OPEN_ASC",
	Token0OpenDesc = "TOKEN0_OPEN_DESC",
	Token1AmountAsc = "TOKEN1_AMOUNT_ASC",
	Token1AmountDesc = "TOKEN1_AMOUNT_DESC",
	Token1IdAsc = "TOKEN1_ID_ASC",
	Token1IdDesc = "TOKEN1_ID_DESC",
	TvlUSDAsc = "TVL_U_S_D_ASC",
	TvlUSDDesc = "TVL_U_S_D_DESC",
	TxCountAsc = "TX_COUNT_ASC",
	TxCountDesc = "TX_COUNT_DESC",
	VolumeToken0Asc = "VOLUME_TOKEN0_ASC",
	VolumeToken0Desc = "VOLUME_TOKEN0_DESC",
	VolumeToken1Asc = "VOLUME_TOKEN1_ASC",
	VolumeToken1Desc = "VOLUME_TOKEN1_DESC",
	VolumeUSDAsc = "VOLUME_U_S_D_ASC",
	VolumeUSDDesc = "VOLUME_U_S_D_DESC",
}

export type PoolHourDatum = Node & {
	__typename?: "PoolHourDatum";
	date?: Maybe<Scalars["Datetime"]>;
	exchange0?: Maybe<Scalars["String"]>;
	exchange1?: Maybe<Scalars["String"]>;
	id: Scalars["String"];
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
	/** Reads a single `Pool` that is related to this `PoolHourDatum`. */
	pool?: Maybe<Pool>;
	poolId?: Maybe<Scalars["String"]>;
	/** Reads a single `Token` that is related to this `PoolHourDatum`. */
	token0?: Maybe<Token>;
	token0Amount?: Maybe<Scalars["String"]>;
	token0Close?: Maybe<Scalars["String"]>;
	token0High?: Maybe<Scalars["String"]>;
	token0Id?: Maybe<Scalars["String"]>;
	token0Low?: Maybe<Scalars["String"]>;
	token0Open?: Maybe<Scalars["String"]>;
	/** Reads a single `Token` that is related to this `PoolHourDatum`. */
	token1?: Maybe<Token>;
	token1Amount?: Maybe<Scalars["String"]>;
	token1Id?: Maybe<Scalars["String"]>;
	tvlUSD?: Maybe<Scalars["String"]>;
	txCount?: Maybe<Scalars["BigFloat"]>;
	volumeToken0?: Maybe<Scalars["String"]>;
	volumeToken1?: Maybe<Scalars["String"]>;
	volumeUSD?: Maybe<Scalars["String"]>;
};

export type PoolHourDatumAggregates = {
	__typename?: "PoolHourDatumAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

/** A filter to be used against `PoolHourDatum` object types. All fields are combined with a logical ‘and.’ */
export type PoolHourDatumFilter = {
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<PoolHourDatumFilter>>;
	/** Filter by the object’s `date` field. */
	date?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `exchange0` field. */
	exchange0?: InputMaybe<StringFilter>;
	/** Filter by the object’s `exchange1` field. */
	exchange1?: InputMaybe<StringFilter>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Negates the expression. */
	not?: InputMaybe<PoolHourDatumFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<PoolHourDatumFilter>>;
	/** Filter by the object’s `poolId` field. */
	poolId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token0Amount` field. */
	token0Amount?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token0Close` field. */
	token0Close?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token0High` field. */
	token0High?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token0Id` field. */
	token0Id?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token0Low` field. */
	token0Low?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token0Open` field. */
	token0Open?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token1Amount` field. */
	token1Amount?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token1Id` field. */
	token1Id?: InputMaybe<StringFilter>;
	/** Filter by the object’s `tvlUSD` field. */
	tvlUSD?: InputMaybe<StringFilter>;
	/** Filter by the object’s `txCount` field. */
	txCount?: InputMaybe<BigFloatFilter>;
	/** Filter by the object’s `volumeToken0` field. */
	volumeToken0?: InputMaybe<StringFilter>;
	/** Filter by the object’s `volumeToken1` field. */
	volumeToken1?: InputMaybe<StringFilter>;
	/** Filter by the object’s `volumeUSD` field. */
	volumeUSD?: InputMaybe<StringFilter>;
};

/** A connection to a list of `Token` values, with data from `DexAction`. */
export type PoolTokensByDexActionPoolIdAndToken0IdManyToManyConnection = {
	__typename?: "PoolTokensByDexActionPoolIdAndToken0IdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<TokenAggregates>;
	/** A list of edges which contains the `Token`, info from the `DexAction`, and the cursor to aid in pagination. */
	edges: Array<PoolTokensByDexActionPoolIdAndToken0IdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<TokenAggregates>>;
	/** A list of `Token` objects. */
	nodes: Array<Maybe<Token>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Token` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Token` values, with data from `DexAction`. */
export type PoolTokensByDexActionPoolIdAndToken0IdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `DexAction`. */
export type PoolTokensByDexActionPoolIdAndToken0IdManyToManyEdge = {
	__typename?: "PoolTokensByDexActionPoolIdAndToken0IdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** Reads and enables pagination through a set of `DexAction`. */
	dexActionsByToken0Id: DexActionsConnection;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
};

/** A `Token` edge in the connection, with data from `DexAction`. */
export type PoolTokensByDexActionPoolIdAndToken0IdManyToManyEdgeDexActionsByToken0IdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<DexActionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<DexActionsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `DexAction`. */
export type PoolTokensByDexActionPoolIdAndToken1IdManyToManyConnection = {
	__typename?: "PoolTokensByDexActionPoolIdAndToken1IdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<TokenAggregates>;
	/** A list of edges which contains the `Token`, info from the `DexAction`, and the cursor to aid in pagination. */
	edges: Array<PoolTokensByDexActionPoolIdAndToken1IdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<TokenAggregates>>;
	/** A list of `Token` objects. */
	nodes: Array<Maybe<Token>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Token` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Token` values, with data from `DexAction`. */
export type PoolTokensByDexActionPoolIdAndToken1IdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `DexAction`. */
export type PoolTokensByDexActionPoolIdAndToken1IdManyToManyEdge = {
	__typename?: "PoolTokensByDexActionPoolIdAndToken1IdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** Reads and enables pagination through a set of `DexAction`. */
	dexActionsByToken1Id: DexActionsConnection;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
};

/** A `Token` edge in the connection, with data from `DexAction`. */
export type PoolTokensByDexActionPoolIdAndToken1IdManyToManyEdgeDexActionsByToken1IdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<DexActionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<DexActionsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `PoolDayDatum`. */
export type PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyConnection = {
	__typename?: "PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<TokenAggregates>;
	/** A list of edges which contains the `Token`, info from the `PoolDayDatum`, and the cursor to aid in pagination. */
	edges: Array<PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<TokenAggregates>>;
	/** A list of `Token` objects. */
	nodes: Array<Maybe<Token>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Token` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Token` values, with data from `PoolDayDatum`. */
export type PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `PoolDayDatum`. */
export type PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyEdge = {
	__typename?: "PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
	/** Reads and enables pagination through a set of `PoolDayDatum`. */
	poolDayDataBase: PoolDayDataConnection;
};

/** A `Token` edge in the connection, with data from `PoolDayDatum`. */
export type PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyEdgePoolDayDataBaseArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<PoolDayDatumFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<PoolDayDataOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `PoolDayDatum`. */
export type PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyConnection = {
	__typename?: "PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<TokenAggregates>;
	/** A list of edges which contains the `Token`, info from the `PoolDayDatum`, and the cursor to aid in pagination. */
	edges: Array<PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<TokenAggregates>>;
	/** A list of `Token` objects. */
	nodes: Array<Maybe<Token>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Token` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Token` values, with data from `PoolDayDatum`. */
export type PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `PoolDayDatum`. */
export type PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyEdge = {
	__typename?: "PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
	/** Reads and enables pagination through a set of `PoolDayDatum`. */
	poolDayDataQuote: PoolDayDataConnection;
};

/** A `Token` edge in the connection, with data from `PoolDayDatum`. */
export type PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyEdgePoolDayDataQuoteArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<PoolDayDatumFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<PoolDayDataOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `PoolHourDatum`. */
export type PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyConnection = {
	__typename?: "PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<TokenAggregates>;
	/** A list of edges which contains the `Token`, info from the `PoolHourDatum`, and the cursor to aid in pagination. */
	edges: Array<PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<TokenAggregates>>;
	/** A list of `Token` objects. */
	nodes: Array<Maybe<Token>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Token` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Token` values, with data from `PoolHourDatum`. */
export type PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `PoolHourDatum`. */
export type PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyEdge = {
	__typename?: "PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
	/** Reads and enables pagination through a set of `PoolHourDatum`. */
	poolHourDataByToken0Id: PoolHourDataConnection;
};

/** A `Token` edge in the connection, with data from `PoolHourDatum`. */
export type PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyEdgePoolHourDataByToken0IdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<PoolHourDatumFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<PoolHourDataOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `PoolHourDatum`. */
export type PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyConnection = {
	__typename?: "PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<TokenAggregates>;
	/** A list of edges which contains the `Token`, info from the `PoolHourDatum`, and the cursor to aid in pagination. */
	edges: Array<PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<TokenAggregates>>;
	/** A list of `Token` objects. */
	nodes: Array<Maybe<Token>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Token` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Token` values, with data from `PoolHourDatum`. */
export type PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `PoolHourDatum`. */
export type PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyEdge = {
	__typename?: "PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
	/** Reads and enables pagination through a set of `PoolHourDatum`. */
	poolHourDataByToken1Id: PoolHourDataConnection;
};

/** A `Token` edge in the connection, with data from `PoolHourDatum`. */
export type PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyEdgePoolHourDataByToken1IdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<PoolHourDatumFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<PoolHourDataOrderBy>>;
	};

/** A connection to a list of `Pool` values. */
export type PoolsConnection = {
	__typename?: "PoolsConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<PoolAggregates>;
	/** A list of edges which contains the `Pool` and cursor to aid in pagination. */
	edges: Array<PoolsEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<PoolAggregates>>;
	/** A list of `Pool` objects. */
	nodes: Array<Maybe<Pool>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Pool` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Pool` values. */
export type PoolsConnectionGroupedAggregatesArgs = {
	groupBy: Array<PoolsGroupBy>;
	having?: InputMaybe<PoolsHavingInput>;
};

/** A `Pool` edge in the connection. */
export type PoolsEdge = {
	__typename?: "PoolsEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Pool` at the end of the edge. */
	node?: Maybe<Pool>;
};

/** Grouping methods for `Pool` for usage during aggregation. */
export enum PoolsGroupBy {
	Exchange0 = "EXCHANGE0",
	Exchange1 = "EXCHANGE1",
	Fee = "FEE",
	Token0Amount = "TOKEN0_AMOUNT",
	Token0Id = "TOKEN0_ID",
	Token0TVL = "TOKEN0_T_V_L",
	Token0Volume = "TOKEN0_VOLUME",
	Token1Amount = "TOKEN1_AMOUNT",
	Token1Id = "TOKEN1_ID",
	Token1TVL = "TOKEN1_T_V_L",
	Token1Volume = "TOKEN1_VOLUME",
	TvlUSD = "TVL_U_S_D",
	TxCount = "TX_COUNT",
	VolumeUSD = "VOLUME_U_S_D",
}

/** Conditions for `Pool` aggregates. */
export type PoolsHavingInput = {
	AND?: InputMaybe<Array<PoolsHavingInput>>;
	OR?: InputMaybe<Array<PoolsHavingInput>>;
};

/** Methods to use when ordering `Pool`. */
export enum PoolsOrderBy {
	ActionsCountAsc = "ACTIONS_COUNT_ASC",
	ActionsCountDesc = "ACTIONS_COUNT_DESC",
	DayDataCountAsc = "DAY_DATA_COUNT_ASC",
	DayDataCountDesc = "DAY_DATA_COUNT_DESC",
	Exchange0Asc = "EXCHANGE0_ASC",
	Exchange0Desc = "EXCHANGE0_DESC",
	Exchange1Asc = "EXCHANGE1_ASC",
	Exchange1Desc = "EXCHANGE1_DESC",
	FeeAsc = "FEE_ASC",
	FeeDesc = "FEE_DESC",
	HourDataCountAsc = "HOUR_DATA_COUNT_ASC",
	HourDataCountDesc = "HOUR_DATA_COUNT_DESC",
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	Natural = "NATURAL",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	Token0AmountAsc = "TOKEN0_AMOUNT_ASC",
	Token0AmountDesc = "TOKEN0_AMOUNT_DESC",
	Token0IdAsc = "TOKEN0_ID_ASC",
	Token0IdDesc = "TOKEN0_ID_DESC",
	Token0TVLAsc = "TOKEN0_T_V_L_ASC",
	Token0TVLDesc = "TOKEN0_T_V_L_DESC",
	Token0VolumeAsc = "TOKEN0_VOLUME_ASC",
	Token0VolumeDesc = "TOKEN0_VOLUME_DESC",
	Token1AmountAsc = "TOKEN1_AMOUNT_ASC",
	Token1AmountDesc = "TOKEN1_AMOUNT_DESC",
	Token1IdAsc = "TOKEN1_ID_ASC",
	Token1IdDesc = "TOKEN1_ID_DESC",
	Token1TVLAsc = "TOKEN1_T_V_L_ASC",
	Token1TVLDesc = "TOKEN1_T_V_L_DESC",
	Token1VolumeAsc = "TOKEN1_VOLUME_ASC",
	Token1VolumeDesc = "TOKEN1_VOLUME_DESC",
	TvlUSDAsc = "TVL_U_S_D_ASC",
	TvlUSDDesc = "TVL_U_S_D_DESC",
	TxCountAsc = "TX_COUNT_ASC",
	TxCountDesc = "TX_COUNT_DESC",
	VolumeUSDAsc = "VOLUME_U_S_D_ASC",
	VolumeUSDDesc = "VOLUME_U_S_D_DESC",
}

export type PriceBundle = Node & {
	__typename?: "PriceBundle";
	id: Scalars["String"];
	ksm?: Maybe<Scalars["String"]>;
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
};

export type PriceBundleAggregates = {
	__typename?: "PriceBundleAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

/** A filter to be used against `PriceBundle` object types. All fields are combined with a logical ‘and.’ */
export type PriceBundleFilter = {
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<PriceBundleFilter>>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Filter by the object’s `ksm` field. */
	ksm?: InputMaybe<StringFilter>;
	/** Negates the expression. */
	not?: InputMaybe<PriceBundleFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<PriceBundleFilter>>;
};

/** A connection to a list of `PriceBundle` values. */
export type PriceBundlesConnection = {
	__typename?: "PriceBundlesConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<PriceBundleAggregates>;
	/** A list of edges which contains the `PriceBundle` and cursor to aid in pagination. */
	edges: Array<PriceBundlesEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<PriceBundleAggregates>>;
	/** A list of `PriceBundle` objects. */
	nodes: Array<Maybe<PriceBundle>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `PriceBundle` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `PriceBundle` values. */
export type PriceBundlesConnectionGroupedAggregatesArgs = {
	groupBy: Array<PriceBundlesGroupBy>;
	having?: InputMaybe<PriceBundlesHavingInput>;
};

/** A `PriceBundle` edge in the connection. */
export type PriceBundlesEdge = {
	__typename?: "PriceBundlesEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `PriceBundle` at the end of the edge. */
	node?: Maybe<PriceBundle>;
};

/** Grouping methods for `PriceBundle` for usage during aggregation. */
export enum PriceBundlesGroupBy {
	Ksm = "KSM",
}

/** Conditions for `PriceBundle` aggregates. */
export type PriceBundlesHavingInput = {
	AND?: InputMaybe<Array<PriceBundlesHavingInput>>;
	OR?: InputMaybe<Array<PriceBundlesHavingInput>>;
};

/** Methods to use when ordering `PriceBundle`. */
export enum PriceBundlesOrderBy {
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	KsmAsc = "KSM_ASC",
	KsmDesc = "KSM_DESC",
	Natural = "NATURAL",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
}

export type PriceRecord = Node & {
	__typename?: "PriceRecord";
	id: Scalars["String"];
	ksm?: Maybe<Scalars["String"]>;
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
};

export type PriceRecordAggregates = {
	__typename?: "PriceRecordAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

/** A filter to be used against `PriceRecord` object types. All fields are combined with a logical ‘and.’ */
export type PriceRecordFilter = {
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<PriceRecordFilter>>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Filter by the object’s `ksm` field. */
	ksm?: InputMaybe<StringFilter>;
	/** Negates the expression. */
	not?: InputMaybe<PriceRecordFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<PriceRecordFilter>>;
};

/** A connection to a list of `PriceRecord` values. */
export type PriceRecordsConnection = {
	__typename?: "PriceRecordsConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<PriceRecordAggregates>;
	/** A list of edges which contains the `PriceRecord` and cursor to aid in pagination. */
	edges: Array<PriceRecordsEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<PriceRecordAggregates>>;
	/** A list of `PriceRecord` objects. */
	nodes: Array<Maybe<PriceRecord>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `PriceRecord` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `PriceRecord` values. */
export type PriceRecordsConnectionGroupedAggregatesArgs = {
	groupBy: Array<PriceRecordsGroupBy>;
	having?: InputMaybe<PriceRecordsHavingInput>;
};

/** A `PriceRecord` edge in the connection. */
export type PriceRecordsEdge = {
	__typename?: "PriceRecordsEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `PriceRecord` at the end of the edge. */
	node?: Maybe<PriceRecord>;
};

/** Grouping methods for `PriceRecord` for usage during aggregation. */
export enum PriceRecordsGroupBy {
	Ksm = "KSM",
}

/** Conditions for `PriceRecord` aggregates. */
export type PriceRecordsHavingInput = {
	AND?: InputMaybe<Array<PriceRecordsHavingInput>>;
	OR?: InputMaybe<Array<PriceRecordsHavingInput>>;
};

/** Methods to use when ordering `PriceRecord`. */
export enum PriceRecordsOrderBy {
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	KsmAsc = "KSM_ASC",
	KsmDesc = "KSM_DESC",
	Natural = "NATURAL",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
}

export type ProvisionPool = Node & {
	__typename?: "ProvisionPool";
	/** Reads a single `Block` that is related to this `ProvisionPool`. */
	endAtBlock?: Maybe<Block>;
	endAtBlockId?: Maybe<Scalars["String"]>;
	endAtBlockNumber?: Maybe<Scalars["BigFloat"]>;
	id: Scalars["String"];
	initializeShare?: Maybe<Scalars["String"]>;
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
	/** Reads a single `Token` that is related to this `ProvisionPool`. */
	poolToken?: Maybe<Token>;
	poolTokenId?: Maybe<Scalars["String"]>;
	/** Reads and enables pagination through a set of `UserProvision`. */
	records: UserProvisionsConnection;
	/** Reads a single `Block` that is related to this `ProvisionPool`. */
	startAtBlock?: Maybe<Block>;
	startAtBlockId?: Maybe<Scalars["String"]>;
	startAtBlockNumber?: Maybe<Scalars["BigFloat"]>;
	/** Reads a single `Token` that is related to this `ProvisionPool`. */
	token0?: Maybe<Token>;
	token0Amount?: Maybe<Scalars["String"]>;
	token0Id?: Maybe<Scalars["String"]>;
	/** Reads a single `Token` that is related to this `ProvisionPool`. */
	token1?: Maybe<Token>;
	token1Amount?: Maybe<Scalars["String"]>;
	token1Id?: Maybe<Scalars["String"]>;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByUserProvisionPoolIdAndToken0Id: ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByUserProvisionPoolIdAndToken1Id: ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyConnection;
	txCount?: Maybe<Scalars["BigFloat"]>;
};

export type ProvisionPoolRecordsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<UserProvisionFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<UserProvisionsOrderBy>>;
};

export type ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type ProvisionPoolAggregates = {
	__typename?: "ProvisionPoolAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

/** A filter to be used against `ProvisionPool` object types. All fields are combined with a logical ‘and.’ */
export type ProvisionPoolFilter = {
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<ProvisionPoolFilter>>;
	/** Filter by the object’s `endAtBlockId` field. */
	endAtBlockId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `endAtBlockNumber` field. */
	endAtBlockNumber?: InputMaybe<BigFloatFilter>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Filter by the object’s `initializeShare` field. */
	initializeShare?: InputMaybe<StringFilter>;
	/** Negates the expression. */
	not?: InputMaybe<ProvisionPoolFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<ProvisionPoolFilter>>;
	/** Filter by the object’s `poolTokenId` field. */
	poolTokenId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `startAtBlockId` field. */
	startAtBlockId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `startAtBlockNumber` field. */
	startAtBlockNumber?: InputMaybe<BigFloatFilter>;
	/** Filter by the object’s `token0Amount` field. */
	token0Amount?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token0Id` field. */
	token0Id?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token1Amount` field. */
	token1Amount?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token1Id` field. */
	token1Id?: InputMaybe<StringFilter>;
	/** Filter by the object’s `txCount` field. */
	txCount?: InputMaybe<BigFloatFilter>;
};

/** A connection to a list of `Token` values, with data from `UserProvision`. */
export type ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyConnection =
	{
		__typename?: "ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `UserProvision`, and the cursor to aid in pagination. */
		edges: Array<ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `UserProvision`. */
export type ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `UserProvision`. */
export type ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyEdge =
	{
		__typename?: "ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** The `Token` at the end of the edge. */
		node?: Maybe<Token>;
		/** Reads and enables pagination through a set of `UserProvision`. */
		userProvisionsByToken0Id: UserProvisionsConnection;
	};

/** A `Token` edge in the connection, with data from `UserProvision`. */
export type ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyEdgeUserProvisionsByToken0IdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<UserProvisionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<UserProvisionsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `UserProvision`. */
export type ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyConnection =
	{
		__typename?: "ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `UserProvision`, and the cursor to aid in pagination. */
		edges: Array<ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `UserProvision`. */
export type ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `UserProvision`. */
export type ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyEdge =
	{
		__typename?: "ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** The `Token` at the end of the edge. */
		node?: Maybe<Token>;
		/** Reads and enables pagination through a set of `UserProvision`. */
		userProvisionsByToken1Id: UserProvisionsConnection;
	};

/** A `Token` edge in the connection, with data from `UserProvision`. */
export type ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyEdgeUserProvisionsByToken1IdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<UserProvisionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<UserProvisionsOrderBy>>;
	};

/** A connection to a list of `ProvisionPool` values. */
export type ProvisionPoolsConnection = {
	__typename?: "ProvisionPoolsConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<ProvisionPoolAggregates>;
	/** A list of edges which contains the `ProvisionPool` and cursor to aid in pagination. */
	edges: Array<ProvisionPoolsEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<ProvisionPoolAggregates>>;
	/** A list of `ProvisionPool` objects. */
	nodes: Array<Maybe<ProvisionPool>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `ProvisionPool` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `ProvisionPool` values. */
export type ProvisionPoolsConnectionGroupedAggregatesArgs = {
	groupBy: Array<ProvisionPoolsGroupBy>;
	having?: InputMaybe<ProvisionPoolsHavingInput>;
};

/** A `ProvisionPool` edge in the connection. */
export type ProvisionPoolsEdge = {
	__typename?: "ProvisionPoolsEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `ProvisionPool` at the end of the edge. */
	node?: Maybe<ProvisionPool>;
};

/** Grouping methods for `ProvisionPool` for usage during aggregation. */
export enum ProvisionPoolsGroupBy {
	EndAtBlockId = "END_AT_BLOCK_ID",
	EndAtBlockNumber = "END_AT_BLOCK_NUMBER",
	InitializeShare = "INITIALIZE_SHARE",
	PoolTokenId = "POOL_TOKEN_ID",
	StartAtBlockId = "START_AT_BLOCK_ID",
	StartAtBlockNumber = "START_AT_BLOCK_NUMBER",
	Token0Amount = "TOKEN0_AMOUNT",
	Token0Id = "TOKEN0_ID",
	Token1Amount = "TOKEN1_AMOUNT",
	Token1Id = "TOKEN1_ID",
	TxCount = "TX_COUNT",
}

/** Conditions for `ProvisionPool` aggregates. */
export type ProvisionPoolsHavingInput = {
	AND?: InputMaybe<Array<ProvisionPoolsHavingInput>>;
	OR?: InputMaybe<Array<ProvisionPoolsHavingInput>>;
};

/** Methods to use when ordering `ProvisionPool`. */
export enum ProvisionPoolsOrderBy {
	EndAtBlockIdAsc = "END_AT_BLOCK_ID_ASC",
	EndAtBlockIdDesc = "END_AT_BLOCK_ID_DESC",
	EndAtBlockNumberAsc = "END_AT_BLOCK_NUMBER_ASC",
	EndAtBlockNumberDesc = "END_AT_BLOCK_NUMBER_DESC",
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	InitializeShareAsc = "INITIALIZE_SHARE_ASC",
	InitializeShareDesc = "INITIALIZE_SHARE_DESC",
	Natural = "NATURAL",
	PoolTokenIdAsc = "POOL_TOKEN_ID_ASC",
	PoolTokenIdDesc = "POOL_TOKEN_ID_DESC",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	RecordsCountAsc = "RECORDS_COUNT_ASC",
	RecordsCountDesc = "RECORDS_COUNT_DESC",
	StartAtBlockIdAsc = "START_AT_BLOCK_ID_ASC",
	StartAtBlockIdDesc = "START_AT_BLOCK_ID_DESC",
	StartAtBlockNumberAsc = "START_AT_BLOCK_NUMBER_ASC",
	StartAtBlockNumberDesc = "START_AT_BLOCK_NUMBER_DESC",
	Token0AmountAsc = "TOKEN0_AMOUNT_ASC",
	Token0AmountDesc = "TOKEN0_AMOUNT_DESC",
	Token0IdAsc = "TOKEN0_ID_ASC",
	Token0IdDesc = "TOKEN0_ID_DESC",
	Token1AmountAsc = "TOKEN1_AMOUNT_ASC",
	Token1AmountDesc = "TOKEN1_AMOUNT_DESC",
	Token1IdAsc = "TOKEN1_ID_ASC",
	Token1IdDesc = "TOKEN1_ID_DESC",
	TxCountAsc = "TX_COUNT_ASC",
	TxCountDesc = "TX_COUNT_DESC",
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
	__typename?: "Query";
	_metadata?: Maybe<_Metadata>;
	account?: Maybe<Account>;
	/** Reads a single `Account` using its globally unique `ID`. */
	accountByNodeId?: Maybe<Account>;
	/** Reads and enables pagination through a set of `Account`. */
	accounts?: Maybe<AccountsConnection>;
	balance?: Maybe<Balance>;
	/** Reads a single `Balance` using its globally unique `ID`. */
	balanceByNodeId?: Maybe<Balance>;
	balanceChangedRecord?: Maybe<BalanceChangedRecord>;
	/** Reads a single `BalanceChangedRecord` using its globally unique `ID`. */
	balanceChangedRecordByNodeId?: Maybe<BalanceChangedRecord>;
	/** Reads and enables pagination through a set of `BalanceChangedRecord`. */
	balanceChangedRecords?: Maybe<BalanceChangedRecordsConnection>;
	/** Reads and enables pagination through a set of `Balance`. */
	balances?: Maybe<BalancesConnection>;
	block?: Maybe<Block>;
	/** Reads a single `Block` using its globally unique `ID`. */
	blockByNodeId?: Maybe<Block>;
	/** Reads and enables pagination through a set of `Block`. */
	blocks?: Maybe<BlocksConnection>;
	call?: Maybe<Call>;
	/** Reads a single `Call` using its globally unique `ID`. */
	callByNodeId?: Maybe<Call>;
	/** Reads and enables pagination through a set of `Call`. */
	calls?: Maybe<CallsConnection>;
	dex?: Maybe<Dex>;
	dexAction?: Maybe<DexAction>;
	/** Reads a single `DexAction` using its globally unique `ID`. */
	dexActionByNodeId?: Maybe<DexAction>;
	/** Reads and enables pagination through a set of `DexAction`. */
	dexActions?: Maybe<DexActionsConnection>;
	/** Reads a single `Dex` using its globally unique `ID`. */
	dexByNodeId?: Maybe<Dex>;
	/** Reads and enables pagination through a set of `DexDayDatum`. */
	dexDayData?: Maybe<DexDayDataConnection>;
	dexDayDatum?: Maybe<DexDayDatum>;
	/** Reads a single `DexDayDatum` using its globally unique `ID`. */
	dexDayDatumByNodeId?: Maybe<DexDayDatum>;
	/** Reads and enables pagination through a set of `Dex`. */
	dexes?: Maybe<DexesConnection>;
	event?: Maybe<Event>;
	/** Reads a single `Event` using its globally unique `ID`. */
	eventByNodeId?: Maybe<Event>;
	/** Reads and enables pagination through a set of `Event`. */
	events?: Maybe<EventsConnection>;
	extrinsic?: Maybe<Extrinsic>;
	/** Reads a single `Extrinsic` using its globally unique `ID`. */
	extrinsicByNodeId?: Maybe<Extrinsic>;
	/** Reads and enables pagination through a set of `Extrinsic`. */
	extrinsics?: Maybe<ExtrinsicsConnection>;
	homaAction?: Maybe<HomaAction>;
	/** Reads a single `HomaAction` using its globally unique `ID`. */
	homaActionByNodeId?: Maybe<HomaAction>;
	/** Reads and enables pagination through a set of `HomaAction`. */
	homaActions?: Maybe<HomaActionsConnection>;
	incentiveAction?: Maybe<IncentiveAction>;
	/** Reads a single `IncentiveAction` using its globally unique `ID`. */
	incentiveActionByNodeId?: Maybe<IncentiveAction>;
	/** Reads and enables pagination through a set of `IncentiveAction`. */
	incentiveActions?: Maybe<IncentiveActionsConnection>;
	loanAction?: Maybe<LoanAction>;
	/** Reads a single `LoanAction` using its globally unique `ID`. */
	loanActionByNodeId?: Maybe<LoanAction>;
	/** Reads and enables pagination through a set of `LoanAction`. */
	loanActions?: Maybe<LoanActionsConnection>;
	loanParam?: Maybe<LoanParam>;
	/** Reads a single `LoanParam` using its globally unique `ID`. */
	loanParamByNodeId?: Maybe<LoanParam>;
	/** Reads and enables pagination through a set of `LoanParam`. */
	loanParams?: Maybe<LoanParamsConnection>;
	/** Reads and enables pagination through a set of `LoanParamsHistory`. */
	loanParamsHistories?: Maybe<LoanParamsHistoriesConnection>;
	loanParamsHistory?: Maybe<LoanParamsHistory>;
	/** Reads a single `LoanParamsHistory` using its globally unique `ID`. */
	loanParamsHistoryByNodeId?: Maybe<LoanParamsHistory>;
	loanPosition?: Maybe<LoanPosition>;
	/** Reads a single `LoanPosition` using its globally unique `ID`. */
	loanPositionByNodeId?: Maybe<LoanPosition>;
	/** Reads and enables pagination through a set of `LoanPosition`. */
	loanPositions?: Maybe<LoanPositionsConnection>;
	nFTAction?: Maybe<NftAction>;
	/** Reads a single `NFTAction` using its globally unique `ID`. */
	nFTActionByNodeId?: Maybe<NftAction>;
	/** Reads and enables pagination through a set of `NFTAction`. */
	nFTActions?: Maybe<NftActionsConnection>;
	/** Fetches an object given its globally unique `ID`. */
	node?: Maybe<Node>;
	/** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
	nodeId: Scalars["ID"];
	oracleFeedRecord?: Maybe<OracleFeedRecord>;
	/** Reads a single `OracleFeedRecord` using its globally unique `ID`. */
	oracleFeedRecordByNodeId?: Maybe<OracleFeedRecord>;
	/** Reads and enables pagination through a set of `OracleFeedRecord`. */
	oracleFeedRecords?: Maybe<OracleFeedRecordsConnection>;
	pool?: Maybe<Pool>;
	/** Reads a single `Pool` using its globally unique `ID`. */
	poolByNodeId?: Maybe<Pool>;
	/** Reads and enables pagination through a set of `PoolDayDatum`. */
	poolDayData?: Maybe<PoolDayDataConnection>;
	poolDayDatum?: Maybe<PoolDayDatum>;
	/** Reads a single `PoolDayDatum` using its globally unique `ID`. */
	poolDayDatumByNodeId?: Maybe<PoolDayDatum>;
	/** Reads and enables pagination through a set of `PoolHourDatum`. */
	poolHourData?: Maybe<PoolHourDataConnection>;
	poolHourDatum?: Maybe<PoolHourDatum>;
	/** Reads a single `PoolHourDatum` using its globally unique `ID`. */
	poolHourDatumByNodeId?: Maybe<PoolHourDatum>;
	/** Reads and enables pagination through a set of `Pool`. */
	pools?: Maybe<PoolsConnection>;
	priceBundle?: Maybe<PriceBundle>;
	/** Reads a single `PriceBundle` using its globally unique `ID`. */
	priceBundleByNodeId?: Maybe<PriceBundle>;
	/** Reads and enables pagination through a set of `PriceBundle`. */
	priceBundles?: Maybe<PriceBundlesConnection>;
	priceRecord?: Maybe<PriceRecord>;
	/** Reads a single `PriceRecord` using its globally unique `ID`. */
	priceRecordByNodeId?: Maybe<PriceRecord>;
	/** Reads and enables pagination through a set of `PriceRecord`. */
	priceRecords?: Maybe<PriceRecordsConnection>;
	provisionPool?: Maybe<ProvisionPool>;
	/** Reads a single `ProvisionPool` using its globally unique `ID`. */
	provisionPoolByNodeId?: Maybe<ProvisionPool>;
	/** Reads and enables pagination through a set of `ProvisionPool`. */
	provisionPools?: Maybe<ProvisionPoolsConnection>;
	/**
	 * Exposes the root query type nested one level down. This is helpful for Relay 1
	 * which can only query top level fields if they are in a particular form.
	 */
	query: Query;
	systemConst?: Maybe<SystemConst>;
	/** Reads a single `SystemConst` using its globally unique `ID`. */
	systemConstByNodeId?: Maybe<SystemConst>;
	/** Reads and enables pagination through a set of `SystemConst`. */
	systemConsts?: Maybe<SystemConstsConnection>;
	token?: Maybe<Token>;
	/** Reads a single `Token` using its globally unique `ID`. */
	tokenByNodeId?: Maybe<Token>;
	/** Reads and enables pagination through a set of `TokenDayDatum`. */
	tokenDayData?: Maybe<TokenDayDataConnection>;
	tokenDayDatum?: Maybe<TokenDayDatum>;
	/** Reads a single `TokenDayDatum` using its globally unique `ID`. */
	tokenDayDatumByNodeId?: Maybe<TokenDayDatum>;
	/** Reads and enables pagination through a set of `Token`. */
	tokens?: Maybe<TokensConnection>;
	totalBalanceChangedRecord?: Maybe<TotalBalanceChangedRecord>;
	/** Reads a single `TotalBalanceChangedRecord` using its globally unique `ID`. */
	totalBalanceChangedRecordByNodeId?: Maybe<TotalBalanceChangedRecord>;
	/** Reads and enables pagination through a set of `TotalBalanceChangedRecord`. */
	totalBalanceChangedRecords?: Maybe<TotalBalanceChangedRecordsConnection>;
	totalLoanPosition?: Maybe<TotalLoanPosition>;
	/** Reads a single `TotalLoanPosition` using its globally unique `ID`. */
	totalLoanPositionByNodeId?: Maybe<TotalLoanPosition>;
	/** Reads and enables pagination through a set of `TotalLoanPosition`. */
	totalLoanPositions?: Maybe<TotalLoanPositionsConnection>;
	transfer?: Maybe<Transfer>;
	/** Reads a single `Transfer` using its globally unique `ID`. */
	transferByNodeId?: Maybe<Transfer>;
	/** Reads and enables pagination through a set of `Transfer`. */
	transfers?: Maybe<TransfersConnection>;
	userProvision?: Maybe<UserProvision>;
	/** Reads a single `UserProvision` using its globally unique `ID`. */
	userProvisionByNodeId?: Maybe<UserProvision>;
	/** Reads and enables pagination through a set of `UserProvision`. */
	userProvisions?: Maybe<UserProvisionsConnection>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAccountArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryAccountByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryAccountsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<AccountFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryBalanceArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryBalanceByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryBalanceChangedRecordArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryBalanceChangedRecordByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryBalanceChangedRecordsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<BalanceChangedRecordFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<BalanceChangedRecordsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryBalancesArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<BalanceFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<BalancesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryBlockArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryBlockByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryBlocksArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<BlockFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryCallArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryCallByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryCallsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<CallFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<CallsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryDexArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryDexActionArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryDexActionByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryDexActionsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<DexActionFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<DexActionsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryDexByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryDexDayDataArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<DexDayDatumFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<DexDayDataOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryDexDayDatumArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryDexDayDatumByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryDexesArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<DexFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<DexesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryEventArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryEventByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryEventsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<EventFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryExtrinsicArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryExtrinsicByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryExtrinsicsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<ExtrinsicFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<ExtrinsicsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryHomaActionArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryHomaActionByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryHomaActionsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<HomaActionFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<HomaActionsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryIncentiveActionArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryIncentiveActionByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryIncentiveActionsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<IncentiveActionFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<IncentiveActionsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryLoanActionArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryLoanActionByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryLoanActionsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<LoanActionFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<LoanActionsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryLoanParamArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryLoanParamByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryLoanParamsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<LoanParamFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<LoanParamsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryLoanParamsHistoriesArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<LoanParamsHistoryFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<LoanParamsHistoriesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryLoanParamsHistoryArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryLoanParamsHistoryByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryLoanPositionArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryLoanPositionByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryLoanPositionsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<LoanPositionFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<LoanPositionsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryNFtActionArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryNFtActionByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryNFtActionsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<NftActionFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<NftActionsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryOracleFeedRecordArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryOracleFeedRecordByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryOracleFeedRecordsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<OracleFeedRecordFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<OracleFeedRecordsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryPoolArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryPoolByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryPoolDayDataArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<PoolDayDatumFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<PoolDayDataOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryPoolDayDatumArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryPoolDayDatumByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryPoolHourDataArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<PoolHourDatumFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<PoolHourDataOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryPoolHourDatumArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryPoolHourDatumByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryPoolsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<PoolFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<PoolsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryPriceBundleArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryPriceBundleByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryPriceBundlesArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<PriceBundleFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<PriceBundlesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryPriceRecordArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryPriceRecordByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryPriceRecordsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<PriceRecordFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<PriceRecordsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryProvisionPoolArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryProvisionPoolByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryProvisionPoolsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<ProvisionPoolFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<ProvisionPoolsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QuerySystemConstArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QuerySystemConstByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QuerySystemConstsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<SystemConstFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<SystemConstsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryTokenArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryTokenByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryTokenDayDataArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenDayDatumFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokenDayDataOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryTokenDayDatumArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryTokenDayDatumByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryTokensArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryTotalBalanceChangedRecordArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryTotalBalanceChangedRecordByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryTotalBalanceChangedRecordsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TotalBalanceChangedRecordFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TotalBalanceChangedRecordsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryTotalLoanPositionArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryTotalLoanPositionByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryTotalLoanPositionsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TotalLoanPositionFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TotalLoanPositionsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryTransferArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryTransferByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryTransfersArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TransferFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TransfersOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryUserProvisionArgs = {
	id: Scalars["String"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserProvisionByNodeIdArgs = {
	nodeId: Scalars["ID"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserProvisionsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<UserProvisionFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<UserProvisionsOrderBy>>;
};

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
	/** Not equal to the specified value, treating null like an ordinary value. */
	distinctFrom?: InputMaybe<Scalars["String"]>;
	/** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
	distinctFromInsensitive?: InputMaybe<Scalars["String"]>;
	/** Ends with the specified string (case-sensitive). */
	endsWith?: InputMaybe<Scalars["String"]>;
	/** Ends with the specified string (case-insensitive). */
	endsWithInsensitive?: InputMaybe<Scalars["String"]>;
	/** Equal to the specified value. */
	equalTo?: InputMaybe<Scalars["String"]>;
	/** Equal to the specified value (case-insensitive). */
	equalToInsensitive?: InputMaybe<Scalars["String"]>;
	/** Greater than the specified value. */
	greaterThan?: InputMaybe<Scalars["String"]>;
	/** Greater than the specified value (case-insensitive). */
	greaterThanInsensitive?: InputMaybe<Scalars["String"]>;
	/** Greater than or equal to the specified value. */
	greaterThanOrEqualTo?: InputMaybe<Scalars["String"]>;
	/** Greater than or equal to the specified value (case-insensitive). */
	greaterThanOrEqualToInsensitive?: InputMaybe<Scalars["String"]>;
	/** Included in the specified list. */
	in?: InputMaybe<Array<Scalars["String"]>>;
	/** Included in the specified list (case-insensitive). */
	inInsensitive?: InputMaybe<Array<Scalars["String"]>>;
	/** Contains the specified string (case-sensitive). */
	includes?: InputMaybe<Scalars["String"]>;
	/** Contains the specified string (case-insensitive). */
	includesInsensitive?: InputMaybe<Scalars["String"]>;
	/** Is null (if `true` is specified) or is not null (if `false` is specified). */
	isNull?: InputMaybe<Scalars["Boolean"]>;
	/** Less than the specified value. */
	lessThan?: InputMaybe<Scalars["String"]>;
	/** Less than the specified value (case-insensitive). */
	lessThanInsensitive?: InputMaybe<Scalars["String"]>;
	/** Less than or equal to the specified value. */
	lessThanOrEqualTo?: InputMaybe<Scalars["String"]>;
	/** Less than or equal to the specified value (case-insensitive). */
	lessThanOrEqualToInsensitive?: InputMaybe<Scalars["String"]>;
	/** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
	like?: InputMaybe<Scalars["String"]>;
	/** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
	likeInsensitive?: InputMaybe<Scalars["String"]>;
	/** Equal to the specified value, treating null like an ordinary value. */
	notDistinctFrom?: InputMaybe<Scalars["String"]>;
	/** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
	notDistinctFromInsensitive?: InputMaybe<Scalars["String"]>;
	/** Does not end with the specified string (case-sensitive). */
	notEndsWith?: InputMaybe<Scalars["String"]>;
	/** Does not end with the specified string (case-insensitive). */
	notEndsWithInsensitive?: InputMaybe<Scalars["String"]>;
	/** Not equal to the specified value. */
	notEqualTo?: InputMaybe<Scalars["String"]>;
	/** Not equal to the specified value (case-insensitive). */
	notEqualToInsensitive?: InputMaybe<Scalars["String"]>;
	/** Not included in the specified list. */
	notIn?: InputMaybe<Array<Scalars["String"]>>;
	/** Not included in the specified list (case-insensitive). */
	notInInsensitive?: InputMaybe<Array<Scalars["String"]>>;
	/** Does not contain the specified string (case-sensitive). */
	notIncludes?: InputMaybe<Scalars["String"]>;
	/** Does not contain the specified string (case-insensitive). */
	notIncludesInsensitive?: InputMaybe<Scalars["String"]>;
	/** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
	notLike?: InputMaybe<Scalars["String"]>;
	/** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
	notLikeInsensitive?: InputMaybe<Scalars["String"]>;
	/** Does not start with the specified string (case-sensitive). */
	notStartsWith?: InputMaybe<Scalars["String"]>;
	/** Does not start with the specified string (case-insensitive). */
	notStartsWithInsensitive?: InputMaybe<Scalars["String"]>;
	/** Starts with the specified string (case-sensitive). */
	startsWith?: InputMaybe<Scalars["String"]>;
	/** Starts with the specified string (case-insensitive). */
	startsWithInsensitive?: InputMaybe<Scalars["String"]>;
};

export type SystemConst = Node & {
	__typename?: "SystemConst";
	id: Scalars["String"];
	/** Reads a single `Token` that is related to this `SystemConst`. */
	liquidToken?: Maybe<Token>;
	liquidTokenId?: Maybe<Scalars["String"]>;
	/** Reads a single `Token` that is related to this `SystemConst`. */
	nativeToken?: Maybe<Token>;
	nativeTokenId?: Maybe<Scalars["String"]>;
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
	/** Reads a single `Token` that is related to this `SystemConst`. */
	stableToken?: Maybe<Token>;
	stableTokenId?: Maybe<Scalars["String"]>;
	/** Reads a single `Token` that is related to this `SystemConst`. */
	stakignToken?: Maybe<Token>;
	stakignTokenId?: Maybe<Scalars["String"]>;
};

export type SystemConstAggregates = {
	__typename?: "SystemConstAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

/** A filter to be used against `SystemConst` object types. All fields are combined with a logical ‘and.’ */
export type SystemConstFilter = {
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<SystemConstFilter>>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Filter by the object’s `liquidTokenId` field. */
	liquidTokenId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `nativeTokenId` field. */
	nativeTokenId?: InputMaybe<StringFilter>;
	/** Negates the expression. */
	not?: InputMaybe<SystemConstFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<SystemConstFilter>>;
	/** Filter by the object’s `stableTokenId` field. */
	stableTokenId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `stakignTokenId` field. */
	stakignTokenId?: InputMaybe<StringFilter>;
};

/** A connection to a list of `SystemConst` values. */
export type SystemConstsConnection = {
	__typename?: "SystemConstsConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<SystemConstAggregates>;
	/** A list of edges which contains the `SystemConst` and cursor to aid in pagination. */
	edges: Array<SystemConstsEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<SystemConstAggregates>>;
	/** A list of `SystemConst` objects. */
	nodes: Array<Maybe<SystemConst>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `SystemConst` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `SystemConst` values. */
export type SystemConstsConnectionGroupedAggregatesArgs = {
	groupBy: Array<SystemConstsGroupBy>;
	having?: InputMaybe<SystemConstsHavingInput>;
};

/** A `SystemConst` edge in the connection. */
export type SystemConstsEdge = {
	__typename?: "SystemConstsEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `SystemConst` at the end of the edge. */
	node?: Maybe<SystemConst>;
};

/** Grouping methods for `SystemConst` for usage during aggregation. */
export enum SystemConstsGroupBy {
	LiquidTokenId = "LIQUID_TOKEN_ID",
	NativeTokenId = "NATIVE_TOKEN_ID",
	StableTokenId = "STABLE_TOKEN_ID",
	StakignTokenId = "STAKIGN_TOKEN_ID",
}

/** Conditions for `SystemConst` aggregates. */
export type SystemConstsHavingInput = {
	AND?: InputMaybe<Array<SystemConstsHavingInput>>;
	OR?: InputMaybe<Array<SystemConstsHavingInput>>;
};

/** Methods to use when ordering `SystemConst`. */
export enum SystemConstsOrderBy {
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	LiquidTokenIdAsc = "LIQUID_TOKEN_ID_ASC",
	LiquidTokenIdDesc = "LIQUID_TOKEN_ID_DESC",
	NativeTokenIdAsc = "NATIVE_TOKEN_ID_ASC",
	NativeTokenIdDesc = "NATIVE_TOKEN_ID_DESC",
	Natural = "NATURAL",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	StableTokenIdAsc = "STABLE_TOKEN_ID_ASC",
	StableTokenIdDesc = "STABLE_TOKEN_ID_DESC",
	StakignTokenIdAsc = "STAKIGN_TOKEN_ID_ASC",
	StakignTokenIdDesc = "STAKIGN_TOKEN_ID_DESC",
}

export type TableEstimate = {
	__typename?: "TableEstimate";
	estimate?: Maybe<Scalars["Int"]>;
	table?: Maybe<Scalars["String"]>;
};

export type Token = Node & {
	__typename?: "Token";
	/** Reads and enables pagination through a set of `Account`. */
	accountsByBalanceChangedRecordTokenIdAndAccountId: TokenAccountsByBalanceChangedRecordTokenIdAndAccountIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Account`. */
	accountsByBalanceTokenIdAndAccountId: TokenAccountsByBalanceTokenIdAndAccountIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Account`. */
	accountsByDexActionToken0IdAndAccountId: TokenAccountsByDexActionToken0IdAndAccountIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Account`. */
	accountsByDexActionToken1IdAndAccountId: TokenAccountsByDexActionToken1IdAndAccountIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Account`. */
	accountsByLoanPositionCollateralIdAndOwnerId: TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Account`. */
	accountsByOracleFeedRecordTokenIdAndAccountId: TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Account`. */
	accountsByTransferTokenIdAndFromId: TokenAccountsByTransferTokenIdAndFromIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Account`. */
	accountsByTransferTokenIdAndToId: TokenAccountsByTransferTokenIdAndToIdManyToManyConnection;
	/** Reads and enables pagination through a set of `BalanceChangedRecord`. */
	balanceChangedRecords: BalanceChangedRecordsConnection;
	/** Reads and enables pagination through a set of `Balance`. */
	balances: BalancesConnection;
	/** Reads and enables pagination through a set of `Block`. */
	blocksByLoanParamCollateralIdAndStartAtBlockId: TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Block`. */
	blocksByLoanParamsHistoryCollateralIdAndEndAtBlockId: TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Block`. */
	blocksByLoanParamsHistoryCollateralIdAndStartAtBlockId: TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Block`. */
	blocksByOracleFeedRecordTokenIdAndBlockId: TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Block`. */
	blocksByProvisionPoolPoolTokenIdAndEndAtBlockId: TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Block`. */
	blocksByProvisionPoolPoolTokenIdAndStartAtBlockId: TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Block`. */
	blocksByProvisionPoolToken0IdAndEndAtBlockId: TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Block`. */
	blocksByProvisionPoolToken0IdAndStartAtBlockId: TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Block`. */
	blocksByProvisionPoolToken1IdAndEndAtBlockId: TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Block`. */
	blocksByProvisionPoolToken1IdAndStartAtBlockId: TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyConnection;
	/** Reads and enables pagination through a set of `TokenDayDatum`. */
	dayData: TokenDayDataConnection;
	decimal?: Maybe<Scalars["Int"]>;
	/** Reads and enables pagination through a set of `DexAction`. */
	dexActionsByToken0Id: DexActionsConnection;
	/** Reads and enables pagination through a set of `DexAction`. */
	dexActionsByToken1Id: DexActionsConnection;
	/** Reads and enables pagination through a set of `Extrinsic`. */
	extrinsicsByDexActionToken0IdAndExtrinsicId: TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Extrinsic`. */
	extrinsicsByDexActionToken1IdAndExtrinsicId: TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyConnection;
	id: Scalars["String"];
	issuance?: Maybe<Scalars["String"]>;
	/** Reads and enables pagination through a set of `LoanParam`. */
	loanParamsByCollateralId: LoanParamsConnection;
	/** Reads and enables pagination through a set of `LoanParamsHistory`. */
	loanParamsHistoriesByCollateralId: LoanParamsHistoriesConnection;
	/** Reads and enables pagination through a set of `LoanPosition`. */
	loanPositionsByCollateralId: LoanPositionsConnection;
	lockedInDex?: Maybe<Scalars["String"]>;
	lockedInIncentive?: Maybe<Scalars["String"]>;
	lockedInLoan?: Maybe<Scalars["String"]>;
	name?: Maybe<Scalars["String"]>;
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
	/** Reads and enables pagination through a set of `OracleFeedRecord`. */
	oracleFeedRecords: OracleFeedRecordsConnection;
	/** Reads and enables pagination through a set of `Pool`. */
	poolBase: PoolsConnection;
	/** Reads and enables pagination through a set of `PoolDayDatum`. */
	poolDayDataBase: PoolDayDataConnection;
	/** Reads and enables pagination through a set of `PoolDayDatum`. */
	poolDayDataQuote: PoolDayDataConnection;
	/** Reads and enables pagination through a set of `PoolHourDatum`. */
	poolHourDataByToken0Id: PoolHourDataConnection;
	/** Reads and enables pagination through a set of `PoolHourDatum`. */
	poolHourDataByToken1Id: PoolHourDataConnection;
	/** Reads and enables pagination through a set of `Pool`. */
	poolQuote: PoolsConnection;
	/** Reads and enables pagination through a set of `Pool`. */
	poolsByDexActionToken0IdAndPoolId: TokenPoolsByDexActionToken0IdAndPoolIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Pool`. */
	poolsByDexActionToken1IdAndPoolId: TokenPoolsByDexActionToken1IdAndPoolIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Pool`. */
	poolsByPoolDayDatumToken0IdAndPoolId: TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Pool`. */
	poolsByPoolDayDatumToken1IdAndPoolId: TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Pool`. */
	poolsByPoolHourDatumToken0IdAndPoolId: TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Pool`. */
	poolsByPoolHourDatumToken1IdAndPoolId: TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyConnection;
	price?: Maybe<Scalars["String"]>;
	/** Reads and enables pagination through a set of `ProvisionPool`. */
	provisionPoolsByPoolTokenId: ProvisionPoolsConnection;
	/** Reads and enables pagination through a set of `ProvisionPool`. */
	provisionPoolsByToken0Id: ProvisionPoolsConnection;
	/** Reads and enables pagination through a set of `ProvisionPool`. */
	provisionPoolsByToken1Id: ProvisionPoolsConnection;
	/** Reads and enables pagination through a set of `ProvisionPool`. */
	provisionPoolsByUserProvisionToken0IdAndPoolId: TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyConnection;
	/** Reads and enables pagination through a set of `ProvisionPool`. */
	provisionPoolsByUserProvisionToken1IdAndPoolId: TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyConnection;
	/** Reads and enables pagination through a set of `SystemConst`. */
	systemConstsByLiquidTokenId: SystemConstsConnection;
	/** Reads and enables pagination through a set of `SystemConst`. */
	systemConstsByNativeTokenId: SystemConstsConnection;
	/** Reads and enables pagination through a set of `SystemConst`. */
	systemConstsByStableTokenId: SystemConstsConnection;
	/** Reads and enables pagination through a set of `SystemConst`. */
	systemConstsByStakignTokenId: SystemConstsConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByDexActionToken0IdAndToken1Id: TokenTokensByDexActionToken0IdAndToken1IdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByDexActionToken1IdAndToken0Id: TokenTokensByDexActionToken1IdAndToken0IdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByPoolDayDatumToken0IdAndToken1Id: TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByPoolDayDatumToken1IdAndToken0Id: TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByPoolHourDatumToken0IdAndToken1Id: TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByPoolHourDatumToken1IdAndToken0Id: TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByPoolToken0IdAndToken1Id: TokenTokensByPoolToken0IdAndToken1IdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByPoolToken1IdAndToken0Id: TokenTokensByPoolToken1IdAndToken0IdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByProvisionPoolPoolTokenIdAndToken0Id: TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByProvisionPoolPoolTokenIdAndToken1Id: TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByProvisionPoolToken0IdAndPoolTokenId: TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByProvisionPoolToken0IdAndToken1Id: TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByProvisionPoolToken1IdAndPoolTokenId: TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByProvisionPoolToken1IdAndToken0Id: TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensBySystemConstLiquidTokenIdAndNativeTokenId: TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensBySystemConstLiquidTokenIdAndStableTokenId: TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensBySystemConstLiquidTokenIdAndStakignTokenId: TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensBySystemConstNativeTokenIdAndLiquidTokenId: TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensBySystemConstNativeTokenIdAndStableTokenId: TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensBySystemConstNativeTokenIdAndStakignTokenId: TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensBySystemConstStableTokenIdAndLiquidTokenId: TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensBySystemConstStableTokenIdAndNativeTokenId: TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensBySystemConstStableTokenIdAndStakignTokenId: TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensBySystemConstStakignTokenIdAndLiquidTokenId: TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensBySystemConstStakignTokenIdAndNativeTokenId: TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensBySystemConstStakignTokenIdAndStableTokenId: TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByUserProvisionToken0IdAndToken1Id: TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyConnection;
	/** Reads and enables pagination through a set of `Token`. */
	tokensByUserProvisionToken1IdAndToken0Id: TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyConnection;
	/** Reads and enables pagination through a set of `TotalBalanceChangedRecord`. */
	totalBalanceChangedRecords: TotalBalanceChangedRecordsConnection;
	/** Reads and enables pagination through a set of `TotalLoanPosition`. */
	totalLoanPositionsByCollateralId: TotalLoanPositionsConnection;
	/** Reads and enables pagination through a set of `Transfer`. */
	transfers: TransfersConnection;
	txCount?: Maybe<Scalars["BigFloat"]>;
	/** Reads and enables pagination through a set of `UserProvision`. */
	userProvisionsByToken0Id: UserProvisionsConnection;
	/** Reads and enables pagination through a set of `UserProvision`. */
	userProvisionsByToken1Id: UserProvisionsConnection;
	volume?: Maybe<Scalars["String"]>;
	volumeUSD?: Maybe<Scalars["String"]>;
};

export type TokenAccountsByBalanceChangedRecordTokenIdAndAccountIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<AccountFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};

export type TokenAccountsByBalanceTokenIdAndAccountIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<AccountFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};

export type TokenAccountsByDexActionToken0IdAndAccountIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<AccountFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};

export type TokenAccountsByDexActionToken1IdAndAccountIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<AccountFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};

export type TokenAccountsByLoanPositionCollateralIdAndOwnerIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<AccountFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};

export type TokenAccountsByOracleFeedRecordTokenIdAndAccountIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<AccountFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};

export type TokenAccountsByTransferTokenIdAndFromIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<AccountFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};

export type TokenAccountsByTransferTokenIdAndToIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<AccountFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};

export type TokenBalanceChangedRecordsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<BalanceChangedRecordFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<BalanceChangedRecordsOrderBy>>;
};

export type TokenBalancesArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<BalanceFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<BalancesOrderBy>>;
};

export type TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<BlockFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};

export type TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<BlockFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};

export type TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<BlockFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};

export type TokenBlocksByOracleFeedRecordTokenIdAndBlockIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<BlockFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};

export type TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<BlockFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};

export type TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<BlockFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};

export type TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<BlockFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};

export type TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<BlockFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};

export type TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<BlockFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};

export type TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<BlockFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};

export type TokenDayDataArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenDayDatumFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokenDayDataOrderBy>>;
};

export type TokenDexActionsByToken0IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<DexActionFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<DexActionsOrderBy>>;
};

export type TokenDexActionsByToken1IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<DexActionFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<DexActionsOrderBy>>;
};

export type TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<ExtrinsicFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<ExtrinsicsOrderBy>>;
};

export type TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<ExtrinsicFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<ExtrinsicsOrderBy>>;
};

export type TokenLoanParamsByCollateralIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<LoanParamFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<LoanParamsOrderBy>>;
};

export type TokenLoanParamsHistoriesByCollateralIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<LoanParamsHistoryFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<LoanParamsHistoriesOrderBy>>;
};

export type TokenLoanPositionsByCollateralIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<LoanPositionFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<LoanPositionsOrderBy>>;
};

export type TokenOracleFeedRecordsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<OracleFeedRecordFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<OracleFeedRecordsOrderBy>>;
};

export type TokenPoolBaseArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<PoolFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<PoolsOrderBy>>;
};

export type TokenPoolDayDataBaseArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<PoolDayDatumFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<PoolDayDataOrderBy>>;
};

export type TokenPoolDayDataQuoteArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<PoolDayDatumFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<PoolDayDataOrderBy>>;
};

export type TokenPoolHourDataByToken0IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<PoolHourDatumFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<PoolHourDataOrderBy>>;
};

export type TokenPoolHourDataByToken1IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<PoolHourDatumFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<PoolHourDataOrderBy>>;
};

export type TokenPoolQuoteArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<PoolFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<PoolsOrderBy>>;
};

export type TokenPoolsByDexActionToken0IdAndPoolIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<PoolFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<PoolsOrderBy>>;
};

export type TokenPoolsByDexActionToken1IdAndPoolIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<PoolFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<PoolsOrderBy>>;
};

export type TokenPoolsByPoolDayDatumToken0IdAndPoolIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<PoolFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<PoolsOrderBy>>;
};

export type TokenPoolsByPoolDayDatumToken1IdAndPoolIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<PoolFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<PoolsOrderBy>>;
};

export type TokenPoolsByPoolHourDatumToken0IdAndPoolIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<PoolFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<PoolsOrderBy>>;
};

export type TokenPoolsByPoolHourDatumToken1IdAndPoolIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<PoolFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<PoolsOrderBy>>;
};

export type TokenProvisionPoolsByPoolTokenIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<ProvisionPoolFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<ProvisionPoolsOrderBy>>;
};

export type TokenProvisionPoolsByToken0IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<ProvisionPoolFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<ProvisionPoolsOrderBy>>;
};

export type TokenProvisionPoolsByToken1IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<ProvisionPoolFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<ProvisionPoolsOrderBy>>;
};

export type TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<ProvisionPoolFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<ProvisionPoolsOrderBy>>;
};

export type TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<ProvisionPoolFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<ProvisionPoolsOrderBy>>;
};

export type TokenSystemConstsByLiquidTokenIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<SystemConstFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<SystemConstsOrderBy>>;
};

export type TokenSystemConstsByNativeTokenIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<SystemConstFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<SystemConstsOrderBy>>;
};

export type TokenSystemConstsByStableTokenIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<SystemConstFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<SystemConstsOrderBy>>;
};

export type TokenSystemConstsByStakignTokenIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<SystemConstFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<SystemConstsOrderBy>>;
};

export type TokenTokensByDexActionToken0IdAndToken1IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type TokenTokensByDexActionToken1IdAndToken0IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type TokenTokensByPoolDayDatumToken0IdAndToken1IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type TokenTokensByPoolDayDatumToken1IdAndToken0IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type TokenTokensByPoolHourDatumToken0IdAndToken1IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type TokenTokensByPoolHourDatumToken1IdAndToken0IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type TokenTokensByPoolToken0IdAndToken1IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type TokenTokensByPoolToken1IdAndToken0IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type TokenTokensByProvisionPoolPoolTokenIdAndToken0IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type TokenTokensByProvisionPoolPoolTokenIdAndToken1IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type TokenTokensByProvisionPoolToken0IdAndPoolTokenIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type TokenTokensByProvisionPoolToken0IdAndToken1IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type TokenTokensByProvisionPoolToken1IdAndPoolTokenIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type TokenTokensByProvisionPoolToken1IdAndToken0IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type TokenTokensBySystemConstNativeTokenIdAndStableTokenIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type TokenTokensBySystemConstStableTokenIdAndNativeTokenIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type TokenTokensBySystemConstStableTokenIdAndStakignTokenIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type TokenTokensBySystemConstStakignTokenIdAndStableTokenIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type TokenTokensByUserProvisionToken0IdAndToken1IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type TokenTokensByUserProvisionToken1IdAndToken0IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TokenFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TokensOrderBy>>;
};

export type TokenTotalBalanceChangedRecordsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TotalBalanceChangedRecordFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TotalBalanceChangedRecordsOrderBy>>;
};

export type TokenTotalLoanPositionsByCollateralIdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TotalLoanPositionFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TotalLoanPositionsOrderBy>>;
};

export type TokenTransfersArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<TransferFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<TransfersOrderBy>>;
};

export type TokenUserProvisionsByToken0IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<UserProvisionFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<UserProvisionsOrderBy>>;
};

export type TokenUserProvisionsByToken1IdArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<UserProvisionFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<UserProvisionsOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `BalanceChangedRecord`. */
export type TokenAccountsByBalanceChangedRecordTokenIdAndAccountIdManyToManyConnection =
	{
		__typename?: "TokenAccountsByBalanceChangedRecordTokenIdAndAccountIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<AccountAggregates>;
		/** A list of edges which contains the `Account`, info from the `BalanceChangedRecord`, and the cursor to aid in pagination. */
		edges: Array<TokenAccountsByBalanceChangedRecordTokenIdAndAccountIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<AccountAggregates>>;
		/** A list of `Account` objects. */
		nodes: Array<Maybe<Account>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Account` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Account` values, with data from `BalanceChangedRecord`. */
export type TokenAccountsByBalanceChangedRecordTokenIdAndAccountIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<AccountsGroupBy>;
		having?: InputMaybe<AccountsHavingInput>;
	};

/** A `Account` edge in the connection, with data from `BalanceChangedRecord`. */
export type TokenAccountsByBalanceChangedRecordTokenIdAndAccountIdManyToManyEdge =
	{
		__typename?: "TokenAccountsByBalanceChangedRecordTokenIdAndAccountIdManyToManyEdge";
		/** Reads and enables pagination through a set of `BalanceChangedRecord`. */
		balanceChangedRecords: BalanceChangedRecordsConnection;
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** The `Account` at the end of the edge. */
		node?: Maybe<Account>;
	};

/** A `Account` edge in the connection, with data from `BalanceChangedRecord`. */
export type TokenAccountsByBalanceChangedRecordTokenIdAndAccountIdManyToManyEdgeBalanceChangedRecordsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<BalanceChangedRecordFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<BalanceChangedRecordsOrderBy>>;
	};

/** A connection to a list of `Account` values, with data from `Balance`. */
export type TokenAccountsByBalanceTokenIdAndAccountIdManyToManyConnection = {
	__typename?: "TokenAccountsByBalanceTokenIdAndAccountIdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<AccountAggregates>;
	/** A list of edges which contains the `Account`, info from the `Balance`, and the cursor to aid in pagination. */
	edges: Array<TokenAccountsByBalanceTokenIdAndAccountIdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<AccountAggregates>>;
	/** A list of `Account` objects. */
	nodes: Array<Maybe<Account>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Account` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Account` values, with data from `Balance`. */
export type TokenAccountsByBalanceTokenIdAndAccountIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<AccountsGroupBy>;
		having?: InputMaybe<AccountsHavingInput>;
	};

/** A `Account` edge in the connection, with data from `Balance`. */
export type TokenAccountsByBalanceTokenIdAndAccountIdManyToManyEdge = {
	__typename?: "TokenAccountsByBalanceTokenIdAndAccountIdManyToManyEdge";
	/** Reads and enables pagination through a set of `Balance`. */
	balances: BalancesConnection;
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Account` at the end of the edge. */
	node?: Maybe<Account>;
};

/** A `Account` edge in the connection, with data from `Balance`. */
export type TokenAccountsByBalanceTokenIdAndAccountIdManyToManyEdgeBalancesArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<BalanceFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<BalancesOrderBy>>;
	};

/** A connection to a list of `Account` values, with data from `DexAction`. */
export type TokenAccountsByDexActionToken0IdAndAccountIdManyToManyConnection = {
	__typename?: "TokenAccountsByDexActionToken0IdAndAccountIdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<AccountAggregates>;
	/** A list of edges which contains the `Account`, info from the `DexAction`, and the cursor to aid in pagination. */
	edges: Array<TokenAccountsByDexActionToken0IdAndAccountIdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<AccountAggregates>>;
	/** A list of `Account` objects. */
	nodes: Array<Maybe<Account>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Account` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Account` values, with data from `DexAction`. */
export type TokenAccountsByDexActionToken0IdAndAccountIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<AccountsGroupBy>;
		having?: InputMaybe<AccountsHavingInput>;
	};

/** A `Account` edge in the connection, with data from `DexAction`. */
export type TokenAccountsByDexActionToken0IdAndAccountIdManyToManyEdge = {
	__typename?: "TokenAccountsByDexActionToken0IdAndAccountIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** Reads and enables pagination through a set of `DexAction`. */
	dexActions: DexActionsConnection;
	/** The `Account` at the end of the edge. */
	node?: Maybe<Account>;
};

/** A `Account` edge in the connection, with data from `DexAction`. */
export type TokenAccountsByDexActionToken0IdAndAccountIdManyToManyEdgeDexActionsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<DexActionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<DexActionsOrderBy>>;
	};

/** A connection to a list of `Account` values, with data from `DexAction`. */
export type TokenAccountsByDexActionToken1IdAndAccountIdManyToManyConnection = {
	__typename?: "TokenAccountsByDexActionToken1IdAndAccountIdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<AccountAggregates>;
	/** A list of edges which contains the `Account`, info from the `DexAction`, and the cursor to aid in pagination. */
	edges: Array<TokenAccountsByDexActionToken1IdAndAccountIdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<AccountAggregates>>;
	/** A list of `Account` objects. */
	nodes: Array<Maybe<Account>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Account` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Account` values, with data from `DexAction`. */
export type TokenAccountsByDexActionToken1IdAndAccountIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<AccountsGroupBy>;
		having?: InputMaybe<AccountsHavingInput>;
	};

/** A `Account` edge in the connection, with data from `DexAction`. */
export type TokenAccountsByDexActionToken1IdAndAccountIdManyToManyEdge = {
	__typename?: "TokenAccountsByDexActionToken1IdAndAccountIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** Reads and enables pagination through a set of `DexAction`. */
	dexActions: DexActionsConnection;
	/** The `Account` at the end of the edge. */
	node?: Maybe<Account>;
};

/** A `Account` edge in the connection, with data from `DexAction`. */
export type TokenAccountsByDexActionToken1IdAndAccountIdManyToManyEdgeDexActionsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<DexActionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<DexActionsOrderBy>>;
	};

/** A connection to a list of `Account` values, with data from `LoanPosition`. */
export type TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyConnection =
	{
		__typename?: "TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<AccountAggregates>;
		/** A list of edges which contains the `Account`, info from the `LoanPosition`, and the cursor to aid in pagination. */
		edges: Array<TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<AccountAggregates>>;
		/** A list of `Account` objects. */
		nodes: Array<Maybe<Account>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Account` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Account` values, with data from `LoanPosition`. */
export type TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<AccountsGroupBy>;
		having?: InputMaybe<AccountsHavingInput>;
	};

/** A `Account` edge in the connection, with data from `LoanPosition`. */
export type TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyEdge = {
	__typename?: "TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Account` at the end of the edge. */
	node?: Maybe<Account>;
	/** Reads and enables pagination through a set of `LoanPosition`. */
	position: LoanPositionsConnection;
};

/** A `Account` edge in the connection, with data from `LoanPosition`. */
export type TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyEdgePositionArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<LoanPositionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<LoanPositionsOrderBy>>;
	};

/** A connection to a list of `Account` values, with data from `OracleFeedRecord`. */
export type TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyConnection =
	{
		__typename?: "TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<AccountAggregates>;
		/** A list of edges which contains the `Account`, info from the `OracleFeedRecord`, and the cursor to aid in pagination. */
		edges: Array<TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<AccountAggregates>>;
		/** A list of `Account` objects. */
		nodes: Array<Maybe<Account>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Account` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Account` values, with data from `OracleFeedRecord`. */
export type TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<AccountsGroupBy>;
		having?: InputMaybe<AccountsHavingInput>;
	};

/** A `Account` edge in the connection, with data from `OracleFeedRecord`. */
export type TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyEdge = {
	__typename?: "TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Account` at the end of the edge. */
	node?: Maybe<Account>;
	/** Reads and enables pagination through a set of `OracleFeedRecord`. */
	oracleFeedRecords: OracleFeedRecordsConnection;
};

/** A `Account` edge in the connection, with data from `OracleFeedRecord`. */
export type TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyEdgeOracleFeedRecordsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<OracleFeedRecordFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<OracleFeedRecordsOrderBy>>;
	};

/** A connection to a list of `Account` values, with data from `Transfer`. */
export type TokenAccountsByTransferTokenIdAndFromIdManyToManyConnection = {
	__typename?: "TokenAccountsByTransferTokenIdAndFromIdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<AccountAggregates>;
	/** A list of edges which contains the `Account`, info from the `Transfer`, and the cursor to aid in pagination. */
	edges: Array<TokenAccountsByTransferTokenIdAndFromIdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<AccountAggregates>>;
	/** A list of `Account` objects. */
	nodes: Array<Maybe<Account>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Account` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Account` values, with data from `Transfer`. */
export type TokenAccountsByTransferTokenIdAndFromIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<AccountsGroupBy>;
		having?: InputMaybe<AccountsHavingInput>;
	};

/** A `Account` edge in the connection, with data from `Transfer`. */
export type TokenAccountsByTransferTokenIdAndFromIdManyToManyEdge = {
	__typename?: "TokenAccountsByTransferTokenIdAndFromIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Account` at the end of the edge. */
	node?: Maybe<Account>;
	/** Reads and enables pagination through a set of `Transfer`. */
	transferOut: TransfersConnection;
};

/** A `Account` edge in the connection, with data from `Transfer`. */
export type TokenAccountsByTransferTokenIdAndFromIdManyToManyEdgeTransferOutArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<TransferFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<TransfersOrderBy>>;
	};

/** A connection to a list of `Account` values, with data from `Transfer`. */
export type TokenAccountsByTransferTokenIdAndToIdManyToManyConnection = {
	__typename?: "TokenAccountsByTransferTokenIdAndToIdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<AccountAggregates>;
	/** A list of edges which contains the `Account`, info from the `Transfer`, and the cursor to aid in pagination. */
	edges: Array<TokenAccountsByTransferTokenIdAndToIdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<AccountAggregates>>;
	/** A list of `Account` objects. */
	nodes: Array<Maybe<Account>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Account` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Account` values, with data from `Transfer`. */
export type TokenAccountsByTransferTokenIdAndToIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<AccountsGroupBy>;
		having?: InputMaybe<AccountsHavingInput>;
	};

/** A `Account` edge in the connection, with data from `Transfer`. */
export type TokenAccountsByTransferTokenIdAndToIdManyToManyEdge = {
	__typename?: "TokenAccountsByTransferTokenIdAndToIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Account` at the end of the edge. */
	node?: Maybe<Account>;
	/** Reads and enables pagination through a set of `Transfer`. */
	transferIn: TransfersConnection;
};

/** A `Account` edge in the connection, with data from `Transfer`. */
export type TokenAccountsByTransferTokenIdAndToIdManyToManyEdgeTransferInArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<TransferFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<TransfersOrderBy>>;
	};

export type TokenAggregates = {
	__typename?: "TokenAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

/** A connection to a list of `Block` values, with data from `LoanParam`. */
export type TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyConnection =
	{
		__typename?: "TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<BlockAggregates>;
		/** A list of edges which contains the `Block`, info from the `LoanParam`, and the cursor to aid in pagination. */
		edges: Array<TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<BlockAggregates>>;
		/** A list of `Block` objects. */
		nodes: Array<Maybe<Block>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Block` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Block` values, with data from `LoanParam`. */
export type TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<BlocksGroupBy>;
		having?: InputMaybe<BlocksHavingInput>;
	};

/** A `Block` edge in the connection, with data from `LoanParam`. */
export type TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyEdge =
	{
		__typename?: "TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** Reads and enables pagination through a set of `LoanParam`. */
		loanParamsByStartAtBlockId: LoanParamsConnection;
		/** The `Block` at the end of the edge. */
		node?: Maybe<Block>;
	};

/** A `Block` edge in the connection, with data from `LoanParam`. */
export type TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyEdgeLoanParamsByStartAtBlockIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<LoanParamFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<LoanParamsOrderBy>>;
	};

/** A connection to a list of `Block` values, with data from `LoanParamsHistory`. */
export type TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyConnection =
	{
		__typename?: "TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<BlockAggregates>;
		/** A list of edges which contains the `Block`, info from the `LoanParamsHistory`, and the cursor to aid in pagination. */
		edges: Array<TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<BlockAggregates>>;
		/** A list of `Block` objects. */
		nodes: Array<Maybe<Block>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Block` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Block` values, with data from `LoanParamsHistory`. */
export type TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<BlocksGroupBy>;
		having?: InputMaybe<BlocksHavingInput>;
	};

/** A `Block` edge in the connection, with data from `LoanParamsHistory`. */
export type TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyEdge =
	{
		__typename?: "TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** Reads and enables pagination through a set of `LoanParamsHistory`. */
		loanParamsHistoriesByEndAtBlockId: LoanParamsHistoriesConnection;
		/** The `Block` at the end of the edge. */
		node?: Maybe<Block>;
	};

/** A `Block` edge in the connection, with data from `LoanParamsHistory`. */
export type TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyEdgeLoanParamsHistoriesByEndAtBlockIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<LoanParamsHistoryFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<LoanParamsHistoriesOrderBy>>;
	};

/** A connection to a list of `Block` values, with data from `LoanParamsHistory`. */
export type TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyConnection =
	{
		__typename?: "TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<BlockAggregates>;
		/** A list of edges which contains the `Block`, info from the `LoanParamsHistory`, and the cursor to aid in pagination. */
		edges: Array<TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<BlockAggregates>>;
		/** A list of `Block` objects. */
		nodes: Array<Maybe<Block>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Block` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Block` values, with data from `LoanParamsHistory`. */
export type TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<BlocksGroupBy>;
		having?: InputMaybe<BlocksHavingInput>;
	};

/** A `Block` edge in the connection, with data from `LoanParamsHistory`. */
export type TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyEdge =
	{
		__typename?: "TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** Reads and enables pagination through a set of `LoanParamsHistory`. */
		loanParamsHistoriesByStartAtBlockId: LoanParamsHistoriesConnection;
		/** The `Block` at the end of the edge. */
		node?: Maybe<Block>;
	};

/** A `Block` edge in the connection, with data from `LoanParamsHistory`. */
export type TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyEdgeLoanParamsHistoriesByStartAtBlockIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<LoanParamsHistoryFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<LoanParamsHistoriesOrderBy>>;
	};

/** A connection to a list of `Block` values, with data from `OracleFeedRecord`. */
export type TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyConnection =
	{
		__typename?: "TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<BlockAggregates>;
		/** A list of edges which contains the `Block`, info from the `OracleFeedRecord`, and the cursor to aid in pagination. */
		edges: Array<TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<BlockAggregates>>;
		/** A list of `Block` objects. */
		nodes: Array<Maybe<Block>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Block` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Block` values, with data from `OracleFeedRecord`. */
export type TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<BlocksGroupBy>;
		having?: InputMaybe<BlocksHavingInput>;
	};

/** A `Block` edge in the connection, with data from `OracleFeedRecord`. */
export type TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyEdge = {
	__typename?: "TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Block` at the end of the edge. */
	node?: Maybe<Block>;
	/** Reads and enables pagination through a set of `OracleFeedRecord`. */
	oracleFeedRecords: OracleFeedRecordsConnection;
};

/** A `Block` edge in the connection, with data from `OracleFeedRecord`. */
export type TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyEdgeOracleFeedRecordsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<OracleFeedRecordFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<OracleFeedRecordsOrderBy>>;
	};

/** A connection to a list of `Block` values, with data from `ProvisionPool`. */
export type TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyConnection =
	{
		__typename?: "TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<BlockAggregates>;
		/** A list of edges which contains the `Block`, info from the `ProvisionPool`, and the cursor to aid in pagination. */
		edges: Array<TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<BlockAggregates>>;
		/** A list of `Block` objects. */
		nodes: Array<Maybe<Block>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Block` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Block` values, with data from `ProvisionPool`. */
export type TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<BlocksGroupBy>;
		having?: InputMaybe<BlocksHavingInput>;
	};

/** A `Block` edge in the connection, with data from `ProvisionPool`. */
export type TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyEdge =
	{
		__typename?: "TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** The `Block` at the end of the edge. */
		node?: Maybe<Block>;
		/** Reads and enables pagination through a set of `ProvisionPool`. */
		provisionPoolsByEndAtBlockId: ProvisionPoolsConnection;
	};

/** A `Block` edge in the connection, with data from `ProvisionPool`. */
export type TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyEdgeProvisionPoolsByEndAtBlockIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<ProvisionPoolFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<ProvisionPoolsOrderBy>>;
	};

/** A connection to a list of `Block` values, with data from `ProvisionPool`. */
export type TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyConnection =
	{
		__typename?: "TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<BlockAggregates>;
		/** A list of edges which contains the `Block`, info from the `ProvisionPool`, and the cursor to aid in pagination. */
		edges: Array<TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<BlockAggregates>>;
		/** A list of `Block` objects. */
		nodes: Array<Maybe<Block>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Block` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Block` values, with data from `ProvisionPool`. */
export type TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<BlocksGroupBy>;
		having?: InputMaybe<BlocksHavingInput>;
	};

/** A `Block` edge in the connection, with data from `ProvisionPool`. */
export type TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyEdge =
	{
		__typename?: "TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** The `Block` at the end of the edge. */
		node?: Maybe<Block>;
		/** Reads and enables pagination through a set of `ProvisionPool`. */
		provisionPoolsByStartAtBlockId: ProvisionPoolsConnection;
	};

/** A `Block` edge in the connection, with data from `ProvisionPool`. */
export type TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyEdgeProvisionPoolsByStartAtBlockIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<ProvisionPoolFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<ProvisionPoolsOrderBy>>;
	};

/** A connection to a list of `Block` values, with data from `ProvisionPool`. */
export type TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyConnection =
	{
		__typename?: "TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<BlockAggregates>;
		/** A list of edges which contains the `Block`, info from the `ProvisionPool`, and the cursor to aid in pagination. */
		edges: Array<TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<BlockAggregates>>;
		/** A list of `Block` objects. */
		nodes: Array<Maybe<Block>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Block` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Block` values, with data from `ProvisionPool`. */
export type TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<BlocksGroupBy>;
		having?: InputMaybe<BlocksHavingInput>;
	};

/** A `Block` edge in the connection, with data from `ProvisionPool`. */
export type TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyEdge = {
	__typename?: "TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Block` at the end of the edge. */
	node?: Maybe<Block>;
	/** Reads and enables pagination through a set of `ProvisionPool`. */
	provisionPoolsByEndAtBlockId: ProvisionPoolsConnection;
};

/** A `Block` edge in the connection, with data from `ProvisionPool`. */
export type TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyEdgeProvisionPoolsByEndAtBlockIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<ProvisionPoolFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<ProvisionPoolsOrderBy>>;
	};

/** A connection to a list of `Block` values, with data from `ProvisionPool`. */
export type TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyConnection =
	{
		__typename?: "TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<BlockAggregates>;
		/** A list of edges which contains the `Block`, info from the `ProvisionPool`, and the cursor to aid in pagination. */
		edges: Array<TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<BlockAggregates>>;
		/** A list of `Block` objects. */
		nodes: Array<Maybe<Block>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Block` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Block` values, with data from `ProvisionPool`. */
export type TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<BlocksGroupBy>;
		having?: InputMaybe<BlocksHavingInput>;
	};

/** A `Block` edge in the connection, with data from `ProvisionPool`. */
export type TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyEdge =
	{
		__typename?: "TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** The `Block` at the end of the edge. */
		node?: Maybe<Block>;
		/** Reads and enables pagination through a set of `ProvisionPool`. */
		provisionPoolsByStartAtBlockId: ProvisionPoolsConnection;
	};

/** A `Block` edge in the connection, with data from `ProvisionPool`. */
export type TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyEdgeProvisionPoolsByStartAtBlockIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<ProvisionPoolFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<ProvisionPoolsOrderBy>>;
	};

/** A connection to a list of `Block` values, with data from `ProvisionPool`. */
export type TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyConnection =
	{
		__typename?: "TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<BlockAggregates>;
		/** A list of edges which contains the `Block`, info from the `ProvisionPool`, and the cursor to aid in pagination. */
		edges: Array<TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<BlockAggregates>>;
		/** A list of `Block` objects. */
		nodes: Array<Maybe<Block>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Block` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Block` values, with data from `ProvisionPool`. */
export type TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<BlocksGroupBy>;
		having?: InputMaybe<BlocksHavingInput>;
	};

/** A `Block` edge in the connection, with data from `ProvisionPool`. */
export type TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyEdge = {
	__typename?: "TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Block` at the end of the edge. */
	node?: Maybe<Block>;
	/** Reads and enables pagination through a set of `ProvisionPool`. */
	provisionPoolsByEndAtBlockId: ProvisionPoolsConnection;
};

/** A `Block` edge in the connection, with data from `ProvisionPool`. */
export type TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyEdgeProvisionPoolsByEndAtBlockIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<ProvisionPoolFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<ProvisionPoolsOrderBy>>;
	};

/** A connection to a list of `Block` values, with data from `ProvisionPool`. */
export type TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyConnection =
	{
		__typename?: "TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<BlockAggregates>;
		/** A list of edges which contains the `Block`, info from the `ProvisionPool`, and the cursor to aid in pagination. */
		edges: Array<TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<BlockAggregates>>;
		/** A list of `Block` objects. */
		nodes: Array<Maybe<Block>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Block` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Block` values, with data from `ProvisionPool`. */
export type TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<BlocksGroupBy>;
		having?: InputMaybe<BlocksHavingInput>;
	};

/** A `Block` edge in the connection, with data from `ProvisionPool`. */
export type TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyEdge =
	{
		__typename?: "TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** The `Block` at the end of the edge. */
		node?: Maybe<Block>;
		/** Reads and enables pagination through a set of `ProvisionPool`. */
		provisionPoolsByStartAtBlockId: ProvisionPoolsConnection;
	};

/** A `Block` edge in the connection, with data from `ProvisionPool`. */
export type TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyEdgeProvisionPoolsByStartAtBlockIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<ProvisionPoolFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<ProvisionPoolsOrderBy>>;
	};

/** A connection to a list of `TokenDayDatum` values. */
export type TokenDayDataConnection = {
	__typename?: "TokenDayDataConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<TokenDayDatumAggregates>;
	/** A list of edges which contains the `TokenDayDatum` and cursor to aid in pagination. */
	edges: Array<TokenDayDataEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<TokenDayDatumAggregates>>;
	/** A list of `TokenDayDatum` objects. */
	nodes: Array<Maybe<TokenDayDatum>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `TokenDayDatum` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `TokenDayDatum` values. */
export type TokenDayDataConnectionGroupedAggregatesArgs = {
	groupBy: Array<TokenDayDataGroupBy>;
	having?: InputMaybe<TokenDayDataHavingInput>;
};

/** A `TokenDayDatum` edge in the connection. */
export type TokenDayDataEdge = {
	__typename?: "TokenDayDataEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `TokenDayDatum` at the end of the edge. */
	node?: Maybe<TokenDayDatum>;
};

/** Grouping methods for `TokenDayDatum` for usage during aggregation. */
export enum TokenDayDataGroupBy {
	DailyTxCount = "DAILY_TX_COUNT",
	DailyVolumeToken = "DAILY_VOLUME_TOKEN",
	DailyVolumeUSD = "DAILY_VOLUME_U_S_D",
	Date = "DATE",
	Price = "PRICE",
	TokenId = "TOKEN_ID",
}

/** Conditions for `TokenDayDatum` aggregates. */
export type TokenDayDataHavingInput = {
	AND?: InputMaybe<Array<TokenDayDataHavingInput>>;
	OR?: InputMaybe<Array<TokenDayDataHavingInput>>;
};

/** Methods to use when ordering `TokenDayDatum`. */
export enum TokenDayDataOrderBy {
	DailyTxCountAsc = "DAILY_TX_COUNT_ASC",
	DailyTxCountDesc = "DAILY_TX_COUNT_DESC",
	DailyVolumeTokenAsc = "DAILY_VOLUME_TOKEN_ASC",
	DailyVolumeTokenDesc = "DAILY_VOLUME_TOKEN_DESC",
	DailyVolumeUSDAsc = "DAILY_VOLUME_U_S_D_ASC",
	DailyVolumeUSDDesc = "DAILY_VOLUME_U_S_D_DESC",
	DateAsc = "DATE_ASC",
	DateDesc = "DATE_DESC",
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	Natural = "NATURAL",
	PriceAsc = "PRICE_ASC",
	PriceDesc = "PRICE_DESC",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	TokenIdAsc = "TOKEN_ID_ASC",
	TokenIdDesc = "TOKEN_ID_DESC",
}

export type TokenDayDatum = Node & {
	__typename?: "TokenDayDatum";
	dailyTxCount?: Maybe<Scalars["BigFloat"]>;
	dailyVolumeToken?: Maybe<Scalars["String"]>;
	dailyVolumeUSD?: Maybe<Scalars["String"]>;
	date?: Maybe<Scalars["Datetime"]>;
	id: Scalars["String"];
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
	price?: Maybe<Scalars["String"]>;
	/** Reads a single `Token` that is related to this `TokenDayDatum`. */
	token?: Maybe<Token>;
	tokenId?: Maybe<Scalars["String"]>;
};

export type TokenDayDatumAggregates = {
	__typename?: "TokenDayDatumAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

/** A filter to be used against `TokenDayDatum` object types. All fields are combined with a logical ‘and.’ */
export type TokenDayDatumFilter = {
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<TokenDayDatumFilter>>;
	/** Filter by the object’s `dailyTxCount` field. */
	dailyTxCount?: InputMaybe<BigFloatFilter>;
	/** Filter by the object’s `dailyVolumeToken` field. */
	dailyVolumeToken?: InputMaybe<StringFilter>;
	/** Filter by the object’s `dailyVolumeUSD` field. */
	dailyVolumeUSD?: InputMaybe<StringFilter>;
	/** Filter by the object’s `date` field. */
	date?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Negates the expression. */
	not?: InputMaybe<TokenDayDatumFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<TokenDayDatumFilter>>;
	/** Filter by the object’s `price` field. */
	price?: InputMaybe<StringFilter>;
	/** Filter by the object’s `tokenId` field. */
	tokenId?: InputMaybe<StringFilter>;
};

/** A connection to a list of `Extrinsic` values, with data from `DexAction`. */
export type TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyConnection =
	{
		__typename?: "TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<ExtrinsicAggregates>;
		/** A list of edges which contains the `Extrinsic`, info from the `DexAction`, and the cursor to aid in pagination. */
		edges: Array<TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<ExtrinsicAggregates>>;
		/** A list of `Extrinsic` objects. */
		nodes: Array<Maybe<Extrinsic>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Extrinsic` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Extrinsic` values, with data from `DexAction`. */
export type TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<ExtrinsicsGroupBy>;
		having?: InputMaybe<ExtrinsicsHavingInput>;
	};

/** A `Extrinsic` edge in the connection, with data from `DexAction`. */
export type TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyEdge = {
	__typename?: "TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** Reads and enables pagination through a set of `DexAction`. */
	dexActions: DexActionsConnection;
	/** The `Extrinsic` at the end of the edge. */
	node?: Maybe<Extrinsic>;
};

/** A `Extrinsic` edge in the connection, with data from `DexAction`. */
export type TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyEdgeDexActionsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<DexActionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<DexActionsOrderBy>>;
	};

/** A connection to a list of `Extrinsic` values, with data from `DexAction`. */
export type TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyConnection =
	{
		__typename?: "TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<ExtrinsicAggregates>;
		/** A list of edges which contains the `Extrinsic`, info from the `DexAction`, and the cursor to aid in pagination. */
		edges: Array<TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<ExtrinsicAggregates>>;
		/** A list of `Extrinsic` objects. */
		nodes: Array<Maybe<Extrinsic>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Extrinsic` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Extrinsic` values, with data from `DexAction`. */
export type TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<ExtrinsicsGroupBy>;
		having?: InputMaybe<ExtrinsicsHavingInput>;
	};

/** A `Extrinsic` edge in the connection, with data from `DexAction`. */
export type TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyEdge = {
	__typename?: "TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** Reads and enables pagination through a set of `DexAction`. */
	dexActions: DexActionsConnection;
	/** The `Extrinsic` at the end of the edge. */
	node?: Maybe<Extrinsic>;
};

/** A `Extrinsic` edge in the connection, with data from `DexAction`. */
export type TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyEdgeDexActionsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<DexActionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<DexActionsOrderBy>>;
	};

/** A filter to be used against `Token` object types. All fields are combined with a logical ‘and.’ */
export type TokenFilter = {
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<TokenFilter>>;
	/** Filter by the object’s `decimal` field. */
	decimal?: InputMaybe<IntFilter>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Filter by the object’s `issuance` field. */
	issuance?: InputMaybe<StringFilter>;
	/** Filter by the object’s `lockedInDex` field. */
	lockedInDex?: InputMaybe<StringFilter>;
	/** Filter by the object’s `lockedInIncentive` field. */
	lockedInIncentive?: InputMaybe<StringFilter>;
	/** Filter by the object’s `lockedInLoan` field. */
	lockedInLoan?: InputMaybe<StringFilter>;
	/** Filter by the object’s `name` field. */
	name?: InputMaybe<StringFilter>;
	/** Negates the expression. */
	not?: InputMaybe<TokenFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<TokenFilter>>;
	/** Filter by the object’s `price` field. */
	price?: InputMaybe<StringFilter>;
	/** Filter by the object’s `txCount` field. */
	txCount?: InputMaybe<BigFloatFilter>;
	/** Filter by the object’s `volume` field. */
	volume?: InputMaybe<StringFilter>;
	/** Filter by the object’s `volumeUSD` field. */
	volumeUSD?: InputMaybe<StringFilter>;
};

/** A connection to a list of `Pool` values, with data from `DexAction`. */
export type TokenPoolsByDexActionToken0IdAndPoolIdManyToManyConnection = {
	__typename?: "TokenPoolsByDexActionToken0IdAndPoolIdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<PoolAggregates>;
	/** A list of edges which contains the `Pool`, info from the `DexAction`, and the cursor to aid in pagination. */
	edges: Array<TokenPoolsByDexActionToken0IdAndPoolIdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<PoolAggregates>>;
	/** A list of `Pool` objects. */
	nodes: Array<Maybe<Pool>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Pool` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Pool` values, with data from `DexAction`. */
export type TokenPoolsByDexActionToken0IdAndPoolIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<PoolsGroupBy>;
		having?: InputMaybe<PoolsHavingInput>;
	};

/** A `Pool` edge in the connection, with data from `DexAction`. */
export type TokenPoolsByDexActionToken0IdAndPoolIdManyToManyEdge = {
	__typename?: "TokenPoolsByDexActionToken0IdAndPoolIdManyToManyEdge";
	/** Reads and enables pagination through a set of `DexAction`. */
	actions: DexActionsConnection;
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Pool` at the end of the edge. */
	node?: Maybe<Pool>;
};

/** A `Pool` edge in the connection, with data from `DexAction`. */
export type TokenPoolsByDexActionToken0IdAndPoolIdManyToManyEdgeActionsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<DexActionFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<DexActionsOrderBy>>;
};

/** A connection to a list of `Pool` values, with data from `DexAction`. */
export type TokenPoolsByDexActionToken1IdAndPoolIdManyToManyConnection = {
	__typename?: "TokenPoolsByDexActionToken1IdAndPoolIdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<PoolAggregates>;
	/** A list of edges which contains the `Pool`, info from the `DexAction`, and the cursor to aid in pagination. */
	edges: Array<TokenPoolsByDexActionToken1IdAndPoolIdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<PoolAggregates>>;
	/** A list of `Pool` objects. */
	nodes: Array<Maybe<Pool>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Pool` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Pool` values, with data from `DexAction`. */
export type TokenPoolsByDexActionToken1IdAndPoolIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<PoolsGroupBy>;
		having?: InputMaybe<PoolsHavingInput>;
	};

/** A `Pool` edge in the connection, with data from `DexAction`. */
export type TokenPoolsByDexActionToken1IdAndPoolIdManyToManyEdge = {
	__typename?: "TokenPoolsByDexActionToken1IdAndPoolIdManyToManyEdge";
	/** Reads and enables pagination through a set of `DexAction`. */
	actions: DexActionsConnection;
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Pool` at the end of the edge. */
	node?: Maybe<Pool>;
};

/** A `Pool` edge in the connection, with data from `DexAction`. */
export type TokenPoolsByDexActionToken1IdAndPoolIdManyToManyEdgeActionsArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<DexActionFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<DexActionsOrderBy>>;
};

/** A connection to a list of `Pool` values, with data from `PoolDayDatum`. */
export type TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyConnection = {
	__typename?: "TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<PoolAggregates>;
	/** A list of edges which contains the `Pool`, info from the `PoolDayDatum`, and the cursor to aid in pagination. */
	edges: Array<TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<PoolAggregates>>;
	/** A list of `Pool` objects. */
	nodes: Array<Maybe<Pool>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Pool` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Pool` values, with data from `PoolDayDatum`. */
export type TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<PoolsGroupBy>;
		having?: InputMaybe<PoolsHavingInput>;
	};

/** A `Pool` edge in the connection, with data from `PoolDayDatum`. */
export type TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyEdge = {
	__typename?: "TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** Reads and enables pagination through a set of `PoolDayDatum`. */
	dayData: PoolDayDataConnection;
	/** The `Pool` at the end of the edge. */
	node?: Maybe<Pool>;
};

/** A `Pool` edge in the connection, with data from `PoolDayDatum`. */
export type TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyEdgeDayDataArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<PoolDayDatumFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<PoolDayDataOrderBy>>;
	};

/** A connection to a list of `Pool` values, with data from `PoolDayDatum`. */
export type TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyConnection = {
	__typename?: "TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<PoolAggregates>;
	/** A list of edges which contains the `Pool`, info from the `PoolDayDatum`, and the cursor to aid in pagination. */
	edges: Array<TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<PoolAggregates>>;
	/** A list of `Pool` objects. */
	nodes: Array<Maybe<Pool>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Pool` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Pool` values, with data from `PoolDayDatum`. */
export type TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<PoolsGroupBy>;
		having?: InputMaybe<PoolsHavingInput>;
	};

/** A `Pool` edge in the connection, with data from `PoolDayDatum`. */
export type TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyEdge = {
	__typename?: "TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** Reads and enables pagination through a set of `PoolDayDatum`. */
	dayData: PoolDayDataConnection;
	/** The `Pool` at the end of the edge. */
	node?: Maybe<Pool>;
};

/** A `Pool` edge in the connection, with data from `PoolDayDatum`. */
export type TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyEdgeDayDataArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<PoolDayDatumFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<PoolDayDataOrderBy>>;
	};

/** A connection to a list of `Pool` values, with data from `PoolHourDatum`. */
export type TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyConnection = {
	__typename?: "TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<PoolAggregates>;
	/** A list of edges which contains the `Pool`, info from the `PoolHourDatum`, and the cursor to aid in pagination. */
	edges: Array<TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<PoolAggregates>>;
	/** A list of `Pool` objects. */
	nodes: Array<Maybe<Pool>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Pool` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Pool` values, with data from `PoolHourDatum`. */
export type TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<PoolsGroupBy>;
		having?: InputMaybe<PoolsHavingInput>;
	};

/** A `Pool` edge in the connection, with data from `PoolHourDatum`. */
export type TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyEdge = {
	__typename?: "TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** Reads and enables pagination through a set of `PoolHourDatum`. */
	hourData: PoolHourDataConnection;
	/** The `Pool` at the end of the edge. */
	node?: Maybe<Pool>;
};

/** A `Pool` edge in the connection, with data from `PoolHourDatum`. */
export type TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyEdgeHourDataArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<PoolHourDatumFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<PoolHourDataOrderBy>>;
	};

/** A connection to a list of `Pool` values, with data from `PoolHourDatum`. */
export type TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyConnection = {
	__typename?: "TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<PoolAggregates>;
	/** A list of edges which contains the `Pool`, info from the `PoolHourDatum`, and the cursor to aid in pagination. */
	edges: Array<TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<PoolAggregates>>;
	/** A list of `Pool` objects. */
	nodes: Array<Maybe<Pool>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Pool` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Pool` values, with data from `PoolHourDatum`. */
export type TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<PoolsGroupBy>;
		having?: InputMaybe<PoolsHavingInput>;
	};

/** A `Pool` edge in the connection, with data from `PoolHourDatum`. */
export type TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyEdge = {
	__typename?: "TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** Reads and enables pagination through a set of `PoolHourDatum`. */
	hourData: PoolHourDataConnection;
	/** The `Pool` at the end of the edge. */
	node?: Maybe<Pool>;
};

/** A `Pool` edge in the connection, with data from `PoolHourDatum`. */
export type TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyEdgeHourDataArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<PoolHourDatumFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<PoolHourDataOrderBy>>;
	};

/** A connection to a list of `ProvisionPool` values, with data from `UserProvision`. */
export type TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyConnection =
	{
		__typename?: "TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<ProvisionPoolAggregates>;
		/** A list of edges which contains the `ProvisionPool`, info from the `UserProvision`, and the cursor to aid in pagination. */
		edges: Array<TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<ProvisionPoolAggregates>>;
		/** A list of `ProvisionPool` objects. */
		nodes: Array<Maybe<ProvisionPool>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `ProvisionPool` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `ProvisionPool` values, with data from `UserProvision`. */
export type TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<ProvisionPoolsGroupBy>;
		having?: InputMaybe<ProvisionPoolsHavingInput>;
	};

/** A `ProvisionPool` edge in the connection, with data from `UserProvision`. */
export type TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyEdge =
	{
		__typename?: "TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** The `ProvisionPool` at the end of the edge. */
		node?: Maybe<ProvisionPool>;
		/** Reads and enables pagination through a set of `UserProvision`. */
		records: UserProvisionsConnection;
	};

/** A `ProvisionPool` edge in the connection, with data from `UserProvision`. */
export type TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyEdgeRecordsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<UserProvisionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<UserProvisionsOrderBy>>;
	};

/** A connection to a list of `ProvisionPool` values, with data from `UserProvision`. */
export type TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyConnection =
	{
		__typename?: "TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<ProvisionPoolAggregates>;
		/** A list of edges which contains the `ProvisionPool`, info from the `UserProvision`, and the cursor to aid in pagination. */
		edges: Array<TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<ProvisionPoolAggregates>>;
		/** A list of `ProvisionPool` objects. */
		nodes: Array<Maybe<ProvisionPool>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `ProvisionPool` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `ProvisionPool` values, with data from `UserProvision`. */
export type TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<ProvisionPoolsGroupBy>;
		having?: InputMaybe<ProvisionPoolsHavingInput>;
	};

/** A `ProvisionPool` edge in the connection, with data from `UserProvision`. */
export type TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyEdge =
	{
		__typename?: "TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** The `ProvisionPool` at the end of the edge. */
		node?: Maybe<ProvisionPool>;
		/** Reads and enables pagination through a set of `UserProvision`. */
		records: UserProvisionsConnection;
	};

/** A `ProvisionPool` edge in the connection, with data from `UserProvision`. */
export type TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyEdgeRecordsArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<UserProvisionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<UserProvisionsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `DexAction`. */
export type TokenTokensByDexActionToken0IdAndToken1IdManyToManyConnection = {
	__typename?: "TokenTokensByDexActionToken0IdAndToken1IdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<TokenAggregates>;
	/** A list of edges which contains the `Token`, info from the `DexAction`, and the cursor to aid in pagination. */
	edges: Array<TokenTokensByDexActionToken0IdAndToken1IdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<TokenAggregates>>;
	/** A list of `Token` objects. */
	nodes: Array<Maybe<Token>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Token` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Token` values, with data from `DexAction`. */
export type TokenTokensByDexActionToken0IdAndToken1IdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `DexAction`. */
export type TokenTokensByDexActionToken0IdAndToken1IdManyToManyEdge = {
	__typename?: "TokenTokensByDexActionToken0IdAndToken1IdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** Reads and enables pagination through a set of `DexAction`. */
	dexActionsByToken1Id: DexActionsConnection;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
};

/** A `Token` edge in the connection, with data from `DexAction`. */
export type TokenTokensByDexActionToken0IdAndToken1IdManyToManyEdgeDexActionsByToken1IdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<DexActionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<DexActionsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `DexAction`. */
export type TokenTokensByDexActionToken1IdAndToken0IdManyToManyConnection = {
	__typename?: "TokenTokensByDexActionToken1IdAndToken0IdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<TokenAggregates>;
	/** A list of edges which contains the `Token`, info from the `DexAction`, and the cursor to aid in pagination. */
	edges: Array<TokenTokensByDexActionToken1IdAndToken0IdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<TokenAggregates>>;
	/** A list of `Token` objects. */
	nodes: Array<Maybe<Token>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Token` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Token` values, with data from `DexAction`. */
export type TokenTokensByDexActionToken1IdAndToken0IdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `DexAction`. */
export type TokenTokensByDexActionToken1IdAndToken0IdManyToManyEdge = {
	__typename?: "TokenTokensByDexActionToken1IdAndToken0IdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** Reads and enables pagination through a set of `DexAction`. */
	dexActionsByToken0Id: DexActionsConnection;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
};

/** A `Token` edge in the connection, with data from `DexAction`. */
export type TokenTokensByDexActionToken1IdAndToken0IdManyToManyEdgeDexActionsByToken0IdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<DexActionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<DexActionsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `PoolDayDatum`. */
export type TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyConnection = {
	__typename?: "TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<TokenAggregates>;
	/** A list of edges which contains the `Token`, info from the `PoolDayDatum`, and the cursor to aid in pagination. */
	edges: Array<TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<TokenAggregates>>;
	/** A list of `Token` objects. */
	nodes: Array<Maybe<Token>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Token` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Token` values, with data from `PoolDayDatum`. */
export type TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `PoolDayDatum`. */
export type TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyEdge = {
	__typename?: "TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
	/** Reads and enables pagination through a set of `PoolDayDatum`. */
	poolDayDataQuote: PoolDayDataConnection;
};

/** A `Token` edge in the connection, with data from `PoolDayDatum`. */
export type TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyEdgePoolDayDataQuoteArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<PoolDayDatumFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<PoolDayDataOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `PoolDayDatum`. */
export type TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyConnection = {
	__typename?: "TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<TokenAggregates>;
	/** A list of edges which contains the `Token`, info from the `PoolDayDatum`, and the cursor to aid in pagination. */
	edges: Array<TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<TokenAggregates>>;
	/** A list of `Token` objects. */
	nodes: Array<Maybe<Token>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Token` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Token` values, with data from `PoolDayDatum`. */
export type TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `PoolDayDatum`. */
export type TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyEdge = {
	__typename?: "TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
	/** Reads and enables pagination through a set of `PoolDayDatum`. */
	poolDayDataBase: PoolDayDataConnection;
};

/** A `Token` edge in the connection, with data from `PoolDayDatum`. */
export type TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyEdgePoolDayDataBaseArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<PoolDayDatumFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<PoolDayDataOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `PoolHourDatum`. */
export type TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyConnection =
	{
		__typename?: "TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `PoolHourDatum`, and the cursor to aid in pagination. */
		edges: Array<TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `PoolHourDatum`. */
export type TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `PoolHourDatum`. */
export type TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyEdge = {
	__typename?: "TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
	/** Reads and enables pagination through a set of `PoolHourDatum`. */
	poolHourDataByToken1Id: PoolHourDataConnection;
};

/** A `Token` edge in the connection, with data from `PoolHourDatum`. */
export type TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyEdgePoolHourDataByToken1IdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<PoolHourDatumFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<PoolHourDataOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `PoolHourDatum`. */
export type TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyConnection =
	{
		__typename?: "TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `PoolHourDatum`, and the cursor to aid in pagination. */
		edges: Array<TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `PoolHourDatum`. */
export type TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `PoolHourDatum`. */
export type TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyEdge = {
	__typename?: "TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
	/** Reads and enables pagination through a set of `PoolHourDatum`. */
	poolHourDataByToken0Id: PoolHourDataConnection;
};

/** A `Token` edge in the connection, with data from `PoolHourDatum`. */
export type TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyEdgePoolHourDataByToken0IdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<PoolHourDatumFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<PoolHourDataOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `Pool`. */
export type TokenTokensByPoolToken0IdAndToken1IdManyToManyConnection = {
	__typename?: "TokenTokensByPoolToken0IdAndToken1IdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<TokenAggregates>;
	/** A list of edges which contains the `Token`, info from the `Pool`, and the cursor to aid in pagination. */
	edges: Array<TokenTokensByPoolToken0IdAndToken1IdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<TokenAggregates>>;
	/** A list of `Token` objects. */
	nodes: Array<Maybe<Token>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Token` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Token` values, with data from `Pool`. */
export type TokenTokensByPoolToken0IdAndToken1IdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `Pool`. */
export type TokenTokensByPoolToken0IdAndToken1IdManyToManyEdge = {
	__typename?: "TokenTokensByPoolToken0IdAndToken1IdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
	/** Reads and enables pagination through a set of `Pool`. */
	poolQuote: PoolsConnection;
};

/** A `Token` edge in the connection, with data from `Pool`. */
export type TokenTokensByPoolToken0IdAndToken1IdManyToManyEdgePoolQuoteArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<PoolFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<PoolsOrderBy>>;
};

/** A connection to a list of `Token` values, with data from `Pool`. */
export type TokenTokensByPoolToken1IdAndToken0IdManyToManyConnection = {
	__typename?: "TokenTokensByPoolToken1IdAndToken0IdManyToManyConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<TokenAggregates>;
	/** A list of edges which contains the `Token`, info from the `Pool`, and the cursor to aid in pagination. */
	edges: Array<TokenTokensByPoolToken1IdAndToken0IdManyToManyEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<TokenAggregates>>;
	/** A list of `Token` objects. */
	nodes: Array<Maybe<Token>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Token` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Token` values, with data from `Pool`. */
export type TokenTokensByPoolToken1IdAndToken0IdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `Pool`. */
export type TokenTokensByPoolToken1IdAndToken0IdManyToManyEdge = {
	__typename?: "TokenTokensByPoolToken1IdAndToken0IdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
	/** Reads and enables pagination through a set of `Pool`. */
	poolBase: PoolsConnection;
};

/** A `Token` edge in the connection, with data from `Pool`. */
export type TokenTokensByPoolToken1IdAndToken0IdManyToManyEdgePoolBaseArgs = {
	after?: InputMaybe<Scalars["Cursor"]>;
	before?: InputMaybe<Scalars["Cursor"]>;
	filter?: InputMaybe<PoolFilter>;
	first?: InputMaybe<Scalars["Int"]>;
	last?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	orderBy?: InputMaybe<Array<PoolsOrderBy>>;
};

/** A connection to a list of `Token` values, with data from `ProvisionPool`. */
export type TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyConnection =
	{
		__typename?: "TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `ProvisionPool`, and the cursor to aid in pagination. */
		edges: Array<TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `ProvisionPool`. */
export type TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `ProvisionPool`. */
export type TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyEdge = {
	__typename?: "TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
	/** Reads and enables pagination through a set of `ProvisionPool`. */
	provisionPoolsByToken0Id: ProvisionPoolsConnection;
};

/** A `Token` edge in the connection, with data from `ProvisionPool`. */
export type TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyEdgeProvisionPoolsByToken0IdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<ProvisionPoolFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<ProvisionPoolsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `ProvisionPool`. */
export type TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyConnection =
	{
		__typename?: "TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `ProvisionPool`, and the cursor to aid in pagination. */
		edges: Array<TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `ProvisionPool`. */
export type TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `ProvisionPool`. */
export type TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyEdge = {
	__typename?: "TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
	/** Reads and enables pagination through a set of `ProvisionPool`. */
	provisionPoolsByToken1Id: ProvisionPoolsConnection;
};

/** A `Token` edge in the connection, with data from `ProvisionPool`. */
export type TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyEdgeProvisionPoolsByToken1IdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<ProvisionPoolFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<ProvisionPoolsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `ProvisionPool`. */
export type TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyConnection =
	{
		__typename?: "TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `ProvisionPool`, and the cursor to aid in pagination. */
		edges: Array<TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `ProvisionPool`. */
export type TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `ProvisionPool`. */
export type TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyEdge = {
	__typename?: "TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
	/** Reads and enables pagination through a set of `ProvisionPool`. */
	provisionPoolsByPoolTokenId: ProvisionPoolsConnection;
};

/** A `Token` edge in the connection, with data from `ProvisionPool`. */
export type TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyEdgeProvisionPoolsByPoolTokenIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<ProvisionPoolFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<ProvisionPoolsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `ProvisionPool`. */
export type TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyConnection =
	{
		__typename?: "TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `ProvisionPool`, and the cursor to aid in pagination. */
		edges: Array<TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `ProvisionPool`. */
export type TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `ProvisionPool`. */
export type TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyEdge = {
	__typename?: "TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
	/** Reads and enables pagination through a set of `ProvisionPool`. */
	provisionPoolsByToken1Id: ProvisionPoolsConnection;
};

/** A `Token` edge in the connection, with data from `ProvisionPool`. */
export type TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyEdgeProvisionPoolsByToken1IdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<ProvisionPoolFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<ProvisionPoolsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `ProvisionPool`. */
export type TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyConnection =
	{
		__typename?: "TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `ProvisionPool`, and the cursor to aid in pagination. */
		edges: Array<TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `ProvisionPool`. */
export type TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `ProvisionPool`. */
export type TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyEdge = {
	__typename?: "TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
	/** Reads and enables pagination through a set of `ProvisionPool`. */
	provisionPoolsByPoolTokenId: ProvisionPoolsConnection;
};

/** A `Token` edge in the connection, with data from `ProvisionPool`. */
export type TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyEdgeProvisionPoolsByPoolTokenIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<ProvisionPoolFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<ProvisionPoolsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `ProvisionPool`. */
export type TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyConnection =
	{
		__typename?: "TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `ProvisionPool`, and the cursor to aid in pagination. */
		edges: Array<TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `ProvisionPool`. */
export type TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `ProvisionPool`. */
export type TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyEdge = {
	__typename?: "TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
	/** Reads and enables pagination through a set of `ProvisionPool`. */
	provisionPoolsByToken0Id: ProvisionPoolsConnection;
};

/** A `Token` edge in the connection, with data from `ProvisionPool`. */
export type TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyEdgeProvisionPoolsByToken0IdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<ProvisionPoolFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<ProvisionPoolsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `SystemConst`. */
export type TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyConnection =
	{
		__typename?: "TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `SystemConst`, and the cursor to aid in pagination. */
		edges: Array<TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `SystemConst`. */
export type TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `SystemConst`. */
export type TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyEdge =
	{
		__typename?: "TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** The `Token` at the end of the edge. */
		node?: Maybe<Token>;
		/** Reads and enables pagination through a set of `SystemConst`. */
		systemConstsByNativeTokenId: SystemConstsConnection;
	};

/** A `Token` edge in the connection, with data from `SystemConst`. */
export type TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyEdgeSystemConstsByNativeTokenIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<SystemConstFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<SystemConstsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `SystemConst`. */
export type TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyConnection =
	{
		__typename?: "TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `SystemConst`, and the cursor to aid in pagination. */
		edges: Array<TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `SystemConst`. */
export type TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `SystemConst`. */
export type TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyEdge =
	{
		__typename?: "TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** The `Token` at the end of the edge. */
		node?: Maybe<Token>;
		/** Reads and enables pagination through a set of `SystemConst`. */
		systemConstsByStableTokenId: SystemConstsConnection;
	};

/** A `Token` edge in the connection, with data from `SystemConst`. */
export type TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyEdgeSystemConstsByStableTokenIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<SystemConstFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<SystemConstsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `SystemConst`. */
export type TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyConnection =
	{
		__typename?: "TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `SystemConst`, and the cursor to aid in pagination. */
		edges: Array<TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `SystemConst`. */
export type TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `SystemConst`. */
export type TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyEdge =
	{
		__typename?: "TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** The `Token` at the end of the edge. */
		node?: Maybe<Token>;
		/** Reads and enables pagination through a set of `SystemConst`. */
		systemConstsByStakignTokenId: SystemConstsConnection;
	};

/** A `Token` edge in the connection, with data from `SystemConst`. */
export type TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyEdgeSystemConstsByStakignTokenIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<SystemConstFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<SystemConstsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `SystemConst`. */
export type TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyConnection =
	{
		__typename?: "TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `SystemConst`, and the cursor to aid in pagination. */
		edges: Array<TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `SystemConst`. */
export type TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `SystemConst`. */
export type TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyEdge =
	{
		__typename?: "TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** The `Token` at the end of the edge. */
		node?: Maybe<Token>;
		/** Reads and enables pagination through a set of `SystemConst`. */
		systemConstsByLiquidTokenId: SystemConstsConnection;
	};

/** A `Token` edge in the connection, with data from `SystemConst`. */
export type TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyEdgeSystemConstsByLiquidTokenIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<SystemConstFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<SystemConstsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `SystemConst`. */
export type TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyConnection =
	{
		__typename?: "TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `SystemConst`, and the cursor to aid in pagination. */
		edges: Array<TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `SystemConst`. */
export type TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `SystemConst`. */
export type TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyEdge =
	{
		__typename?: "TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** The `Token` at the end of the edge. */
		node?: Maybe<Token>;
		/** Reads and enables pagination through a set of `SystemConst`. */
		systemConstsByStableTokenId: SystemConstsConnection;
	};

/** A `Token` edge in the connection, with data from `SystemConst`. */
export type TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyEdgeSystemConstsByStableTokenIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<SystemConstFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<SystemConstsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `SystemConst`. */
export type TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyConnection =
	{
		__typename?: "TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `SystemConst`, and the cursor to aid in pagination. */
		edges: Array<TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `SystemConst`. */
export type TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `SystemConst`. */
export type TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyEdge =
	{
		__typename?: "TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** The `Token` at the end of the edge. */
		node?: Maybe<Token>;
		/** Reads and enables pagination through a set of `SystemConst`. */
		systemConstsByStakignTokenId: SystemConstsConnection;
	};

/** A `Token` edge in the connection, with data from `SystemConst`. */
export type TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyEdgeSystemConstsByStakignTokenIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<SystemConstFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<SystemConstsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `SystemConst`. */
export type TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyConnection =
	{
		__typename?: "TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `SystemConst`, and the cursor to aid in pagination. */
		edges: Array<TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `SystemConst`. */
export type TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `SystemConst`. */
export type TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyEdge =
	{
		__typename?: "TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** The `Token` at the end of the edge. */
		node?: Maybe<Token>;
		/** Reads and enables pagination through a set of `SystemConst`. */
		systemConstsByLiquidTokenId: SystemConstsConnection;
	};

/** A `Token` edge in the connection, with data from `SystemConst`. */
export type TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyEdgeSystemConstsByLiquidTokenIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<SystemConstFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<SystemConstsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `SystemConst`. */
export type TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyConnection =
	{
		__typename?: "TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `SystemConst`, and the cursor to aid in pagination. */
		edges: Array<TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `SystemConst`. */
export type TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `SystemConst`. */
export type TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyEdge =
	{
		__typename?: "TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** The `Token` at the end of the edge. */
		node?: Maybe<Token>;
		/** Reads and enables pagination through a set of `SystemConst`. */
		systemConstsByNativeTokenId: SystemConstsConnection;
	};

/** A `Token` edge in the connection, with data from `SystemConst`. */
export type TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyEdgeSystemConstsByNativeTokenIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<SystemConstFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<SystemConstsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `SystemConst`. */
export type TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyConnection =
	{
		__typename?: "TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `SystemConst`, and the cursor to aid in pagination. */
		edges: Array<TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `SystemConst`. */
export type TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `SystemConst`. */
export type TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyEdge =
	{
		__typename?: "TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** The `Token` at the end of the edge. */
		node?: Maybe<Token>;
		/** Reads and enables pagination through a set of `SystemConst`. */
		systemConstsByStakignTokenId: SystemConstsConnection;
	};

/** A `Token` edge in the connection, with data from `SystemConst`. */
export type TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyEdgeSystemConstsByStakignTokenIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<SystemConstFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<SystemConstsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `SystemConst`. */
export type TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyConnection =
	{
		__typename?: "TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `SystemConst`, and the cursor to aid in pagination. */
		edges: Array<TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `SystemConst`. */
export type TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `SystemConst`. */
export type TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyEdge =
	{
		__typename?: "TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** The `Token` at the end of the edge. */
		node?: Maybe<Token>;
		/** Reads and enables pagination through a set of `SystemConst`. */
		systemConstsByLiquidTokenId: SystemConstsConnection;
	};

/** A `Token` edge in the connection, with data from `SystemConst`. */
export type TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyEdgeSystemConstsByLiquidTokenIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<SystemConstFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<SystemConstsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `SystemConst`. */
export type TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyConnection =
	{
		__typename?: "TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `SystemConst`, and the cursor to aid in pagination. */
		edges: Array<TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `SystemConst`. */
export type TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `SystemConst`. */
export type TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyEdge =
	{
		__typename?: "TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** The `Token` at the end of the edge. */
		node?: Maybe<Token>;
		/** Reads and enables pagination through a set of `SystemConst`. */
		systemConstsByNativeTokenId: SystemConstsConnection;
	};

/** A `Token` edge in the connection, with data from `SystemConst`. */
export type TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyEdgeSystemConstsByNativeTokenIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<SystemConstFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<SystemConstsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `SystemConst`. */
export type TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyConnection =
	{
		__typename?: "TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `SystemConst`, and the cursor to aid in pagination. */
		edges: Array<TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `SystemConst`. */
export type TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `SystemConst`. */
export type TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyEdge =
	{
		__typename?: "TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyEdge";
		/** A cursor for use in pagination. */
		cursor?: Maybe<Scalars["Cursor"]>;
		/** The `Token` at the end of the edge. */
		node?: Maybe<Token>;
		/** Reads and enables pagination through a set of `SystemConst`. */
		systemConstsByStableTokenId: SystemConstsConnection;
	};

/** A `Token` edge in the connection, with data from `SystemConst`. */
export type TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyEdgeSystemConstsByStableTokenIdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<SystemConstFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<SystemConstsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `UserProvision`. */
export type TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyConnection =
	{
		__typename?: "TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `UserProvision`, and the cursor to aid in pagination. */
		edges: Array<TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `UserProvision`. */
export type TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `UserProvision`. */
export type TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyEdge = {
	__typename?: "TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
	/** Reads and enables pagination through a set of `UserProvision`. */
	userProvisionsByToken1Id: UserProvisionsConnection;
};

/** A `Token` edge in the connection, with data from `UserProvision`. */
export type TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyEdgeUserProvisionsByToken1IdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<UserProvisionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<UserProvisionsOrderBy>>;
	};

/** A connection to a list of `Token` values, with data from `UserProvision`. */
export type TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyConnection =
	{
		__typename?: "TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyConnection";
		/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
		aggregates?: Maybe<TokenAggregates>;
		/** A list of edges which contains the `Token`, info from the `UserProvision`, and the cursor to aid in pagination. */
		edges: Array<TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyEdge>;
		/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
		groupedAggregates?: Maybe<Array<TokenAggregates>>;
		/** A list of `Token` objects. */
		nodes: Array<Maybe<Token>>;
		/** Information to aid in pagination. */
		pageInfo: PageInfo;
		/** The count of *all* `Token` you could get from the connection. */
		totalCount: Scalars["Int"];
	};

/** A connection to a list of `Token` values, with data from `UserProvision`. */
export type TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyConnectionGroupedAggregatesArgs =
	{
		groupBy: Array<TokensGroupBy>;
		having?: InputMaybe<TokensHavingInput>;
	};

/** A `Token` edge in the connection, with data from `UserProvision`. */
export type TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyEdge = {
	__typename?: "TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
	/** Reads and enables pagination through a set of `UserProvision`. */
	userProvisionsByToken0Id: UserProvisionsConnection;
};

/** A `Token` edge in the connection, with data from `UserProvision`. */
export type TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyEdgeUserProvisionsByToken0IdArgs =
	{
		after?: InputMaybe<Scalars["Cursor"]>;
		before?: InputMaybe<Scalars["Cursor"]>;
		filter?: InputMaybe<UserProvisionFilter>;
		first?: InputMaybe<Scalars["Int"]>;
		last?: InputMaybe<Scalars["Int"]>;
		offset?: InputMaybe<Scalars["Int"]>;
		orderBy?: InputMaybe<Array<UserProvisionsOrderBy>>;
	};

/** A connection to a list of `Token` values. */
export type TokensConnection = {
	__typename?: "TokensConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<TokenAggregates>;
	/** A list of edges which contains the `Token` and cursor to aid in pagination. */
	edges: Array<TokensEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<TokenAggregates>>;
	/** A list of `Token` objects. */
	nodes: Array<Maybe<Token>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Token` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Token` values. */
export type TokensConnectionGroupedAggregatesArgs = {
	groupBy: Array<TokensGroupBy>;
	having?: InputMaybe<TokensHavingInput>;
};

/** A `Token` edge in the connection. */
export type TokensEdge = {
	__typename?: "TokensEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Token` at the end of the edge. */
	node?: Maybe<Token>;
};

/** Grouping methods for `Token` for usage during aggregation. */
export enum TokensGroupBy {
	Decimal = "DECIMAL",
	Issuance = "ISSUANCE",
	LockedInDex = "LOCKED_IN_DEX",
	LockedInIncentive = "LOCKED_IN_INCENTIVE",
	LockedInLoan = "LOCKED_IN_LOAN",
	Name = "NAME",
	Price = "PRICE",
	TxCount = "TX_COUNT",
	Volume = "VOLUME",
	VolumeUSD = "VOLUME_U_S_D",
}

/** Conditions for `Token` aggregates. */
export type TokensHavingInput = {
	AND?: InputMaybe<Array<TokensHavingInput>>;
	OR?: InputMaybe<Array<TokensHavingInput>>;
};

/** Methods to use when ordering `Token`. */
export enum TokensOrderBy {
	BalancesCountAsc = "BALANCES_COUNT_ASC",
	BalancesCountDesc = "BALANCES_COUNT_DESC",
	BalanceChangedRecordsCountAsc = "BALANCE_CHANGED_RECORDS_COUNT_ASC",
	BalanceChangedRecordsCountDesc = "BALANCE_CHANGED_RECORDS_COUNT_DESC",
	DayDataCountAsc = "DAY_DATA_COUNT_ASC",
	DayDataCountDesc = "DAY_DATA_COUNT_DESC",
	DecimalAsc = "DECIMAL_ASC",
	DecimalDesc = "DECIMAL_DESC",
	DexActionsByToken0IdCountAsc = "DEX_ACTIONS_BY_TOKEN0_ID_COUNT_ASC",
	DexActionsByToken0IdCountDesc = "DEX_ACTIONS_BY_TOKEN0_ID_COUNT_DESC",
	DexActionsByToken1IdCountAsc = "DEX_ACTIONS_BY_TOKEN1_ID_COUNT_ASC",
	DexActionsByToken1IdCountDesc = "DEX_ACTIONS_BY_TOKEN1_ID_COUNT_DESC",
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	IssuanceAsc = "ISSUANCE_ASC",
	IssuanceDesc = "ISSUANCE_DESC",
	LoanParamsByCollateralIdCountAsc = "LOAN_PARAMS_BY_COLLATERAL_ID_COUNT_ASC",
	LoanParamsByCollateralIdCountDesc = "LOAN_PARAMS_BY_COLLATERAL_ID_COUNT_DESC",
	LoanParamsHistoriesByCollateralIdCountAsc = "LOAN_PARAMS_HISTORIES_BY_COLLATERAL_ID_COUNT_ASC",
	LoanParamsHistoriesByCollateralIdCountDesc = "LOAN_PARAMS_HISTORIES_BY_COLLATERAL_ID_COUNT_DESC",
	LoanPositionsByCollateralIdCountAsc = "LOAN_POSITIONS_BY_COLLATERAL_ID_COUNT_ASC",
	LoanPositionsByCollateralIdCountDesc = "LOAN_POSITIONS_BY_COLLATERAL_ID_COUNT_DESC",
	LockedInDexAsc = "LOCKED_IN_DEX_ASC",
	LockedInDexDesc = "LOCKED_IN_DEX_DESC",
	LockedInIncentiveAsc = "LOCKED_IN_INCENTIVE_ASC",
	LockedInIncentiveDesc = "LOCKED_IN_INCENTIVE_DESC",
	LockedInLoanAsc = "LOCKED_IN_LOAN_ASC",
	LockedInLoanDesc = "LOCKED_IN_LOAN_DESC",
	NameAsc = "NAME_ASC",
	NameDesc = "NAME_DESC",
	Natural = "NATURAL",
	OracleFeedRecordsCountAsc = "ORACLE_FEED_RECORDS_COUNT_ASC",
	OracleFeedRecordsCountDesc = "ORACLE_FEED_RECORDS_COUNT_DESC",
	PoolBaseCountAsc = "POOL_BASE_COUNT_ASC",
	PoolBaseCountDesc = "POOL_BASE_COUNT_DESC",
	PoolDayDataBaseCountAsc = "POOL_DAY_DATA_BASE_COUNT_ASC",
	PoolDayDataBaseCountDesc = "POOL_DAY_DATA_BASE_COUNT_DESC",
	PoolDayDataQuoteCountAsc = "POOL_DAY_DATA_QUOTE_COUNT_ASC",
	PoolDayDataQuoteCountDesc = "POOL_DAY_DATA_QUOTE_COUNT_DESC",
	PoolHourDataByToken0IdCountAsc = "POOL_HOUR_DATA_BY_TOKEN0_ID_COUNT_ASC",
	PoolHourDataByToken0IdCountDesc = "POOL_HOUR_DATA_BY_TOKEN0_ID_COUNT_DESC",
	PoolHourDataByToken1IdCountAsc = "POOL_HOUR_DATA_BY_TOKEN1_ID_COUNT_ASC",
	PoolHourDataByToken1IdCountDesc = "POOL_HOUR_DATA_BY_TOKEN1_ID_COUNT_DESC",
	PoolQuoteCountAsc = "POOL_QUOTE_COUNT_ASC",
	PoolQuoteCountDesc = "POOL_QUOTE_COUNT_DESC",
	PriceAsc = "PRICE_ASC",
	PriceDesc = "PRICE_DESC",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	ProvisionPoolsByPoolTokenIdCountAsc = "PROVISION_POOLS_BY_POOL_TOKEN_ID_COUNT_ASC",
	ProvisionPoolsByPoolTokenIdCountDesc = "PROVISION_POOLS_BY_POOL_TOKEN_ID_COUNT_DESC",
	ProvisionPoolsByToken0IdCountAsc = "PROVISION_POOLS_BY_TOKEN0_ID_COUNT_ASC",
	ProvisionPoolsByToken0IdCountDesc = "PROVISION_POOLS_BY_TOKEN0_ID_COUNT_DESC",
	ProvisionPoolsByToken1IdCountAsc = "PROVISION_POOLS_BY_TOKEN1_ID_COUNT_ASC",
	ProvisionPoolsByToken1IdCountDesc = "PROVISION_POOLS_BY_TOKEN1_ID_COUNT_DESC",
	SystemConstsByLiquidTokenIdCountAsc = "SYSTEM_CONSTS_BY_LIQUID_TOKEN_ID_COUNT_ASC",
	SystemConstsByLiquidTokenIdCountDesc = "SYSTEM_CONSTS_BY_LIQUID_TOKEN_ID_COUNT_DESC",
	SystemConstsByNativeTokenIdCountAsc = "SYSTEM_CONSTS_BY_NATIVE_TOKEN_ID_COUNT_ASC",
	SystemConstsByNativeTokenIdCountDesc = "SYSTEM_CONSTS_BY_NATIVE_TOKEN_ID_COUNT_DESC",
	SystemConstsByStableTokenIdCountAsc = "SYSTEM_CONSTS_BY_STABLE_TOKEN_ID_COUNT_ASC",
	SystemConstsByStableTokenIdCountDesc = "SYSTEM_CONSTS_BY_STABLE_TOKEN_ID_COUNT_DESC",
	SystemConstsByStakignTokenIdCountAsc = "SYSTEM_CONSTS_BY_STAKIGN_TOKEN_ID_COUNT_ASC",
	SystemConstsByStakignTokenIdCountDesc = "SYSTEM_CONSTS_BY_STAKIGN_TOKEN_ID_COUNT_DESC",
	TotalBalanceChangedRecordsCountAsc = "TOTAL_BALANCE_CHANGED_RECORDS_COUNT_ASC",
	TotalBalanceChangedRecordsCountDesc = "TOTAL_BALANCE_CHANGED_RECORDS_COUNT_DESC",
	TotalLoanPositionsByCollateralIdCountAsc = "TOTAL_LOAN_POSITIONS_BY_COLLATERAL_ID_COUNT_ASC",
	TotalLoanPositionsByCollateralIdCountDesc = "TOTAL_LOAN_POSITIONS_BY_COLLATERAL_ID_COUNT_DESC",
	TransfersCountAsc = "TRANSFERS_COUNT_ASC",
	TransfersCountDesc = "TRANSFERS_COUNT_DESC",
	TxCountAsc = "TX_COUNT_ASC",
	TxCountDesc = "TX_COUNT_DESC",
	UserProvisionsByToken0IdCountAsc = "USER_PROVISIONS_BY_TOKEN0_ID_COUNT_ASC",
	UserProvisionsByToken0IdCountDesc = "USER_PROVISIONS_BY_TOKEN0_ID_COUNT_DESC",
	UserProvisionsByToken1IdCountAsc = "USER_PROVISIONS_BY_TOKEN1_ID_COUNT_ASC",
	UserProvisionsByToken1IdCountDesc = "USER_PROVISIONS_BY_TOKEN1_ID_COUNT_DESC",
	VolumeAsc = "VOLUME_ASC",
	VolumeDesc = "VOLUME_DESC",
	VolumeUSDAsc = "VOLUME_U_S_D_ASC",
	VolumeUSDDesc = "VOLUME_U_S_D_DESC",
}

export type TotalBalanceChangedRecord = Node & {
	__typename?: "TotalBalanceChangedRecord";
	balance?: Maybe<Scalars["String"]>;
	blockNumber?: Maybe<Scalars["BigFloat"]>;
	id: Scalars["String"];
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
	timestamp?: Maybe<Scalars["Datetime"]>;
	/** Reads a single `Token` that is related to this `TotalBalanceChangedRecord`. */
	token?: Maybe<Token>;
	tokenId?: Maybe<Scalars["String"]>;
};

export type TotalBalanceChangedRecordAggregates = {
	__typename?: "TotalBalanceChangedRecordAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

/** A filter to be used against `TotalBalanceChangedRecord` object types. All fields are combined with a logical ‘and.’ */
export type TotalBalanceChangedRecordFilter = {
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<TotalBalanceChangedRecordFilter>>;
	/** Filter by the object’s `balance` field. */
	balance?: InputMaybe<StringFilter>;
	/** Filter by the object’s `blockNumber` field. */
	blockNumber?: InputMaybe<BigFloatFilter>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Negates the expression. */
	not?: InputMaybe<TotalBalanceChangedRecordFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<TotalBalanceChangedRecordFilter>>;
	/** Filter by the object’s `timestamp` field. */
	timestamp?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `tokenId` field. */
	tokenId?: InputMaybe<StringFilter>;
};

/** A connection to a list of `TotalBalanceChangedRecord` values. */
export type TotalBalanceChangedRecordsConnection = {
	__typename?: "TotalBalanceChangedRecordsConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<TotalBalanceChangedRecordAggregates>;
	/** A list of edges which contains the `TotalBalanceChangedRecord` and cursor to aid in pagination. */
	edges: Array<TotalBalanceChangedRecordsEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<TotalBalanceChangedRecordAggregates>>;
	/** A list of `TotalBalanceChangedRecord` objects. */
	nodes: Array<Maybe<TotalBalanceChangedRecord>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `TotalBalanceChangedRecord` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `TotalBalanceChangedRecord` values. */
export type TotalBalanceChangedRecordsConnectionGroupedAggregatesArgs = {
	groupBy: Array<TotalBalanceChangedRecordsGroupBy>;
	having?: InputMaybe<TotalBalanceChangedRecordsHavingInput>;
};

/** A `TotalBalanceChangedRecord` edge in the connection. */
export type TotalBalanceChangedRecordsEdge = {
	__typename?: "TotalBalanceChangedRecordsEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `TotalBalanceChangedRecord` at the end of the edge. */
	node?: Maybe<TotalBalanceChangedRecord>;
};

/** Grouping methods for `TotalBalanceChangedRecord` for usage during aggregation. */
export enum TotalBalanceChangedRecordsGroupBy {
	Balance = "BALANCE",
	BlockNumber = "BLOCK_NUMBER",
	Timestamp = "TIMESTAMP",
	TokenId = "TOKEN_ID",
}

/** Conditions for `TotalBalanceChangedRecord` aggregates. */
export type TotalBalanceChangedRecordsHavingInput = {
	AND?: InputMaybe<Array<TotalBalanceChangedRecordsHavingInput>>;
	OR?: InputMaybe<Array<TotalBalanceChangedRecordsHavingInput>>;
};

/** Methods to use when ordering `TotalBalanceChangedRecord`. */
export enum TotalBalanceChangedRecordsOrderBy {
	BalanceAsc = "BALANCE_ASC",
	BalanceDesc = "BALANCE_DESC",
	BlockNumberAsc = "BLOCK_NUMBER_ASC",
	BlockNumberDesc = "BLOCK_NUMBER_DESC",
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	Natural = "NATURAL",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	TimestampAsc = "TIMESTAMP_ASC",
	TimestampDesc = "TIMESTAMP_DESC",
	TokenIdAsc = "TOKEN_ID_ASC",
	TokenIdDesc = "TOKEN_ID_DESC",
}

export type TotalLoanPosition = Node & {
	__typename?: "TotalLoanPosition";
	/** Reads a single `Token` that is related to this `TotalLoanPosition`. */
	collateral?: Maybe<Token>;
	collateralAmount?: Maybe<Scalars["String"]>;
	collateralId?: Maybe<Scalars["String"]>;
	debitAmount?: Maybe<Scalars["String"]>;
	id: Scalars["String"];
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
};

export type TotalLoanPositionAggregates = {
	__typename?: "TotalLoanPositionAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

/** A filter to be used against `TotalLoanPosition` object types. All fields are combined with a logical ‘and.’ */
export type TotalLoanPositionFilter = {
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<TotalLoanPositionFilter>>;
	/** Filter by the object’s `collateralAmount` field. */
	collateralAmount?: InputMaybe<StringFilter>;
	/** Filter by the object’s `collateralId` field. */
	collateralId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `debitAmount` field. */
	debitAmount?: InputMaybe<StringFilter>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Negates the expression. */
	not?: InputMaybe<TotalLoanPositionFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<TotalLoanPositionFilter>>;
};

/** A connection to a list of `TotalLoanPosition` values. */
export type TotalLoanPositionsConnection = {
	__typename?: "TotalLoanPositionsConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<TotalLoanPositionAggregates>;
	/** A list of edges which contains the `TotalLoanPosition` and cursor to aid in pagination. */
	edges: Array<TotalLoanPositionsEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<TotalLoanPositionAggregates>>;
	/** A list of `TotalLoanPosition` objects. */
	nodes: Array<Maybe<TotalLoanPosition>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `TotalLoanPosition` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `TotalLoanPosition` values. */
export type TotalLoanPositionsConnectionGroupedAggregatesArgs = {
	groupBy: Array<TotalLoanPositionsGroupBy>;
	having?: InputMaybe<TotalLoanPositionsHavingInput>;
};

/** A `TotalLoanPosition` edge in the connection. */
export type TotalLoanPositionsEdge = {
	__typename?: "TotalLoanPositionsEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `TotalLoanPosition` at the end of the edge. */
	node?: Maybe<TotalLoanPosition>;
};

/** Grouping methods for `TotalLoanPosition` for usage during aggregation. */
export enum TotalLoanPositionsGroupBy {
	CollateralAmount = "COLLATERAL_AMOUNT",
	CollateralId = "COLLATERAL_ID",
	DebitAmount = "DEBIT_AMOUNT",
}

/** Conditions for `TotalLoanPosition` aggregates. */
export type TotalLoanPositionsHavingInput = {
	AND?: InputMaybe<Array<TotalLoanPositionsHavingInput>>;
	OR?: InputMaybe<Array<TotalLoanPositionsHavingInput>>;
};

/** Methods to use when ordering `TotalLoanPosition`. */
export enum TotalLoanPositionsOrderBy {
	CollateralAmountAsc = "COLLATERAL_AMOUNT_ASC",
	CollateralAmountDesc = "COLLATERAL_AMOUNT_DESC",
	CollateralIdAsc = "COLLATERAL_ID_ASC",
	CollateralIdDesc = "COLLATERAL_ID_DESC",
	DebitAmountAsc = "DEBIT_AMOUNT_ASC",
	DebitAmountDesc = "DEBIT_AMOUNT_DESC",
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	Natural = "NATURAL",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
}

export type Transfer = Node & {
	__typename?: "Transfer";
	amount?: Maybe<Scalars["String"]>;
	amountInUSD?: Maybe<Scalars["String"]>;
	/** Reads a single `Account` that is related to this `Transfer`. */
	from?: Maybe<Account>;
	fromId?: Maybe<Scalars["String"]>;
	id: Scalars["String"];
	isSuccess?: Maybe<Scalars["Boolean"]>;
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
	timestamp?: Maybe<Scalars["Datetime"]>;
	/** Reads a single `Account` that is related to this `Transfer`. */
	to?: Maybe<Account>;
	toId?: Maybe<Scalars["String"]>;
	/** Reads a single `Token` that is related to this `Transfer`. */
	token?: Maybe<Token>;
	tokenId?: Maybe<Scalars["String"]>;
};

export type TransferAggregates = {
	__typename?: "TransferAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

/** A filter to be used against `Transfer` object types. All fields are combined with a logical ‘and.’ */
export type TransferFilter = {
	/** Filter by the object’s `amount` field. */
	amount?: InputMaybe<StringFilter>;
	/** Filter by the object’s `amountInUSD` field. */
	amountInUSD?: InputMaybe<StringFilter>;
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<TransferFilter>>;
	/** Filter by the object’s `fromId` field. */
	fromId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Filter by the object’s `isSuccess` field. */
	isSuccess?: InputMaybe<BooleanFilter>;
	/** Negates the expression. */
	not?: InputMaybe<TransferFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<TransferFilter>>;
	/** Filter by the object’s `timestamp` field. */
	timestamp?: InputMaybe<DatetimeFilter>;
	/** Filter by the object’s `toId` field. */
	toId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `tokenId` field. */
	tokenId?: InputMaybe<StringFilter>;
};

/** A connection to a list of `Transfer` values. */
export type TransfersConnection = {
	__typename?: "TransfersConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<TransferAggregates>;
	/** A list of edges which contains the `Transfer` and cursor to aid in pagination. */
	edges: Array<TransfersEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<TransferAggregates>>;
	/** A list of `Transfer` objects. */
	nodes: Array<Maybe<Transfer>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `Transfer` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `Transfer` values. */
export type TransfersConnectionGroupedAggregatesArgs = {
	groupBy: Array<TransfersGroupBy>;
	having?: InputMaybe<TransfersHavingInput>;
};

/** A `Transfer` edge in the connection. */
export type TransfersEdge = {
	__typename?: "TransfersEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `Transfer` at the end of the edge. */
	node?: Maybe<Transfer>;
};

/** Grouping methods for `Transfer` for usage during aggregation. */
export enum TransfersGroupBy {
	Amount = "AMOUNT",
	AmountInUSD = "AMOUNT_IN_U_S_D",
	FromId = "FROM_ID",
	IsSuccess = "IS_SUCCESS",
	Timestamp = "TIMESTAMP",
	TokenId = "TOKEN_ID",
	ToId = "TO_ID",
}

/** Conditions for `Transfer` aggregates. */
export type TransfersHavingInput = {
	AND?: InputMaybe<Array<TransfersHavingInput>>;
	OR?: InputMaybe<Array<TransfersHavingInput>>;
};

/** Methods to use when ordering `Transfer`. */
export enum TransfersOrderBy {
	AmountAsc = "AMOUNT_ASC",
	AmountDesc = "AMOUNT_DESC",
	AmountInUSDAsc = "AMOUNT_IN_U_S_D_ASC",
	AmountInUSDDesc = "AMOUNT_IN_U_S_D_DESC",
	FromIdAsc = "FROM_ID_ASC",
	FromIdDesc = "FROM_ID_DESC",
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	IsSuccessAsc = "IS_SUCCESS_ASC",
	IsSuccessDesc = "IS_SUCCESS_DESC",
	Natural = "NATURAL",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	TimestampAsc = "TIMESTAMP_ASC",
	TimestampDesc = "TIMESTAMP_DESC",
	TokenIdAsc = "TOKEN_ID_ASC",
	TokenIdDesc = "TOKEN_ID_DESC",
	ToIdAsc = "TO_ID_ASC",
	ToIdDesc = "TO_ID_DESC",
}

export type UserProvision = Node & {
	__typename?: "UserProvision";
	id: Scalars["String"];
	/** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
	nodeId: Scalars["ID"];
	/** Reads a single `ProvisionPool` that is related to this `UserProvision`. */
	pool?: Maybe<ProvisionPool>;
	poolId?: Maybe<Scalars["String"]>;
	/** Reads a single `Token` that is related to this `UserProvision`. */
	token0?: Maybe<Token>;
	token0Amount?: Maybe<Scalars["String"]>;
	token0Id?: Maybe<Scalars["String"]>;
	/** Reads a single `Token` that is related to this `UserProvision`. */
	token1?: Maybe<Token>;
	token1Amount?: Maybe<Scalars["String"]>;
	token1Id?: Maybe<Scalars["String"]>;
};

export type UserProvisionAggregates = {
	__typename?: "UserProvisionAggregates";
	keys?: Maybe<Array<Scalars["String"]>>;
};

/** A filter to be used against `UserProvision` object types. All fields are combined with a logical ‘and.’ */
export type UserProvisionFilter = {
	/** Checks for all expressions in this list. */
	and?: InputMaybe<Array<UserProvisionFilter>>;
	/** Filter by the object’s `id` field. */
	id?: InputMaybe<StringFilter>;
	/** Negates the expression. */
	not?: InputMaybe<UserProvisionFilter>;
	/** Checks for any expressions in this list. */
	or?: InputMaybe<Array<UserProvisionFilter>>;
	/** Filter by the object’s `poolId` field. */
	poolId?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token0Amount` field. */
	token0Amount?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token0Id` field. */
	token0Id?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token1Amount` field. */
	token1Amount?: InputMaybe<StringFilter>;
	/** Filter by the object’s `token1Id` field. */
	token1Id?: InputMaybe<StringFilter>;
};

/** A connection to a list of `UserProvision` values. */
export type UserProvisionsConnection = {
	__typename?: "UserProvisionsConnection";
	/** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
	aggregates?: Maybe<UserProvisionAggregates>;
	/** A list of edges which contains the `UserProvision` and cursor to aid in pagination. */
	edges: Array<UserProvisionsEdge>;
	/** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
	groupedAggregates?: Maybe<Array<UserProvisionAggregates>>;
	/** A list of `UserProvision` objects. */
	nodes: Array<Maybe<UserProvision>>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
	/** The count of *all* `UserProvision` you could get from the connection. */
	totalCount: Scalars["Int"];
};

/** A connection to a list of `UserProvision` values. */
export type UserProvisionsConnectionGroupedAggregatesArgs = {
	groupBy: Array<UserProvisionsGroupBy>;
	having?: InputMaybe<UserProvisionsHavingInput>;
};

/** A `UserProvision` edge in the connection. */
export type UserProvisionsEdge = {
	__typename?: "UserProvisionsEdge";
	/** A cursor for use in pagination. */
	cursor?: Maybe<Scalars["Cursor"]>;
	/** The `UserProvision` at the end of the edge. */
	node?: Maybe<UserProvision>;
};

/** Grouping methods for `UserProvision` for usage during aggregation. */
export enum UserProvisionsGroupBy {
	PoolId = "POOL_ID",
	Token0Amount = "TOKEN0_AMOUNT",
	Token0Id = "TOKEN0_ID",
	Token1Amount = "TOKEN1_AMOUNT",
	Token1Id = "TOKEN1_ID",
}

/** Conditions for `UserProvision` aggregates. */
export type UserProvisionsHavingInput = {
	AND?: InputMaybe<Array<UserProvisionsHavingInput>>;
	OR?: InputMaybe<Array<UserProvisionsHavingInput>>;
};

/** Methods to use when ordering `UserProvision`. */
export enum UserProvisionsOrderBy {
	IdAsc = "ID_ASC",
	IdDesc = "ID_DESC",
	Natural = "NATURAL",
	PoolIdAsc = "POOL_ID_ASC",
	PoolIdDesc = "POOL_ID_DESC",
	PrimaryKeyAsc = "PRIMARY_KEY_ASC",
	PrimaryKeyDesc = "PRIMARY_KEY_DESC",
	Token0AmountAsc = "TOKEN0_AMOUNT_ASC",
	Token0AmountDesc = "TOKEN0_AMOUNT_DESC",
	Token0IdAsc = "TOKEN0_ID_ASC",
	Token0IdDesc = "TOKEN0_ID_DESC",
	Token1AmountAsc = "TOKEN1_AMOUNT_ASC",
	Token1AmountDesc = "TOKEN1_AMOUNT_DESC",
	Token1IdAsc = "TOKEN1_ID_ASC",
	Token1IdDesc = "TOKEN1_ID_DESC",
}

export type _Metadata = {
	__typename?: "_Metadata";
	chain?: Maybe<Scalars["String"]>;
	dynamicDatasources?: Maybe<Scalars["String"]>;
	genesisHash?: Maybe<Scalars["String"]>;
	indexerHealthy?: Maybe<Scalars["Boolean"]>;
	indexerNodeVersion?: Maybe<Scalars["String"]>;
	lastProcessedHeight?: Maybe<Scalars["Int"]>;
	lastProcessedTimestamp?: Maybe<Scalars["Date"]>;
	queryNodeVersion?: Maybe<Scalars["String"]>;
	rowCountEstimate?: Maybe<Array<Maybe<TableEstimate>>>;
	specName?: Maybe<Scalars["String"]>;
	targetHeight?: Maybe<Scalars["Int"]>;
};

export type GetAccountByIdQueryVariables = Exact<{
	id: Scalars["String"];
}>;

export type GetAccountByIdQuery = {
	__typename?: "Query";
	account?: {
		__typename?: "Account";
		id: string;
		transferOut: {
			__typename?: "TransfersConnection";
			nodes: Array<{
				__typename?: "Transfer";
				id: string;
				fromId?: string | null;
				toId?: string | null;
				tokenId?: string | null;
				amount?: string | null;
				timestamp?: any | null;
			} | null>;
		};
		transferIn: {
			__typename?: "TransfersConnection";
			nodes: Array<{
				__typename?: "Transfer";
				id: string;
				fromId?: string | null;
				toId?: string | null;
				tokenId?: string | null;
				amount?: string | null;
				timestamp?: any | null;
			} | null>;
		};
	} | null;
};

export type GetBlockByIdQueryVariables = Exact<{
	id: Scalars["String"];
}>;

export type GetBlockByIdQuery = {
	__typename?: "Query";
	block?: {
		__typename?: "Block";
		id: string;
		number?: any | null;
		extrinsics: {
			__typename?: "ExtrinsicsConnection";
			edges: Array<{
				__typename?: "ExtrinsicsEdge";
				node?: { __typename?: "Extrinsic"; id: string } | null;
			}>;
		};
	} | null;
};

export type GetBlockByNumberQueryVariables = Exact<{
	number?: InputMaybe<Scalars["BigFloat"]>;
}>;

export type GetBlockByNumberQuery = {
	__typename?: "Query";
	blocks?: {
		__typename?: "BlocksConnection";
		nodes: Array<{
			__typename?: "Block";
			id: string;
			number?: any | null;
			extrinsics: {
				__typename?: "ExtrinsicsConnection";
				edges: Array<{
					__typename?: "ExtrinsicsEdge";
					node?: { __typename?: "Extrinsic"; id: string } | null;
				}>;
			};
		} | null>;
	} | null;
};

export type GetBlocksQueryVariables = Exact<{ [key: string]: never }>;

export type GetBlocksQuery = {
	__typename?: "Query";
	blocks?: {
		__typename?: "BlocksConnection";
		nodes: Array<{
			__typename?: "Block";
			id: string;
			number?: any | null;
			timestamp?: any | null;
			parentHash?: string | null;
			extrinsics: {
				__typename?: "ExtrinsicsConnection";
				edges: Array<{
					__typename?: "ExtrinsicsEdge";
					node?: { __typename?: "Extrinsic"; id: string } | null;
				}>;
			};
		} | null>;
	} | null;
};

export type GetExtrinsicByIdQueryVariables = Exact<{
	id: Scalars["String"];
}>;

export type GetExtrinsicByIdQuery = {
	__typename?: "Query";
	extrinsic?: {
		__typename?: "Extrinsic";
		id: string;
		section?: string | null;
		method?: string | null;
		args?: any | null;
		signerId?: string | null;
		timestamp?: any | null;
		tip?: string | null;
	} | null;
};

export type GetTransfersQueryVariables = Exact<{ [key: string]: never }>;

export type GetTransfersQuery = {
	__typename?: "Query";
	transfers?: {
		__typename?: "TransfersConnection";
		nodes: Array<{
			__typename?: "Transfer";
			id: string;
			fromId?: string | null;
			toId?: string | null;
			tokenId?: string | null;
			amount?: string | null;
			timestamp?: any | null;
		} | null>;
	} | null;
};

export const GetAccountByIdDocument = `
    query GetAccountById($id: String!) {
  account(id: $id) {
    id
    transferOut(orderBy: TIMESTAMP_DESC) {
      nodes {
        id
        fromId
        toId
        tokenId
        amount
        timestamp
      }
    }
    transferIn(orderBy: TIMESTAMP_DESC) {
      nodes {
        id
        fromId
        toId
        tokenId
        amount
        timestamp
      }
    }
  }
}
    `;
export const useGetAccountByIdQuery = <
	TData = GetAccountByIdQuery,
	TError = unknown
>(
	client: GraphQLClient,
	variables: GetAccountByIdQueryVariables,
	options?: UseQueryOptions<GetAccountByIdQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetAccountByIdQuery, TError, TData>(
		["GetAccountById", variables],
		fetcher<GetAccountByIdQuery, GetAccountByIdQueryVariables>(
			client,
			GetAccountByIdDocument,
			variables,
			headers
		),
		options
	);
export const GetBlockByIdDocument = `
    query GetBlockById($id: String!) {
  block(id: $id) {
    id
    number
    extrinsics(orderBy: TIMESTAMP_DESC) {
      edges {
        node {
          id
        }
      }
    }
  }
}
    `;
export const useGetBlockByIdQuery = <
	TData = GetBlockByIdQuery,
	TError = unknown
>(
	client: GraphQLClient,
	variables: GetBlockByIdQueryVariables,
	options?: UseQueryOptions<GetBlockByIdQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetBlockByIdQuery, TError, TData>(
		["GetBlockById", variables],
		fetcher<GetBlockByIdQuery, GetBlockByIdQueryVariables>(
			client,
			GetBlockByIdDocument,
			variables,
			headers
		),
		options
	);
export const GetBlockByNumberDocument = `
    query GetBlockByNumber($number: BigFloat) {
  blocks(filter: {number: {equalTo: $number}}) {
    nodes {
      id
      number
      extrinsics(orderBy: TIMESTAMP_DESC) {
        edges {
          node {
            id
          }
        }
      }
    }
  }
}
    `;
export const useGetBlockByNumberQuery = <
	TData = GetBlockByNumberQuery,
	TError = unknown
>(
	client: GraphQLClient,
	variables?: GetBlockByNumberQueryVariables,
	options?: UseQueryOptions<GetBlockByNumberQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetBlockByNumberQuery, TError, TData>(
		variables === undefined
			? ["GetBlockByNumber"]
			: ["GetBlockByNumber", variables],
		fetcher<GetBlockByNumberQuery, GetBlockByNumberQueryVariables>(
			client,
			GetBlockByNumberDocument,
			variables,
			headers
		),
		options
	);
export const GetBlocksDocument = `
    query GetBlocks {
  blocks(orderBy: NUMBER_DESC, first: 20) {
    nodes {
      id
      number
      timestamp
      parentHash
      extrinsics {
        edges {
          node {
            id
          }
        }
      }
    }
  }
}
    `;
export const useGetBlocksQuery = <TData = GetBlocksQuery, TError = unknown>(
	client: GraphQLClient,
	variables?: GetBlocksQueryVariables,
	options?: UseQueryOptions<GetBlocksQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetBlocksQuery, TError, TData>(
		variables === undefined ? ["GetBlocks"] : ["GetBlocks", variables],
		fetcher<GetBlocksQuery, GetBlocksQueryVariables>(
			client,
			GetBlocksDocument,
			variables,
			headers
		),
		options
	);
export const GetExtrinsicByIdDocument = `
    query GetExtrinsicById($id: String!) {
  extrinsic(id: $id) {
    id
    section
    method
    args
    signerId
    timestamp
    tip
  }
}
    `;
export const useGetExtrinsicByIdQuery = <
	TData = GetExtrinsicByIdQuery,
	TError = unknown
>(
	client: GraphQLClient,
	variables: GetExtrinsicByIdQueryVariables,
	options?: UseQueryOptions<GetExtrinsicByIdQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetExtrinsicByIdQuery, TError, TData>(
		["GetExtrinsicById", variables],
		fetcher<GetExtrinsicByIdQuery, GetExtrinsicByIdQueryVariables>(
			client,
			GetExtrinsicByIdDocument,
			variables,
			headers
		),
		options
	);
export const GetTransfersDocument = `
    query GetTransfers {
  transfers(orderBy: TIMESTAMP_DESC, first: 20) {
    nodes {
      id
      fromId
      toId
      tokenId
      amount
      timestamp
    }
  }
}
    `;
export const useGetTransfersQuery = <
	TData = GetTransfersQuery,
	TError = unknown
>(
	client: GraphQLClient,
	variables?: GetTransfersQueryVariables,
	options?: UseQueryOptions<GetTransfersQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetTransfersQuery, TError, TData>(
		variables === undefined ? ["GetTransfers"] : ["GetTransfers", variables],
		fetcher<GetTransfersQuery, GetTransfersQueryVariables>(
			client,
			GetTransfersDocument,
			variables,
			headers
		),
		options
	);
