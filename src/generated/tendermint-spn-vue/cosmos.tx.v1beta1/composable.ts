// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from 'tendermint-spn-ts-client'
import Module from 'tendermint-spn-ts-client/cosmos.tx.v1beta1/module'

type ServiceSimulateType = typeof Module.prototype.serviceSimulate
type ServiceGetTxType = typeof Module.prototype.serviceGetTx
type ServiceBroadcastTxType = typeof Module.prototype.serviceBroadcastTx
type ServiceGetTxsEventType = typeof Module.prototype.serviceGetTxsEvent

type Response = {
  serviceSimulate: ServiceSimulateType
  serviceGetTx: ServiceGetTxType
  serviceBroadcastTx: ServiceBroadcastTxType
  serviceGetTxsEvent: ServiceGetTxsEventType
}

type Params = {
  ignite: Ignite
}

function useModule({ ignite }: Params): Response {
  let {
    serviceSimulate,

    serviceGetTx,

    serviceBroadcastTx,

    serviceGetTxsEvent
  } = ignite.CosmosTxV1Beta1

  serviceSimulate = serviceSimulate.bind(ignite.CosmosTxV1Beta1)

  serviceGetTx = serviceGetTx.bind(ignite.CosmosTxV1Beta1)

  serviceBroadcastTx = serviceBroadcastTx.bind(ignite.CosmosTxV1Beta1)

  serviceGetTxsEvent = serviceGetTxsEvent.bind(ignite.CosmosTxV1Beta1)

  return {
    serviceSimulate,

    serviceGetTx,

    serviceBroadcastTx,

    serviceGetTxsEvent
  }
}

export { useModule }
