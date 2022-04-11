// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Module from '../../tendermint-spn-ts-client/tendermint.fundraising/module'
import useIgnite from '../useIgnite'
import { unref } from 'vue'

type SendMsgCreateBatchAuctionType =
  typeof Module.prototype.sendMsgCreateBatchAuction
type SendMsgCreateFixedPriceAuctionType =
  typeof Module.prototype.sendMsgCreateFixedPriceAuction
type SendMsgAddAllowedBidderType =
  typeof Module.prototype.sendMsgAddAllowedBidder
type SendMsgPlaceBidType = typeof Module.prototype.sendMsgPlaceBid
type SendMsgCancelAuctionType = typeof Module.prototype.sendMsgCancelAuction
type SendMsgModifyBidType = typeof Module.prototype.sendMsgModifyBid

type QueryParamsType = typeof Module.prototype.queryParams
type QueryAuctionsType = typeof Module.prototype.queryAuctions
type QueryAuctionType = typeof Module.prototype.queryAuction
type QueryBidsType = typeof Module.prototype.queryBids
type QueryBidType = typeof Module.prototype.queryBid
type QueryVestingsType = typeof Module.prototype.queryVestings

type Response = {
  sendMsgCreateBatchAuction: SendMsgCreateBatchAuctionType
  sendMsgCreateFixedPriceAuction: SendMsgCreateFixedPriceAuctionType
  sendMsgAddAllowedBidder: SendMsgAddAllowedBidderType
  sendMsgPlaceBid: SendMsgPlaceBidType
  sendMsgCancelAuction: SendMsgCancelAuctionType
  sendMsgModifyBid: SendMsgModifyBidType

  queryParams: QueryParamsType
  queryAuctions: QueryAuctionsType
  queryAuction: QueryAuctionType
  queryBids: QueryBidsType
  queryBid: QueryBidType
  queryVestings: QueryVestingsType
}

function useModule(): Response {
  // ignite
  let { ignite } = useIgnite()

  let {
    sendMsgCreateBatchAuction,

    sendMsgCreateFixedPriceAuction,

    sendMsgAddAllowedBidder,

    sendMsgPlaceBid,

    sendMsgCancelAuction,

    sendMsgModifyBid,

    queryParams,

    queryAuctions,

    queryAuction,

    queryBids,

    queryBid,

    queryVestings
  } = unref(ignite.tendermintFundraising)

  sendMsgCreateBatchAuction = sendMsgCreateBatchAuction.bind(
    ignite.tendermintFundraising
  )

  sendMsgCreateFixedPriceAuction = sendMsgCreateFixedPriceAuction.bind(
    ignite.tendermintFundraising
  )

  sendMsgAddAllowedBidder = sendMsgAddAllowedBidder.bind(
    ignite.tendermintFundraising
  )

  sendMsgPlaceBid = sendMsgPlaceBid.bind(ignite.tendermintFundraising)

  sendMsgCancelAuction = sendMsgCancelAuction.bind(ignite.tendermintFundraising)

  sendMsgModifyBid = sendMsgModifyBid.bind(ignite.tendermintFundraising)

  queryParams = queryParams.bind(ignite.tendermintFundraising)

  queryAuctions = queryAuctions.bind(ignite.tendermintFundraising)

  queryAuction = queryAuction.bind(ignite.tendermintFundraising)

  queryBids = queryBids.bind(ignite.tendermintFundraising)

  queryBid = queryBid.bind(ignite.tendermintFundraising)

  queryVestings = queryVestings.bind(ignite.tendermintFundraising)

  return {
    sendMsgCreateBatchAuction,

    sendMsgCreateFixedPriceAuction,

    sendMsgAddAllowedBidder,

    sendMsgPlaceBid,

    sendMsgCancelAuction,

    sendMsgModifyBid,

    queryParams,

    queryAuctions,

    queryAuction,

    queryBids,

    queryBid,

    queryVestings
  }
}

export { useModule }
