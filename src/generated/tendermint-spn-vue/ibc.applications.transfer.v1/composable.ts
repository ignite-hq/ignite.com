// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from "@ignt/client";
import Module from "@ignt/client/ibc.applications.transfer.v1/module";
		
type SendMsgTransferType = typeof Module.prototype.sendMsgTransfer

type QueryDenomTraceType = typeof Module.prototype.queryDenomTrace
type QueryDenomTracesType = typeof Module.prototype.queryDenomTraces
type QueryParamsType = typeof Module.prototype.queryParams


type Response = {
  sendMsgTransfer: SendMsgTransferType,
  
  queryDenomTrace: QueryDenomTraceType
  queryDenomTraces: QueryDenomTracesType
  queryParams: QueryParamsType
  
}

type Params = {
  ignite: Ignite;
}

function useModule({ ignite }: Params): Response {
  let {
	
	sendMsgTransfer,
  
  
  queryDenomTrace,
  
  queryDenomTraces,
  
  queryParams,
  
  } = ignite.IbcApplicationsTransferV1

  
  
	sendMsgTransfer = sendMsgTransfer.bind(ignite.IbcApplicationsTransferV1)
  
  
  queryDenomTrace = queryDenomTrace.bind(ignite.IbcApplicationsTransferV1)
  
  queryDenomTraces = queryDenomTraces.bind(ignite.IbcApplicationsTransferV1)
  
  queryParams = queryParams.bind(ignite.IbcApplicationsTransferV1)
  

  return {
  
  sendMsgTransfer,
  
  
  queryDenomTrace,
  
  queryDenomTraces,
  
  queryParams,
  
  }
}

export { useModule }
