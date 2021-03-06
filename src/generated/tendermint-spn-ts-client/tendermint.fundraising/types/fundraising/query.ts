/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { Params } from '../fundraising/params'
import {
  PageRequest,
  PageResponse
} from '../cosmos/base/query/v1beta1/pagination'
import { Any } from '../google/protobuf/any'
import { AllowedBidder, Bid, VestingQueue } from '../fundraising/fundraising'

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
  auction_id: number
}

/** QueryAuctionResponse is the response type for the Query/Auction RPC method. */
export interface QueryAuctionResponse {
  auction: Any | undefined
}

/**
 * QueryAllowedBidderRequest is the request type for the Query/AllowedBidder RPC
 * method.
 */
export interface QueryAllowedBidderRequest {
  auction_id: number
  bidder: string
}

/**
 * QueryAllowedBidderResponse is the response type for the Query/AllowedBidder
 * RPC method.
 */
export interface QueryAllowedBidderResponse {
  allowed_bidder: AllowedBidder | undefined
}

/**
 * QueryAllowedBiddersRequest is the request type for the Query/AllowedBidders
 * RPC method.
 */
export interface QueryAllowedBiddersRequest {
  auction_id: number
  pagination: PageRequest | undefined
}

/**
 * QueryAllowedBiddersResponse is the response type for the Query/AllowedBidders
 * RPC method.
 */
export interface QueryAllowedBiddersResponse {
  allowed_bidders: AllowedBidder[]
  /** pagination defines the pagination in the response */
  pagination: PageResponse | undefined
}

/** QueryBidsRequest is request type for the Query/Bids RPC method. */
export interface QueryBidsRequest {
  auction_id: number
  bidder: string
  is_matched: string
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
  auction_id: number
  bid_id: number
}

/** QueryBidResponse is response type for the Query/Sequence RPC method. */
export interface QueryBidResponse {
  /** bid specifies specific bid */
  bid: Bid | undefined
}

/** QueryVestingsRequest is request type for the Query/Vestings RPC method. */
export interface QueryVestingsRequest {
  auction_id: number
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

const baseQueryAuctionRequest: object = { auction_id: 0 }

export const QueryAuctionRequest = {
  encode(
    message: QueryAuctionRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.auction_id !== 0) {
      writer.uint32(8).uint64(message.auction_id)
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
          message.auction_id = longToNumber(reader.uint64() as Long)
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
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auction_id = Number(object.auction_id)
    } else {
      message.auction_id = 0
    }
    return message
  },

  toJSON(message: QueryAuctionRequest): unknown {
    const obj: any = {}
    message.auction_id !== undefined && (obj.auction_id = message.auction_id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAuctionRequest>): QueryAuctionRequest {
    const message = { ...baseQueryAuctionRequest } as QueryAuctionRequest
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auction_id = object.auction_id
    } else {
      message.auction_id = 0
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

const baseQueryAllowedBidderRequest: object = { auction_id: 0, bidder: '' }

export const QueryAllowedBidderRequest = {
  encode(
    message: QueryAllowedBidderRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.auction_id !== 0) {
      writer.uint32(8).uint64(message.auction_id)
    }
    if (message.bidder !== '') {
      writer.uint32(18).string(message.bidder)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllowedBidderRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryAllowedBidderRequest
    } as QueryAllowedBidderRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.auction_id = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.bidder = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllowedBidderRequest {
    const message = {
      ...baseQueryAllowedBidderRequest
    } as QueryAllowedBidderRequest
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auction_id = Number(object.auction_id)
    } else {
      message.auction_id = 0
    }
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = String(object.bidder)
    } else {
      message.bidder = ''
    }
    return message
  },

  toJSON(message: QueryAllowedBidderRequest): unknown {
    const obj: any = {}
    message.auction_id !== undefined && (obj.auction_id = message.auction_id)
    message.bidder !== undefined && (obj.bidder = message.bidder)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryAllowedBidderRequest>
  ): QueryAllowedBidderRequest {
    const message = {
      ...baseQueryAllowedBidderRequest
    } as QueryAllowedBidderRequest
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auction_id = object.auction_id
    } else {
      message.auction_id = 0
    }
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = object.bidder
    } else {
      message.bidder = ''
    }
    return message
  }
}

const baseQueryAllowedBidderResponse: object = {}

