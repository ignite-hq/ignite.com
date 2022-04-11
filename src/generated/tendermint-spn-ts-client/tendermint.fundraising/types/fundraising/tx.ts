/* eslint-disable */
import {
  BidType,
  VestingSchedule,
  AllowedBidder,
  bidTypeFromJSON,
  bidTypeToJSON
} from '../fundraising/fundraising'
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import { Timestamp } from '../google/protobuf/timestamp'
import * as Long from 'long'
import { Coin } from '../cosmos/base/v1beta1/coin'

export const protobufPackage = 'tendermint.fundraising'

/**
 * MsgCreateFixedPriceAuction defines a SDK message for creating a fixed price
 * auction.
 */
export interface MsgCreateFixedPriceAuction {
  /** auctioneer specifies the bech32-encoded address that creates the auction */
  auctioneer: string
  /** start_price specifies the starting price of the auction */
  start_price: string
  /** selling_coin specifies the selling coin for the auction */
  selling_coin: Coin | undefined
  /**
   * paying_coin_denom specifies the paying coin denom that bidders use to bid
   * for
   */
  paying_coin_denom: string
  /** vesting_schedules specifies the vesting schedules for the auction */
  vesting_schedules: VestingSchedule[]
  /** start_time specifies the start time of the plan */
  start_time: Date | undefined
  /** end_time specifies the end time of the plan */
  end_time: Date | undefined
}

/**
 * MsgCreateFixedPriceAuctionResponse defines the
 * Msg/MsgCreateFixedPriceAuctionResponse response type.
 */
export interface MsgCreateFixedPriceAuctionResponse {}

/**
 * MsgCreateBatchAuction defines a SDK message for creating an batch
 * auction.
 *
 * See:
 * https://github.com/tendermint/fundraising/tree/main/x/fundraising/spec/04_messages.md
 */
export interface MsgCreateBatchAuction {
  /** auctioneer specifies the bech32-encoded address that creates the auction */
  auctioneer: string
  /** start_price specifies the starting price of the auction */
  start_price: string
  /** min_bid_price specifies the minibum bid price */
  min_bid_price: string
  /** selling_coin specifies the selling coin for the auction */
  selling_coin: Coin | undefined
  /**
   * paying_coin_denom specifies the paying coin denom that bidders use to bid
   * for
   */
  paying_coin_denom: string
  /** vesting_schedules specifies the vesting schedules for the auction */
  vesting_schedules: VestingSchedule[]
  /**
   * maximum_extended_round specifies the maximum number of extended rounds for
   * the auction
   */
  max_extended_round: number
  /**
   * extended_round_rate specifies the rate that decides if the auction needs
   * another round
   */
  extended_round_rate: string
  /** start_time specifies the start time of the plan */
  start_time: Date | undefined
  /** end_time specifies the end time of the plan */
  end_time: Date | undefined
}

/**
 * MsgCreateBatchAuctionResponse defines the
 * Msg/MsgCreateBatchAuctionResponse response type.
 */
export interface MsgCreateBatchAuctionResponse {}

/**
 * MsgCancelAuction defines a SDK message for cancelling the auction.
 * Cancelling is only allowed when the auction hasn't started yet.
 */
export interface MsgCancelAuction {
  /**
   * auctioneer specifies the bech32-encoded address that is in charge of the
   * auction
   */
  auctioneer: string
  /** auction_id specifies the auction id */
  auction_id: number
}

/**
 * MsgCancelAuctionResponse defines the Msg/MsgCancelAuctionResponse
 * response type.
 */
export interface MsgCancelAuctionResponse {}

/** MsgPlaceBid defines a SDK message for placing a bid for the auction. */
export interface MsgPlaceBid {
  /** auction_id specifies the auction id */
  auction_id: number
  /** bidder specifies the bech32-encoded address that bids for the auction */
  bidder: string
  /**
   * type specifies the bid type; type 1 is fixed price, 2 is how-much-worth, 3
   * is how-many-coins
   */
  bid_type: BidType
  /**
   * price specifies the bid price.
   * The bid price must be the start price for fixed price auction whereas
   * the bide price can be any value that the bidder places.
   */
  price: string
  /**
   * coin specifies the paying amount of coin or the selling amount that the
   * bidder bids
   */
  coin: Coin | undefined
}

