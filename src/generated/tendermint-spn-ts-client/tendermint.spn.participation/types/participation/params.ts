/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import { Duration } from '../google/protobuf/duration'

export const protobufPackage = 'tendermint.spn.participation'

/** Params defines the parameters for the module. */
export interface Params {
  allocationPrice: AllocationPrice | undefined
  participationTierList: Tier[]
  /** Time frame before auction starts where MsgParticipate can be called */
  registrationPeriod: Duration | undefined
  /** Delay after auction starts when allocations can be withdrawn */
  withdrawalDelay: Duration | undefined
}

export interface AllocationPrice {
  /** number of bonded tokens necessary to get one allocation */
  bonded: string
}

/** Matches a number of required allocations with benefits */
export interface Tier {
  tierID: number
  requiredAllocations: number
  benefits: TierBenefits | undefined
}

export interface TierBenefits {
  /** maximum amount an auction participant can bid */
  maxBidAmount: string
}

const baseParams: object = {}

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.allocationPrice !== undefined) {
      AllocationPrice.encode(
        message.allocationPrice,
        writer.uint32(10).fork()
      ).ldelim()
    }
    for (const v of message.participationTierList) {
      Tier.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    if (message.registrationPeriod !== undefined) {
      Duration.encode(
        message.registrationPeriod,
        writer.uint32(26).fork()
      ).ldelim()
    }
    if (message.withdrawalDelay !== undefined) {
      Duration.encode(
        message.withdrawalDelay,
        writer.uint32(34).fork()
      ).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseParams } as Params
    message.participationTierList = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.allocationPrice = AllocationPrice.decode(
            reader,
            reader.uint32()
          )
          break
        case 2:
          message.participationTierList.push(
            Tier.decode(reader, reader.uint32())
          )
          break
        case 3:
          message.registrationPeriod = Duration.decode(reader, reader.uint32())
          break
        case 4:
          message.withdrawalDelay = Duration.decode(reader, reader.uint32())
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
    message.participationTierList = []
    if (
      object.allocationPrice !== undefined &&
      object.allocationPrice !== null
    ) {
      message.allocationPrice = AllocationPrice.fromJSON(object.allocationPrice)
    } else {
      message.allocationPrice = undefined
    }
    if (
      object.participationTierList !== undefined &&
      object.participationTierList !== null
    ) {
      for (const e of object.participationTierList) {
        message.participationTierList.push(Tier.fromJSON(e))
      }
    }
    if (
      object.registrationPeriod !== undefined &&
      object.registrationPeriod !== null
    ) {
      message.registrationPeriod = Duration.fromJSON(object.registrationPeriod)
    } else {
      message.registrationPeriod = undefined
    }
    if (
      object.withdrawalDelay !== undefined &&
      object.withdrawalDelay !== null
    ) {
      message.withdrawalDelay = Duration.fromJSON(object.withdrawalDelay)
    } else {
      message.withdrawalDelay = undefined
    }
    return message
  },

  toJSON(message: Params): unknown {
    const obj: any = {}
    message.allocationPrice !== undefined &&
      (obj.allocationPrice = message.allocationPrice
        ? AllocationPrice.toJSON(message.allocationPrice)
        : undefined)
    if (message.participationTierList) {
      obj.participationTierList = message.participationTierList.map((e) =>
        e ? Tier.toJSON(e) : undefined
      )
    } else {
      obj.participationTierList = []
    }
    message.registrationPeriod !== undefined &&
      (obj.registrationPeriod = message.registrationPeriod
        ? Duration.toJSON(message.registrationPeriod)
        : undefined)
    message.withdrawalDelay !== undefined &&
      (obj.withdrawalDelay = message.withdrawalDelay
        ? Duration.toJSON(message.withdrawalDelay)
        : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params
    message.participationTierList = []
    if (
      object.allocationPrice !== undefined &&
      object.allocationPrice !== null
    ) {
      message.allocationPrice = AllocationPrice.fromPartial(
        object.allocationPrice
      )
    } else {
      message.allocationPrice = undefined
    }
    if (
      object.participationTierList !== undefined &&
      object.participationTierList !== null
    ) {
      for (const e of object.participationTierList) {
        message.participationTierList.push(Tier.fromPartial(e))
      }
    }
    if (
      object.registrationPeriod !== undefined &&
      object.registrationPeriod !== null
    ) {
      message.registrationPeriod = Duration.fromPartial(
        object.registrationPeriod
      )
    } else {
      message.registrationPeriod = undefined
    }
    if (
      object.withdrawalDelay !== undefined &&
      object.withdrawalDelay !== null
    ) {
      message.withdrawalDelay = Duration.fromPartial(object.withdrawalDelay)
    } else {
      message.withdrawalDelay = undefined
    }
    return message
  }
}

