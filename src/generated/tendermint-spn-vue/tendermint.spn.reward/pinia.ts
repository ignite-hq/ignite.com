// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { defineStore } from "pinia";

import { Params, RewardPool } from "ts-client/tendermint.spn.reward/types";

type PiniaState = {
  ParamsAll: Params[];
  RewardPoolAll: RewardPool[];
};

const piniaStore = {
  state: (): PiniaState => {
    return {
      ParamsAll: [],
      RewardPoolAll: [],
    };
  },
};

const usePiniaStore = defineStore("tendermint.spn.reward", piniaStore);

export { usePiniaStore, PiniaState };
