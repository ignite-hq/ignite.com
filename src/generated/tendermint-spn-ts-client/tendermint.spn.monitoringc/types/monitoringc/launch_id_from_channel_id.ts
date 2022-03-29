/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "tendermint.spn.monitoringc";

export interface LaunchIDFromChannelID {
  channelID: string;
  launchID: number;
}

const baseLaunchIDFromChannelID: object = { channelID: "", launchID: 0 };

export const LaunchIDFromChannelID = {
  encode(
    message: LaunchIDFromChannelID,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.channelID !== "") {
      writer.uint32(10).string(message.channelID);
    }
    if (message.launchID !== 0) {
      writer.uint32(16).uint64(message.launchID);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): LaunchIDFromChannelID {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLaunchIDFromChannelID } as LaunchIDFromChannelID;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelID = reader.string();
          break;
        case 2:
          message.launchID = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LaunchIDFromChannelID {
    const message = { ...baseLaunchIDFromChannelID } as LaunchIDFromChannelID;
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID);
    } else {
      message.channelID = "";
    }
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID);
    } else {
      message.launchID = 0;
    }
    return message;
  },

  toJSON(message: LaunchIDFromChannelID): unknown {
    const obj: any = {};
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.launchID !== undefined && (obj.launchID = message.launchID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<LaunchIDFromChannelID>
  ): LaunchIDFromChannelID {
    const message = { ...baseLaunchIDFromChannelID } as LaunchIDFromChannelID;
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID;
    } else {
      message.channelID = "";
    }
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID;
    } else {
      message.launchID = 0;
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
