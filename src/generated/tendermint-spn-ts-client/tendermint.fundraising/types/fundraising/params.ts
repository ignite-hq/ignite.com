/* eslint-disable */
import { Coin } from '../cosmos/base/v1beta1/coin'
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'tendermint.fundraising'

/** Params defines the set of params for the fundraising module. */
export interface Params {
  /**
   * auction_creation_fee specifies the fee for auction creation.
   * this prevents from spamming attack and it is collected in the community
   * pool
   */
  auction_creation_fee: Coin[]
  /**
   * place_bid_fee specifies the fee for placing a bid for an auction.
   * this prevents from spamming attack and it is collected in the community
   * pool
   */
  place_bid_fee: Coin[]
  /**
   * extended_period specifies the extended period that determines how long
   * the extended auction round lasts
   */
  extended_period: number
}

const baseParams: object = { extended_period: 0 }

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    for (const v of message.auction_creation_fee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    for (const v of message.place_bid_fee) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    if (message.extended_period !== 0) {
      writer.uint32(24).uint32(message.extended_period)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseParams } as Params
    message.auction_creation_fee = []
    message.place_bid_fee = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.auction_creation_fee.push(
            Coin.decode(reader, reader.uint32())
          )
          break
        case 2:
          message.place_bid_fee.push(Coin.decode(reader, reader.uint32()))
          break
        case 3:
          message.extended_period = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params
    message.auction_creation_fee = []
    message.place_bid_fee = []
    if (
      object.auction_creation_fee !== undefined &&
      object.auction_creation_fee !== null
    ) {
      for (const e of object.auction_creation_fee) {
        message.auction_creation_fee.push(Coin.fromJSON(e))
      }
    }
    if (object.place_bid_fee !== undefined && object.place_bid_fee !== null) {
      for (const e of object.place_bid_fee) {
        message.place_bid_fee.push(Coin.fromJSON(e))
      }
    }
    if (
      object.extended_period !== undefined &&
      object.extended_period !== null
    ) {
      message.extended_period = Number(object.extended_period)
    } else {
      message.extended_period = 0
    }
    return message
  },

  toJSON(message: Params): unknown {
    const obj: any = {}
    if (message.auction_creation_fee) {
      obj.auction_creation_fee = message.auction_creation_fee.map((e) =>
        e ? Coin.toJSON(e) : undefined
      )
    } else {
      obj.auction_creation_fee = []
    }
    if (message.place_bid_fee) {
      obj.place_bid_fee = message.place_bid_fee.map((e) =>
        e ? Coin.toJSON(e) : undefined
      )
    } else {
      obj.place_bid_fee = []
    }
    message.extended_period !== undefined &&
      (obj.extended_period = message.extended_period)
    return obj
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params
    message.auction_creation_fee = []
    message.place_bid_fee = []
    if (
      object.auction_creation_fee !== undefined &&
      object.auction_creation_fee !== null
    ) {
      for (const e of object.auction_creation_fee) {
        message.auction_creation_fee.push(Coin.fromPartial(e))
      }
    }
    if (object.place_bid_fee !== undefined && object.place_bid_fee !== null) {
      for (const e of object.place_bid_fee) {
        message.place_bid_fee.push(Coin.fromPartial(e))
      }
    }
    if (
      object.extended_period !== undefined &&
      object.extended_period !== null
    ) {
      message.extended_period = object.extended_period
    } else {
      message.extended_period = 0
    }
    return message
  }
}

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>
