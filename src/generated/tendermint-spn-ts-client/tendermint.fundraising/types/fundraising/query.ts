/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { Params, Bid, VestingQueue } from '../fundraising/fundraising'
import {
  PageRequest,
  PageResponse
} from '../cosmos/base/query/v1beta1/pagination'
import { Any } from '../google/protobuf/any'

export const protobufPackage = 'tendermint.fundraising'

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined
}

/** QueryAuctionsRequest is request type for the Query/Auctions RPC method. */
export interface QueryAuctionsRequest {
  status: string
  type: string
  pagination: PageRequest | undefined
}

/** QueryAuctionsResponse is response type for the Query/Auctions RPC method. */
export interface QueryAuctionsResponse {
  /** auctions specifies the existing auctions */
  auctions: Any[]
  /** pagination defines the pagination in the response */
  pagination: PageResponse | undefined
}

/** QueryAuctionRequest is the request type for the Query/Auction RPC method. */
export interface QueryAuctionRequest {
  auctionId: number
}

/** QueryAuctionResponse is the response type for the Query/Auction RPC method. */
export interface QueryAuctionResponse {
  auction: Any | undefined
}

/** QueryBidsRequest is request type for the Query/Bids RPC method. */
export interface QueryBidsRequest {
  auctionId: number
  bidder: string
  eligible: string
  pagination: PageRequest | undefined
}

/** QueryBidsResponse is response type for the Query/Bids RPC method. */
export interface QueryBidsResponse {
  /** bids specifies the existing bids */
  bids: Bid[]
  /** pagination defines the pagination in the response */
  pagination: PageResponse | undefined
}

/** QueryBidRequest is the request type for the Query/Sequence RPC method. */
export interface QueryBidRequest {
  auctionId: number
  sequence: number
}

/** QueryBidResponse is response type for the Query/Sequence RPC method. */
export interface QueryBidResponse {
  /** bid specifies specific bid */
  bid: Bid | undefined
}

/** QueryVestingsRequest is request type for the Query/Vestings RPC method. */
export interface QueryVestingsRequest {
  auctionId: number
}

