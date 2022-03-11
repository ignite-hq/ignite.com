// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { defineStore } from 'pinia'

import {
  Chain,
  InitialGenesis,
  DefaultInitialGenesis,
  GenesisURL,
  RequestCounter,
  GenesisAccount,
  GenesisValidator,
  Peer,
  Peer_HTTPTunnel,
  Params,
  LaunchTimeRange,
  Request,
  RequestContent,
  AccountRemoval,
  ValidatorRemoval,
  VestingAccount,
  VestingOptions,
  DelayedVesting
} from 'tendermint-spn-ts-client/tendermint.spn.launch/types'

type PiniaState = {
  ChainAll: Chain[]
  InitialGenesisAll: InitialGenesis[]
  DefaultInitialGenesisAll: DefaultInitialGenesis[]
  GenesisURLAll: GenesisURL[]
  RequestCounterAll: RequestCounter[]
  GenesisAccountAll: GenesisAccount[]
  GenesisValidatorAll: GenesisValidator[]
  PeerAll: Peer[]
  Peer_HTTPTunnelAll: Peer_HTTPTunnel[]
  ParamsAll: Params[]
  LaunchTimeRangeAll: LaunchTimeRange[]
  RequestAll: Request[]
  RequestContentAll: RequestContent[]
  AccountRemovalAll: AccountRemoval[]
  ValidatorRemovalAll: ValidatorRemoval[]
  VestingAccountAll: VestingAccount[]
  VestingOptionsAll: VestingOptions[]
  DelayedVestingAll: DelayedVesting[]
}

const piniaStore = {
  state: (): PiniaState => {
    return {
      ChainAll: [],
      InitialGenesisAll: [],
      DefaultInitialGenesisAll: [],
      GenesisURLAll: [],
      RequestCounterAll: [],
      GenesisAccountAll: [],
      GenesisValidatorAll: [],
      PeerAll: [],
      Peer_HTTPTunnelAll: [],
      ParamsAll: [],
      LaunchTimeRangeAll: [],
      RequestAll: [],
      RequestContentAll: [],
      AccountRemovalAll: [],
      ValidatorRemovalAll: [],
      VestingAccountAll: [],
      VestingOptionsAll: [],
      DelayedVestingAll: []
    }
  }
}

const usePiniaStore = defineStore('tendermint.spn.launch', piniaStore)

export { usePiniaStore, PiniaState }
