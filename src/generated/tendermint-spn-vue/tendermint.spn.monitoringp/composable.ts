// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from "tendermint-spn-ts-client";
import Module from "tendermint-spn-ts-client/tendermint.spn.monitoringp/module";
		

type QueryParamsType = typeof Module.prototype.queryParams
type QueryConsumerClientIDType = typeof Module.prototype.queryConsumerClientID
type QueryConnectionChannelIDType = typeof Module.prototype.queryConnectionChannelID
type QueryMonitoringInfoType = typeof Module.prototype.queryMonitoringInfo


type Response = {
  
  queryParams: QueryParamsType
  queryConsumerClientID: QueryConsumerClientIDType
  queryConnectionChannelID: QueryConnectionChannelIDType
  queryMonitoringInfo: QueryMonitoringInfoType
  
}

type Params = {
  ignite: Ignite;
}

function useModule({ ignite }: Params): Response {
  let {
	
  
  queryParams,
  
  queryConsumerClientID,
  
  queryConnectionChannelID,
  
  queryMonitoringInfo,
  
  } = ignite.TendermintSpnMonitoringp

  
  
  
  queryParams = queryParams.bind(ignite.TendermintSpnMonitoringp)
  
  queryConsumerClientID = queryConsumerClientID.bind(ignite.TendermintSpnMonitoringp)
  
  queryConnectionChannelID = queryConnectionChannelID.bind(ignite.TendermintSpnMonitoringp)
  
  queryMonitoringInfo = queryMonitoringInfo.bind(ignite.TendermintSpnMonitoringp)
  

  return {
  
  
  queryParams,
  
  queryConsumerClientID,
  
  queryConnectionChannelID,
  
  queryMonitoringInfo,
  
  }
}

export { useModule }
