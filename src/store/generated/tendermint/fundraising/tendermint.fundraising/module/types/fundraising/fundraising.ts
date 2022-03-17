/* eslint-disable */
import { Timestamp } from "../google/protobuf/timestamp";
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "tendermint.fundraising";

/** AuctionType enumerates the valid types of an auction. */
export enum AuctionType {
  /** AUCTION_TYPE_UNSPECIFIED - AUCTION_TYPE_UNSPECIFIED defines the default auction type */
  AUCTION_TYPE_UNSPECIFIED = 0,
  /** AUCTION_TYPE_FIXED_PRICE - AUCTION_TYPE_FIXED_PRICE defines the fixed price auction type */
  AUCTION_TYPE_FIXED_PRICE = 1,
  /** AUCTION_TYPE_ENGLISH - AUCTION_TYPE_ENGLISH defines the english auction type */
  AUCTION_TYPE_ENGLISH = 2,
  UNRECOGNIZED = -1,
}

export function auctionTypeFromJSON(object: any): AuctionType {
  switch (object) {
    case 0:
    case "AUCTION_TYPE_UNSPECIFIED":
      return AuctionType.AUCTION_TYPE_UNSPECIFIED;
    case 1:
    case "AUCTION_TYPE_FIXED_PRICE":
      return AuctionType.AUCTION_TYPE_FIXED_PRICE;
    case 2:
    case "AUCTION_TYPE_ENGLISH":
      return AuctionType.AUCTION_TYPE_ENGLISH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AuctionType.UNRECOGNIZED;
  }
}

export function auctionTypeToJSON(object: AuctionType): string {
  switch (object) {
    case AuctionType.AUCTION_TYPE_UNSPECIFIED:
      return "AUCTION_TYPE_UNSPECIFIED";
    case AuctionType.AUCTION_TYPE_FIXED_PRICE:
      return "AUCTION_TYPE_FIXED_PRICE";
    case AuctionType.AUCTION_TYPE_ENGLISH:
      return "AUCTION_TYPE_ENGLISH";
    default:
      return "UNKNOWN";
  }
}

/** AuctionStatus enumerates the valid status of an auction. */
export enum AuctionStatus {
  /** AUCTION_STATUS_UNSPECIFIED - AUCTION_STATUS_UNSPECIFIED defines the default auction status */
  AUCTION_STATUS_UNSPECIFIED = 0,
  /** AUCTION_STATUS_STANDBY - AUCTION_STATUS_STANDBY defines the standby auction status */
  AUCTION_STATUS_STANDBY = 1,
  /** AUCTION_STATUS_STARTED - AUCTION_STATUS_STARTED defines the started auction status */
  AUCTION_STATUS_STARTED = 2,
  /** AUCTION_STATUS_VESTING - AUCTION_STATUS_VESTING defines the vesting auction status */
  AUCTION_STATUS_VESTING = 3,
  /** AUCTION_STATUS_FINISHED - AUCTION_STATUS_FINISHED defines the finished auction status */
  AUCTION_STATUS_FINISHED = 4,
  /** AUCTION_STATUS_CANCELLED - AUCTION_STATUS_CANCELLED defines the cancelled auction status */
  AUCTION_STATUS_CANCELLED = 5,
  UNRECOGNIZED = -1,
}

export function auctionStatusFromJSON(object: any): AuctionStatus {
  switch (object) {
    case 0:
    case "AUCTION_STATUS_UNSPECIFIED":
      return AuctionStatus.AUCTION_STATUS_UNSPECIFIED;
    case 1:
    case "AUCTION_STATUS_STANDBY":
      return AuctionStatus.AUCTION_STATUS_STANDBY;
    case 2:
    case "AUCTION_STATUS_STARTED":
      return AuctionStatus.AUCTION_STATUS_STARTED;
    case 3:
    case "AUCTION_STATUS_VESTING":
      return AuctionStatus.AUCTION_STATUS_VESTING;
    case 4:
    case "AUCTION_STATUS_FINISHED":
      return AuctionStatus.AUCTION_STATUS_FINISHED;
    case 5:
    case "AUCTION_STATUS_CANCELLED":
      return AuctionStatus.AUCTION_STATUS_CANCELLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AuctionStatus.UNRECOGNIZED;
  }
}

