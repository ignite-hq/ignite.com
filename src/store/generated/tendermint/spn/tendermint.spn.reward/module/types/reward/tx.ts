/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "tendermint.spn.reward";

export interface MsgSetRewards {
  provider: string;
  launchID: number;
  coins: Coin[];
  lastRewardHeight: number;
}

export interface MsgSetRewardsResponse {
  previousCoins: Coin[];
  previousLastRewardHeight: number;
  newCoins: Coin[];
  newLastRewardHeight: number;
}

const baseMsgSetRewards: object = {
  provider: "",
  launchID: 0,
  lastRewardHeight: 0,
};

export const MsgSetRewards = {
  encode(message: MsgSetRewards, writer: Writer = Writer.create()): Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.launchID !== 0) {
      writer.uint32(16).uint64(message.launchID);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.lastRewardHeight !== 0) {
      writer.uint32(32).int64(message.lastRewardHeight);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetRewards {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetRewards } as MsgSetRewards;
    message.coins = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        case 2:
          message.launchID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.lastRewardHeight = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetRewards {
    const message = { ...baseMsgSetRewards } as MsgSetRewards;
    message.coins = [];
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = String(object.provider);
    } else {
      message.provider = "";
    }
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID);
    } else {
      message.launchID = 0;
    }
    if (object.coins !== undefined && object.coins !== null) {
      for (const e of object.coins) {
        message.coins.push(Coin.fromJSON(e));
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
    return message;
  },

  toJSON(message: MsgSetRewards): unknown {
    const obj: any = {};
    message.provider !== undefined && (obj.provider = message.provider);
    message.launchID !== undefined && (obj.launchID = message.launchID);
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    message.lastRewardHeight !== undefined &&
      (obj.lastRewardHeight = message.lastRewardHeight);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetRewards>): MsgSetRewards {
    const message = { ...baseMsgSetRewards } as MsgSetRewards;
    message.coins = [];
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    } else {
      message.provider = "";
    }
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID;
    } else {
      message.launchID = 0;
    }
    if (object.coins !== undefined && object.coins !== null) {
      for (const e of object.coins) {
        message.coins.push(Coin.fromPartial(e));
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
    return message;
  },
};

const baseMsgSetRewardsResponse: object = {
  previousLastRewardHeight: 0,
  newLastRewardHeight: 0,
};

export const MsgSetRewardsResponse = {
  encode(
    message: MsgSetRewardsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.previousCoins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.previousLastRewardHeight !== 0) {
      writer.uint32(16).int64(message.previousLastRewardHeight);
    }
    for (const v of message.newCoins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.newLastRewardHeight !== 0) {
      writer.uint32(32).int64(message.newLastRewardHeight);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetRewardsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetRewardsResponse } as MsgSetRewardsResponse;
    message.previousCoins = [];
    message.newCoins = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.previousCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.previousLastRewardHeight = longToNumber(
            reader.int64() as Long
          );
          break;
        case 3:
          message.newCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.newLastRewardHeight = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetRewardsResponse {
    const message = { ...baseMsgSetRewardsResponse } as MsgSetRewardsResponse;
    message.previousCoins = [];
    message.newCoins = [];
    if (object.previousCoins !== undefined && object.previousCoins !== null) {
      for (const e of object.previousCoins) {
        message.previousCoins.push(Coin.fromJSON(e));
      }
    }
    if (
      object.previousLastRewardHeight !== undefined &&
      object.previousLastRewardHeight !== null
    ) {
      message.previousLastRewardHeight = Number(
        object.previousLastRewardHeight
      );
    } else {
      message.previousLastRewardHeight = 0;
    }
    if (object.newCoins !== undefined && object.newCoins !== null) {
      for (const e of object.newCoins) {
        message.newCoins.push(Coin.fromJSON(e));
      }
    }
    if (
      object.newLastRewardHeight !== undefined &&
      object.newLastRewardHeight !== null
    ) {
      message.newLastRewardHeight = Number(object.newLastRewardHeight);
    } else {
      message.newLastRewardHeight = 0;
    }
    return message;
  },

  toJSON(message: MsgSetRewardsResponse): unknown {
    const obj: any = {};
    if (message.previousCoins) {
      obj.previousCoins = message.previousCoins.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.previousCoins = [];
    }
    message.previousLastRewardHeight !== undefined &&
      (obj.previousLastRewardHeight = message.previousLastRewardHeight);
    if (message.newCoins) {
      obj.newCoins = message.newCoins.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.newCoins = [];
    }
    message.newLastRewardHeight !== undefined &&
      (obj.newLastRewardHeight = message.newLastRewardHeight);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetRewardsResponse>
  ): MsgSetRewardsResponse {
    const message = { ...baseMsgSetRewardsResponse } as MsgSetRewardsResponse;
    message.previousCoins = [];
    message.newCoins = [];
    if (object.previousCoins !== undefined && object.previousCoins !== null) {
      for (const e of object.previousCoins) {
        message.previousCoins.push(Coin.fromPartial(e));
      }
    }
    if (
      object.previousLastRewardHeight !== undefined &&
      object.previousLastRewardHeight !== null
    ) {
      message.previousLastRewardHeight = object.previousLastRewardHeight;
    } else {
      message.previousLastRewardHeight = 0;
    }
    if (object.newCoins !== undefined && object.newCoins !== null) {
      for (const e of object.newCoins) {
        message.newCoins.push(Coin.fromPartial(e));
      }
    }
    if (
      object.newLastRewardHeight !== undefined &&
      object.newLastRewardHeight !== null
    ) {
      message.newLastRewardHeight = object.newLastRewardHeight;
    } else {
      message.newLastRewardHeight = 0;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SetRewards(request: MsgSetRewards): Promise<MsgSetRewardsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  SetRewards(request: MsgSetRewards): Promise<MsgSetRewardsResponse> {
    const data = MsgSetRewards.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.spn.reward.Msg",
      "SetRewards",
      data
    );
    return promise.then((data) =>
      MsgSetRewardsResponse.decode(new Reader(data))
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
