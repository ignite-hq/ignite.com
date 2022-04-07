/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { ConsensusState, ValidatorSet } from '../types/ibc'

export const protobufPackage = 'tendermint.spn.monitoringc'

export interface MsgCreateClient {
  creator: string
  launchID: number
  consensusState: ConsensusState | undefined
  validatorSet: ValidatorSet | undefined
  unbondingPeriod: number
  revisionHeight: number
}

export interface MsgCreateClientResponse {
  clientID: string
}

const baseMsgCreateClient: object = {
  creator: '',
  launchID: 0,
  unbondingPeriod: 0,
  revisionHeight: 0
}

export const MsgCreateClient = {
  encode(message: MsgCreateClient, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.launchID !== 0) {
      writer.uint32(16).uint64(message.launchID)
    }
    if (message.consensusState !== undefined) {
      ConsensusState.encode(
        message.consensusState,
        writer.uint32(26).fork()
      ).ldelim()
    }
    if (message.validatorSet !== undefined) {
      ValidatorSet.encode(
        message.validatorSet,
        writer.uint32(34).fork()
      ).ldelim()
    }
    if (message.unbondingPeriod !== 0) {
      writer.uint32(40).int64(message.unbondingPeriod)
    }
    if (message.revisionHeight !== 0) {
      writer.uint32(48).uint64(message.revisionHeight)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateClient {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateClient } as MsgCreateClient
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.launchID = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.consensusState = ConsensusState.decode(
            reader,
            reader.uint32()
          )
          break
        case 4:
          message.validatorSet = ValidatorSet.decode(reader, reader.uint32())
          break
        case 5:
          message.unbondingPeriod = longToNumber(reader.int64() as Long)
          break
        case 6:
          message.revisionHeight = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateClient {
    const message = { ...baseMsgCreateClient } as MsgCreateClient
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID)
    } else {
      message.launchID = 0
    }
    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = ConsensusState.fromJSON(object.consensusState)
    } else {
      message.consensusState = undefined
    }
    if (object.validatorSet !== undefined && object.validatorSet !== null) {
      message.validatorSet = ValidatorSet.fromJSON(object.validatorSet)
    } else {
      message.validatorSet = undefined
    }
    if (
      object.unbondingPeriod !== undefined &&
      object.unbondingPeriod !== null
    ) {
      message.unbondingPeriod = Number(object.unbondingPeriod)
    } else {
      message.unbondingPeriod = 0
    }
    if (object.revisionHeight !== undefined && object.revisionHeight !== null) {
      message.revisionHeight = Number(object.revisionHeight)
    } else {
      message.revisionHeight = 0
    }
    return message
  },

  toJSON(message: MsgCreateClient): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.launchID !== undefined && (obj.launchID = message.launchID)
    message.consensusState !== undefined &&
      (obj.consensusState = message.consensusState
        ? ConsensusState.toJSON(message.consensusState)
        : undefined)
    message.validatorSet !== undefined &&
      (obj.validatorSet = message.validatorSet
        ? ValidatorSet.toJSON(message.validatorSet)
        : undefined)
    message.unbondingPeriod !== undefined &&
      (obj.unbondingPeriod = message.unbondingPeriod)
    message.revisionHeight !== undefined &&
      (obj.revisionHeight = message.revisionHeight)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateClient>): MsgCreateClient {
    const message = { ...baseMsgCreateClient } as MsgCreateClient
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID
    } else {
      message.launchID = 0
    }
    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = ConsensusState.fromPartial(object.consensusState)
    } else {
      message.consensusState = undefined
    }
    if (object.validatorSet !== undefined && object.validatorSet !== null) {
      message.validatorSet = ValidatorSet.fromPartial(object.validatorSet)
    } else {
      message.validatorSet = undefined
    }
    if (
      object.unbondingPeriod !== undefined &&
      object.unbondingPeriod !== null
    ) {
      message.unbondingPeriod = object.unbondingPeriod
    } else {
      message.unbondingPeriod = 0
    }
    if (object.revisionHeight !== undefined && object.revisionHeight !== null) {
      message.revisionHeight = object.revisionHeight
    } else {
      message.revisionHeight = 0
    }
    return message
  }
}

const baseMsgCreateClientResponse: object = { clientID: '' }

export const MsgCreateClientResponse = {
  encode(
    message: MsgCreateClientResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.clientID !== '') {
      writer.uint32(10).string(message.clientID)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateClientResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgCreateClientResponse
    } as MsgCreateClientResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.clientID = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateClientResponse {
    const message = {
      ...baseMsgCreateClientResponse
    } as MsgCreateClientResponse
    if (object.clientID !== undefined && object.clientID !== null) {
      message.clientID = String(object.clientID)
    } else {
      message.clientID = ''
    }
    return message
  },

  toJSON(message: MsgCreateClientResponse): unknown {
    const obj: any = {}
    message.clientID !== undefined && (obj.clientID = message.clientID)
    return obj
  },

  fromPartial(
    object: DeepPartial<MsgCreateClientResponse>
  ): MsgCreateClientResponse {
    const message = {
      ...baseMsgCreateClientResponse
    } as MsgCreateClientResponse
    if (object.clientID !== undefined && object.clientID !== null) {
      message.clientID = object.clientID
    } else {
      message.clientID = ''
    }
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateClient(request: MsgCreateClient): Promise<MsgCreateClientResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateClient(request: MsgCreateClient): Promise<MsgCreateClientResponse> {
    const data = MsgCreateClient.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.spn.monitoringc.Msg',
      'CreateClient',
      data
    )
    return promise.then((data) =>
      MsgCreateClientResponse.decode(new Reader(data))
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
