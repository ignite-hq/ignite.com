// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Module from '../../tendermint-spn-ts-client/tendermint.spn.participation/module'
import useIgnite from '../useIgnite'
import { unref } from 'vue'

type SendMsgWithdrawAllocationsType =
  typeof Module.prototype.sendMsgWithdrawAllocations
type SendMsgParticipateType = typeof Module.prototype.sendMsgParticipate

type QueryUsedAllocationsType = typeof Module.prototype.queryUsedAllocations
type QueryUsedAllocationsAllType =
  typeof Module.prototype.queryUsedAllocationsAll
type QueryAuctionUsedAllocationsType =
  typeof Module.prototype.queryAuctionUsedAllocations
type QueryAuctionUsedAllocationsAllType =
  typeof Module.prototype.queryAuctionUsedAllocationsAll
type QueryTotalAllocationsType = typeof Module.prototype.queryTotalAllocations
type QueryAvailableAllocationsType =
  typeof Module.prototype.queryAvailableAllocations
type QueryParamsType = typeof Module.prototype.queryParams

type Response = {
  sendMsgWithdrawAllocations: SendMsgWithdrawAllocationsType
  sendMsgParticipate: SendMsgParticipateType

  queryUsedAllocations: QueryUsedAllocationsType
  queryUsedAllocationsAll: QueryUsedAllocationsAllType
  queryAuctionUsedAllocations: QueryAuctionUsedAllocationsType
  queryAuctionUsedAllocationsAll: QueryAuctionUsedAllocationsAllType
  queryTotalAllocations: QueryTotalAllocationsType
  queryAvailableAllocations: QueryAvailableAllocationsType
  queryParams: QueryParamsType
}

function useModule(): Response {
  // ignite
  let { ignite } = useIgnite()

  let {
    sendMsgWithdrawAllocations,

    sendMsgParticipate,

    queryUsedAllocations,

    queryUsedAllocationsAll,

    queryAuctionUsedAllocations,

    queryAuctionUsedAllocationsAll,

    queryTotalAllocations,

    queryAvailableAllocations,

    queryParams
  } = unref(ignite.tendermintSpnParticipation)

  sendMsgWithdrawAllocations = sendMsgWithdrawAllocations.bind(
    ignite.tendermintSpnParticipation
  )

  sendMsgParticipate = sendMsgParticipate.bind(
    ignite.tendermintSpnParticipation
  )

  queryUsedAllocations = queryUsedAllocations.bind(
    ignite.tendermintSpnParticipation
  )

  queryUsedAllocationsAll = queryUsedAllocationsAll.bind(
    ignite.tendermintSpnParticipation
  )

  queryAuctionUsedAllocations = queryAuctionUsedAllocations.bind(
    ignite.tendermintSpnParticipation
  )

  queryAuctionUsedAllocationsAll = queryAuctionUsedAllocationsAll.bind(
    ignite.tendermintSpnParticipation
  )

  queryTotalAllocations = queryTotalAllocations.bind(
    ignite.tendermintSpnParticipation
  )

  queryAvailableAllocations = queryAvailableAllocations.bind(
    ignite.tendermintSpnParticipation
  )

  queryParams = queryParams.bind(ignite.tendermintSpnParticipation)

  return {
    sendMsgWithdrawAllocations,

    sendMsgParticipate,

    queryUsedAllocations,

    queryUsedAllocationsAll,

    queryAuctionUsedAllocations,

    queryAuctionUsedAllocationsAll,

    queryTotalAllocations,

    queryAvailableAllocations,

    queryParams
  }
}

export { useModule }
