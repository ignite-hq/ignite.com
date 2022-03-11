// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Store } from "pinia";
import { usePiniaStore, PiniaState } from "./";

import { Ignite } from "tendermint-spn-ts-client";
import Module from "tendermint-spn-ts-client/tendermint.fundraising/module";

type SendMsgCancelAuctionType = typeof Module.prototype.sendMsgCancelAuction;
type SendMsgCreateEnglishAuctionType =
  typeof Module.prototype.sendMsgCreateEnglishAuction;
type SendMsgAddAllowedBidderType =
  typeof Module.prototype.sendMsgAddAllowedBidder;
type SendMsgCreateFixedPriceAuctionType =
  typeof Module.prototype.sendMsgCreateFixedPriceAuction;
type SendMsgPlaceBidType = typeof Module.prototype.sendMsgPlaceBid;

type QueryParamsType = typeof Module.prototype.queryParams;
type QueryAuctionsType = typeof Module.prototype.queryAuctions;
type QueryAuctionType = typeof Module.prototype.queryAuction;
type QueryBidsType = typeof Module.prototype.queryBids;
type QueryBidType = typeof Module.prototype.queryBid;
type QueryVestingsType = typeof Module.prototype.queryVestings;

type Response = {
  $s: Store<"tendermint.fundraising", PiniaState, {}, {}>;
  sendMsgCancelAuction: SendMsgCancelAuctionType;
  sendMsgCreateEnglishAuction: SendMsgCreateEnglishAuctionType;
  sendMsgAddAllowedBidder: SendMsgAddAllowedBidderType;
  sendMsgCreateFixedPriceAuction: SendMsgCreateFixedPriceAuctionType;
  sendMsgPlaceBid: SendMsgPlaceBidType;

  queryParams: QueryParamsType;
  queryAuctions: QueryAuctionsType;
  queryAuction: QueryAuctionType;
  queryBids: QueryBidsType;
  queryBid: QueryBidType;
  queryVestings: QueryVestingsType;
};

type Params = {
  $ignt: Ignite;
};

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore();

  let {
    sendMsgCancelAuction,

    sendMsgCreateEnglishAuction,

    sendMsgAddAllowedBidder,

    sendMsgCreateFixedPriceAuction,

    sendMsgPlaceBid,

    queryParams,

    queryAuctions,

    queryAuction,

    queryBids,

    queryBid,

    queryVestings,
  } = $ignt.TendermintFundraising;

  return {
    $s,

    sendMsgCancelAuction,

    sendMsgCreateEnglishAuction,

    sendMsgAddAllowedBidder,

    sendMsgCreateFixedPriceAuction,

    sendMsgPlaceBid,

    queryParams,

    queryAuctions,

    queryAuction,

    queryBids,

    queryBid,

    queryVestings,
  };
}

export { useModule };
