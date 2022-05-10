/* eslint-disable */
import { Timestamp } from '../google/protobuf/timestamp'
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import { Coin } from '../cosmos/base/v1beta1/coin'

export const protobufPackage = 'tendermint.fundraising'

/** AuctionType enumerates the valid types of an auction. */
export enum AuctionType {
  /** AUCTION_TYPE_UNSPECIFIED - AUCTION_TYPE_UNSPECIFIED defines the default auction type */
  AUCTION_TYPE_UNSPECIFIED = 0,
  /** AUCTION_TYPE_FIXED_PRICE - AUCTION_TYPE_FIXED_PRICE defines the fixed price auction type */
  AUCTION_TYPE_FIXED_PRICE = 1,
  /** AUCTION_TYPE_BATCH - AUCTION_TYPE_BATCH defines the batch auction type */
  AUCTION_TYPE_BATCH = 2,
  UNRECOGNIZED = -1
}

export function auctionTypeFromJSON(object: any): AuctionType {
  switch (object) {
    case 0:
    case 'AUCTION_TYPE_UNSPECIFIED':
      return AuctionType.AUCTION_TYPE_UNSPECIFIED
    case 1:
    case 'AUCTION_TYPE_FIXED_PRICE':
      return AuctionType.AUCTION_TYPE_FIXED_PRICE
    case 2:
    case 'AUCTION_TYPE_BATCH':
      return AuctionType.AUCTION_TYPE_BATCH
    case -1:
    case 'UNRECOGNIZED':
    default:
      return AuctionType.UNRECOGNIZED
  }
}

export function auctionTypeToJSON(object: AuctionType): string {
  switch (object) {
    case AuctionType.AUCTION_TYPE_UNSPECIFIED:
      return 'AUCTION_TYPE_UNSPECIFIED'
    case AuctionType.AUCTION_TYPE_FIXED_PRICE:
      return 'AUCTION_TYPE_FIXED_PRICE'
    case AuctionType.AUCTION_TYPE_BATCH:
      return 'AUCTION_TYPE_BATCH'
    default:
      return 'UNKNOWN'
  }
}

/** AuctionStatus enumerates the valid status of an auction. */
export enum AuctionStatus {
  /** AUCTION_STATUS_UNSPECIFIED - AUCTION_STATUS_UNSPECIFIED defines the default auction status */
  AUCTION_STATUS_UNSPECIFIED = 0,
  /** AUCTION_STATUS_STANDBY - AUCTION_STATUS_STANDBY defines the standby auction status */
  AUCTION_STATUS_STANDBY = 1,
  /** AUCTION_STATUS_STARTED - AUCTION_STATUS_STARTED defines the started auction status */
  AUCTION_STATUS_STARTED = 2,
  /** AUCTION_STATUS_VESTING - AUCTION_STATUS_VESTING defines the vesting auction status */
  AUCTION_STATUS_VESTING = 3,
  /** AUCTION_STATUS_FINISHED - AUCTION_STATUS_FINISHED defines the finished auction status */
  AUCTION_STATUS_FINISHED = 4,
  /** AUCTION_STATUS_CANCELLED - AUCTION_STATUS_CANCELLED defines the cancelled auction status */
  AUCTION_STATUS_CANCELLED = 5,
  UNRECOGNIZED = -1
}

export function auctionStatusFromJSON(object: any): AuctionStatus {
  switch (object) {
    case 0:
    case 'AUCTION_STATUS_UNSPECIFIED':
      return AuctionStatus.AUCTION_STATUS_UNSPECIFIED
    case 1:
    case 'AUCTION_STATUS_STANDBY':
      return AuctionStatus.AUCTION_STATUS_STANDBY
    case 2:
    case 'AUCTION_STATUS_STARTED':
      return AuctionStatus.AUCTION_STATUS_STARTED
    case 3:
    case 'AUCTION_STATUS_VESTING':
      return AuctionStatus.AUCTION_STATUS_VESTING
    case 4:
    case 'AUCTION_STATUS_FINISHED':
      return AuctionStatus.AUCTION_STATUS_FINISHED
    case 5:
    case 'AUCTION_STATUS_CANCELLED':
      return AuctionStatus.AUCTION_STATUS_CANCELLED
    case -1:
    case 'UNRECOGNIZED':
    default:
      return AuctionStatus.UNRECOGNIZED
  }
}