/** MsgPlaceBidResponse defines the Msg/MsgPlaceBidResponse response type. */
export interface MsgPlaceBidResponse {}

/**
 * MsgModifyBid defines a SDK message for modifying an existing bid for the
 * auction.
 */
export interface MsgModifyBid {
  /** auction_id specifies the auction id */
  auction_id: number
  /** bidder specifies the bech32-encoded address that bids for the auction */
  bidder: string
  /** bid_id specifies the bid id */
  bid_id: number
  /**
   * price specifies the bid price.
   * the bide price must be above or equal to the original value that the bidder
   * placed.
   */
  price: string
  /**
   * coin specifies the paying amount of coin or the selling amount that the
   * bidder bids
   */
  coin: Coin | undefined
}

/** MsgModifyBidResponse defines the Msg/MsgModifyBidResponse response type. */
export interface MsgModifyBidResponse {}

/**
 * MsgAddAllowedBidder defines a SDK message for adding an allowed bidder to the
 * auction.
 */
export interface MsgAddAllowedBidder {
  /** auction_id specifies the auction id */
  auction_id: number
  /**
   * allowed_bidder specifies the bidder who is allowed to bid and their maximum
   * bid amount
   */
  allowed_bidder: AllowedBidder | undefined
}

export interface MsgAddAllowedBidderResponse {}

const baseMsgCreateFixedPriceAuction: object = {
  auctioneer: '',
  start_price: '',
  paying_coin_denom: ''
}

export const MsgCreateFixedPriceAuction = {
  encode(
    message: MsgCreateFixedPriceAuction,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.auctioneer !== '') {
      writer.uint32(10).string(message.auctioneer)
    }
    if (message.start_price !== '') {
      writer.uint32(18).string(message.start_price)
    }
    if (message.selling_coin !== undefined) {
      Coin.encode(message.selling_coin, writer.uint32(26).fork()).ldelim()
    }
    if (message.paying_coin_denom !== '') {
      writer.uint32(34).string(message.paying_coin_denom)
    }
    for (const v of message.vesting_schedules) {
      VestingSchedule.encode(v!, writer.uint32(42).fork()).ldelim()
    }
    if (message.start_time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.start_time),
        writer.uint32(50).fork()
      ).ldelim()
    }
    if (message.end_time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.end_time),
        writer.uint32(58).fork()
      ).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateFixedPriceAuction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgCreateFixedPriceAuction
    } as MsgCreateFixedPriceAuction
    message.vesting_schedules = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.auctioneer = reader.string()
          break
        case 2:
          message.start_price = reader.string()
          break
        case 3:
          message.selling_coin = Coin.decode(reader, reader.uint32())
          break
        case 4:
          message.paying_coin_denom = reader.string()
          break
        case 5:
          message.vesting_schedules.push(
            VestingSchedule.decode(reader, reader.uint32())
          )
          break
        case 6:
          message.start_time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          )
          break
        case 7:
          message.end_time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          )
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateFixedPriceAuction {
    const message = {
      ...baseMsgCreateFixedPriceAuction
    } as MsgCreateFixedPriceAuction
    message.vesting_schedules = []
    if (object.auctioneer !== undefined && object.auctioneer !== null) {
      message.auctioneer = String(object.auctioneer)
    } else {
      message.auctioneer = ''
    }
    if (object.start_price !== undefined && object.start_price !== null) {
      message.start_price = String(object.start_price)
    } else {
      message.start_price = ''
    }
    if (object.selling_coin !== undefined && object.selling_coin !== null) {
      message.selling_coin = Coin.fromJSON(object.selling_coin)
    } else {
      message.selling_coin = undefined
    }
    if (
      object.paying_coin_denom !== undefined &&
      object.paying_coin_denom !== null
    ) {
      message.paying_coin_denom = String(object.paying_coin_denom)
    } else {
      message.paying_coin_denom = ''
    }
    if (
      object.vesting_schedules !== undefined &&
      object.vesting_schedules !== null
    ) {
      for (const e of object.vesting_schedules) {
        message.vesting_schedules.push(VestingSchedule.fromJSON(e))
      }
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.start_time = fromJsonTimestamp(object.start_time)
    } else {
      message.start_time = undefined
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.end_time = fromJsonTimestamp(object.end_time)
    } else {
      message.end_time = undefined
    }
    return message
  },

  toJSON(message: MsgCreateFixedPriceAuction): unknown {
    const obj: any = {}
    message.auctioneer !== undefined && (obj.auctioneer = message.auctioneer)
    message.start_price !== undefined && (obj.start_price = message.start_price)
    message.selling_coin !== undefined &&
      (obj.selling_coin = message.selling_coin
        ? Coin.toJSON(message.selling_coin)
        : undefined)
    message.paying_coin_denom !== undefined &&
      (obj.paying_coin_denom = message.paying_coin_denom)
    if (message.vesting_schedules) {
      obj.vesting_schedules = message.vesting_schedules.map((e) =>
        e ? VestingSchedule.toJSON(e) : undefined
      )
    } else {
      obj.vesting_schedules = []
    }
    message.start_time !== undefined &&
      (obj.start_time =
        message.start_time !== undefined
          ? message.start_time.toISOString()
          : null)
    message.end_time !== undefined &&
      (obj.end_time =
        message.end_time !== undefined ? message.end_time.toISOString() : null)
    return obj
  },

  fromPartial(
    object: DeepPartial<MsgCreateFixedPriceAuction>
  ): MsgCreateFixedPriceAuction {
    const message = {
      ...baseMsgCreateFixedPriceAuction
    } as MsgCreateFixedPriceAuction
    message.vesting_schedules = []
    if (object.auctioneer !== undefined && object.auctioneer !== null) {
      message.auctioneer = object.auctioneer
    } else {
      message.auctioneer = ''
    }
    if (object.start_price !== undefined && object.start_price !== null) {
      message.start_price = object.start_price
    } else {
      message.start_price = ''
    }
    if (object.selling_coin !== undefined && object.selling_coin !== null) {
      message.selling_coin = Coin.fromPartial(object.selling_coin)
    } else {
      message.selling_coin = undefined
    }
    if (
      object.paying_coin_denom !== undefined &&
      object.paying_coin_denom !== null
    ) {
      message.paying_coin_denom = object.paying_coin_denom
    } else {
      message.paying_coin_denom = ''
    }
    if (
      object.vesting_schedules !== undefined &&
      object.vesting_schedules !== null
    ) {
      for (const e of object.vesting_schedules) {
        message.vesting_schedules.push(VestingSchedule.fromPartial(e))
      }
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.start_time = object.start_time
    } else {
      message.start_time = undefined
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.end_time = object.end_time
    } else {
      message.end_time = undefined
    }
    return message
  }
}

