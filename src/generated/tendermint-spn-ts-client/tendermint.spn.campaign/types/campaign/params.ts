/* eslint-disable */
import { Coin } from "../cosmos/base/v1beta1/coin";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "tendermint.spn.campaign";

/** Params defines the set of params for the campaign module. */
export interface Params {
  totalSupplyRange: TotalSupplyRange | undefined;
  campaignCreationFee: Coin[];
}

/** TotalSupplyRange defines the range of allowed values for total supply */
export interface TotalSupplyRange {
  minTotalSupply: string;
  maxTotalSupply: string;
}

const baseParams: object = {};

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.totalSupplyRange !== undefined) {
      TotalSupplyRange.encode(
        message.totalSupplyRange,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.campaignCreationFee) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.campaignCreationFee = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalSupplyRange = TotalSupplyRange.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.campaignCreationFee.push(
            Coin.decode(reader, reader.uint32())
          );
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
    message.campaignCreationFee = [];
    if (
      object.totalSupplyRange !== undefined &&
      object.totalSupplyRange !== null
    ) {
      message.totalSupplyRange = TotalSupplyRange.fromJSON(
        object.totalSupplyRange
      );
    } else {
      message.totalSupplyRange = undefined;
    }
    if (
      object.campaignCreationFee !== undefined &&
      object.campaignCreationFee !== null
    ) {
      for (const e of object.campaignCreationFee) {
        message.campaignCreationFee.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.totalSupplyRange !== undefined &&
      (obj.totalSupplyRange = message.totalSupplyRange
        ? TotalSupplyRange.toJSON(message.totalSupplyRange)
        : undefined);
    if (message.campaignCreationFee) {
      obj.campaignCreationFee = message.campaignCreationFee.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.campaignCreationFee = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.campaignCreationFee = [];
    if (
      object.totalSupplyRange !== undefined &&
      object.totalSupplyRange !== null
    ) {
      message.totalSupplyRange = TotalSupplyRange.fromPartial(
        object.totalSupplyRange
      );
    } else {
      message.totalSupplyRange = undefined;
    }
    if (
      object.campaignCreationFee !== undefined &&
      object.campaignCreationFee !== null
    ) {
      for (const e of object.campaignCreationFee) {
        message.campaignCreationFee.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseTotalSupplyRange: object = { minTotalSupply: "", maxTotalSupply: "" };

export const TotalSupplyRange = {
  encode(message: TotalSupplyRange, writer: Writer = Writer.create()): Writer {
    if (message.minTotalSupply !== "") {
      writer.uint32(10).string(message.minTotalSupply);
    }
    if (message.maxTotalSupply !== "") {
      writer.uint32(18).string(message.maxTotalSupply);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TotalSupplyRange {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTotalSupplyRange } as TotalSupplyRange;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minTotalSupply = reader.string();
          break;
        case 2:
          message.maxTotalSupply = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TotalSupplyRange {
    const message = { ...baseTotalSupplyRange } as TotalSupplyRange;
    if (object.minTotalSupply !== undefined && object.minTotalSupply !== null) {
      message.minTotalSupply = String(object.minTotalSupply);
    } else {
      message.minTotalSupply = "";
    }
    if (object.maxTotalSupply !== undefined && object.maxTotalSupply !== null) {
      message.maxTotalSupply = String(object.maxTotalSupply);
    } else {
      message.maxTotalSupply = "";
    }
    return message;
  },

  toJSON(message: TotalSupplyRange): unknown {
    const obj: any = {};
    message.minTotalSupply !== undefined &&
      (obj.minTotalSupply = message.minTotalSupply);
    message.maxTotalSupply !== undefined &&
      (obj.maxTotalSupply = message.maxTotalSupply);
    return obj;
  },

  fromPartial(object: DeepPartial<TotalSupplyRange>): TotalSupplyRange {
    const message = { ...baseTotalSupplyRange } as TotalSupplyRange;
    if (object.minTotalSupply !== undefined && object.minTotalSupply !== null) {
      message.minTotalSupply = object.minTotalSupply;
    } else {
      message.minTotalSupply = "";
    }
    if (object.maxTotalSupply !== undefined && object.maxTotalSupply !== null) {
      message.maxTotalSupply = object.maxTotalSupply;
    } else {
      message.maxTotalSupply = "";
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
