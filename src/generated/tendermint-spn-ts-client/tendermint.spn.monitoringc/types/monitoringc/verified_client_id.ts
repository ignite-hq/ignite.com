/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'tendermint.spn.monitoringc'

export interface VerifiedClientID {
  launchID: number
  clientIDs: string[]
}

const baseVerifiedClientID: object = { launchID: 0, clientIDs: '' }

export const VerifiedClientID = {
  encode(message: VerifiedClientID, writer: Writer = Writer.create()): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID)
    }
    for (const v of message.clientIDs) {
      writer.uint32(18).string(v!)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): VerifiedClientID {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseVerifiedClientID } as VerifiedClientID
    message.clientIDs = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.launchID = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.clientIDs.push(reader.string())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): VerifiedClientID {
    const message = { ...baseVerifiedClientID } as VerifiedClientID
    message.clientIDs = []
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID)
    } else {
      message.launchID = 0
    }
    if (object.clientIDs !== undefined && object.clientIDs !== null) {
      for (const e of object.clientIDs) {
        message.clientIDs.push(String(e))
      }
    }
    return message
  },

  toJSON(message: VerifiedClientID): unknown {
    const obj: any = {}
    message.launchID !== undefined && (obj.launchID = message.launchID)
    if (message.clientIDs) {
      obj.clientIDs = message.clientIDs.map((e) => e)
    } else {
      obj.clientIDs = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<VerifiedClientID>): VerifiedClientID {
    const message = { ...baseVerifiedClientID } as VerifiedClientID
    message.clientIDs = []
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID
    } else {
      message.launchID = 0
    }
    if (object.clientIDs !== undefined && object.clientIDs !== null) {
      for (const e of object.clientIDs) {
        message.clientIDs.push(e)
      }
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
