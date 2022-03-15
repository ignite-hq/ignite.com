// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Store } from 'pinia'
import { usePiniaStore, PiniaState } from './'

import { Ignite } from 'tendermint-spn-ts-client'
import Module from 'tendermint-spn-ts-client/cosmos.authz.v1beta1/module'

type SendMsgGrantType = typeof Module.prototype.sendMsgGrant
type SendMsgRevokeType = typeof Module.prototype.sendMsgRevoke
type SendMsgExecType = typeof Module.prototype.sendMsgExec

type QueryGrantsType = typeof Module.prototype.queryGrants

type Response = {
  $s: Store<'cosmos.authz.v1beta1', PiniaState, {}, {}>
  sendMsgGrant: SendMsgGrantType
  sendMsgRevoke: SendMsgRevokeType
  sendMsgExec: SendMsgExecType

  queryGrants: QueryGrantsType
}

type Params = {
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let {
    sendMsgGrant,

    sendMsgRevoke,

    sendMsgExec,

    queryGrants
  } = $ignt.CosmosAuthzV1Beta1

  sendMsgGrant = sendMsgGrant.bind($ignt.CosmosAuthzV1Beta1)

  sendMsgRevoke = sendMsgRevoke.bind($ignt.CosmosAuthzV1Beta1)

  sendMsgExec = sendMsgExec.bind($ignt.CosmosAuthzV1Beta1)

  queryGrants = queryGrants.bind($ignt.CosmosAuthzV1Beta1)

  return {
    $s,

    sendMsgGrant,

    sendMsgRevoke,

    sendMsgExec,

    queryGrants
  }
}

export { useModule }
