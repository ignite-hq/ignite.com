// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Store } from 'pinia'
import { usePiniaStore, PiniaState } from './'

import { Ignite } from 'tendermint-spn-ts-client'
import Module from 'tendermint-spn-ts-client/tendermint.spn.monitoringc/module'

type SendMsgCreateClientType = typeof Module.prototype.sendMsgCreateClient

type QueryParamsType = typeof Module.prototype.queryParams
type QueryVerifiedClientIdsType = typeof Module.prototype.queryVerifiedClientIds
type QueryProviderClientIDType = typeof Module.prototype.queryProviderClientID
type QueryProviderClientIDAllType =
  typeof Module.prototype.queryProviderClientIDAll
type QueryLaunchIDFromChannelIDType =
  typeof Module.prototype.queryLaunchIDFromChannelID
type QueryLaunchIDFromChannelIDAllType =
  typeof Module.prototype.queryLaunchIDFromChannelIDAll
type QueryMonitoringHistoryType = typeof Module.prototype.queryMonitoringHistory

type Response = {
  $s: Store<'tendermint.spn.monitoringc', PiniaState, {}, {}>
  sendMsgCreateClient: SendMsgCreateClientType

  queryParams: QueryParamsType
  queryVerifiedClientIds: QueryVerifiedClientIdsType
  queryProviderClientID: QueryProviderClientIDType
  queryProviderClientIDAll: QueryProviderClientIDAllType
  queryLaunchIDFromChannelID: QueryLaunchIDFromChannelIDType
  queryLaunchIDFromChannelIDAll: QueryLaunchIDFromChannelIDAllType
  queryMonitoringHistory: QueryMonitoringHistoryType
}

type Params = {
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let {
    sendMsgCreateClient,

    queryParams,

    queryVerifiedClientIds,

    queryProviderClientID,

    queryProviderClientIDAll,

    queryLaunchIDFromChannelID,

    queryLaunchIDFromChannelIDAll,

    queryMonitoringHistory
  } = $ignt.TendermintSpnMonitoringc

  sendMsgCreateClient = sendMsgCreateClient.bind($ignt.TendermintSpnMonitoringc)

  queryParams = queryParams.bind($ignt.TendermintSpnMonitoringc)

  queryVerifiedClientIds = queryVerifiedClientIds.bind(
    $ignt.TendermintSpnMonitoringc
  )

  queryProviderClientID = queryProviderClientID.bind(
    $ignt.TendermintSpnMonitoringc
  )

  queryProviderClientIDAll = queryProviderClientIDAll.bind(
    $ignt.TendermintSpnMonitoringc
  )

  queryLaunchIDFromChannelID = queryLaunchIDFromChannelID.bind(
    $ignt.TendermintSpnMonitoringc
  )

  queryLaunchIDFromChannelIDAll = queryLaunchIDFromChannelIDAll.bind(
    $ignt.TendermintSpnMonitoringc
  )

  queryMonitoringHistory = queryMonitoringHistory.bind(
    $ignt.TendermintSpnMonitoringc
  )

  return {
    $s,

    sendMsgCreateClient,

    queryParams,

    queryVerifiedClientIds,

    queryProviderClientID,

    queryProviderClientIDAll,

    queryLaunchIDFromChannelID,

    queryLaunchIDFromChannelIDAll,

    queryMonitoringHistory
  }
}

export { useModule }
