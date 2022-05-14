/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import { Coin } from '../cosmos/base/v1beta1/coin'

export const protobufPackage = 'tendermint.spn.reward'

export interface EventRewardPoolCreated {
  launchID: number
  provider: string
}

export interface EventRewardPoolRemoved {
  launchID: number
}

export interface EventRewardsDistributed {
  launchID: number
  receiver: string
  rewards: Coin[]
}

const baseEventRewardPoolCreated: object = { launchID: 0, provider: '' }

export const EventRewardPoolCreated = {
  encode(
    message: EventRewardPoolCreated,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID)
    }
    if (message.provider !== '') {
      writer.uint32(18).string(message.provider)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): EventRewardPoolCreated {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseEventRewardPoolCreated } as EventRewardPoolCreated
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.launchID = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.provider = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventRewardPoolCreated {
    const message = { ...baseEventRewardPoolCreated } as EventRewardPoolCreated
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID)
    } else {
      message.launchID = 0
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = String(object.provider)
    } else {
      message.provider = ''
    }
    return message
  },

  toJSON(message: EventRewardPoolCreated): unknown {
    const obj: any = {}
    message.launchID !== undefined && (obj.launchID = message.launchID)
    message.provider !== undefined && (obj.provider = message.provider)
    return obj
  },

  fromPartial(
    object: DeepPartial<EventRewardPoolCreated>
  ): EventRewardPoolCreated {
    const message = { ...baseEventRewardPoolCreated } as EventRewardPoolCreated
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID
    } else {
      message.launchID = 0
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider
    } else {
      message.provider = ''
    }
    return message
  }
}

const baseEventRewardPoolRemoved: object = { launchID: 0 }

export const EventRewardPoolRemoved = {
  encode(
    message: EventRewardPoolRemoved,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): EventRewardPoolRemoved {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseEventRewardPoolRemoved } as EventRewardPoolRemoved
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.launchID = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventRewardPoolRemoved {
    const message = { ...baseEventRewardPoolRemoved } as EventRewardPoolRemoved
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID)
    } else {
      message.launchID = 0
    }
    return message
  },

  toJSON(message: EventRewardPoolRemoved): unknown {
    const obj: any = {}
    message.launchID !== undefined && (obj.launchID = message.launchID)
    return obj
  },

  fromPartial(
    object: DeepPartial<EventRewardPoolRemoved>
  ): EventRewardPoolRemoved {
    const message = { ...baseEventRewardPoolRemoved } as EventRewardPoolRemoved
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID
    } else {
      message.launchID = 0
    }
    return message
  }
}

const baseEventRewardsDistributed: object = { launchID: 0, receiver: '' }

export const EventRewardsDistributed = {
  encode(
    message: EventRewardsDistributed,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID)
    }
    if (message.receiver !== '') {
      writer.uint32(18).string(message.receiver)
    }
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): EventRewardsDistributed {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseEventRewardsDistributed
    } as EventRewardsDistributed
    message.rewards = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.launchID = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.receiver = reader.string()
          break
        case 3:
          message.rewards.push(Coin.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventRewardsDistributed {
    const message = {
      ...baseEventRewardsDistributed
    } as EventRewardsDistributed
    message.rewards = []
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID)
    } else {
      message.launchID = 0
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver)
    } else {
      message.receiver = ''
    }
    if (object.rewards !== undefined && object.rewards !== null) {
      for (const e of object.rewards) {
        message.rewards.push(Coin.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: EventRewardsDistributed): unknown {
    const obj: any = {}
    message.launchID !== undefined && (obj.launchID = message.launchID)
    message.receiver !== undefined && (obj.receiver = message.receiver)
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.rewards = []
    }
    return obj
  },

  fromPartial(
    object: DeepPartial<EventRewardsDistributed>
  ): EventRewardsDistributed {
    const message = {
      ...baseEventRewardsDistributed
    } as EventRewardsDistributed
    message.rewards = []
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID
    } else {
      message.launchID = 0
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver
    } else {
      message.receiver = ''
    }
    if (object.rewards !== undefined && object.rewards !== null) {
      for (const e of object.rewards) {
        message.rewards.push(Coin.fromPartial(e))
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