const baseMsgCreateFixedPriceAuctionResponse: object = {}

export const MsgCreateFixedPriceAuctionResponse = {
  encode(
    _: MsgCreateFixedPriceAuctionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateFixedPriceAuctionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgCreateFixedPriceAuctionResponse
    } as MsgCreateFixedPriceAuctionResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgCreateFixedPriceAuctionResponse {
    const message = {
      ...baseMsgCreateFixedPriceAuctionResponse
    } as MsgCreateFixedPriceAuctionResponse
    return message
  },

  toJSON(_: MsgCreateFixedPriceAuctionResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(
    _: DeepPartial<MsgCreateFixedPriceAuctionResponse>
  ): MsgCreateFixedPriceAuctionResponse {
    const message = {
      ...baseMsgCreateFixedPriceAuctionResponse
    } as MsgCreateFixedPriceAuctionResponse
    return message
  }
}

const baseMsgCreateBatchAuction: object = {
  auctioneer: '',
  start_price: '',
  min_bid_price: '',
  paying_coin_denom: '',
  max_extended_round: 0,
  extended_round_rate: ''
}

export const MsgCreateBatchAuction = {
  encode(
    message: MsgCreateBatchAuction,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.auctioneer !== '') {
      writer.uint32(10).string(message.auctioneer)
    }
    if (message.start_price !== '') {
      writer.uint32(18).string(message.start_price)
    }
    if (message.min_bid_price !== '') {
      writer.uint32(26).string(message.min_bid_price)
    }
    if (message.selling_coin !== undefined) {
      Coin.encode(message.selling_coin, writer.uint32(34).fork()).ldelim()
    }
    if (message.paying_coin_denom !== '') {
      writer.uint32(42).string(message.paying_coin_denom)
    }
    for (const v of message.vesting_schedules) {
      VestingSchedule.encode(v!, writer.uint32(50).fork()).ldelim()
    }
    if (message.max_extended_round !== 0) {
      writer.uint32(56).uint32(message.max_extended_round)
    }
    if (message.extended_round_rate !== '') {
      writer.uint32(66).string(message.extended_round_rate)
    }
    if (message.start_time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.start_time),
        writer.uint32(74).fork()
      ).ldelim()
    }
    if (message.end_time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.end_time),
        writer.uint32(82).fork()
      ).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBatchAuction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateBatchAuction } as MsgCreateBatchAuction
    message.vesting_schedules = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.auctioneer = reader.string()
          break
        case 2:
          message.start_price = reader.string()
          break
        case 3:
          message.min_bid_price = reader.string()
          break
        case 4:
          message.selling_coin = Coin.decode(reader, reader.uint32())
          break
        case 5:
          message.paying_coin_denom = reader.string()
          break
        case 6:
          message.vesting_schedules.push(
            VestingSchedule.decode(reader, reader.uint32())
          )
          break
        case 7:
          message.max_extended_round = reader.uint32()
          break
        case 8:
          message.extended_round_rate = reader.string()
          break
        case 9:
          message.start_time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          )
          break
        case 10:
          message.end_time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          )
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateBatchAuction {
    const message = { ...baseMsgCreateBatchAuction } as MsgCreateBatchAuction
    message.vesting_schedules = []
    if (object.auctioneer !== undefined && object.auctioneer !== null) {
      message.auctioneer = String(object.auctioneer)
    } else {
      message.auctioneer = ''
    }
    if (object.start_price !== undefined && object.start_price !== null) {
      message.start_price = String(object.start_price)
    } else {
      message.start_price = ''
    }
    if (object.min_bid_price !== undefined && object.min_bid_price !== null) {
      message.min_bid_price = String(object.min_bid_price)
    } else {
      message.min_bid_price = ''
    }
    if (object.selling_coin !== undefined && object.selling_coin !== null) {
      message.selling_coin = Coin.fromJSON(object.selling_coin)
    } else {
      message.selling_coin = undefined
    }
    if (
      object.paying_coin_denom !== undefined &&
      object.paying_coin_denom !== null
    ) {
      message.paying_coin_denom = String(object.paying_coin_denom)
    } else {
      message.paying_coin_denom = ''
    }
    if (
      object.vesting_schedules !== undefined &&
      object.vesting_schedules !== null
    ) {
      for (const e of object.vesting_schedules) {
        message.vesting_schedules.push(VestingSchedule.fromJSON(e))
      }
    }
    if (
      object.max_extended_round !== undefined &&
      object.max_extended_round !== null
    ) {
      message.max_extended_round = Number(object.max_extended_round)
    } else {
      message.max_extended_round = 0
    }
    if (
      object.extended_round_rate !== undefined &&
      object.extended_round_rate !== null
    ) {
      message.extended_round_rate = String(object.extended_round_rate)
    } else {
      message.extended_round_rate = ''
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.start_time = fromJsonTimestamp(object.start_time)
    } else {
      message.start_time = undefined
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.end_time = fromJsonTimestamp(object.end_time)
    } else {
      message.end_time = undefined
    }
    return message
  },

  toJSON(message: MsgCreateBatchAuction): unknown {
    const obj: any = {}
    message.auctioneer !== undefined && (obj.auctioneer = message.auctioneer)
    message.start_price !== undefined && (obj.start_price = message.start_price)
    message.min_bid_price !== undefined &&
      (obj.min_bid_price = message.min_bid_price)
    message.selling_coin !== undefined &&
      (obj.selling_coin = message.selling_coin
        ? Coin.toJSON(message.selling_coin)
        : undefined)
    message.paying_coin_denom !== undefined &&
      (obj.paying_coin_denom = message.paying_coin_denom)
    if (message.vesting_schedules) {
      obj.vesting_schedules = message.vesting_schedules.map((e) =>
        e ? VestingSchedule.toJSON(e) : undefined
      )
    } else {
      obj.vesting_schedules = []
    }
    message.max_extended_round !== undefined &&
      (obj.max_extended_round = message.max_extended_round)
    message.extended_round_rate !== undefined &&
      (obj.extended_round_rate = message.extended_round_rate)
    message.start_time !== undefined &&
      (obj.start_time =
        message.start_time !== undefined
          ? message.start_time.toISOString()
          : null)
    message.end_time !== undefined &&
      (obj.end_time =
        message.end_time !== undefined ? message.end_time.toISOString() : null)
    return obj
  },

  fromPartial(
    object: DeepPartial<MsgCreateBatchAuction>
  ): MsgCreateBatchAuction {
    const message = { ...baseMsgCreateBatchAuction } as MsgCreateBatchAuction
    message.vesting_schedules = []
    if (object.auctioneer !== undefined && object.auctioneer !== null) {
      message.auctioneer = object.auctioneer
    } else {
      message.auctioneer = ''
    }
    if (object.start_price !== undefined && object.start_price !== null) {
      message.start_price = object.start_price
    } else {
      message.start_price = ''
    }
    if (object.min_bid_price !== undefined && object.min_bid_price !== null) {
      message.min_bid_price = object.min_bid_price
    } else {
      message.min_bid_price = ''
    }
    if (object.selling_coin !== undefined && object.selling_coin !== null) {
      message.selling_coin = Coin.fromPartial(object.selling_coin)
    } else {
      message.selling_coin = undefined
    }
    if (
      object.paying_coin_denom !== undefined &&
      object.paying_coin_denom !== null
    ) {
      message.paying_coin_denom = object.paying_coin_denom
    } else {
      message.paying_coin_denom = ''
    }
    if (
      object.vesting_schedules !== undefined &&
      object.vesting_schedules !== null
    ) {
      for (const e of object.vesting_schedules) {
        message.vesting_schedules.push(VestingSchedule.fromPartial(e))
      }
    }
    if (
      object.max_extended_round !== undefined &&
      object.max_extended_round !== null
    ) {
      message.max_extended_round = object.max_extended_round
    } else {
      message.max_extended_round = 0
    }
    if (
      object.extended_round_rate !== undefined &&
      object.extended_round_rate !== null
    ) {
      message.extended_round_rate = object.extended_round_rate
    } else {
      message.extended_round_rate = ''
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.start_time = object.start_time
    } else {
      message.start_time = undefined
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.end_time = object.end_time
    } else {
      message.end_time = undefined
    }
    return message
  }
}

