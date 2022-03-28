// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from "@ignt/client";
import Module from "@ignt/client/cosmos.auth.v1beta1/module";
		

type QueryAccountsType = typeof Module.prototype.queryAccounts
type QueryAccountType = typeof Module.prototype.queryAccount
type QueryParamsType = typeof Module.prototype.queryParams


type Response = {
  
  queryAccounts: QueryAccountsType
  queryAccount: QueryAccountType
  queryParams: QueryParamsType
  
}

type Params = {
  ignite: Ignite;
}

function useModule({ ignite }: Params): Response {
  let {
	
  
  queryAccounts,
  
  queryAccount,
  
  queryParams,
  
  } = ignite.CosmosAuthV1Beta1

  
  
  
  queryAccounts = queryAccounts.bind(ignite.CosmosAuthV1Beta1)
  
  queryAccount = queryAccount.bind(ignite.CosmosAuthV1Beta1)
  
  queryParams = queryParams.bind(ignite.CosmosAuthV1Beta1)
  

  return {
  
  
  queryAccounts,
  
  queryAccount,
  
  queryParams,
  
  }
}

export { useModule }
