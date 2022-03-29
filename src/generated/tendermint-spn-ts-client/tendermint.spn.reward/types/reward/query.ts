/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../reward/params";
import { RewardPool } from "../reward/reward_pool";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "tendermint.spn.reward";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetRewardPoolRequest {
  launchID: number;
}

export interface QueryGetRewardPoolResponse {
  rewardPool: RewardPool | undefined;
}

export interface QueryAllRewardPoolRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllRewardPoolResponse {
  rewardPool: RewardPool[];
  pagination: PageResponse | undefined;
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

const baseQueryGetRewardPoolRequest: object = { launchID: 0 };

export const QueryGetRewardPoolRequest = {
  encode(
    message: QueryGetRewardPoolRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetRewardPoolRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetRewardPoolRequest,
    } as QueryGetRewardPoolRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.launchID = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetRewardPoolRequest {
    const message = {
      ...baseQueryGetRewardPoolRequest,
    } as QueryGetRewardPoolRequest;
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID);
    } else {
      message.launchID = 0;
    }
    return message;
  },

  toJSON(message: QueryGetRewardPoolRequest): unknown {
    const obj: any = {};
    message.launchID !== undefined && (obj.launchID = message.launchID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetRewardPoolRequest>
  ): QueryGetRewardPoolRequest {
    const message = {
      ...baseQueryGetRewardPoolRequest,
    } as QueryGetRewardPoolRequest;
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID;
    } else {
      message.launchID = 0;
    }
    return message;
  },
};

const baseQueryGetRewardPoolResponse: object = {};

export const QueryGetRewardPoolResponse = {
  encode(
    message: QueryGetRewardPoolResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.rewardPool !== undefined) {
      RewardPool.encode(message.rewardPool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetRewardPoolResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetRewardPoolResponse,
    } as QueryGetRewardPoolResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardPool = RewardPool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetRewardPoolResponse {
    const message = {
      ...baseQueryGetRewardPoolResponse,
    } as QueryGetRewardPoolResponse;
    if (object.rewardPool !== undefined && object.rewardPool !== null) {
      message.rewardPool = RewardPool.fromJSON(object.rewardPool);
    } else {
      message.rewardPool = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetRewardPoolResponse): unknown {
    const obj: any = {};
    message.rewardPool !== undefined &&
      (obj.rewardPool = message.rewardPool
        ? RewardPool.toJSON(message.rewardPool)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetRewardPoolResponse>
  ): QueryGetRewardPoolResponse {
    const message = {
      ...baseQueryGetRewardPoolResponse,
    } as QueryGetRewardPoolResponse;
    if (object.rewardPool !== undefined && object.rewardPool !== null) {
      message.rewardPool = RewardPool.fromPartial(object.rewardPool);
    } else {
      message.rewardPool = undefined;
    }
    return message;
  },
};

const baseQueryAllRewardPoolRequest: object = {};

export const QueryAllRewardPoolRequest = {
  encode(
    message: QueryAllRewardPoolRequest,
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
  ): QueryAllRewardPoolRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllRewardPoolRequest,
    } as QueryAllRewardPoolRequest;
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

  fromJSON(object: any): QueryAllRewardPoolRequest {
    const message = {
      ...baseQueryAllRewardPoolRequest,
    } as QueryAllRewardPoolRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllRewardPoolRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllRewardPoolRequest>
  ): QueryAllRewardPoolRequest {
    const message = {
      ...baseQueryAllRewardPoolRequest,
    } as QueryAllRewardPoolRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllRewardPoolResponse: object = {};

export const QueryAllRewardPoolResponse = {
  encode(
    message: QueryAllRewardPoolResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.rewardPool) {
      RewardPool.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllRewardPoolResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllRewardPoolResponse,
    } as QueryAllRewardPoolResponse;
    message.rewardPool = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardPool.push(RewardPool.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllRewardPoolResponse {
    const message = {
      ...baseQueryAllRewardPoolResponse,
    } as QueryAllRewardPoolResponse;
    message.rewardPool = [];
    if (object.rewardPool !== undefined && object.rewardPool !== null) {
      for (const e of object.rewardPool) {
        message.rewardPool.push(RewardPool.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllRewardPoolResponse): unknown {
    const obj: any = {};
    if (message.rewardPool) {
      obj.rewardPool = message.rewardPool.map((e) =>
        e ? RewardPool.toJSON(e) : undefined
      );
    } else {
      obj.rewardPool = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllRewardPoolResponse>
  ): QueryAllRewardPoolResponse {
    const message = {
      ...baseQueryAllRewardPoolResponse,
    } as QueryAllRewardPoolResponse;
    message.rewardPool = [];
    if (object.rewardPool !== undefined && object.rewardPool !== null) {
      for (const e of object.rewardPool) {
        message.rewardPool.push(RewardPool.fromPartial(e));
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

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a RewardPool by index. */
  RewardPool(
    request: QueryGetRewardPoolRequest
  ): Promise<QueryGetRewardPoolResponse>;
  /** Queries a list of RewardPool items. */
  RewardPoolAll(
    request: QueryAllRewardPoolRequest
  ): Promise<QueryAllRewardPoolResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.reward.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  RewardPool(
    request: QueryGetRewardPoolRequest
  ): Promise<QueryGetRewardPoolResponse> {
    const data = QueryGetRewardPoolRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.reward.Query",
      "RewardPool",
      data
    );
    return promise.then((data) =>
      QueryGetRewardPoolResponse.decode(new Reader(data))
    );
  }

  RewardPoolAll(
    request: QueryAllRewardPoolRequest
  ): Promise<QueryAllRewardPoolResponse> {
    const data = QueryAllRewardPoolRequest.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.reward.Query",
      "RewardPoolAll",
      data
    );
    return promise.then((data) =>
      QueryAllRewardPoolResponse.decode(new Reader(data))
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
