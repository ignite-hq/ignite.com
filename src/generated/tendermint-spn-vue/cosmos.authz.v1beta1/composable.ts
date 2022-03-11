// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Store } from 'pinia'
import { usePiniaStore, PiniaState } from './'

import { Ignite } from 'tendermint-spn-ts-client'
import Module from 'tendermint-spn-ts-client/cosmos.authz.v1beta1/module'

type SendMsgRevokeType = typeof Module.prototype.sendMsgRevoke
type SendMsgGrantType = typeof Module.prototype.sendMsgGrant
type SendMsgExecType = typeof Module.prototype.sendMsgExec

type QueryGrantsType = typeof Module.prototype.queryGrants

type Response = {
  $s: Store<'cosmos.authz.v1beta1', PiniaState, {}, {}>
  sendMsgRevoke: SendMsgRevokeType
  sendMsgGrant: SendMsgGrantType
  sendMsgExec: SendMsgExecType

  queryGrants: QueryGrantsType
}

type Params = {
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let {
    sendMsgRevoke,

    sendMsgGrant,

    sendMsgExec,

    queryGrants
  } = $ignt.CosmosAuthzV1Beta1

  return {
    $s,

    sendMsgRevoke,

    sendMsgGrant,

    sendMsgExec,

    queryGrants
  }
}

export { useModule }
