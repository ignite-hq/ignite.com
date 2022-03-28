/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../participation/params";
import { UsedAllocations } from "../participation/used_allocations";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { AuctionUsedAllocations } from "../participation/auction_used_allocations";

export const protobufPackage = "tendermint.spn.participation";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetUsedAllocationsRequest {
  address: string;
}

export interface QueryGetUsedAllocationsResponse {
  usedAllocations: UsedAllocations | undefined;
}

export interface QueryAllUsedAllocationsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllUsedAllocationsResponse {
  usedAllocations: UsedAllocations[];
  pagination: PageResponse | undefined;
}

export interface QueryGetAuctionUsedAllocationsRequest {
  address: string;
  auctionID: number;
}

export interface QueryGetAuctionUsedAllocationsResponse {
  auctionUsedAllocations: AuctionUsedAllocations | undefined;
}

export interface QueryAllAuctionUsedAllocationsRequest {
  address: string;
  pagination: PageRequest | undefined;
}

export interface QueryAllAuctionUsedAllocationsResponse {
  auctionUsedAllocations: AuctionUsedAllocations[];
  pagination: PageResponse | undefined;
}

export interface QueryGetTotalAllocationsRequest {
  address: string;
}

export interface QueryGetTotalAllocationsResponse {
  totalAllocations: number;
}

export interface QueryGetAvailableAllocationsRequest {
  address: string;
}