export function auctionStatusToJSON(object: AuctionStatus): string {
  switch (object) {
    case AuctionStatus.AUCTION_STATUS_UNSPECIFIED:
      return 'AUCTION_STATUS_UNSPECIFIED'
    case AuctionStatus.AUCTION_STATUS_STANDBY:
      return 'AUCTION_STATUS_STANDBY'
    case AuctionStatus.AUCTION_STATUS_STARTED:
      return 'AUCTION_STATUS_STARTED'
    case AuctionStatus.AUCTION_STATUS_VESTING:
      return 'AUCTION_STATUS_VESTING'
    case AuctionStatus.AUCTION_STATUS_FINISHED:
      return 'AUCTION_STATUS_FINISHED'
    case AuctionStatus.AUCTION_STATUS_CANCELLED:
      return 'AUCTION_STATUS_CANCELLED'
    default:
      return 'UNKNOWN'
  }
}

/** BidType enumerates the valid types of a bid. */
export enum BidType {
  /** BID_TYPE_UNSPECIFIED - BID_TYPE_UNSPECIFIED defines the default bid type */
  BID_TYPE_UNSPECIFIED = 0,
  /** BID_TYPE_FIXED_PRICE - BID_TYPE_FIXED_PRICE defines a bid type for a fixed price auction type */
  BID_TYPE_FIXED_PRICE = 1,
  /**
   * BID_TYPE_BATCH_WORTH - BID_TYPE_BATCH_WORTH defines a bid type for How-Much-Worth-to-Buy of a
   * batch auction
   */
  BID_TYPE_BATCH_WORTH = 2,
  /**
   * BID_TYPE_BATCH_MANY - BID_TYPE_BATCH_MANY defines a bid type for How-Many-Coins-to-Buy of a batch
   * auction
   */
  BID_TYPE_BATCH_MANY = 3,
  UNRECOGNIZED = -1
}

export function bidTypeFromJSON(object: any): BidType {
  switch (object) {
    case 0:
    case 'BID_TYPE_UNSPECIFIED':
      return BidType.BID_TYPE_UNSPECIFIED
    case 1:
    case 'BID_TYPE_FIXED_PRICE':
      return BidType.BID_TYPE_FIXED_PRICE
    case 2:
    case 'BID_TYPE_BATCH_WORTH':
      return BidType.BID_TYPE_BATCH_WORTH
    case 3:
    case 'BID_TYPE_BATCH_MANY':
      return BidType.BID_TYPE_BATCH_MANY
    case -1:
    case 'UNRECOGNIZED':
    default:
      return BidType.UNRECOGNIZED
  }
}

export function bidTypeToJSON(object: BidType): string {
  switch (object) {
    case BidType.BID_TYPE_UNSPECIFIED:
      return 'BID_TYPE_UNSPECIFIED'
    case BidType.BID_TYPE_FIXED_PRICE:
      return 'BID_TYPE_FIXED_PRICE'
    case BidType.BID_TYPE_BATCH_WORTH:
      return 'BID_TYPE_BATCH_WORTH'
    case BidType.BID_TYPE_BATCH_MANY:
      return 'BID_TYPE_BATCH_MANY'
    default:
      return 'UNKNOWN'
  }
}

/** AddressType enumerates the available types of a address. */
export enum AddressType {
  /** ADDRESS_TYPE_32_BYTES - the 32 bytes length address type of ADR 028. */
  ADDRESS_TYPE_32_BYTES = 0,
  /** ADDRESS_TYPE_20_BYTES - the default 20 bytes length address type. */
  ADDRESS_TYPE_20_BYTES = 1,
  UNRECOGNIZED = -1
}

export function addressTypeFromJSON(object: any): AddressType {
  switch (object) {
    case 0:
    case 'ADDRESS_TYPE_32_BYTES':
      return AddressType.ADDRESS_TYPE_32_BYTES
    case 1:
    case 'ADDRESS_TYPE_20_BYTES':
      return AddressType.ADDRESS_TYPE_20_BYTES
    case -1:
    case 'UNRECOGNIZED':
    default:
      return AddressType.UNRECOGNIZED
  }
}

