// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from "@ignt/client";
import Module from "@ignt/client/cosmos.bank.v1beta1/module";
		
type SendMsgSendType = typeof Module.prototype.sendMsgSend
type SendMsgMultiSendType = typeof Module.prototype.sendMsgMultiSend

type QueryBalanceType = typeof Module.prototype.queryBalance
type QueryAllBalancesType = typeof Module.prototype.queryAllBalances
type QueryTotalSupplyType = typeof Module.prototype.queryTotalSupply
type QuerySupplyOfType = typeof Module.prototype.querySupplyOf
type QueryParamsType = typeof Module.prototype.queryParams
type QueryDenomMetadataType = typeof Module.prototype.queryDenomMetadata
type QueryDenomsMetadataType = typeof Module.prototype.queryDenomsMetadata


type Response = {
  sendMsgSend: SendMsgSendType,
  sendMsgMultiSend: SendMsgMultiSendType,
  
  queryBalance: QueryBalanceType
  queryAllBalances: QueryAllBalancesType
  queryTotalSupply: QueryTotalSupplyType
  querySupplyOf: QuerySupplyOfType
  queryParams: QueryParamsType
  queryDenomMetadata: QueryDenomMetadataType
  queryDenomsMetadata: QueryDenomsMetadataType
  
}

type Params = {
  ignite: Ignite;
}

function useModule({ ignite }: Params): Response {
  let {
	
	sendMsgSend,
  
	sendMsgMultiSend,
  
  
  queryBalance,
  
  queryAllBalances,
  
  queryTotalSupply,
  
  querySupplyOf,
  
  queryParams,
  
  queryDenomMetadata,
  
  queryDenomsMetadata,
  
  } = ignite.CosmosBankV1Beta1

  
  
	sendMsgSend = sendMsgSend.bind(ignite.CosmosBankV1Beta1)
  
	sendMsgMultiSend = sendMsgMultiSend.bind(ignite.CosmosBankV1Beta1)
  
  
  queryBalance = queryBalance.bind(ignite.CosmosBankV1Beta1)
  
  queryAllBalances = queryAllBalances.bind(ignite.CosmosBankV1Beta1)
  
  queryTotalSupply = queryTotalSupply.bind(ignite.CosmosBankV1Beta1)
  
  querySupplyOf = querySupplyOf.bind(ignite.CosmosBankV1Beta1)
  
  queryParams = queryParams.bind(ignite.CosmosBankV1Beta1)
  
  queryDenomMetadata = queryDenomMetadata.bind(ignite.CosmosBankV1Beta1)
  
  queryDenomsMetadata = queryDenomsMetadata.bind(ignite.CosmosBankV1Beta1)
  

  return {
  
  sendMsgSend,
  
  sendMsgMultiSend,
  
  
  queryBalance,
  
  queryAllBalances,
  
  queryTotalSupply,
  
  querySupplyOf,
  
  queryParams,
  
  queryDenomMetadata,
  
  queryDenomsMetadata,
  
  }
}

export { useModule }