const baseAllocationPrice: object = { bonded: '' }

export const AllocationPrice = {
  encode(message: AllocationPrice, writer: Writer = Writer.create()): Writer {
    if (message.bonded !== '') {
      writer.uint32(10).string(message.bonded)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): AllocationPrice {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseAllocationPrice } as AllocationPrice
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.bonded = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): AllocationPrice {
    const message = { ...baseAllocationPrice } as AllocationPrice
    if (object.bonded !== undefined && object.bonded !== null) {
      message.bonded = String(object.bonded)
    } else {
      message.bonded = ''
    }
    return message
  },

  toJSON(message: AllocationPrice): unknown {
    const obj: any = {}
    message.bonded !== undefined && (obj.bonded = message.bonded)
    return obj
  },

  fromPartial(object: DeepPartial<AllocationPrice>): AllocationPrice {
    const message = { ...baseAllocationPrice } as AllocationPrice
    if (object.bonded !== undefined && object.bonded !== null) {
      message.bonded = object.bonded
    } else {
      message.bonded = ''
    }
    return message
  }
}

const baseTier: object = { tierID: 0, requiredAllocations: 0 }

export const Tier = {
  encode(message: Tier, writer: Writer = Writer.create()): Writer {
    if (message.tierID !== 0) {
      writer.uint32(8).uint64(message.tierID)
    }
    if (message.requiredAllocations !== 0) {
      writer.uint32(16).uint64(message.requiredAllocations)
    }
    if (message.benefits !== undefined) {
      TierBenefits.encode(message.benefits, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Tier {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseTier } as Tier
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.tierID = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.requiredAllocations = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.benefits = TierBenefits.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Tier {
    const message = { ...baseTier } as Tier
    if (object.tierID !== undefined && object.tierID !== null) {
      message.tierID = Number(object.tierID)
    } else {
      message.tierID = 0
    }
    if (
      object.requiredAllocations !== undefined &&
      object.requiredAllocations !== null
    ) {
      message.requiredAllocations = Number(object.requiredAllocations)
    } else {
      message.requiredAllocations = 0
    }
    if (object.benefits !== undefined && object.benefits !== null) {
      message.benefits = TierBenefits.fromJSON(object.benefits)
    } else {
      message.benefits = undefined
    }
    return message
  },

  toJSON(message: Tier): unknown {
    const obj: any = {}
    message.tierID !== undefined && (obj.tierID = message.tierID)
    message.requiredAllocations !== undefined &&
      (obj.requiredAllocations = message.requiredAllocations)
    message.benefits !== undefined &&
      (obj.benefits = message.benefits
        ? TierBenefits.toJSON(message.benefits)
        : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<Tier>): Tier {
    const message = { ...baseTier } as Tier
    if (object.tierID !== undefined && object.tierID !== null) {
      message.tierID = object.tierID
    } else {
      message.tierID = 0
    }
    if (
      object.requiredAllocations !== undefined &&
      object.requiredAllocations !== null
    ) {
      message.requiredAllocations = object.requiredAllocations
    } else {
      message.requiredAllocations = 0
    }
    if (object.benefits !== undefined && object.benefits !== null) {
      message.benefits = TierBenefits.fromPartial(object.benefits)
    } else {
      message.benefits = undefined
    }
    return message
  }
}

const baseTierBenefits: object = { maxBidAmount: '' }

export const TierBenefits = {
  encode(message: TierBenefits, writer: Writer = Writer.create()): Writer {
    if (message.maxBidAmount !== '') {
      writer.uint32(10).string(message.maxBidAmount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): TierBenefits {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseTierBenefits } as TierBenefits
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.maxBidAmount = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): TierBenefits {
    const message = { ...baseTierBenefits } as TierBenefits
    if (object.maxBidAmount !== undefined && object.maxBidAmount !== null) {
      message.maxBidAmount = String(object.maxBidAmount)
    } else {
      message.maxBidAmount = ''
    }
    return message
  },

  toJSON(message: TierBenefits): unknown {
    const obj: any = {}
    message.maxBidAmount !== undefined &&
      (obj.maxBidAmount = message.maxBidAmount)
    return obj
  },

  fromPartial(object: DeepPartial<TierBenefits>): TierBenefits {
    const message = { ...baseTierBenefits } as TierBenefits
    if (object.maxBidAmount !== undefined && object.maxBidAmount !== null) {
      message.maxBidAmount = object.maxBidAmount
    } else {
      message.maxBidAmount = ''
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