/** QueryVestingsResponse is response type for the Query/Vestings RPC method. */
export interface QueryVestingsResponse {
  /** vestings specifies the existing vestings */
  vestings: VestingQueue[]
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

const baseQueryAuctionsRequest: object = { status: '', type: '' }

export const QueryAuctionsRequest = {
  encode(
    message: QueryAuctionsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.status !== '') {
      writer.uint32(10).string(message.status)
    }
    if (message.type !== '') {
      writer.uint32(18).string(message.type)
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAuctionsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAuctionsRequest } as QueryAuctionsRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string()
          break
        case 2:
          message.type = reader.string()
          break
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAuctionsRequest {
    const message = { ...baseQueryAuctionsRequest } as QueryAuctionsRequest
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status)
    } else {
      message.status = ''
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type)
    } else {
      message.type = ''
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAuctionsRequest): unknown {
    const obj: any = {}
    message.status !== undefined && (obj.status = message.status)
    message.type !== undefined && (obj.type = message.type)
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAuctionsRequest>): QueryAuctionsRequest {
    const message = { ...baseQueryAuctionsRequest } as QueryAuctionsRequest
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status
    } else {
      message.status = ''
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type
    } else {
      message.type = ''
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAuctionsResponse: object = {}

export const QueryAuctionsResponse = {
  encode(
    message: QueryAuctionsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.auctions) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAuctionsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAuctionsResponse } as QueryAuctionsResponse
    message.auctions = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.auctions.push(Any.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryAuctionsResponse {
    const message = { ...baseQueryAuctionsResponse } as QueryAuctionsResponse
    message.auctions = []
    if (object.auctions !== undefined && object.auctions !== null) {
      for (const e of object.auctions) {
        message.auctions.push(Any.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAuctionsResponse): unknown {
    const obj: any = {}
    if (message.auctions) {
      obj.auctions = message.auctions.map((e) =>
        e ? Any.toJSON(e) : undefined
      )
    } else {
      obj.auctions = []
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryAuctionsResponse>
  ): QueryAuctionsResponse {
    const message = { ...baseQueryAuctionsResponse } as QueryAuctionsResponse
    message.auctions = []
    if (object.auctions !== undefined && object.auctions !== null) {
      for (const e of object.auctions) {
        message.auctions.push(Any.fromPartial(e))
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

const baseQueryAuctionRequest: object = { auctionId: 0 }

export const QueryAuctionRequest = {
  encode(
    message: QueryAuctionRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.auctionId !== 0) {
      writer.uint32(8).uint64(message.auctionId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAuctionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAuctionRequest } as QueryAuctionRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.auctionId = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAuctionRequest {
    const message = { ...baseQueryAuctionRequest } as QueryAuctionRequest
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = Number(object.auctionId)
    } else {
      message.auctionId = 0
    }
    return message
  },

  toJSON(message: QueryAuctionRequest): unknown {
    const obj: any = {}
    message.auctionId !== undefined && (obj.auctionId = message.auctionId)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAuctionRequest>): QueryAuctionRequest {
    const message = { ...baseQueryAuctionRequest } as QueryAuctionRequest
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = object.auctionId
    } else {
      message.auctionId = 0
    }
    return message
  }
}

const baseQueryAuctionResponse: object = {}

export const QueryAuctionResponse = {
  encode(
    message: QueryAuctionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.auction !== undefined) {
      Any.encode(message.auction, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAuctionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAuctionResponse } as QueryAuctionResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.auction = Any.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAuctionResponse {
    const message = { ...baseQueryAuctionResponse } as QueryAuctionResponse
    if (object.auction !== undefined && object.auction !== null) {
      message.auction = Any.fromJSON(object.auction)
    } else {
      message.auction = undefined
    }
    return message
  },

  toJSON(message: QueryAuctionResponse): unknown {
    const obj: any = {}
    message.auction !== undefined &&
      (obj.auction = message.auction ? Any.toJSON(message.auction) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAuctionResponse>): QueryAuctionResponse {
    const message = { ...baseQueryAuctionResponse } as QueryAuctionResponse
    if (object.auction !== undefined && object.auction !== null) {
      message.auction = Any.fromPartial(object.auction)
    } else {
      message.auction = undefined
    }
    return message
  }
}

const baseQueryBidsRequest: object = { auctionId: 0, bidder: '', eligible: '' }

export const QueryBidsRequest = {
  encode(message: QueryBidsRequest, writer: Writer = Writer.create()): Writer {
    if (message.auctionId !== 0) {
      writer.uint32(8).uint64(message.auctionId)
    }
    if (message.bidder !== '') {
      writer.uint32(18).string(message.bidder)
    }
    if (message.eligible !== '') {
      writer.uint32(26).string(message.eligible)
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryBidsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryBidsRequest } as QueryBidsRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.auctionId = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.bidder = reader.string()
          break
        case 3:
          message.eligible = reader.string()
          break
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryBidsRequest {
    const message = { ...baseQueryBidsRequest } as QueryBidsRequest
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = Number(object.auctionId)
    } else {
      message.auctionId = 0
    }
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = String(object.bidder)
    } else {
      message.bidder = ''
    }
    if (object.eligible !== undefined && object.eligible !== null) {
      message.eligible = String(object.eligible)
    } else {
      message.eligible = ''
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryBidsRequest): unknown {
    const obj: any = {}
    message.auctionId !== undefined && (obj.auctionId = message.auctionId)
    message.bidder !== undefined && (obj.bidder = message.bidder)
    message.eligible !== undefined && (obj.eligible = message.eligible)
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryBidsRequest>): QueryBidsRequest {
    const message = { ...baseQueryBidsRequest } as QueryBidsRequest
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = object.auctionId
    } else {
      message.auctionId = 0
    }
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = object.bidder
    } else {
      message.bidder = ''
    }
    if (object.eligible !== undefined && object.eligible !== null) {
      message.eligible = object.eligible
    } else {
      message.eligible = ''
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryBidsResponse: object = {}

export const QueryBidsResponse = {
  encode(message: QueryBidsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.bids) {
      Bid.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryBidsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryBidsResponse } as QueryBidsResponse
    message.bids = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.bids.push(Bid.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryBidsResponse {
    const message = { ...baseQueryBidsResponse } as QueryBidsResponse
    message.bids = []
    if (object.bids !== undefined && object.bids !== null) {
      for (const e of object.bids) {
        message.bids.push(Bid.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryBidsResponse): unknown {
    const obj: any = {}
    if (message.bids) {
      obj.bids = message.bids.map((e) => (e ? Bid.toJSON(e) : undefined))
    } else {
      obj.bids = []
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryBidsResponse>): QueryBidsResponse {
    const message = { ...baseQueryBidsResponse } as QueryBidsResponse
    message.bids = []
    if (object.bids !== undefined && object.bids !== null) {
      for (const e of object.bids) {
        message.bids.push(Bid.fromPartial(e))
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

const baseQueryBidRequest: object = { auctionId: 0, sequence: 0 }

export const QueryBidRequest = {
  encode(message: QueryBidRequest, writer: Writer = Writer.create()): Writer {
    if (message.auctionId !== 0) {
      writer.uint32(8).uint64(message.auctionId)
    }
    if (message.sequence !== 0) {
      writer.uint32(16).uint64(message.sequence)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryBidRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryBidRequest } as QueryBidRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.auctionId = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.sequence = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryBidRequest {
    const message = { ...baseQueryBidRequest } as QueryBidRequest
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = Number(object.auctionId)
    } else {
      message.auctionId = 0
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = Number(object.sequence)
    } else {
      message.sequence = 0
    }
    return message
  },

  toJSON(message: QueryBidRequest): unknown {
    const obj: any = {}
    message.auctionId !== undefined && (obj.auctionId = message.auctionId)
    message.sequence !== undefined && (obj.sequence = message.sequence)
    return obj
  },

  fromPartial(object: DeepPartial<QueryBidRequest>): QueryBidRequest {
    const message = { ...baseQueryBidRequest } as QueryBidRequest
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = object.auctionId
    } else {
      message.auctionId = 0
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = object.sequence
    } else {
      message.sequence = 0
    }
    return message
  }
}

const baseQueryBidResponse: object = {}

export const QueryBidResponse = {
  encode(message: QueryBidResponse, writer: Writer = Writer.create()): Writer {
    if (message.bid !== undefined) {
      Bid.encode(message.bid, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryBidResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryBidResponse } as QueryBidResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.bid = Bid.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryBidResponse {
    const message = { ...baseQueryBidResponse } as QueryBidResponse
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = Bid.fromJSON(object.bid)
    } else {
      message.bid = undefined
    }
    return message
  },

  toJSON(message: QueryBidResponse): unknown {
    const obj: any = {}
    message.bid !== undefined &&
      (obj.bid = message.bid ? Bid.toJSON(message.bid) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryBidResponse>): QueryBidResponse {
    const message = { ...baseQueryBidResponse } as QueryBidResponse
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = Bid.fromPartial(object.bid)
    } else {
      message.bid = undefined
    }
    return message
  }
}

const baseQueryVestingsRequest: object = { auctionId: 0 }

export const QueryVestingsRequest = {
  encode(
    message: QueryVestingsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.auctionId !== 0) {
      writer.uint32(8).uint64(message.auctionId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryVestingsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryVestingsRequest } as QueryVestingsRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.auctionId = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryVestingsRequest {
    const message = { ...baseQueryVestingsRequest } as QueryVestingsRequest
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = Number(object.auctionId)
    } else {
      message.auctionId = 0
    }
    return message
  },

  toJSON(message: QueryVestingsRequest): unknown {
    const obj: any = {}
    message.auctionId !== undefined && (obj.auctionId = message.auctionId)
    return obj
  },

  fromPartial(object: DeepPartial<QueryVestingsRequest>): QueryVestingsRequest {
    const message = { ...baseQueryVestingsRequest } as QueryVestingsRequest
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = object.auctionId
    } else {
      message.auctionId = 0
    }
    return message
  }
}

const baseQueryVestingsResponse: object = {}

export const QueryVestingsResponse = {
  encode(
    message: QueryVestingsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.vestings) {
      VestingQueue.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryVestingsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryVestingsResponse } as QueryVestingsResponse
    message.vestings = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.vestings.push(VestingQueue.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryVestingsResponse {
    const message = { ...baseQueryVestingsResponse } as QueryVestingsResponse
    message.vestings = []
    if (object.vestings !== undefined && object.vestings !== null) {
      for (const e of object.vestings) {
        message.vestings.push(VestingQueue.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: QueryVestingsResponse): unknown {
    const obj: any = {}
    if (message.vestings) {
      obj.vestings = message.vestings.map((e) =>
        e ? VestingQueue.toJSON(e) : undefined
      )
    } else {
      obj.vestings = []
    }
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryVestingsResponse>
  ): QueryVestingsResponse {
    const message = { ...baseQueryVestingsResponse } as QueryVestingsResponse
    message.vestings = []
    if (object.vestings !== undefined && object.vestings !== null) {
      for (const e of object.vestings) {
        message.vestings.push(VestingQueue.fromPartial(e))
      }
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Params returns parameters of the fundraising module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>
  /** Auctions returns all auctions. */
  Auctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse>
  /** Auction returns the specific auction. */
  Auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse>
  /** Bids returns all bids. */
  Bids(request: QueryBidsRequest): Promise<QueryBidsResponse>
  /** Bid returns the specific bid from the auction id and sequence. */
  Bid(request: QueryBidRequest): Promise<QueryBidResponse>
  /** Vestings returns all vestings for the auction. */
  Vestings(request: QueryVestingsRequest): Promise<QueryVestingsResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.fundraising.Query',
      'Params',
      data
    )
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)))
  }

  Auctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse> {
    const data = QueryAuctionsRequest.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.fundraising.Query',
      'Auctions',
      data
    )
    return promise.then((data) =>
      QueryAuctionsResponse.decode(new Reader(data))
    )
  }

  Auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse> {
    const data = QueryAuctionRequest.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.fundraising.Query',
      'Auction',
      data
    )
    return promise.then((data) => QueryAuctionResponse.decode(new Reader(data)))
  }

  Bids(request: QueryBidsRequest): Promise<QueryBidsResponse> {
    const data = QueryBidsRequest.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.fundraising.Query',
      'Bids',
      data
    )
    return promise.then((data) => QueryBidsResponse.decode(new Reader(data)))
  }

  Bid(request: QueryBidRequest): Promise<QueryBidResponse> {
    const data = QueryBidRequest.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.fundraising.Query',
      'Bid',
      data
    )
    return promise.then((data) => QueryBidResponse.decode(new Reader(data)))
  }

  Vestings(request: QueryVestingsRequest): Promise<QueryVestingsResponse> {
    const data = QueryVestingsRequest.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.fundraising.Query',
      'Vestings',
      data
    )
    return promise.then((data) =>
      QueryVestingsResponse.decode(new Reader(data))
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