export function addressTypeToJSON(object: AddressType): string {
  switch (object) {
    case AddressType.ADDRESS_TYPE_32_BYTES:
      return 'ADDRESS_TYPE_32_BYTES'
    case AddressType.ADDRESS_TYPE_20_BYTES:
      return 'ADDRESS_TYPE_20_BYTES'
    default:
      return 'UNKNOWN'
  }
}

/**
 * BaseAuction defines a base auction type. It contains all the necessary fields
 * for basic auction functionality. Any custom auction type should extend this
 * type for additional functionality (e.g. batch auction, fixed price
 * auction).
 */
export interface BaseAuction {
  /** id specifies index of the auction */
  id: number
  /**
   * type specifies the auction type
   * type 1 is fixed price and 2 is batch auction
   */
  type: AuctionType
  /** auctioneer specifies the bech32-encoded address that creates the auction */
  auctioneer: string
  /**
   * selling_reserve_address specifies the bech32-encoded address that has all
   * the selling coin
   */
  selling_reserve_address: string
  /**
   * paying_reserve_address specifies the bech32-encoded address that has all
   * the paying coin
   */
  paying_reserve_address: string
  /**
   * start_price specifies the starting price of the auction
   * it is determined by the proportion of the price of paying coin denom
   */
  start_price: string
  /** selling_coin specifies the selling coin for the auction */
  selling_coin: Coin | undefined
  /**
   * paying_coin_denom specifies the paying coin denom that bidders use to bid
   * for
   */
  paying_coin_denom: string
  /**
   * vesting_reserve_address specifies the bech32-encoded vesting address that
   * holds vesting amounts of coin
   */
  vesting_reserve_address: string
  /** vesting_schedules specifies the vesting schedules for the auction */
  vesting_schedules: VestingSchedule[]
  /** start_time specifies the start time of the plan */
  start_time: Date | undefined
  /** end_times specifies the end time of the plan */
  end_times: Date[]
  /** status specifies the auction status */
  status: AuctionStatus
}

/**
 * FixedPriceAuction defines the fixed price auction type. It is the most
 * simpliest way to raise funds. An auctioneer sets the starting price for each
 * selling amounts of coin and bidders bid to purchase based on the fixed price.
 */
export interface FixedPriceAuction {
  base_auction: BaseAuction | undefined
  /** remaining_coin specifies the remaining amount of selling coin to sell */
  remaining_selling_coin: Coin | undefined
}

/**
 * BatchAuction defines a batch auction type. It allows bidders to participate
 * in the auction by placing their limit orders with a bid price they are
 * willing to bid within the auction period. They can place multiple bids with
 * different bid prices and if they want to modify their existing bid, they only
 * have an option to modify with a higher bid price. Under the hood, an order
 * book is created to record the bids to calculate the matched bidders.
 */
export interface BatchAuction {
  base_auction: BaseAuction | undefined
  /** min_bid_price specifies the minibum bid price */
  min_bid_price: string
  /** matched_price specifies the matched price of the auction */
  matched_price: string
  /** max_extended_round specifies a maximum number of extended rounds */
  max_extended_round: number
  /**
   * extended_round_rate specifies the rate that decides if the auction needs
   * another round
   */
  extended_round_rate: string
}

/** VestingSchedule defines the vesting schedule for the owner of an auction. */
export interface VestingSchedule {
  /** release_time specifies the time for distribution of the vesting coin */
  release_time: Date | undefined
  /** weight specifies the vesting weight for the schedule */
  weight: string
}

/** VestingQueue defines the vesting queue. */
export interface VestingQueue {
  /** auction_id specifies the id of the auction */
  auction_id: number
  /** auctioneer specifies the bech32-encoded address that creates the auction */
  auctioneer: string
  /** paying_coin specifies the paying amount of coin */
  paying_coin: Coin | undefined
  /** release_time specifies the timestamp of the vesting schedule */
  release_time: Date | undefined
  /** released specifies the status of distribution */
  released: boolean
}

/** AllowedBidder defines an allowed bidder for the auction. */
export interface AllowedBidder {
  /** bidder specifies the bech32-encoded address that bids for the auction */
  bidder: string
  /** max_bid_amount specifies the maximum bid amount that the bidder can bid */
  max_bid_amount: string
}

