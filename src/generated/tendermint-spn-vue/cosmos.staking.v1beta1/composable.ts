// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Store } from 'pinia'
import { usePiniaStore, PiniaState } from './'

import { Ignite } from 'tendermint-spn-ts-client'
import Module from 'tendermint-spn-ts-client/cosmos.staking.v1beta1/module'

type SendMsgEditValidatorType = typeof Module.prototype.sendMsgEditValidator
type SendMsgDelegateType = typeof Module.prototype.sendMsgDelegate
type SendMsgCreateValidatorType = typeof Module.prototype.sendMsgCreateValidator
type SendMsgUndelegateType = typeof Module.prototype.sendMsgUndelegate
type SendMsgBeginRedelegateType = typeof Module.prototype.sendMsgBeginRedelegate

type QueryValidatorsType = typeof Module.prototype.queryValidators
type QueryValidatorType = typeof Module.prototype.queryValidator
type QueryValidatorDelegationsType =
  typeof Module.prototype.queryValidatorDelegations
type QueryValidatorUnbondingDelegationsType =
  typeof Module.prototype.queryValidatorUnbondingDelegations
type QueryDelegationType = typeof Module.prototype.queryDelegation
type QueryUnbondingDelegationType =
  typeof Module.prototype.queryUnbondingDelegation
type QueryDelegatorDelegationsType =
  typeof Module.prototype.queryDelegatorDelegations
type QueryDelegatorUnbondingDelegationsType =
  typeof Module.prototype.queryDelegatorUnbondingDelegations
type QueryRedelegationsType = typeof Module.prototype.queryRedelegations
type QueryDelegatorValidatorsType =
  typeof Module.prototype.queryDelegatorValidators
type QueryDelegatorValidatorType =
  typeof Module.prototype.queryDelegatorValidator
type QueryHistoricalInfoType = typeof Module.prototype.queryHistoricalInfo
type QueryPoolType = typeof Module.prototype.queryPool
type QueryParamsType = typeof Module.prototype.queryParams

type Response = {
  $s: Store<'cosmos.staking.v1beta1', PiniaState, {}, {}>
  sendMsgEditValidator: SendMsgEditValidatorType
  sendMsgDelegate: SendMsgDelegateType
  sendMsgCreateValidator: SendMsgCreateValidatorType
  sendMsgUndelegate: SendMsgUndelegateType
  sendMsgBeginRedelegate: SendMsgBeginRedelegateType

  queryValidators: QueryValidatorsType
  queryValidator: QueryValidatorType
  queryValidatorDelegations: QueryValidatorDelegationsType
  queryValidatorUnbondingDelegations: QueryValidatorUnbondingDelegationsType
  queryDelegation: QueryDelegationType
  queryUnbondingDelegation: QueryUnbondingDelegationType
  queryDelegatorDelegations: QueryDelegatorDelegationsType
  queryDelegatorUnbondingDelegations: QueryDelegatorUnbondingDelegationsType
  queryRedelegations: QueryRedelegationsType
  queryDelegatorValidators: QueryDelegatorValidatorsType
  queryDelegatorValidator: QueryDelegatorValidatorType
  queryHistoricalInfo: QueryHistoricalInfoType
  queryPool: QueryPoolType
  queryParams: QueryParamsType
}

type Params = {
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let {
    sendMsgEditValidator,

    sendMsgDelegate,

    sendMsgCreateValidator,

    sendMsgUndelegate,

    sendMsgBeginRedelegate,

    queryValidators,

    queryValidator,

    queryValidatorDelegations,

    queryValidatorUnbondingDelegations,

    queryDelegation,

    queryUnbondingDelegation,

    queryDelegatorDelegations,

    queryDelegatorUnbondingDelegations,

    queryRedelegations,

    queryDelegatorValidators,

    queryDelegatorValidator,

    queryHistoricalInfo,

    queryPool,

    queryParams
  } = $ignt.CosmosStakingV1Beta1

  sendMsgEditValidator = sendMsgEditValidator.bind($ignt.CosmosStakingV1Beta1)

  sendMsgDelegate = sendMsgDelegate.bind($ignt.CosmosStakingV1Beta1)

  sendMsgCreateValidator = sendMsgCreateValidator.bind(
    $ignt.CosmosStakingV1Beta1
  )

  sendMsgUndelegate = sendMsgUndelegate.bind($ignt.CosmosStakingV1Beta1)

  sendMsgBeginRedelegate = sendMsgBeginRedelegate.bind(
    $ignt.CosmosStakingV1Beta1
  )

  queryValidators = queryValidators.bind($ignt.CosmosStakingV1Beta1)

  queryValidator = queryValidator.bind($ignt.CosmosStakingV1Beta1)

  queryValidatorDelegations = queryValidatorDelegations.bind(
    $ignt.CosmosStakingV1Beta1
  )

  queryValidatorUnbondingDelegations = queryValidatorUnbondingDelegations.bind(
    $ignt.CosmosStakingV1Beta1
  )

  queryDelegation = queryDelegation.bind($ignt.CosmosStakingV1Beta1)

  queryUnbondingDelegation = queryUnbondingDelegation.bind(
    $ignt.CosmosStakingV1Beta1
  )

  queryDelegatorDelegations = queryDelegatorDelegations.bind(
    $ignt.CosmosStakingV1Beta1
  )

  queryDelegatorUnbondingDelegations = queryDelegatorUnbondingDelegations.bind(
    $ignt.CosmosStakingV1Beta1
  )

  queryRedelegations = queryRedelegations.bind($ignt.CosmosStakingV1Beta1)

  queryDelegatorValidators = queryDelegatorValidators.bind(
    $ignt.CosmosStakingV1Beta1
  )

  queryDelegatorValidator = queryDelegatorValidator.bind(
    $ignt.CosmosStakingV1Beta1
  )

  queryHistoricalInfo = queryHistoricalInfo.bind($ignt.CosmosStakingV1Beta1)

  queryPool = queryPool.bind($ignt.CosmosStakingV1Beta1)

  queryParams = queryParams.bind($ignt.CosmosStakingV1Beta1)

  return {
    $s,

    sendMsgEditValidator,

    sendMsgDelegate,

    sendMsgCreateValidator,

    sendMsgUndelegate,

    sendMsgBeginRedelegate,

    queryValidators,

    queryValidator,

    queryValidatorDelegations,

    queryValidatorUnbondingDelegations,

    queryDelegation,

    queryUnbondingDelegation,

    queryDelegatorDelegations,

    queryDelegatorUnbondingDelegations,

    queryRedelegations,

    queryDelegatorValidators,

    queryDelegatorValidator,

    queryHistoricalInfo,

    queryPool,

    queryParams
  }
}

export { useModule }