export const QueryAllowedBidderResponse = {
  encode(
    message: QueryAllowedBidderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.allowed_bidder !== undefined) {
      AllowedBidder.encode(
        message.allowed_bidder,
        writer.uint32(10).fork()
      ).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllowedBidderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryAllowedBidderResponse
    } as QueryAllowedBidderResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.allowed_bidder = AllowedBidder.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllowedBidderResponse {
    const message = {
      ...baseQueryAllowedBidderResponse
    } as QueryAllowedBidderResponse
    if (object.allowed_bidder !== undefined && object.allowed_bidder !== null) {
      message.allowed_bidder = AllowedBidder.fromJSON(object.allowed_bidder)
    } else {
      message.allowed_bidder = undefined
    }
    return message
  },

  toJSON(message: QueryAllowedBidderResponse): unknown {
    const obj: any = {}
    message.allowed_bidder !== undefined &&
      (obj.allowed_bidder = message.allowed_bidder
        ? AllowedBidder.toJSON(message.allowed_bidder)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryAllowedBidderResponse>
  ): QueryAllowedBidderResponse {
    const message = {
      ...baseQueryAllowedBidderResponse
    } as QueryAllowedBidderResponse
    if (object.allowed_bidder !== undefined && object.allowed_bidder !== null) {
      message.allowed_bidder = AllowedBidder.fromPartial(object.allowed_bidder)
    } else {
      message.allowed_bidder = undefined
    }
    return message
  }
}

const baseQueryAllowedBiddersRequest: object = { auction_id: 0 }

export const QueryAllowedBiddersRequest = {
  encode(
    message: QueryAllowedBiddersRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.auction_id !== 0) {
      writer.uint32(8).uint64(message.auction_id)
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllowedBiddersRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryAllowedBiddersRequest
    } as QueryAllowedBiddersRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.auction_id = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllowedBiddersRequest {
    const message = {
      ...baseQueryAllowedBiddersRequest
    } as QueryAllowedBiddersRequest
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auction_id = Number(object.auction_id)
    } else {
      message.auction_id = 0
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllowedBiddersRequest): unknown {
    const obj: any = {}
    message.auction_id !== undefined && (obj.auction_id = message.auction_id)
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryAllowedBiddersRequest>
  ): QueryAllowedBiddersRequest {
    const message = {
      ...baseQueryAllowedBiddersRequest
    } as QueryAllowedBiddersRequest
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auction_id = object.auction_id
    } else {
      message.auction_id = 0
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllowedBiddersResponse: object = {}

export const QueryAllowedBiddersResponse = {
  encode(
    message: QueryAllowedBiddersResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.allowed_bidders) {
      AllowedBidder.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllowedBiddersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryAllowedBiddersResponse
    } as QueryAllowedBiddersResponse
    message.allowed_bidders = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.allowed_bidders.push(
            AllowedBidder.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllowedBiddersResponse {
    const message = {
      ...baseQueryAllowedBiddersResponse
    } as QueryAllowedBiddersResponse
    message.allowed_bidders = []
    if (
      object.allowed_bidders !== undefined &&
      object.allowed_bidders !== null
    ) {
      for (const e of object.allowed_bidders) {
        message.allowed_bidders.push(AllowedBidder.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllowedBiddersResponse): unknown {
    const obj: any = {}
    if (message.allowed_bidders) {
      obj.allowed_bidders = message.allowed_bidders.map((e) =>
        e ? AllowedBidder.toJSON(e) : undefined
      )
    } else {
      obj.allowed_bidders = []
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryAllowedBiddersResponse>
  ): QueryAllowedBiddersResponse {
    const message = {
      ...baseQueryAllowedBiddersResponse
    } as QueryAllowedBiddersResponse
    message.allowed_bidders = []
    if (
      object.allowed_bidders !== undefined &&
      object.allowed_bidders !== null
    ) {
      for (const e of object.allowed_bidders) {
        message.allowed_bidders.push(AllowedBidder.fromPartial(e))
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

const baseQueryBidsRequest: object = {
  auction_id: 0,
  bidder: '',
  is_matched: ''
}

export const QueryBidsRequest = {
  encode(message: QueryBidsRequest, writer: Writer = Writer.create()): Writer {
    if (message.auction_id !== 0) {
      writer.uint32(8).uint64(message.auction_id)
    }
    if (message.bidder !== '') {
      writer.uint32(18).string(message.bidder)
    }
    if (message.is_matched !== '') {
      writer.uint32(26).string(message.is_matched)
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
          message.auction_id = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.bidder = reader.string()
          break
        case 3:
          message.is_matched = reader.string()
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
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auction_id = Number(object.auction_id)
    } else {
      message.auction_id = 0
    }
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = String(object.bidder)
    } else {
      message.bidder = ''
    }
    if (object.is_matched !== undefined && object.is_matched !== null) {
      message.is_matched = String(object.is_matched)
    } else {
      message.is_matched = ''
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
    message.auction_id !== undefined && (obj.auction_id = message.auction_id)
    message.bidder !== undefined && (obj.bidder = message.bidder)
    message.is_matched !== undefined && (obj.is_matched = message.is_matched)
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryBidsRequest>): QueryBidsRequest {
    const message = { ...baseQueryBidsRequest } as QueryBidsRequest
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auction_id = object.auction_id
    } else {
      message.auction_id = 0
    }
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = object.bidder
    } else {
      message.bidder = ''
    }
    if (object.is_matched !== undefined && object.is_matched !== null) {
      message.is_matched = object.is_matched
    } else {
      message.is_matched = ''
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

const baseQueryBidRequest: object = { auction_id: 0, bid_id: 0 }

export const QueryBidRequest = {
  encode(message: QueryBidRequest, writer: Writer = Writer.create()): Writer {
    if (message.auction_id !== 0) {
      writer.uint32(8).uint64(message.auction_id)
    }
    if (message.bid_id !== 0) {
      writer.uint32(16).uint64(message.bid_id)
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
          message.auction_id = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.bid_id = longToNumber(reader.uint64() as Long)
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
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auction_id = Number(object.auction_id)
    } else {
      message.auction_id = 0
    }
    if (object.bid_id !== undefined && object.bid_id !== null) {
      message.bid_id = Number(object.bid_id)
    } else {
      message.bid_id = 0
    }
    return message
  },

  toJSON(message: QueryBidRequest): unknown {
    const obj: any = {}
    message.auction_id !== undefined && (obj.auction_id = message.auction_id)
    message.bid_id !== undefined && (obj.bid_id = message.bid_id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryBidRequest>): QueryBidRequest {
    const message = { ...baseQueryBidRequest } as QueryBidRequest
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auction_id = object.auction_id
    } else {
      message.auction_id = 0
    }
    if (object.bid_id !== undefined && object.bid_id !== null) {
      message.bid_id = object.bid_id
    } else {
      message.bid_id = 0
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

const baseQueryVestingsRequest: object = { auction_id: 0 }

export const QueryVestingsRequest = {
  encode(
    message: QueryVestingsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.auction_id !== 0) {
      writer.uint32(8).uint64(message.auction_id)
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
          message.auction_id = longToNumber(reader.uint64() as Long)
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
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auction_id = Number(object.auction_id)
    } else {
      message.auction_id = 0
    }
    return message
  },

  toJSON(message: QueryVestingsRequest): unknown {
    const obj: any = {}
    message.auction_id !== undefined && (obj.auction_id = message.auction_id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryVestingsRequest>): QueryVestingsRequest {
    const message = { ...baseQueryVestingsRequest } as QueryVestingsRequest
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auction_id = object.auction_id
    } else {
      message.auction_id = 0
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
  /** AllowedBidder returns the specific allowed bidder information. */
  AllowedBidder(
    request: QueryAllowedBidderRequest
  ): Promise<QueryAllowedBidderResponse>
  /** AllowedBidders returns all allowed bidders for the auction. */
  AllowedBidders(
    request: QueryAllowedBiddersRequest
  ): Promise<QueryAllowedBiddersResponse>
  /** Bids returns all bids. */
  Bids(request: QueryBidsRequest): Promise<QueryBidsResponse>
  /** Bid returns the specific bid from the auction id and bid id. */
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

  AllowedBidder(
    request: QueryAllowedBidderRequest
  ): Promise<QueryAllowedBidderResponse> {
    const data = QueryAllowedBidderRequest.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.fundraising.Query',
      'AllowedBidder',
      data
    )
    return promise.then((data) =>
      QueryAllowedBidderResponse.decode(new Reader(data))
    )
  }

  AllowedBidders(
    request: QueryAllowedBiddersRequest
  ): Promise<QueryAllowedBiddersResponse> {
    const data = QueryAllowedBiddersRequest.encode(request).finish()
    const promise = this.rpc.request(
      'tendermint.fundraising.Query',
      'AllowedBidders',
      data
    )
    return promise.then((data) =>
      QueryAllowedBiddersResponse.decode(new Reader(data))
    )
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
