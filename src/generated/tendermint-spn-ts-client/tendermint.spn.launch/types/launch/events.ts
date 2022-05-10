/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import { Request } from '../launch/request'
import { Coin } from '../cosmos/base/v1beta1/coin'
import { VestingOptions } from '../launch/vesting_account'
import { Peer } from '../launch/genesis_validator'

export const protobufPackage = 'tendermint.spn.launch'

export interface EventChainCreated {
  launchID: number
}

export interface EventRequestCreated {
  creator: string
  request: Request | undefined
}

export interface EventRequestSettled {
  launchID: number
  requestID: number
  approved: boolean
}

export interface EventGenesisAccountAdded {
  launchID: number
  address: string
  coins: Coin[]
  coordinatorAddress: string
}

export interface EventVestingAccountAdded {
  launchID: number
  address: string
  vestingOptions: VestingOptions | undefined
  coordinatorAddress: string
}

export interface EventValidatorAdded {
  launchID: number
  address: string
  genTx: Uint8Array
  consPubKey: Uint8Array
  selfDelegation: Coin | undefined
  peer: Peer | undefined
  hasCampaign: boolean
  campaignID: number
  coordinatorAddress: string
}

export interface EventAccountRemoved {
  address: string
  launchID: number
  coordinatorAddress: string
}

export interface EventValidatorRemoved {
  genesisValidatorAccount: string
  launchID: number
  hasCampaign: boolean
  campaignID: number
  coordinatorAddress: string
}

export interface EventLaunchTriggered {
  launchID: number
  launchTimestamp: number
}

export interface EventLaunchReverted {
  launchID: number
}

const baseEventChainCreated: object = { launchID: 0 }

export const EventChainCreated = {
  encode(message: EventChainCreated, writer: Writer = Writer.create()): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): EventChainCreated {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseEventChainCreated } as EventChainCreated
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

  fromJSON(object: any): EventChainCreated {
    const message = { ...baseEventChainCreated } as EventChainCreated
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID)
    } else {
      message.launchID = 0
    }
    return message
  },

  toJSON(message: EventChainCreated): unknown {
    const obj: any = {}
    message.launchID !== undefined && (obj.launchID = message.launchID)
    return obj
  },

  fromPartial(object: DeepPartial<EventChainCreated>): EventChainCreated {
    const message = { ...baseEventChainCreated } as EventChainCreated
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID
    } else {
      message.launchID = 0
    }
    return message
  }
}

const baseEventRequestCreated: object = { creator: '' }

export const EventRequestCreated = {
  encode(
    message: EventRequestCreated,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.request !== undefined) {
      Request.encode(message.request, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): EventRequestCreated {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseEventRequestCreated } as EventRequestCreated
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.request = Request.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventRequestCreated {
    const message = { ...baseEventRequestCreated } as EventRequestCreated
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.request !== undefined && object.request !== null) {
      message.request = Request.fromJSON(object.request)
    } else {
      message.request = undefined
    }
    return message
  },

  toJSON(message: EventRequestCreated): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.request !== undefined &&
      (obj.request = message.request
        ? Request.toJSON(message.request)
        : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<EventRequestCreated>): EventRequestCreated {
    const message = { ...baseEventRequestCreated } as EventRequestCreated
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.request !== undefined && object.request !== null) {
      message.request = Request.fromPartial(object.request)
    } else {
      message.request = undefined
    }
    return message
  }
}

const baseEventRequestSettled: object = {
  launchID: 0,
  requestID: 0,
  approved: false
}

