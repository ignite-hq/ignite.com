/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import { Timestamp } from "../google/protobuf/timestamp";
import * as Long from "long";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { VestingSchedule, AllowedBidder } from "../fundraising/fundraising";

export const protobufPackage = "tendermint.fundraising";

/**
 * MsgCreateFixedPriceAuction defines a SDK message for creating a fixed price
 * auction.
 */
export interface MsgCreateFixedPriceAuction {
  /** auctioneer specifies the bech32-encoded address that creates the auction */
  auctioneer: string;
  /** start_price specifies the starting price of the auction */
  start_price: string;
  /** selling_coin specifies the selling coin for the auction */
  selling_coin: Coin | undefined;
  /**
   * paying_coin_denom specifies the paying coin denom that bidders use to bid
   * for
   */
  paying_coin_denom: string;
  /** vesting_schedules specifies the vesting schedules for the auction */
  vesting_schedules: VestingSchedule[];
  /** start_time specifies the start time of the plan */
  start_time: Date | undefined;
  /** end_time specifies the end time of the plan */
  end_time: Date | undefined;
}

/**
 * MsgCreateFixedPriceAuctionResponse defines the
 * Msg/MsgCreateFixedPriceAuctionResponse response type.
 */
export interface MsgCreateFixedPriceAuctionResponse {}

/**
 * MsgCreateEnglishAuction defines a SDK message for creating an english
 * auction.
 *
 * See:
 * https://github.com/tendermint/fundraising/tree/main/x/fundraising/spec/04_messages.md
 */
export interface MsgCreateEnglishAuction {
  /** auctioneer specifies the bech32-encoded address that creates the auction */
  auctioneer: string;
  /** start_price specifies the starting price of the auction */
  start_price: string;
  /** selling_coin specifies the selling coin for the auction */
  selling_coin: Coin | undefined;
  /**
   * paying_coin_denom specifies the paying coin denom that bidders use to bid
   * for
   */
  paying_coin_denom: string;
  /** vesting_schedules specifies the vesting schedules for the auction */
  vesting_schedules: VestingSchedule[];
  /** maximum_bid_price specifies the maximum bid price for the auction */
  maximum_bid_price: string;
  /**
   * extend_rate specifies the rate that decides if the auction needs another
   * round
   */
  extend_rate: string;
  /** start_time specifies the start time of the plan */
  start_time: Date | undefined;
  /** end_time specifies the end time of the plan */
  end_time: Date | undefined;
}

/**
 * MsgCreateEnglishAuctionResponse defines the
 * Msg/MsgCreateEnglishAuctionResponse response type.
 */
export interface MsgCreateEnglishAuctionResponse {}

/**
 * MsgCancelAuction defines a SDK message for cancelling the auction.
 * Cancelling is only allowed when the auction hasn't started yet.
 */
export interface MsgCancelAuction {
  /**
   * auctioneer specifies the bech32-encoded address that is in charge of the
   * auction
   */
  auctioneer: string;
  /** auction_id specifies the auction id */
  auction_id: number;
}

/**
 * MsgCancelAuctionResponse defines the Msg/MsgCancelAuctionResponse
 * response type.
 */
export interface MsgCancelAuctionResponse {}

/** MsgPlaceBid defines a SDK message for placing a bid for the auction. */
export interface MsgPlaceBid {
  /** auction_id specifies the auction id */
  auction_id: number;
  /** bidder specifies the bech32-encoded address that bids for the auction */
  bidder: string;
  /**
   * price specifies the bid price.
   * The bid price must be the start price for fixed price auction whereas
   * the bide price can only be increasd for english auction
   */
  price: string;
  /** coin specifies the paying amount of coin that the bidder bids */
  coin: Coin | undefined;
}

/** MsgPlaceBidResponse defines the Msg/MsgPlaceBidResponse response type. */
export interface MsgPlaceBidResponse {}

/**
 * MsgAddAllowedBidder defines a SDK message for adding an allowed bidder to the
 * auction.
 */
