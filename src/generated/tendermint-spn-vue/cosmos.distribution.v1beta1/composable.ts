// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from "tendermint-spn-ts-client";
import Module from "tendermint-spn-ts-client/cosmos.distribution.v1beta1/module";
		
type SendMsgWithdrawDelegatorRewardType = typeof Module.prototype.sendMsgWithdrawDelegatorReward
type SendMsgSetWithdrawAddressType = typeof Module.prototype.sendMsgSetWithdrawAddress
type SendMsgWithdrawValidatorCommissionType = typeof Module.prototype.sendMsgWithdrawValidatorCommission
type SendMsgFundCommunityPoolType = typeof Module.prototype.sendMsgFundCommunityPool

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
  sendMsgWithdrawDelegatorReward: SendMsgWithdrawDelegatorRewardType,
  sendMsgSetWithdrawAddress: SendMsgSetWithdrawAddressType,
  sendMsgWithdrawValidatorCommission: SendMsgWithdrawValidatorCommissionType,
  sendMsgFundCommunityPool: SendMsgFundCommunityPoolType,
  
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
	
	sendMsgWithdrawDelegatorReward,
  
	sendMsgSetWithdrawAddress,
  
	sendMsgWithdrawValidatorCommission,
  
	sendMsgFundCommunityPool,
  
  
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

  
  
	sendMsgWithdrawDelegatorReward = sendMsgWithdrawDelegatorReward.bind(ignite.CosmosDistributionV1Beta1)
  
	sendMsgSetWithdrawAddress = sendMsgSetWithdrawAddress.bind(ignite.CosmosDistributionV1Beta1)
  
	sendMsgWithdrawValidatorCommission = sendMsgWithdrawValidatorCommission.bind(ignite.CosmosDistributionV1Beta1)
  
	sendMsgFundCommunityPool = sendMsgFundCommunityPool.bind(ignite.CosmosDistributionV1Beta1)
  
  
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
  
  sendMsgWithdrawDelegatorReward,
  
  sendMsgSetWithdrawAddress,
  
  sendMsgWithdrawValidatorCommission,
  
  sendMsgFundCommunityPool,
  
  
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