export const EventRequestSettled = {
  encode(
    message: EventRequestSettled,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID)
    }
    if (message.requestID !== 0) {
      writer.uint32(16).uint64(message.requestID)
    }
    if (message.approved === true) {
      writer.uint32(24).bool(message.approved)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): EventRequestSettled {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseEventRequestSettled } as EventRequestSettled
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.launchID = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.requestID = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.approved = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventRequestSettled {
    const message = { ...baseEventRequestSettled } as EventRequestSettled
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID)
    } else {
      message.launchID = 0
    }
    if (object.requestID !== undefined && object.requestID !== null) {
      message.requestID = Number(object.requestID)
    } else {
      message.requestID = 0
    }
    if (object.approved !== undefined && object.approved !== null) {
      message.approved = Boolean(object.approved)
    } else {
      message.approved = false
    }
    return message
  },

  toJSON(message: EventRequestSettled): unknown {
    const obj: any = {}
    message.launchID !== undefined && (obj.launchID = message.launchID)
    message.requestID !== undefined && (obj.requestID = message.requestID)
    message.approved !== undefined && (obj.approved = message.approved)
    return obj
  },

  fromPartial(object: DeepPartial<EventRequestSettled>): EventRequestSettled {
    const message = { ...baseEventRequestSettled } as EventRequestSettled
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID
    } else {
      message.launchID = 0
    }
    if (object.requestID !== undefined && object.requestID !== null) {
      message.requestID = object.requestID
    } else {
      message.requestID = 0
    }
    if (object.approved !== undefined && object.approved !== null) {
      message.approved = object.approved
    } else {
      message.approved = false
    }
    return message
  }
}

const baseEventGenesisAccountAdded: object = {
  launchID: 0,
  address: '',
  coordinatorAddress: ''
}