/** Bid defines a standard bid for an auction. */
export interface Bid {
  /** auction_id specifies the id of the auction */
  auction_id: number
  /** bidder specifies the bech32-encoded address that bids for the auction */
  bidder: string
  /** id specifies an index of a bid for the bidder */
  id: number
  /**
   * type specifies the bid type; type 1 is fixed price, 2 is how-much-worth, 3
   * is how-many-coins
   */
  type: BidType
  /** price specifies the bid price in which price the bidder places the bid */
  price: string
  /**
   * coin specifies the amount of coin that the bidder bids
   * for a fixed price auction, the denom is of the paying coin.
   * for a batch auction of how-much-worth, the denom is of the paying coin.
   * for a batch auction of how-many-coins, the denom is of the selling coin.
   */
  coin: Coin | undefined
  /**
   * is_matched specifies the bid that is a winning bid and enables the bidder
   * to purchase the selling coin
   */
  is_matched: boolean
}

const baseBaseAuction: object = {
  id: 0,
  type: 0,
  auctioneer: '',
  selling_reserve_address: '',
  paying_reserve_address: '',
  start_price: '',
  paying_coin_denom: '',
  vesting_reserve_address: '',
  status: 0
}

export const BaseAuction = {
  encode(message: BaseAuction, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type)
    }
    if (message.auctioneer !== '') {
      writer.uint32(26).string(message.auctioneer)
    }
    if (message.selling_reserve_address !== '') {
      writer.uint32(34).string(message.selling_reserve_address)
    }
    if (message.paying_reserve_address !== '') {
      writer.uint32(42).string(message.paying_reserve_address)
    }
    if (message.start_price !== '') {
      writer.uint32(50).string(message.start_price)
    }
    if (message.selling_coin !== undefined) {
      Coin.encode(message.selling_coin, writer.uint32(58).fork()).ldelim()
    }
    if (message.paying_coin_denom !== '') {
      writer.uint32(66).string(message.paying_coin_denom)
    }
    if (message.vesting_reserve_address !== '') {
      writer.uint32(74).string(message.vesting_reserve_address)
    }
    for (const v of message.vesting_schedules) {
      VestingSchedule.encode(v!, writer.uint32(82).fork()).ldelim()
    }
    if (message.start_time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.start_time),
        writer.uint32(90).fork()
      ).ldelim()
    }
    for (const v of message.end_times) {
      Timestamp.encode(toTimestamp(v!), writer.uint32(98).fork()).ldelim()
    }
    if (message.status !== 0) {
      writer.uint32(104).int32(message.status)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): BaseAuction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseBaseAuction } as BaseAuction
    message.vesting_schedules = []
    message.end_times = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.type = reader.int32() as any
          break
        case 3:
          message.auctioneer = reader.string()
          break
        case 4:
          message.selling_reserve_address = reader.string()
          break
        case 5:
          message.paying_reserve_address = reader.string()
          break
        case 6:
          message.start_price = reader.string()
          break
        case 7:
          message.selling_coin = Coin.decode(reader, reader.uint32())
          break
        case 8:
          message.paying_coin_denom = reader.string()
          break
        case 9:
          message.vesting_reserve_address = reader.string()
          break
        case 10:
          message.vesting_schedules.push(
            VestingSchedule.decode(reader, reader.uint32())
          )
          break
        case 11:
          message.start_time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          )
          break
        case 12:
          message.end_times.push(
            fromTimestamp(Timestamp.decode(reader, reader.uint32()))
          )
          break
        case 13:
          message.status = reader.int32() as any
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): BaseAuction {
    const message = { ...baseBaseAuction } as BaseAuction
    message.vesting_schedules = []
    message.end_times = []
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = auctionTypeFromJSON(object.type)
    } else {
      message.type = 0
    }
    if (object.auctioneer !== undefined && object.auctioneer !== null) {
      message.auctioneer = String(object.auctioneer)
    } else {
      message.auctioneer = ''
    }
    if (
      object.selling_reserve_address !== undefined &&
      object.selling_reserve_address !== null
    ) {
      message.selling_reserve_address = String(object.selling_reserve_address)
    } else {
      message.selling_reserve_address = ''
    }
    if (
      object.paying_reserve_address !== undefined &&
      object.paying_reserve_address !== null
    ) {
      message.paying_reserve_address = String(object.paying_reserve_address)
    } else {
      message.paying_reserve_address = ''
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
      object.vesting_reserve_address !== undefined &&
      object.vesting_reserve_address !== null
    ) {
      message.vesting_reserve_address = String(object.vesting_reserve_address)
    } else {
      message.vesting_reserve_address = ''
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
    if (object.end_times !== undefined && object.end_times !== null) {
      for (const e of object.end_times) {
        message.end_times.push(fromJsonTimestamp(e))
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = auctionStatusFromJSON(object.status)
    } else {
      message.status = 0
    }
    return message
  },

  toJSON(message: BaseAuction): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    message.type !== undefined && (obj.type = auctionTypeToJSON(message.type))
    message.auctioneer !== undefined && (obj.auctioneer = message.auctioneer)
    message.selling_reserve_address !== undefined &&
      (obj.selling_reserve_address = message.selling_reserve_address)
    message.paying_reserve_address !== undefined &&
      (obj.paying_reserve_address = message.paying_reserve_address)
    message.start_price !== undefined && (obj.start_price = message.start_price)
    message.selling_coin !== undefined &&
      (obj.selling_coin = message.selling_coin
        ? Coin.toJSON(message.selling_coin)
        : undefined)
    message.paying_coin_denom !== undefined &&
      (obj.paying_coin_denom = message.paying_coin_denom)
    message.vesting_reserve_address !== undefined &&
      (obj.vesting_reserve_address = message.vesting_reserve_address)
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
    if (message.end_times) {
      obj.end_times = message.end_times.map((e) =>
        e !== undefined ? e.toISOString() : null
      )
    } else {
      obj.end_times = []
    }
    message.status !== undefined &&
      (obj.status = auctionStatusToJSON(message.status))
    return obj
  },

  fromPartial(object: DeepPartial<BaseAuction>): BaseAuction {
    const message = { ...baseBaseAuction } as BaseAuction
    message.vesting_schedules = []
    message.end_times = []
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type
    } else {
      message.type = 0
    }
    if (object.auctioneer !== undefined && object.auctioneer !== null) {
      message.auctioneer = object.auctioneer
    } else {
      message.auctioneer = ''
    }
    if (
      object.selling_reserve_address !== undefined &&
      object.selling_reserve_address !== null
    ) {
      message.selling_reserve_address = object.selling_reserve_address
    } else {
      message.selling_reserve_address = ''
    }
    if (
      object.paying_reserve_address !== undefined &&
      object.paying_reserve_address !== null
    ) {
      message.paying_reserve_address = object.paying_reserve_address
    } else {
      message.paying_reserve_address = ''
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
      object.vesting_reserve_address !== undefined &&
      object.vesting_reserve_address !== null
    ) {
      message.vesting_reserve_address = object.vesting_reserve_address
    } else {
      message.vesting_reserve_address = ''
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
    if (object.end_times !== undefined && object.end_times !== null) {
      for (const e of object.end_times) {
        message.end_times.push(e)
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status
    } else {
      message.status = 0
    }
    return message
  }
}

