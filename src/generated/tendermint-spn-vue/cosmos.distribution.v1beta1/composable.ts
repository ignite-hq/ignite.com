// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Module from '../../tendermint-spn-ts-client/cosmos.distribution.v1beta1/module'
import useIgnite from '../useIgnite'
import { unref } from 'vue'

type SendMsgWithdrawValidatorCommissionType =
  typeof Module.prototype.sendMsgWithdrawValidatorCommission
type SendMsgFundCommunityPoolType =
  typeof Module.prototype.sendMsgFundCommunityPool
type SendMsgWithdrawDelegatorRewardType =
  typeof Module.prototype.sendMsgWithdrawDelegatorReward
type SendMsgSetWithdrawAddressType =
  typeof Module.prototype.sendMsgSetWithdrawAddress

type QueryParamsType = typeof Module.prototype.queryParams
type QueryValidatorOutstandingRewardsType =
  typeof Module.prototype.queryValidatorOutstandingRewards
type QueryValidatorCommissionType =
  typeof Module.prototype.queryValidatorCommission
type QueryValidatorSlashesType = typeof Module.prototype.queryValidatorSlashes
type QueryDelegationRewardsType = typeof Module.prototype.queryDelegationRewards
type QueryDelegationTotalRewardsType =
  typeof Module.prototype.queryDelegationTotalRewards
type QueryDelegatorValidatorsType =
  typeof Module.prototype.queryDelegatorValidators
type QueryDelegatorWithdrawAddressType =
  typeof Module.prototype.queryDelegatorWithdrawAddress
type QueryCommunityPoolType = typeof Module.prototype.queryCommunityPool

type Response = {
  sendMsgWithdrawValidatorCommission: SendMsgWithdrawValidatorCommissionType
  sendMsgFundCommunityPool: SendMsgFundCommunityPoolType
  sendMsgWithdrawDelegatorReward: SendMsgWithdrawDelegatorRewardType
  sendMsgSetWithdrawAddress: SendMsgSetWithdrawAddressType

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

function useModule(): Response {
  // ignite
  let { ignite } = useIgnite()

  let {
    sendMsgWithdrawValidatorCommission,

    sendMsgFundCommunityPool,

    sendMsgWithdrawDelegatorReward,

    sendMsgSetWithdrawAddress,

    queryParams,

    queryValidatorOutstandingRewards,

    queryValidatorCommission,

    queryValidatorSlashes,

    queryDelegationRewards,

    queryDelegationTotalRewards,

    queryDelegatorValidators,

    queryDelegatorWithdrawAddress,

    queryCommunityPool
  } = unref(ignite.cosmosDistributionV1Beta1)

  sendMsgWithdrawValidatorCommission = sendMsgWithdrawValidatorCommission.bind(
    ignite.cosmosDistributionV1Beta1
  )

  sendMsgFundCommunityPool = sendMsgFundCommunityPool.bind(
    ignite.cosmosDistributionV1Beta1
  )

  sendMsgWithdrawDelegatorReward = sendMsgWithdrawDelegatorReward.bind(
    ignite.cosmosDistributionV1Beta1
  )

  sendMsgSetWithdrawAddress = sendMsgSetWithdrawAddress.bind(
    ignite.cosmosDistributionV1Beta1
  )

  queryParams = queryParams.bind(ignite.cosmosDistributionV1Beta1)

  queryValidatorOutstandingRewards = queryValidatorOutstandingRewards.bind(
    ignite.cosmosDistributionV1Beta1
  )

  queryValidatorCommission = queryValidatorCommission.bind(
    ignite.cosmosDistributionV1Beta1
  )

  queryValidatorSlashes = queryValidatorSlashes.bind(
    ignite.cosmosDistributionV1Beta1
  )

  queryDelegationRewards = queryDelegationRewards.bind(
    ignite.cosmosDistributionV1Beta1
  )

  queryDelegationTotalRewards = queryDelegationTotalRewards.bind(
    ignite.cosmosDistributionV1Beta1
  )

  queryDelegatorValidators = queryDelegatorValidators.bind(
    ignite.cosmosDistributionV1Beta1
  )

  queryDelegatorWithdrawAddress = queryDelegatorWithdrawAddress.bind(
    ignite.cosmosDistributionV1Beta1
  )

  queryCommunityPool = queryCommunityPool.bind(ignite.cosmosDistributionV1Beta1)

  return {
    sendMsgWithdrawValidatorCommission,

    sendMsgFundCommunityPool,

    sendMsgWithdrawDelegatorReward,

    sendMsgSetWithdrawAddress,

    queryParams,

    queryValidatorOutstandingRewards,

    queryValidatorCommission,

    queryValidatorSlashes,

    queryDelegationRewards,

    queryDelegationTotalRewards,

    queryDelegatorValidators,

    queryDelegatorWithdrawAddress,

    queryCommunityPool
  }
}

export { useModule }
