// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from "@ignt/client";
import Module from "@ignt/client/tendermint.spn.reward/module";
		
type SendMsgSetRewardsType = typeof Module.prototype.sendMsgSetRewards

type QueryParamsType = typeof Module.prototype.queryParams
type QueryRewardPoolType = typeof Module.prototype.queryRewardPool
type QueryRewardPoolAllType = typeof Module.prototype.queryRewardPoolAll


type Response = {
  sendMsgSetRewards: SendMsgSetRewardsType,
  
  queryParams: QueryParamsType
  queryRewardPool: QueryRewardPoolType
  queryRewardPoolAll: QueryRewardPoolAllType
  
}

type Params = {
  ignite: Ignite;
}

function useModule({ ignite }: Params): Response {
  let {
	
	sendMsgSetRewards,
  
  
  queryParams,
  
  queryRewardPool,
  
  queryRewardPoolAll,
  
  } = ignite.TendermintSpnReward

  
  
	sendMsgSetRewards = sendMsgSetRewards.bind(ignite.TendermintSpnReward)
  
  
  queryParams = queryParams.bind(ignite.TendermintSpnReward)
  
  queryRewardPool = queryRewardPool.bind(ignite.TendermintSpnReward)
  
  queryRewardPoolAll = queryRewardPoolAll.bind(ignite.TendermintSpnReward)
  

  return {
  
  sendMsgSetRewards,
  
  
  queryParams,
  
  queryRewardPool,
  
  queryRewardPoolAll,
  
  }
}

export { useModule }