const baseFixedPriceAuction: object = {}

export const FixedPriceAuction = {
  encode(message: FixedPriceAuction, writer: Writer = Writer.create()): Writer {
    if (message.base_auction !== undefined) {
      BaseAuction.encode(
        message.base_auction,
        writer.uint32(10).fork()
      ).ldelim()
    }
    if (message.remaining_selling_coin !== undefined) {
      Coin.encode(
        message.remaining_selling_coin,
        writer.uint32(18).fork()
      ).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): FixedPriceAuction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseFixedPriceAuction } as FixedPriceAuction
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.base_auction = BaseAuction.decode(reader, reader.uint32())
          break
        case 2:
          message.remaining_selling_coin = Coin.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): FixedPriceAuction {
    const message = { ...baseFixedPriceAuction } as FixedPriceAuction
    if (object.base_auction !== undefined && object.base_auction !== null) {
      message.base_auction = BaseAuction.fromJSON(object.base_auction)
    } else {
      message.base_auction = undefined
    }
    if (
      object.remaining_selling_coin !== undefined &&
      object.remaining_selling_coin !== null
    ) {
      message.remaining_selling_coin = Coin.fromJSON(
        object.remaining_selling_coin
      )
    } else {
      message.remaining_selling_coin = undefined
    }
    return message
  },

  toJSON(message: FixedPriceAuction): unknown {
    const obj: any = {}
    message.base_auction !== undefined &&
      (obj.base_auction = message.base_auction
        ? BaseAuction.toJSON(message.base_auction)
        : undefined)
    message.remaining_selling_coin !== undefined &&
      (obj.remaining_selling_coin = message.remaining_selling_coin
        ? Coin.toJSON(message.remaining_selling_coin)
        : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<FixedPriceAuction>): FixedPriceAuction {
    const message = { ...baseFixedPriceAuction } as FixedPriceAuction
    if (object.base_auction !== undefined && object.base_auction !== null) {
      message.base_auction = BaseAuction.fromPartial(object.base_auction)
    } else {
      message.base_auction = undefined
    }
    if (
      object.remaining_selling_coin !== undefined &&
      object.remaining_selling_coin !== null
    ) {
      message.remaining_selling_coin = Coin.fromPartial(
        object.remaining_selling_coin
      )
    } else {
      message.remaining_selling_coin = undefined
    }
    return message
  }
}

