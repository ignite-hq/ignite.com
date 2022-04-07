/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { Params } from '../monitoringc/params'
import { ProviderClientID } from '../monitoringc/provider_client_id'
import {
  PageRequest,
  PageResponse
} from '../cosmos/base/query/v1beta1/pagination'
import { LaunchIDFromChannelID } from '../monitoringc/launch_id_from_channel_id'
import { MonitoringHistory } from '../monitoringc/monitoring_history'

export const protobufPackage = 'tendermint.spn.monitoringc'

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined
}

export interface QueryGetVerifiedClientIdsRequest {
  launchID: number
}

export interface QueryGetVerifiedClientIdsResponse {
  clientIds: string[]
}

export interface QueryGetProviderClientIDRequest {
  launchID: number
}

export interface QueryGetProviderClientIDResponse {
  providerClientID: ProviderClientID | undefined
}

export interface QueryAllProviderClientIDRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllProviderClientIDResponse {
  providerClientID: ProviderClientID[]
  pagination: PageResponse | undefined
}

export interface QueryGetLaunchIDFromChannelIDRequest {
  channelID: string
}

export interface QueryGetLaunchIDFromChannelIDResponse {
  launchIDFromChannelID: LaunchIDFromChannelID | undefined
}

export interface QueryAllLaunchIDFromChannelIDRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllLaunchIDFromChannelIDResponse {
  launchIDFromChannelID: LaunchIDFromChannelID[]
  pagination: PageResponse | undefined
}

export interface QueryGetMonitoringHistoryRequest {
  launchID: number
}

export interface QueryGetMonitoringHistoryResponse {
  monitoringHistory: MonitoringHistory | undefined
}

const baseQueryParamsRequest: object = {}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest
    return message
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest
    return message
  }
}

const baseQueryParamsResponse: object = {}

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params)
    } else {
      message.params = undefined
    }
    return message
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {}
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params)
    } else {
      message.params = undefined
    }
    return message
  }
}

const baseQueryGetVerifiedClientIdsRequest: object = { launchID: 0 }

export const QueryGetVerifiedClientIdsRequest = {
  encode(
    message: QueryGetVerifiedClientIdsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetVerifiedClientIdsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGetVerifiedClientIdsRequest
    } as QueryGetVerifiedClientIdsRequest
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

  fromJSON(object: any): QueryGetVerifiedClientIdsRequest {
    const message = {
      ...baseQueryGetVerifiedClientIdsRequest
    } as QueryGetVerifiedClientIdsRequest
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID)
    } else {
      message.launchID = 0
    }
    return message
  },

  toJSON(message: QueryGetVerifiedClientIdsRequest): unknown {
    const obj: any = {}
    message.launchID !== undefined && (obj.launchID = message.launchID)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryGetVerifiedClientIdsRequest>
  ): QueryGetVerifiedClientIdsRequest {
    const message = {
      ...baseQueryGetVerifiedClientIdsRequest
    } as QueryGetVerifiedClientIdsRequest
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID
    } else {
      message.launchID = 0
    }
    return message
  }
}

const baseQueryGetVerifiedClientIdsResponse: object = { clientIds: '' }

export const QueryGetVerifiedClientIdsResponse = {
  encode(
    message: QueryGetVerifiedClientIdsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.clientIds) {
      writer.uint32(10).string(v!)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetVerifiedClientIdsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGetVerifiedClientIdsResponse
    } as QueryGetVerifiedClientIdsResponse
    message.clientIds = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.clientIds.push(reader.string())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetVerifiedClientIdsResponse {
    const message = {
      ...baseQueryGetVerifiedClientIdsResponse
    } as QueryGetVerifiedClientIdsResponse
    message.clientIds = []
    if (object.clientIds !== undefined && object.clientIds !== null) {
      for (const e of object.clientIds) {
        message.clientIds.push(String(e))
      }
    }
    return message
  },

  toJSON(message: QueryGetVerifiedClientIdsResponse): unknown {
    const obj: any = {}
    if (message.clientIds) {
      obj.clientIds = message.clientIds.map((e) => e)
    } else {
      obj.clientIds = []
    }
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryGetVerifiedClientIdsResponse>
  ): QueryGetVerifiedClientIdsResponse {
    const message = {
      ...baseQueryGetVerifiedClientIdsResponse
    } as QueryGetVerifiedClientIdsResponse
    message.clientIds = []
    if (object.clientIds !== undefined && object.clientIds !== null) {
      for (const e of object.clientIds) {
        message.clientIds.push(e)
      }
    }
    return message
  }
}

