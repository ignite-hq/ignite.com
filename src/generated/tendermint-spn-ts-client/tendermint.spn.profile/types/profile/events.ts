/* eslint-disable */
import { Coordinator } from '../profile/coordinator'
import { Validator } from '../profile/validator'
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'tendermint.spn.profile'

export interface EventCoordinatorCreated {
  coordinator: Coordinator | undefined
}

export interface EventCoordinatorUpdated {
  coordinator: Coordinator | undefined
}

export interface EventValidatorCreated {
  validator: Validator | undefined
}

export interface EventValidatorUpdated {
  validator: Validator | undefined
}

const baseEventCoordinatorCreated: object = {}

export const EventCoordinatorCreated = {
  encode(
    message: EventCoordinatorCreated,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.coordinator !== undefined) {
      Coordinator.encode(message.coordinator, writer.uint32(10).fork()).ldelim()
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
          message.coordinator = Coordinator.decode(reader, reader.uint32())
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
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = Coordinator.fromJSON(object.coordinator)
    } else {
      message.coordinator = undefined
    }
    return message
  },

  toJSON(message: EventCoordinatorCreated): unknown {
    const obj: any = {}
    message.coordinator !== undefined &&
      (obj.coordinator = message.coordinator
        ? Coordinator.toJSON(message.coordinator)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<EventCoordinatorCreated>
  ): EventCoordinatorCreated {
    const message = {
      ...baseEventCoordinatorCreated
    } as EventCoordinatorCreated
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = Coordinator.fromPartial(object.coordinator)
    } else {
      message.coordinator = undefined
    }
    return message
  }
}

const baseEventCoordinatorUpdated: object = {}

export const EventCoordinatorUpdated = {
  encode(
    message: EventCoordinatorUpdated,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.coordinator !== undefined) {
      Coordinator.encode(message.coordinator, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): EventCoordinatorUpdated {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseEventCoordinatorUpdated
    } as EventCoordinatorUpdated
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.coordinator = Coordinator.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventCoordinatorUpdated {
    const message = {
      ...baseEventCoordinatorUpdated
    } as EventCoordinatorUpdated
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = Coordinator.fromJSON(object.coordinator)
    } else {
      message.coordinator = undefined
    }
    return message
  },

  toJSON(message: EventCoordinatorUpdated): unknown {
    const obj: any = {}
    message.coordinator !== undefined &&
      (obj.coordinator = message.coordinator
        ? Coordinator.toJSON(message.coordinator)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<EventCoordinatorUpdated>
  ): EventCoordinatorUpdated {
    const message = {
      ...baseEventCoordinatorUpdated
    } as EventCoordinatorUpdated
    if (object.coordinator !== undefined && object.coordinator !== null) {
      message.coordinator = Coordinator.fromPartial(object.coordinator)
    } else {
      message.coordinator = undefined
    }
    return message
  }
}

const baseEventValidatorCreated: object = {}

export const EventValidatorCreated = {
  encode(
    message: EventValidatorCreated,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): EventValidatorCreated {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseEventValidatorCreated } as EventValidatorCreated
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32())
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
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromJSON(object.validator)
    } else {
      message.validator = undefined
    }
    return message
  },

  toJSON(message: EventValidatorCreated): unknown {
    const obj: any = {}
    message.validator !== undefined &&
      (obj.validator = message.validator
        ? Validator.toJSON(message.validator)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<EventValidatorCreated>
  ): EventValidatorCreated {
    const message = { ...baseEventValidatorCreated } as EventValidatorCreated
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromPartial(object.validator)
    } else {
      message.validator = undefined
    }
    return message
  }
}

const baseEventValidatorUpdated: object = {}

export const EventValidatorUpdated = {
  encode(
    message: EventValidatorUpdated,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): EventValidatorUpdated {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseEventValidatorUpdated } as EventValidatorUpdated
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): EventValidatorUpdated {
    const message = { ...baseEventValidatorUpdated } as EventValidatorUpdated
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromJSON(object.validator)
    } else {
      message.validator = undefined
    }
    return message
  },

  toJSON(message: EventValidatorUpdated): unknown {
    const obj: any = {}
    message.validator !== undefined &&
      (obj.validator = message.validator
        ? Validator.toJSON(message.validator)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<EventValidatorUpdated>
  ): EventValidatorUpdated {
    const message = { ...baseEventValidatorUpdated } as EventValidatorUpdated
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromPartial(object.validator)
    } else {
      message.validator = undefined
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
