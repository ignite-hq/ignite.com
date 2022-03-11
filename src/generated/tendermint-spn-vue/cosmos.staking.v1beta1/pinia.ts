// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { defineStore } from 'pinia'

import {
  StakeAuthorization,
  StakeAuthorization_Validators,
  LastValidatorPower,
  HistoricalInfo,
  CommissionRates,
  Commission,
  Description,
  Validator,
  ValAddresses,
  DVPair,
  DVPairs,
  DVVTriplet,
  DVVTriplets,
  Delegation,
  UnbondingDelegation,
  UnbondingDelegationEntry,
  RedelegationEntry,
  Redelegation,
  Params,
  DelegationResponse,
  RedelegationEntryResponse,
  RedelegationResponse,
  Pool
} from 'ts-client/cosmos.staking.v1beta1/types'

type PiniaState = {
  StakeAuthorizationAll: StakeAuthorization[]
  StakeAuthorization_ValidatorsAll: StakeAuthorization_Validators[]
  LastValidatorPowerAll: LastValidatorPower[]
  HistoricalInfoAll: HistoricalInfo[]
  CommissionRatesAll: CommissionRates[]
  CommissionAll: Commission[]
  DescriptionAll: Description[]
  ValidatorAll: Validator[]
  ValAddressesAll: ValAddresses[]
  DVPairAll: DVPair[]
  DVPairsAll: DVPairs[]
  DVVTripletAll: DVVTriplet[]
  DVVTripletsAll: DVVTriplets[]
  DelegationAll: Delegation[]
  UnbondingDelegationAll: UnbondingDelegation[]
  UnbondingDelegationEntryAll: UnbondingDelegationEntry[]
  RedelegationEntryAll: RedelegationEntry[]
  RedelegationAll: Redelegation[]
  ParamsAll: Params[]
  DelegationResponseAll: DelegationResponse[]
  RedelegationEntryResponseAll: RedelegationEntryResponse[]
  RedelegationResponseAll: RedelegationResponse[]
  PoolAll: Pool[]
}

const piniaStore = {
  state: (): PiniaState => {
    return {
      StakeAuthorizationAll: [],
      StakeAuthorization_ValidatorsAll: [],
      LastValidatorPowerAll: [],
      HistoricalInfoAll: [],
      CommissionRatesAll: [],
      CommissionAll: [],
      DescriptionAll: [],
      ValidatorAll: [],
      ValAddressesAll: [],
      DVPairAll: [],
      DVPairsAll: [],
      DVVTripletAll: [],
      DVVTripletsAll: [],
      DelegationAll: [],
      UnbondingDelegationAll: [],
      UnbondingDelegationEntryAll: [],
      RedelegationEntryAll: [],
      RedelegationAll: [],
      ParamsAll: [],
      DelegationResponseAll: [],
      RedelegationEntryResponseAll: [],
      RedelegationResponseAll: [],
      PoolAll: []
    }
  }
}

const usePiniaStore = defineStore('cosmos.staking.v1beta1', piniaStore)

export { usePiniaStore, PiniaState }
