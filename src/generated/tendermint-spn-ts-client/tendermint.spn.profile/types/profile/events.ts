/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'tendermint.spn.profile'

export interface EventCoordinatorCreated {
  coordinatorID: number
  address: string
}

export interface EventCoordinatorAddressUpdated {
  coordinatorID: number
  newAddress: string
}

export interface EventCoordinatorDisabled {
  coordinatorID: number
  address: string
}

export interface EventValidatorCreated {
  address: string
  operatorAddresses: string[]
}

export interface EventValidatorOperatorAddressesUpdated {
  address: string
  operatorAddresses: string[]
}

const baseEventCoordinatorCreated: object = { coordinatorID: 0, address: '' }

export const EventCoordinatorCreated = {
  encode(
    message: EventCoordinatorCreated,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.coordinatorID !== 0) {
      writer.uint32(8).uint64(message.coordinatorID)
    }
    if (message.address !== '') {
      writer.uint32(18).string(message.address)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): EventCoordinatorCreated {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseEventCoordinatorCreated
    } as EventCoordinatorCreated
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.coordinatorID = longToNumber(reader.uint64() as Long)
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

  fromJSON(object: any): EventCoordinatorCreated {
    const message = {
      ...baseEventCoordinatorCreated
    } as EventCoordinatorCreated
    if (object.coordinatorID !== undefined && object.coordinatorID !== null) {
      message.coordinatorID = Number(object.coordinatorID)
    } else {
      message.coordinatorID = 0
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    return message
  },

  toJSON(message: EventCoordinatorCreated): unknown {
    const obj: any = {}
    message.coordinatorID !== undefined &&
      (obj.coordinatorID = message.coordinatorID)
    message.address !== undefined && (obj.address = message.address)
    return obj
  },

  fromPartial(
    object: DeepPartial<EventCoordinatorCreated>
  ): EventCoordinatorCreated {
    const message = {
      ...baseEventCoordinatorCreated
    } as EventCoordinatorCreated
    if (object.coordinatorID !== undefined && object.coordinatorID !== null) {
      message.coordinatorID = object.coordinatorID
    } else {
      message.coordinatorID = 0
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    return message
  }
}

const baseEventCoordinatorAddressUpdated: object = {
  coordinatorID: 0,
  newAddress: ''
}

export const EventCoordinatorAddressUpdated = {
  encode(
    message: EventCoordinatorAddressUpdated,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.coordinatorID !== 0) {
      writer.uint32(8).uint64(message.coordinatorID)
    }
    if (message.newAddress !== '') {
      writer.uint32(18).string(message.newAddress)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EventCoordinatorAddressUpdated {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseEventCoordinatorAddressUpdated
    } as EventCoordinatorAddressUpdated
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.coordinatorID = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.newAddress = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventCoordinatorAddressUpdated {
    const message = {
      ...baseEventCoordinatorAddressUpdated
    } as EventCoordinatorAddressUpdated
    if (object.coordinatorID !== undefined && object.coordinatorID !== null) {
      message.coordinatorID = Number(object.coordinatorID)
    } else {
      message.coordinatorID = 0
    }
    if (object.newAddress !== undefined && object.newAddress !== null) {
      message.newAddress = String(object.newAddress)
    } else {
      message.newAddress = ''
    }
    return message
  },

  toJSON(message: EventCoordinatorAddressUpdated): unknown {
    const obj: any = {}
    message.coordinatorID !== undefined &&
      (obj.coordinatorID = message.coordinatorID)
    message.newAddress !== undefined && (obj.newAddress = message.newAddress)
    return obj
  },

  fromPartial(
    object: DeepPartial<EventCoordinatorAddressUpdated>
  ): EventCoordinatorAddressUpdated {
    const message = {
      ...baseEventCoordinatorAddressUpdated
    } as EventCoordinatorAddressUpdated
    if (object.coordinatorID !== undefined && object.coordinatorID !== null) {
      message.coordinatorID = object.coordinatorID
    } else {
      message.coordinatorID = 0
    }
    if (object.newAddress !== undefined && object.newAddress !== null) {
      message.newAddress = object.newAddress
    } else {
      message.newAddress = ''
    }
    return message
  }
}

const baseEventCoordinatorDisabled: object = { coordinatorID: 0, address: '' }

export const EventCoordinatorDisabled = {
  encode(
    message: EventCoordinatorDisabled,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.coordinatorID !== 0) {
      writer.uint32(8).uint64(message.coordinatorID)
    }
    if (message.address !== '') {
      writer.uint32(18).string(message.address)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EventCoordinatorDisabled {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseEventCoordinatorDisabled
    } as EventCoordinatorDisabled
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.coordinatorID = longToNumber(reader.uint64() as Long)
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

  fromJSON(object: any): EventCoordinatorDisabled {
    const message = {
      ...baseEventCoordinatorDisabled
    } as EventCoordinatorDisabled
    if (object.coordinatorID !== undefined && object.coordinatorID !== null) {
      message.coordinatorID = Number(object.coordinatorID)
    } else {
      message.coordinatorID = 0
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    return message
  },

  toJSON(message: EventCoordinatorDisabled): unknown {
    const obj: any = {}
    message.coordinatorID !== undefined &&
      (obj.coordinatorID = message.coordinatorID)
    message.address !== undefined && (obj.address = message.address)
    return obj
  },

  fromPartial(
    object: DeepPartial<EventCoordinatorDisabled>
  ): EventCoordinatorDisabled {
    const message = {
      ...baseEventCoordinatorDisabled
    } as EventCoordinatorDisabled
    if (object.coordinatorID !== undefined && object.coordinatorID !== null) {
      message.coordinatorID = object.coordinatorID
    } else {
      message.coordinatorID = 0
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    return message
  }
}

const baseEventValidatorCreated: object = {
  address: '',
  operatorAddresses: ''
}

export const EventValidatorCreated = {
  encode(
    message: EventValidatorCreated,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address)
    }
    for (const v of message.operatorAddresses) {
      writer.uint32(18).string(v!)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): EventValidatorCreated {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseEventValidatorCreated } as EventValidatorCreated
    message.operatorAddresses = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string()
          break
        case 2:
          message.operatorAddresses.push(reader.string())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventValidatorCreated {
    const message = { ...baseEventValidatorCreated } as EventValidatorCreated
    message.operatorAddresses = []
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    if (
      object.operatorAddresses !== undefined &&
      object.operatorAddresses !== null
    ) {
      for (const e of object.operatorAddresses) {
        message.operatorAddresses.push(String(e))
      }
    }
    return message
  },

  toJSON(message: EventValidatorCreated): unknown {
    const obj: any = {}
    message.address !== undefined && (obj.address = message.address)
    if (message.operatorAddresses) {
      obj.operatorAddresses = message.operatorAddresses.map((e) => e)
    } else {
      obj.operatorAddresses = []
    }
    return obj
  },

  fromPartial(
    object: DeepPartial<EventValidatorCreated>
  ): EventValidatorCreated {
    const message = { ...baseEventValidatorCreated } as EventValidatorCreated
    message.operatorAddresses = []
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    if (
      object.operatorAddresses !== undefined &&
      object.operatorAddresses !== null
    ) {
      for (const e of object.operatorAddresses) {
        message.operatorAddresses.push(e)
      }
    }
    return message
  }
}

const baseEventValidatorOperatorAddressesUpdated: object = {
  address: '',
  operatorAddresses: ''
}

export const EventValidatorOperatorAddressesUpdated = {
  encode(
    message: EventValidatorOperatorAddressesUpdated,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address)
    }
    for (const v of message.operatorAddresses) {
      writer.uint32(18).string(v!)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EventValidatorOperatorAddressesUpdated {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseEventValidatorOperatorAddressesUpdated
    } as EventValidatorOperatorAddressesUpdated
    message.operatorAddresses = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string()
          break
        case 2:
          message.operatorAddresses.push(reader.string())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventValidatorOperatorAddressesUpdated {
    const message = {
      ...baseEventValidatorOperatorAddressesUpdated
    } as EventValidatorOperatorAddressesUpdated
    message.operatorAddresses = []
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    if (
      object.operatorAddresses !== undefined &&
      object.operatorAddresses !== null
    ) {
      for (const e of object.operatorAddresses) {
        message.operatorAddresses.push(String(e))
      }
    }
    return message
  },

  toJSON(message: EventValidatorOperatorAddressesUpdated): unknown {
    const obj: any = {}
    message.address !== undefined && (obj.address = message.address)
    if (message.operatorAddresses) {
      obj.operatorAddresses = message.operatorAddresses.map((e) => e)
    } else {
      obj.operatorAddresses = []
    }
    return obj
  },

  fromPartial(
    object: DeepPartial<EventValidatorOperatorAddressesUpdated>
  ): EventValidatorOperatorAddressesUpdated {
    const message = {
      ...baseEventValidatorOperatorAddressesUpdated
    } as EventValidatorOperatorAddressesUpdated
    message.operatorAddresses = []
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    if (
      object.operatorAddresses !== undefined &&
      object.operatorAddresses !== null
    ) {
      for (const e of object.operatorAddresses) {
        message.operatorAddresses.push(e)
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
