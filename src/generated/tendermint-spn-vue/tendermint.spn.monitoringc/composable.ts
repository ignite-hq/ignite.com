// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from "@ignt/client";
import Module from "@ignt/client/tendermint.spn.monitoringc/module";
		
type SendMsgCreateClientType = typeof Module.prototype.sendMsgCreateClient

type QueryParamsType = typeof Module.prototype.queryParams
type QueryVerifiedClientIdsType = typeof Module.prototype.queryVerifiedClientIds
type QueryProviderClientIDType = typeof Module.prototype.queryProviderClientID
type QueryProviderClientIDAllType = typeof Module.prototype.queryProviderClientIDAll
type QueryLaunchIDFromChannelIDType = typeof Module.prototype.queryLaunchIDFromChannelID
type QueryLaunchIDFromChannelIDAllType = typeof Module.prototype.queryLaunchIDFromChannelIDAll
type QueryMonitoringHistoryType = typeof Module.prototype.queryMonitoringHistory


type Response = {
  sendMsgCreateClient: SendMsgCreateClientType,
  
  queryParams: QueryParamsType
  queryVerifiedClientIds: QueryVerifiedClientIdsType
  queryProviderClientID: QueryProviderClientIDType
  queryProviderClientIDAll: QueryProviderClientIDAllType
  queryLaunchIDFromChannelID: QueryLaunchIDFromChannelIDType
  queryLaunchIDFromChannelIDAll: QueryLaunchIDFromChannelIDAllType
  queryMonitoringHistory: QueryMonitoringHistoryType
  
}

type Params = {
  ignite: Ignite;
}

function useModule({ ignite }: Params): Response {
  let {
	
	sendMsgCreateClient,
  
  
  queryParams,
  
  queryVerifiedClientIds,
  
  queryProviderClientID,
  
  queryProviderClientIDAll,
  
  queryLaunchIDFromChannelID,
  
  queryLaunchIDFromChannelIDAll,
  
  queryMonitoringHistory,
  
  } = ignite.TendermintSpnMonitoringc

  
  
	sendMsgCreateClient = sendMsgCreateClient.bind(ignite.TendermintSpnMonitoringc)
  
  
  queryParams = queryParams.bind(ignite.TendermintSpnMonitoringc)
  
  queryVerifiedClientIds = queryVerifiedClientIds.bind(ignite.TendermintSpnMonitoringc)
  
  queryProviderClientID = queryProviderClientID.bind(ignite.TendermintSpnMonitoringc)
  
  queryProviderClientIDAll = queryProviderClientIDAll.bind(ignite.TendermintSpnMonitoringc)
  
  queryLaunchIDFromChannelID = queryLaunchIDFromChannelID.bind(ignite.TendermintSpnMonitoringc)
  
  queryLaunchIDFromChannelIDAll = queryLaunchIDFromChannelIDAll.bind(ignite.TendermintSpnMonitoringc)
  
  queryMonitoringHistory = queryMonitoringHistory.bind(ignite.TendermintSpnMonitoringc)
  

  return {
  
  sendMsgCreateClient,
  
  
  queryParams,
  
  queryVerifiedClientIds,
  
  queryProviderClientID,
  
  queryProviderClientIDAll,
  
  queryLaunchIDFromChannelID,
  
  queryLaunchIDFromChannelIDAll,
  
  queryMonitoringHistory,
  
  }
}

export { useModule }
