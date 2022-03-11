// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { defineStore } from 'pinia'

import {
  LaunchIDFromChannelID,
  LaunchIDFromVerifiedClientID,
  MonitoringHistory,
  Params,
  ProviderClientID,
  VerifiedClientID
} from 'ts-client/tendermint.spn.monitoringc/types'

type PiniaState = {
  LaunchIDFromChannelIDAll: LaunchIDFromChannelID[]
  LaunchIDFromVerifiedClientIDAll: LaunchIDFromVerifiedClientID[]
  MonitoringHistoryAll: MonitoringHistory[]
  ParamsAll: Params[]
  ProviderClientIDAll: ProviderClientID[]
  VerifiedClientIDAll: VerifiedClientID[]
}

const piniaStore = {
  state: (): PiniaState => {
    return {
      LaunchIDFromChannelIDAll: [],
      LaunchIDFromVerifiedClientIDAll: [],
      MonitoringHistoryAll: [],
      ParamsAll: [],
      ProviderClientIDAll: [],
      VerifiedClientIDAll: []
    }
  }
}

const usePiniaStore = defineStore('tendermint.spn.monitoringc', piniaStore)

export { usePiniaStore, PiniaState }
