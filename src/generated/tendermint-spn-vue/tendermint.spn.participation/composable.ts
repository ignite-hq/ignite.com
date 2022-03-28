// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from "@ignt/client";
import Module from "@ignt/client/tendermint.spn.participation/module";
		
type SendMsgWithdrawAllocationsType = typeof Module.prototype.sendMsgWithdrawAllocations
type SendMsgParticipateType = typeof Module.prototype.sendMsgParticipate

type QueryParamsType = typeof Module.prototype.queryParams
type QueryUsedAllocationsType = typeof Module.prototype.queryUsedAllocations
type QueryUsedAllocationsAllType = typeof Module.prototype.queryUsedAllocationsAll
type QueryAuctionUsedAllocationsType = typeof Module.prototype.queryAuctionUsedAllocations
type QueryAuctionUsedAllocationsAllType = typeof Module.prototype.queryAuctionUsedAllocationsAll
type QueryTotalAllocationsType = typeof Module.prototype.queryTotalAllocations
type QueryAvailableAllocationsType = typeof Module.prototype.queryAvailableAllocations


type Response = {
  sendMsgWithdrawAllocations: SendMsgWithdrawAllocationsType,
  sendMsgParticipate: SendMsgParticipateType,
  
  queryParams: QueryParamsType
  queryUsedAllocations: QueryUsedAllocationsType
  queryUsedAllocationsAll: QueryUsedAllocationsAllType
  queryAuctionUsedAllocations: QueryAuctionUsedAllocationsType
  queryAuctionUsedAllocationsAll: QueryAuctionUsedAllocationsAllType
  queryTotalAllocations: QueryTotalAllocationsType
  queryAvailableAllocations: QueryAvailableAllocationsType
  
}

type Params = {
  ignite: Ignite;
}

function useModule({ ignite }: Params): Response {
  let {
	
	sendMsgWithdrawAllocations,
  
	sendMsgParticipate,
  
  
  queryParams,
  
  queryUsedAllocations,
  
  queryUsedAllocationsAll,
  
  queryAuctionUsedAllocations,
  
  queryAuctionUsedAllocationsAll,
  
  queryTotalAllocations,
  
  queryAvailableAllocations,
  
  } = ignite.TendermintSpnParticipation

  
  
	sendMsgWithdrawAllocations = sendMsgWithdrawAllocations.bind(ignite.TendermintSpnParticipation)
  
	sendMsgParticipate = sendMsgParticipate.bind(ignite.TendermintSpnParticipation)
  
  
  queryParams = queryParams.bind(ignite.TendermintSpnParticipation)
  
  queryUsedAllocations = queryUsedAllocations.bind(ignite.TendermintSpnParticipation)
  
  queryUsedAllocationsAll = queryUsedAllocationsAll.bind(ignite.TendermintSpnParticipation)
  
  queryAuctionUsedAllocations = queryAuctionUsedAllocations.bind(ignite.TendermintSpnParticipation)
  
  queryAuctionUsedAllocationsAll = queryAuctionUsedAllocationsAll.bind(ignite.TendermintSpnParticipation)
  
  queryTotalAllocations = queryTotalAllocations.bind(ignite.TendermintSpnParticipation)
  
  queryAvailableAllocations = queryAvailableAllocations.bind(ignite.TendermintSpnParticipation)
  

  return {
  
  sendMsgWithdrawAllocations,
  
  sendMsgParticipate,
  
  
  queryParams,
  
  queryUsedAllocations,
  
  queryUsedAllocationsAll,
  
  queryAuctionUsedAllocations,
  
  queryAuctionUsedAllocationsAll,
  
  queryTotalAllocations,
  
  queryAvailableAllocations,
  
  }
}

export { useModule }
