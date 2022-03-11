/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import { Coin } from '../cosmos/base/v1beta1/coin'

export const protobufPackage = 'tendermint.spn.launch'

/** Params defines the parameters for the staking module. */
export interface Params {
  launchTimeRange: LaunchTimeRange | undefined
  revertDelay: number
  chainCreationFee: Coin[]
}

export interface LaunchTimeRange {
  minLaunchTime: number
  maxLaunchTime: number
}

const baseParams: object = { revertDelay: 0 }

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.launchTimeRange !== undefined) {
      LaunchTimeRange.encode(
        message.launchTimeRange,
        writer.uint32(10).fork()
      ).ldelim()
    }
    if (message.revertDelay !== 0) {
      writer.uint32(16).int64(message.revertDelay)
    }
    for (const v of message.chainCreationFee) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseParams } as Params
    message.chainCreationFee = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.launchTimeRange = LaunchTimeRange.decode(
            reader,
            reader.uint32()
          )
          break
        case 2:
          message.revertDelay = longToNumber(reader.int64() as Long)
          break
        case 3:
          message.chainCreationFee.push(Coin.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params
    message.chainCreationFee = []
    if (
      object.launchTimeRange !== undefined &&
      object.launchTimeRange !== null
    ) {
      message.launchTimeRange = LaunchTimeRange.fromJSON(object.launchTimeRange)
    } else {
      message.launchTimeRange = undefined
    }
    if (object.revertDelay !== undefined && object.revertDelay !== null) {
      message.revertDelay = Number(object.revertDelay)
    } else {
      message.revertDelay = 0
    }
    if (
      object.chainCreationFee !== undefined &&
      object.chainCreationFee !== null
    ) {
      for (const e of object.chainCreationFee) {
        message.chainCreationFee.push(Coin.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: Params): unknown {
    const obj: any = {}
    message.launchTimeRange !== undefined &&
      (obj.launchTimeRange = message.launchTimeRange
        ? LaunchTimeRange.toJSON(message.launchTimeRange)
        : undefined)
    message.revertDelay !== undefined && (obj.revertDelay = message.revertDelay)
    if (message.chainCreationFee) {
      obj.chainCreationFee = message.chainCreationFee.map((e) =>
        e ? Coin.toJSON(e) : undefined
      )
    } else {
      obj.chainCreationFee = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params
    message.chainCreationFee = []
    if (
      object.launchTimeRange !== undefined &&
      object.launchTimeRange !== null
    ) {
      message.launchTimeRange = LaunchTimeRange.fromPartial(
        object.launchTimeRange
      )
    } else {
      message.launchTimeRange = undefined
    }
    if (object.revertDelay !== undefined && object.revertDelay !== null) {
      message.revertDelay = object.revertDelay
    } else {
      message.revertDelay = 0
    }
    if (
      object.chainCreationFee !== undefined &&
      object.chainCreationFee !== null
    ) {
      for (const e of object.chainCreationFee) {
        message.chainCreationFee.push(Coin.fromPartial(e))
      }
    }
    return message
  }
}

const baseLaunchTimeRange: object = { minLaunchTime: 0, maxLaunchTime: 0 }

export const LaunchTimeRange = {
  encode(message: LaunchTimeRange, writer: Writer = Writer.create()): Writer {
    if (message.minLaunchTime !== 0) {
      writer.uint32(8).int64(message.minLaunchTime)
    }
    if (message.maxLaunchTime !== 0) {
      writer.uint32(16).int64(message.maxLaunchTime)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): LaunchTimeRange {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseLaunchTimeRange } as LaunchTimeRange
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.minLaunchTime = longToNumber(reader.int64() as Long)
          break
        case 2:
          message.maxLaunchTime = longToNumber(reader.int64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): LaunchTimeRange {
    const message = { ...baseLaunchTimeRange } as LaunchTimeRange
    if (object.minLaunchTime !== undefined && object.minLaunchTime !== null) {
      message.minLaunchTime = Number(object.minLaunchTime)
    } else {
      message.minLaunchTime = 0
    }
    if (object.maxLaunchTime !== undefined && object.maxLaunchTime !== null) {
      message.maxLaunchTime = Number(object.maxLaunchTime)
    } else {
      message.maxLaunchTime = 0
    }
    return message
  },

  toJSON(message: LaunchTimeRange): unknown {
    const obj: any = {}
    message.minLaunchTime !== undefined &&
      (obj.minLaunchTime = message.minLaunchTime)
    message.maxLaunchTime !== undefined &&
      (obj.maxLaunchTime = message.maxLaunchTime)
    return obj
  },

  fromPartial(object: DeepPartial<LaunchTimeRange>): LaunchTimeRange {
    const message = { ...baseLaunchTimeRange } as LaunchTimeRange
    if (object.minLaunchTime !== undefined && object.minLaunchTime !== null) {
      message.minLaunchTime = object.minLaunchTime
    } else {
      message.minLaunchTime = 0
    }
    if (object.maxLaunchTime !== undefined && object.maxLaunchTime !== null) {
      message.maxLaunchTime = object.maxLaunchTime
    } else {
      message.maxLaunchTime = 0
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
