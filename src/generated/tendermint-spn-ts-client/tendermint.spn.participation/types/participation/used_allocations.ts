/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'tendermint.spn.participation'

/** Describes the number of allocations already used by a user for existing auctions */
export interface UsedAllocations {
  address: string
  numAllocations: number
}

const baseUsedAllocations: object = { address: '', numAllocations: 0 }

export const UsedAllocations = {
  encode(message: UsedAllocations, writer: Writer = Writer.create()): Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address)
    }
    if (message.numAllocations !== 0) {
      writer.uint32(16).uint64(message.numAllocations)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): UsedAllocations {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseUsedAllocations } as UsedAllocations
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string()
          break
        case 2:
          message.numAllocations = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): UsedAllocations {
    const message = { ...baseUsedAllocations } as UsedAllocations
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    if (object.numAllocations !== undefined && object.numAllocations !== null) {
      message.numAllocations = Number(object.numAllocations)
    } else {
      message.numAllocations = 0
    }
    return message
  },

  toJSON(message: UsedAllocations): unknown {
    const obj: any = {}
    message.address !== undefined && (obj.address = message.address)
    message.numAllocations !== undefined &&
      (obj.numAllocations = message.numAllocations)
    return obj
  },

  fromPartial(object: DeepPartial<UsedAllocations>): UsedAllocations {
    const message = { ...baseUsedAllocations } as UsedAllocations
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    if (object.numAllocations !== undefined && object.numAllocations !== null) {
      message.numAllocations = object.numAllocations
    } else {
      message.numAllocations = 0
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
