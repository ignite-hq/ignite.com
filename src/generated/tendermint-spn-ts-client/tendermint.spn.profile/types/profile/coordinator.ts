/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'tendermint.spn.profile'

export interface Coordinator {
  coordinatorID: number
  address: string
  description: CoordinatorDescription | undefined
  active: boolean
}

export interface CoordinatorDescription {
  identity: string
  website: string
  details: string
}

export interface CoordinatorByAddress {
  address: string
  coordinatorID: number
}

const baseCoordinator: object = {
  coordinatorID: 0,
  address: '',
  active: false
}

export const Coordinator = {
  encode(message: Coordinator, writer: Writer = Writer.create()): Writer {
    if (message.coordinatorID !== 0) {
      writer.uint32(8).uint64(message.coordinatorID)
    }
    if (message.address !== '') {
      writer.uint32(18).string(message.address)
    }
    if (message.description !== undefined) {
      CoordinatorDescription.encode(
        message.description,
        writer.uint32(26).fork()
      ).ldelim()
    }
    if (message.active === true) {
      writer.uint32(32).bool(message.active)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Coordinator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseCoordinator } as Coordinator
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.coordinatorID = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.address = reader.string()
          break
        case 3:
          message.description = CoordinatorDescription.decode(
            reader,
            reader.uint32()
          )
          break
        case 4:
          message.active = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Coordinator {
    const message = { ...baseCoordinator } as Coordinator
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
    if (object.description !== undefined && object.description !== null) {
      message.description = CoordinatorDescription.fromJSON(object.description)
    } else {
      message.description = undefined
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = Boolean(object.active)
    } else {
      message.active = false
    }
    return message
  },

  toJSON(message: Coordinator): unknown {
    const obj: any = {}
    message.coordinatorID !== undefined &&
      (obj.coordinatorID = message.coordinatorID)
    message.address !== undefined && (obj.address = message.address)
    message.description !== undefined &&
      (obj.description = message.description
        ? CoordinatorDescription.toJSON(message.description)
        : undefined)
    message.active !== undefined && (obj.active = message.active)
    return obj
  },

  fromPartial(object: DeepPartial<Coordinator>): Coordinator {
    const message = { ...baseCoordinator } as Coordinator
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
    if (object.description !== undefined && object.description !== null) {
      message.description = CoordinatorDescription.fromPartial(
        object.description
      )
    } else {
      message.description = undefined
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active
    } else {
      message.active = false
    }
    return message
  }
}

const baseCoordinatorDescription: object = {
  identity: '',
  website: '',
  details: ''
}

export const CoordinatorDescription = {
  encode(
    message: CoordinatorDescription,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.identity !== '') {
      writer.uint32(10).string(message.identity)
    }
    if (message.website !== '') {
      writer.uint32(18).string(message.website)
    }
    if (message.details !== '') {
      writer.uint32(26).string(message.details)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): CoordinatorDescription {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseCoordinatorDescription } as CoordinatorDescription
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.identity = reader.string()
          break
        case 2:
          message.website = reader.string()
          break
        case 3:
          message.details = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CoordinatorDescription {
    const message = { ...baseCoordinatorDescription } as CoordinatorDescription
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = String(object.identity)
    } else {
      message.identity = ''
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = String(object.website)
    } else {
      message.website = ''
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = String(object.details)
    } else {
      message.details = ''
    }
    return message
  },

  toJSON(message: CoordinatorDescription): unknown {
    const obj: any = {}
    message.identity !== undefined && (obj.identity = message.identity)
    message.website !== undefined && (obj.website = message.website)
    message.details !== undefined && (obj.details = message.details)
    return obj
  },

  fromPartial(
    object: DeepPartial<CoordinatorDescription>
  ): CoordinatorDescription {
    const message = { ...baseCoordinatorDescription } as CoordinatorDescription
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = object.identity
    } else {
      message.identity = ''
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website
    } else {
      message.website = ''
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = object.details
    } else {
      message.details = ''
    }
    return message
  }
}

const baseCoordinatorByAddress: object = { address: '', coordinatorID: 0 }

export const CoordinatorByAddress = {
  encode(
    message: CoordinatorByAddress,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address)
    }
    if (message.coordinatorID !== 0) {
      writer.uint32(16).uint64(message.coordinatorID)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): CoordinatorByAddress {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseCoordinatorByAddress } as CoordinatorByAddress
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string()
          break
        case 2:
          message.coordinatorID = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CoordinatorByAddress {
    const message = { ...baseCoordinatorByAddress } as CoordinatorByAddress
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    if (object.coordinatorID !== undefined && object.coordinatorID !== null) {
      message.coordinatorID = Number(object.coordinatorID)
    } else {
      message.coordinatorID = 0
    }
    return message
  },

  toJSON(message: CoordinatorByAddress): unknown {
    const obj: any = {}
    message.address !== undefined && (obj.address = message.address)
    message.coordinatorID !== undefined &&
      (obj.coordinatorID = message.coordinatorID)
    return obj
  },

  fromPartial(object: DeepPartial<CoordinatorByAddress>): CoordinatorByAddress {
    const message = { ...baseCoordinatorByAddress } as CoordinatorByAddress
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    if (object.coordinatorID !== undefined && object.coordinatorID !== null) {
      message.coordinatorID = object.coordinatorID
    } else {
      message.coordinatorID = 0
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
