// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from "@ignt/client";
import Module from "@ignt/client/cosmos.distribution.v1beta1/module";
		
type SendMsgWithdrawValidatorCommissionType = typeof Module.prototype.sendMsgWithdrawValidatorCommission
type SendMsgSetWithdrawAddressType = typeof Module.prototype.sendMsgSetWithdrawAddress
type SendMsgFundCommunityPoolType = typeof Module.prototype.sendMsgFundCommunityPool
type SendMsgWithdrawDelegatorRewardType = typeof Module.prototype.sendMsgWithdrawDelegatorReward

type QueryParamsType = typeof Module.prototype.queryParams
type QueryValidatorOutstandingRewardsType = typeof Module.prototype.queryValidatorOutstandingRewards
type QueryValidatorCommissionType = typeof Module.prototype.queryValidatorCommission
type QueryValidatorSlashesType = typeof Module.prototype.queryValidatorSlashes
type QueryDelegationRewardsType = typeof Module.prototype.queryDelegationRewards
type QueryDelegationTotalRewardsType = typeof Module.prototype.queryDelegationTotalRewards
type QueryDelegatorValidatorsType = typeof Module.prototype.queryDelegatorValidators
type QueryDelegatorWithdrawAddressType = typeof Module.prototype.queryDelegatorWithdrawAddress
type QueryCommunityPoolType = typeof Module.prototype.queryCommunityPool


type Response = {
  sendMsgWithdrawValidatorCommission: SendMsgWithdrawValidatorCommissionType,
  sendMsgSetWithdrawAddress: SendMsgSetWithdrawAddressType,
  sendMsgFundCommunityPool: SendMsgFundCommunityPoolType,
  sendMsgWithdrawDelegatorReward: SendMsgWithdrawDelegatorRewardType,
  
  queryParams: QueryParamsType
  queryValidatorOutstandingRewards: QueryValidatorOutstandingRewardsType
  queryValidatorCommission: QueryValidatorCommissionType
  queryValidatorSlashes: QueryValidatorSlashesType
  queryDelegationRewards: QueryDelegationRewardsType
  queryDelegationTotalRewards: QueryDelegationTotalRewardsType
  queryDelegatorValidators: QueryDelegatorValidatorsType
  queryDelegatorWithdrawAddress: QueryDelegatorWithdrawAddressType
  queryCommunityPool: QueryCommunityPoolType
  
}

type Params = {
  ignite: Ignite;
}

function useModule({ ignite }: Params): Response {
  let {
	
	sendMsgWithdrawValidatorCommission,
  
	sendMsgSetWithdrawAddress,
  
	sendMsgFundCommunityPool,
  
	sendMsgWithdrawDelegatorReward,
  
  
  queryParams,
  
  queryValidatorOutstandingRewards,
  
  queryValidatorCommission,
  
  queryValidatorSlashes,
  
  queryDelegationRewards,
  
  queryDelegationTotalRewards,
  
  queryDelegatorValidators,
  
  queryDelegatorWithdrawAddress,
  
  queryCommunityPool,
  
  } = ignite.CosmosDistributionV1Beta1

  
  
	sendMsgWithdrawValidatorCommission = sendMsgWithdrawValidatorCommission.bind(ignite.CosmosDistributionV1Beta1)
  
	sendMsgSetWithdrawAddress = sendMsgSetWithdrawAddress.bind(ignite.CosmosDistributionV1Beta1)
  
	sendMsgFundCommunityPool = sendMsgFundCommunityPool.bind(ignite.CosmosDistributionV1Beta1)
  
	sendMsgWithdrawDelegatorReward = sendMsgWithdrawDelegatorReward.bind(ignite.CosmosDistributionV1Beta1)
  
  
  queryParams = queryParams.bind(ignite.CosmosDistributionV1Beta1)
  
  queryValidatorOutstandingRewards = queryValidatorOutstandingRewards.bind(ignite.CosmosDistributionV1Beta1)
  
  queryValidatorCommission = queryValidatorCommission.bind(ignite.CosmosDistributionV1Beta1)
  
  queryValidatorSlashes = queryValidatorSlashes.bind(ignite.CosmosDistributionV1Beta1)
  
  queryDelegationRewards = queryDelegationRewards.bind(ignite.CosmosDistributionV1Beta1)
  
  queryDelegationTotalRewards = queryDelegationTotalRewards.bind(ignite.CosmosDistributionV1Beta1)
  
  queryDelegatorValidators = queryDelegatorValidators.bind(ignite.CosmosDistributionV1Beta1)
  
  queryDelegatorWithdrawAddress = queryDelegatorWithdrawAddress.bind(ignite.CosmosDistributionV1Beta1)
  
  queryCommunityPool = queryCommunityPool.bind(ignite.CosmosDistributionV1Beta1)
  

  return {
  
  sendMsgWithdrawValidatorCommission,
  
  sendMsgSetWithdrawAddress,
  
  sendMsgFundCommunityPool,
  
  sendMsgWithdrawDelegatorReward,
  
  
  queryParams,
  
  queryValidatorOutstandingRewards,
  
  queryValidatorCommission,
  
  queryValidatorSlashes,
  
  queryDelegationRewards,
  
  queryDelegationTotalRewards,
  
  queryDelegatorValidators,
  
  queryDelegatorWithdrawAddress,
  
  queryCommunityPool,
  
  }
}

export { useModule }
