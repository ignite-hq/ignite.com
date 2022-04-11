// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Module from '../../tendermint-spn-ts-client/tendermint.spn.reward/module'
import useIgnite from '../useIgnite'
import { unref } from 'vue'

type SendMsgSetRewardsType = typeof Module.prototype.sendMsgSetRewards

type QueryRewardPoolType = typeof Module.prototype.queryRewardPool
type QueryRewardPoolAllType = typeof Module.prototype.queryRewardPoolAll
type QueryParamsType = typeof Module.prototype.queryParams

type Response = {
  sendMsgSetRewards: SendMsgSetRewardsType

  queryRewardPool: QueryRewardPoolType
  queryRewardPoolAll: QueryRewardPoolAllType
  queryParams: QueryParamsType
}

function useModule(): Response {
  // ignite
  let { ignite } = useIgnite()

  let {
    sendMsgSetRewards,

    queryRewardPool,

    queryRewardPoolAll,

    queryParams
  } = unref(ignite.tendermintSpnReward)

  sendMsgSetRewards = sendMsgSetRewards.bind(ignite.tendermintSpnReward)

  queryRewardPool = queryRewardPool.bind(ignite.tendermintSpnReward)

  queryRewardPoolAll = queryRewardPoolAll.bind(ignite.tendermintSpnReward)

  queryParams = queryParams.bind(ignite.tendermintSpnReward)

  return {
    sendMsgSetRewards,

    queryRewardPool,

    queryRewardPoolAll,

    queryParams
  }
}

export { useModule }
