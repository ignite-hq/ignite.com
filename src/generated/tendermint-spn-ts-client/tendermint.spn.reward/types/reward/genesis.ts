/* eslint-disable */
import { RewardPool } from '../reward/reward_pool'
import { Params } from '../reward/params'
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'tendermint.spn.reward'

/** GenesisState defines the reward module's genesis state. */
export interface GenesisState {
  rewardPoolList: RewardPool[]
  /** this line is used by starport scaffolding # genesis/proto/state */
  params: Params | undefined
}

const baseGenesisState: object = {}

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.rewardPoolList) {
      RewardPool.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseGenesisState } as GenesisState
    message.rewardPoolList = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.rewardPoolList.push(
            RewardPool.decode(reader, reader.uint32())
          )
          break
        case 2:
          message.params = Params.decode(reader, reader.uint32())
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
    message.rewardPoolList = []
    if (object.rewardPoolList !== undefined && object.rewardPoolList !== null) {
      for (const e of object.rewardPoolList) {
        message.rewardPoolList.push(RewardPool.fromJSON(e))
      }
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params)
    } else {
      message.params = undefined
    }
    return message
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    if (message.rewardPoolList) {
      obj.rewardPoolList = message.rewardPoolList.map((e) =>
        e ? RewardPool.toJSON(e) : undefined
      )
    } else {
      obj.rewardPoolList = []
    }
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.rewardPoolList = []
    if (object.rewardPoolList !== undefined && object.rewardPoolList !== null) {
      for (const e of object.rewardPoolList) {
        message.rewardPoolList.push(RewardPool.fromPartial(e))
      }
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params)
    } else {
      message.params = undefined
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
