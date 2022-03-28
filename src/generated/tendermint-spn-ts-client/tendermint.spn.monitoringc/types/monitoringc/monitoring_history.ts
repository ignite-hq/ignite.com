/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { MonitoringPacket } from "../types/monitoring";

export const protobufPackage = "tendermint.spn.monitoringc";

export interface MonitoringHistory {
  launchID: number;
  latestMonitoringPacket: MonitoringPacket | undefined;
}

const baseMonitoringHistory: object = { launchID: 0 };

export const MonitoringHistory = {
  encode(message: MonitoringHistory, writer: Writer = Writer.create()): Writer {
    if (message.launchID !== 0) {
      writer.uint32(8).uint64(message.launchID);
    }
    if (message.latestMonitoringPacket !== undefined) {
      MonitoringPacket.encode(
        message.latestMonitoringPacket,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MonitoringHistory {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMonitoringHistory } as MonitoringHistory;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.launchID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.latestMonitoringPacket = MonitoringPacket.decode(
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

  fromJSON(object: any): MonitoringHistory {
    const message = { ...baseMonitoringHistory } as MonitoringHistory;
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = Number(object.launchID);
    } else {
      message.launchID = 0;
    }
    if (
      object.latestMonitoringPacket !== undefined &&
      object.latestMonitoringPacket !== null
    ) {
      message.latestMonitoringPacket = MonitoringPacket.fromJSON(
        object.latestMonitoringPacket
      );
    } else {
      message.latestMonitoringPacket = undefined;
    }
    return message;
  },

  toJSON(message: MonitoringHistory): unknown {
    const obj: any = {};
    message.launchID !== undefined && (obj.launchID = message.launchID);
    message.latestMonitoringPacket !== undefined &&
      (obj.latestMonitoringPacket = message.latestMonitoringPacket
        ? MonitoringPacket.toJSON(message.latestMonitoringPacket)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MonitoringHistory>): MonitoringHistory {
    const message = { ...baseMonitoringHistory } as MonitoringHistory;
    if (object.launchID !== undefined && object.launchID !== null) {
      message.launchID = object.launchID;
    } else {
      message.launchID = 0;
    }
    if (
      object.latestMonitoringPacket !== undefined &&
      object.latestMonitoringPacket !== null
    ) {
      message.latestMonitoringPacket = MonitoringPacket.fromPartial(
        object.latestMonitoringPacket
      );
    } else {
      message.latestMonitoringPacket = undefined;
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
