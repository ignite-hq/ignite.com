/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import { Campaign } from '../campaign/campaign'
import { Coin } from '../cosmos/base/v1beta1/coin'

export const protobufPackage = 'tendermint.spn.campaign'

export interface CampaignSummary {
  campaign: Campaign | undefined
  hasMostRecentChain: boolean
  mostRecentChain: MostRecentChain | undefined
  incentivized: boolean
  rewards: Coin[]
  rewardsDistributed: boolean
  previousRewards: Coin[]
}

export interface MostRecentChain {
  launchID: number
  launchTriggered: boolean
  sourceURL: string
  sourceHash: string
  requestNb: number
  validatorNb: number
}

const baseCampaignSummary: object = {
  hasMostRecentChain: false,
  incentivized: false,
  rewardsDistributed: false
}

export const CampaignSummary = {
  encode(message: CampaignSummary, writer: Writer = Writer.create()): Writer {
    if (message.campaign !== undefined) {
      Campaign.encode(message.campaign, writer.uint32(10).fork()).ldelim()
    }
    if (message.hasMostRecentChain === true) {
      writer.uint32(16).bool(message.hasMostRecentChain)
    }
    if (message.mostRecentChain !== undefined) {
      MostRecentChain.encode(
        message.mostRecentChain,
        writer.uint32(26).fork()
      ).ldelim()
    }
    if (message.incentivized === true) {
      writer.uint32(32).bool(message.incentivized)
    }
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim()
    }
    if (message.rewardsDistributed === true) {
      writer.uint32(48).bool(message.rewardsDistributed)
    }
    for (const v of message.previousRewards) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): CampaignSummary {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseCampaignSummary } as CampaignSummary
    message.rewards = []
    message.previousRewards = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.campaign = Campaign.decode(reader, reader.uint32())
          break
        case 2:
          message.hasMostRecentChain = reader.bool()
          break
        case 3:
          message.mostRecentChain = MostRecentChain.decode(
            reader,
            reader.uint32()
          )
          break
        case 4:
          message.incentivized = reader.bool()
          break
        case 5:
          message.rewards.push(Coin.decode(reader, reader.uint32()))
          break
        case 6:
          message.rewardsDistributed = reader.bool()
          break
        case 7:
          message.previousRewards.push(Coin.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CampaignSummary {
    const message = { ...baseCampaignSummary } as CampaignSummary
    message.rewards = []
    message.previousRewards = []
    if (object.campaign !== undefined && object.campaign !== null) {
      message.campaign = Campaign.fromJSON(object.campaign)
    } else {
      message.campaign = undefined
    }
    if (
      object.hasMostRecentChain !== undefined &&
      object.hasMostRecentChain !== null
    ) {
      message.hasMostRecentChain = Boolean(object.hasMostRecentChain)
    } else {
      message.hasMostRecentChain = false
    }
    if (
      object.mostRecentChain !== undefined &&
      object.mostRecentChain !== null
    ) {
      message.mostRecentChain = MostRecentChain.fromJSON(object.mostRecentChain)
    } else {
      message.mostRecentChain = undefined
    }
    if (object.incentivized !== undefined && object.incentivized !== null) {
      message.incentivized = Boolean(object.incentivized)
    } else {
      message.incentivized = false
    }
    if (object.rewards !== undefined && object.rewards !== null) {
      for (const e of object.rewards) {
        message.rewards.push(Coin.fromJSON(e))
      }
    }
    if (
      object.rewardsDistributed !== undefined &&
      object.rewardsDistributed !== null
    ) {
      message.rewardsDistributed = Boolean(object.rewardsDistributed)
    } else {
      message.rewardsDistributed = false
    }
    if (
      object.previousRewards !== undefined &&
      object.previousRewards !== null
    ) {
      for (const e of object.previousRewards) {
        message.previousRewards.push(Coin.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: CampaignSummary): unknown {
    const obj: any = {}
    message.campaign !== undefined &&
      (obj.campaign = message.campaign
        ? Campaign.toJSON(message.campaign)
        : undefined)
    message.hasMostRecentChain !== undefined &&
      (obj.hasMostRecentChain = message.hasMostRecentChain)
    message.mostRecentChain !== undefined &&
      (obj.mostRecentChain = message.mostRecentChain
        ? MostRecentChain.toJSON(message.mostRecentChain)
        : undefined)
    message.incentivized !== undefined &&
      (obj.incentivized = message.incentivized)
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.rewards = []
    }
    message.rewardsDistributed !== undefined &&
      (obj.rewardsDistributed = message.rewardsDistributed)
    if (message.previousRewards) {
      obj.previousRewards = message.previousRewards.map((e) =>
        e ? Coin.toJSON(e) : undefined
      )
    } else {
      obj.previousRewards = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<CampaignSummary>): CampaignSummary {
    const message = { ...baseCampaignSummary } as CampaignSummary
    message.rewards = []
    message.previousRewards = []
    if (object.campaign !== undefined && object.campaign !== null) {
      message.campaign = Campaign.fromPartial(object.campaign)
    } else {
      message.campaign = undefined
    }
    if (
      object.hasMostRecentChain !== undefined &&
      object.hasMostRecentChain !== null
    ) {
      message.hasMostRecentChain = object.hasMostRecentChain
    } else {
      message.hasMostRecentChain = false
    }
    if (
      object.mostRecentChain !== undefined &&
      object.mostRecentChain !== null
    ) {
      message.mostRecentChain = MostRecentChain.fromPartial(
        object.mostRecentChain
      )
    } else {
      message.mostRecentChain = undefined
    }
    if (object.incentivized !== undefined && object.incentivized !== null) {
      message.incentivized = object.incentivized
    } else {
      message.incentivized = false
    }
    if (object.rewards !== undefined && object.rewards !== null) {
      for (const e of object.rewards) {
        message.rewards.push(Coin.fromPartial(e))
      }
    }
    if (
      object.rewardsDistributed !== undefined &&
      object.rewardsDistributed !== null
    ) {
      message.rewardsDistributed = object.rewardsDistributed
    } else {
      message.rewardsDistributed = false
    }
    if (
      object.previousRewards !== undefined &&
      object.previousRewards !== null
    ) {
      for (const e of object.previousRewards) {
        message.previousRewards.push(Coin.fromPartial(e))
      }
    }
    return message
  }
}

const baseMostRecentChain: object = {
  launchID: 0,
  launchTriggered: false,
  sourceURL: '',
  sourceHash: '',
  requestNb: 0,
  validatorNb: 0
}

export const MostRecentChain = {
  encode(message: MostRecentChain, writer: Writer = Writer.create()): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID)
    }
    if (message.launchTriggered === true) {
      writer.uint32(16).bool(message.launchTriggered)
    }
    if (message.sourceURL !== '') {
      writer.uint32(26).string(message.sourceURL)
    }
    if (message.sourceHash !== '') {
      writer.uint32(34).string(message.sourceHash)
    }
    if (message.requestNb !== 0) {
      writer.uint32(40).uint64(message.requestNb)
    }
    if (message.validatorNb !== 0) {
      writer.uint32(48).uint64(message.validatorNb)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MostRecentChain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMostRecentChain } as MostRecentChain
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.launchID = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.launchTriggered = reader.bool()
          break
        case 3:
          message.sourceURL = reader.string()
          break
        case 4:
          message.sourceHash = reader.string()
          break
        case 5:
          message.requestNb = longToNumber(reader.uint64() as Long)
          break
        case 6:
          message.validatorNb = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MostRecentChain {
    const message = { ...baseMostRecentChain } as MostRecentChain
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID)
    } else {
      message.launchID = 0
    }
    if (
      object.launchTriggered !== undefined &&
      object.launchTriggered !== null
    ) {
      message.launchTriggered = Boolean(object.launchTriggered)
    } else {
      message.launchTriggered = false
    }
    if (object.sourceURL !== undefined && object.sourceURL !== null) {
      message.sourceURL = String(object.sourceURL)
    } else {
      message.sourceURL = ''
    }
    if (object.sourceHash !== undefined && object.sourceHash !== null) {
      message.sourceHash = String(object.sourceHash)
    } else {
      message.sourceHash = ''
    }
    if (object.requestNb !== undefined && object.requestNb !== null) {
      message.requestNb = Number(object.requestNb)
    } else {
      message.requestNb = 0
    }
    if (object.validatorNb !== undefined && object.validatorNb !== null) {
      message.validatorNb = Number(object.validatorNb)
    } else {
      message.validatorNb = 0
    }
    return message
  },

  toJSON(message: MostRecentChain): unknown {
    const obj: any = {}
    message.launchID !== undefined && (obj.launchID = message.launchID)
    message.launchTriggered !== undefined &&
      (obj.launchTriggered = message.launchTriggered)
    message.sourceURL !== undefined && (obj.sourceURL = message.sourceURL)
    message.sourceHash !== undefined && (obj.sourceHash = message.sourceHash)
    message.requestNb !== undefined && (obj.requestNb = message.requestNb)
    message.validatorNb !== undefined && (obj.validatorNb = message.validatorNb)
    return obj
  },

  fromPartial(object: DeepPartial<MostRecentChain>): MostRecentChain {
    const message = { ...baseMostRecentChain } as MostRecentChain
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID
    } else {
      message.launchID = 0
    }
    if (
      object.launchTriggered !== undefined &&
      object.launchTriggered !== null
    ) {
      message.launchTriggered = object.launchTriggered
    } else {
      message.launchTriggered = false
    }
    if (object.sourceURL !== undefined && object.sourceURL !== null) {
      message.sourceURL = object.sourceURL
    } else {
      message.sourceURL = ''
    }
    if (object.sourceHash !== undefined && object.sourceHash !== null) {
      message.sourceHash = object.sourceHash
    } else {
      message.sourceHash = ''
    }
    if (object.requestNb !== undefined && object.requestNb !== null) {
      message.requestNb = object.requestNb
    } else {
      message.requestNb = 0
    }
    if (object.validatorNb !== undefined && object.validatorNb !== null) {
      message.validatorNb = object.validatorNb
    } else {
      message.validatorNb = 0
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
