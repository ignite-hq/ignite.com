// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from 'tendermint-spn-ts-client'
import Module from 'tendermint-spn-ts-client/cosmos.crisis.v1beta1/module'

type SendMsgVerifyInvariantType = typeof Module.prototype.sendMsgVerifyInvariant

type Response = {
  sendMsgVerifyInvariant: SendMsgVerifyInvariantType
}

type Params = {
  ignite: Ignite
}

function useModule({ ignite }: Params): Response {
  let { sendMsgVerifyInvariant } = ignite.CosmosCrisisV1Beta1

  sendMsgVerifyInvariant = sendMsgVerifyInvariant.bind(
    ignite.CosmosCrisisV1Beta1
  )

  return {
    sendMsgVerifyInvariant
  }
}

export { useModule }
