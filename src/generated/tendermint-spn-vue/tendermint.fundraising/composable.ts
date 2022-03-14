// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Store } from 'pinia'
import { usePiniaStore, PiniaState } from './'

import { Ignite } from 'tendermint-spn-ts-client'
import Module from 'tendermint-spn-ts-client/tendermint.fundraising/module'

type SendMsgCreateFixedPriceAuctionType =
  typeof Module.prototype.sendMsgCreateFixedPriceAuction
type SendMsgCreateEnglishAuctionType =
  typeof Module.prototype.sendMsgCreateEnglishAuction
type SendMsgCancelAuctionType = typeof Module.prototype.sendMsgCancelAuction
type SendMsgPlaceBidType = typeof Module.prototype.sendMsgPlaceBid
type SendMsgAddAllowedBidderType =
  typeof Module.prototype.sendMsgAddAllowedBidder

type QueryParamsType = typeof Module.prototype.queryParams
type QueryAuctionsType = typeof Module.prototype.queryAuctions
type QueryAuctionType = typeof Module.prototype.queryAuction
type QueryBidsType = typeof Module.prototype.queryBids
type QueryBidType = typeof Module.prototype.queryBid
type QueryVestingsType = typeof Module.prototype.queryVestings

type Response = {
  $s: Store<'tendermint.fundraising', PiniaState, {}, {}>
  sendMsgCreateFixedPriceAuction: SendMsgCreateFixedPriceAuctionType
  sendMsgCreateEnglishAuction: SendMsgCreateEnglishAuctionType
  sendMsgCancelAuction: SendMsgCancelAuctionType
  sendMsgPlaceBid: SendMsgPlaceBidType
  sendMsgAddAllowedBidder: SendMsgAddAllowedBidderType

  queryParams: QueryParamsType
  queryAuctions: QueryAuctionsType
  queryAuction: QueryAuctionType
  queryBids: QueryBidsType
  queryBid: QueryBidType
  queryVestings: QueryVestingsType
}

type Params = {
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let {
    sendMsgCreateFixedPriceAuction,

    sendMsgCreateEnglishAuction,

    sendMsgCancelAuction,

    sendMsgPlaceBid,

    sendMsgAddAllowedBidder,

    queryParams,

    queryAuctions,

    queryAuction,

    queryBids,

    queryBid,

    queryVestings
  } = $ignt.TendermintFundraising

  sendMsgCreateFixedPriceAuction = sendMsgCreateFixedPriceAuction.bind(
    $ignt.TendermintFundraising
  )

  sendMsgCreateEnglishAuction = sendMsgCreateEnglishAuction.bind(
    $ignt.TendermintFundraising
  )

  sendMsgCancelAuction = sendMsgCancelAuction.bind($ignt.TendermintFundraising)

  sendMsgPlaceBid = sendMsgPlaceBid.bind($ignt.TendermintFundraising)

  sendMsgAddAllowedBidder = sendMsgAddAllowedBidder.bind(
    $ignt.TendermintFundraising
  )

  queryParams = queryParams.bind($ignt.TendermintFundraising)

  queryAuctions = queryAuctions.bind($ignt.TendermintFundraising)

  queryAuction = queryAuction.bind($ignt.TendermintFundraising)

  queryBids = queryBids.bind($ignt.TendermintFundraising)

  queryBid = queryBid.bind($ignt.TendermintFundraising)

  queryVestings = queryVestings.bind($ignt.TendermintFundraising)

  return {
    $s,

    sendMsgCreateFixedPriceAuction,

    sendMsgCreateEnglishAuction,

    sendMsgCancelAuction,

    sendMsgPlaceBid,

    sendMsgAddAllowedBidder,

    queryParams,

    queryAuctions,

    queryAuction,

    queryBids,

    queryBid,

    queryVestings
  }
}

export { useModule }
