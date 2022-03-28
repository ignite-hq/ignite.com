// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from "@ignt/client";
import Module from "@ignt/client/tendermint.fundraising/module";
		
type SendMsgCreateEnglishAuctionType = typeof Module.prototype.sendMsgCreateEnglishAuction
type SendMsgAddAllowedBidderType = typeof Module.prototype.sendMsgAddAllowedBidder
type SendMsgPlaceBidType = typeof Module.prototype.sendMsgPlaceBid
type SendMsgCreateFixedPriceAuctionType = typeof Module.prototype.sendMsgCreateFixedPriceAuction
type SendMsgCancelAuctionType = typeof Module.prototype.sendMsgCancelAuction

type QueryParamsType = typeof Module.prototype.queryParams
type QueryAuctionsType = typeof Module.prototype.queryAuctions
type QueryAuctionType = typeof Module.prototype.queryAuction
type QueryBidsType = typeof Module.prototype.queryBids
type QueryBidType = typeof Module.prototype.queryBid
type QueryVestingsType = typeof Module.prototype.queryVestings


type Response = {
  sendMsgCreateEnglishAuction: SendMsgCreateEnglishAuctionType,
  sendMsgAddAllowedBidder: SendMsgAddAllowedBidderType,
  sendMsgPlaceBid: SendMsgPlaceBidType,
  sendMsgCreateFixedPriceAuction: SendMsgCreateFixedPriceAuctionType,
  sendMsgCancelAuction: SendMsgCancelAuctionType,
  
  queryParams: QueryParamsType
  queryAuctions: QueryAuctionsType
  queryAuction: QueryAuctionType
  queryBids: QueryBidsType
  queryBid: QueryBidType
  queryVestings: QueryVestingsType
  
}

type Params = {
  ignite: Ignite;
}

function useModule({ ignite }: Params): Response {
  let {
	
	sendMsgCreateEnglishAuction,
  
	sendMsgAddAllowedBidder,
  
	sendMsgPlaceBid,
  
	sendMsgCreateFixedPriceAuction,
  
	sendMsgCancelAuction,
  
  
  queryParams,
  
  queryAuctions,
  
  queryAuction,
  
  queryBids,
  
  queryBid,
  
  queryVestings,
  
  } = ignite.TendermintFundraising

  
  
	sendMsgCreateEnglishAuction = sendMsgCreateEnglishAuction.bind(ignite.TendermintFundraising)
  
	sendMsgAddAllowedBidder = sendMsgAddAllowedBidder.bind(ignite.TendermintFundraising)
  
	sendMsgPlaceBid = sendMsgPlaceBid.bind(ignite.TendermintFundraising)
  
	sendMsgCreateFixedPriceAuction = sendMsgCreateFixedPriceAuction.bind(ignite.TendermintFundraising)
  
	sendMsgCancelAuction = sendMsgCancelAuction.bind(ignite.TendermintFundraising)
  
  
  queryParams = queryParams.bind(ignite.TendermintFundraising)
  
  queryAuctions = queryAuctions.bind(ignite.TendermintFundraising)
  
  queryAuction = queryAuction.bind(ignite.TendermintFundraising)
  
  queryBids = queryBids.bind(ignite.TendermintFundraising)
  
  queryBid = queryBid.bind(ignite.TendermintFundraising)
  
  queryVestings = queryVestings.bind(ignite.TendermintFundraising)
  

  return {
  
  sendMsgCreateEnglishAuction,
  
  sendMsgAddAllowedBidder,
  
  sendMsgPlaceBid,
  
  sendMsgCreateFixedPriceAuction,
  
  sendMsgCancelAuction,
  
  
  queryParams,
  
  queryAuctions,
  
  queryAuction,
  
  queryBids,
  
  queryBid,
  
  queryVestings,
  
  }
}

export { useModule }
