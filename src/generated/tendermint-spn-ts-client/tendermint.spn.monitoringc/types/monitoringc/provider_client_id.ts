/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'tendermint.spn.monitoringc'

export interface ProviderClientID {
  launchID: number
  clientID: string
}

const baseProviderClientID: object = { launchID: 0, clientID: '' }

export const ProviderClientID = {
  encode(message: ProviderClientID, writer: Writer = Writer.create()): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID)
    }
    if (message.clientID !== '') {
      writer.uint32(18).string(message.clientID)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): ProviderClientID {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseProviderClientID } as ProviderClientID
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.launchID = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.clientID = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): ProviderClientID {
    const message = { ...baseProviderClientID } as ProviderClientID
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID)
    } else {
      message.launchID = 0
    }
    if (object.clientID !== undefined && object.clientID !== null) {
      message.clientID = String(object.clientID)
    } else {
      message.clientID = ''
    }
    return message
  },

  toJSON(message: ProviderClientID): unknown {
    const obj: any = {}
    message.launchID !== undefined && (obj.launchID = message.launchID)
    message.clientID !== undefined && (obj.clientID = message.clientID)
    return obj
  },

  fromPartial(object: DeepPartial<ProviderClientID>): ProviderClientID {
    const message = { ...baseProviderClientID } as ProviderClientID
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID
    } else {
      message.launchID = 0
    }
    if (object.clientID !== undefined && object.clientID !== null) {
      message.clientID = object.clientID
    } else {
      message.clientID = ''
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
