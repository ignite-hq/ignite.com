/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { ValidatorDescription } from '../profile/validator'
import { CoordinatorDescription } from '../profile/coordinator'

export const protobufPackage = 'tendermint.spn.profile'

export interface MsgUpdateValidatorDescription {
  address: string
  description: ValidatorDescription | undefined
}

export interface MsgUpdateValidatorDescriptionResponse {}

export interface MsgAddValidatorOperatorAddress {
  validatorAddress: string
  operatorAddress: string
}

export interface MsgAddValidatorOperatorAddressResponse {}

export interface MsgCreateCoordinator {
  address: string
  description: CoordinatorDescription | undefined
}

export interface MsgCreateCoordinatorResponse {
  coordinatorID: number
}

export interface MsgUpdateCoordinatorDescription {
  address: string
  description: CoordinatorDescription | undefined
}

export interface MsgUpdateCoordinatorDescriptionResponse {}

export interface MsgUpdateCoordinatorAddress {
  address: string
  newAddress: string
}

export interface MsgUpdateCoordinatorAddressResponse {}

export interface MsgDisableCoordinator {
  address: string
}

export interface MsgDisableCoordinatorResponse {
  coordinatorID: number
}

const baseMsgUpdateValidatorDescription: object = { address: '' }

export const MsgUpdateValidatorDescription = {
  encode(
    message: MsgUpdateValidatorDescription,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address)
    }
    if (message.description !== undefined) {
      ValidatorDescription.encode(
        message.description,
        writer.uint32(18).fork()
      ).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateValidatorDescription {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgUpdateValidatorDescription
    } as MsgUpdateValidatorDescription
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string()
          break
        case 2:
          message.description = ValidatorDescription.decode(
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

  fromJSON(object: any): MsgUpdateValidatorDescription {
    const message = {
      ...baseMsgUpdateValidatorDescription
    } as MsgUpdateValidatorDescription
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = ValidatorDescription.fromJSON(object.description)
    } else {
      message.description = undefined
    }
    return message
  },

  toJSON(message: MsgUpdateValidatorDescription): unknown {
    const obj: any = {}
    message.address !== undefined && (obj.address = message.address)
    message.description !== undefined &&
      (obj.description = message.description
        ? ValidatorDescription.toJSON(message.description)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<MsgUpdateValidatorDescription>
  ): MsgUpdateValidatorDescription {
    const message = {
      ...baseMsgUpdateValidatorDescription
    } as MsgUpdateValidatorDescription
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = ValidatorDescription.fromPartial(object.description)
    } else {
      message.description = undefined
    }
    return message
  }
}

const baseMsgUpdateValidatorDescriptionResponse: object = {}

