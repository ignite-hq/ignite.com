// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Store } from 'pinia'
import { usePiniaStore, PiniaState } from './'

import { Ignite } from 'tendermint-spn-ts-client'
import Module from 'tendermint-spn-ts-client/cosmos.vesting.v1beta1/module'

type SendMsgCreateVestingAccountType =
  typeof Module.prototype.sendMsgCreateVestingAccount

type Response = {
  $s: Store<'cosmos.vesting.v1beta1', PiniaState, {}, {}>
  sendMsgCreateVestingAccount: SendMsgCreateVestingAccountType
}

type Params = {
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let { sendMsgCreateVestingAccount } = $ignt.CosmosVestingV1Beta1

  return {
    $s,

    sendMsgCreateVestingAccount
  }
}

export { useModule }
