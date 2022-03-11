// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Store } from "pinia";
import { usePiniaStore, PiniaState } from "./";

import { Ignite } from "tendermint-spn-ts-client";
import Module from "tendermint-spn-ts-client/tendermint.spn.reward/module";

type SendMsgSetRewardsType = typeof Module.prototype.sendMsgSetRewards;

type QueryParamsType = typeof Module.prototype.queryParams;
type QueryRewardPoolType = typeof Module.prototype.queryRewardPool;
type QueryRewardPoolAllType = typeof Module.prototype.queryRewardPoolAll;

type Response = {
  $s: Store<"tendermint.spn.reward", PiniaState, {}, {}>;
  sendMsgSetRewards: SendMsgSetRewardsType;

  queryParams: QueryParamsType;
  queryRewardPool: QueryRewardPoolType;
  queryRewardPoolAll: QueryRewardPoolAllType;
};

type Params = {
  $ignt: Ignite;
};

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore();

  let {
    sendMsgSetRewards,

    queryParams,

    queryRewardPool,

    queryRewardPoolAll,
  } = $ignt.TendermintSpnReward;

  return {
    $s,

    sendMsgSetRewards,

    queryParams,

    queryRewardPool,

    queryRewardPoolAll,
  };
}

export { useModule };
