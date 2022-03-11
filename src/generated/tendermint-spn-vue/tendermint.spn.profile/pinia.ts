// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { defineStore } from "pinia";

import {
  Coordinator,
  CoordinatorDescription,
  CoordinatorByAddress,
  Validator,
  ValidatorDescription,
  ValidatorByOperatorAddress,
} from "ts-client/tendermint.spn.profile/types";

type PiniaState = {
  CoordinatorAll: Coordinator[];
  CoordinatorDescriptionAll: CoordinatorDescription[];
  CoordinatorByAddressAll: CoordinatorByAddress[];
  ValidatorAll: Validator[];
  ValidatorDescriptionAll: ValidatorDescription[];
  ValidatorByOperatorAddressAll: ValidatorByOperatorAddress[];
};

const piniaStore = {
  state: (): PiniaState => {
    return {
      CoordinatorAll: [],
      CoordinatorDescriptionAll: [],
      CoordinatorByAddressAll: [],
      ValidatorAll: [],
      ValidatorDescriptionAll: [],
      ValidatorByOperatorAddressAll: [],
    };
  },
};

const usePiniaStore = defineStore("tendermint.spn.profile", piniaStore);

export { usePiniaStore, PiniaState };
