// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Store } from 'pinia'
import { usePiniaStore, PiniaState } from './'

import { Ignite } from 'tendermint-spn-ts-client'
import Module from 'tendermint-spn-ts-client/cosmos.feegrant.v1beta1/module'

type SendMsgGrantAllowanceType = typeof Module.prototype.sendMsgGrantAllowance
type SendMsgRevokeAllowanceType = typeof Module.prototype.sendMsgRevokeAllowance

type QueryAllowanceType = typeof Module.prototype.queryAllowance
type QueryAllowancesType = typeof Module.prototype.queryAllowances

type Response = {
  $s: Store<'cosmos.feegrant.v1beta1', PiniaState, {}, {}>
  sendMsgGrantAllowance: SendMsgGrantAllowanceType
  sendMsgRevokeAllowance: SendMsgRevokeAllowanceType

  queryAllowance: QueryAllowanceType
  queryAllowances: QueryAllowancesType
}

type Params = {
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let {
    sendMsgGrantAllowance,

    sendMsgRevokeAllowance,

    queryAllowance,

    queryAllowances
  } = $ignt.CosmosFeegrantV1Beta1

  return {
    $s,

    sendMsgGrantAllowance,

    sendMsgRevokeAllowance,

    queryAllowance,

    queryAllowances
  }
}

export { useModule }