export function auctionStatusToJSON(object: AuctionStatus): string {
  switch (object) {
    case AuctionStatus.AUCTION_STATUS_UNSPECIFIED:
      return "AUCTION_STATUS_UNSPECIFIED";
    case AuctionStatus.AUCTION_STATUS_STANDBY:
      return "AUCTION_STATUS_STANDBY";
    case AuctionStatus.AUCTION_STATUS_STARTED:
      return "AUCTION_STATUS_STARTED";
    case AuctionStatus.AUCTION_STATUS_VESTING:
      return "AUCTION_STATUS_VESTING";
    case AuctionStatus.AUCTION_STATUS_FINISHED:
      return "AUCTION_STATUS_FINISHED";
    case AuctionStatus.AUCTION_STATUS_CANCELLED:
      return "AUCTION_STATUS_CANCELLED";
    default:
      return "UNKNOWN";
  }
}

/** AddressType enumerates the available types of a address. */
export enum AddressType {
  /** ADDRESS_TYPE_32_BYTES - the 32 bytes length address type of ADR 028. */
  ADDRESS_TYPE_32_BYTES = 0,
  /** ADDRESS_TYPE_20_BYTES - the default 20 bytes length address type. */
  ADDRESS_TYPE_20_BYTES = 1,
  UNRECOGNIZED = -1,
}

export function addressTypeFromJSON(object: any): AddressType {
  switch (object) {
    case 0:
    case "ADDRESS_TYPE_32_BYTES":
      return AddressType.ADDRESS_TYPE_32_BYTES;
    case 1:
    case "ADDRESS_TYPE_20_BYTES":
      return AddressType.ADDRESS_TYPE_20_BYTES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AddressType.UNRECOGNIZED;
  }
}

export function addressTypeToJSON(object: AddressType): string {
  switch (object) {
    case AddressType.ADDRESS_TYPE_32_BYTES:
      return "ADDRESS_TYPE_32_BYTES";
    case AddressType.ADDRESS_TYPE_20_BYTES:
      return "ADDRESS_TYPE_20_BYTES";
    default:
      return "UNKNOWN";
  }
}

/** Params defines the set of params for the fundraising module. */
export interface Params {
  /**
   * auction_creation_fee specifies the fee for fundraising creation fee.
   * this prevents from spamming attack and it is collected in the community
   * pool
   */
  auctionCreationFee: Coin[];
  /**
   * extended_period specifies the extended period that determines how long
   * the extended auction round lasts.
   */
  extendedPeriod: number;
  /**
   * fee_collector_address is the module account address to collect fees within
   * the module
   */
  feeCollectorAddress: string;
}

/**
 * BaseAuction defines a base auction type. It contains all the necessary fields
 * for basic auction functionality. Any custom auction type should extend this
 * type for additional functionality (e.g. english auction, fixed price
 * auction).
 */
export interface BaseAuction {
  /** id specifies index of the auction */
  id: number;
  /** type specifies the auction type; type 1 is fixed price and 2 is english */
  type: AuctionType;
  /**
   * allowed_bidders specifies the bidders who are allowed to bid for the
   * auction
   */
  allowedBidders: AllowedBidder[];
  /** auctioneer specifies the bech32-encoded address that creates the auction */
  auctioneer: string;
  /**
   * selling_reserve_address specifies the bech32-encoded address that has all
   * the selling coin
   */
  sellingReserveAddress: string;
  /**
   * paying_reserve_address specifies the bech32-encoded address that has all
   * the paying coin
   */
  payingReserveAddress: string;
  /**
   * start_price specifies the starting price of the auction
   * it is determined by the proportion of the price of paying coin denom
   */
  startPrice: string;
  /** selling_coin specifies the selling coin for the auction */
  sellingCoin: Coin | undefined;
  /**
   * paying_coin_denom specifies the paying coin denom that bidders use to bid
   * for
   */
  payingCoinDenom: string;
  /**
   * vesting_reserve_address specifies the bech32-encoded vesting address that
   * holds vesting amounts of coin
   */
  vestingReserveAddress: string;
  /** vesting_schedules specifies the vesting schedules for the auction */
  vestingSchedules: VestingSchedule[];
  /** winning_price specifies the winning price of the auction */
  winningPrice: string;
  /** remaining_coin specifes the remaining amount of selling coin to sell */
  remainingCoin: Coin | undefined;
  /** start_time specifies the start time of the plan */
  startTime: Date | undefined;
  /** end_times specifies the end time of the plan */
  endTimes: Date[];
  /** status specifies the auction status */
  status: AuctionStatus;
}

/**
 * FixedPriceAuction defines the fixed price auction type. It is the most
 * simpliest way to raise funds. An auctioneer sets the starting price for each
 * selling amounts of coin and bidders bid to purchase based on the fixed price.
 */
export interface FixedPriceAuction {
  baseAuction: BaseAuction | undefined;
}

