/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "tendermint.spn.reward";

export interface RewardPool {
  launchID: number;
  provider: string;
  initialCoins: Coin[];
  remainingCoins: Coin[];
  lastRewardHeight: number;
  currentRewardHeight: number;
  closed: boolean;
}

const baseRewardPool: object = {
  launchID: 0,
  provider: "",
  lastRewardHeight: 0,
  currentRewardHeight: 0,
  closed: false,
};

export const RewardPool = {
  encode(message: RewardPool, writer: Writer = Writer.create()): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    for (const v of message.initialCoins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.remainingCoins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.lastRewardHeight !== 0) {
      writer.uint32(40).int64(message.lastRewardHeight);
    }
    if (message.currentRewardHeight !== 0) {
      writer.uint32(48).int64(message.currentRewardHeight);
    }
    if (message.closed === true) {
      writer.uint32(56).bool(message.closed);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RewardPool {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRewardPool } as RewardPool;
    message.initialCoins = [];
    message.remainingCoins = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.launchID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.provider = reader.string();
          break;
        case 3:
          message.initialCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.remainingCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.lastRewardHeight = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.currentRewardHeight = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.closed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RewardPool {
    const message = { ...baseRewardPool } as RewardPool;
    message.initialCoins = [];
    message.remainingCoins = [];
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID);
    } else {
      message.launchID = 0;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = String(object.provider);
    } else {
      message.provider = "";
    }
    if (object.initialCoins !== undefined && object.initialCoins !== null) {
      for (const e of object.initialCoins) {
        message.initialCoins.push(Coin.fromJSON(e));
      }
    }
    if (object.remainingCoins !== undefined && object.remainingCoins !== null) {
      for (const e of object.remainingCoins) {
        message.remainingCoins.push(Coin.fromJSON(e));
      }
    }
    if (
      object.lastRewardHeight !== undefined &&
      object.lastRewardHeight !== null
    ) {
      message.lastRewardHeight = Number(object.lastRewardHeight);
    } else {
      message.lastRewardHeight = 0;
    }
    if (
      object.currentRewardHeight !== undefined &&
      object.currentRewardHeight !== null
    ) {
      message.currentRewardHeight = Number(object.currentRewardHeight);
    } else {
      message.currentRewardHeight = 0;
    }
    if (object.closed !== undefined && object.closed !== null) {
      message.closed = Boolean(object.closed);
    } else {
      message.closed = false;
    }
    return message;
  },

  toJSON(message: RewardPool): unknown {
    const obj: any = {};
    message.launchID !== undefined && (obj.launchID = message.launchID);
    message.provider !== undefined && (obj.provider = message.provider);
    if (message.initialCoins) {
      obj.initialCoins = message.initialCoins.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.initialCoins = [];
    }
    if (message.remainingCoins) {
      obj.remainingCoins = message.remainingCoins.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.remainingCoins = [];
    }
    message.lastRewardHeight !== undefined &&
      (obj.lastRewardHeight = message.lastRewardHeight);
    message.currentRewardHeight !== undefined &&
      (obj.currentRewardHeight = message.currentRewardHeight);
    message.closed !== undefined && (obj.closed = message.closed);
    return obj;
  },

  fromPartial(object: DeepPartial<RewardPool>): RewardPool {
    const message = { ...baseRewardPool } as RewardPool;
    message.initialCoins = [];
    message.remainingCoins = [];
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID;
    } else {
      message.launchID = 0;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    } else {
      message.provider = "";
    }
    if (object.initialCoins !== undefined && object.initialCoins !== null) {
      for (const e of object.initialCoins) {
        message.initialCoins.push(Coin.fromPartial(e));
      }
    }
    if (object.remainingCoins !== undefined && object.remainingCoins !== null) {
      for (const e of object.remainingCoins) {
        message.remainingCoins.push(Coin.fromPartial(e));
      }
    }
    if (
      object.lastRewardHeight !== undefined &&
      object.lastRewardHeight !== null
    ) {
      message.lastRewardHeight = object.lastRewardHeight;
    } else {
      message.lastRewardHeight = 0;
    }
    if (
      object.currentRewardHeight !== undefined &&
      object.currentRewardHeight !== null
    ) {
      message.currentRewardHeight = object.currentRewardHeight;
    } else {
      message.currentRewardHeight = 0;
    }
    if (object.closed !== undefined && object.closed !== null) {
      message.closed = object.closed;
    } else {
      message.closed = false;
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
