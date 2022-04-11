// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Module from '../../tendermint-spn-ts-client/cosmos.tx.v1beta1/module'
import useIgnite from '../useIgnite'
import { unref } from 'vue'

type ServiceSimulateType = typeof Module.prototype.serviceSimulate
type ServiceGetTxType = typeof Module.prototype.serviceGetTx
type ServiceBroadcastTxType = typeof Module.prototype.serviceBroadcastTx
type ServiceGetTxsEventType = typeof Module.prototype.serviceGetTxsEvent
type ServiceGetBlockWithTxsType = typeof Module.prototype.serviceGetBlockWithTxs

type Response = {
  serviceSimulate: ServiceSimulateType
  serviceGetTx: ServiceGetTxType
  serviceBroadcastTx: ServiceBroadcastTxType
  serviceGetTxsEvent: ServiceGetTxsEventType
  serviceGetBlockWithTxs: ServiceGetBlockWithTxsType
}

function useModule(): Response {
  // ignite
  let { ignite } = useIgnite()

  let {
    serviceSimulate,

    serviceGetTx,

    serviceBroadcastTx,

    serviceGetTxsEvent,

    serviceGetBlockWithTxs
  } = unref(ignite.cosmosTxV1Beta1)

  serviceSimulate = serviceSimulate.bind(ignite.cosmosTxV1Beta1)

  serviceGetTx = serviceGetTx.bind(ignite.cosmosTxV1Beta1)

  serviceBroadcastTx = serviceBroadcastTx.bind(ignite.cosmosTxV1Beta1)

  serviceGetTxsEvent = serviceGetTxsEvent.bind(ignite.cosmosTxV1Beta1)

  serviceGetBlockWithTxs = serviceGetBlockWithTxs.bind(ignite.cosmosTxV1Beta1)

  return {
    serviceSimulate,

    serviceGetTx,

    serviceBroadcastTx,

    serviceGetTxsEvent,

    serviceGetBlockWithTxs
  }
}

export { useModule }
