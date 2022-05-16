/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'tendermint.spn.participation'

export interface EventAllocationsUsed {
  participant: string
  auctionID: number
  numAllocations: number
}

export interface EventAllocationsWithdrawn {
  participant: string
  auctionID: number
}

const baseEventAllocationsUsed: object = {
  participant: '',
  auctionID: 0,
  numAllocations: 0
}

export const EventAllocationsUsed = {
  encode(
    message: EventAllocationsUsed,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.participant !== '') {
      writer.uint32(10).string(message.participant)
    }
    if (message.auctionID !== 0) {
      writer.uint32(16).uint64(message.auctionID)
    }
    if (message.numAllocations !== 0) {
      writer.uint32(24).uint64(message.numAllocations)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): EventAllocationsUsed {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseEventAllocationsUsed } as EventAllocationsUsed
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.participant = reader.string()
          break
        case 2:
          message.auctionID = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.numAllocations = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventAllocationsUsed {
    const message = { ...baseEventAllocationsUsed } as EventAllocationsUsed
    if (object.participant !== undefined && object.participant !== null) {
      message.participant = String(object.participant)
    } else {
      message.participant = ''
    }
    if (object.auctionID !== undefined && object.auctionID !== null) {
      message.auctionID = Number(object.auctionID)
    } else {
      message.auctionID = 0
    }
    if (object.numAllocations !== undefined && object.numAllocations !== null) {
      message.numAllocations = Number(object.numAllocations)
    } else {
      message.numAllocations = 0
    }
    return message
  },

  toJSON(message: EventAllocationsUsed): unknown {
    const obj: any = {}
    message.participant !== undefined && (obj.participant = message.participant)
    message.auctionID !== undefined && (obj.auctionID = message.auctionID)
    message.numAllocations !== undefined &&
      (obj.numAllocations = message.numAllocations)
    return obj
  },

  fromPartial(object: DeepPartial<EventAllocationsUsed>): EventAllocationsUsed {
    const message = { ...baseEventAllocationsUsed } as EventAllocationsUsed
    if (object.participant !== undefined && object.participant !== null) {
      message.participant = object.participant
    } else {
      message.participant = ''
    }
    if (object.auctionID !== undefined && object.auctionID !== null) {
      message.auctionID = object.auctionID
    } else {
      message.auctionID = 0
    }
    if (object.numAllocations !== undefined && object.numAllocations !== null) {
      message.numAllocations = object.numAllocations
    } else {
      message.numAllocations = 0
    }
    return message
  }
}

const baseEventAllocationsWithdrawn: object = { participant: '', auctionID: 0 }

export const EventAllocationsWithdrawn = {
  encode(
    message: EventAllocationsWithdrawn,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.participant !== '') {
      writer.uint32(10).string(message.participant)
    }
    if (message.auctionID !== 0) {
      writer.uint32(16).uint64(message.auctionID)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EventAllocationsWithdrawn {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseEventAllocationsWithdrawn
    } as EventAllocationsWithdrawn
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.participant = reader.string()
          break
        case 2:
          message.auctionID = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventAllocationsWithdrawn {
    const message = {
      ...baseEventAllocationsWithdrawn
    } as EventAllocationsWithdrawn
    if (object.participant !== undefined && object.participant !== null) {
      message.participant = String(object.participant)
    } else {
      message.participant = ''
    }
    if (object.auctionID !== undefined && object.auctionID !== null) {
      message.auctionID = Number(object.auctionID)
    } else {
      message.auctionID = 0
    }
    return message
  },

  toJSON(message: EventAllocationsWithdrawn): unknown {
    const obj: any = {}
    message.participant !== undefined && (obj.participant = message.participant)
    message.auctionID !== undefined && (obj.auctionID = message.auctionID)
    return obj
  },

  fromPartial(
    object: DeepPartial<EventAllocationsWithdrawn>
  ): EventAllocationsWithdrawn {
    const message = {
      ...baseEventAllocationsWithdrawn
    } as EventAllocationsWithdrawn
    if (object.participant !== undefined && object.participant !== null) {
      message.participant = object.participant
    } else {
      message.participant = ''
    }
    if (object.auctionID !== undefined && object.auctionID !== null) {
      message.auctionID = object.auctionID
    } else {
      message.auctionID = 0
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
