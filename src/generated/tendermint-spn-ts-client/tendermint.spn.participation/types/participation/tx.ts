/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "tendermint.spn.participation";

export interface MsgParticipate {
  participant: string;
  auctionID: number;
  tierID: number;
}

export interface MsgParticipateResponse {}

export interface MsgWithdrawAllocations {
  participant: string;
  auctionID: number;
}

export interface MsgWithdrawAllocationsResponse {}

const baseMsgParticipate: object = { participant: "", auctionID: 0, tierID: 0 };

export const MsgParticipate = {
  encode(message: MsgParticipate, writer: Writer = Writer.create()): Writer {
    if (message.participant !== "") {
      writer.uint32(10).string(message.participant);
    }
    if (message.auctionID !== 0) {
      writer.uint32(16).uint64(message.auctionID);
    }
    if (message.tierID !== 0) {
      writer.uint32(24).uint64(message.tierID);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgParticipate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgParticipate } as MsgParticipate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.participant = reader.string();
          break;
        case 2:
          message.auctionID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.tierID = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgParticipate {
    const message = { ...baseMsgParticipate } as MsgParticipate;
    if (object.participant !== undefined && object.participant !== null) {
      message.participant = String(object.participant);
    } else {
      message.participant = "";
    }
    if (object.auctionID !== undefined && object.auctionID !== null) {
      message.auctionID = Number(object.auctionID);
    } else {
      message.auctionID = 0;
    }
    if (object.tierID !== undefined && object.tierID !== null) {
      message.tierID = Number(object.tierID);
    } else {
      message.tierID = 0;
    }
    return message;
  },

  toJSON(message: MsgParticipate): unknown {
    const obj: any = {};
    message.participant !== undefined &&
      (obj.participant = message.participant);
    message.auctionID !== undefined && (obj.auctionID = message.auctionID);
    message.tierID !== undefined && (obj.tierID = message.tierID);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgParticipate>): MsgParticipate {
    const message = { ...baseMsgParticipate } as MsgParticipate;
    if (object.participant !== undefined && object.participant !== null) {
      message.participant = object.participant;
    } else {
      message.participant = "";
    }
    if (object.auctionID !== undefined && object.auctionID !== null) {
      message.auctionID = object.auctionID;
    } else {
      message.auctionID = 0;
    }
    if (object.tierID !== undefined && object.tierID !== null) {
      message.tierID = object.tierID;
    } else {
      message.tierID = 0;
    }
    return message;
  },
};

const baseMsgParticipateResponse: object = {};

export const MsgParticipateResponse = {
  encode(_: MsgParticipateResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgParticipateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgParticipateResponse } as MsgParticipateResponse;
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

  fromJSON(_: any): MsgParticipateResponse {
    const message = { ...baseMsgParticipateResponse } as MsgParticipateResponse;
    return message;
  },

  toJSON(_: MsgParticipateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgParticipateResponse>): MsgParticipateResponse {
    const message = { ...baseMsgParticipateResponse } as MsgParticipateResponse;
    return message;
  },
};

const baseMsgWithdrawAllocations: object = { participant: "", auctionID: 0 };

export const MsgWithdrawAllocations = {
  encode(
    message: MsgWithdrawAllocations,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.participant !== "") {
      writer.uint32(10).string(message.participant);
    }
    if (message.auctionID !== 0) {
      writer.uint32(16).uint64(message.auctionID);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgWithdrawAllocations {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWithdrawAllocations } as MsgWithdrawAllocations;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.participant = reader.string();
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

  fromJSON(object: any): MsgWithdrawAllocations {
    const message = { ...baseMsgWithdrawAllocations } as MsgWithdrawAllocations;
    if (object.participant !== undefined && object.participant !== null) {
      message.participant = String(object.participant);
    } else {
      message.participant = "";
    }
    if (object.auctionID !== undefined && object.auctionID !== null) {
      message.auctionID = Number(object.auctionID);
    } else {
      message.auctionID = 0;
    }
    return message;
  },

  toJSON(message: MsgWithdrawAllocations): unknown {
    const obj: any = {};
    message.participant !== undefined &&
      (obj.participant = message.participant);
    message.auctionID !== undefined && (obj.auctionID = message.auctionID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgWithdrawAllocations>
  ): MsgWithdrawAllocations {
    const message = { ...baseMsgWithdrawAllocations } as MsgWithdrawAllocations;
    if (object.participant !== undefined && object.participant !== null) {
      message.participant = object.participant;
    } else {
      message.participant = "";
    }
    if (object.auctionID !== undefined && object.auctionID !== null) {
      message.auctionID = object.auctionID;
    } else {
      message.auctionID = 0;
    }
    return message;
  },
};

const baseMsgWithdrawAllocationsResponse: object = {};

export const MsgWithdrawAllocationsResponse = {
  encode(
    _: MsgWithdrawAllocationsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgWithdrawAllocationsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawAllocationsResponse,
    } as MsgWithdrawAllocationsResponse;
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

  fromJSON(_: any): MsgWithdrawAllocationsResponse {
    const message = {
      ...baseMsgWithdrawAllocationsResponse,
    } as MsgWithdrawAllocationsResponse;
    return message;
  },

  toJSON(_: MsgWithdrawAllocationsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgWithdrawAllocationsResponse>
  ): MsgWithdrawAllocationsResponse {
    const message = {
      ...baseMsgWithdrawAllocationsResponse,
    } as MsgWithdrawAllocationsResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  Participate(request: MsgParticipate): Promise<MsgParticipateResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  WithdrawAllocations(
    request: MsgWithdrawAllocations
  ): Promise<MsgWithdrawAllocationsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Participate(request: MsgParticipate): Promise<MsgParticipateResponse> {
    const data = MsgParticipate.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.participation.Msg",
      "Participate",
      data
    );
    return promise.then((data) =>
      MsgParticipateResponse.decode(new Reader(data))
    );
  }

  WithdrawAllocations(
    request: MsgWithdrawAllocations
  ): Promise<MsgWithdrawAllocationsResponse> {
    const data = MsgWithdrawAllocations.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.participation.Msg",
      "WithdrawAllocations",
      data
    );
    return promise.then((data) =>
      MsgWithdrawAllocationsResponse.decode(new Reader(data))
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
