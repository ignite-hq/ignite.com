/* eslint-disable */
import { Params, Bid, VestingQueue } from '../fundraising/fundraising'
import { Any } from '../google/protobuf/any'
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'tendermint.fundraising'

/** GenesisState defines the fundraising module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters for the module */
  params: Params | undefined
  /**
   * auctions define the auction interface for genesis state; the module
   * supports FixedPriceAuction or EnglishAuction
   */
  auctions: Any[]
  /** bids defines the bid records used for genesis state */
  bids: Bid[]
  /**
   * vesting_queues defines the vesting queue records used for genesis
   * state
   */
  vestingQueues: VestingQueue[]
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
    for (const v of message.bids) {
      Bid.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    for (const v of message.vestingQueues) {
      VestingQueue.encode(v!, writer.uint32(34).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseGenesisState } as GenesisState
    message.auctions = []
    message.bids = []
    message.vestingQueues = []
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
          message.bids.push(Bid.decode(reader, reader.uint32()))
          break
        case 4:
          message.vestingQueues.push(
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
    message.bids = []
    message.vestingQueues = []
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
    if (object.bids !== undefined && object.bids !== null) {
      for (const e of object.bids) {
        message.bids.push(Bid.fromJSON(e))
      }
    }
    if (object.vestingQueues !== undefined && object.vestingQueues !== null) {
      for (const e of object.vestingQueues) {
        message.vestingQueues.push(VestingQueue.fromJSON(e))
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
    if (message.bids) {
      obj.bids = message.bids.map((e) => (e ? Bid.toJSON(e) : undefined))
    } else {
      obj.bids = []
    }
    if (message.vestingQueues) {
      obj.vestingQueues = message.vestingQueues.map((e) =>
        e ? VestingQueue.toJSON(e) : undefined
      )
    } else {
      obj.vestingQueues = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.auctions = []
    message.bids = []
    message.vestingQueues = []
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
    if (object.bids !== undefined && object.bids !== null) {
      for (const e of object.bids) {
        message.bids.push(Bid.fromPartial(e))
      }
    }
    if (object.vestingQueues !== undefined && object.vestingQueues !== null) {
      for (const e of object.vestingQueues) {
        message.vestingQueues.push(VestingQueue.fromPartial(e))
      }
    }
    return message
  }
}

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
