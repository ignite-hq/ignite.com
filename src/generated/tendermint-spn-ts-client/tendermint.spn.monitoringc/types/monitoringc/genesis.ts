/* eslint-disable */
import { VerifiedClientID } from '../monitoringc/verified_client_id'
import { ProviderClientID } from '../monitoringc/provider_client_id'
import { LaunchIDFromVerifiedClientID } from '../monitoringc/launch_id_from_verified_client_id'
import { LaunchIDFromChannelID } from '../monitoringc/launch_id_from_channel_id'
import { MonitoringHistory } from '../monitoringc/monitoring_history'
import { Params } from '../monitoringc/params'
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'tendermint.spn.monitoringc'

/** GenesisState defines the monitoringc module's genesis state. */
export interface GenesisState {
  port_id: string
  verifiedClientIDList: VerifiedClientID[]
  providerClientIDList: ProviderClientID[]
  launchIDFromVerifiedClientIDList: LaunchIDFromVerifiedClientID[]
  launchIDFromChannelIDList: LaunchIDFromChannelID[]
  monitoringHistoryList: MonitoringHistory[]
  /** this line is used by starport scaffolding # genesis/proto/state */
  params: Params | undefined
}

const baseGenesisState: object = { port_id: '' }

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.port_id !== '') {
      writer.uint32(10).string(message.port_id)
    }
    for (const v of message.verifiedClientIDList) {
      VerifiedClientID.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    for (const v of message.providerClientIDList) {
      ProviderClientID.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    for (const v of message.launchIDFromVerifiedClientIDList) {
      LaunchIDFromVerifiedClientID.encode(v!, writer.uint32(34).fork()).ldelim()
    }
    for (const v of message.launchIDFromChannelIDList) {
      LaunchIDFromChannelID.encode(v!, writer.uint32(42).fork()).ldelim()
    }
    for (const v of message.monitoringHistoryList) {
      MonitoringHistory.encode(v!, writer.uint32(50).fork()).ldelim()
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(58).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseGenesisState } as GenesisState
    message.verifiedClientIDList = []
    message.providerClientIDList = []
    message.launchIDFromVerifiedClientIDList = []
    message.launchIDFromChannelIDList = []
    message.monitoringHistoryList = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string()
          break
        case 2:
          message.verifiedClientIDList.push(
            VerifiedClientID.decode(reader, reader.uint32())
          )
          break
        case 3:
          message.providerClientIDList.push(
            ProviderClientID.decode(reader, reader.uint32())
          )
          break
        case 4:
          message.launchIDFromVerifiedClientIDList.push(
            LaunchIDFromVerifiedClientID.decode(reader, reader.uint32())
          )
          break
        case 5:
          message.launchIDFromChannelIDList.push(
            LaunchIDFromChannelID.decode(reader, reader.uint32())
          )
          break
        case 6:
          message.monitoringHistoryList.push(
            MonitoringHistory.decode(reader, reader.uint32())
          )
          break
        case 7:
          message.params = Params.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.verifiedClientIDList = []
    message.providerClientIDList = []
    message.launchIDFromVerifiedClientIDList = []
    message.launchIDFromChannelIDList = []
    message.monitoringHistoryList = []
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = String(object.port_id)
    } else {
      message.port_id = ''
    }
    if (
      object.verifiedClientIDList !== undefined &&
      object.verifiedClientIDList !== null
    ) {
      for (const e of object.verifiedClientIDList) {
        message.verifiedClientIDList.push(VerifiedClientID.fromJSON(e))
      }
    }
    if (
      object.providerClientIDList !== undefined &&
      object.providerClientIDList !== null
    ) {
      for (const e of object.providerClientIDList) {
        message.providerClientIDList.push(ProviderClientID.fromJSON(e))
      }
    }
    if (
      object.launchIDFromVerifiedClientIDList !== undefined &&
      object.launchIDFromVerifiedClientIDList !== null
    ) {
      for (const e of object.launchIDFromVerifiedClientIDList) {
        message.launchIDFromVerifiedClientIDList.push(
          LaunchIDFromVerifiedClientID.fromJSON(e)
        )
      }
    }
    if (
      object.launchIDFromChannelIDList !== undefined &&
      object.launchIDFromChannelIDList !== null
    ) {
      for (const e of object.launchIDFromChannelIDList) {
        message.launchIDFromChannelIDList.push(
          LaunchIDFromChannelID.fromJSON(e)
        )
      }
    }
    if (
      object.monitoringHistoryList !== undefined &&
      object.monitoringHistoryList !== null
    ) {
      for (const e of object.monitoringHistoryList) {
        message.monitoringHistoryList.push(MonitoringHistory.fromJSON(e))
      }
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params)
    } else {
      message.params = undefined
    }
    return message
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    message.port_id !== undefined && (obj.port_id = message.port_id)
    if (message.verifiedClientIDList) {
      obj.verifiedClientIDList = message.verifiedClientIDList.map((e) =>
        e ? VerifiedClientID.toJSON(e) : undefined
      )
    } else {
      obj.verifiedClientIDList = []
    }
    if (message.providerClientIDList) {
      obj.providerClientIDList = message.providerClientIDList.map((e) =>
        e ? ProviderClientID.toJSON(e) : undefined
      )
    } else {
      obj.providerClientIDList = []
    }
    if (message.launchIDFromVerifiedClientIDList) {
      obj.launchIDFromVerifiedClientIDList =
        message.launchIDFromVerifiedClientIDList.map((e) =>
          e ? LaunchIDFromVerifiedClientID.toJSON(e) : undefined
        )
    } else {
      obj.launchIDFromVerifiedClientIDList = []
    }
    if (message.launchIDFromChannelIDList) {
      obj.launchIDFromChannelIDList = message.launchIDFromChannelIDList.map(
        (e) => (e ? LaunchIDFromChannelID.toJSON(e) : undefined)
      )
    } else {
      obj.launchIDFromChannelIDList = []
    }
    if (message.monitoringHistoryList) {
      obj.monitoringHistoryList = message.monitoringHistoryList.map((e) =>
        e ? MonitoringHistory.toJSON(e) : undefined
      )
    } else {
      obj.monitoringHistoryList = []
    }
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.verifiedClientIDList = []
    message.providerClientIDList = []
    message.launchIDFromVerifiedClientIDList = []
    message.launchIDFromChannelIDList = []
    message.monitoringHistoryList = []
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id
    } else {
      message.port_id = ''
    }
    if (
      object.verifiedClientIDList !== undefined &&
      object.verifiedClientIDList !== null
    ) {
      for (const e of object.verifiedClientIDList) {
        message.verifiedClientIDList.push(VerifiedClientID.fromPartial(e))
      }
    }
    if (
      object.providerClientIDList !== undefined &&
      object.providerClientIDList !== null
    ) {
      for (const e of object.providerClientIDList) {
        message.providerClientIDList.push(ProviderClientID.fromPartial(e))
      }
    }
    if (
      object.launchIDFromVerifiedClientIDList !== undefined &&
      object.launchIDFromVerifiedClientIDList !== null
    ) {
      for (const e of object.launchIDFromVerifiedClientIDList) {
        message.launchIDFromVerifiedClientIDList.push(
          LaunchIDFromVerifiedClientID.fromPartial(e)
        )
      }
    }
    if (
      object.launchIDFromChannelIDList !== undefined &&
      object.launchIDFromChannelIDList !== null
    ) {
      for (const e of object.launchIDFromChannelIDList) {
        message.launchIDFromChannelIDList.push(
          LaunchIDFromChannelID.fromPartial(e)
        )
      }
    }
    if (
      object.monitoringHistoryList !== undefined &&
      object.monitoringHistoryList !== null
    ) {
      for (const e of object.monitoringHistoryList) {
        message.monitoringHistoryList.push(MonitoringHistory.fromPartial(e))
      }
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params)
    } else {
      message.params = undefined
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
