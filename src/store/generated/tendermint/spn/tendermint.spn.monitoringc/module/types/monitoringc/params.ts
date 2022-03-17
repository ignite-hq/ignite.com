/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "tendermint.spn.monitoringc";

/** Params defines the parameters for the module. */
export interface Params {
  debugMode: boolean;
}

const baseParams: object = { debugMode: false };

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.debugMode === true) {
      writer.uint32(8).bool(message.debugMode);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.debugMode = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    if (object.debugMode !== undefined && object.debugMode !== null) {
      message.debugMode = Boolean(object.debugMode);
    } else {
      message.debugMode = false;
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.debugMode !== undefined && (obj.debugMode = message.debugMode);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (object.debugMode !== undefined && object.debugMode !== null) {
      message.debugMode = object.debugMode;
    } else {
      message.debugMode = false;
    }
    return message;
  },
};

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