const baseBatchAuction: object = {
  min_bid_price: '',
  matched_price: '',
  max_extended_round: 0,
  extended_round_rate: ''
}

export const BatchAuction = {
  encode(message: BatchAuction, writer: Writer = Writer.create()): Writer {
    if (message.base_auction !== undefined) {
      BaseAuction.encode(
        message.base_auction,
        writer.uint32(10).fork()
      ).ldelim()
    }
    if (message.min_bid_price !== '') {
      writer.uint32(18).string(message.min_bid_price)
    }
    if (message.matched_price !== '') {
      writer.uint32(26).string(message.matched_price)
    }
    if (message.max_extended_round !== 0) {
      writer.uint32(32).uint32(message.max_extended_round)
    }
    if (message.extended_round_rate !== '') {
      writer.uint32(42).string(message.extended_round_rate)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): BatchAuction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseBatchAuction } as BatchAuction
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.base_auction = BaseAuction.decode(reader, reader.uint32())
          break
        case 2:
          message.min_bid_price = reader.string()
          break
        case 3:
          message.matched_price = reader.string()
          break
        case 4:
          message.max_extended_round = reader.uint32()
          break
        case 5:
          message.extended_round_rate = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): BatchAuction {
    const message = { ...baseBatchAuction } as BatchAuction
    if (object.base_auction !== undefined && object.base_auction !== null) {
      message.base_auction = BaseAuction.fromJSON(object.base_auction)
    } else {
      message.base_auction = undefined
    }
    if (object.min_bid_price !== undefined && object.min_bid_price !== null) {
      message.min_bid_price = String(object.min_bid_price)
    } else {
      message.min_bid_price = ''
    }
    if (object.matched_price !== undefined && object.matched_price !== null) {
      message.matched_price = String(object.matched_price)
    } else {
      message.matched_price = ''
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
    return message
  },

  toJSON(message: BatchAuction): unknown {
    const obj: any = {}
    message.base_auction !== undefined &&
      (obj.base_auction = message.base_auction
        ? BaseAuction.toJSON(message.base_auction)
        : undefined)
    message.min_bid_price !== undefined &&
      (obj.min_bid_price = message.min_bid_price)
    message.matched_price !== undefined &&
      (obj.matched_price = message.matched_price)
    message.max_extended_round !== undefined &&
      (obj.max_extended_round = message.max_extended_round)
    message.extended_round_rate !== undefined &&
      (obj.extended_round_rate = message.extended_round_rate)
    return obj
  },

  fromPartial(object: DeepPartial<BatchAuction>): BatchAuction {
    const message = { ...baseBatchAuction } as BatchAuction
    if (object.base_auction !== undefined && object.base_auction !== null) {
      message.base_auction = BaseAuction.fromPartial(object.base_auction)
    } else {
      message.base_auction = undefined
    }
    if (object.min_bid_price !== undefined && object.min_bid_price !== null) {
      message.min_bid_price = object.min_bid_price
    } else {
      message.min_bid_price = ''
    }
    if (object.matched_price !== undefined && object.matched_price !== null) {
      message.matched_price = object.matched_price
    } else {
      message.matched_price = ''
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
    return message
  }
}

const baseVestingSchedule: object = { weight: '' }

export const VestingSchedule = {
  encode(message: VestingSchedule, writer: Writer = Writer.create()): Writer {
    if (message.release_time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.release_time),
        writer.uint32(10).fork()
      ).ldelim()
    }
    if (message.weight !== '') {
      writer.uint32(18).string(message.weight)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): VestingSchedule {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseVestingSchedule } as VestingSchedule
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.release_time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          )
          break
        case 2:
          message.weight = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): VestingSchedule {
    const message = { ...baseVestingSchedule } as VestingSchedule
    if (object.release_time !== undefined && object.release_time !== null) {
      message.release_time = fromJsonTimestamp(object.release_time)
    } else {
      message.release_time = undefined
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = String(object.weight)
    } else {
      message.weight = ''
    }
    return message
  },

  toJSON(message: VestingSchedule): unknown {
    const obj: any = {}
    message.release_time !== undefined &&
      (obj.release_time =
        message.release_time !== undefined
          ? message.release_time.toISOString()
          : null)
    message.weight !== undefined && (obj.weight = message.weight)
    return obj
  },

  fromPartial(object: DeepPartial<VestingSchedule>): VestingSchedule {
    const message = { ...baseVestingSchedule } as VestingSchedule
    if (object.release_time !== undefined && object.release_time !== null) {
      message.release_time = object.release_time
    } else {
      message.release_time = undefined
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight
    } else {
      message.weight = ''
    }
    return message
  }
}

