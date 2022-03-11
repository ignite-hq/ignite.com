// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Store } from 'pinia'
import { usePiniaStore, PiniaState } from './'

import { Ignite } from 'tendermint-spn-ts-client'
import Module from 'tendermint-spn-ts-client/cosmos.crisis.v1beta1/module'

type SendMsgVerifyInvariantType = typeof Module.prototype.sendMsgVerifyInvariant

type Response = {
  $s: Store<'cosmos.crisis.v1beta1', PiniaState, {}, {}>
  sendMsgVerifyInvariant: SendMsgVerifyInvariantType
}

type Params = {
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let { sendMsgVerifyInvariant } = $ignt.CosmosCrisisV1Beta1

  return {
    $s,

    sendMsgVerifyInvariant
  }
}

export { useModule }