const baseMsgCreateBatchAuctionResponse: object = {}

export const MsgCreateBatchAuctionResponse = {
  encode(
    _: MsgCreateBatchAuctionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateBatchAuctionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgCreateBatchAuctionResponse
    } as MsgCreateBatchAuctionResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgCreateBatchAuctionResponse {
    const message = {
      ...baseMsgCreateBatchAuctionResponse
    } as MsgCreateBatchAuctionResponse
    return message
  },

  toJSON(_: MsgCreateBatchAuctionResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(
    _: DeepPartial<MsgCreateBatchAuctionResponse>
  ): MsgCreateBatchAuctionResponse {
    const message = {
      ...baseMsgCreateBatchAuctionResponse
    } as MsgCreateBatchAuctionResponse
    return message
  }
}

const baseMsgCancelAuction: object = { auctioneer: '', auction_id: 0 }

export const MsgCancelAuction = {
  encode(message: MsgCancelAuction, writer: Writer = Writer.create()): Writer {
    if (message.auctioneer !== '') {
      writer.uint32(10).string(message.auctioneer)
    }
    if (message.auction_id !== 0) {
      writer.uint32(16).uint64(message.auction_id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCancelAuction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCancelAuction } as MsgCancelAuction
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.auctioneer = reader.string()
          break
        case 2:
          message.auction_id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCancelAuction {
    const message = { ...baseMsgCancelAuction } as MsgCancelAuction
    if (object.auctioneer !== undefined && object.auctioneer !== null) {
      message.auctioneer = String(object.auctioneer)
    } else {
      message.auctioneer = ''
    }
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auction_id = Number(object.auction_id)
    } else {
      message.auction_id = 0
    }
    return message
  },

  toJSON(message: MsgCancelAuction): unknown {
    const obj: any = {}
    message.auctioneer !== undefined && (obj.auctioneer = message.auctioneer)
    message.auction_id !== undefined && (obj.auction_id = message.auction_id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCancelAuction>): MsgCancelAuction {
    const message = { ...baseMsgCancelAuction } as MsgCancelAuction
    if (object.auctioneer !== undefined && object.auctioneer !== null) {
      message.auctioneer = object.auctioneer
    } else {
      message.auctioneer = ''
    }
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auction_id = object.auction_id
    } else {
      message.auction_id = 0
    }
    return message
  }
}

const baseMsgCancelAuctionResponse: object = {}

export const MsgCancelAuctionResponse = {
  encode(
    _: MsgCancelAuctionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCancelAuctionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgCancelAuctionResponse
    } as MsgCancelAuctionResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgCancelAuctionResponse {
    const message = {
      ...baseMsgCancelAuctionResponse
    } as MsgCancelAuctionResponse
    return message
  },

  toJSON(_: MsgCancelAuctionResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(
    _: DeepPartial<MsgCancelAuctionResponse>
  ): MsgCancelAuctionResponse {
    const message = {
      ...baseMsgCancelAuctionResponse
    } as MsgCancelAuctionResponse
    return message
  }
}

const baseMsgPlaceBid: object = {
  auction_id: 0,
  bidder: '',
  bid_type: 0,
  price: ''
}

export const MsgPlaceBid = {
  encode(message: MsgPlaceBid, writer: Writer = Writer.create()): Writer {
    if (message.auction_id !== 0) {
      writer.uint32(8).uint64(message.auction_id)
    }
    if (message.bidder !== '') {
      writer.uint32(18).string(message.bidder)
    }
    if (message.bid_type !== 0) {
      writer.uint32(24).int32(message.bid_type)
    }
    if (message.price !== '') {
      writer.uint32(34).string(message.price)
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(42).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgPlaceBid {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgPlaceBid } as MsgPlaceBid
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.auction_id = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.bidder = reader.string()
          break
        case 3:
          message.bid_type = reader.int32() as any
          break
        case 4:
          message.price = reader.string()
          break
        case 5:
          message.coin = Coin.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgPlaceBid {
    const message = { ...baseMsgPlaceBid } as MsgPlaceBid
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auction_id = Number(object.auction_id)
    } else {
      message.auction_id = 0
    }
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = String(object.bidder)
    } else {
      message.bidder = ''
    }
    if (object.bid_type !== undefined && object.bid_type !== null) {
      message.bid_type = bidTypeFromJSON(object.bid_type)
    } else {
      message.bid_type = 0
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = String(object.price)
    } else {
      message.price = ''
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromJSON(object.coin)
    } else {
      message.coin = undefined
    }
    return message
  },

  toJSON(message: MsgPlaceBid): unknown {
    const obj: any = {}
    message.auction_id !== undefined && (obj.auction_id = message.auction_id)
    message.bidder !== undefined && (obj.bidder = message.bidder)
    message.bid_type !== undefined &&
      (obj.bid_type = bidTypeToJSON(message.bid_type))
    message.price !== undefined && (obj.price = message.price)
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<MsgPlaceBid>): MsgPlaceBid {
    const message = { ...baseMsgPlaceBid } as MsgPlaceBid
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auction_id = object.auction_id
    } else {
      message.auction_id = 0
    }
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = object.bidder
    } else {
      message.bidder = ''
    }
    if (object.bid_type !== undefined && object.bid_type !== null) {
      message.bid_type = object.bid_type
    } else {
      message.bid_type = 0
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price
    } else {
      message.price = ''
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromPartial(object.coin)
    } else {
      message.coin = undefined
    }
    return message
  }
}

const baseMsgPlaceBidResponse: object = {}

export const MsgPlaceBidResponse = {
  encode(_: MsgPlaceBidResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgPlaceBidResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgPlaceBidResponse } as MsgPlaceBidResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgPlaceBidResponse {
    const message = { ...baseMsgPlaceBidResponse } as MsgPlaceBidResponse
    return message
  },

  toJSON(_: MsgPlaceBidResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgPlaceBidResponse>): MsgPlaceBidResponse {
    const message = { ...baseMsgPlaceBidResponse } as MsgPlaceBidResponse
    return message
  }
}

const baseMsgModifyBid: object = {
  auction_id: 0,
  bidder: '',
  bid_id: 0,
  price: ''
}

export const MsgModifyBid = {
  encode(message: MsgModifyBid, writer: Writer = Writer.create()): Writer {
    if (message.auction_id !== 0) {
      writer.uint32(8).uint64(message.auction_id)
    }
    if (message.bidder !== '') {
      writer.uint32(18).string(message.bidder)
    }
    if (message.bid_id !== 0) {
      writer.uint32(24).uint64(message.bid_id)
    }
    if (message.price !== '') {
      writer.uint32(34).string(message.price)
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(42).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgModifyBid {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgModifyBid } as MsgModifyBid
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.auction_id = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.bidder = reader.string()
          break
        case 3:
          message.bid_id = longToNumber(reader.uint64() as Long)
          break
        case 4:
          message.price = reader.string()
          break
        case 5:
          message.coin = Coin.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgModifyBid {
    const message = { ...baseMsgModifyBid } as MsgModifyBid
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auction_id = Number(object.auction_id)
    } else {
      message.auction_id = 0
    }
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = String(object.bidder)
    } else {
      message.bidder = ''
    }
    if (object.bid_id !== undefined && object.bid_id !== null) {
      message.bid_id = Number(object.bid_id)
    } else {
      message.bid_id = 0
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = String(object.price)
    } else {
      message.price = ''
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromJSON(object.coin)
    } else {
      message.coin = undefined
    }
    return message
  },

  toJSON(message: MsgModifyBid): unknown {
    const obj: any = {}
    message.auction_id !== undefined && (obj.auction_id = message.auction_id)
    message.bidder !== undefined && (obj.bidder = message.bidder)
    message.bid_id !== undefined && (obj.bid_id = message.bid_id)
    message.price !== undefined && (obj.price = message.price)
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<MsgModifyBid>): MsgModifyBid {
    const message = { ...baseMsgModifyBid } as MsgModifyBid
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auction_id = object.auction_id
    } else {
      message.auction_id = 0
    }
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = object.bidder
    } else {
      message.bidder = ''
    }
    if (object.bid_id !== undefined && object.bid_id !== null) {
      message.bid_id = object.bid_id
    } else {
      message.bid_id = 0
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price
    } else {
      message.price = ''
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromPartial(object.coin)
    } else {
      message.coin = undefined
    }
    return message
  }
}

