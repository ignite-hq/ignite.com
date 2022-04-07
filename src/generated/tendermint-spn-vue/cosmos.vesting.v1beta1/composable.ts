// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from 'tendermint-spn-ts-client'
import Module from 'tendermint-spn-ts-client/cosmos.vesting.v1beta1/module'

type SendMsgCreateVestingAccountType =
  typeof Module.prototype.sendMsgCreateVestingAccount

type Response = {
  sendMsgCreateVestingAccount: SendMsgCreateVestingAccountType
}

type Params = {
  ignite: Ignite
}

function useModule({ ignite }: Params): Response {
  let { sendMsgCreateVestingAccount } = ignite.CosmosVestingV1Beta1

  sendMsgCreateVestingAccount = sendMsgCreateVestingAccount.bind(
    ignite.CosmosVestingV1Beta1
  )

  return {
    sendMsgCreateVestingAccount
  }
}

export { useModule }
