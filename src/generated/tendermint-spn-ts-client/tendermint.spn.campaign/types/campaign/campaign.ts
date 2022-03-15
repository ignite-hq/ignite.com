/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import { Coin } from '../cosmos/base/v1beta1/coin'

export const protobufPackage = 'tendermint.spn.campaign'

export interface Campaign {
  campaignID: number
  campaignName: string
  coordinatorID: number
  mainnetID: number
  mainnetInitialized: boolean
  totalSupply: Coin[]
  allocatedShares: Coin[]
  dynamicShares: boolean
  totalShares: Coin[]
  metadata: Uint8Array
}

const baseCampaign: object = {
  campaignID: 0,
  campaignName: '',
  coordinatorID: 0,
  mainnetID: 0,
  mainnetInitialized: false,
  dynamicShares: false
}

export const Campaign = {
  encode(message: Campaign, writer: Writer = Writer.create()): Writer {
    if (message.campaignID !== 0) {
      writer.uint32(8).uint64(message.campaignID)
    }
    if (message.campaignName !== '') {
      writer.uint32(18).string(message.campaignName)
    }
    if (message.coordinatorID !== 0) {
      writer.uint32(24).uint64(message.coordinatorID)
    }
    if (message.mainnetID !== 0) {
      writer.uint32(32).uint64(message.mainnetID)
    }
    if (message.mainnetInitialized === true) {
      writer.uint32(40).bool(message.mainnetInitialized)
    }
    for (const v of message.totalSupply) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim()
    }
    for (const v of message.allocatedShares) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim()
    }
    if (message.dynamicShares === true) {
      writer.uint32(64).bool(message.dynamicShares)
    }
    for (const v of message.totalShares) {
      Coin.encode(v!, writer.uint32(74).fork()).ldelim()
    }
    if (message.metadata.length !== 0) {
      writer.uint32(82).bytes(message.metadata)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Campaign {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseCampaign } as Campaign
    message.totalSupply = []
    message.allocatedShares = []
    message.totalShares = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.campaignID = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.campaignName = reader.string()
          break
        case 3:
          message.coordinatorID = longToNumber(reader.uint64() as Long)
          break
        case 4:
          message.mainnetID = longToNumber(reader.uint64() as Long)
          break
        case 5:
          message.mainnetInitialized = reader.bool()
          break
        case 6:
          message.totalSupply.push(Coin.decode(reader, reader.uint32()))
          break
        case 7:
          message.allocatedShares.push(Coin.decode(reader, reader.uint32()))
          break
        case 8:
          message.dynamicShares = reader.bool()
          break
        case 9:
          message.totalShares.push(Coin.decode(reader, reader.uint32()))
          break
        case 10:
          message.metadata = reader.bytes()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Campaign {
    const message = { ...baseCampaign } as Campaign
    message.totalSupply = []
    message.allocatedShares = []
    message.totalShares = []
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = Number(object.campaignID)
    } else {
      message.campaignID = 0
    }
    if (object.campaignName !== undefined && object.campaignName !== null) {
      message.campaignName = String(object.campaignName)
    } else {
      message.campaignName = ''
    }
    if (object.coordinatorID !== undefined && object.coordinatorID !== null) {
      message.coordinatorID = Number(object.coordinatorID)
    } else {
      message.coordinatorID = 0
    }
    if (object.mainnetID !== undefined && object.mainnetID !== null) {
      message.mainnetID = Number(object.mainnetID)
    } else {
      message.mainnetID = 0
    }
    if (
      object.mainnetInitialized !== undefined &&
      object.mainnetInitialized !== null
    ) {
      message.mainnetInitialized = Boolean(object.mainnetInitialized)
    } else {
      message.mainnetInitialized = false
    }
    if (object.totalSupply !== undefined && object.totalSupply !== null) {
      for (const e of object.totalSupply) {
        message.totalSupply.push(Coin.fromJSON(e))
      }
    }
    if (
      object.allocatedShares !== undefined &&
      object.allocatedShares !== null
    ) {
      for (const e of object.allocatedShares) {
        message.allocatedShares.push(Coin.fromJSON(e))
      }
    }
    if (object.dynamicShares !== undefined && object.dynamicShares !== null) {
      message.dynamicShares = Boolean(object.dynamicShares)
    } else {
      message.dynamicShares = false
    }
    if (object.totalShares !== undefined && object.totalShares !== null) {
      for (const e of object.totalShares) {
        message.totalShares.push(Coin.fromJSON(e))
      }
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata)
    }
    return message
  },

  toJSON(message: Campaign): unknown {
    const obj: any = {}
    message.campaignID !== undefined && (obj.campaignID = message.campaignID)
    message.campaignName !== undefined &&
      (obj.campaignName = message.campaignName)
    message.coordinatorID !== undefined &&
      (obj.coordinatorID = message.coordinatorID)
    message.mainnetID !== undefined && (obj.mainnetID = message.mainnetID)
    message.mainnetInitialized !== undefined &&
      (obj.mainnetInitialized = message.mainnetInitialized)
    if (message.totalSupply) {
      obj.totalSupply = message.totalSupply.map((e) =>
        e ? Coin.toJSON(e) : undefined
      )
    } else {
      obj.totalSupply = []
    }
    if (message.allocatedShares) {
      obj.allocatedShares = message.allocatedShares.map((e) =>
        e ? Coin.toJSON(e) : undefined
      )
    } else {
      obj.allocatedShares = []
    }
    message.dynamicShares !== undefined &&
      (obj.dynamicShares = message.dynamicShares)
    if (message.totalShares) {
      obj.totalShares = message.totalShares.map((e) =>
        e ? Coin.toJSON(e) : undefined
      )
    } else {
      obj.totalShares = []
    }
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(
        message.metadata !== undefined ? message.metadata : new Uint8Array()
      ))
    return obj
  },

  fromPartial(object: DeepPartial<Campaign>): Campaign {
    const message = { ...baseCampaign } as Campaign
    message.totalSupply = []
    message.allocatedShares = []
    message.totalShares = []
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = object.campaignID
    } else {
      message.campaignID = 0
    }
    if (object.campaignName !== undefined && object.campaignName !== null) {
      message.campaignName = object.campaignName
    } else {
      message.campaignName = ''
    }
    if (object.coordinatorID !== undefined && object.coordinatorID !== null) {
      message.coordinatorID = object.coordinatorID
    } else {
      message.coordinatorID = 0
    }
    if (object.mainnetID !== undefined && object.mainnetID !== null) {
      message.mainnetID = object.mainnetID
    } else {
      message.mainnetID = 0
    }
    if (
      object.mainnetInitialized !== undefined &&
      object.mainnetInitialized !== null
    ) {
      message.mainnetInitialized = object.mainnetInitialized
    } else {
      message.mainnetInitialized = false
    }
    if (object.totalSupply !== undefined && object.totalSupply !== null) {
      for (const e of object.totalSupply) {
        message.totalSupply.push(Coin.fromPartial(e))
      }
    }
    if (
      object.allocatedShares !== undefined &&
      object.allocatedShares !== null
    ) {
      for (const e of object.allocatedShares) {
        message.allocatedShares.push(Coin.fromPartial(e))
      }
    }
    if (object.dynamicShares !== undefined && object.dynamicShares !== null) {
      message.dynamicShares = object.dynamicShares
    } else {
      message.dynamicShares = false
    }
    if (object.totalShares !== undefined && object.totalShares !== null) {
      for (const e of object.totalShares) {
        message.totalShares.push(Coin.fromPartial(e))
      }
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata
    } else {
      message.metadata = new Uint8Array()
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

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'))
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64)
  const arr = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i)
  }
  return arr
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'))
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = []
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]))
  }
  return btoa(bin.join(''))
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
