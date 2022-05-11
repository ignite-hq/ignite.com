/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import { Coin } from '../cosmos/base/v1beta1/coin'
import { ShareVestingOptions } from '../campaign/mainnet_vesting_account'

export const protobufPackage = 'tendermint.spn.campaign'

export interface EventCampaignCreated {
  campaignID: number
  coordinatorAddress: string
}

export interface EventCampaignChainAdded {
  campaignID: number
  launchID: number
}

export interface EventCampaignInfoUpdated {
  campaignID: number
  coordinatorAddress: string
  campaignName: string
  metadata: Uint8Array
}

export interface EventCampaignSharesUpdated {
  campaignID: number
  coordinatorAddress: string
  allocatedShares: Coin[]
}

export interface EventCampaignTotalSupplyUpdated {
  campaignID: number
  coordinatorAddress: string
  totalSupply: Coin[]
}

export interface EventCampaignMainnetInitialized {
  campaignID: number
  coordinatorAddress: string
  mainnetID: number
}

export interface EventMainnetAccountCreated {
  campaignID: number
  address: string
  shares: Coin[]
}

export interface EventMainnetAccountUpdated {
  campaignID: number
  address: string
  shares: Coin[]
}

export interface EventMainnetAccountRemoved {
  campaignID: number
  address: string
}

export interface EventMainnetVestingAccountCreated {
  campaignID: number
  address: string
  vestingOptions: ShareVestingOptions | undefined
}

export interface EventMainnetVestingAccountUpdated {
  campaignID: number
  address: string
  vestingOptions: ShareVestingOptions | undefined
}

const baseEventCampaignCreated: object = {
  campaignID: 0,
  coordinatorAddress: ''
}

export const EventCampaignCreated = {
  encode(
    message: EventCampaignCreated,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.campaignID !== 0) {
      writer.uint32(8).uint64(message.campaignID)
    }
    if (message.coordinatorAddress !== '') {
      writer.uint32(18).string(message.coordinatorAddress)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): EventCampaignCreated {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseEventCampaignCreated } as EventCampaignCreated
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.campaignID = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.coordinatorAddress = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventCampaignCreated {
    const message = { ...baseEventCampaignCreated } as EventCampaignCreated
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = Number(object.campaignID)
    } else {
      message.campaignID = 0
    }
    if (
      object.coordinatorAddress !== undefined &&
      object.coordinatorAddress !== null
    ) {
      message.coordinatorAddress = String(object.coordinatorAddress)
    } else {
      message.coordinatorAddress = ''
    }
    return message
  },

  toJSON(message: EventCampaignCreated): unknown {
    const obj: any = {}
    message.campaignID !== undefined && (obj.campaignID = message.campaignID)
    message.coordinatorAddress !== undefined &&
      (obj.coordinatorAddress = message.coordinatorAddress)
    return obj
  },

  fromPartial(object: DeepPartial<EventCampaignCreated>): EventCampaignCreated {
    const message = { ...baseEventCampaignCreated } as EventCampaignCreated
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = object.campaignID
    } else {
      message.campaignID = 0
    }
    if (
      object.coordinatorAddress !== undefined &&
      object.coordinatorAddress !== null
    ) {
      message.coordinatorAddress = object.coordinatorAddress
    } else {
      message.coordinatorAddress = ''
    }
    return message
  }
}

const baseEventCampaignChainAdded: object = { campaignID: 0, launchID: 0 }

export const EventCampaignChainAdded = {
  encode(
    message: EventCampaignChainAdded,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.campaignID !== 0) {
      writer.uint32(8).uint64(message.campaignID)
    }
    if (message.launchID !== 0) {
      writer.uint32(16).uint64(message.launchID)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): EventCampaignChainAdded {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseEventCampaignChainAdded
    } as EventCampaignChainAdded
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.campaignID = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.launchID = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventCampaignChainAdded {
    const message = {
      ...baseEventCampaignChainAdded
    } as EventCampaignChainAdded
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = Number(object.campaignID)
    } else {
      message.campaignID = 0
    }
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID)
    } else {
      message.launchID = 0
    }
    return message
  },

  toJSON(message: EventCampaignChainAdded): unknown {
    const obj: any = {}
    message.campaignID !== undefined && (obj.campaignID = message.campaignID)
    message.launchID !== undefined && (obj.launchID = message.launchID)
    return obj
  },

  fromPartial(
    object: DeepPartial<EventCampaignChainAdded>
  ): EventCampaignChainAdded {
    const message = {
      ...baseEventCampaignChainAdded
    } as EventCampaignChainAdded
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = object.campaignID
    } else {
      message.campaignID = 0
    }
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID
    } else {
      message.launchID = 0
    }
    return message
  }
}

