// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { defineStore } from 'pinia'

import {
  Params,
  BaseAuction,
  FixedPriceAuction,
  EnglishAuction,
  VestingSchedule,
  VestingQueue,
  AllowedBidder,
  Bid
} from 'ts-client/tendermint.fundraising/types'

type PiniaState = {
  ParamsAll: Params[]
  BaseAuctionAll: BaseAuction[]
  FixedPriceAuctionAll: FixedPriceAuction[]
  EnglishAuctionAll: EnglishAuction[]
  VestingScheduleAll: VestingSchedule[]
  VestingQueueAll: VestingQueue[]
  AllowedBidderAll: AllowedBidder[]
  BidAll: Bid[]
}

const piniaStore = {
  state: (): PiniaState => {
    return {
      ParamsAll: [],
      BaseAuctionAll: [],
      FixedPriceAuctionAll: [],
      EnglishAuctionAll: [],
      VestingScheduleAll: [],
      VestingQueueAll: [],
      AllowedBidderAll: [],
      BidAll: []
    }
  }
}

const usePiniaStore = defineStore('tendermint.fundraising', piniaStore)

export { usePiniaStore, PiniaState }
