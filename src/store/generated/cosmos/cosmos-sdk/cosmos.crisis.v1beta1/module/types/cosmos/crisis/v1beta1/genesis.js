/* eslint-disable */
import { Coin } from '../../../cosmos/base/v1beta1/coin'
import { Writer, Reader } from 'protobufjs/minimal'
export const protobufPackage = 'cosmos.crisis.v1beta1'
const baseGenesisState = {}
export const GenesisState = {
  encode(message, writer = Writer.create()) {
    if (message.constant_fee !== undefined) {
      Coin.encode(message.constant_fee, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },
  decode(input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseGenesisState }
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 3:
          message.constant_fee = Coin.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON(object) {
    const message = { ...baseGenesisState }
    if (object.constant_fee !== undefined && object.constant_fee !== null) {
      message.constant_fee = Coin.fromJSON(object.constant_fee)
    } else {
      message.constant_fee = undefined
    }
    return message
  },
  toJSON(message) {
    const obj = {}
    message.constant_fee !== undefined &&
      (obj.constant_fee = message.constant_fee
        ? Coin.toJSON(message.constant_fee)
        : undefined)
    return obj
  },
  fromPartial(object) {
    const message = { ...baseGenesisState }
    if (object.constant_fee !== undefined && object.constant_fee !== null) {
      message.constant_fee = Coin.fromPartial(object.constant_fee)
    } else {
      message.constant_fee = undefined
    }
    return message
  }
}