/**
 * EnglishAuction defines the english auction type. It is an ascending dynamic
 * auction that an auctioneer decides the starting price of the selling amount
 * of coin and bidders bid to purchase the amounts of coin. It creates
 * competition for the price, not how fast bidders can bid.
 */
export interface EnglishAuction {
  baseAuction: BaseAuction | undefined;
  /** maximum_bid_price specifies the maximum bid price for the auction */
  maximumBidPrice: string;
  /** extended specifies a number of extended rounds */
  extended: number;
  /**
   * extend_rate specifies the rate that decides if the auction needs another
   * round
   */
  extendRate: string;
}

/** VestingSchedule defines the vesting schedule for the owner of an auction. */
export interface VestingSchedule {
  /** release_time specifies the time for distribution of the vesting coin */
  releaseTime: Date | undefined;
  /** weight specifies the vesting weight for the schedule */
  weight: string;
}

/** VestingQueue defines the vesting queue. */
export interface VestingQueue {
  /** auction_id specifes the id of the auction */
  auctionId: number;
  /** auctioneer specifies the bech32-encoded address that creates the auction */
  auctioneer: string;
  /** paying_coin specifies the paying amount of coin */
  payingCoin: Coin | undefined;
  /** release_time specifies the timestamp of the vesting schedule */
  releaseTime: Date | undefined;
  /** released specifies the status of distribution */
  released: boolean;
}

/** AllowedBidder defines an allowed bidder for the auction. */
export interface AllowedBidder {
  /** bidder specifies the bech32-encoded address that bids for the auction */
  bidder: string;
  /** max_bid_amount specifies the maximum bid amount that the bidder can bid */
  maxBidAmount: string;
}

/** Bid defines a standard bid for an auction. */
export interface Bid {
  /** auction_id specifies the id of the auction */
  auctionId: number;
  /**
   * sequence specifies a number to track first come first served based auction
   * type
   */
  sequence: number;
  /** bidder specifies the bech32-encoded address that bids for the auction */
  bidder: string;
  /** price specifies the increasing bid price is only possible */
  price: string;
  /** coin specifies the paying amount of coin that the bidder bids */
  coin: Coin | undefined;
  /** height specifies the block height of the bid */
  height: number;
  /** eligible specifies the bid that is eligible to purchase the selling coin */
  eligible: boolean;
}

