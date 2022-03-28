/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "tendermint.spn.participation";

/** Allocations used by a user for a specific auction */
export interface AuctionUsedAllocations {
  address: string;
  auctionID: number;
  numAllocations: number;
  withdrawn: boolean;
}

const baseAuctionUsedAllocations: object = {
  address: "",
  auctionID: 0,
  numAllocations: 0,
  withdrawn: false,
};

export const AuctionUsedAllocations = {
  encode(
    message: AuctionUsedAllocations,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.auctionID !== 0) {
      writer.uint32(16).uint64(message.auctionID);
    }
    if (message.numAllocations !== 0) {
      writer.uint32(24).uint64(message.numAllocations);
    }
    if (message.withdrawn === true) {
      writer.uint32(32).bool(message.withdrawn);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AuctionUsedAllocations {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAuctionUsedAllocations } as AuctionUsedAllocations;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.auctionID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.numAllocations = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.withdrawn = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuctionUsedAllocations {
    const message = { ...baseAuctionUsedAllocations } as AuctionUsedAllocations;
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
    if (object.numAllocations !== undefined && object.numAllocations !== null) {
      message.numAllocations = Number(object.numAllocations);
    } else {
      message.numAllocations = 0;
    }
    if (object.withdrawn !== undefined && object.withdrawn !== null) {
      message.withdrawn = Boolean(object.withdrawn);
    } else {
      message.withdrawn = false;
    }
    return message;
  },

  toJSON(message: AuctionUsedAllocations): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.auctionID !== undefined && (obj.auctionID = message.auctionID);
    message.numAllocations !== undefined &&
      (obj.numAllocations = message.numAllocations);
    message.withdrawn !== undefined && (obj.withdrawn = message.withdrawn);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AuctionUsedAllocations>
  ): AuctionUsedAllocations {
    const message = { ...baseAuctionUsedAllocations } as AuctionUsedAllocations;
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
    if (object.numAllocations !== undefined && object.numAllocations !== null) {
      message.numAllocations = object.numAllocations;
    } else {
      message.numAllocations = 0;
    }
    if (object.withdrawn !== undefined && object.withdrawn !== null) {
      message.withdrawn = object.withdrawn;
    } else {
      message.withdrawn = false;
    }
    return message;
  },
};

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