export const MsgUpdateValidatorDescriptionResponse = {
  encode(
    _: MsgUpdateValidatorDescriptionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateValidatorDescriptionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgUpdateValidatorDescriptionResponse
    } as MsgUpdateValidatorDescriptionResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateValidatorDescriptionResponse {
    const message = {
      ...baseMsgUpdateValidatorDescriptionResponse
    } as MsgUpdateValidatorDescriptionResponse
    return message
  },

  toJSON(_: MsgUpdateValidatorDescriptionResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(
    _: DeepPartial<MsgUpdateValidatorDescriptionResponse>
  ): MsgUpdateValidatorDescriptionResponse {
    const message = {
      ...baseMsgUpdateValidatorDescriptionResponse
    } as MsgUpdateValidatorDescriptionResponse
    return message
  }
}

const baseMsgAddValidatorOperatorAddress: object = {
  validatorAddress: '',
  operatorAddress: ''
}

export const MsgAddValidatorOperatorAddress = {
  encode(
    message: MsgAddValidatorOperatorAddress,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.validatorAddress !== '') {
      writer.uint32(10).string(message.validatorAddress)
    }
    if (message.operatorAddress !== '') {
      writer.uint32(18).string(message.operatorAddress)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAddValidatorOperatorAddress {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgAddValidatorOperatorAddress
    } as MsgAddValidatorOperatorAddress
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string()
          break
        case 2:
          message.operatorAddress = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgAddValidatorOperatorAddress {
    const message = {
      ...baseMsgAddValidatorOperatorAddress
    } as MsgAddValidatorOperatorAddress
    if (
      object.validatorAddress !== undefined &&
      object.validatorAddress !== null
    ) {
      message.validatorAddress = String(object.validatorAddress)
    } else {
      message.validatorAddress = ''
    }
    if (
      object.operatorAddress !== undefined &&
      object.operatorAddress !== null
    ) {
      message.operatorAddress = String(object.operatorAddress)
    } else {
      message.operatorAddress = ''
    }
    return message
  },

  toJSON(message: MsgAddValidatorOperatorAddress): unknown {
    const obj: any = {}
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress)
    message.operatorAddress !== undefined &&
      (obj.operatorAddress = message.operatorAddress)
    return obj
  },

  fromPartial(
    object: DeepPartial<MsgAddValidatorOperatorAddress>
  ): MsgAddValidatorOperatorAddress {
    const message = {
      ...baseMsgAddValidatorOperatorAddress
    } as MsgAddValidatorOperatorAddress
    if (
      object.validatorAddress !== undefined &&
      object.validatorAddress !== null
    ) {
      message.validatorAddress = object.validatorAddress
    } else {
      message.validatorAddress = ''
    }
    if (
      object.operatorAddress !== undefined &&
      object.operatorAddress !== null
    ) {
      message.operatorAddress = object.operatorAddress
    } else {
      message.operatorAddress = ''
    }
    return message
  }
}

const baseMsgAddValidatorOperatorAddressResponse: object = {}

export const MsgAddValidatorOperatorAddressResponse = {
  encode(
    _: MsgAddValidatorOperatorAddressResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAddValidatorOperatorAddressResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgAddValidatorOperatorAddressResponse
    } as MsgAddValidatorOperatorAddressResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgAddValidatorOperatorAddressResponse {
    const message = {
      ...baseMsgAddValidatorOperatorAddressResponse
    } as MsgAddValidatorOperatorAddressResponse
    return message
  },

  toJSON(_: MsgAddValidatorOperatorAddressResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(
    _: DeepPartial<MsgAddValidatorOperatorAddressResponse>
  ): MsgAddValidatorOperatorAddressResponse {
    const message = {
      ...baseMsgAddValidatorOperatorAddressResponse
    } as MsgAddValidatorOperatorAddressResponse
    return message
  }
}

const baseMsgCreateCoordinator: object = { address: '' }

export const MsgCreateCoordinator = {
  encode(
    message: MsgCreateCoordinator,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address)
    }
    if (message.description !== undefined) {
      CoordinatorDescription.encode(
        message.description,
        writer.uint32(18).fork()
      ).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCoordinator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateCoordinator } as MsgCreateCoordinator
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string()
          break
        case 2:
          message.description = CoordinatorDescription.decode(
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

  fromJSON(object: any): MsgCreateCoordinator {
    const message = { ...baseMsgCreateCoordinator } as MsgCreateCoordinator
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
    return message
  },

  toJSON(message: MsgCreateCoordinator): unknown {
    const obj: any = {}
    message.address !== undefined && (obj.address = message.address)
    message.description !== undefined &&
      (obj.description = message.description
        ? CoordinatorDescription.toJSON(message.description)
        : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateCoordinator>): MsgCreateCoordinator {
    const message = { ...baseMsgCreateCoordinator } as MsgCreateCoordinator
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
    return message
  }
}

const baseMsgCreateCoordinatorResponse: object = { coordinatorID: 0 }

export const MsgCreateCoordinatorResponse = {
  encode(
    message: MsgCreateCoordinatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.coordinatorID !== 0) {
      writer.uint32(8).uint64(message.coordinatorID)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateCoordinatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgCreateCoordinatorResponse
    } as MsgCreateCoordinatorResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.coordinatorID = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateCoordinatorResponse {
    const message = {
      ...baseMsgCreateCoordinatorResponse
    } as MsgCreateCoordinatorResponse
    if (object.coordinatorID !== undefined && object.coordinatorID !== null) {
      message.coordinatorID = Number(object.coordinatorID)
    } else {
      message.coordinatorID = 0
    }
    return message
  },

  toJSON(message: MsgCreateCoordinatorResponse): unknown {
    const obj: any = {}
    message.coordinatorID !== undefined &&
      (obj.coordinatorID = message.coordinatorID)
    return obj
  },

  fromPartial(
    object: DeepPartial<MsgCreateCoordinatorResponse>
  ): MsgCreateCoordinatorResponse {
    const message = {
      ...baseMsgCreateCoordinatorResponse
    } as MsgCreateCoordinatorResponse
    if (object.coordinatorID !== undefined && object.coordinatorID !== null) {
      message.coordinatorID = object.coordinatorID
    } else {
      message.coordinatorID = 0
    }
    return message
  }
}

const baseMsgUpdateCoordinatorDescription: object = { address: '' }

export const MsgUpdateCoordinatorDescription = {
  encode(
    message: MsgUpdateCoordinatorDescription,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address)
    }
    if (message.description !== undefined) {
      CoordinatorDescription.encode(
        message.description,
        writer.uint32(18).fork()
      ).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCoordinatorDescription {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgUpdateCoordinatorDescription
    } as MsgUpdateCoordinatorDescription
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string()
          break
        case 2:
          message.description = CoordinatorDescription.decode(
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

  fromJSON(object: any): MsgUpdateCoordinatorDescription {
    const message = {
      ...baseMsgUpdateCoordinatorDescription
    } as MsgUpdateCoordinatorDescription
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
    return message
  },

  toJSON(message: MsgUpdateCoordinatorDescription): unknown {
    const obj: any = {}
    message.address !== undefined && (obj.address = message.address)
    message.description !== undefined &&
      (obj.description = message.description
        ? CoordinatorDescription.toJSON(message.description)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<MsgUpdateCoordinatorDescription>
  ): MsgUpdateCoordinatorDescription {
    const message = {
      ...baseMsgUpdateCoordinatorDescription
    } as MsgUpdateCoordinatorDescription
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
    return message
  }
}

const baseMsgUpdateCoordinatorDescriptionResponse: object = {}

export const MsgUpdateCoordinatorDescriptionResponse = {
  encode(
    _: MsgUpdateCoordinatorDescriptionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCoordinatorDescriptionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgUpdateCoordinatorDescriptionResponse
    } as MsgUpdateCoordinatorDescriptionResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateCoordinatorDescriptionResponse {
    const message = {
      ...baseMsgUpdateCoordinatorDescriptionResponse
    } as MsgUpdateCoordinatorDescriptionResponse
    return message
  },

  toJSON(_: MsgUpdateCoordinatorDescriptionResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(
    _: DeepPartial<MsgUpdateCoordinatorDescriptionResponse>
  ): MsgUpdateCoordinatorDescriptionResponse {
    const message = {
      ...baseMsgUpdateCoordinatorDescriptionResponse
    } as MsgUpdateCoordinatorDescriptionResponse
    return message
  }
}

const baseMsgUpdateCoordinatorAddress: object = { address: '', newAddress: '' }

export const MsgUpdateCoordinatorAddress = {
  encode(
    message: MsgUpdateCoordinatorAddress,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address)
    }
    if (message.newAddress !== '') {
      writer.uint32(18).string(message.newAddress)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCoordinatorAddress {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgUpdateCoordinatorAddress
    } as MsgUpdateCoordinatorAddress
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string()
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

  fromJSON(object: any): MsgUpdateCoordinatorAddress {
    const message = {
      ...baseMsgUpdateCoordinatorAddress
    } as MsgUpdateCoordinatorAddress
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    if (object.newAddress !== undefined && object.newAddress !== null) {
      message.newAddress = String(object.newAddress)
    } else {
      message.newAddress = ''
    }
    return message
  },

  toJSON(message: MsgUpdateCoordinatorAddress): unknown {
    const obj: any = {}
    message.address !== undefined && (obj.address = message.address)
    message.newAddress !== undefined && (obj.newAddress = message.newAddress)
    return obj
  },

  fromPartial(
    object: DeepPartial<MsgUpdateCoordinatorAddress>
  ): MsgUpdateCoordinatorAddress {
    const message = {
      ...baseMsgUpdateCoordinatorAddress
    } as MsgUpdateCoordinatorAddress
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    if (object.newAddress !== undefined && object.newAddress !== null) {
      message.newAddress = object.newAddress
    } else {
      message.newAddress = ''
    }
    return message
  }
}

const baseMsgUpdateCoordinatorAddressResponse: object = {}

export const MsgUpdateCoordinatorAddressResponse = {
  encode(
    _: MsgUpdateCoordinatorAddressResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCoordinatorAddressResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgUpdateCoordinatorAddressResponse
    } as MsgUpdateCoordinatorAddressResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateCoordinatorAddressResponse {
    const message = {
      ...baseMsgUpdateCoordinatorAddressResponse
    } as MsgUpdateCoordinatorAddressResponse
    return message
  },

  toJSON(_: MsgUpdateCoordinatorAddressResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(
    _: DeepPartial<MsgUpdateCoordinatorAddressResponse>
  ): MsgUpdateCoordinatorAddressResponse {
    const message = {
      ...baseMsgUpdateCoordinatorAddressResponse
    } as MsgUpdateCoordinatorAddressResponse
    return message
  }
}

const baseMsgDisableCoordinator: object = { address: '' }

export const MsgDisableCoordinator = {
  encode(
    message: MsgDisableCoordinator,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDisableCoordinator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDisableCoordinator } as MsgDisableCoordinator
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDisableCoordinator {
    const message = { ...baseMsgDisableCoordinator } as MsgDisableCoordinator
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    return message
  },

  toJSON(message: MsgDisableCoordinator): unknown {
    const obj: any = {}
    message.address !== undefined && (obj.address = message.address)
    return obj
  },

  fromPartial(
    object: DeepPartial<MsgDisableCoordinator>
  ): MsgDisableCoordinator {
    const message = { ...baseMsgDisableCoordinator } as MsgDisableCoordinator
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    return message
  }
}

const baseMsgDisableCoordinatorResponse: object = { coordinatorID: 0 }

export const MsgDisableCoordinatorResponse = {
  encode(
    message: MsgDisableCoordinatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.coordinatorID !== 0) {
      writer.uint32(8).uint64(message.coordinatorID)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDisableCoordinatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgDisableCoordinatorResponse
    } as MsgDisableCoordinatorResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.coordinatorID = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDisableCoordinatorResponse {
    const message = {
      ...baseMsgDisableCoordinatorResponse
    } as MsgDisableCoordinatorResponse
    if (object.coordinatorID !== undefined && object.coordinatorID !== null) {
      message.coordinatorID = Number(object.coordinatorID)
    } else {
      message.coordinatorID = 0
    }
    return message
  },

  toJSON(message: MsgDisableCoordinatorResponse): unknown {
    const obj: any = {}
    message.coordinatorID !== undefined &&
      (obj.coordinatorID = message.coordinatorID)
    return obj
  },

  fromPartial(
    object: DeepPartial<MsgDisableCoordinatorResponse>
  ): MsgDisableCoordinatorResponse {
    const message = {
      ...baseMsgDisableCoordinatorResponse
    } as MsgDisableCoordinatorResponse
    if (object.coordinatorID !== undefined && object.coordinatorID !== null) {
      message.coordinatorID = object.coordinatorID
    } else {
      message.coordinatorID = 0
    }
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  UpdateValidatorDescription(
    request: MsgUpdateValidatorDescription
  ): Promise<MsgUpdateValidatorDescriptionResponse>
  AddValidatorOperatorAddress(
    request: MsgAddValidatorOperatorAddress
  ): Promise<MsgAddValidatorOperatorAddressResponse>
  CreateCoordinator(
    request: MsgCreateCoordinator
  ): Promise<MsgCreateCoordinatorResponse>
  UpdateCoordinatorDescription(
    request: MsgUpdateCoordinatorDescription
  ): Promise<MsgUpdateCoordinatorDescriptionResponse>
  UpdateCoordinatorAddress(
    request: MsgUpdateCoordinatorAddress
  ): Promise<MsgUpdateCoordinatorAddressResponse>
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DisableCoordinator(
    request: MsgDisableCoordinator
  ): Promise<MsgDisableCoordinatorResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  UpdateValidatorDescription(
    request: MsgUpdateValidatorDescription
  ): Promise<MsgUpdateValidatorDescriptionResponse> {
    const data = MsgUpdateValidatorDescription.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.spn.profile.Msg',
      'UpdateValidatorDescription',
      data
    )
    return promise.then((data) =>
      MsgUpdateValidatorDescriptionResponse.decode(new Reader(data))
    )
  }

  AddValidatorOperatorAddress(
    request: MsgAddValidatorOperatorAddress
  ): Promise<MsgAddValidatorOperatorAddressResponse> {
    const data = MsgAddValidatorOperatorAddress.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.spn.profile.Msg',
      'AddValidatorOperatorAddress',
      data
    )
    return promise.then((data) =>
      MsgAddValidatorOperatorAddressResponse.decode(new Reader(data))
    )
  }

  CreateCoordinator(
    request: MsgCreateCoordinator
  ): Promise<MsgCreateCoordinatorResponse> {
    const data = MsgCreateCoordinator.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.spn.profile.Msg',
      'CreateCoordinator',
      data
    )
    return promise.then((data) =>
      MsgCreateCoordinatorResponse.decode(new Reader(data))
    )
  }

  UpdateCoordinatorDescription(
    request: MsgUpdateCoordinatorDescription
  ): Promise<MsgUpdateCoordinatorDescriptionResponse> {
    const data = MsgUpdateCoordinatorDescription.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.spn.profile.Msg',
      'UpdateCoordinatorDescription',
      data
    )
    return promise.then((data) =>
      MsgUpdateCoordinatorDescriptionResponse.decode(new Reader(data))
    )
  }

  UpdateCoordinatorAddress(
    request: MsgUpdateCoordinatorAddress
  ): Promise<MsgUpdateCoordinatorAddressResponse> {
    const data = MsgUpdateCoordinatorAddress.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.spn.profile.Msg',
      'UpdateCoordinatorAddress',
      data
    )
    return promise.then((data) =>
      MsgUpdateCoordinatorAddressResponse.decode(new Reader(data))
    )
  }

  DisableCoordinator(
    request: MsgDisableCoordinator
  ): Promise<MsgDisableCoordinatorResponse> {
    const data = MsgDisableCoordinator.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.spn.profile.Msg',
      'DisableCoordinator',
      data
    )
    return promise.then((data) =>
      MsgDisableCoordinatorResponse.decode(new Reader(data))
    )
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>
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
