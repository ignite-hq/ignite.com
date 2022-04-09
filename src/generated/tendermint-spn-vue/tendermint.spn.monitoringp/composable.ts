// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Module from '../../tendermint-spn-ts-client/tendermint.spn.monitoringp/module'
import useIgnite from '../useIgnite'
import { unref } from 'vue'

type QueryConsumerClientIDType = typeof Module.prototype.queryConsumerClientID
type QueryConnectionChannelIDType =
  typeof Module.prototype.queryConnectionChannelID
type QueryMonitoringInfoType = typeof Module.prototype.queryMonitoringInfo
type QueryParamsType = typeof Module.prototype.queryParams

type Response = {
  queryConsumerClientID: QueryConsumerClientIDType
  queryConnectionChannelID: QueryConnectionChannelIDType
  queryMonitoringInfo: QueryMonitoringInfoType
  queryParams: QueryParamsType
}

function useModule(): Response {
  // ignite
  let { ignite } = useIgnite()

  let {
    queryConsumerClientID,

    queryConnectionChannelID,

    queryMonitoringInfo,

    queryParams
  } = unref(ignite.tendermintSpnMonitoringp)

  queryConsumerClientID = queryConsumerClientID.bind(
    ignite.tendermintSpnMonitoringp
  )

  queryConnectionChannelID = queryConnectionChannelID.bind(
    ignite.tendermintSpnMonitoringp
  )

  queryMonitoringInfo = queryMonitoringInfo.bind(
    ignite.tendermintSpnMonitoringp
  )

  queryParams = queryParams.bind(ignite.tendermintSpnMonitoringp)

  return {
    queryConsumerClientID,

    queryConnectionChannelID,

    queryMonitoringInfo,

    queryParams
  }
}

export { useModule }
