// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Module from '../../tendermint-spn-ts-client/tendermint.spn.monitoringc/module'
import useIgnite from '../useIgnite'
import { unref } from 'vue'

type SendMsgCreateClientType = typeof Module.prototype.sendMsgCreateClient

type QueryVerifiedClientIdsType = typeof Module.prototype.queryVerifiedClientIds
type QueryProviderClientIDType = typeof Module.prototype.queryProviderClientID
type QueryProviderClientIDAllType =
  typeof Module.prototype.queryProviderClientIDAll
type QueryLaunchIDFromChannelIDType =
  typeof Module.prototype.queryLaunchIDFromChannelID
type QueryLaunchIDFromChannelIDAllType =
  typeof Module.prototype.queryLaunchIDFromChannelIDAll
type QueryMonitoringHistoryType = typeof Module.prototype.queryMonitoringHistory
type QueryParamsType = typeof Module.prototype.queryParams

type Response = {
  sendMsgCreateClient: SendMsgCreateClientType

  queryVerifiedClientIds: QueryVerifiedClientIdsType
  queryProviderClientID: QueryProviderClientIDType
  queryProviderClientIDAll: QueryProviderClientIDAllType
  queryLaunchIDFromChannelID: QueryLaunchIDFromChannelIDType
  queryLaunchIDFromChannelIDAll: QueryLaunchIDFromChannelIDAllType
  queryMonitoringHistory: QueryMonitoringHistoryType
  queryParams: QueryParamsType
}

function useModule(): Response {
  // ignite
  let { ignite } = useIgnite()

  let {
    sendMsgCreateClient,

    queryVerifiedClientIds,

    queryProviderClientID,

    queryProviderClientIDAll,

    queryLaunchIDFromChannelID,

    queryLaunchIDFromChannelIDAll,

    queryMonitoringHistory,

    queryParams
  } = unref(ignite.tendermintSpnMonitoringc)

  sendMsgCreateClient = sendMsgCreateClient.bind(
    ignite.tendermintSpnMonitoringc
  )

  queryVerifiedClientIds = queryVerifiedClientIds.bind(
    ignite.tendermintSpnMonitoringc
  )

  queryProviderClientID = queryProviderClientID.bind(
    ignite.tendermintSpnMonitoringc
  )

  queryProviderClientIDAll = queryProviderClientIDAll.bind(
    ignite.tendermintSpnMonitoringc
  )

  queryLaunchIDFromChannelID = queryLaunchIDFromChannelID.bind(
    ignite.tendermintSpnMonitoringc
  )

  queryLaunchIDFromChannelIDAll = queryLaunchIDFromChannelIDAll.bind(
    ignite.tendermintSpnMonitoringc
  )

  queryMonitoringHistory = queryMonitoringHistory.bind(
    ignite.tendermintSpnMonitoringc
  )

  queryParams = queryParams.bind(ignite.tendermintSpnMonitoringc)

  return {
    sendMsgCreateClient,

    queryVerifiedClientIds,

    queryProviderClientID,

    queryProviderClientIDAll,

    queryLaunchIDFromChannelID,

    queryLaunchIDFromChannelIDAll,

    queryMonitoringHistory,

    queryParams
  }
}

export { useModule }