const baseMsgModifyBidResponse: object = {}

export const MsgModifyBidResponse = {
  encode(_: MsgModifyBidResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgModifyBidResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgModifyBidResponse } as MsgModifyBidResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgModifyBidResponse {
    const message = { ...baseMsgModifyBidResponse } as MsgModifyBidResponse
    return message
  },

  toJSON(_: MsgModifyBidResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgModifyBidResponse>): MsgModifyBidResponse {
    const message = { ...baseMsgModifyBidResponse } as MsgModifyBidResponse
    return message
  }
}

const baseMsgAddAllowedBidder: object = { auction_id: 0 }

export const MsgAddAllowedBidder = {
  encode(
    message: MsgAddAllowedBidder,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.auction_id !== 0) {
      writer.uint32(8).uint64(message.auction_id)
    }
    if (message.allowed_bidder !== undefined) {
      AllowedBidder.encode(
        message.allowed_bidder,
        writer.uint32(18).fork()
      ).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddAllowedBidder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgAddAllowedBidder } as MsgAddAllowedBidder
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.auction_id = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.allowed_bidder = AllowedBidder.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgAddAllowedBidder {
    const message = { ...baseMsgAddAllowedBidder } as MsgAddAllowedBidder
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auction_id = Number(object.auction_id)
    } else {
      message.auction_id = 0
    }
    if (object.allowed_bidder !== undefined && object.allowed_bidder !== null) {
      message.allowed_bidder = AllowedBidder.fromJSON(object.allowed_bidder)
    } else {
      message.allowed_bidder = undefined
    }
    return message
  },

  toJSON(message: MsgAddAllowedBidder): unknown {
    const obj: any = {}
    message.auction_id !== undefined && (obj.auction_id = message.auction_id)
    message.allowed_bidder !== undefined &&
      (obj.allowed_bidder = message.allowed_bidder
        ? AllowedBidder.toJSON(message.allowed_bidder)
        : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<MsgAddAllowedBidder>): MsgAddAllowedBidder {
    const message = { ...baseMsgAddAllowedBidder } as MsgAddAllowedBidder
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auction_id = object.auction_id
    } else {
      message.auction_id = 0
    }
    if (object.allowed_bidder !== undefined && object.allowed_bidder !== null) {
      message.allowed_bidder = AllowedBidder.fromPartial(object.allowed_bidder)
    } else {
      message.allowed_bidder = undefined
    }
    return message
  }
}