const baseParams: object = { extendedPeriod: 0, feeCollectorAddress: "" };

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    for (const v of message.auctionCreationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.extendedPeriod !== 0) {
      writer.uint32(16).uint32(message.extendedPeriod);
    }
    if (message.feeCollectorAddress !== "") {
      writer.uint32(26).string(message.feeCollectorAddress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.auctionCreationFee = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.extendedPeriod = reader.uint32();
          break;
        case 3:
          message.feeCollectorAddress = reader.string();
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
    message.auctionCreationFee = [];
    if (
      object.auctionCreationFee !== undefined &&
      object.auctionCreationFee !== null
    ) {
      for (const e of object.auctionCreationFee) {
        message.auctionCreationFee.push(Coin.fromJSON(e));
      }
    }
    if (object.extendedPeriod !== undefined && object.extendedPeriod !== null) {
      message.extendedPeriod = Number(object.extendedPeriod);
    } else {
      message.extendedPeriod = 0;
    }
    if (
      object.feeCollectorAddress !== undefined &&
      object.feeCollectorAddress !== null
    ) {
      message.feeCollectorAddress = String(object.feeCollectorAddress);
    } else {
      message.feeCollectorAddress = "";
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.auctionCreationFee) {
      obj.auctionCreationFee = message.auctionCreationFee.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.auctionCreationFee = [];
    }
    message.extendedPeriod !== undefined &&
      (obj.extendedPeriod = message.extendedPeriod);
    message.feeCollectorAddress !== undefined &&
      (obj.feeCollectorAddress = message.feeCollectorAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.auctionCreationFee = [];
    if (
      object.auctionCreationFee !== undefined &&
      object.auctionCreationFee !== null
    ) {
      for (const e of object.auctionCreationFee) {
        message.auctionCreationFee.push(Coin.fromPartial(e));
      }
    }
    if (object.extendedPeriod !== undefined && object.extendedPeriod !== null) {
      message.extendedPeriod = object.extendedPeriod;
    } else {
      message.extendedPeriod = 0;
    }
    if (
      object.feeCollectorAddress !== undefined &&
      object.feeCollectorAddress !== null
    ) {
      message.feeCollectorAddress = object.feeCollectorAddress;
    } else {
      message.feeCollectorAddress = "";
    }
    return message;
  },
};

const baseBaseAuction: object = {
  id: 0,
  type: 0,
  auctioneer: "",
  sellingReserveAddress: "",
  payingReserveAddress: "",
  startPrice: "",
  payingCoinDenom: "",
  vestingReserveAddress: "",
  winningPrice: "",
  status: 0,
};

export const BaseAuction = {
  encode(message: BaseAuction, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    for (const v of message.allowedBidders) {
      AllowedBidder.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.auctioneer !== "") {
      writer.uint32(34).string(message.auctioneer);
    }
    if (message.sellingReserveAddress !== "") {
      writer.uint32(42).string(message.sellingReserveAddress);
    }
    if (message.payingReserveAddress !== "") {
      writer.uint32(50).string(message.payingReserveAddress);
    }
    if (message.startPrice !== "") {
      writer.uint32(58).string(message.startPrice);
    }
    if (message.sellingCoin !== undefined) {
      Coin.encode(message.sellingCoin, writer.uint32(66).fork()).ldelim();
    }
    if (message.payingCoinDenom !== "") {
      writer.uint32(74).string(message.payingCoinDenom);
    }
    if (message.vestingReserveAddress !== "") {
      writer.uint32(82).string(message.vestingReserveAddress);
    }
    for (const v of message.vestingSchedules) {
      VestingSchedule.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.winningPrice !== "") {
      writer.uint32(98).string(message.winningPrice);
    }
    if (message.remainingCoin !== undefined) {
      Coin.encode(message.remainingCoin, writer.uint32(106).fork()).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(114).fork()
      ).ldelim();
    }
    for (const v of message.endTimes) {
      Timestamp.encode(toTimestamp(v!), writer.uint32(122).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(128).int32(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BaseAuction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBaseAuction } as BaseAuction;
    message.allowedBidders = [];
    message.vestingSchedules = [];
    message.endTimes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.allowedBidders.push(
            AllowedBidder.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.auctioneer = reader.string();
          break;
        case 5:
          message.sellingReserveAddress = reader.string();
          break;
        case 6:
          message.payingReserveAddress = reader.string();
          break;
        case 7:
          message.startPrice = reader.string();
          break;
        case 8:
          message.sellingCoin = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.payingCoinDenom = reader.string();
          break;
        case 10:
          message.vestingReserveAddress = reader.string();
          break;
        case 11:
          message.vestingSchedules.push(
            VestingSchedule.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.winningPrice = reader.string();
          break;
        case 13:
          message.remainingCoin = Coin.decode(reader, reader.uint32());
          break;
        case 14:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 15:
          message.endTimes.push(
            fromTimestamp(Timestamp.decode(reader, reader.uint32()))
          );
          break;
        case 16:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BaseAuction {
    const message = { ...baseBaseAuction } as BaseAuction;
    message.allowedBidders = [];
    message.vestingSchedules = [];
    message.endTimes = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = auctionTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.allowedBidders !== undefined && object.allowedBidders !== null) {
      for (const e of object.allowedBidders) {
        message.allowedBidders.push(AllowedBidder.fromJSON(e));
      }
    }
    if (object.auctioneer !== undefined && object.auctioneer !== null) {
      message.auctioneer = String(object.auctioneer);
    } else {
      message.auctioneer = "";
    }
    if (
      object.sellingReserveAddress !== undefined &&
      object.sellingReserveAddress !== null
    ) {
      message.sellingReserveAddress = String(object.sellingReserveAddress);
    } else {
      message.sellingReserveAddress = "";
    }
    if (
      object.payingReserveAddress !== undefined &&
      object.payingReserveAddress !== null
    ) {
      message.payingReserveAddress = String(object.payingReserveAddress);
    } else {
      message.payingReserveAddress = "";
    }
    if (object.startPrice !== undefined && object.startPrice !== null) {
      message.startPrice = String(object.startPrice);
    } else {
      message.startPrice = "";
    }
    if (object.sellingCoin !== undefined && object.sellingCoin !== null) {
      message.sellingCoin = Coin.fromJSON(object.sellingCoin);
    } else {
      message.sellingCoin = undefined;
    }
    if (
      object.payingCoinDenom !== undefined &&
      object.payingCoinDenom !== null
    ) {
      message.payingCoinDenom = String(object.payingCoinDenom);
    } else {
      message.payingCoinDenom = "";
    }
    if (
      object.vestingReserveAddress !== undefined &&
      object.vestingReserveAddress !== null
    ) {
      message.vestingReserveAddress = String(object.vestingReserveAddress);
    } else {
      message.vestingReserveAddress = "";
    }
    if (
      object.vestingSchedules !== undefined &&
      object.vestingSchedules !== null
    ) {
      for (const e of object.vestingSchedules) {
        message.vestingSchedules.push(VestingSchedule.fromJSON(e));
      }
    }
    if (object.winningPrice !== undefined && object.winningPrice !== null) {
      message.winningPrice = String(object.winningPrice);
    } else {
      message.winningPrice = "";
    }
    if (object.remainingCoin !== undefined && object.remainingCoin !== null) {
      message.remainingCoin = Coin.fromJSON(object.remainingCoin);
    } else {
      message.remainingCoin = undefined;
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = fromJsonTimestamp(object.startTime);
    } else {
      message.startTime = undefined;
    }
    if (object.endTimes !== undefined && object.endTimes !== null) {
      for (const e of object.endTimes) {
        message.endTimes.push(fromJsonTimestamp(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = auctionStatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    return message;
  },

  toJSON(message: BaseAuction): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined && (obj.type = auctionTypeToJSON(message.type));
    if (message.allowedBidders) {
      obj.allowedBidders = message.allowedBidders.map((e) =>
        e ? AllowedBidder.toJSON(e) : undefined
      );
    } else {
      obj.allowedBidders = [];
    }
    message.auctioneer !== undefined && (obj.auctioneer = message.auctioneer);
    message.sellingReserveAddress !== undefined &&
      (obj.sellingReserveAddress = message.sellingReserveAddress);
    message.payingReserveAddress !== undefined &&
      (obj.payingReserveAddress = message.payingReserveAddress);
    message.startPrice !== undefined && (obj.startPrice = message.startPrice);
    message.sellingCoin !== undefined &&
      (obj.sellingCoin = message.sellingCoin
        ? Coin.toJSON(message.sellingCoin)
        : undefined);
    message.payingCoinDenom !== undefined &&
      (obj.payingCoinDenom = message.payingCoinDenom);
    message.vestingReserveAddress !== undefined &&
      (obj.vestingReserveAddress = message.vestingReserveAddress);
    if (message.vestingSchedules) {
      obj.vestingSchedules = message.vestingSchedules.map((e) =>
        e ? VestingSchedule.toJSON(e) : undefined
      );
    } else {
      obj.vestingSchedules = [];
    }
    message.winningPrice !== undefined &&
      (obj.winningPrice = message.winningPrice);
    message.remainingCoin !== undefined &&
      (obj.remainingCoin = message.remainingCoin
        ? Coin.toJSON(message.remainingCoin)
        : undefined);
    message.startTime !== undefined &&
      (obj.startTime =
        message.startTime !== undefined
          ? message.startTime.toISOString()
          : null);
    if (message.endTimes) {
      obj.endTimes = message.endTimes.map((e) =>
        e !== undefined ? e.toISOString() : null
      );
    } else {
      obj.endTimes = [];
    }
    message.status !== undefined &&
      (obj.status = auctionStatusToJSON(message.status));
    return obj;
  },

  fromPartial(object: DeepPartial<BaseAuction>): BaseAuction {
    const message = { ...baseBaseAuction } as BaseAuction;
    message.allowedBidders = [];
    message.vestingSchedules = [];
    message.endTimes = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.allowedBidders !== undefined && object.allowedBidders !== null) {
      for (const e of object.allowedBidders) {
        message.allowedBidders.push(AllowedBidder.fromPartial(e));
      }
    }
    if (object.auctioneer !== undefined && object.auctioneer !== null) {
      message.auctioneer = object.auctioneer;
    } else {
      message.auctioneer = "";
    }
    if (
      object.sellingReserveAddress !== undefined &&
      object.sellingReserveAddress !== null
    ) {
      message.sellingReserveAddress = object.sellingReserveAddress;
    } else {
      message.sellingReserveAddress = "";
    }
    if (
      object.payingReserveAddress !== undefined &&
      object.payingReserveAddress !== null
    ) {
      message.payingReserveAddress = object.payingReserveAddress;
    } else {
      message.payingReserveAddress = "";
    }
    if (object.startPrice !== undefined && object.startPrice !== null) {
      message.startPrice = object.startPrice;
    } else {
      message.startPrice = "";
    }
    if (object.sellingCoin !== undefined && object.sellingCoin !== null) {
      message.sellingCoin = Coin.fromPartial(object.sellingCoin);
    } else {
      message.sellingCoin = undefined;
    }
    if (
      object.payingCoinDenom !== undefined &&
      object.payingCoinDenom !== null
    ) {
      message.payingCoinDenom = object.payingCoinDenom;
    } else {
      message.payingCoinDenom = "";
    }
    if (
      object.vestingReserveAddress !== undefined &&
      object.vestingReserveAddress !== null
    ) {
      message.vestingReserveAddress = object.vestingReserveAddress;
    } else {
      message.vestingReserveAddress = "";
    }
    if (
      object.vestingSchedules !== undefined &&
      object.vestingSchedules !== null
    ) {
      for (const e of object.vestingSchedules) {
        message.vestingSchedules.push(VestingSchedule.fromPartial(e));
      }
    }
    if (object.winningPrice !== undefined && object.winningPrice !== null) {
      message.winningPrice = object.winningPrice;
    } else {
      message.winningPrice = "";
    }
    if (object.remainingCoin !== undefined && object.remainingCoin !== null) {
      message.remainingCoin = Coin.fromPartial(object.remainingCoin);
    } else {
      message.remainingCoin = undefined;
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = object.startTime;
    } else {
      message.startTime = undefined;
    }
    if (object.endTimes !== undefined && object.endTimes !== null) {
      for (const e of object.endTimes) {
        message.endTimes.push(e);
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    return message;
  },
};

const baseFixedPriceAuction: object = {};

export const FixedPriceAuction = {
  encode(message: FixedPriceAuction, writer: Writer = Writer.create()): Writer {
    if (message.baseAuction !== undefined) {
      BaseAuction.encode(
        message.baseAuction,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FixedPriceAuction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFixedPriceAuction } as FixedPriceAuction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAuction = BaseAuction.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FixedPriceAuction {
    const message = { ...baseFixedPriceAuction } as FixedPriceAuction;
    if (object.baseAuction !== undefined && object.baseAuction !== null) {
      message.baseAuction = BaseAuction.fromJSON(object.baseAuction);
    } else {
      message.baseAuction = undefined;
    }
    return message;
  },

  toJSON(message: FixedPriceAuction): unknown {
    const obj: any = {};
    message.baseAuction !== undefined &&
      (obj.baseAuction = message.baseAuction
        ? BaseAuction.toJSON(message.baseAuction)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<FixedPriceAuction>): FixedPriceAuction {
    const message = { ...baseFixedPriceAuction } as FixedPriceAuction;
    if (object.baseAuction !== undefined && object.baseAuction !== null) {
      message.baseAuction = BaseAuction.fromPartial(object.baseAuction);
    } else {
      message.baseAuction = undefined;
    }
    return message;
  },
};

const baseEnglishAuction: object = {
  maximumBidPrice: "",
  extended: 0,
  extendRate: "",
};

export const EnglishAuction = {
  encode(message: EnglishAuction, writer: Writer = Writer.create()): Writer {
    if (message.baseAuction !== undefined) {
      BaseAuction.encode(
        message.baseAuction,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.maximumBidPrice !== "") {
      writer.uint32(18).string(message.maximumBidPrice);
    }
    if (message.extended !== 0) {
      writer.uint32(24).uint32(message.extended);
    }
    if (message.extendRate !== "") {
      writer.uint32(34).string(message.extendRate);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EnglishAuction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEnglishAuction } as EnglishAuction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAuction = BaseAuction.decode(reader, reader.uint32());
          break;
        case 2:
          message.maximumBidPrice = reader.string();
          break;
        case 3:
          message.extended = reader.uint32();
          break;
        case 4:
          message.extendRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EnglishAuction {
    const message = { ...baseEnglishAuction } as EnglishAuction;
    if (object.baseAuction !== undefined && object.baseAuction !== null) {
      message.baseAuction = BaseAuction.fromJSON(object.baseAuction);
    } else {
      message.baseAuction = undefined;
    }
    if (
      object.maximumBidPrice !== undefined &&
      object.maximumBidPrice !== null
    ) {
      message.maximumBidPrice = String(object.maximumBidPrice);
    } else {
      message.maximumBidPrice = "";
    }
    if (object.extended !== undefined && object.extended !== null) {
      message.extended = Number(object.extended);
    } else {
      message.extended = 0;
    }
    if (object.extendRate !== undefined && object.extendRate !== null) {
      message.extendRate = String(object.extendRate);
    } else {
      message.extendRate = "";
    }
    return message;
  },

  toJSON(message: EnglishAuction): unknown {
    const obj: any = {};
    message.baseAuction !== undefined &&
      (obj.baseAuction = message.baseAuction
        ? BaseAuction.toJSON(message.baseAuction)
        : undefined);
    message.maximumBidPrice !== undefined &&
      (obj.maximumBidPrice = message.maximumBidPrice);
    message.extended !== undefined && (obj.extended = message.extended);
    message.extendRate !== undefined && (obj.extendRate = message.extendRate);
    return obj;
  },

  fromPartial(object: DeepPartial<EnglishAuction>): EnglishAuction {
    const message = { ...baseEnglishAuction } as EnglishAuction;
    if (object.baseAuction !== undefined && object.baseAuction !== null) {
      message.baseAuction = BaseAuction.fromPartial(object.baseAuction);
    } else {
      message.baseAuction = undefined;
    }
    if (
      object.maximumBidPrice !== undefined &&
      object.maximumBidPrice !== null
    ) {
      message.maximumBidPrice = object.maximumBidPrice;
    } else {
      message.maximumBidPrice = "";
    }
    if (object.extended !== undefined && object.extended !== null) {
      message.extended = object.extended;
    } else {
      message.extended = 0;
    }
    if (object.extendRate !== undefined && object.extendRate !== null) {
      message.extendRate = object.extendRate;
    } else {
      message.extendRate = "";
    }
    return message;
  },
};

const baseVestingSchedule: object = { weight: "" };

export const VestingSchedule = {
  encode(message: VestingSchedule, writer: Writer = Writer.create()): Writer {
    if (message.releaseTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.releaseTime),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): VestingSchedule {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVestingSchedule } as VestingSchedule;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.releaseTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VestingSchedule {
    const message = { ...baseVestingSchedule } as VestingSchedule;
    if (object.releaseTime !== undefined && object.releaseTime !== null) {
      message.releaseTime = fromJsonTimestamp(object.releaseTime);
    } else {
      message.releaseTime = undefined;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = String(object.weight);
    } else {
      message.weight = "";
    }
    return message;
  },

  toJSON(message: VestingSchedule): unknown {
    const obj: any = {};
    message.releaseTime !== undefined &&
      (obj.releaseTime =
        message.releaseTime !== undefined
          ? message.releaseTime.toISOString()
          : null);
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },

  fromPartial(object: DeepPartial<VestingSchedule>): VestingSchedule {
    const message = { ...baseVestingSchedule } as VestingSchedule;
    if (object.releaseTime !== undefined && object.releaseTime !== null) {
      message.releaseTime = object.releaseTime;
    } else {
      message.releaseTime = undefined;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    } else {
      message.weight = "";
    }
    return message;
  },
};

const baseVestingQueue: object = {
  auctionId: 0,
  auctioneer: "",
  released: false,
};

export const VestingQueue = {
  encode(message: VestingQueue, writer: Writer = Writer.create()): Writer {
    if (message.auctionId !== 0) {
      writer.uint32(8).uint64(message.auctionId);
    }
    if (message.auctioneer !== "") {
      writer.uint32(18).string(message.auctioneer);
    }
    if (message.payingCoin !== undefined) {
      Coin.encode(message.payingCoin, writer.uint32(26).fork()).ldelim();
    }
    if (message.releaseTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.releaseTime),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.released === true) {
      writer.uint32(40).bool(message.released);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): VestingQueue {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVestingQueue } as VestingQueue;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.auctioneer = reader.string();
          break;
        case 3:
          message.payingCoin = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.releaseTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.released = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VestingQueue {
    const message = { ...baseVestingQueue } as VestingQueue;
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = Number(object.auctionId);
    } else {
      message.auctionId = 0;
    }
    if (object.auctioneer !== undefined && object.auctioneer !== null) {
      message.auctioneer = String(object.auctioneer);
    } else {
      message.auctioneer = "";
    }
    if (object.payingCoin !== undefined && object.payingCoin !== null) {
      message.payingCoin = Coin.fromJSON(object.payingCoin);
    } else {
      message.payingCoin = undefined;
    }
    if (object.releaseTime !== undefined && object.releaseTime !== null) {
      message.releaseTime = fromJsonTimestamp(object.releaseTime);
    } else {
      message.releaseTime = undefined;
    }
    if (object.released !== undefined && object.released !== null) {
      message.released = Boolean(object.released);
    } else {
      message.released = false;
    }
    return message;
  },

  toJSON(message: VestingQueue): unknown {
    const obj: any = {};
    message.auctionId !== undefined && (obj.auctionId = message.auctionId);
    message.auctioneer !== undefined && (obj.auctioneer = message.auctioneer);
    message.payingCoin !== undefined &&
      (obj.payingCoin = message.payingCoin
        ? Coin.toJSON(message.payingCoin)
        : undefined);
    message.releaseTime !== undefined &&
      (obj.releaseTime =
        message.releaseTime !== undefined
          ? message.releaseTime.toISOString()
          : null);
    message.released !== undefined && (obj.released = message.released);
    return obj;
  },

  fromPartial(object: DeepPartial<VestingQueue>): VestingQueue {
    const message = { ...baseVestingQueue } as VestingQueue;
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = object.auctionId;
    } else {
      message.auctionId = 0;
    }
    if (object.auctioneer !== undefined && object.auctioneer !== null) {
      message.auctioneer = object.auctioneer;
    } else {
      message.auctioneer = "";
    }
    if (object.payingCoin !== undefined && object.payingCoin !== null) {
      message.payingCoin = Coin.fromPartial(object.payingCoin);
    } else {
      message.payingCoin = undefined;
    }
    if (object.releaseTime !== undefined && object.releaseTime !== null) {
      message.releaseTime = object.releaseTime;
    } else {
      message.releaseTime = undefined;
    }
    if (object.released !== undefined && object.released !== null) {
      message.released = object.released;
    } else {
      message.released = false;
    }
    return message;
  },
};

const baseAllowedBidder: object = { bidder: "", maxBidAmount: "" };

export const AllowedBidder = {
  encode(message: AllowedBidder, writer: Writer = Writer.create()): Writer {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    if (message.maxBidAmount !== "") {
      writer.uint32(18).string(message.maxBidAmount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AllowedBidder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAllowedBidder } as AllowedBidder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;
        case 2:
          message.maxBidAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AllowedBidder {
    const message = { ...baseAllowedBidder } as AllowedBidder;
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = String(object.bidder);
    } else {
      message.bidder = "";
    }
    if (object.maxBidAmount !== undefined && object.maxBidAmount !== null) {
      message.maxBidAmount = String(object.maxBidAmount);
    } else {
      message.maxBidAmount = "";
    }
    return message;
  },

  toJSON(message: AllowedBidder): unknown {
    const obj: any = {};
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.maxBidAmount !== undefined &&
      (obj.maxBidAmount = message.maxBidAmount);
    return obj;
  },

  fromPartial(object: DeepPartial<AllowedBidder>): AllowedBidder {
    const message = { ...baseAllowedBidder } as AllowedBidder;
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = object.bidder;
    } else {
      message.bidder = "";
    }
    if (object.maxBidAmount !== undefined && object.maxBidAmount !== null) {
      message.maxBidAmount = object.maxBidAmount;
    } else {
      message.maxBidAmount = "";
    }
    return message;
  },
};

const baseBid: object = {
  auctionId: 0,
  sequence: 0,
  bidder: "",
  price: "",
  height: 0,
  eligible: false,
};

export const Bid = {
  encode(message: Bid, writer: Writer = Writer.create()): Writer {
    if (message.auctionId !== 0) {
      writer.uint32(8).uint64(message.auctionId);
    }
    if (message.sequence !== 0) {
      writer.uint32(16).uint64(message.sequence);
    }
    if (message.bidder !== "") {
      writer.uint32(26).string(message.bidder);
    }
    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(42).fork()).ldelim();
    }
    if (message.height !== 0) {
      writer.uint32(48).uint64(message.height);
    }
    if (message.eligible === true) {
      writer.uint32(56).bool(message.eligible);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Bid {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBid } as Bid;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.sequence = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.bidder = reader.string();
          break;
        case 4:
          message.price = reader.string();
          break;
        case 5:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.height = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.eligible = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Bid {
    const message = { ...baseBid } as Bid;
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = Number(object.auctionId);
    } else {
      message.auctionId = 0;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = Number(object.sequence);
    } else {
      message.sequence = 0;
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
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.eligible !== undefined && object.eligible !== null) {
      message.eligible = Boolean(object.eligible);
    } else {
      message.eligible = false;
    }
    return message;
  },

  toJSON(message: Bid): unknown {
    const obj: any = {};
    message.auctionId !== undefined && (obj.auctionId = message.auctionId);
    message.sequence !== undefined && (obj.sequence = message.sequence);
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.price !== undefined && (obj.price = message.price);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.height !== undefined && (obj.height = message.height);
    message.eligible !== undefined && (obj.eligible = message.eligible);
    return obj;
  },

  fromPartial(object: DeepPartial<Bid>): Bid {
    const message = { ...baseBid } as Bid;
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = object.auctionId;
    } else {
      message.auctionId = 0;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = object.sequence;
    } else {
      message.sequence = 0;
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
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.eligible !== undefined && object.eligible !== null) {
      message.eligible = object.eligible;
    } else {
      message.eligible = false;
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