const baseQueryGetProviderClientIDRequest: object = { launchID: 0 }

export const QueryGetProviderClientIDRequest = {
  encode(
    message: QueryGetProviderClientIDRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetProviderClientIDRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGetProviderClientIDRequest
    } as QueryGetProviderClientIDRequest
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

  fromJSON(object: any): QueryGetProviderClientIDRequest {
    const message = {
      ...baseQueryGetProviderClientIDRequest
    } as QueryGetProviderClientIDRequest
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID)
    } else {
      message.launchID = 0
    }
    return message
  },

  toJSON(message: QueryGetProviderClientIDRequest): unknown {
    const obj: any = {}
    message.launchID !== undefined && (obj.launchID = message.launchID)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryGetProviderClientIDRequest>
  ): QueryGetProviderClientIDRequest {
    const message = {
      ...baseQueryGetProviderClientIDRequest
    } as QueryGetProviderClientIDRequest
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID
    } else {
      message.launchID = 0
    }
    return message
  }
}

const baseQueryGetProviderClientIDResponse: object = {}

export const QueryGetProviderClientIDResponse = {
  encode(
    message: QueryGetProviderClientIDResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.providerClientID !== undefined) {
      ProviderClientID.encode(
        message.providerClientID,
        writer.uint32(10).fork()
      ).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetProviderClientIDResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGetProviderClientIDResponse
    } as QueryGetProviderClientIDResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.providerClientID = ProviderClientID.decode(
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

  fromJSON(object: any): QueryGetProviderClientIDResponse {
    const message = {
      ...baseQueryGetProviderClientIDResponse
    } as QueryGetProviderClientIDResponse
    if (
      object.providerClientID !== undefined &&
      object.providerClientID !== null
    ) {
      message.providerClientID = ProviderClientID.fromJSON(
        object.providerClientID
      )
    } else {
      message.providerClientID = undefined
    }
    return message
  },

  toJSON(message: QueryGetProviderClientIDResponse): unknown {
    const obj: any = {}
    message.providerClientID !== undefined &&
      (obj.providerClientID = message.providerClientID
        ? ProviderClientID.toJSON(message.providerClientID)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryGetProviderClientIDResponse>
  ): QueryGetProviderClientIDResponse {
    const message = {
      ...baseQueryGetProviderClientIDResponse
    } as QueryGetProviderClientIDResponse
    if (
      object.providerClientID !== undefined &&
      object.providerClientID !== null
    ) {
      message.providerClientID = ProviderClientID.fromPartial(
        object.providerClientID
      )
    } else {
      message.providerClientID = undefined
    }
    return message
  }
}

const baseQueryAllProviderClientIDRequest: object = {}

export const QueryAllProviderClientIDRequest = {
  encode(
    message: QueryAllProviderClientIDRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllProviderClientIDRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryAllProviderClientIDRequest
    } as QueryAllProviderClientIDRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllProviderClientIDRequest {
    const message = {
      ...baseQueryAllProviderClientIDRequest
    } as QueryAllProviderClientIDRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllProviderClientIDRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryAllProviderClientIDRequest>
  ): QueryAllProviderClientIDRequest {
    const message = {
      ...baseQueryAllProviderClientIDRequest
    } as QueryAllProviderClientIDRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllProviderClientIDResponse: object = {}

export const QueryAllProviderClientIDResponse = {
  encode(
    message: QueryAllProviderClientIDResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.providerClientID) {
      ProviderClientID.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllProviderClientIDResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryAllProviderClientIDResponse
    } as QueryAllProviderClientIDResponse
    message.providerClientID = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.providerClientID.push(
            ProviderClientID.decode(reader, reader.uint32())
          )
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllProviderClientIDResponse {
    const message = {
      ...baseQueryAllProviderClientIDResponse
    } as QueryAllProviderClientIDResponse
    message.providerClientID = []
    if (
      object.providerClientID !== undefined &&
      object.providerClientID !== null
    ) {
      for (const e of object.providerClientID) {
        message.providerClientID.push(ProviderClientID.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllProviderClientIDResponse): unknown {
    const obj: any = {}
    if (message.providerClientID) {
      obj.providerClientID = message.providerClientID.map((e) =>
        e ? ProviderClientID.toJSON(e) : undefined
      )
    } else {
      obj.providerClientID = []
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryAllProviderClientIDResponse>
  ): QueryAllProviderClientIDResponse {
    const message = {
      ...baseQueryAllProviderClientIDResponse
    } as QueryAllProviderClientIDResponse
    message.providerClientID = []
    if (
      object.providerClientID !== undefined &&
      object.providerClientID !== null
    ) {
      for (const e of object.providerClientID) {
        message.providerClientID.push(ProviderClientID.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetLaunchIDFromChannelIDRequest: object = { channelID: '' }

export const QueryGetLaunchIDFromChannelIDRequest = {
  encode(
    message: QueryGetLaunchIDFromChannelIDRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.channelID !== '') {
      writer.uint32(10).string(message.channelID)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetLaunchIDFromChannelIDRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGetLaunchIDFromChannelIDRequest
    } as QueryGetLaunchIDFromChannelIDRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.channelID = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetLaunchIDFromChannelIDRequest {
    const message = {
      ...baseQueryGetLaunchIDFromChannelIDRequest
    } as QueryGetLaunchIDFromChannelIDRequest
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID)
    } else {
      message.channelID = ''
    }
    return message
  },

  toJSON(message: QueryGetLaunchIDFromChannelIDRequest): unknown {
    const obj: any = {}
    message.channelID !== undefined && (obj.channelID = message.channelID)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryGetLaunchIDFromChannelIDRequest>
  ): QueryGetLaunchIDFromChannelIDRequest {
    const message = {
      ...baseQueryGetLaunchIDFromChannelIDRequest
    } as QueryGetLaunchIDFromChannelIDRequest
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID
    } else {
      message.channelID = ''
    }
    return message
  }
}

const baseQueryGetLaunchIDFromChannelIDResponse: object = {}

export const QueryGetLaunchIDFromChannelIDResponse = {
  encode(
    message: QueryGetLaunchIDFromChannelIDResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.launchIDFromChannelID !== undefined) {
      LaunchIDFromChannelID.encode(
        message.launchIDFromChannelID,
        writer.uint32(10).fork()
      ).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetLaunchIDFromChannelIDResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGetLaunchIDFromChannelIDResponse
    } as QueryGetLaunchIDFromChannelIDResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.launchIDFromChannelID = LaunchIDFromChannelID.decode(
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

  fromJSON(object: any): QueryGetLaunchIDFromChannelIDResponse {
    const message = {
      ...baseQueryGetLaunchIDFromChannelIDResponse
    } as QueryGetLaunchIDFromChannelIDResponse
    if (
      object.launchIDFromChannelID !== undefined &&
      object.launchIDFromChannelID !== null
    ) {
      message.launchIDFromChannelID = LaunchIDFromChannelID.fromJSON(
        object.launchIDFromChannelID
      )
    } else {
      message.launchIDFromChannelID = undefined
    }
    return message
  },

  toJSON(message: QueryGetLaunchIDFromChannelIDResponse): unknown {
    const obj: any = {}
    message.launchIDFromChannelID !== undefined &&
      (obj.launchIDFromChannelID = message.launchIDFromChannelID
        ? LaunchIDFromChannelID.toJSON(message.launchIDFromChannelID)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryGetLaunchIDFromChannelIDResponse>
  ): QueryGetLaunchIDFromChannelIDResponse {
    const message = {
      ...baseQueryGetLaunchIDFromChannelIDResponse
    } as QueryGetLaunchIDFromChannelIDResponse
    if (
      object.launchIDFromChannelID !== undefined &&
      object.launchIDFromChannelID !== null
    ) {
      message.launchIDFromChannelID = LaunchIDFromChannelID.fromPartial(
        object.launchIDFromChannelID
      )
    } else {
      message.launchIDFromChannelID = undefined
    }
    return message
  }
}

const baseQueryAllLaunchIDFromChannelIDRequest: object = {}

export const QueryAllLaunchIDFromChannelIDRequest = {
  encode(
    message: QueryAllLaunchIDFromChannelIDRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllLaunchIDFromChannelIDRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryAllLaunchIDFromChannelIDRequest
    } as QueryAllLaunchIDFromChannelIDRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllLaunchIDFromChannelIDRequest {
    const message = {
      ...baseQueryAllLaunchIDFromChannelIDRequest
    } as QueryAllLaunchIDFromChannelIDRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllLaunchIDFromChannelIDRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryAllLaunchIDFromChannelIDRequest>
  ): QueryAllLaunchIDFromChannelIDRequest {
    const message = {
      ...baseQueryAllLaunchIDFromChannelIDRequest
    } as QueryAllLaunchIDFromChannelIDRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllLaunchIDFromChannelIDResponse: object = {}

export const QueryAllLaunchIDFromChannelIDResponse = {
  encode(
    message: QueryAllLaunchIDFromChannelIDResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.launchIDFromChannelID) {
      LaunchIDFromChannelID.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllLaunchIDFromChannelIDResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryAllLaunchIDFromChannelIDResponse
    } as QueryAllLaunchIDFromChannelIDResponse
    message.launchIDFromChannelID = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.launchIDFromChannelID.push(
            LaunchIDFromChannelID.decode(reader, reader.uint32())
          )
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllLaunchIDFromChannelIDResponse {
    const message = {
      ...baseQueryAllLaunchIDFromChannelIDResponse
    } as QueryAllLaunchIDFromChannelIDResponse
    message.launchIDFromChannelID = []
    if (
      object.launchIDFromChannelID !== undefined &&
      object.launchIDFromChannelID !== null
    ) {
      for (const e of object.launchIDFromChannelID) {
        message.launchIDFromChannelID.push(LaunchIDFromChannelID.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllLaunchIDFromChannelIDResponse): unknown {
    const obj: any = {}
    if (message.launchIDFromChannelID) {
      obj.launchIDFromChannelID = message.launchIDFromChannelID.map((e) =>
        e ? LaunchIDFromChannelID.toJSON(e) : undefined
      )
    } else {
      obj.launchIDFromChannelID = []
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryAllLaunchIDFromChannelIDResponse>
  ): QueryAllLaunchIDFromChannelIDResponse {
    const message = {
      ...baseQueryAllLaunchIDFromChannelIDResponse
    } as QueryAllLaunchIDFromChannelIDResponse
    message.launchIDFromChannelID = []
    if (
      object.launchIDFromChannelID !== undefined &&
      object.launchIDFromChannelID !== null
    ) {
      for (const e of object.launchIDFromChannelID) {
        message.launchIDFromChannelID.push(LaunchIDFromChannelID.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetMonitoringHistoryRequest: object = { launchID: 0 }

export const QueryGetMonitoringHistoryRequest = {
  encode(
    message: QueryGetMonitoringHistoryRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMonitoringHistoryRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGetMonitoringHistoryRequest
    } as QueryGetMonitoringHistoryRequest
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

  fromJSON(object: any): QueryGetMonitoringHistoryRequest {
    const message = {
      ...baseQueryGetMonitoringHistoryRequest
    } as QueryGetMonitoringHistoryRequest
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID)
    } else {
      message.launchID = 0
    }
    return message
  },

  toJSON(message: QueryGetMonitoringHistoryRequest): unknown {
    const obj: any = {}
    message.launchID !== undefined && (obj.launchID = message.launchID)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryGetMonitoringHistoryRequest>
  ): QueryGetMonitoringHistoryRequest {
    const message = {
      ...baseQueryGetMonitoringHistoryRequest
    } as QueryGetMonitoringHistoryRequest
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID
    } else {
      message.launchID = 0
    }
    return message
  }
}

const baseQueryGetMonitoringHistoryResponse: object = {}

export const QueryGetMonitoringHistoryResponse = {
  encode(
    message: QueryGetMonitoringHistoryResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.monitoringHistory !== undefined) {
      MonitoringHistory.encode(
        message.monitoringHistory,
        writer.uint32(10).fork()
      ).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMonitoringHistoryResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGetMonitoringHistoryResponse
    } as QueryGetMonitoringHistoryResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.monitoringHistory = MonitoringHistory.decode(
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

  fromJSON(object: any): QueryGetMonitoringHistoryResponse {
    const message = {
      ...baseQueryGetMonitoringHistoryResponse
    } as QueryGetMonitoringHistoryResponse
    if (
      object.monitoringHistory !== undefined &&
      object.monitoringHistory !== null
    ) {
      message.monitoringHistory = MonitoringHistory.fromJSON(
        object.monitoringHistory
      )
    } else {
      message.monitoringHistory = undefined
    }
    return message
  },

  toJSON(message: QueryGetMonitoringHistoryResponse): unknown {
    const obj: any = {}
    message.monitoringHistory !== undefined &&
      (obj.monitoringHistory = message.monitoringHistory
        ? MonitoringHistory.toJSON(message.monitoringHistory)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryGetMonitoringHistoryResponse>
  ): QueryGetMonitoringHistoryResponse {
    const message = {
      ...baseQueryGetMonitoringHistoryResponse
    } as QueryGetMonitoringHistoryResponse
    if (
      object.monitoringHistory !== undefined &&
      object.monitoringHistory !== null
    ) {
      message.monitoringHistory = MonitoringHistory.fromPartial(
        object.monitoringHistory
      )
    } else {
      message.monitoringHistory = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>
  /** Queries a list of VerifiedClientIds items. */
  VerifiedClientIds(
    request: QueryGetVerifiedClientIdsRequest
  ): Promise<QueryGetVerifiedClientIdsResponse>
  /** Queries a ProviderClientID by index. */
  ProviderClientID(
    request: QueryGetProviderClientIDRequest
  ): Promise<QueryGetProviderClientIDResponse>
  /** Queries a list of ProviderClientID items. */
  ProviderClientIDAll(
    request: QueryAllProviderClientIDRequest
  ): Promise<QueryAllProviderClientIDResponse>
  /** Queries a LaunchIDFromChannelID by index. */
  LaunchIDFromChannelID(
    request: QueryGetLaunchIDFromChannelIDRequest
  ): Promise<QueryGetLaunchIDFromChannelIDResponse>
  /** Queries a list of LaunchIDFromChannelID items. */
  LaunchIDFromChannelIDAll(
    request: QueryAllLaunchIDFromChannelIDRequest
  ): Promise<QueryAllLaunchIDFromChannelIDResponse>
  /** Queries a MonitoringHistory by launch id. */
  MonitoringHistory(
    request: QueryGetMonitoringHistoryRequest
  ): Promise<QueryGetMonitoringHistoryResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.spn.monitoringc.Query',
      'Params',
      data
    )
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)))
  }

  VerifiedClientIds(
    request: QueryGetVerifiedClientIdsRequest
  ): Promise<QueryGetVerifiedClientIdsResponse> {
    const data = QueryGetVerifiedClientIdsRequest.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.spn.monitoringc.Query',
      'VerifiedClientIds',
      data
    )
    return promise.then((data) =>
      QueryGetVerifiedClientIdsResponse.decode(new Reader(data))
    )
  }

  ProviderClientID(
    request: QueryGetProviderClientIDRequest
  ): Promise<QueryGetProviderClientIDResponse> {
    const data = QueryGetProviderClientIDRequest.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.spn.monitoringc.Query',
      'ProviderClientID',
      data
    )
    return promise.then((data) =>
      QueryGetProviderClientIDResponse.decode(new Reader(data))
    )
  }

  ProviderClientIDAll(
    request: QueryAllProviderClientIDRequest
  ): Promise<QueryAllProviderClientIDResponse> {
    const data = QueryAllProviderClientIDRequest.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.spn.monitoringc.Query',
      'ProviderClientIDAll',
      data
    )
    return promise.then((data) =>
      QueryAllProviderClientIDResponse.decode(new Reader(data))
    )
  }

  LaunchIDFromChannelID(
    request: QueryGetLaunchIDFromChannelIDRequest
  ): Promise<QueryGetLaunchIDFromChannelIDResponse> {
    const data = QueryGetLaunchIDFromChannelIDRequest.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.spn.monitoringc.Query',
      'LaunchIDFromChannelID',
      data
    )
    return promise.then((data) =>
      QueryGetLaunchIDFromChannelIDResponse.decode(new Reader(data))
    )
  }

  LaunchIDFromChannelIDAll(
    request: QueryAllLaunchIDFromChannelIDRequest
  ): Promise<QueryAllLaunchIDFromChannelIDResponse> {
    const data = QueryAllLaunchIDFromChannelIDRequest.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.spn.monitoringc.Query',
      'LaunchIDFromChannelIDAll',
      data
    )
    return promise.then((data) =>
      QueryAllLaunchIDFromChannelIDResponse.decode(new Reader(data))
    )
  }

  MonitoringHistory(
    request: QueryGetMonitoringHistoryRequest
  ): Promise<QueryGetMonitoringHistoryResponse> {
    const data = QueryGetMonitoringHistoryRequest.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.spn.monitoringc.Query',
      'MonitoringHistory',
      data
    )
    return promise.then((data) =>
      QueryGetMonitoringHistoryResponse.decode(new Reader(data))
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