const baseEventCampaignInfoUpdated: object = {
  campaignID: 0,
  coordinatorAddress: '',
  campaignName: ''
}

export const EventCampaignInfoUpdated = {
  encode(
    message: EventCampaignInfoUpdated,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.campaignID !== 0) {
      writer.uint32(8).uint64(message.campaignID)
    }
    if (message.coordinatorAddress !== '') {
      writer.uint32(18).string(message.coordinatorAddress)
    }
    if (message.campaignName !== '') {
      writer.uint32(26).string(message.campaignName)
    }
    if (message.metadata.length !== 0) {
      writer.uint32(34).bytes(message.metadata)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EventCampaignInfoUpdated {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseEventCampaignInfoUpdated
    } as EventCampaignInfoUpdated
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.campaignID = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.coordinatorAddress = reader.string()
          break
        case 3:
          message.campaignName = reader.string()
          break
        case 4:
          message.metadata = reader.bytes()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventCampaignInfoUpdated {
    const message = {
      ...baseEventCampaignInfoUpdated
    } as EventCampaignInfoUpdated
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = Number(object.campaignID)
    } else {
      message.campaignID = 0
    }
    if (
      object.coordinatorAddress !== undefined &&
      object.coordinatorAddress !== null
    ) {
      message.coordinatorAddress = String(object.coordinatorAddress)
    } else {
      message.coordinatorAddress = ''
    }
    if (object.campaignName !== undefined && object.campaignName !== null) {
      message.campaignName = String(object.campaignName)
    } else {
      message.campaignName = ''
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata)
    }
    return message
  },

  toJSON(message: EventCampaignInfoUpdated): unknown {
    const obj: any = {}
    message.campaignID !== undefined && (obj.campaignID = message.campaignID)
    message.coordinatorAddress !== undefined &&
      (obj.coordinatorAddress = message.coordinatorAddress)
    message.campaignName !== undefined &&
      (obj.campaignName = message.campaignName)
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(
        message.metadata !== undefined ? message.metadata : new Uint8Array()
      ))
    return obj
  },

  fromPartial(
    object: DeepPartial<EventCampaignInfoUpdated>
  ): EventCampaignInfoUpdated {
    const message = {
      ...baseEventCampaignInfoUpdated
    } as EventCampaignInfoUpdated
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = object.campaignID
    } else {
      message.campaignID = 0
    }
    if (
      object.coordinatorAddress !== undefined &&
      object.coordinatorAddress !== null
    ) {
      message.coordinatorAddress = object.coordinatorAddress
    } else {
      message.coordinatorAddress = ''
    }
    if (object.campaignName !== undefined && object.campaignName !== null) {
      message.campaignName = object.campaignName
    } else {
      message.campaignName = ''
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata
    } else {
      message.metadata = new Uint8Array()
    }
    return message
  }
}

const baseEventCampaignSharesUpdated: object = {
  campaignID: 0,
  coordinatorAddress: ''
}