export const EventGenesisAccountAdded = {
  encode(
    message: EventGenesisAccountAdded,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID)
    }
    if (message.address !== '') {
      writer.uint32(18).string(message.address)
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    if (message.coordinatorAddress !== '') {
      writer.uint32(34).string(message.coordinatorAddress)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EventGenesisAccountAdded {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseEventGenesisAccountAdded
    } as EventGenesisAccountAdded
    message.coins = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.launchID = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.address = reader.string()
          break
        case 3:
          message.coins.push(Coin.decode(reader, reader.uint32()))
          break
        case 4:
          message.coordinatorAddress = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventGenesisAccountAdded {
    const message = {
      ...baseEventGenesisAccountAdded
    } as EventGenesisAccountAdded
    message.coins = []
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID)
    } else {
      message.launchID = 0
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    if (object.coins !== undefined && object.coins !== null) {
      for (const e of object.coins) {
        message.coins.push(Coin.fromJSON(e))
      }
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

  toJSON(message: EventGenesisAccountAdded): unknown {
    const obj: any = {}
    message.launchID !== undefined && (obj.launchID = message.launchID)
    message.address !== undefined && (obj.address = message.address)
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.coins = []
    }
    message.coordinatorAddress !== undefined &&
      (obj.coordinatorAddress = message.coordinatorAddress)
    return obj
  },

  fromPartial(
    object: DeepPartial<EventGenesisAccountAdded>
  ): EventGenesisAccountAdded {
    const message = {
      ...baseEventGenesisAccountAdded
    } as EventGenesisAccountAdded
    message.coins = []
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID
    } else {
      message.launchID = 0
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    if (object.coins !== undefined && object.coins !== null) {
      for (const e of object.coins) {
        message.coins.push(Coin.fromPartial(e))
      }
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

const baseEventVestingAccountAdded: object = {
  launchID: 0,
  address: '',
  coordinatorAddress: ''
}

export const EventVestingAccountAdded = {
  encode(
    message: EventVestingAccountAdded,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID)
    }
    if (message.address !== '') {
      writer.uint32(18).string(message.address)
    }
    if (message.vestingOptions !== undefined) {
      VestingOptions.encode(
        message.vestingOptions,
        writer.uint32(26).fork()
      ).ldelim()
    }
    if (message.coordinatorAddress !== '') {
      writer.uint32(34).string(message.coordinatorAddress)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EventVestingAccountAdded {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseEventVestingAccountAdded
    } as EventVestingAccountAdded
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.launchID = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.address = reader.string()
          break
        case 3:
          message.vestingOptions = VestingOptions.decode(
            reader,
            reader.uint32()
          )
          break
        case 4:
          message.coordinatorAddress = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventVestingAccountAdded {
    const message = {
      ...baseEventVestingAccountAdded
    } as EventVestingAccountAdded
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID)
    } else {
      message.launchID = 0
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    if (object.vestingOptions !== undefined && object.vestingOptions !== null) {
      message.vestingOptions = VestingOptions.fromJSON(object.vestingOptions)
    } else {
      message.vestingOptions = undefined
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

  toJSON(message: EventVestingAccountAdded): unknown {
    const obj: any = {}
    message.launchID !== undefined && (obj.launchID = message.launchID)
    message.address !== undefined && (obj.address = message.address)
    message.vestingOptions !== undefined &&
      (obj.vestingOptions = message.vestingOptions
        ? VestingOptions.toJSON(message.vestingOptions)
        : undefined)
    message.coordinatorAddress !== undefined &&
      (obj.coordinatorAddress = message.coordinatorAddress)
    return obj
  },

  fromPartial(
    object: DeepPartial<EventVestingAccountAdded>
  ): EventVestingAccountAdded {
    const message = {
      ...baseEventVestingAccountAdded
    } as EventVestingAccountAdded
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID
    } else {
      message.launchID = 0
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    if (object.vestingOptions !== undefined && object.vestingOptions !== null) {
      message.vestingOptions = VestingOptions.fromPartial(object.vestingOptions)
    } else {
      message.vestingOptions = undefined
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

const baseEventValidatorAdded: object = {
  launchID: 0,
  address: '',
  hasCampaign: false,
  campaignID: 0,
  coordinatorAddress: ''
}

export const EventValidatorAdded = {
  encode(
    message: EventValidatorAdded,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID)
    }
    if (message.address !== '') {
      writer.uint32(18).string(message.address)
    }
    if (message.genTx.length !== 0) {
      writer.uint32(26).bytes(message.genTx)
    }
    if (message.consPubKey.length !== 0) {
      writer.uint32(34).bytes(message.consPubKey)
    }
    if (message.selfDelegation !== undefined) {
      Coin.encode(message.selfDelegation, writer.uint32(42).fork()).ldelim()
    }
    if (message.peer !== undefined) {
      Peer.encode(message.peer, writer.uint32(50).fork()).ldelim()
    }
    if (message.hasCampaign === true) {
      writer.uint32(56).bool(message.hasCampaign)
    }
    if (message.campaignID !== 0) {
      writer.uint32(64).uint64(message.campaignID)
    }
    if (message.coordinatorAddress !== '') {
      writer.uint32(74).string(message.coordinatorAddress)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): EventValidatorAdded {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseEventValidatorAdded } as EventValidatorAdded
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.launchID = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.address = reader.string()
          break
        case 3:
          message.genTx = reader.bytes()
          break
        case 4:
          message.consPubKey = reader.bytes()
          break
        case 5:
          message.selfDelegation = Coin.decode(reader, reader.uint32())
          break
        case 6:
          message.peer = Peer.decode(reader, reader.uint32())
          break
        case 7:
          message.hasCampaign = reader.bool()
          break
        case 8:
          message.campaignID = longToNumber(reader.uint64() as Long)
          break
        case 9:
          message.coordinatorAddress = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventValidatorAdded {
    const message = { ...baseEventValidatorAdded } as EventValidatorAdded
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID)
    } else {
      message.launchID = 0
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    if (object.genTx !== undefined && object.genTx !== null) {
      message.genTx = bytesFromBase64(object.genTx)
    }
    if (object.consPubKey !== undefined && object.consPubKey !== null) {
      message.consPubKey = bytesFromBase64(object.consPubKey)
    }
    if (object.selfDelegation !== undefined && object.selfDelegation !== null) {
      message.selfDelegation = Coin.fromJSON(object.selfDelegation)
    } else {
      message.selfDelegation = undefined
    }
    if (object.peer !== undefined && object.peer !== null) {
      message.peer = Peer.fromJSON(object.peer)
    } else {
      message.peer = undefined
    }
    if (object.hasCampaign !== undefined && object.hasCampaign !== null) {
      message.hasCampaign = Boolean(object.hasCampaign)
    } else {
      message.hasCampaign = false
    }
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

  toJSON(message: EventValidatorAdded): unknown {
    const obj: any = {}
    message.launchID !== undefined && (obj.launchID = message.launchID)
    message.address !== undefined && (obj.address = message.address)
    message.genTx !== undefined &&
      (obj.genTx = base64FromBytes(
        message.genTx !== undefined ? message.genTx : new Uint8Array()
      ))
    message.consPubKey !== undefined &&
      (obj.consPubKey = base64FromBytes(
        message.consPubKey !== undefined ? message.consPubKey : new Uint8Array()
      ))
    message.selfDelegation !== undefined &&
      (obj.selfDelegation = message.selfDelegation
        ? Coin.toJSON(message.selfDelegation)
        : undefined)
    message.peer !== undefined &&
      (obj.peer = message.peer ? Peer.toJSON(message.peer) : undefined)
    message.hasCampaign !== undefined && (obj.hasCampaign = message.hasCampaign)
    message.campaignID !== undefined && (obj.campaignID = message.campaignID)
    message.coordinatorAddress !== undefined &&
      (obj.coordinatorAddress = message.coordinatorAddress)
    return obj
  },

  fromPartial(object: DeepPartial<EventValidatorAdded>): EventValidatorAdded {
    const message = { ...baseEventValidatorAdded } as EventValidatorAdded
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID
    } else {
      message.launchID = 0
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    if (object.genTx !== undefined && object.genTx !== null) {
      message.genTx = object.genTx
    } else {
      message.genTx = new Uint8Array()
    }
    if (object.consPubKey !== undefined && object.consPubKey !== null) {
      message.consPubKey = object.consPubKey
    } else {
      message.consPubKey = new Uint8Array()
    }
    if (object.selfDelegation !== undefined && object.selfDelegation !== null) {
      message.selfDelegation = Coin.fromPartial(object.selfDelegation)
    } else {
      message.selfDelegation = undefined
    }
    if (object.peer !== undefined && object.peer !== null) {
      message.peer = Peer.fromPartial(object.peer)
    } else {
      message.peer = undefined
    }
    if (object.hasCampaign !== undefined && object.hasCampaign !== null) {
      message.hasCampaign = object.hasCampaign
    } else {
      message.hasCampaign = false
    }
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

const baseEventAccountRemoved: object = {
  address: '',
  launchID: 0,
  coordinatorAddress: ''
}

export const EventAccountRemoved = {
  encode(
    message: EventAccountRemoved,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address)
    }
    if (message.launchID !== 0) {
      writer.uint32(16).uint64(message.launchID)
    }
    if (message.coordinatorAddress !== '') {
      writer.uint32(26).string(message.coordinatorAddress)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): EventAccountRemoved {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseEventAccountRemoved } as EventAccountRemoved
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string()
          break
        case 2:
          message.launchID = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.coordinatorAddress = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventAccountRemoved {
    const message = { ...baseEventAccountRemoved } as EventAccountRemoved
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID)
    } else {
      message.launchID = 0
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

  toJSON(message: EventAccountRemoved): unknown {
    const obj: any = {}
    message.address !== undefined && (obj.address = message.address)
    message.launchID !== undefined && (obj.launchID = message.launchID)
    message.coordinatorAddress !== undefined &&
      (obj.coordinatorAddress = message.coordinatorAddress)
    return obj
  },

  fromPartial(object: DeepPartial<EventAccountRemoved>): EventAccountRemoved {
    const message = { ...baseEventAccountRemoved } as EventAccountRemoved
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID
    } else {
      message.launchID = 0
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

const baseEventValidatorRemoved: object = {
  genesisValidatorAccount: '',
  launchID: 0,
  hasCampaign: false,
  campaignID: 0,
  coordinatorAddress: ''
}

export const EventValidatorRemoved = {
  encode(
    message: EventValidatorRemoved,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.genesisValidatorAccount !== '') {
      writer.uint32(10).string(message.genesisValidatorAccount)
    }
    if (message.launchID !== 0) {
      writer.uint32(16).uint64(message.launchID)
    }
    if (message.hasCampaign === true) {
      writer.uint32(24).bool(message.hasCampaign)
    }
    if (message.campaignID !== 0) {
      writer.uint32(32).uint64(message.campaignID)
    }
    if (message.coordinatorAddress !== '') {
      writer.uint32(42).string(message.coordinatorAddress)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): EventValidatorRemoved {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseEventValidatorRemoved } as EventValidatorRemoved
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.genesisValidatorAccount = reader.string()
          break
        case 2:
          message.launchID = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.hasCampaign = reader.bool()
          break
        case 4:
          message.campaignID = longToNumber(reader.uint64() as Long)
          break
        case 5:
          message.coordinatorAddress = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventValidatorRemoved {
    const message = { ...baseEventValidatorRemoved } as EventValidatorRemoved
    if (
      object.genesisValidatorAccount !== undefined &&
      object.genesisValidatorAccount !== null
    ) {
      message.genesisValidatorAccount = String(object.genesisValidatorAccount)
    } else {
      message.genesisValidatorAccount = ''
    }
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID)
    } else {
      message.launchID = 0
    }
    if (object.hasCampaign !== undefined && object.hasCampaign !== null) {
      message.hasCampaign = Boolean(object.hasCampaign)
    } else {
      message.hasCampaign = false
    }
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

  toJSON(message: EventValidatorRemoved): unknown {
    const obj: any = {}
    message.genesisValidatorAccount !== undefined &&
      (obj.genesisValidatorAccount = message.genesisValidatorAccount)
    message.launchID !== undefined && (obj.launchID = message.launchID)
    message.hasCampaign !== undefined && (obj.hasCampaign = message.hasCampaign)
    message.campaignID !== undefined && (obj.campaignID = message.campaignID)
    message.coordinatorAddress !== undefined &&
      (obj.coordinatorAddress = message.coordinatorAddress)
    return obj
  },

  fromPartial(
    object: DeepPartial<EventValidatorRemoved>
  ): EventValidatorRemoved {
    const message = { ...baseEventValidatorRemoved } as EventValidatorRemoved
    if (
      object.genesisValidatorAccount !== undefined &&
      object.genesisValidatorAccount !== null
    ) {
      message.genesisValidatorAccount = object.genesisValidatorAccount
    } else {
      message.genesisValidatorAccount = ''
    }
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID
    } else {
      message.launchID = 0
    }
    if (object.hasCampaign !== undefined && object.hasCampaign !== null) {
      message.hasCampaign = object.hasCampaign
    } else {
      message.hasCampaign = false
    }
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

const baseEventLaunchTriggered: object = { launchID: 0, launchTimestamp: 0 }

export const EventLaunchTriggered = {
  encode(
    message: EventLaunchTriggered,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID)
    }
    if (message.launchTimestamp !== 0) {
      writer.uint32(16).int64(message.launchTimestamp)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): EventLaunchTriggered {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseEventLaunchTriggered } as EventLaunchTriggered
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.launchID = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.launchTimestamp = longToNumber(reader.int64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventLaunchTriggered {
    const message = { ...baseEventLaunchTriggered } as EventLaunchTriggered
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID)
    } else {
      message.launchID = 0
    }
    if (
      object.launchTimestamp !== undefined &&
      object.launchTimestamp !== null
    ) {
      message.launchTimestamp = Number(object.launchTimestamp)
    } else {
      message.launchTimestamp = 0
    }
    return message
  },

  toJSON(message: EventLaunchTriggered): unknown {
    const obj: any = {}
    message.launchID !== undefined && (obj.launchID = message.launchID)
    message.launchTimestamp !== undefined &&
      (obj.launchTimestamp = message.launchTimestamp)
    return obj
  },

  fromPartial(object: DeepPartial<EventLaunchTriggered>): EventLaunchTriggered {
    const message = { ...baseEventLaunchTriggered } as EventLaunchTriggered
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID
    } else {
      message.launchID = 0
    }
    if (
      object.launchTimestamp !== undefined &&
      object.launchTimestamp !== null
    ) {
      message.launchTimestamp = object.launchTimestamp
    } else {
      message.launchTimestamp = 0
    }
    return message
  }
}

const baseEventLaunchReverted: object = { launchID: 0 }

export const EventLaunchReverted = {
  encode(
    message: EventLaunchReverted,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): EventLaunchReverted {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseEventLaunchReverted } as EventLaunchReverted
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

  fromJSON(object: any): EventLaunchReverted {
    const message = { ...baseEventLaunchReverted } as EventLaunchReverted
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID)
    } else {
      message.launchID = 0
    }
    return message
  },

  toJSON(message: EventLaunchReverted): unknown {
    const obj: any = {}
    message.launchID !== undefined && (obj.launchID = message.launchID)
    return obj
  },

  fromPartial(object: DeepPartial<EventLaunchReverted>): EventLaunchReverted {
    const message = { ...baseEventLaunchReverted } as EventLaunchReverted
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID
    } else {
      message.launchID = 0
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