export interface MsgAddAllowedBidder {
  /** auction_id specifies the auction id */
  auction_id: number;
  /**
   * allowed_bidder specifies the bidder who is allowed to bid and their maximum
   * bid amount
   */
  allowed_bidder: AllowedBidder | undefined;
}

export interface MsgAddAllowedBidderResponse {}

const baseMsgCreateFixedPriceAuction: object = {
  auctioneer: "",
  start_price: "",
  paying_coin_denom: "",
};

export const MsgCreateFixedPriceAuction = {
  encode(
    message: MsgCreateFixedPriceAuction,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.auctioneer !== "") {
      writer.uint32(10).string(message.auctioneer);
    }
    if (message.start_price !== "") {
      writer.uint32(18).string(message.start_price);
    }
    if (message.selling_coin !== undefined) {
      Coin.encode(message.selling_coin, writer.uint32(26).fork()).ldelim();
    }
    if (message.paying_coin_denom !== "") {
      writer.uint32(34).string(message.paying_coin_denom);
    }
    for (const v of message.vesting_schedules) {
      VestingSchedule.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.start_time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.start_time),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.end_time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.end_time),
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateFixedPriceAuction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateFixedPriceAuction,
    } as MsgCreateFixedPriceAuction;
    message.vesting_schedules = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctioneer = reader.string();
          break;
        case 2:
          message.start_price = reader.string();
          break;
        case 3:
          message.selling_coin = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.paying_coin_denom = reader.string();
          break;
        case 5:
          message.vesting_schedules.push(
            VestingSchedule.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.start_time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.end_time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateFixedPriceAuction {
    const message = {
      ...baseMsgCreateFixedPriceAuction,
    } as MsgCreateFixedPriceAuction;
    message.vesting_schedules = [];
    if (object.auctioneer !== undefined && object.auctioneer !== null) {
      message.auctioneer = String(object.auctioneer);
    } else {
      message.auctioneer = "";
    }
    if (object.start_price !== undefined && object.start_price !== null) {
      message.start_price = String(object.start_price);
    } else {
      message.start_price = "";
    }
    if (object.selling_coin !== undefined && object.selling_coin !== null) {
      message.selling_coin = Coin.fromJSON(object.selling_coin);
    } else {
      message.selling_coin = undefined;
    }
    if (
      object.paying_coin_denom !== undefined &&
      object.paying_coin_denom !== null
    ) {
      message.paying_coin_denom = String(object.paying_coin_denom);
    } else {
      message.paying_coin_denom = "";
    }
    if (
      object.vesting_schedules !== undefined &&
      object.vesting_schedules !== null
    ) {
      for (const e of object.vesting_schedules) {
        message.vesting_schedules.push(VestingSchedule.fromJSON(e));
      }
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.start_time = fromJsonTimestamp(object.start_time);
    } else {
      message.start_time = undefined;
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.end_time = fromJsonTimestamp(object.end_time);
    } else {
      message.end_time = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateFixedPriceAuction): unknown {
    const obj: any = {};
    message.auctioneer !== undefined && (obj.auctioneer = message.auctioneer);
    message.start_price !== undefined &&
      (obj.start_price = message.start_price);
    message.selling_coin !== undefined &&
      (obj.selling_coin = message.selling_coin
        ? Coin.toJSON(message.selling_coin)
        : undefined);
    message.paying_coin_denom !== undefined &&
      (obj.paying_coin_denom = message.paying_coin_denom);
    if (message.vesting_schedules) {
      obj.vesting_schedules = message.vesting_schedules.map((e) =>
        e ? VestingSchedule.toJSON(e) : undefined
      );
    } else {
      obj.vesting_schedules = [];
    }
    message.start_time !== undefined &&
      (obj.start_time =
        message.start_time !== undefined
          ? message.start_time.toISOString()
          : null);
    message.end_time !== undefined &&
      (obj.end_time =
        message.end_time !== undefined ? message.end_time.toISOString() : null);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateFixedPriceAuction>
  ): MsgCreateFixedPriceAuction {
    const message = {
      ...baseMsgCreateFixedPriceAuction,
    } as MsgCreateFixedPriceAuction;
    message.vesting_schedules = [];
    if (object.auctioneer !== undefined && object.auctioneer !== null) {
      message.auctioneer = object.auctioneer;
    } else {
      message.auctioneer = "";
    }
    if (object.start_price !== undefined && object.start_price !== null) {
      message.start_price = object.start_price;
    } else {
      message.start_price = "";
    }
    if (object.selling_coin !== undefined && object.selling_coin !== null) {
      message.selling_coin = Coin.fromPartial(object.selling_coin);
    } else {
      message.selling_coin = undefined;
    }
    if (
      object.paying_coin_denom !== undefined &&
      object.paying_coin_denom !== null
    ) {
      message.paying_coin_denom = object.paying_coin_denom;
    } else {
      message.paying_coin_denom = "";
    }
    if (
      object.vesting_schedules !== undefined &&
      object.vesting_schedules !== null
    ) {
      for (const e of object.vesting_schedules) {
        message.vesting_schedules.push(VestingSchedule.fromPartial(e));
      }
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.start_time = object.start_time;
    } else {
      message.start_time = undefined;
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.end_time = object.end_time;
    } else {
      message.end_time = undefined;
    }
    return message;
  },
};

const baseMsgCreateFixedPriceAuctionResponse: object = {};

export const MsgCreateFixedPriceAuctionResponse = {
  encode(
    _: MsgCreateFixedPriceAuctionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateFixedPriceAuctionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateFixedPriceAuctionResponse,
    } as MsgCreateFixedPriceAuctionResponse;
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

  fromJSON(_: any): MsgCreateFixedPriceAuctionResponse {
    const message = {
      ...baseMsgCreateFixedPriceAuctionResponse,
    } as MsgCreateFixedPriceAuctionResponse;
    return message;
  },

  toJSON(_: MsgCreateFixedPriceAuctionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateFixedPriceAuctionResponse>
  ): MsgCreateFixedPriceAuctionResponse {
    const message = {
      ...baseMsgCreateFixedPriceAuctionResponse,
    } as MsgCreateFixedPriceAuctionResponse;
    return message;
  },
};

const baseMsgCreateEnglishAuction: object = {
  auctioneer: "",
  start_price: "",
  paying_coin_denom: "",
  maximum_bid_price: "",
  extend_rate: "",
};

export const MsgCreateEnglishAuction = {
  encode(
    message: MsgCreateEnglishAuction,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.auctioneer !== "") {
      writer.uint32(10).string(message.auctioneer);
    }
    if (message.start_price !== "") {
      writer.uint32(18).string(message.start_price);
    }
    if (message.selling_coin !== undefined) {
      Coin.encode(message.selling_coin, writer.uint32(26).fork()).ldelim();
    }
    if (message.paying_coin_denom !== "") {
      writer.uint32(34).string(message.paying_coin_denom);
    }
    for (const v of message.vesting_schedules) {
      VestingSchedule.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.maximum_bid_price !== "") {
      writer.uint32(50).string(message.maximum_bid_price);
    }
    if (message.extend_rate !== "") {
      writer.uint32(58).string(message.extend_rate);
    }
    if (message.start_time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.start_time),
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.end_time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.end_time),
        writer.uint32(74).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateEnglishAuction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateEnglishAuction,
    } as MsgCreateEnglishAuction;
    message.vesting_schedules = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctioneer = reader.string();
          break;
        case 2:
          message.start_price = reader.string();
          break;
        case 3:
          message.selling_coin = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.paying_coin_denom = reader.string();
          break;
        case 5:
          message.vesting_schedules.push(
            VestingSchedule.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.maximum_bid_price = reader.string();
          break;
        case 7:
          message.extend_rate = reader.string();
          break;
        case 8:
          message.start_time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.end_time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateEnglishAuction {
    const message = {
      ...baseMsgCreateEnglishAuction,
    } as MsgCreateEnglishAuction;
    message.vesting_schedules = [];
    if (object.auctioneer !== undefined && object.auctioneer !== null) {
      message.auctioneer = String(object.auctioneer);
    } else {
      message.auctioneer = "";
    }
    if (object.start_price !== undefined && object.start_price !== null) {
      message.start_price = String(object.start_price);
    } else {
      message.start_price = "";
    }
    if (object.selling_coin !== undefined && object.selling_coin !== null) {
      message.selling_coin = Coin.fromJSON(object.selling_coin);
    } else {
      message.selling_coin = undefined;
    }
    if (
      object.paying_coin_denom !== undefined &&
      object.paying_coin_denom !== null
    ) {
      message.paying_coin_denom = String(object.paying_coin_denom);
    } else {
      message.paying_coin_denom = "";
    }
    if (
      object.vesting_schedules !== undefined &&
      object.vesting_schedules !== null
    ) {
      for (const e of object.vesting_schedules) {
        message.vesting_schedules.push(VestingSchedule.fromJSON(e));
      }
    }
    if (
      object.maximum_bid_price !== undefined &&
      object.maximum_bid_price !== null
    ) {
      message.maximum_bid_price = String(object.maximum_bid_price);
    } else {
      message.maximum_bid_price = "";
    }
    if (object.extend_rate !== undefined && object.extend_rate !== null) {
      message.extend_rate = String(object.extend_rate);
    } else {
      message.extend_rate = "";
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.start_time = fromJsonTimestamp(object.start_time);
    } else {
      message.start_time = undefined;
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.end_time = fromJsonTimestamp(object.end_time);
    } else {
      message.end_time = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateEnglishAuction): unknown {
    const obj: any = {};
    message.auctioneer !== undefined && (obj.auctioneer = message.auctioneer);
    message.start_price !== undefined &&
      (obj.start_price = message.start_price);
    message.selling_coin !== undefined &&
      (obj.selling_coin = message.selling_coin
        ? Coin.toJSON(message.selling_coin)
        : undefined);
    message.paying_coin_denom !== undefined &&
      (obj.paying_coin_denom = message.paying_coin_denom);
    if (message.vesting_schedules) {
      obj.vesting_schedules = message.vesting_schedules.map((e) =>
        e ? VestingSchedule.toJSON(e) : undefined
      );
    } else {
      obj.vesting_schedules = [];
    }
    message.maximum_bid_price !== undefined &&
      (obj.maximum_bid_price = message.maximum_bid_price);
    message.extend_rate !== undefined &&
      (obj.extend_rate = message.extend_rate);
    message.start_time !== undefined &&
      (obj.start_time =
        message.start_time !== undefined
          ? message.start_time.toISOString()
          : null);
    message.end_time !== undefined &&
      (obj.end_time =
        message.end_time !== undefined ? message.end_time.toISOString() : null);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateEnglishAuction>
  ): MsgCreateEnglishAuction {
    const message = {
      ...baseMsgCreateEnglishAuction,
    } as MsgCreateEnglishAuction;
    message.vesting_schedules = [];
    if (object.auctioneer !== undefined && object.auctioneer !== null) {
      message.auctioneer = object.auctioneer;
    } else {
      message.auctioneer = "";
    }
    if (object.start_price !== undefined && object.start_price !== null) {
      message.start_price = object.start_price;
    } else {
      message.start_price = "";
    }
    if (object.selling_coin !== undefined && object.selling_coin !== null) {
      message.selling_coin = Coin.fromPartial(object.selling_coin);
    } else {
      message.selling_coin = undefined;
    }
    if (
      object.paying_coin_denom !== undefined &&
      object.paying_coin_denom !== null
    ) {
      message.paying_coin_denom = object.paying_coin_denom;
    } else {
      message.paying_coin_denom = "";
    }
    if (
      object.vesting_schedules !== undefined &&
      object.vesting_schedules !== null
    ) {
      for (const e of object.vesting_schedules) {
        message.vesting_schedules.push(VestingSchedule.fromPartial(e));
      }
    }
    if (
      object.maximum_bid_price !== undefined &&
      object.maximum_bid_price !== null
    ) {
      message.maximum_bid_price = object.maximum_bid_price;
    } else {
      message.maximum_bid_price = "";
    }
    if (object.extend_rate !== undefined && object.extend_rate !== null) {
      message.extend_rate = object.extend_rate;
    } else {
      message.extend_rate = "";
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.start_time = object.start_time;
    } else {
      message.start_time = undefined;
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.end_time = object.end_time;
    } else {
      message.end_time = undefined;
    }
    return message;
  },
};

const baseMsgCreateEnglishAuctionResponse: object = {};

export const MsgCreateEnglishAuctionResponse = {
  encode(
    _: MsgCreateEnglishAuctionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateEnglishAuctionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateEnglishAuctionResponse,
    } as MsgCreateEnglishAuctionResponse;
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

  fromJSON(_: any): MsgCreateEnglishAuctionResponse {
    const message = {
      ...baseMsgCreateEnglishAuctionResponse,
    } as MsgCreateEnglishAuctionResponse;
    return message;
  },

  toJSON(_: MsgCreateEnglishAuctionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateEnglishAuctionResponse>
  ): MsgCreateEnglishAuctionResponse {
    const message = {
      ...baseMsgCreateEnglishAuctionResponse,
    } as MsgCreateEnglishAuctionResponse;
    return message;
  },
};

const baseMsgCancelAuction: object = { auctioneer: "", auction_id: 0 };

export const MsgCancelAuction = {
  encode(message: MsgCancelAuction, writer: Writer = Writer.create()): Writer {
    if (message.auctioneer !== "") {
      writer.uint32(10).string(message.auctioneer);
    }
    if (message.auction_id !== 0) {
      writer.uint32(16).uint64(message.auction_id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCancelAuction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCancelAuction } as MsgCancelAuction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctioneer = reader.string();
          break;
        case 2:
          message.auction_id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelAuction {
    const message = { ...baseMsgCancelAuction } as MsgCancelAuction;
    if (object.auctioneer !== undefined && object.auctioneer !== null) {
      message.auctioneer = String(object.auctioneer);
    } else {
      message.auctioneer = "";
    }
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auction_id = Number(object.auction_id);
    } else {
      message.auction_id = 0;
    }
    return message;
  },

  toJSON(message: MsgCancelAuction): unknown {
    const obj: any = {};
    message.auctioneer !== undefined && (obj.auctioneer = message.auctioneer);
    message.auction_id !== undefined && (obj.auction_id = message.auction_id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCancelAuction>): MsgCancelAuction {
    const message = { ...baseMsgCancelAuction } as MsgCancelAuction;
    if (object.auctioneer !== undefined && object.auctioneer !== null) {
      message.auctioneer = object.auctioneer;
    } else {
      message.auctioneer = "";
    }
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auction_id = object.auction_id;
    } else {
      message.auction_id = 0;
    }
    return message;
  },
};

const baseMsgCancelAuctionResponse: object = {};

export const MsgCancelAuctionResponse = {
  encode(
    _: MsgCancelAuctionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCancelAuctionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCancelAuctionResponse,
    } as MsgCancelAuctionResponse;
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

  fromJSON(_: any): MsgCancelAuctionResponse {
    const message = {
      ...baseMsgCancelAuctionResponse,
    } as MsgCancelAuctionResponse;
    return message;
  },

  toJSON(_: MsgCancelAuctionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCancelAuctionResponse>
  ): MsgCancelAuctionResponse {
    const message = {
      ...baseMsgCancelAuctionResponse,
    } as MsgCancelAuctionResponse;
    return message;
  },
};

const baseMsgPlaceBid: object = { auction_id: 0, bidder: "", price: "" };

export const MsgPlaceBid = {
  encode(message: MsgPlaceBid, writer: Writer = Writer.create()): Writer {
    if (message.auction_id !== 0) {
      writer.uint32(8).uint64(message.auction_id);
    }
    if (message.bidder !== "") {
      writer.uint32(18).string(message.bidder);
    }
    if (message.price !== "") {
      writer.uint32(26).string(message.price);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgPlaceBid {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPlaceBid } as MsgPlaceBid;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auction_id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.bidder = reader.string();
          break;
        case 3:
          message.price = reader.string();
          break;
        case 4:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPlaceBid {
    const message = { ...baseMsgPlaceBid } as MsgPlaceBid;
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auction_id = Number(object.auction_id);
    } else {
      message.auction_id = 0;
    }
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = String(object.bidder);
    } else {
      message.bidder = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = String(object.price);
    } else {
      message.price = "";
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromJSON(object.coin);
    } else {
      message.coin = undefined;
    }
    return message;
  },

  toJSON(message: MsgPlaceBid): unknown {
    const obj: any = {};
    message.auction_id !== undefined && (obj.auction_id = message.auction_id);
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.price !== undefined && (obj.price = message.price);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgPlaceBid>): MsgPlaceBid {
    const message = { ...baseMsgPlaceBid } as MsgPlaceBid;
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auction_id = object.auction_id;
    } else {
      message.auction_id = 0;
    }
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = object.bidder;
    } else {
      message.bidder = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = "";
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromPartial(object.coin);
    } else {
      message.coin = undefined;
    }
    return message;
  },
};