export const EventCampaignSharesUpdated = {
  encode(
    message: EventCampaignSharesUpdated,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.campaignID !== 0) {
      writer.uint32(8).uint64(message.campaignID)
    }
    if (message.coordinatorAddress !== '') {
      writer.uint32(18).string(message.coordinatorAddress)
    }
    for (const v of message.allocatedShares) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EventCampaignSharesUpdated {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseEventCampaignSharesUpdated
    } as EventCampaignSharesUpdated
    message.allocatedShares = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.campaignID = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.coordinatorAddress = reader.string()
          break
        case 3:
          message.allocatedShares.push(Coin.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventCampaignSharesUpdated {
    const message = {
      ...baseEventCampaignSharesUpdated
    } as EventCampaignSharesUpdated
    message.allocatedShares = []
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = Number(object.campaignID)
    } else {
      message.campaignID = 0
    }
    if (
      object.coordinatorAddress !== undefined &&
      object.coordinatorAddress !== null
    ) {
      message.coordinatorAddress = String(object.coordinatorAddress)
    } else {
      message.coordinatorAddress = ''
    }
    if (
      object.allocatedShares !== undefined &&
      object.allocatedShares !== null
    ) {
      for (const e of object.allocatedShares) {
        message.allocatedShares.push(Coin.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: EventCampaignSharesUpdated): unknown {
    const obj: any = {}
    message.campaignID !== undefined && (obj.campaignID = message.campaignID)
    message.coordinatorAddress !== undefined &&
      (obj.coordinatorAddress = message.coordinatorAddress)
    if (message.allocatedShares) {
      obj.allocatedShares = message.allocatedShares.map((e) =>
        e ? Coin.toJSON(e) : undefined
      )
    } else {
      obj.allocatedShares = []
    }
    return obj
  },

  fromPartial(
    object: DeepPartial<EventCampaignSharesUpdated>
  ): EventCampaignSharesUpdated {
    const message = {
      ...baseEventCampaignSharesUpdated
    } as EventCampaignSharesUpdated
    message.allocatedShares = []
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = object.campaignID
    } else {
      message.campaignID = 0
    }
    if (
      object.coordinatorAddress !== undefined &&
      object.coordinatorAddress !== null
    ) {
      message.coordinatorAddress = object.coordinatorAddress
    } else {
      message.coordinatorAddress = ''
    }
    if (
      object.allocatedShares !== undefined &&
      object.allocatedShares !== null
    ) {
      for (const e of object.allocatedShares) {
        message.allocatedShares.push(Coin.fromPartial(e))
      }
    }
    return message
  }
}

const baseEventCampaignTotalSupplyUpdated: object = {
  campaignID: 0,
  coordinatorAddress: ''
}

export const EventCampaignTotalSupplyUpdated = {
  encode(
    message: EventCampaignTotalSupplyUpdated,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.campaignID !== 0) {
      writer.uint32(8).uint64(message.campaignID)
    }
    if (message.coordinatorAddress !== '') {
      writer.uint32(18).string(message.coordinatorAddress)
    }
    for (const v of message.totalSupply) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EventCampaignTotalSupplyUpdated {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseEventCampaignTotalSupplyUpdated
    } as EventCampaignTotalSupplyUpdated
    message.totalSupply = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.campaignID = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.coordinatorAddress = reader.string()
          break
        case 3:
          message.totalSupply.push(Coin.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventCampaignTotalSupplyUpdated {
    const message = {
      ...baseEventCampaignTotalSupplyUpdated
    } as EventCampaignTotalSupplyUpdated
    message.totalSupply = []
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = Number(object.campaignID)
    } else {
      message.campaignID = 0
    }
    if (
      object.coordinatorAddress !== undefined &&
      object.coordinatorAddress !== null
    ) {
      message.coordinatorAddress = String(object.coordinatorAddress)
    } else {
      message.coordinatorAddress = ''
    }
    if (object.totalSupply !== undefined && object.totalSupply !== null) {
      for (const e of object.totalSupply) {
        message.totalSupply.push(Coin.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: EventCampaignTotalSupplyUpdated): unknown {
    const obj: any = {}
    message.campaignID !== undefined && (obj.campaignID = message.campaignID)
    message.coordinatorAddress !== undefined &&
      (obj.coordinatorAddress = message.coordinatorAddress)
    if (message.totalSupply) {
      obj.totalSupply = message.totalSupply.map((e) =>
        e ? Coin.toJSON(e) : undefined
      )
    } else {
      obj.totalSupply = []
    }
    return obj
  },

  fromPartial(
    object: DeepPartial<EventCampaignTotalSupplyUpdated>
  ): EventCampaignTotalSupplyUpdated {
    const message = {
      ...baseEventCampaignTotalSupplyUpdated
    } as EventCampaignTotalSupplyUpdated
    message.totalSupply = []
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = object.campaignID
    } else {
      message.campaignID = 0
    }
    if (
      object.coordinatorAddress !== undefined &&
      object.coordinatorAddress !== null
    ) {
      message.coordinatorAddress = object.coordinatorAddress
    } else {
      message.coordinatorAddress = ''
    }
    if (object.totalSupply !== undefined && object.totalSupply !== null) {
      for (const e of object.totalSupply) {
        message.totalSupply.push(Coin.fromPartial(e))
      }
    }
    return message
  }
}

const baseEventCampaignMainnetInitialized: object = {
  campaignID: 0,
  coordinatorAddress: '',
  mainnetID: 0
}

export const EventCampaignMainnetInitialized = {
  encode(
    message: EventCampaignMainnetInitialized,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.campaignID !== 0) {
      writer.uint32(8).uint64(message.campaignID)
    }
    if (message.coordinatorAddress !== '') {
      writer.uint32(18).string(message.coordinatorAddress)
    }
    if (message.mainnetID !== 0) {
      writer.uint32(24).uint64(message.mainnetID)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EventCampaignMainnetInitialized {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseEventCampaignMainnetInitialized
    } as EventCampaignMainnetInitialized
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.campaignID = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.coordinatorAddress = reader.string()
          break
        case 3:
          message.mainnetID = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventCampaignMainnetInitialized {
    const message = {
      ...baseEventCampaignMainnetInitialized
    } as EventCampaignMainnetInitialized
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = Number(object.campaignID)
    } else {
      message.campaignID = 0
    }
    if (
      object.coordinatorAddress !== undefined &&
      object.coordinatorAddress !== null
    ) {
      message.coordinatorAddress = String(object.coordinatorAddress)
    } else {
      message.coordinatorAddress = ''
    }
    if (object.mainnetID !== undefined && object.mainnetID !== null) {
      message.mainnetID = Number(object.mainnetID)
    } else {
      message.mainnetID = 0
    }
    return message
  },

  toJSON(message: EventCampaignMainnetInitialized): unknown {
    const obj: any = {}
    message.campaignID !== undefined && (obj.campaignID = message.campaignID)
    message.coordinatorAddress !== undefined &&
      (obj.coordinatorAddress = message.coordinatorAddress)
    message.mainnetID !== undefined && (obj.mainnetID = message.mainnetID)
    return obj
  },

  fromPartial(
    object: DeepPartial<EventCampaignMainnetInitialized>
  ): EventCampaignMainnetInitialized {
    const message = {
      ...baseEventCampaignMainnetInitialized
    } as EventCampaignMainnetInitialized
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = object.campaignID
    } else {
      message.campaignID = 0
    }
    if (
      object.coordinatorAddress !== undefined &&
      object.coordinatorAddress !== null
    ) {
      message.coordinatorAddress = object.coordinatorAddress
    } else {
      message.coordinatorAddress = ''
    }
    if (object.mainnetID !== undefined && object.mainnetID !== null) {
      message.mainnetID = object.mainnetID
    } else {
      message.mainnetID = 0
    }
    return message
  }
}

const baseEventMainnetAccountCreated: object = { campaignID: 0, address: '' }

export const EventMainnetAccountCreated = {
  encode(
    message: EventMainnetAccountCreated,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.campaignID !== 0) {
      writer.uint32(8).uint64(message.campaignID)
    }
    if (message.address !== '') {
      writer.uint32(18).string(message.address)
    }
    for (const v of message.shares) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EventMainnetAccountCreated {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseEventMainnetAccountCreated
    } as EventMainnetAccountCreated
    message.shares = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.campaignID = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.address = reader.string()
          break
        case 3:
          message.shares.push(Coin.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventMainnetAccountCreated {
    const message = {
      ...baseEventMainnetAccountCreated
    } as EventMainnetAccountCreated
    message.shares = []
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = Number(object.campaignID)
    } else {
      message.campaignID = 0
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    if (object.shares !== undefined && object.shares !== null) {
      for (const e of object.shares) {
        message.shares.push(Coin.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: EventMainnetAccountCreated): unknown {
    const obj: any = {}
    message.campaignID !== undefined && (obj.campaignID = message.campaignID)
    message.address !== undefined && (obj.address = message.address)
    if (message.shares) {
      obj.shares = message.shares.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.shares = []
    }
    return obj
  },

  fromPartial(
    object: DeepPartial<EventMainnetAccountCreated>
  ): EventMainnetAccountCreated {
    const message = {
      ...baseEventMainnetAccountCreated
    } as EventMainnetAccountCreated
    message.shares = []
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = object.campaignID
    } else {
      message.campaignID = 0
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    if (object.shares !== undefined && object.shares !== null) {
      for (const e of object.shares) {
        message.shares.push(Coin.fromPartial(e))
      }
    }
    return message
  }
}

const baseEventMainnetAccountUpdated: object = { campaignID: 0, address: '' }

export const EventMainnetAccountUpdated = {
  encode(
    message: EventMainnetAccountUpdated,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.campaignID !== 0) {
      writer.uint32(8).uint64(message.campaignID)
    }
    if (message.address !== '') {
      writer.uint32(18).string(message.address)
    }
    for (const v of message.shares) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EventMainnetAccountUpdated {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseEventMainnetAccountUpdated
    } as EventMainnetAccountUpdated
    message.shares = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.campaignID = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.address = reader.string()
          break
        case 3:
          message.shares.push(Coin.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventMainnetAccountUpdated {
    const message = {
      ...baseEventMainnetAccountUpdated
    } as EventMainnetAccountUpdated
    message.shares = []
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = Number(object.campaignID)
    } else {
      message.campaignID = 0
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    if (object.shares !== undefined && object.shares !== null) {
      for (const e of object.shares) {
        message.shares.push(Coin.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: EventMainnetAccountUpdated): unknown {
    const obj: any = {}
    message.campaignID !== undefined && (obj.campaignID = message.campaignID)
    message.address !== undefined && (obj.address = message.address)
    if (message.shares) {
      obj.shares = message.shares.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.shares = []
    }
    return obj
  },

  fromPartial(
    object: DeepPartial<EventMainnetAccountUpdated>
  ): EventMainnetAccountUpdated {
    const message = {
      ...baseEventMainnetAccountUpdated
    } as EventMainnetAccountUpdated
    message.shares = []
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = object.campaignID
    } else {
      message.campaignID = 0
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    if (object.shares !== undefined && object.shares !== null) {
      for (const e of object.shares) {
        message.shares.push(Coin.fromPartial(e))
      }
    }
    return message
  }
}

const baseEventMainnetAccountRemoved: object = { campaignID: 0, address: '' }

export const EventMainnetAccountRemoved = {
  encode(
    message: EventMainnetAccountRemoved,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.campaignID !== 0) {
      writer.uint32(8).uint64(message.campaignID)
    }
    if (message.address !== '') {
      writer.uint32(18).string(message.address)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EventMainnetAccountRemoved {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseEventMainnetAccountRemoved
    } as EventMainnetAccountRemoved
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.campaignID = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.address = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventMainnetAccountRemoved {
    const message = {
      ...baseEventMainnetAccountRemoved
    } as EventMainnetAccountRemoved
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = Number(object.campaignID)
    } else {
      message.campaignID = 0
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    return message
  },

  toJSON(message: EventMainnetAccountRemoved): unknown {
    const obj: any = {}
    message.campaignID !== undefined && (obj.campaignID = message.campaignID)
    message.address !== undefined && (obj.address = message.address)
    return obj
  },

  fromPartial(
    object: DeepPartial<EventMainnetAccountRemoved>
  ): EventMainnetAccountRemoved {
    const message = {
      ...baseEventMainnetAccountRemoved
    } as EventMainnetAccountRemoved
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = object.campaignID
    } else {
      message.campaignID = 0
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    return message
  }
}

const baseEventMainnetVestingAccountCreated: object = {
  campaignID: 0,
  address: ''
}

export const EventMainnetVestingAccountCreated = {
  encode(
    message: EventMainnetVestingAccountCreated,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.campaignID !== 0) {
      writer.uint32(8).uint64(message.campaignID)
    }
    if (message.address !== '') {
      writer.uint32(18).string(message.address)
    }
    if (message.vestingOptions !== undefined) {
      ShareVestingOptions.encode(
        message.vestingOptions,
        writer.uint32(26).fork()
      ).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EventMainnetVestingAccountCreated {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseEventMainnetVestingAccountCreated
    } as EventMainnetVestingAccountCreated
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.campaignID = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.address = reader.string()
          break
        case 3:
          message.vestingOptions = ShareVestingOptions.decode(
            reader,
            reader.uint32()
          )
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventMainnetVestingAccountCreated {
    const message = {
      ...baseEventMainnetVestingAccountCreated
    } as EventMainnetVestingAccountCreated
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = Number(object.campaignID)
    } else {
      message.campaignID = 0
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    if (object.vestingOptions !== undefined && object.vestingOptions !== null) {
      message.vestingOptions = ShareVestingOptions.fromJSON(
        object.vestingOptions
      )
    } else {
      message.vestingOptions = undefined
    }
    return message
  },

  toJSON(message: EventMainnetVestingAccountCreated): unknown {
    const obj: any = {}
    message.campaignID !== undefined && (obj.campaignID = message.campaignID)
    message.address !== undefined && (obj.address = message.address)
    message.vestingOptions !== undefined &&
      (obj.vestingOptions = message.vestingOptions
        ? ShareVestingOptions.toJSON(message.vestingOptions)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<EventMainnetVestingAccountCreated>
  ): EventMainnetVestingAccountCreated {
    const message = {
      ...baseEventMainnetVestingAccountCreated
    } as EventMainnetVestingAccountCreated
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = object.campaignID
    } else {
      message.campaignID = 0
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    if (object.vestingOptions !== undefined && object.vestingOptions !== null) {
      message.vestingOptions = ShareVestingOptions.fromPartial(
        object.vestingOptions
      )
    } else {
      message.vestingOptions = undefined
    }
    return message
  }
}

const baseEventMainnetVestingAccountUpdated: object = {
  campaignID: 0,
  address: ''
}

export const EventMainnetVestingAccountUpdated = {
  encode(
    message: EventMainnetVestingAccountUpdated,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.campaignID !== 0) {
      writer.uint32(8).uint64(message.campaignID)
    }
    if (message.address !== '') {
      writer.uint32(18).string(message.address)
    }
    if (message.vestingOptions !== undefined) {
      ShareVestingOptions.encode(
        message.vestingOptions,
        writer.uint32(26).fork()
      ).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EventMainnetVestingAccountUpdated {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseEventMainnetVestingAccountUpdated
    } as EventMainnetVestingAccountUpdated
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.campaignID = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.address = reader.string()
          break
        case 3:
          message.vestingOptions = ShareVestingOptions.decode(
            reader,
            reader.uint32()
          )
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventMainnetVestingAccountUpdated {
    const message = {
      ...baseEventMainnetVestingAccountUpdated
    } as EventMainnetVestingAccountUpdated
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = Number(object.campaignID)
    } else {
      message.campaignID = 0
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    if (object.vestingOptions !== undefined && object.vestingOptions !== null) {
      message.vestingOptions = ShareVestingOptions.fromJSON(
        object.vestingOptions
      )
    } else {
      message.vestingOptions = undefined
    }
    return message
  },

  toJSON(message: EventMainnetVestingAccountUpdated): unknown {
    const obj: any = {}
    message.campaignID !== undefined && (obj.campaignID = message.campaignID)
    message.address !== undefined && (obj.address = message.address)
    message.vestingOptions !== undefined &&
      (obj.vestingOptions = message.vestingOptions
        ? ShareVestingOptions.toJSON(message.vestingOptions)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<EventMainnetVestingAccountUpdated>
  ): EventMainnetVestingAccountUpdated {
    const message = {
      ...baseEventMainnetVestingAccountUpdated
    } as EventMainnetVestingAccountUpdated
    if (object.campaignID !== undefined && object.campaignID !== null) {
      message.campaignID = object.campaignID
    } else {
      message.campaignID = 0
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    if (object.vestingOptions !== undefined && object.vestingOptions !== null) {
      message.vestingOptions = ShareVestingOptions.fromPartial(
        object.vestingOptions
      )
    } else {
      message.vestingOptions = undefined
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
