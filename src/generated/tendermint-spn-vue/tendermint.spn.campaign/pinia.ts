// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { defineStore } from 'pinia'

import {
  Campaign,
  CampaignChains,
  MainnetAccount,
  MainnetVestingAccount,
  ShareVestingOptions,
  ShareDelayedVesting,
  Params,
  TotalSupplyRange
} from 'ts-client/tendermint.spn.campaign/types'

type PiniaState = {
  CampaignAll: Campaign[]
  CampaignChainsAll: CampaignChains[]
  MainnetAccountAll: MainnetAccount[]
  MainnetVestingAccountAll: MainnetVestingAccount[]
  ShareVestingOptionsAll: ShareVestingOptions[]
  ShareDelayedVestingAll: ShareDelayedVesting[]
  ParamsAll: Params[]
  TotalSupplyRangeAll: TotalSupplyRange[]
}

const piniaStore = {
  state: (): PiniaState => {
    return {
      CampaignAll: [],
      CampaignChainsAll: [],
      MainnetAccountAll: [],
      MainnetVestingAccountAll: [],
      ShareVestingOptionsAll: [],
      ShareDelayedVestingAll: [],
      ParamsAll: [],
      TotalSupplyRangeAll: []
    }
  }
}

const usePiniaStore = defineStore('tendermint.spn.campaign', piniaStore)

export { usePiniaStore, PiniaState }
