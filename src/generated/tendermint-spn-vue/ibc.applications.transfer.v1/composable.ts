// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Module from '../../tendermint-spn-ts-client/ibc.applications.transfer.v1/module'
import useIgnite from '../useIgnite'
import { unref } from 'vue'

type SendMsgTransferType = typeof Module.prototype.sendMsgTransfer

type QueryDenomTraceType = typeof Module.prototype.queryDenomTrace
type QueryDenomTracesType = typeof Module.prototype.queryDenomTraces
type QueryParamsType = typeof Module.prototype.queryParams

type Response = {
  sendMsgTransfer: SendMsgTransferType

  queryDenomTrace: QueryDenomTraceType
  queryDenomTraces: QueryDenomTracesType
  queryParams: QueryParamsType
}

function useModule(): Response {
  // ignite
  let { ignite } = useIgnite()

  let {
    sendMsgTransfer,

    queryDenomTrace,

    queryDenomTraces,

    queryParams
  } = unref(ignite.ibcApplicationsTransferV1)

  sendMsgTransfer = sendMsgTransfer.bind(ignite.ibcApplicationsTransferV1)

  queryDenomTrace = queryDenomTrace.bind(ignite.ibcApplicationsTransferV1)

  queryDenomTraces = queryDenomTraces.bind(ignite.ibcApplicationsTransferV1)

  queryParams = queryParams.bind(ignite.ibcApplicationsTransferV1)

  return {
    sendMsgTransfer,

    queryDenomTrace,

    queryDenomTraces,

    queryParams
  }
}

export { useModule }