const baseMsgAddAllowedBidderResponse: object = {}

export const MsgAddAllowedBidderResponse = {
  encode(
    _: MsgAddAllowedBidderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAddAllowedBidderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgAddAllowedBidderResponse
    } as MsgAddAllowedBidderResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgAddAllowedBidderResponse {
    const message = {
      ...baseMsgAddAllowedBidderResponse
    } as MsgAddAllowedBidderResponse
    return message
  },

  toJSON(_: MsgAddAllowedBidderResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(
    _: DeepPartial<MsgAddAllowedBidderResponse>
  ): MsgAddAllowedBidderResponse {
    const message = {
      ...baseMsgAddAllowedBidderResponse
    } as MsgAddAllowedBidderResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /**
   * this line is used by Starport scaffolding # proto/tx/rpc
   * Submit a create fixed price auction message.
   */
  CreateFixedPriceAuction(
    request: MsgCreateFixedPriceAuction
  ): Promise<MsgCreateFixedPriceAuctionResponse>
  /** Submit a create batch auction message. */
  CreateBatchAuction(
    request: MsgCreateBatchAuction
  ): Promise<MsgCreateBatchAuctionResponse>
  /** CancelAuction defines a method to cancel the auction message. */
  CancelAuction(request: MsgCancelAuction): Promise<MsgCancelAuctionResponse>
  /** PlaceBid defines a method to place a bid message. */
  PlaceBid(request: MsgPlaceBid): Promise<MsgPlaceBidResponse>
  /** ModifyBid defines a method to modify the bid message. */
  ModifyBid(request: MsgModifyBid): Promise<MsgModifyBidResponse>
  /**
   * AddAllowedBidder defines a method sto add a single allowed bidder message.
   * This is for the testing purpose and it must not be used in mainnet.
   */
  AddAllowedBidder(
    request: MsgAddAllowedBidder
  ): Promise<MsgAddAllowedBidderResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateFixedPriceAuction(
    request: MsgCreateFixedPriceAuction
  ): Promise<MsgCreateFixedPriceAuctionResponse> {
    const data = MsgCreateFixedPriceAuction.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.fundraising.Msg',
      'CreateFixedPriceAuction',
      data
    )
    return promise.then((data) =>
      MsgCreateFixedPriceAuctionResponse.decode(new Reader(data))
    )
  }

  CreateBatchAuction(
    request: MsgCreateBatchAuction
  ): Promise<MsgCreateBatchAuctionResponse> {
    const data = MsgCreateBatchAuction.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.fundraising.Msg',
      'CreateBatchAuction',
      data
    )
    return promise.then((data) =>
      MsgCreateBatchAuctionResponse.decode(new Reader(data))
    )
  }

  CancelAuction(request: MsgCancelAuction): Promise<MsgCancelAuctionResponse> {
    const data = MsgCancelAuction.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.fundraising.Msg',
      'CancelAuction',
      data
    )
    return promise.then((data) =>
      MsgCancelAuctionResponse.decode(new Reader(data))
    )
  }

  PlaceBid(request: MsgPlaceBid): Promise<MsgPlaceBidResponse> {
    const data = MsgPlaceBid.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.fundraising.Msg',
      'PlaceBid',
      data
    )
    return promise.then((data) => MsgPlaceBidResponse.decode(new Reader(data)))
  }

  ModifyBid(request: MsgModifyBid): Promise<MsgModifyBidResponse> {
    const data = MsgModifyBid.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.fundraising.Msg',
      'ModifyBid',
      data
    )
    return promise.then((data) => MsgModifyBidResponse.decode(new Reader(data)))
  }

  AddAllowedBidder(
    request: MsgAddAllowedBidder
  ): Promise<MsgAddAllowedBidderResponse> {
    const data = MsgAddAllowedBidder.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.fundraising.Msg',
      'AddAllowedBidder',
      data
    )
    return promise.then((data) =>
      MsgAddAllowedBidderResponse.decode(new Reader(data))
    )
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000
  const nanos = (date.getTime() % 1_000) * 1_000_000
  return { seconds, nanos }
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000
  millis += t.nanos / 1_000_000
  return new Date(millis)
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o
  } else if (typeof o === 'string') {
    return new Date(o)
  } else {
    return fromTimestamp(Timestamp.fromJSON(o))
  }
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