const baseVestingQueue: object = {
  auction_id: 0,
  auctioneer: '',
  released: false
}

export const VestingQueue = {
  encode(message: VestingQueue, writer: Writer = Writer.create()): Writer {
    if (message.auction_id !== 0) {
      writer.uint32(8).uint64(message.auction_id)
    }
    if (message.auctioneer !== '') {
      writer.uint32(18).string(message.auctioneer)
    }
    if (message.paying_coin !== undefined) {
      Coin.encode(message.paying_coin, writer.uint32(26).fork()).ldelim()
    }
    if (message.release_time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.release_time),
        writer.uint32(34).fork()
      ).ldelim()
    }
    if (message.released === true) {
      writer.uint32(40).bool(message.released)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): VestingQueue {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseVestingQueue } as VestingQueue
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.auction_id = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.auctioneer = reader.string()
          break
        case 3:
          message.paying_coin = Coin.decode(reader, reader.uint32())
          break
        case 4:
          message.release_time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          )
          break
        case 5:
          message.released = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): VestingQueue {
    const message = { ...baseVestingQueue } as VestingQueue
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auction_id = Number(object.auction_id)
    } else {
      message.auction_id = 0
    }
    if (object.auctioneer !== undefined && object.auctioneer !== null) {
      message.auctioneer = String(object.auctioneer)
    } else {
      message.auctioneer = ''
    }
    if (object.paying_coin !== undefined && object.paying_coin !== null) {
      message.paying_coin = Coin.fromJSON(object.paying_coin)
    } else {
      message.paying_coin = undefined
    }
    if (object.release_time !== undefined && object.release_time !== null) {
      message.release_time = fromJsonTimestamp(object.release_time)
    } else {
      message.release_time = undefined
    }
    if (object.released !== undefined && object.released !== null) {
      message.released = Boolean(object.released)
    } else {
      message.released = false
    }
    return message
  },

  toJSON(message: VestingQueue): unknown {
    const obj: any = {}
    message.auction_id !== undefined && (obj.auction_id = message.auction_id)
    message.auctioneer !== undefined && (obj.auctioneer = message.auctioneer)
    message.paying_coin !== undefined &&
      (obj.paying_coin = message.paying_coin
        ? Coin.toJSON(message.paying_coin)
        : undefined)
    message.release_time !== undefined &&
      (obj.release_time =
        message.release_time !== undefined
          ? message.release_time.toISOString()
          : null)
    message.released !== undefined && (obj.released = message.released)
    return obj
  },

  fromPartial(object: DeepPartial<VestingQueue>): VestingQueue {
    const message = { ...baseVestingQueue } as VestingQueue
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auction_id = object.auction_id
    } else {
      message.auction_id = 0
    }
    if (object.auctioneer !== undefined && object.auctioneer !== null) {
      message.auctioneer = object.auctioneer
    } else {
      message.auctioneer = ''
    }
    if (object.paying_coin !== undefined && object.paying_coin !== null) {
      message.paying_coin = Coin.fromPartial(object.paying_coin)
    } else {
      message.paying_coin = undefined
    }
    if (object.release_time !== undefined && object.release_time !== null) {
      message.release_time = object.release_time
    } else {
      message.release_time = undefined
    }
    if (object.released !== undefined && object.released !== null) {
      message.released = object.released
    } else {
      message.released = false
    }
    return message
  }
}

