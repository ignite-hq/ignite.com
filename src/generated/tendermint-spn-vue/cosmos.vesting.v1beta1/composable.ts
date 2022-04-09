// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Module from '../../tendermint-spn-ts-client/cosmos.vesting.v1beta1/module'
import useIgnite from '../useIgnite'
import { unref } from 'vue'

type SendMsgCreateVestingAccountType =
  typeof Module.prototype.sendMsgCreateVestingAccount

type Response = {
  sendMsgCreateVestingAccount: SendMsgCreateVestingAccountType
}

function useModule(): Response {
  // ignite
  let { ignite } = useIgnite()

  let { sendMsgCreateVestingAccount } = unref(ignite.cosmosVestingV1Beta1)

  sendMsgCreateVestingAccount = sendMsgCreateVestingAccount.bind(
    ignite.cosmosVestingV1Beta1
  )

  return {
    sendMsgCreateVestingAccount
  }
}

export { useModule }
