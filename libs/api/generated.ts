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
	jsonb: any;
	timestamp: any;
	timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["Boolean"]>;
	_gt?: InputMaybe<Scalars["Boolean"]>;
	_gte?: InputMaybe<Scalars["Boolean"]>;
	_in?: InputMaybe<Array<Scalars["Boolean"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]>;
	_lt?: InputMaybe<Scalars["Boolean"]>;
	_lte?: InputMaybe<Scalars["Boolean"]>;
	_neq?: InputMaybe<Scalars["Boolean"]>;
	_nin?: InputMaybe<Array<Scalars["Boolean"]>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["Int"]>;
	_gt?: InputMaybe<Scalars["Int"]>;
	_gte?: InputMaybe<Scalars["Int"]>;
	_in?: InputMaybe<Array<Scalars["Int"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]>;
	_lt?: InputMaybe<Scalars["Int"]>;
	_lte?: InputMaybe<Scalars["Int"]>;
	_neq?: InputMaybe<Scalars["Int"]>;
	_nin?: InputMaybe<Array<Scalars["Int"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["String"]>;
	_gt?: InputMaybe<Scalars["String"]>;
	_gte?: InputMaybe<Scalars["String"]>;
	/** does the column match the given case-insensitive pattern */
	_ilike?: InputMaybe<Scalars["String"]>;
	_in?: InputMaybe<Array<Scalars["String"]>>;
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?: InputMaybe<Scalars["String"]>;
	_is_null?: InputMaybe<Scalars["Boolean"]>;
	/** does the column match the given pattern */
	_like?: InputMaybe<Scalars["String"]>;
	_lt?: InputMaybe<Scalars["String"]>;
	_lte?: InputMaybe<Scalars["String"]>;
	_neq?: InputMaybe<Scalars["String"]>;
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?: InputMaybe<Scalars["String"]>;
	_nin?: InputMaybe<Array<Scalars["String"]>>;
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?: InputMaybe<Scalars["String"]>;
	/** does the column NOT match the given pattern */
	_nlike?: InputMaybe<Scalars["String"]>;
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?: InputMaybe<Scalars["String"]>;
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?: InputMaybe<Scalars["String"]>;
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?: InputMaybe<Scalars["String"]>;
	/** does the column match the given SQL regular expression */
	_similar?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "app._metadata" */
export type App__Metadata = {
	__typename?: "app__metadata";
	createdAt: Scalars["timestamptz"];
	key: Scalars["String"];
	updatedAt: Scalars["timestamptz"];
	value?: Maybe<Scalars["jsonb"]>;
};

/** columns and relationships of "app._metadata" */
export type App__MetadataValueArgs = {
	path?: InputMaybe<Scalars["String"]>;
};

/** aggregated selection of "app._metadata" */
export type App__Metadata_Aggregate = {
	__typename?: "app__metadata_aggregate";
	aggregate?: Maybe<App__Metadata_Aggregate_Fields>;
	nodes: Array<App__Metadata>;
};

/** aggregate fields of "app._metadata" */
export type App__Metadata_Aggregate_Fields = {
	__typename?: "app__metadata_aggregate_fields";
	count: Scalars["Int"];
	max?: Maybe<App__Metadata_Max_Fields>;
	min?: Maybe<App__Metadata_Min_Fields>;
};

/** aggregate fields of "app._metadata" */
export type App__Metadata_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<App__Metadata_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type App__Metadata_Append_Input = {
	value?: InputMaybe<Scalars["jsonb"]>;
};

/** Boolean expression to filter rows from the table "app._metadata". All fields are combined with a logical 'AND'. */
export type App__Metadata_Bool_Exp = {
	_and?: InputMaybe<Array<App__Metadata_Bool_Exp>>;
	_not?: InputMaybe<App__Metadata_Bool_Exp>;
	_or?: InputMaybe<Array<App__Metadata_Bool_Exp>>;
	createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
	key?: InputMaybe<String_Comparison_Exp>;
	updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
	value?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "app._metadata" */
export enum App__Metadata_Constraint {
	/** unique or primary key constraint on columns "key" */
	MetadataPkey = "_metadata_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type App__Metadata_Delete_At_Path_Input = {
	value?: InputMaybe<Array<Scalars["String"]>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type App__Metadata_Delete_Elem_Input = {
	value?: InputMaybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type App__Metadata_Delete_Key_Input = {
	value?: InputMaybe<Scalars["String"]>;
};

/** input type for inserting data into table "app._metadata" */
export type App__Metadata_Insert_Input = {
	createdAt?: InputMaybe<Scalars["timestamptz"]>;
	key?: InputMaybe<Scalars["String"]>;
	updatedAt?: InputMaybe<Scalars["timestamptz"]>;
	value?: InputMaybe<Scalars["jsonb"]>;
};

/** aggregate max on columns */
export type App__Metadata_Max_Fields = {
	__typename?: "app__metadata_max_fields";
	createdAt?: Maybe<Scalars["timestamptz"]>;
	key?: Maybe<Scalars["String"]>;
	updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate min on columns */
export type App__Metadata_Min_Fields = {
	__typename?: "app__metadata_min_fields";
	createdAt?: Maybe<Scalars["timestamptz"]>;
	key?: Maybe<Scalars["String"]>;
	updatedAt?: Maybe<Scalars["timestamptz"]>;
};

/** response of any mutation on the table "app._metadata" */
export type App__Metadata_Mutation_Response = {
	__typename?: "app__metadata_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<App__Metadata>;
};

/** on_conflict condition type for table "app._metadata" */
export type App__Metadata_On_Conflict = {
	constraint: App__Metadata_Constraint;
	update_columns?: Array<App__Metadata_Update_Column>;
	where?: InputMaybe<App__Metadata_Bool_Exp>;
};

/** Ordering options when selecting data from "app._metadata". */
export type App__Metadata_Order_By = {
	createdAt?: InputMaybe<Order_By>;
	key?: InputMaybe<Order_By>;
	updatedAt?: InputMaybe<Order_By>;
	value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: app__metadata */
export type App__Metadata_Pk_Columns_Input = {
	key: Scalars["String"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type App__Metadata_Prepend_Input = {
	value?: InputMaybe<Scalars["jsonb"]>;
};

/** select columns of table "app._metadata" */
export enum App__Metadata_Select_Column {
	/** column name */
	CreatedAt = "createdAt",
	/** column name */
	Key = "key",
	/** column name */
	UpdatedAt = "updatedAt",
	/** column name */
	Value = "value",
}

/** input type for updating data in table "app._metadata" */
export type App__Metadata_Set_Input = {
	createdAt?: InputMaybe<Scalars["timestamptz"]>;
	key?: InputMaybe<Scalars["String"]>;
	updatedAt?: InputMaybe<Scalars["timestamptz"]>;
	value?: InputMaybe<Scalars["jsonb"]>;
};

/** update columns of table "app._metadata" */
export enum App__Metadata_Update_Column {
	/** column name */
	CreatedAt = "createdAt",
	/** column name */
	Key = "key",
	/** column name */
	UpdatedAt = "updatedAt",
	/** column name */
	Value = "value",
}

export type App__Metadata_Updates = {
	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: InputMaybe<App__Metadata_Append_Input>;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: InputMaybe<App__Metadata_Delete_At_Path_Input>;
	/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
	_delete_elem?: InputMaybe<App__Metadata_Delete_Elem_Input>;
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: InputMaybe<App__Metadata_Delete_Key_Input>;
	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: InputMaybe<App__Metadata_Prepend_Input>;
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<App__Metadata_Set_Input>;
	where: App__Metadata_Bool_Exp;
};

/** columns and relationships of "app.blocks" */
export type App_Blocks = {
	__typename?: "app_blocks";
	created_at: Scalars["timestamp"];
	/** An array relationship */
	events: Array<App_Events>;
	/** An aggregate relationship */
	events_aggregate: App_Events_Aggregate;
	extrinsic_root: Scalars["String"];
	/** An array relationship */
	extrinsics: Array<App_Extrinsics>;
	/** An aggregate relationship */
	extrinsics_aggregate: App_Extrinsics_Aggregate;
	hash: Scalars["String"];
	id: Scalars["String"];
	/** An array relationship */
	logs: Array<App_Logs>;
	/** An aggregate relationship */
	logs_aggregate: App_Logs_Aggregate;
	parent_hash: Scalars["String"];
	spec_version: Scalars["Int"];
	state_root: Scalars["String"];
	validator?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "app.blocks" */
export type App_BlocksEventsArgs = {
	distinct_on?: InputMaybe<Array<App_Events_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<App_Events_Order_By>>;
	where?: InputMaybe<App_Events_Bool_Exp>;
};

/** columns and relationships of "app.blocks" */
export type App_BlocksEvents_AggregateArgs = {
	distinct_on?: InputMaybe<Array<App_Events_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<App_Events_Order_By>>;
	where?: InputMaybe<App_Events_Bool_Exp>;
};

/** columns and relationships of "app.blocks" */
export type App_BlocksExtrinsicsArgs = {
	distinct_on?: InputMaybe<Array<App_Extrinsics_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<App_Extrinsics_Order_By>>;
	where?: InputMaybe<App_Extrinsics_Bool_Exp>;
};

/** columns and relationships of "app.blocks" */
export type App_BlocksExtrinsics_AggregateArgs = {
	distinct_on?: InputMaybe<Array<App_Extrinsics_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<App_Extrinsics_Order_By>>;
	where?: InputMaybe<App_Extrinsics_Bool_Exp>;
};

/** columns and relationships of "app.blocks" */
export type App_BlocksLogsArgs = {
	distinct_on?: InputMaybe<Array<App_Logs_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<App_Logs_Order_By>>;
	where?: InputMaybe<App_Logs_Bool_Exp>;
};

/** columns and relationships of "app.blocks" */
export type App_BlocksLogs_AggregateArgs = {
	distinct_on?: InputMaybe<Array<App_Logs_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<App_Logs_Order_By>>;
	where?: InputMaybe<App_Logs_Bool_Exp>;
};

/** aggregated selection of "app.blocks" */
export type App_Blocks_Aggregate = {
	__typename?: "app_blocks_aggregate";
	aggregate?: Maybe<App_Blocks_Aggregate_Fields>;
	nodes: Array<App_Blocks>;
};

/** aggregate fields of "app.blocks" */
export type App_Blocks_Aggregate_Fields = {
	__typename?: "app_blocks_aggregate_fields";
	avg?: Maybe<App_Blocks_Avg_Fields>;
	count: Scalars["Int"];
	max?: Maybe<App_Blocks_Max_Fields>;
	min?: Maybe<App_Blocks_Min_Fields>;
	stddev?: Maybe<App_Blocks_Stddev_Fields>;
	stddev_pop?: Maybe<App_Blocks_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<App_Blocks_Stddev_Samp_Fields>;
	sum?: Maybe<App_Blocks_Sum_Fields>;
	var_pop?: Maybe<App_Blocks_Var_Pop_Fields>;
	var_samp?: Maybe<App_Blocks_Var_Samp_Fields>;
	variance?: Maybe<App_Blocks_Variance_Fields>;
};

/** aggregate fields of "app.blocks" */
export type App_Blocks_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<App_Blocks_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type App_Blocks_Avg_Fields = {
	__typename?: "app_blocks_avg_fields";
	spec_version?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "app.blocks". All fields are combined with a logical 'AND'. */
export type App_Blocks_Bool_Exp = {
	_and?: InputMaybe<Array<App_Blocks_Bool_Exp>>;
	_not?: InputMaybe<App_Blocks_Bool_Exp>;
	_or?: InputMaybe<Array<App_Blocks_Bool_Exp>>;
	created_at?: InputMaybe<Timestamp_Comparison_Exp>;
	events?: InputMaybe<App_Events_Bool_Exp>;
	extrinsic_root?: InputMaybe<String_Comparison_Exp>;
	extrinsics?: InputMaybe<App_Extrinsics_Bool_Exp>;
	hash?: InputMaybe<String_Comparison_Exp>;
	id?: InputMaybe<String_Comparison_Exp>;
	logs?: InputMaybe<App_Logs_Bool_Exp>;
	parent_hash?: InputMaybe<String_Comparison_Exp>;
	spec_version?: InputMaybe<Int_Comparison_Exp>;
	state_root?: InputMaybe<String_Comparison_Exp>;
	validator?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "app.blocks" */
export enum App_Blocks_Constraint {
	/** unique or primary key constraint on columns "id" */
	BlocksPkey = "blocks_pkey",
}

/** input type for incrementing numeric columns in table "app.blocks" */
export type App_Blocks_Inc_Input = {
	spec_version?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "app.blocks" */
export type App_Blocks_Insert_Input = {
	created_at?: InputMaybe<Scalars["timestamp"]>;
	events?: InputMaybe<App_Events_Arr_Rel_Insert_Input>;
	extrinsic_root?: InputMaybe<Scalars["String"]>;
	extrinsics?: InputMaybe<App_Extrinsics_Arr_Rel_Insert_Input>;
	hash?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	logs?: InputMaybe<App_Logs_Arr_Rel_Insert_Input>;
	parent_hash?: InputMaybe<Scalars["String"]>;
	spec_version?: InputMaybe<Scalars["Int"]>;
	state_root?: InputMaybe<Scalars["String"]>;
	validator?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type App_Blocks_Max_Fields = {
	__typename?: "app_blocks_max_fields";
	created_at?: Maybe<Scalars["timestamp"]>;
	extrinsic_root?: Maybe<Scalars["String"]>;
	hash?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	parent_hash?: Maybe<Scalars["String"]>;
	spec_version?: Maybe<Scalars["Int"]>;
	state_root?: Maybe<Scalars["String"]>;
	validator?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type App_Blocks_Min_Fields = {
	__typename?: "app_blocks_min_fields";
	created_at?: Maybe<Scalars["timestamp"]>;
	extrinsic_root?: Maybe<Scalars["String"]>;
	hash?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	parent_hash?: Maybe<Scalars["String"]>;
	spec_version?: Maybe<Scalars["Int"]>;
	state_root?: Maybe<Scalars["String"]>;
	validator?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "app.blocks" */
export type App_Blocks_Mutation_Response = {
	__typename?: "app_blocks_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<App_Blocks>;
};

/** input type for inserting object relation for remote table "app.blocks" */
export type App_Blocks_Obj_Rel_Insert_Input = {
	data: App_Blocks_Insert_Input;
	/** upsert condition */
	on_conflict?: InputMaybe<App_Blocks_On_Conflict>;
};

/** on_conflict condition type for table "app.blocks" */
export type App_Blocks_On_Conflict = {
	constraint: App_Blocks_Constraint;
	update_columns?: Array<App_Blocks_Update_Column>;
	where?: InputMaybe<App_Blocks_Bool_Exp>;
};

/** Ordering options when selecting data from "app.blocks". */
export type App_Blocks_Order_By = {
	created_at?: InputMaybe<Order_By>;
	events_aggregate?: InputMaybe<App_Events_Aggregate_Order_By>;
	extrinsic_root?: InputMaybe<Order_By>;
	extrinsics_aggregate?: InputMaybe<App_Extrinsics_Aggregate_Order_By>;
	hash?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	logs_aggregate?: InputMaybe<App_Logs_Aggregate_Order_By>;
	parent_hash?: InputMaybe<Order_By>;
	spec_version?: InputMaybe<Order_By>;
	state_root?: InputMaybe<Order_By>;
	validator?: InputMaybe<Order_By>;
};

/** primary key columns input for table: app_blocks */
export type App_Blocks_Pk_Columns_Input = {
	id: Scalars["String"];
};

/** select columns of table "app.blocks" */
export enum App_Blocks_Select_Column {
	/** column name */
	CreatedAt = "created_at",
	/** column name */
	ExtrinsicRoot = "extrinsic_root",
	/** column name */
	Hash = "hash",
	/** column name */
	Id = "id",
	/** column name */
	ParentHash = "parent_hash",
	/** column name */
	SpecVersion = "spec_version",
	/** column name */
	StateRoot = "state_root",
	/** column name */
	Validator = "validator",
}

/** input type for updating data in table "app.blocks" */
export type App_Blocks_Set_Input = {
	created_at?: InputMaybe<Scalars["timestamp"]>;
	extrinsic_root?: InputMaybe<Scalars["String"]>;
	hash?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	parent_hash?: InputMaybe<Scalars["String"]>;
	spec_version?: InputMaybe<Scalars["Int"]>;
	state_root?: InputMaybe<Scalars["String"]>;
	validator?: InputMaybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type App_Blocks_Stddev_Fields = {
	__typename?: "app_blocks_stddev_fields";
	spec_version?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type App_Blocks_Stddev_Pop_Fields = {
	__typename?: "app_blocks_stddev_pop_fields";
	spec_version?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type App_Blocks_Stddev_Samp_Fields = {
	__typename?: "app_blocks_stddev_samp_fields";
	spec_version?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type App_Blocks_Sum_Fields = {
	__typename?: "app_blocks_sum_fields";
	spec_version?: Maybe<Scalars["Int"]>;
};

/** update columns of table "app.blocks" */
export enum App_Blocks_Update_Column {
	/** column name */
	CreatedAt = "created_at",
	/** column name */
	ExtrinsicRoot = "extrinsic_root",
	/** column name */
	Hash = "hash",
	/** column name */
	Id = "id",
	/** column name */
	ParentHash = "parent_hash",
	/** column name */
	SpecVersion = "spec_version",
	/** column name */
	StateRoot = "state_root",
	/** column name */
	Validator = "validator",
}

export type App_Blocks_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	_inc?: InputMaybe<App_Blocks_Inc_Input>;
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<App_Blocks_Set_Input>;
	where: App_Blocks_Bool_Exp;
};

/** aggregate var_pop on columns */
export type App_Blocks_Var_Pop_Fields = {
	__typename?: "app_blocks_var_pop_fields";
	spec_version?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type App_Blocks_Var_Samp_Fields = {
	__typename?: "app_blocks_var_samp_fields";
	spec_version?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type App_Blocks_Variance_Fields = {
	__typename?: "app_blocks_variance_fields";
	spec_version?: Maybe<Scalars["Float"]>;
};

/** columns and relationships of "app.events" */
export type App_Events = {
	__typename?: "app_events";
	/** An object relationship */
	block?: Maybe<App_Blocks>;
	block_id?: Maybe<Scalars["String"]>;
	created_at: Scalars["timestamp"];
	emit_data?: Maybe<Scalars["jsonb"]>;
	emit_method: Scalars["String"];
	emit_section: Scalars["String"];
	/** An object relationship */
	extrinsic?: Maybe<App_Extrinsics>;
	extrinsic_id?: Maybe<Scalars["String"]>;
	id: Scalars["String"];
	index: Scalars["Int"];
	phase?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "app.events" */
export type App_EventsEmit_DataArgs = {
	path?: InputMaybe<Scalars["String"]>;
};

/** aggregated selection of "app.events" */
export type App_Events_Aggregate = {
	__typename?: "app_events_aggregate";
	aggregate?: Maybe<App_Events_Aggregate_Fields>;
	nodes: Array<App_Events>;
};

/** aggregate fields of "app.events" */
export type App_Events_Aggregate_Fields = {
	__typename?: "app_events_aggregate_fields";
	avg?: Maybe<App_Events_Avg_Fields>;
	count: Scalars["Int"];
	max?: Maybe<App_Events_Max_Fields>;
	min?: Maybe<App_Events_Min_Fields>;
	stddev?: Maybe<App_Events_Stddev_Fields>;
	stddev_pop?: Maybe<App_Events_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<App_Events_Stddev_Samp_Fields>;
	sum?: Maybe<App_Events_Sum_Fields>;
	var_pop?: Maybe<App_Events_Var_Pop_Fields>;
	var_samp?: Maybe<App_Events_Var_Samp_Fields>;
	variance?: Maybe<App_Events_Variance_Fields>;
};

/** aggregate fields of "app.events" */
export type App_Events_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<App_Events_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "app.events" */
export type App_Events_Aggregate_Order_By = {
	avg?: InputMaybe<App_Events_Avg_Order_By>;
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<App_Events_Max_Order_By>;
	min?: InputMaybe<App_Events_Min_Order_By>;
	stddev?: InputMaybe<App_Events_Stddev_Order_By>;
	stddev_pop?: InputMaybe<App_Events_Stddev_Pop_Order_By>;
	stddev_samp?: InputMaybe<App_Events_Stddev_Samp_Order_By>;
	sum?: InputMaybe<App_Events_Sum_Order_By>;
	var_pop?: InputMaybe<App_Events_Var_Pop_Order_By>;
	var_samp?: InputMaybe<App_Events_Var_Samp_Order_By>;
	variance?: InputMaybe<App_Events_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type App_Events_Append_Input = {
	emit_data?: InputMaybe<Scalars["jsonb"]>;
};

/** input type for inserting array relation for remote table "app.events" */
export type App_Events_Arr_Rel_Insert_Input = {
	data: Array<App_Events_Insert_Input>;
	/** upsert condition */
	on_conflict?: InputMaybe<App_Events_On_Conflict>;
};

/** aggregate avg on columns */
export type App_Events_Avg_Fields = {
	__typename?: "app_events_avg_fields";
	index?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "app.events" */
export type App_Events_Avg_Order_By = {
	index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "app.events". All fields are combined with a logical 'AND'. */
export type App_Events_Bool_Exp = {
	_and?: InputMaybe<Array<App_Events_Bool_Exp>>;
	_not?: InputMaybe<App_Events_Bool_Exp>;
	_or?: InputMaybe<Array<App_Events_Bool_Exp>>;
	block?: InputMaybe<App_Blocks_Bool_Exp>;
	block_id?: InputMaybe<String_Comparison_Exp>;
	created_at?: InputMaybe<Timestamp_Comparison_Exp>;
	emit_data?: InputMaybe<Jsonb_Comparison_Exp>;
	emit_method?: InputMaybe<String_Comparison_Exp>;
	emit_section?: InputMaybe<String_Comparison_Exp>;
	extrinsic?: InputMaybe<App_Extrinsics_Bool_Exp>;
	extrinsic_id?: InputMaybe<String_Comparison_Exp>;
	id?: InputMaybe<String_Comparison_Exp>;
	index?: InputMaybe<Int_Comparison_Exp>;
	phase?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "app.events" */
export enum App_Events_Constraint {
	/** unique or primary key constraint on columns "id" */
	EventsPkey = "events_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type App_Events_Delete_At_Path_Input = {
	emit_data?: InputMaybe<Array<Scalars["String"]>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type App_Events_Delete_Elem_Input = {
	emit_data?: InputMaybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type App_Events_Delete_Key_Input = {
	emit_data?: InputMaybe<Scalars["String"]>;
};

/** input type for incrementing numeric columns in table "app.events" */
export type App_Events_Inc_Input = {
	index?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "app.events" */
export type App_Events_Insert_Input = {
	block?: InputMaybe<App_Blocks_Obj_Rel_Insert_Input>;
	block_id?: InputMaybe<Scalars["String"]>;
	created_at?: InputMaybe<Scalars["timestamp"]>;
	emit_data?: InputMaybe<Scalars["jsonb"]>;
	emit_method?: InputMaybe<Scalars["String"]>;
	emit_section?: InputMaybe<Scalars["String"]>;
	extrinsic?: InputMaybe<App_Extrinsics_Obj_Rel_Insert_Input>;
	extrinsic_id?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	index?: InputMaybe<Scalars["Int"]>;
	phase?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type App_Events_Max_Fields = {
	__typename?: "app_events_max_fields";
	block_id?: Maybe<Scalars["String"]>;
	created_at?: Maybe<Scalars["timestamp"]>;
	emit_method?: Maybe<Scalars["String"]>;
	emit_section?: Maybe<Scalars["String"]>;
	extrinsic_id?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	index?: Maybe<Scalars["Int"]>;
	phase?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "app.events" */
export type App_Events_Max_Order_By = {
	block_id?: InputMaybe<Order_By>;
	created_at?: InputMaybe<Order_By>;
	emit_method?: InputMaybe<Order_By>;
	emit_section?: InputMaybe<Order_By>;
	extrinsic_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	index?: InputMaybe<Order_By>;
	phase?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type App_Events_Min_Fields = {
	__typename?: "app_events_min_fields";
	block_id?: Maybe<Scalars["String"]>;
	created_at?: Maybe<Scalars["timestamp"]>;
	emit_method?: Maybe<Scalars["String"]>;
	emit_section?: Maybe<Scalars["String"]>;
	extrinsic_id?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	index?: Maybe<Scalars["Int"]>;
	phase?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "app.events" */
export type App_Events_Min_Order_By = {
	block_id?: InputMaybe<Order_By>;
	created_at?: InputMaybe<Order_By>;
	emit_method?: InputMaybe<Order_By>;
	emit_section?: InputMaybe<Order_By>;
	extrinsic_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	index?: InputMaybe<Order_By>;
	phase?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "app.events" */
export type App_Events_Mutation_Response = {
	__typename?: "app_events_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<App_Events>;
};

/** on_conflict condition type for table "app.events" */
export type App_Events_On_Conflict = {
	constraint: App_Events_Constraint;
	update_columns?: Array<App_Events_Update_Column>;
	where?: InputMaybe<App_Events_Bool_Exp>;
};

/** Ordering options when selecting data from "app.events". */
export type App_Events_Order_By = {
	block?: InputMaybe<App_Blocks_Order_By>;
	block_id?: InputMaybe<Order_By>;
	created_at?: InputMaybe<Order_By>;
	emit_data?: InputMaybe<Order_By>;
	emit_method?: InputMaybe<Order_By>;
	emit_section?: InputMaybe<Order_By>;
	extrinsic?: InputMaybe<App_Extrinsics_Order_By>;
	extrinsic_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	index?: InputMaybe<Order_By>;
	phase?: InputMaybe<Order_By>;
};

/** primary key columns input for table: app_events */
export type App_Events_Pk_Columns_Input = {
	id: Scalars["String"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type App_Events_Prepend_Input = {
	emit_data?: InputMaybe<Scalars["jsonb"]>;
};

/** select columns of table "app.events" */
export enum App_Events_Select_Column {
	/** column name */
	BlockId = "block_id",
	/** column name */
	CreatedAt = "created_at",
	/** column name */
	EmitData = "emit_data",
	/** column name */
	EmitMethod = "emit_method",
	/** column name */
	EmitSection = "emit_section",
	/** column name */
	ExtrinsicId = "extrinsic_id",
	/** column name */
	Id = "id",
	/** column name */
	Index = "index",
	/** column name */
	Phase = "phase",
}

/** input type for updating data in table "app.events" */
export type App_Events_Set_Input = {
	block_id?: InputMaybe<Scalars["String"]>;
	created_at?: InputMaybe<Scalars["timestamp"]>;
	emit_data?: InputMaybe<Scalars["jsonb"]>;
	emit_method?: InputMaybe<Scalars["String"]>;
	emit_section?: InputMaybe<Scalars["String"]>;
	extrinsic_id?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	index?: InputMaybe<Scalars["Int"]>;
	phase?: InputMaybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type App_Events_Stddev_Fields = {
	__typename?: "app_events_stddev_fields";
	index?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "app.events" */
export type App_Events_Stddev_Order_By = {
	index?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type App_Events_Stddev_Pop_Fields = {
	__typename?: "app_events_stddev_pop_fields";
	index?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "app.events" */
export type App_Events_Stddev_Pop_Order_By = {
	index?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type App_Events_Stddev_Samp_Fields = {
	__typename?: "app_events_stddev_samp_fields";
	index?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "app.events" */
export type App_Events_Stddev_Samp_Order_By = {
	index?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type App_Events_Sum_Fields = {
	__typename?: "app_events_sum_fields";
	index?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "app.events" */
export type App_Events_Sum_Order_By = {
	index?: InputMaybe<Order_By>;
};

/** update columns of table "app.events" */
export enum App_Events_Update_Column {
	/** column name */
	BlockId = "block_id",
	/** column name */
	CreatedAt = "created_at",
	/** column name */
	EmitData = "emit_data",
	/** column name */
	EmitMethod = "emit_method",
	/** column name */
	EmitSection = "emit_section",
	/** column name */
	ExtrinsicId = "extrinsic_id",
	/** column name */
	Id = "id",
	/** column name */
	Index = "index",
	/** column name */
	Phase = "phase",
}

export type App_Events_Updates = {
	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: InputMaybe<App_Events_Append_Input>;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: InputMaybe<App_Events_Delete_At_Path_Input>;
	/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
	_delete_elem?: InputMaybe<App_Events_Delete_Elem_Input>;
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: InputMaybe<App_Events_Delete_Key_Input>;
	/** increments the numeric columns with given value of the filtered values */
	_inc?: InputMaybe<App_Events_Inc_Input>;
	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: InputMaybe<App_Events_Prepend_Input>;
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<App_Events_Set_Input>;
	where: App_Events_Bool_Exp;
};

/** aggregate var_pop on columns */
export type App_Events_Var_Pop_Fields = {
	__typename?: "app_events_var_pop_fields";
	index?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "app.events" */
export type App_Events_Var_Pop_Order_By = {
	index?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type App_Events_Var_Samp_Fields = {
	__typename?: "app_events_var_samp_fields";
	index?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "app.events" */
export type App_Events_Var_Samp_Order_By = {
	index?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type App_Events_Variance_Fields = {
	__typename?: "app_events_variance_fields";
	index?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "app.events" */
export type App_Events_Variance_Order_By = {
	index?: InputMaybe<Order_By>;
};

/** columns and relationships of "app.extrinsics" */
export type App_Extrinsics = {
	__typename?: "app_extrinsics";
	/** An object relationship */
	block: App_Blocks;
	block_id: Scalars["String"];
	call_args?: Maybe<Scalars["jsonb"]>;
	call_method: Scalars["String"];
	call_section: Scalars["String"];
	created_at: Scalars["timestamp"];
	/** An array relationship */
	events: Array<App_Events>;
	/** An aggregate relationship */
	events_aggregate: App_Events_Aggregate;
	hash: Scalars["String"];
	id: Scalars["String"];
	index: Scalars["Int"];
	is_signed?: Maybe<Scalars["Boolean"]>;
	is_success?: Maybe<Scalars["Boolean"]>;
	lifetime: Scalars["jsonb"];
	signature?: Maybe<Scalars["String"]>;
	signer?: Maybe<Scalars["String"]>;
	tip?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "app.extrinsics" */
export type App_ExtrinsicsCall_ArgsArgs = {
	path?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "app.extrinsics" */
export type App_ExtrinsicsEventsArgs = {
	distinct_on?: InputMaybe<Array<App_Events_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<App_Events_Order_By>>;
	where?: InputMaybe<App_Events_Bool_Exp>;
};

/** columns and relationships of "app.extrinsics" */
export type App_ExtrinsicsEvents_AggregateArgs = {
	distinct_on?: InputMaybe<Array<App_Events_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<App_Events_Order_By>>;
	where?: InputMaybe<App_Events_Bool_Exp>;
};

/** columns and relationships of "app.extrinsics" */
export type App_ExtrinsicsLifetimeArgs = {
	path?: InputMaybe<Scalars["String"]>;
};

/** aggregated selection of "app.extrinsics" */
export type App_Extrinsics_Aggregate = {
	__typename?: "app_extrinsics_aggregate";
	aggregate?: Maybe<App_Extrinsics_Aggregate_Fields>;
	nodes: Array<App_Extrinsics>;
};

/** aggregate fields of "app.extrinsics" */
export type App_Extrinsics_Aggregate_Fields = {
	__typename?: "app_extrinsics_aggregate_fields";
	avg?: Maybe<App_Extrinsics_Avg_Fields>;
	count: Scalars["Int"];
	max?: Maybe<App_Extrinsics_Max_Fields>;
	min?: Maybe<App_Extrinsics_Min_Fields>;
	stddev?: Maybe<App_Extrinsics_Stddev_Fields>;
	stddev_pop?: Maybe<App_Extrinsics_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<App_Extrinsics_Stddev_Samp_Fields>;
	sum?: Maybe<App_Extrinsics_Sum_Fields>;
	var_pop?: Maybe<App_Extrinsics_Var_Pop_Fields>;
	var_samp?: Maybe<App_Extrinsics_Var_Samp_Fields>;
	variance?: Maybe<App_Extrinsics_Variance_Fields>;
};

/** aggregate fields of "app.extrinsics" */
export type App_Extrinsics_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<App_Extrinsics_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "app.extrinsics" */
export type App_Extrinsics_Aggregate_Order_By = {
	avg?: InputMaybe<App_Extrinsics_Avg_Order_By>;
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<App_Extrinsics_Max_Order_By>;
	min?: InputMaybe<App_Extrinsics_Min_Order_By>;
	stddev?: InputMaybe<App_Extrinsics_Stddev_Order_By>;
	stddev_pop?: InputMaybe<App_Extrinsics_Stddev_Pop_Order_By>;
	stddev_samp?: InputMaybe<App_Extrinsics_Stddev_Samp_Order_By>;
	sum?: InputMaybe<App_Extrinsics_Sum_Order_By>;
	var_pop?: InputMaybe<App_Extrinsics_Var_Pop_Order_By>;
	var_samp?: InputMaybe<App_Extrinsics_Var_Samp_Order_By>;
	variance?: InputMaybe<App_Extrinsics_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type App_Extrinsics_Append_Input = {
	call_args?: InputMaybe<Scalars["jsonb"]>;
	lifetime?: InputMaybe<Scalars["jsonb"]>;
};

/** input type for inserting array relation for remote table "app.extrinsics" */
export type App_Extrinsics_Arr_Rel_Insert_Input = {
	data: Array<App_Extrinsics_Insert_Input>;
	/** upsert condition */
	on_conflict?: InputMaybe<App_Extrinsics_On_Conflict>;
};

/** aggregate avg on columns */
export type App_Extrinsics_Avg_Fields = {
	__typename?: "app_extrinsics_avg_fields";
	index?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "app.extrinsics" */
export type App_Extrinsics_Avg_Order_By = {
	index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "app.extrinsics". All fields are combined with a logical 'AND'. */
export type App_Extrinsics_Bool_Exp = {
	_and?: InputMaybe<Array<App_Extrinsics_Bool_Exp>>;
	_not?: InputMaybe<App_Extrinsics_Bool_Exp>;
	_or?: InputMaybe<Array<App_Extrinsics_Bool_Exp>>;
	block?: InputMaybe<App_Blocks_Bool_Exp>;
	block_id?: InputMaybe<String_Comparison_Exp>;
	call_args?: InputMaybe<Jsonb_Comparison_Exp>;
	call_method?: InputMaybe<String_Comparison_Exp>;
	call_section?: InputMaybe<String_Comparison_Exp>;
	created_at?: InputMaybe<Timestamp_Comparison_Exp>;
	events?: InputMaybe<App_Events_Bool_Exp>;
	hash?: InputMaybe<String_Comparison_Exp>;
	id?: InputMaybe<String_Comparison_Exp>;
	index?: InputMaybe<Int_Comparison_Exp>;
	is_signed?: InputMaybe<Boolean_Comparison_Exp>;
	is_success?: InputMaybe<Boolean_Comparison_Exp>;
	lifetime?: InputMaybe<Jsonb_Comparison_Exp>;
	signature?: InputMaybe<String_Comparison_Exp>;
	signer?: InputMaybe<String_Comparison_Exp>;
	tip?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "app.extrinsics" */
export enum App_Extrinsics_Constraint {
	/** unique or primary key constraint on columns "id" */
	ExtrinsicsPkey = "extrinsics_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type App_Extrinsics_Delete_At_Path_Input = {
	call_args?: InputMaybe<Array<Scalars["String"]>>;
	lifetime?: InputMaybe<Array<Scalars["String"]>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type App_Extrinsics_Delete_Elem_Input = {
	call_args?: InputMaybe<Scalars["Int"]>;
	lifetime?: InputMaybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type App_Extrinsics_Delete_Key_Input = {
	call_args?: InputMaybe<Scalars["String"]>;
	lifetime?: InputMaybe<Scalars["String"]>;
};

/** input type for incrementing numeric columns in table "app.extrinsics" */
export type App_Extrinsics_Inc_Input = {
	index?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "app.extrinsics" */
export type App_Extrinsics_Insert_Input = {
	block?: InputMaybe<App_Blocks_Obj_Rel_Insert_Input>;
	block_id?: InputMaybe<Scalars["String"]>;
	call_args?: InputMaybe<Scalars["jsonb"]>;
	call_method?: InputMaybe<Scalars["String"]>;
	call_section?: InputMaybe<Scalars["String"]>;
	created_at?: InputMaybe<Scalars["timestamp"]>;
	events?: InputMaybe<App_Events_Arr_Rel_Insert_Input>;
	hash?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	index?: InputMaybe<Scalars["Int"]>;
	is_signed?: InputMaybe<Scalars["Boolean"]>;
	is_success?: InputMaybe<Scalars["Boolean"]>;
	lifetime?: InputMaybe<Scalars["jsonb"]>;
	signature?: InputMaybe<Scalars["String"]>;
	signer?: InputMaybe<Scalars["String"]>;
	tip?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type App_Extrinsics_Max_Fields = {
	__typename?: "app_extrinsics_max_fields";
	block_id?: Maybe<Scalars["String"]>;
	call_method?: Maybe<Scalars["String"]>;
	call_section?: Maybe<Scalars["String"]>;
	created_at?: Maybe<Scalars["timestamp"]>;
	hash?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	index?: Maybe<Scalars["Int"]>;
	signature?: Maybe<Scalars["String"]>;
	signer?: Maybe<Scalars["String"]>;
	tip?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "app.extrinsics" */
export type App_Extrinsics_Max_Order_By = {
	block_id?: InputMaybe<Order_By>;
	call_method?: InputMaybe<Order_By>;
	call_section?: InputMaybe<Order_By>;
	created_at?: InputMaybe<Order_By>;
	hash?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	index?: InputMaybe<Order_By>;
	signature?: InputMaybe<Order_By>;
	signer?: InputMaybe<Order_By>;
	tip?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type App_Extrinsics_Min_Fields = {
	__typename?: "app_extrinsics_min_fields";
	block_id?: Maybe<Scalars["String"]>;
	call_method?: Maybe<Scalars["String"]>;
	call_section?: Maybe<Scalars["String"]>;
	created_at?: Maybe<Scalars["timestamp"]>;
	hash?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	index?: Maybe<Scalars["Int"]>;
	signature?: Maybe<Scalars["String"]>;
	signer?: Maybe<Scalars["String"]>;
	tip?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "app.extrinsics" */
export type App_Extrinsics_Min_Order_By = {
	block_id?: InputMaybe<Order_By>;
	call_method?: InputMaybe<Order_By>;
	call_section?: InputMaybe<Order_By>;
	created_at?: InputMaybe<Order_By>;
	hash?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	index?: InputMaybe<Order_By>;
	signature?: InputMaybe<Order_By>;
	signer?: InputMaybe<Order_By>;
	tip?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "app.extrinsics" */
export type App_Extrinsics_Mutation_Response = {
	__typename?: "app_extrinsics_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<App_Extrinsics>;
};

/** input type for inserting object relation for remote table "app.extrinsics" */
export type App_Extrinsics_Obj_Rel_Insert_Input = {
	data: App_Extrinsics_Insert_Input;
	/** upsert condition */
	on_conflict?: InputMaybe<App_Extrinsics_On_Conflict>;
};

/** on_conflict condition type for table "app.extrinsics" */
export type App_Extrinsics_On_Conflict = {
	constraint: App_Extrinsics_Constraint;
	update_columns?: Array<App_Extrinsics_Update_Column>;
	where?: InputMaybe<App_Extrinsics_Bool_Exp>;
};

/** Ordering options when selecting data from "app.extrinsics". */
export type App_Extrinsics_Order_By = {
	block?: InputMaybe<App_Blocks_Order_By>;
	block_id?: InputMaybe<Order_By>;
	call_args?: InputMaybe<Order_By>;
	call_method?: InputMaybe<Order_By>;
	call_section?: InputMaybe<Order_By>;
	created_at?: InputMaybe<Order_By>;
	events_aggregate?: InputMaybe<App_Events_Aggregate_Order_By>;
	hash?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	index?: InputMaybe<Order_By>;
	is_signed?: InputMaybe<Order_By>;
	is_success?: InputMaybe<Order_By>;
	lifetime?: InputMaybe<Order_By>;
	signature?: InputMaybe<Order_By>;
	signer?: InputMaybe<Order_By>;
	tip?: InputMaybe<Order_By>;
};

/** primary key columns input for table: app_extrinsics */
export type App_Extrinsics_Pk_Columns_Input = {
	id: Scalars["String"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type App_Extrinsics_Prepend_Input = {
	call_args?: InputMaybe<Scalars["jsonb"]>;
	lifetime?: InputMaybe<Scalars["jsonb"]>;
};

/** select columns of table "app.extrinsics" */
export enum App_Extrinsics_Select_Column {
	/** column name */
	BlockId = "block_id",
	/** column name */
	CallArgs = "call_args",
	/** column name */
	CallMethod = "call_method",
	/** column name */
	CallSection = "call_section",
	/** column name */
	CreatedAt = "created_at",
	/** column name */
	Hash = "hash",
	/** column name */
	Id = "id",
	/** column name */
	Index = "index",
	/** column name */
	IsSigned = "is_signed",
	/** column name */
	IsSuccess = "is_success",
	/** column name */
	Lifetime = "lifetime",
	/** column name */
	Signature = "signature",
	/** column name */
	Signer = "signer",
	/** column name */
	Tip = "tip",
}

/** input type for updating data in table "app.extrinsics" */
export type App_Extrinsics_Set_Input = {
	block_id?: InputMaybe<Scalars["String"]>;
	call_args?: InputMaybe<Scalars["jsonb"]>;
	call_method?: InputMaybe<Scalars["String"]>;
	call_section?: InputMaybe<Scalars["String"]>;
	created_at?: InputMaybe<Scalars["timestamp"]>;
	hash?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	index?: InputMaybe<Scalars["Int"]>;
	is_signed?: InputMaybe<Scalars["Boolean"]>;
	is_success?: InputMaybe<Scalars["Boolean"]>;
	lifetime?: InputMaybe<Scalars["jsonb"]>;
	signature?: InputMaybe<Scalars["String"]>;
	signer?: InputMaybe<Scalars["String"]>;
	tip?: InputMaybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type App_Extrinsics_Stddev_Fields = {
	__typename?: "app_extrinsics_stddev_fields";
	index?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "app.extrinsics" */
export type App_Extrinsics_Stddev_Order_By = {
	index?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type App_Extrinsics_Stddev_Pop_Fields = {
	__typename?: "app_extrinsics_stddev_pop_fields";
	index?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "app.extrinsics" */
export type App_Extrinsics_Stddev_Pop_Order_By = {
	index?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type App_Extrinsics_Stddev_Samp_Fields = {
	__typename?: "app_extrinsics_stddev_samp_fields";
	index?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "app.extrinsics" */
export type App_Extrinsics_Stddev_Samp_Order_By = {
	index?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type App_Extrinsics_Sum_Fields = {
	__typename?: "app_extrinsics_sum_fields";
	index?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "app.extrinsics" */
export type App_Extrinsics_Sum_Order_By = {
	index?: InputMaybe<Order_By>;
};

/** update columns of table "app.extrinsics" */
export enum App_Extrinsics_Update_Column {
	/** column name */
	BlockId = "block_id",
	/** column name */
	CallArgs = "call_args",
	/** column name */
	CallMethod = "call_method",
	/** column name */
	CallSection = "call_section",
	/** column name */
	CreatedAt = "created_at",
	/** column name */
	Hash = "hash",
	/** column name */
	Id = "id",
	/** column name */
	Index = "index",
	/** column name */
	IsSigned = "is_signed",
	/** column name */
	IsSuccess = "is_success",
	/** column name */
	Lifetime = "lifetime",
	/** column name */
	Signature = "signature",
	/** column name */
	Signer = "signer",
	/** column name */
	Tip = "tip",
}

export type App_Extrinsics_Updates = {
	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: InputMaybe<App_Extrinsics_Append_Input>;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: InputMaybe<App_Extrinsics_Delete_At_Path_Input>;
	/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
	_delete_elem?: InputMaybe<App_Extrinsics_Delete_Elem_Input>;
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: InputMaybe<App_Extrinsics_Delete_Key_Input>;
	/** increments the numeric columns with given value of the filtered values */
	_inc?: InputMaybe<App_Extrinsics_Inc_Input>;
	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: InputMaybe<App_Extrinsics_Prepend_Input>;
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<App_Extrinsics_Set_Input>;
	where: App_Extrinsics_Bool_Exp;
};

/** aggregate var_pop on columns */
export type App_Extrinsics_Var_Pop_Fields = {
	__typename?: "app_extrinsics_var_pop_fields";
	index?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "app.extrinsics" */
export type App_Extrinsics_Var_Pop_Order_By = {
	index?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type App_Extrinsics_Var_Samp_Fields = {
	__typename?: "app_extrinsics_var_samp_fields";
	index?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "app.extrinsics" */
export type App_Extrinsics_Var_Samp_Order_By = {
	index?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type App_Extrinsics_Variance_Fields = {
	__typename?: "app_extrinsics_variance_fields";
	index?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "app.extrinsics" */
export type App_Extrinsics_Variance_Order_By = {
	index?: InputMaybe<Order_By>;
};

/** columns and relationships of "app.logs" */
export type App_Logs = {
	__typename?: "app_logs";
	/** An object relationship */
	block: App_Blocks;
	block_id: Scalars["String"];
	created_at: Scalars["timestamp"];
	data?: Maybe<Scalars["String"]>;
	digest: Scalars["String"];
	engine?: Maybe<Scalars["String"]>;
	id: Scalars["String"];
	index: Scalars["Int"];
	type: Scalars["String"];
};

/** aggregated selection of "app.logs" */
export type App_Logs_Aggregate = {
	__typename?: "app_logs_aggregate";
	aggregate?: Maybe<App_Logs_Aggregate_Fields>;
	nodes: Array<App_Logs>;
};

/** aggregate fields of "app.logs" */
export type App_Logs_Aggregate_Fields = {
	__typename?: "app_logs_aggregate_fields";
	avg?: Maybe<App_Logs_Avg_Fields>;
	count: Scalars["Int"];
	max?: Maybe<App_Logs_Max_Fields>;
	min?: Maybe<App_Logs_Min_Fields>;
	stddev?: Maybe<App_Logs_Stddev_Fields>;
	stddev_pop?: Maybe<App_Logs_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<App_Logs_Stddev_Samp_Fields>;
	sum?: Maybe<App_Logs_Sum_Fields>;
	var_pop?: Maybe<App_Logs_Var_Pop_Fields>;
	var_samp?: Maybe<App_Logs_Var_Samp_Fields>;
	variance?: Maybe<App_Logs_Variance_Fields>;
};

/** aggregate fields of "app.logs" */
export type App_Logs_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<App_Logs_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "app.logs" */
export type App_Logs_Aggregate_Order_By = {
	avg?: InputMaybe<App_Logs_Avg_Order_By>;
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<App_Logs_Max_Order_By>;
	min?: InputMaybe<App_Logs_Min_Order_By>;
	stddev?: InputMaybe<App_Logs_Stddev_Order_By>;
	stddev_pop?: InputMaybe<App_Logs_Stddev_Pop_Order_By>;
	stddev_samp?: InputMaybe<App_Logs_Stddev_Samp_Order_By>;
	sum?: InputMaybe<App_Logs_Sum_Order_By>;
	var_pop?: InputMaybe<App_Logs_Var_Pop_Order_By>;
	var_samp?: InputMaybe<App_Logs_Var_Samp_Order_By>;
	variance?: InputMaybe<App_Logs_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "app.logs" */
export type App_Logs_Arr_Rel_Insert_Input = {
	data: Array<App_Logs_Insert_Input>;
	/** upsert condition */
	on_conflict?: InputMaybe<App_Logs_On_Conflict>;
};

/** aggregate avg on columns */
export type App_Logs_Avg_Fields = {
	__typename?: "app_logs_avg_fields";
	index?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "app.logs" */
export type App_Logs_Avg_Order_By = {
	index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "app.logs". All fields are combined with a logical 'AND'. */
export type App_Logs_Bool_Exp = {
	_and?: InputMaybe<Array<App_Logs_Bool_Exp>>;
	_not?: InputMaybe<App_Logs_Bool_Exp>;
	_or?: InputMaybe<Array<App_Logs_Bool_Exp>>;
	block?: InputMaybe<App_Blocks_Bool_Exp>;
	block_id?: InputMaybe<String_Comparison_Exp>;
	created_at?: InputMaybe<Timestamp_Comparison_Exp>;
	data?: InputMaybe<String_Comparison_Exp>;
	digest?: InputMaybe<String_Comparison_Exp>;
	engine?: InputMaybe<String_Comparison_Exp>;
	id?: InputMaybe<String_Comparison_Exp>;
	index?: InputMaybe<Int_Comparison_Exp>;
	type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "app.logs" */
export enum App_Logs_Constraint {
	/** unique or primary key constraint on columns "id" */
	LogsPkey = "logs_pkey",
}

/** input type for incrementing numeric columns in table "app.logs" */
export type App_Logs_Inc_Input = {
	index?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "app.logs" */
export type App_Logs_Insert_Input = {
	block?: InputMaybe<App_Blocks_Obj_Rel_Insert_Input>;
	block_id?: InputMaybe<Scalars["String"]>;
	created_at?: InputMaybe<Scalars["timestamp"]>;
	data?: InputMaybe<Scalars["String"]>;
	digest?: InputMaybe<Scalars["String"]>;
	engine?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	index?: InputMaybe<Scalars["Int"]>;
	type?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type App_Logs_Max_Fields = {
	__typename?: "app_logs_max_fields";
	block_id?: Maybe<Scalars["String"]>;
	created_at?: Maybe<Scalars["timestamp"]>;
	data?: Maybe<Scalars["String"]>;
	digest?: Maybe<Scalars["String"]>;
	engine?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	index?: Maybe<Scalars["Int"]>;
	type?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "app.logs" */
export type App_Logs_Max_Order_By = {
	block_id?: InputMaybe<Order_By>;
	created_at?: InputMaybe<Order_By>;
	data?: InputMaybe<Order_By>;
	digest?: InputMaybe<Order_By>;
	engine?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	index?: InputMaybe<Order_By>;
	type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type App_Logs_Min_Fields = {
	__typename?: "app_logs_min_fields";
	block_id?: Maybe<Scalars["String"]>;
	created_at?: Maybe<Scalars["timestamp"]>;
	data?: Maybe<Scalars["String"]>;
	digest?: Maybe<Scalars["String"]>;
	engine?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["String"]>;
	index?: Maybe<Scalars["Int"]>;
	type?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "app.logs" */
export type App_Logs_Min_Order_By = {
	block_id?: InputMaybe<Order_By>;
	created_at?: InputMaybe<Order_By>;
	data?: InputMaybe<Order_By>;
	digest?: InputMaybe<Order_By>;
	engine?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	index?: InputMaybe<Order_By>;
	type?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "app.logs" */
export type App_Logs_Mutation_Response = {
	__typename?: "app_logs_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<App_Logs>;
};

/** on_conflict condition type for table "app.logs" */
export type App_Logs_On_Conflict = {
	constraint: App_Logs_Constraint;
	update_columns?: Array<App_Logs_Update_Column>;
	where?: InputMaybe<App_Logs_Bool_Exp>;
};

/** Ordering options when selecting data from "app.logs". */
export type App_Logs_Order_By = {
	block?: InputMaybe<App_Blocks_Order_By>;
	block_id?: InputMaybe<Order_By>;
	created_at?: InputMaybe<Order_By>;
	data?: InputMaybe<Order_By>;
	digest?: InputMaybe<Order_By>;
	engine?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	index?: InputMaybe<Order_By>;
	type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: app_logs */
export type App_Logs_Pk_Columns_Input = {
	id: Scalars["String"];
};

/** select columns of table "app.logs" */
export enum App_Logs_Select_Column {
	/** column name */
	BlockId = "block_id",
	/** column name */
	CreatedAt = "created_at",
	/** column name */
	Data = "data",
	/** column name */
	Digest = "digest",
	/** column name */
	Engine = "engine",
	/** column name */
	Id = "id",
	/** column name */
	Index = "index",
	/** column name */
	Type = "type",
}

/** input type for updating data in table "app.logs" */
export type App_Logs_Set_Input = {
	block_id?: InputMaybe<Scalars["String"]>;
	created_at?: InputMaybe<Scalars["timestamp"]>;
	data?: InputMaybe<Scalars["String"]>;
	digest?: InputMaybe<Scalars["String"]>;
	engine?: InputMaybe<Scalars["String"]>;
	id?: InputMaybe<Scalars["String"]>;
	index?: InputMaybe<Scalars["Int"]>;
	type?: InputMaybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type App_Logs_Stddev_Fields = {
	__typename?: "app_logs_stddev_fields";
	index?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "app.logs" */
export type App_Logs_Stddev_Order_By = {
	index?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type App_Logs_Stddev_Pop_Fields = {
	__typename?: "app_logs_stddev_pop_fields";
	index?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "app.logs" */
export type App_Logs_Stddev_Pop_Order_By = {
	index?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type App_Logs_Stddev_Samp_Fields = {
	__typename?: "app_logs_stddev_samp_fields";
	index?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "app.logs" */
export type App_Logs_Stddev_Samp_Order_By = {
	index?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type App_Logs_Sum_Fields = {
	__typename?: "app_logs_sum_fields";
	index?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "app.logs" */
export type App_Logs_Sum_Order_By = {
	index?: InputMaybe<Order_By>;
};

/** update columns of table "app.logs" */
export enum App_Logs_Update_Column {
	/** column name */
	BlockId = "block_id",
	/** column name */
	CreatedAt = "created_at",
	/** column name */
	Data = "data",
	/** column name */
	Digest = "digest",
	/** column name */
	Engine = "engine",
	/** column name */
	Id = "id",
	/** column name */
	Index = "index",
	/** column name */
	Type = "type",
}

export type App_Logs_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	_inc?: InputMaybe<App_Logs_Inc_Input>;
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<App_Logs_Set_Input>;
	where: App_Logs_Bool_Exp;
};

/** aggregate var_pop on columns */
export type App_Logs_Var_Pop_Fields = {
	__typename?: "app_logs_var_pop_fields";
	index?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "app.logs" */
export type App_Logs_Var_Pop_Order_By = {
	index?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type App_Logs_Var_Samp_Fields = {
	__typename?: "app_logs_var_samp_fields";
	index?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "app.logs" */
export type App_Logs_Var_Samp_Order_By = {
	index?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type App_Logs_Variance_Fields = {
	__typename?: "app_logs_variance_fields";
	index?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "app.logs" */
export type App_Logs_Variance_Order_By = {
	index?: InputMaybe<Order_By>;
};

export type Jsonb_Cast_Exp = {
	String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
	_cast?: InputMaybe<Jsonb_Cast_Exp>;
	/** is the column contained in the given json value */
	_contained_in?: InputMaybe<Scalars["jsonb"]>;
	/** does the column contain the given json value at the top level */
	_contains?: InputMaybe<Scalars["jsonb"]>;
	_eq?: InputMaybe<Scalars["jsonb"]>;
	_gt?: InputMaybe<Scalars["jsonb"]>;
	_gte?: InputMaybe<Scalars["jsonb"]>;
	/** does the string exist as a top-level key in the column */
	_has_key?: InputMaybe<Scalars["String"]>;
	/** do all of these strings exist as top-level keys in the column */
	_has_keys_all?: InputMaybe<Array<Scalars["String"]>>;
	/** do any of these strings exist as top-level keys in the column */
	_has_keys_any?: InputMaybe<Array<Scalars["String"]>>;
	_in?: InputMaybe<Array<Scalars["jsonb"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]>;
	_lt?: InputMaybe<Scalars["jsonb"]>;
	_lte?: InputMaybe<Scalars["jsonb"]>;
	_neq?: InputMaybe<Scalars["jsonb"]>;
	_nin?: InputMaybe<Array<Scalars["jsonb"]>>;
};

/** mutation root */
export type Mutation_Root = {
	__typename?: "mutation_root";
	/** delete data from the table: "app._metadata" */
	delete_app__metadata?: Maybe<App__Metadata_Mutation_Response>;
	/** delete single row from the table: "app._metadata" */
	delete_app__metadata_by_pk?: Maybe<App__Metadata>;
	/** delete data from the table: "app.blocks" */
	delete_app_blocks?: Maybe<App_Blocks_Mutation_Response>;
	/** delete single row from the table: "app.blocks" */
	delete_app_blocks_by_pk?: Maybe<App_Blocks>;
	/** delete data from the table: "app.events" */
	delete_app_events?: Maybe<App_Events_Mutation_Response>;
	/** delete single row from the table: "app.events" */
	delete_app_events_by_pk?: Maybe<App_Events>;
	/** delete data from the table: "app.extrinsics" */
	delete_app_extrinsics?: Maybe<App_Extrinsics_Mutation_Response>;
	/** delete single row from the table: "app.extrinsics" */
	delete_app_extrinsics_by_pk?: Maybe<App_Extrinsics>;
	/** delete data from the table: "app.logs" */
	delete_app_logs?: Maybe<App_Logs_Mutation_Response>;
	/** delete single row from the table: "app.logs" */
	delete_app_logs_by_pk?: Maybe<App_Logs>;
	/** insert data into the table: "app._metadata" */
	insert_app__metadata?: Maybe<App__Metadata_Mutation_Response>;
	/** insert a single row into the table: "app._metadata" */
	insert_app__metadata_one?: Maybe<App__Metadata>;
	/** insert data into the table: "app.blocks" */
	insert_app_blocks?: Maybe<App_Blocks_Mutation_Response>;
	/** insert a single row into the table: "app.blocks" */
	insert_app_blocks_one?: Maybe<App_Blocks>;
	/** insert data into the table: "app.events" */
	insert_app_events?: Maybe<App_Events_Mutation_Response>;
	/** insert a single row into the table: "app.events" */
	insert_app_events_one?: Maybe<App_Events>;
	/** insert data into the table: "app.extrinsics" */
	insert_app_extrinsics?: Maybe<App_Extrinsics_Mutation_Response>;
	/** insert a single row into the table: "app.extrinsics" */
	insert_app_extrinsics_one?: Maybe<App_Extrinsics>;
	/** insert data into the table: "app.logs" */
	insert_app_logs?: Maybe<App_Logs_Mutation_Response>;
	/** insert a single row into the table: "app.logs" */
	insert_app_logs_one?: Maybe<App_Logs>;
	/** update data of the table: "app._metadata" */
	update_app__metadata?: Maybe<App__Metadata_Mutation_Response>;
	/** update single row of the table: "app._metadata" */
	update_app__metadata_by_pk?: Maybe<App__Metadata>;
	/** update multiples rows of table: "app._metadata" */
	update_app__metadata_many?: Maybe<
		Array<Maybe<App__Metadata_Mutation_Response>>
	>;
	/** update data of the table: "app.blocks" */
	update_app_blocks?: Maybe<App_Blocks_Mutation_Response>;
	/** update single row of the table: "app.blocks" */
	update_app_blocks_by_pk?: Maybe<App_Blocks>;
	/** update multiples rows of table: "app.blocks" */
	update_app_blocks_many?: Maybe<Array<Maybe<App_Blocks_Mutation_Response>>>;
	/** update data of the table: "app.events" */
	update_app_events?: Maybe<App_Events_Mutation_Response>;
	/** update single row of the table: "app.events" */
	update_app_events_by_pk?: Maybe<App_Events>;
	/** update multiples rows of table: "app.events" */
	update_app_events_many?: Maybe<Array<Maybe<App_Events_Mutation_Response>>>;
	/** update data of the table: "app.extrinsics" */
	update_app_extrinsics?: Maybe<App_Extrinsics_Mutation_Response>;
	/** update single row of the table: "app.extrinsics" */
	update_app_extrinsics_by_pk?: Maybe<App_Extrinsics>;
	/** update multiples rows of table: "app.extrinsics" */
	update_app_extrinsics_many?: Maybe<
		Array<Maybe<App_Extrinsics_Mutation_Response>>
	>;
	/** update data of the table: "app.logs" */
	update_app_logs?: Maybe<App_Logs_Mutation_Response>;
	/** update single row of the table: "app.logs" */
	update_app_logs_by_pk?: Maybe<App_Logs>;
	/** update multiples rows of table: "app.logs" */
	update_app_logs_many?: Maybe<Array<Maybe<App_Logs_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_App__MetadataArgs = {
	where: App__Metadata_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_App__Metadata_By_PkArgs = {
	key: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_App_BlocksArgs = {
	where: App_Blocks_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_App_Blocks_By_PkArgs = {
	id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_App_EventsArgs = {
	where: App_Events_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_App_Events_By_PkArgs = {
	id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_App_ExtrinsicsArgs = {
	where: App_Extrinsics_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_App_Extrinsics_By_PkArgs = {
	id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_App_LogsArgs = {
	where: App_Logs_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_App_Logs_By_PkArgs = {
	id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootInsert_App__MetadataArgs = {
	objects: Array<App__Metadata_Insert_Input>;
	on_conflict?: InputMaybe<App__Metadata_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_App__Metadata_OneArgs = {
	object: App__Metadata_Insert_Input;
	on_conflict?: InputMaybe<App__Metadata_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_App_BlocksArgs = {
	objects: Array<App_Blocks_Insert_Input>;
	on_conflict?: InputMaybe<App_Blocks_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_App_Blocks_OneArgs = {
	object: App_Blocks_Insert_Input;
	on_conflict?: InputMaybe<App_Blocks_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_App_EventsArgs = {
	objects: Array<App_Events_Insert_Input>;
	on_conflict?: InputMaybe<App_Events_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_App_Events_OneArgs = {
	object: App_Events_Insert_Input;
	on_conflict?: InputMaybe<App_Events_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_App_ExtrinsicsArgs = {
	objects: Array<App_Extrinsics_Insert_Input>;
	on_conflict?: InputMaybe<App_Extrinsics_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_App_Extrinsics_OneArgs = {
	object: App_Extrinsics_Insert_Input;
	on_conflict?: InputMaybe<App_Extrinsics_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_App_LogsArgs = {
	objects: Array<App_Logs_Insert_Input>;
	on_conflict?: InputMaybe<App_Logs_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_App_Logs_OneArgs = {
	object: App_Logs_Insert_Input;
	on_conflict?: InputMaybe<App_Logs_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_App__MetadataArgs = {
	_append?: InputMaybe<App__Metadata_Append_Input>;
	_delete_at_path?: InputMaybe<App__Metadata_Delete_At_Path_Input>;
	_delete_elem?: InputMaybe<App__Metadata_Delete_Elem_Input>;
	_delete_key?: InputMaybe<App__Metadata_Delete_Key_Input>;
	_prepend?: InputMaybe<App__Metadata_Prepend_Input>;
	_set?: InputMaybe<App__Metadata_Set_Input>;
	where: App__Metadata_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_App__Metadata_By_PkArgs = {
	_append?: InputMaybe<App__Metadata_Append_Input>;
	_delete_at_path?: InputMaybe<App__Metadata_Delete_At_Path_Input>;
	_delete_elem?: InputMaybe<App__Metadata_Delete_Elem_Input>;
	_delete_key?: InputMaybe<App__Metadata_Delete_Key_Input>;
	_prepend?: InputMaybe<App__Metadata_Prepend_Input>;
	_set?: InputMaybe<App__Metadata_Set_Input>;
	pk_columns: App__Metadata_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_App__Metadata_ManyArgs = {
	updates: Array<App__Metadata_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_App_BlocksArgs = {
	_inc?: InputMaybe<App_Blocks_Inc_Input>;
	_set?: InputMaybe<App_Blocks_Set_Input>;
	where: App_Blocks_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_App_Blocks_By_PkArgs = {
	_inc?: InputMaybe<App_Blocks_Inc_Input>;
	_set?: InputMaybe<App_Blocks_Set_Input>;
	pk_columns: App_Blocks_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_App_Blocks_ManyArgs = {
	updates: Array<App_Blocks_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_App_EventsArgs = {
	_append?: InputMaybe<App_Events_Append_Input>;
	_delete_at_path?: InputMaybe<App_Events_Delete_At_Path_Input>;
	_delete_elem?: InputMaybe<App_Events_Delete_Elem_Input>;
	_delete_key?: InputMaybe<App_Events_Delete_Key_Input>;
	_inc?: InputMaybe<App_Events_Inc_Input>;
	_prepend?: InputMaybe<App_Events_Prepend_Input>;
	_set?: InputMaybe<App_Events_Set_Input>;
	where: App_Events_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_App_Events_By_PkArgs = {
	_append?: InputMaybe<App_Events_Append_Input>;
	_delete_at_path?: InputMaybe<App_Events_Delete_At_Path_Input>;
	_delete_elem?: InputMaybe<App_Events_Delete_Elem_Input>;
	_delete_key?: InputMaybe<App_Events_Delete_Key_Input>;
	_inc?: InputMaybe<App_Events_Inc_Input>;
	_prepend?: InputMaybe<App_Events_Prepend_Input>;
	_set?: InputMaybe<App_Events_Set_Input>;
	pk_columns: App_Events_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_App_Events_ManyArgs = {
	updates: Array<App_Events_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_App_ExtrinsicsArgs = {
	_append?: InputMaybe<App_Extrinsics_Append_Input>;
	_delete_at_path?: InputMaybe<App_Extrinsics_Delete_At_Path_Input>;
	_delete_elem?: InputMaybe<App_Extrinsics_Delete_Elem_Input>;
	_delete_key?: InputMaybe<App_Extrinsics_Delete_Key_Input>;
	_inc?: InputMaybe<App_Extrinsics_Inc_Input>;
	_prepend?: InputMaybe<App_Extrinsics_Prepend_Input>;
	_set?: InputMaybe<App_Extrinsics_Set_Input>;
	where: App_Extrinsics_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_App_Extrinsics_By_PkArgs = {
	_append?: InputMaybe<App_Extrinsics_Append_Input>;
	_delete_at_path?: InputMaybe<App_Extrinsics_Delete_At_Path_Input>;
	_delete_elem?: InputMaybe<App_Extrinsics_Delete_Elem_Input>;
	_delete_key?: InputMaybe<App_Extrinsics_Delete_Key_Input>;
	_inc?: InputMaybe<App_Extrinsics_Inc_Input>;
	_prepend?: InputMaybe<App_Extrinsics_Prepend_Input>;
	_set?: InputMaybe<App_Extrinsics_Set_Input>;
	pk_columns: App_Extrinsics_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_App_Extrinsics_ManyArgs = {
	updates: Array<App_Extrinsics_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_App_LogsArgs = {
	_inc?: InputMaybe<App_Logs_Inc_Input>;
	_set?: InputMaybe<App_Logs_Set_Input>;
	where: App_Logs_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_App_Logs_By_PkArgs = {
	_inc?: InputMaybe<App_Logs_Inc_Input>;
	_set?: InputMaybe<App_Logs_Set_Input>;
	pk_columns: App_Logs_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_App_Logs_ManyArgs = {
	updates: Array<App_Logs_Updates>;
};

/** column ordering options */
export enum Order_By {
	/** in ascending order, nulls last */
	Asc = "asc",
	/** in ascending order, nulls first */
	AscNullsFirst = "asc_nulls_first",
	/** in ascending order, nulls last */
	AscNullsLast = "asc_nulls_last",
	/** in descending order, nulls first */
	Desc = "desc",
	/** in descending order, nulls first */
	DescNullsFirst = "desc_nulls_first",
	/** in descending order, nulls last */
	DescNullsLast = "desc_nulls_last",
}

export type Query_Root = {
	__typename?: "query_root";
	/** fetch data from the table: "app._metadata" */
	app__metadata: Array<App__Metadata>;
	/** fetch aggregated fields from the table: "app._metadata" */
	app__metadata_aggregate: App__Metadata_Aggregate;
	/** fetch data from the table: "app._metadata" using primary key columns */
	app__metadata_by_pk?: Maybe<App__Metadata>;
	/** fetch data from the table: "app.blocks" */
	app_blocks: Array<App_Blocks>;
	/** fetch aggregated fields from the table: "app.blocks" */
	app_blocks_aggregate: App_Blocks_Aggregate;
	/** fetch data from the table: "app.blocks" using primary key columns */
	app_blocks_by_pk?: Maybe<App_Blocks>;
	/** fetch data from the table: "app.events" */
	app_events: Array<App_Events>;
	/** fetch aggregated fields from the table: "app.events" */
	app_events_aggregate: App_Events_Aggregate;
	/** fetch data from the table: "app.events" using primary key columns */
	app_events_by_pk?: Maybe<App_Events>;
	/** fetch data from the table: "app.extrinsics" */
	app_extrinsics: Array<App_Extrinsics>;
	/** fetch aggregated fields from the table: "app.extrinsics" */
	app_extrinsics_aggregate: App_Extrinsics_Aggregate;
	/** fetch data from the table: "app.extrinsics" using primary key columns */
	app_extrinsics_by_pk?: Maybe<App_Extrinsics>;
	/** fetch data from the table: "app.logs" */
	app_logs: Array<App_Logs>;
	/** fetch aggregated fields from the table: "app.logs" */
	app_logs_aggregate: App_Logs_Aggregate;
	/** fetch data from the table: "app.logs" using primary key columns */
	app_logs_by_pk?: Maybe<App_Logs>;
};

export type Query_RootApp__MetadataArgs = {
	distinct_on?: InputMaybe<Array<App__Metadata_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<App__Metadata_Order_By>>;
	where?: InputMaybe<App__Metadata_Bool_Exp>;
};

export type Query_RootApp__Metadata_AggregateArgs = {
	distinct_on?: InputMaybe<Array<App__Metadata_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<App__Metadata_Order_By>>;
	where?: InputMaybe<App__Metadata_Bool_Exp>;
};

export type Query_RootApp__Metadata_By_PkArgs = {
	key: Scalars["String"];
};

export type Query_RootApp_BlocksArgs = {
	distinct_on?: InputMaybe<Array<App_Blocks_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<App_Blocks_Order_By>>;
	where?: InputMaybe<App_Blocks_Bool_Exp>;
};

export type Query_RootApp_Blocks_AggregateArgs = {
	distinct_on?: InputMaybe<Array<App_Blocks_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<App_Blocks_Order_By>>;
	where?: InputMaybe<App_Blocks_Bool_Exp>;
};

export type Query_RootApp_Blocks_By_PkArgs = {
	id: Scalars["String"];
};

export type Query_RootApp_EventsArgs = {
	distinct_on?: InputMaybe<Array<App_Events_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<App_Events_Order_By>>;
	where?: InputMaybe<App_Events_Bool_Exp>;
};

export type Query_RootApp_Events_AggregateArgs = {
	distinct_on?: InputMaybe<Array<App_Events_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<App_Events_Order_By>>;
	where?: InputMaybe<App_Events_Bool_Exp>;
};

export type Query_RootApp_Events_By_PkArgs = {
	id: Scalars["String"];
};

export type Query_RootApp_ExtrinsicsArgs = {
	distinct_on?: InputMaybe<Array<App_Extrinsics_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<App_Extrinsics_Order_By>>;
	where?: InputMaybe<App_Extrinsics_Bool_Exp>;
};

export type Query_RootApp_Extrinsics_AggregateArgs = {
	distinct_on?: InputMaybe<Array<App_Extrinsics_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<App_Extrinsics_Order_By>>;
	where?: InputMaybe<App_Extrinsics_Bool_Exp>;
};

export type Query_RootApp_Extrinsics_By_PkArgs = {
	id: Scalars["String"];
};

export type Query_RootApp_LogsArgs = {
	distinct_on?: InputMaybe<Array<App_Logs_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<App_Logs_Order_By>>;
	where?: InputMaybe<App_Logs_Bool_Exp>;
};

export type Query_RootApp_Logs_AggregateArgs = {
	distinct_on?: InputMaybe<Array<App_Logs_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<App_Logs_Order_By>>;
	where?: InputMaybe<App_Logs_Bool_Exp>;
};

export type Query_RootApp_Logs_By_PkArgs = {
	id: Scalars["String"];
};

export type Subscription_Root = {
	__typename?: "subscription_root";
	/** fetch data from the table: "app._metadata" */
	app__metadata: Array<App__Metadata>;
	/** fetch aggregated fields from the table: "app._metadata" */
	app__metadata_aggregate: App__Metadata_Aggregate;
	/** fetch data from the table: "app._metadata" using primary key columns */
	app__metadata_by_pk?: Maybe<App__Metadata>;
	/** fetch data from the table: "app.blocks" */
	app_blocks: Array<App_Blocks>;
	/** fetch aggregated fields from the table: "app.blocks" */
	app_blocks_aggregate: App_Blocks_Aggregate;
	/** fetch data from the table: "app.blocks" using primary key columns */
	app_blocks_by_pk?: Maybe<App_Blocks>;
	/** fetch data from the table: "app.events" */
	app_events: Array<App_Events>;
	/** fetch aggregated fields from the table: "app.events" */
	app_events_aggregate: App_Events_Aggregate;
	/** fetch data from the table: "app.events" using primary key columns */
	app_events_by_pk?: Maybe<App_Events>;
	/** fetch data from the table: "app.extrinsics" */
	app_extrinsics: Array<App_Extrinsics>;
	/** fetch aggregated fields from the table: "app.extrinsics" */
	app_extrinsics_aggregate: App_Extrinsics_Aggregate;
	/** fetch data from the table: "app.extrinsics" using primary key columns */
	app_extrinsics_by_pk?: Maybe<App_Extrinsics>;
	/** fetch data from the table: "app.logs" */
	app_logs: Array<App_Logs>;
	/** fetch aggregated fields from the table: "app.logs" */
	app_logs_aggregate: App_Logs_Aggregate;
	/** fetch data from the table: "app.logs" using primary key columns */
	app_logs_by_pk?: Maybe<App_Logs>;
};

export type Subscription_RootApp__MetadataArgs = {
	distinct_on?: InputMaybe<Array<App__Metadata_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<App__Metadata_Order_By>>;
	where?: InputMaybe<App__Metadata_Bool_Exp>;
};

export type Subscription_RootApp__Metadata_AggregateArgs = {
	distinct_on?: InputMaybe<Array<App__Metadata_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<App__Metadata_Order_By>>;
	where?: InputMaybe<App__Metadata_Bool_Exp>;
};

export type Subscription_RootApp__Metadata_By_PkArgs = {
	key: Scalars["String"];
};

export type Subscription_RootApp_BlocksArgs = {
	distinct_on?: InputMaybe<Array<App_Blocks_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<App_Blocks_Order_By>>;
	where?: InputMaybe<App_Blocks_Bool_Exp>;
};

export type Subscription_RootApp_Blocks_AggregateArgs = {
	distinct_on?: InputMaybe<Array<App_Blocks_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<App_Blocks_Order_By>>;
	where?: InputMaybe<App_Blocks_Bool_Exp>;
};

export type Subscription_RootApp_Blocks_By_PkArgs = {
	id: Scalars["String"];
};

export type Subscription_RootApp_EventsArgs = {
	distinct_on?: InputMaybe<Array<App_Events_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<App_Events_Order_By>>;
	where?: InputMaybe<App_Events_Bool_Exp>;
};

export type Subscription_RootApp_Events_AggregateArgs = {
	distinct_on?: InputMaybe<Array<App_Events_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<App_Events_Order_By>>;
	where?: InputMaybe<App_Events_Bool_Exp>;
};

export type Subscription_RootApp_Events_By_PkArgs = {
	id: Scalars["String"];
};

export type Subscription_RootApp_ExtrinsicsArgs = {
	distinct_on?: InputMaybe<Array<App_Extrinsics_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<App_Extrinsics_Order_By>>;
	where?: InputMaybe<App_Extrinsics_Bool_Exp>;
};

export type Subscription_RootApp_Extrinsics_AggregateArgs = {
	distinct_on?: InputMaybe<Array<App_Extrinsics_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<App_Extrinsics_Order_By>>;
	where?: InputMaybe<App_Extrinsics_Bool_Exp>;
};

export type Subscription_RootApp_Extrinsics_By_PkArgs = {
	id: Scalars["String"];
};

export type Subscription_RootApp_LogsArgs = {
	distinct_on?: InputMaybe<Array<App_Logs_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<App_Logs_Order_By>>;
	where?: InputMaybe<App_Logs_Bool_Exp>;
};

export type Subscription_RootApp_Logs_AggregateArgs = {
	distinct_on?: InputMaybe<Array<App_Logs_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<App_Logs_Order_By>>;
	where?: InputMaybe<App_Logs_Bool_Exp>;
};

export type Subscription_RootApp_Logs_By_PkArgs = {
	id: Scalars["String"];
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["timestamp"]>;
	_gt?: InputMaybe<Scalars["timestamp"]>;
	_gte?: InputMaybe<Scalars["timestamp"]>;
	_in?: InputMaybe<Array<Scalars["timestamp"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]>;
	_lt?: InputMaybe<Scalars["timestamp"]>;
	_lte?: InputMaybe<Scalars["timestamp"]>;
	_neq?: InputMaybe<Scalars["timestamp"]>;
	_nin?: InputMaybe<Array<Scalars["timestamp"]>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["timestamptz"]>;
	_gt?: InputMaybe<Scalars["timestamptz"]>;
	_gte?: InputMaybe<Scalars["timestamptz"]>;
	_in?: InputMaybe<Array<Scalars["timestamptz"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]>;
	_lt?: InputMaybe<Scalars["timestamptz"]>;
	_lte?: InputMaybe<Scalars["timestamptz"]>;
	_neq?: InputMaybe<Scalars["timestamptz"]>;
	_nin?: InputMaybe<Array<Scalars["timestamptz"]>>;
};

export type GetBlocksQueryVariables = Exact<{ [key: string]: never }>;

export type GetBlocksQuery = {
	__typename?: "query_root";
	app_blocks: Array<{
		__typename?: "app_blocks";
		id: string;
		hash: string;
		parent_hash: string;
		created_at: any;
		extrinsics_aggregate: {
			__typename?: "app_extrinsics_aggregate";
			aggregate?: {
				__typename?: "app_extrinsics_aggregate_fields";
				count: number;
			} | null;
		};
	}>;
};

export type GetExtrinsicsQueryVariables = Exact<{ [key: string]: never }>;

export type GetExtrinsicsQuery = {
	__typename?: "query_root";
	app_extrinsics: Array<{
		__typename?: "app_extrinsics";
		id: string;
		hash: string;
		signer?: string | null;
		created_at: any;
		events_aggregate: {
			__typename?: "app_events_aggregate";
			aggregate?: {
				__typename?: "app_events_aggregate_fields";
				count: number;
			} | null;
		};
	}>;
};

export const GetBlocksDocument = `
    query GetBlocks {
  app_blocks(limit: 20, order_by: {created_at: desc}) {
    id
    hash
    parent_hash
    created_at
    extrinsics_aggregate {
      aggregate {
        count
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
export const GetExtrinsicsDocument = `
    query GetExtrinsics {
  app_extrinsics(
    limit: 20
    order_by: {created_at: desc}
    where: {is_signed: {_eq: true}}
  ) {
    id
    hash
    signer
    created_at
    events_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;
export const useGetExtrinsicsQuery = <
	TData = GetExtrinsicsQuery,
	TError = unknown
>(
	client: GraphQLClient,
	variables?: GetExtrinsicsQueryVariables,
	options?: UseQueryOptions<GetExtrinsicsQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetExtrinsicsQuery, TError, TData>(
		variables === undefined ? ["GetExtrinsics"] : ["GetExtrinsics", variables],
		fetcher<GetExtrinsicsQuery, GetExtrinsicsQueryVariables>(
			client,
			GetExtrinsicsDocument,
			variables,
			headers
		),
		options
	);