const baseAllowedBidder: object = { bidder: '', max_bid_amount: '' }

export const AllowedBidder = {
  encode(message: AllowedBidder, writer: Writer = Writer.create()): Writer {
    if (message.bidder !== '') {
      writer.uint32(10).string(message.bidder)
    }
    if (message.max_bid_amount !== '') {
      writer.uint32(18).string(message.max_bid_amount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): AllowedBidder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseAllowedBidder } as AllowedBidder
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string()
          break
        case 2:
          message.max_bid_amount = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): AllowedBidder {
    const message = { ...baseAllowedBidder } as AllowedBidder
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = String(object.bidder)
    } else {
      message.bidder = ''
    }
    if (object.max_bid_amount !== undefined && object.max_bid_amount !== null) {
      message.max_bid_amount = String(object.max_bid_amount)
    } else {
      message.max_bid_amount = ''
    }
    return message
  },

  toJSON(message: AllowedBidder): unknown {
    const obj: any = {}
    message.bidder !== undefined && (obj.bidder = message.bidder)
    message.max_bid_amount !== undefined &&
      (obj.max_bid_amount = message.max_bid_amount)
    return obj
  },

  fromPartial(object: DeepPartial<AllowedBidder>): AllowedBidder {
    const message = { ...baseAllowedBidder } as AllowedBidder
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = object.bidder
    } else {
      message.bidder = ''
    }
    if (object.max_bid_amount !== undefined && object.max_bid_amount !== null) {
      message.max_bid_amount = object.max_bid_amount
    } else {
      message.max_bid_amount = ''
    }
    return message
  }
}

const baseBid: object = {
  auction_id: 0,
  bidder: '',
  id: 0,
  type: 0,
  price: '',
  is_matched: false
}

export const Bid = {
  encode(message: Bid, writer: Writer = Writer.create()): Writer {
    if (message.auction_id !== 0) {
      writer.uint32(8).uint64(message.auction_id)
    }
    if (message.bidder !== '') {
      writer.uint32(18).string(message.bidder)
    }
    if (message.id !== 0) {
      writer.uint32(24).uint64(message.id)
    }
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type)
    }
    if (message.price !== '') {
      writer.uint32(42).string(message.price)
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(50).fork()).ldelim()
    }
    if (message.is_matched === true) {
      writer.uint32(56).bool(message.is_matched)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Bid {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseBid } as Bid
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
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 4:
          message.type = reader.int32() as any
          break
        case 5:
          message.price = reader.string()
          break
        case 6:
          message.coin = Coin.decode(reader, reader.uint32())
          break
        case 7:
          message.is_matched = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Bid {
    const message = { ...baseBid } as Bid
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
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = bidTypeFromJSON(object.type)
    } else {
      message.type = 0
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
    if (object.is_matched !== undefined && object.is_matched !== null) {
      message.is_matched = Boolean(object.is_matched)
    } else {
      message.is_matched = false
    }
    return message
  },

  toJSON(message: Bid): unknown {
    const obj: any = {}
    message.auction_id !== undefined && (obj.auction_id = message.auction_id)
    message.bidder !== undefined && (obj.bidder = message.bidder)
    message.id !== undefined && (obj.id = message.id)
    message.type !== undefined && (obj.type = bidTypeToJSON(message.type))
    message.price !== undefined && (obj.price = message.price)
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined)
    message.is_matched !== undefined && (obj.is_matched = message.is_matched)
    return obj
  },

  fromPartial(object: DeepPartial<Bid>): Bid {
    const message = { ...baseBid } as Bid
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
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type
    } else {
      message.type = 0
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
    if (object.is_matched !== undefined && object.is_matched !== null) {
      message.is_matched = object.is_matched
    } else {
      message.is_matched = false
    }
    return message
  }
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