export interface QueryGetAvailableAllocationsResponse {
  availableAllocations: number;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetUsedAllocationsRequest: object = { address: "" };

export const QueryGetUsedAllocationsRequest = {
  encode(
    message: QueryGetUsedAllocationsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetUsedAllocationsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetUsedAllocationsRequest,
    } as QueryGetUsedAllocationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetUsedAllocationsRequest {
    const message = {
      ...baseQueryGetUsedAllocationsRequest,
    } as QueryGetUsedAllocationsRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryGetUsedAllocationsRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetUsedAllocationsRequest>
  ): QueryGetUsedAllocationsRequest {
    const message = {
      ...baseQueryGetUsedAllocationsRequest,
    } as QueryGetUsedAllocationsRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryGetUsedAllocationsResponse: object = {};

export const QueryGetUsedAllocationsResponse = {
  encode(
    message: QueryGetUsedAllocationsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.usedAllocations !== undefined) {
      UsedAllocations.encode(
        message.usedAllocations,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetUsedAllocationsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetUsedAllocationsResponse,
    } as QueryGetUsedAllocationsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.usedAllocations = UsedAllocations.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetUsedAllocationsResponse {
    const message = {
      ...baseQueryGetUsedAllocationsResponse,
    } as QueryGetUsedAllocationsResponse;
    if (
      object.usedAllocations !== undefined &&
      object.usedAllocations !== null
    ) {
      message.usedAllocations = UsedAllocations.fromJSON(
        object.usedAllocations
      );
    } else {
      message.usedAllocations = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetUsedAllocationsResponse): unknown {
    const obj: any = {};
    message.usedAllocations !== undefined &&
      (obj.usedAllocations = message.usedAllocations
        ? UsedAllocations.toJSON(message.usedAllocations)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetUsedAllocationsResponse>
  ): QueryGetUsedAllocationsResponse {
    const message = {
      ...baseQueryGetUsedAllocationsResponse,
    } as QueryGetUsedAllocationsResponse;
    if (
      object.usedAllocations !== undefined &&
      object.usedAllocations !== null
    ) {
      message.usedAllocations = UsedAllocations.fromPartial(
        object.usedAllocations
      );
    } else {
      message.usedAllocations = undefined;
    }
    return message;
  },
};

const baseQueryAllUsedAllocationsRequest: object = {};

export const QueryAllUsedAllocationsRequest = {
  encode(
    message: QueryAllUsedAllocationsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllUsedAllocationsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllUsedAllocationsRequest,
    } as QueryAllUsedAllocationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllUsedAllocationsRequest {
    const message = {
      ...baseQueryAllUsedAllocationsRequest,
    } as QueryAllUsedAllocationsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllUsedAllocationsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllUsedAllocationsRequest>
  ): QueryAllUsedAllocationsRequest {
    const message = {
      ...baseQueryAllUsedAllocationsRequest,
    } as QueryAllUsedAllocationsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllUsedAllocationsResponse: object = {};

export const QueryAllUsedAllocationsResponse = {
  encode(
    message: QueryAllUsedAllocationsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.usedAllocations) {
      UsedAllocations.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllUsedAllocationsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllUsedAllocationsResponse,
    } as QueryAllUsedAllocationsResponse;
    message.usedAllocations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.usedAllocations.push(
            UsedAllocations.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllUsedAllocationsResponse {
    const message = {
      ...baseQueryAllUsedAllocationsResponse,
    } as QueryAllUsedAllocationsResponse;
    message.usedAllocations = [];
    if (
      object.usedAllocations !== undefined &&
      object.usedAllocations !== null
    ) {
      for (const e of object.usedAllocations) {
        message.usedAllocations.push(UsedAllocations.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllUsedAllocationsResponse): unknown {
    const obj: any = {};
    if (message.usedAllocations) {
      obj.usedAllocations = message.usedAllocations.map((e) =>
        e ? UsedAllocations.toJSON(e) : undefined
      );
    } else {
      obj.usedAllocations = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllUsedAllocationsResponse>
  ): QueryAllUsedAllocationsResponse {
    const message = {
      ...baseQueryAllUsedAllocationsResponse,
    } as QueryAllUsedAllocationsResponse;
    message.usedAllocations = [];
    if (
      object.usedAllocations !== undefined &&
      object.usedAllocations !== null
    ) {
      for (const e of object.usedAllocations) {
        message.usedAllocations.push(UsedAllocations.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetAuctionUsedAllocationsRequest: object = {
  address: "",
  auctionID: 0,
};

export const QueryGetAuctionUsedAllocationsRequest = {
  encode(
    message: QueryGetAuctionUsedAllocationsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.auctionID !== 0) {
      writer.uint32(16).uint64(message.auctionID);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetAuctionUsedAllocationsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAuctionUsedAllocationsRequest,
    } as QueryGetAuctionUsedAllocationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.auctionID = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAuctionUsedAllocationsRequest {
    const message = {
      ...baseQueryGetAuctionUsedAllocationsRequest,
    } as QueryGetAuctionUsedAllocationsRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.auctionID !== undefined && object.auctionID !== null) {
      message.auctionID = Number(object.auctionID);
    } else {
      message.auctionID = 0;
    }
    return message;
  },

  toJSON(message: QueryGetAuctionUsedAllocationsRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.auctionID !== undefined && (obj.auctionID = message.auctionID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAuctionUsedAllocationsRequest>
  ): QueryGetAuctionUsedAllocationsRequest {
    const message = {
      ...baseQueryGetAuctionUsedAllocationsRequest,
    } as QueryGetAuctionUsedAllocationsRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.auctionID !== undefined && object.auctionID !== null) {
      message.auctionID = object.auctionID;
    } else {
      message.auctionID = 0;
    }
    return message;
  },
};

const baseQueryGetAuctionUsedAllocationsResponse: object = {};

export const QueryGetAuctionUsedAllocationsResponse = {
  encode(
    message: QueryGetAuctionUsedAllocationsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.auctionUsedAllocations !== undefined) {
      AuctionUsedAllocations.encode(
        message.auctionUsedAllocations,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetAuctionUsedAllocationsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAuctionUsedAllocationsResponse,
    } as QueryGetAuctionUsedAllocationsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionUsedAllocations = AuctionUsedAllocations.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAuctionUsedAllocationsResponse {
    const message = {
      ...baseQueryGetAuctionUsedAllocationsResponse,
    } as QueryGetAuctionUsedAllocationsResponse;
    if (
      object.auctionUsedAllocations !== undefined &&
      object.auctionUsedAllocations !== null
    ) {
      message.auctionUsedAllocations = AuctionUsedAllocations.fromJSON(
        object.auctionUsedAllocations
      );
    } else {
      message.auctionUsedAllocations = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetAuctionUsedAllocationsResponse): unknown {
    const obj: any = {};
    message.auctionUsedAllocations !== undefined &&
      (obj.auctionUsedAllocations = message.auctionUsedAllocations
        ? AuctionUsedAllocations.toJSON(message.auctionUsedAllocations)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAuctionUsedAllocationsResponse>
  ): QueryGetAuctionUsedAllocationsResponse {
    const message = {
      ...baseQueryGetAuctionUsedAllocationsResponse,
    } as QueryGetAuctionUsedAllocationsResponse;
    if (
      object.auctionUsedAllocations !== undefined &&
      object.auctionUsedAllocations !== null
    ) {
      message.auctionUsedAllocations = AuctionUsedAllocations.fromPartial(
        object.auctionUsedAllocations
      );
    } else {
      message.auctionUsedAllocations = undefined;
    }
    return message;
  },
};

const baseQueryAllAuctionUsedAllocationsRequest: object = { address: "" };

export const QueryAllAuctionUsedAllocationsRequest = {
  encode(
    message: QueryAllAuctionUsedAllocationsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllAuctionUsedAllocationsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllAuctionUsedAllocationsRequest,
    } as QueryAllAuctionUsedAllocationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAuctionUsedAllocationsRequest {
    const message = {
      ...baseQueryAllAuctionUsedAllocationsRequest,
    } as QueryAllAuctionUsedAllocationsRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAuctionUsedAllocationsRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAuctionUsedAllocationsRequest>
  ): QueryAllAuctionUsedAllocationsRequest {
    const message = {
      ...baseQueryAllAuctionUsedAllocationsRequest,
    } as QueryAllAuctionUsedAllocationsRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllAuctionUsedAllocationsResponse: object = {};

export const QueryAllAuctionUsedAllocationsResponse = {
  encode(
    message: QueryAllAuctionUsedAllocationsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.auctionUsedAllocations) {
      AuctionUsedAllocations.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllAuctionUsedAllocationsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllAuctionUsedAllocationsResponse,
    } as QueryAllAuctionUsedAllocationsResponse;
    message.auctionUsedAllocations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionUsedAllocations.push(
            AuctionUsedAllocations.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAuctionUsedAllocationsResponse {
    const message = {
      ...baseQueryAllAuctionUsedAllocationsResponse,
    } as QueryAllAuctionUsedAllocationsResponse;
    message.auctionUsedAllocations = [];
    if (
      object.auctionUsedAllocations !== undefined &&
      object.auctionUsedAllocations !== null
    ) {
      for (const e of object.auctionUsedAllocations) {
        message.auctionUsedAllocations.push(AuctionUsedAllocations.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAuctionUsedAllocationsResponse): unknown {
    const obj: any = {};
    if (message.auctionUsedAllocations) {
      obj.auctionUsedAllocations = message.auctionUsedAllocations.map((e) =>
        e ? AuctionUsedAllocations.toJSON(e) : undefined
      );
    } else {
      obj.auctionUsedAllocations = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAuctionUsedAllocationsResponse>
  ): QueryAllAuctionUsedAllocationsResponse {
    const message = {
      ...baseQueryAllAuctionUsedAllocationsResponse,
    } as QueryAllAuctionUsedAllocationsResponse;
    message.auctionUsedAllocations = [];
    if (
      object.auctionUsedAllocations !== undefined &&
      object.auctionUsedAllocations !== null
    ) {
      for (const e of object.auctionUsedAllocations) {
        message.auctionUsedAllocations.push(
          AuctionUsedAllocations.fromPartial(e)
        );
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetTotalAllocationsRequest: object = { address: "" };

export const QueryGetTotalAllocationsRequest = {
  encode(
    message: QueryGetTotalAllocationsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetTotalAllocationsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTotalAllocationsRequest,
    } as QueryGetTotalAllocationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTotalAllocationsRequest {
    const message = {
      ...baseQueryGetTotalAllocationsRequest,
    } as QueryGetTotalAllocationsRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryGetTotalAllocationsRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTotalAllocationsRequest>
  ): QueryGetTotalAllocationsRequest {
    const message = {
      ...baseQueryGetTotalAllocationsRequest,
    } as QueryGetTotalAllocationsRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryGetTotalAllocationsResponse: object = { totalAllocations: 0 };

export const QueryGetTotalAllocationsResponse = {
  encode(
    message: QueryGetTotalAllocationsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.totalAllocations !== 0) {
      writer.uint32(8).uint64(message.totalAllocations);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetTotalAllocationsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTotalAllocationsResponse,
    } as QueryGetTotalAllocationsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalAllocations = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTotalAllocationsResponse {
    const message = {
      ...baseQueryGetTotalAllocationsResponse,
    } as QueryGetTotalAllocationsResponse;
    if (
      object.totalAllocations !== undefined &&
      object.totalAllocations !== null
    ) {
      message.totalAllocations = Number(object.totalAllocations);
    } else {
      message.totalAllocations = 0;
    }
    return message;
  },

  toJSON(message: QueryGetTotalAllocationsResponse): unknown {
    const obj: any = {};
    message.totalAllocations !== undefined &&
      (obj.totalAllocations = message.totalAllocations);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTotalAllocationsResponse>
  ): QueryGetTotalAllocationsResponse {
    const message = {
      ...baseQueryGetTotalAllocationsResponse,
    } as QueryGetTotalAllocationsResponse;
    if (
      object.totalAllocations !== undefined &&
      object.totalAllocations !== null
    ) {
      message.totalAllocations = object.totalAllocations;
    } else {
      message.totalAllocations = 0;
    }
    return message;
  },
};

const baseQueryGetAvailableAllocationsRequest: object = { address: "" };

export const QueryGetAvailableAllocationsRequest = {
  encode(
    message: QueryGetAvailableAllocationsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetAvailableAllocationsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAvailableAllocationsRequest,
    } as QueryGetAvailableAllocationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAvailableAllocationsRequest {
    const message = {
      ...baseQueryGetAvailableAllocationsRequest,
    } as QueryGetAvailableAllocationsRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryGetAvailableAllocationsRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAvailableAllocationsRequest>
  ): QueryGetAvailableAllocationsRequest {
    const message = {
      ...baseQueryGetAvailableAllocationsRequest,
    } as QueryGetAvailableAllocationsRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryGetAvailableAllocationsResponse: object = {
  availableAllocations: 0,
};

export const QueryGetAvailableAllocationsResponse = {
  encode(
    message: QueryGetAvailableAllocationsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.availableAllocations !== 0) {
      writer.uint32(8).uint64(message.availableAllocations);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetAvailableAllocationsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAvailableAllocationsResponse,
    } as QueryGetAvailableAllocationsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.availableAllocations = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAvailableAllocationsResponse {
    const message = {
      ...baseQueryGetAvailableAllocationsResponse,
    } as QueryGetAvailableAllocationsResponse;
    if (
      object.availableAllocations !== undefined &&
      object.availableAllocations !== null
    ) {
      message.availableAllocations = Number(object.availableAllocations);
    } else {
      message.availableAllocations = 0;
    }
    return message;
  },

  toJSON(message: QueryGetAvailableAllocationsResponse): unknown {
    const obj: any = {};
    message.availableAllocations !== undefined &&
      (obj.availableAllocations = message.availableAllocations);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAvailableAllocationsResponse>
  ): QueryGetAvailableAllocationsResponse {
    const message = {
      ...baseQueryGetAvailableAllocationsResponse,
    } as QueryGetAvailableAllocationsResponse;
    if (
      object.availableAllocations !== undefined &&
      object.availableAllocations !== null
    ) {
      message.availableAllocations = object.availableAllocations;
    } else {
      message.availableAllocations = 0;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a UsedAllocations by address. */
  UsedAllocations(
    request: QueryGetUsedAllocationsRequest
  ): Promise<QueryGetUsedAllocationsResponse>;
  /** Queries a list of UsedAllocations items. */
  UsedAllocationsAll(
    request: QueryAllUsedAllocationsRequest
  ): Promise<QueryAllUsedAllocationsResponse>;
  /** Queries a AuctionUsedAllocations by address and auctionID. */
  AuctionUsedAllocations(
    request: QueryGetAuctionUsedAllocationsRequest
  ): Promise<QueryGetAuctionUsedAllocationsResponse>;
  /** Queries a list of AuctionUsedAllocations items. */
  AuctionUsedAllocationsAll(
    request: QueryAllAuctionUsedAllocationsRequest
  ): Promise<QueryAllAuctionUsedAllocationsResponse>;
  /** Queries a TotalAllocation of address. */
  TotalAllocations(
    request: QueryGetTotalAllocationsRequest
  ): Promise<QueryGetTotalAllocationsResponse>;
  /** Queries the AvailableAllocation of address. */
  AvailableAllocations(
    request: QueryGetAvailableAllocationsRequest
  ): Promise<QueryGetAvailableAllocationsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.participation.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  UsedAllocations(
    request: QueryGetUsedAllocationsRequest
  ): Promise<QueryGetUsedAllocationsResponse> {
    const data = QueryGetUsedAllocationsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.participation.Query",
      "UsedAllocations",
      data
    );
    return promise.then((data) =>
      QueryGetUsedAllocationsResponse.decode(new Reader(data))
    );
  }

  UsedAllocationsAll(
    request: QueryAllUsedAllocationsRequest
  ): Promise<QueryAllUsedAllocationsResponse> {
    const data = QueryAllUsedAllocationsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.participation.Query",
      "UsedAllocationsAll",
      data
    );
    return promise.then((data) =>
      QueryAllUsedAllocationsResponse.decode(new Reader(data))
    );
  }

  AuctionUsedAllocations(
    request: QueryGetAuctionUsedAllocationsRequest
  ): Promise<QueryGetAuctionUsedAllocationsResponse> {
    const data = QueryGetAuctionUsedAllocationsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.participation.Query",
      "AuctionUsedAllocations",
      data
    );
    return promise.then((data) =>
      QueryGetAuctionUsedAllocationsResponse.decode(new Reader(data))
    );
  }

  AuctionUsedAllocationsAll(
    request: QueryAllAuctionUsedAllocationsRequest
  ): Promise<QueryAllAuctionUsedAllocationsResponse> {
    const data = QueryAllAuctionUsedAllocationsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.participation.Query",
      "AuctionUsedAllocationsAll",
      data
    );
    return promise.then((data) =>
      QueryAllAuctionUsedAllocationsResponse.decode(new Reader(data))
    );
  }

  TotalAllocations(
    request: QueryGetTotalAllocationsRequest
  ): Promise<QueryGetTotalAllocationsResponse> {
    const data = QueryGetTotalAllocationsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.participation.Query",
      "TotalAllocations",
      data
    );
    return promise.then((data) =>
      QueryGetTotalAllocationsResponse.decode(new Reader(data))
    );
  }

  AvailableAllocations(
    request: QueryGetAvailableAllocationsRequest
  ): Promise<QueryGetAvailableAllocationsResponse> {
    const data = QueryGetAvailableAllocationsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.participation.Query",
      "AvailableAllocations",
      data
    );
    return promise.then((data) =>
      QueryGetAvailableAllocationsResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
