/* eslint-disable */
import { Params } from "../participation/params";
import { UsedAllocations } from "../participation/used_allocations";
import { AuctionUsedAllocations } from "../participation/auction_used_allocations";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "tendermint.spn.participation";

/** GenesisState defines the participation module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  usedAllocationsList: UsedAllocations[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  auctionUsedAllocationsList: AuctionUsedAllocations[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.usedAllocationsList) {
      UsedAllocations.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.auctionUsedAllocationsList) {
      AuctionUsedAllocations.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.usedAllocationsList = [];
    message.auctionUsedAllocationsList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.usedAllocationsList.push(
            UsedAllocations.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.auctionUsedAllocationsList.push(
            AuctionUsedAllocations.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.usedAllocationsList = [];
    message.auctionUsedAllocationsList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (
      object.usedAllocationsList !== undefined &&
      object.usedAllocationsList !== null
    ) {
      for (const e of object.usedAllocationsList) {
        message.usedAllocationsList.push(UsedAllocations.fromJSON(e));
      }
    }
    if (
      object.auctionUsedAllocationsList !== undefined &&
      object.auctionUsedAllocationsList !== null
    ) {
      for (const e of object.auctionUsedAllocationsList) {
        message.auctionUsedAllocationsList.push(
          AuctionUsedAllocations.fromJSON(e)
        );
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.usedAllocationsList) {
      obj.usedAllocationsList = message.usedAllocationsList.map((e) =>
        e ? UsedAllocations.toJSON(e) : undefined
      );
    } else {
      obj.usedAllocationsList = [];
    }
    if (message.auctionUsedAllocationsList) {
      obj.auctionUsedAllocationsList = message.auctionUsedAllocationsList.map(
        (e) => (e ? AuctionUsedAllocations.toJSON(e) : undefined)
      );
    } else {
      obj.auctionUsedAllocationsList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.usedAllocationsList = [];
    message.auctionUsedAllocationsList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (
      object.usedAllocationsList !== undefined &&
      object.usedAllocationsList !== null
    ) {
      for (const e of object.usedAllocationsList) {
        message.usedAllocationsList.push(UsedAllocations.fromPartial(e));
      }
    }
    if (
      object.auctionUsedAllocationsList !== undefined &&
      object.auctionUsedAllocationsList !== null
    ) {
      for (const e of object.auctionUsedAllocationsList) {
        message.auctionUsedAllocationsList.push(
          AuctionUsedAllocations.fromPartial(e)
        );
      }
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
