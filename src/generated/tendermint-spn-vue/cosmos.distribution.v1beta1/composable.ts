// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Store } from 'pinia'
import { usePiniaStore, PiniaState } from './'

import { Ignite } from 'tendermint-spn-ts-client'
import Module from 'tendermint-spn-ts-client/cosmos.distribution.v1beta1/module'

type SendMsgWithdrawDelegatorRewardType =
  typeof Module.prototype.sendMsgWithdrawDelegatorReward
type SendMsgWithdrawValidatorCommissionType =
  typeof Module.prototype.sendMsgWithdrawValidatorCommission
type SendMsgSetWithdrawAddressType =
  typeof Module.prototype.sendMsgSetWithdrawAddress
type SendMsgFundCommunityPoolType =
  typeof Module.prototype.sendMsgFundCommunityPool

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
  $s: Store<'cosmos.distribution.v1beta1', PiniaState, {}, {}>
  sendMsgWithdrawDelegatorReward: SendMsgWithdrawDelegatorRewardType
  sendMsgWithdrawValidatorCommission: SendMsgWithdrawValidatorCommissionType
  sendMsgSetWithdrawAddress: SendMsgSetWithdrawAddressType
  sendMsgFundCommunityPool: SendMsgFundCommunityPoolType

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
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let {
    sendMsgWithdrawDelegatorReward,

    sendMsgWithdrawValidatorCommission,

    sendMsgSetWithdrawAddress,

    sendMsgFundCommunityPool,

    queryParams,

    queryValidatorOutstandingRewards,

    queryValidatorCommission,

    queryValidatorSlashes,

    queryDelegationRewards,

    queryDelegationTotalRewards,

    queryDelegatorValidators,

    queryDelegatorWithdrawAddress,

    queryCommunityPool
  } = $ignt.CosmosDistributionV1Beta1

  sendMsgWithdrawDelegatorReward = sendMsgWithdrawDelegatorReward.bind(
    $ignt.CosmosDistributionV1Beta1
  )

  sendMsgWithdrawValidatorCommission = sendMsgWithdrawValidatorCommission.bind(
    $ignt.CosmosDistributionV1Beta1
  )

  sendMsgSetWithdrawAddress = sendMsgSetWithdrawAddress.bind(
    $ignt.CosmosDistributionV1Beta1
  )

  sendMsgFundCommunityPool = sendMsgFundCommunityPool.bind(
    $ignt.CosmosDistributionV1Beta1
  )

  queryParams = queryParams.bind($ignt.CosmosDistributionV1Beta1)

  queryValidatorOutstandingRewards = queryValidatorOutstandingRewards.bind(
    $ignt.CosmosDistributionV1Beta1
  )

  queryValidatorCommission = queryValidatorCommission.bind(
    $ignt.CosmosDistributionV1Beta1
  )

  queryValidatorSlashes = queryValidatorSlashes.bind(
    $ignt.CosmosDistributionV1Beta1
  )

  queryDelegationRewards = queryDelegationRewards.bind(
    $ignt.CosmosDistributionV1Beta1
  )

  queryDelegationTotalRewards = queryDelegationTotalRewards.bind(
    $ignt.CosmosDistributionV1Beta1
  )

  queryDelegatorValidators = queryDelegatorValidators.bind(
    $ignt.CosmosDistributionV1Beta1
  )

  queryDelegatorWithdrawAddress = queryDelegatorWithdrawAddress.bind(
    $ignt.CosmosDistributionV1Beta1
  )

  queryCommunityPool = queryCommunityPool.bind($ignt.CosmosDistributionV1Beta1)

  return {
    $s,

    sendMsgWithdrawDelegatorReward,

    sendMsgWithdrawValidatorCommission,

    sendMsgSetWithdrawAddress,

    sendMsgFundCommunityPool,

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
