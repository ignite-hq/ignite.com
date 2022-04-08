// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Module from '../../tendermint-spn-ts-client/cosmos.crisis.v1beta1/module'
import useIgnite from '../useIgnite'
import { unref } from 'vue'

type SendMsgVerifyInvariantType = typeof Module.prototype.sendMsgVerifyInvariant

type Response = {
  sendMsgVerifyInvariant: SendMsgVerifyInvariantType
}

function useModule(): Response {
  // ignite
  let { ignite } = useIgnite()

  let { sendMsgVerifyInvariant } = unref(ignite.cosmosCrisisV1Beta1)

  sendMsgVerifyInvariant = sendMsgVerifyInvariant.bind(
    ignite.cosmosCrisisV1Beta1
  )

  return {
    sendMsgVerifyInvariant
  }
}

export { useModule }