const baseMsgPlaceBidResponse: object = {};

export const MsgPlaceBidResponse = {
  encode(_: MsgPlaceBidResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgPlaceBidResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPlaceBidResponse } as MsgPlaceBidResponse;
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

  fromJSON(_: any): MsgPlaceBidResponse {
    const message = { ...baseMsgPlaceBidResponse } as MsgPlaceBidResponse;
    return message;
  },

  toJSON(_: MsgPlaceBidResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgPlaceBidResponse>): MsgPlaceBidResponse {
    const message = { ...baseMsgPlaceBidResponse } as MsgPlaceBidResponse;
    return message;
  },
};

const baseMsgAddAllowedBidder: object = { auction_id: 0 };

export const MsgAddAllowedBidder = {
  encode(
    message: MsgAddAllowedBidder,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.auction_id !== 0) {
      writer.uint32(8).uint64(message.auction_id);
    }
    if (message.allowed_bidder !== undefined) {
      AllowedBidder.encode(
        message.allowed_bidder,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddAllowedBidder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddAllowedBidder } as MsgAddAllowedBidder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auction_id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.allowed_bidder = AllowedBidder.decode(
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

  fromJSON(object: any): MsgAddAllowedBidder {
    const message = { ...baseMsgAddAllowedBidder } as MsgAddAllowedBidder;
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auction_id = Number(object.auction_id);
    } else {
      message.auction_id = 0;
    }
    if (object.allowed_bidder !== undefined && object.allowed_bidder !== null) {
      message.allowed_bidder = AllowedBidder.fromJSON(object.allowed_bidder);
    } else {
      message.allowed_bidder = undefined;
    }
    return message;
  },

  toJSON(message: MsgAddAllowedBidder): unknown {
    const obj: any = {};
    message.auction_id !== undefined && (obj.auction_id = message.auction_id);
    message.allowed_bidder !== undefined &&
      (obj.allowed_bidder = message.allowed_bidder
        ? AllowedBidder.toJSON(message.allowed_bidder)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddAllowedBidder>): MsgAddAllowedBidder {
    const message = { ...baseMsgAddAllowedBidder } as MsgAddAllowedBidder;
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auction_id = object.auction_id;
    } else {
      message.auction_id = 0;
    }
    if (object.allowed_bidder !== undefined && object.allowed_bidder !== null) {
      message.allowed_bidder = AllowedBidder.fromPartial(object.allowed_bidder);
    } else {
      message.allowed_bidder = undefined;
    }
    return message;
  },
};

const baseMsgAddAllowedBidderResponse: object = {};

export const MsgAddAllowedBidderResponse = {
  encode(
    _: MsgAddAllowedBidderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAddAllowedBidderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddAllowedBidderResponse,
    } as MsgAddAllowedBidderResponse;
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

  fromJSON(_: any): MsgAddAllowedBidderResponse {
    const message = {
      ...baseMsgAddAllowedBidderResponse,
    } as MsgAddAllowedBidderResponse;
    return message;
  },

  toJSON(_: MsgAddAllowedBidderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAddAllowedBidderResponse>
  ): MsgAddAllowedBidderResponse {
    const message = {
      ...baseMsgAddAllowedBidderResponse,
    } as MsgAddAllowedBidderResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /**
   * CreateFixedPriceAuction defines a method to create a FixedPrice auction
   * message.
   */
  CreateFixedPriceAuction(
    request: MsgCreateFixedPriceAuction
  ): Promise<MsgCreateFixedPriceAuctionResponse>;
  /** CreateEnglishAuction defines a method to create an English auction message */
  CreateEnglishAuction(
    request: MsgCreateEnglishAuction
  ): Promise<MsgCreateEnglishAuctionResponse>;
  /** CancelAuction defines a method to cancel the auction message. */
  CancelAuction(request: MsgCancelAuction): Promise<MsgCancelAuctionResponse>;
  /** PlaceBid defines a method to place a bid message. */
  PlaceBid(request: MsgPlaceBid): Promise<MsgPlaceBidResponse>;
  /**
   * AddAllowedBidder defines a method sto add a single allowed bidder message.
   * This is for the testing purpose and it must not be used in mainnet.
   */
  AddAllowedBidder(
    request: MsgAddAllowedBidder
  ): Promise<MsgAddAllowedBidderResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateFixedPriceAuction(
    request: MsgCreateFixedPriceAuction
  ): Promise<MsgCreateFixedPriceAuctionResponse> {
    const data = MsgCreateFixedPriceAuction.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.fundraising.Msg",
      "CreateFixedPriceAuction",
      data
    );
    return promise.then((data) =>
      MsgCreateFixedPriceAuctionResponse.decode(new Reader(data))
    );
  }

  CreateEnglishAuction(
    request: MsgCreateEnglishAuction
  ): Promise<MsgCreateEnglishAuctionResponse> {
    const data = MsgCreateEnglishAuction.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.fundraising.Msg",
      "CreateEnglishAuction",
      data
    );
    return promise.then((data) =>
      MsgCreateEnglishAuctionResponse.decode(new Reader(data))
    );
  }

  CancelAuction(request: MsgCancelAuction): Promise<MsgCancelAuctionResponse> {
    const data = MsgCancelAuction.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.fundraising.Msg",
      "CancelAuction",
      data
    );
    return promise.then((data) =>
      MsgCancelAuctionResponse.decode(new Reader(data))
    );
  }

  PlaceBid(request: MsgPlaceBid): Promise<MsgPlaceBidResponse> {
    const data = MsgPlaceBid.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.fundraising.Msg",
      "PlaceBid",
      data
    );
    return promise.then((data) => MsgPlaceBidResponse.decode(new Reader(data)));
  }

  AddAllowedBidder(
    request: MsgAddAllowedBidder
  ): Promise<MsgAddAllowedBidderResponse> {
    const data = MsgAddAllowedBidder.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.fundraising.Msg",
      "AddAllowedBidder",
      data
    );
    return promise.then((data) =>
      MsgAddAllowedBidderResponse.decode(new Reader(data))
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
