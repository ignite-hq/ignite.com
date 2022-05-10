/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import { Params } from '../fundraising/params'
import { Any } from '../google/protobuf/any'
import { Bid, VestingQueue, AllowedBidder } from '../fundraising/fundraising'

export const protobufPackage = 'tendermint.fundraising'

/** GenesisState defines the fundraising module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters for the module */
  params: Params | undefined
  /**
   * auctions define the auction interface for genesis state; the module
   * supports FixedPriceAuction or BatchAuction
   */
  auctions: Any[]
  /** allowed_bidder_records define the allowed bidder records for the auction */
  allowed_bidder_records: AllowedBidderRecord[]
  /** bids define the bid records used for genesis state */
  bids: Bid[]
  /**
   * vesting_queues define the vesting queue records used for genesis
   * state
   */
  vesting_queues: VestingQueue[]
}

export interface AllowedBidderRecord {
  /** auction_ id specifies index of the auction */
  auction_id: number
  /** allowed_bidder specifies allowed bidder for the auction */
  allowed_bidder: AllowedBidder | undefined
}

const baseGenesisState: object = {}

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim()
    }
    for (const v of message.auctions) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    for (const v of message.allowed_bidder_records) {
      AllowedBidderRecord.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    for (const v of message.bids) {
      Bid.encode(v!, writer.uint32(34).fork()).ldelim()
    }
    for (const v of message.vesting_queues) {
      VestingQueue.encode(v!, writer.uint32(42).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseGenesisState } as GenesisState
    message.auctions = []
    message.allowed_bidder_records = []
    message.bids = []
    message.vesting_queues = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32())
          break
        case 2:
          message.auctions.push(Any.decode(reader, reader.uint32()))
          break
        case 3:
          message.allowed_bidder_records.push(
            AllowedBidderRecord.decode(reader, reader.uint32())
          )
          break
        case 4:
          message.bids.push(Bid.decode(reader, reader.uint32()))
          break
        case 5:
          message.vesting_queues.push(
            VestingQueue.decode(reader, reader.uint32())
          )
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.auctions = []
    message.allowed_bidder_records = []
    message.bids = []
    message.vesting_queues = []
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params)
    } else {
      message.params = undefined
    }
    if (object.auctions !== undefined && object.auctions !== null) {
      for (const e of object.auctions) {
        message.auctions.push(Any.fromJSON(e))
      }
    }
    if (
      object.allowed_bidder_records !== undefined &&
      object.allowed_bidder_records !== null
    ) {
      for (const e of object.allowed_bidder_records) {
        message.allowed_bidder_records.push(AllowedBidderRecord.fromJSON(e))
      }
    }
    if (object.bids !== undefined && object.bids !== null) {
      for (const e of object.bids) {
        message.bids.push(Bid.fromJSON(e))
      }
    }
    if (object.vesting_queues !== undefined && object.vesting_queues !== null) {
      for (const e of object.vesting_queues) {
        message.vesting_queues.push(VestingQueue.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined)
    if (message.auctions) {
      obj.auctions = message.auctions.map((e) =>
        e ? Any.toJSON(e) : undefined
      )
    } else {
      obj.auctions = []
    }
    if (message.allowed_bidder_records) {
      obj.allowed_bidder_records = message.allowed_bidder_records.map((e) =>
        e ? AllowedBidderRecord.toJSON(e) : undefined
      )
    } else {
      obj.allowed_bidder_records = []
    }
    if (message.bids) {
      obj.bids = message.bids.map((e) => (e ? Bid.toJSON(e) : undefined))
    } else {
      obj.bids = []
    }
    if (message.vesting_queues) {
      obj.vesting_queues = message.vesting_queues.map((e) =>
        e ? VestingQueue.toJSON(e) : undefined
      )
    } else {
      obj.vesting_queues = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.auctions = []
    message.allowed_bidder_records = []
    message.bids = []
    message.vesting_queues = []
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params)
    } else {
      message.params = undefined
    }
    if (object.auctions !== undefined && object.auctions !== null) {
      for (const e of object.auctions) {
        message.auctions.push(Any.fromPartial(e))
      }
    }
    if (
      object.allowed_bidder_records !== undefined &&
      object.allowed_bidder_records !== null
    ) {
      for (const e of object.allowed_bidder_records) {
        message.allowed_bidder_records.push(AllowedBidderRecord.fromPartial(e))
      }
    }
    if (object.bids !== undefined && object.bids !== null) {
      for (const e of object.bids) {
        message.bids.push(Bid.fromPartial(e))
      }
    }
    if (object.vesting_queues !== undefined && object.vesting_queues !== null) {
      for (const e of object.vesting_queues) {
        message.vesting_queues.push(VestingQueue.fromPartial(e))
      }
    }
    return message
  }
}

const baseAllowedBidderRecord: object = { auction_id: 0 }

export const AllowedBidderRecord = {
  encode(
    message: AllowedBidderRecord,
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

  decode(input: Reader | Uint8Array, length?: number): AllowedBidderRecord {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseAllowedBidderRecord } as AllowedBidderRecord
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

  fromJSON(object: any): AllowedBidderRecord {
    const message = { ...baseAllowedBidderRecord } as AllowedBidderRecord
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

  toJSON(message: AllowedBidderRecord): unknown {
    const obj: any = {}
    message.auction_id !== undefined && (obj.auction_id = message.auction_id)
    message.allowed_bidder !== undefined &&
      (obj.allowed_bidder = message.allowed_bidder
        ? AllowedBidder.toJSON(message.allowed_bidder)
        : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<AllowedBidderRecord>): AllowedBidderRecord {
    const message = { ...baseAllowedBidderRecord } as AllowedBidderRecord
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
