// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Module from '../../tendermint-spn-ts-client/cosmos.staking.v1beta1/module'
import useIgnite from '../useIgnite'
import { unref } from 'vue'

type SendMsgDelegateType = typeof Module.prototype.sendMsgDelegate
type SendMsgBeginRedelegateType = typeof Module.prototype.sendMsgBeginRedelegate
type SendMsgEditValidatorType = typeof Module.prototype.sendMsgEditValidator
type SendMsgCreateValidatorType = typeof Module.prototype.sendMsgCreateValidator
type SendMsgUndelegateType = typeof Module.prototype.sendMsgUndelegate

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
  sendMsgDelegate: SendMsgDelegateType
  sendMsgBeginRedelegate: SendMsgBeginRedelegateType
  sendMsgEditValidator: SendMsgEditValidatorType
  sendMsgCreateValidator: SendMsgCreateValidatorType
  sendMsgUndelegate: SendMsgUndelegateType

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

function useModule(): Response {
  // ignite
  let { ignite } = useIgnite()

  let {
    sendMsgDelegate,

    sendMsgBeginRedelegate,

    sendMsgEditValidator,

    sendMsgCreateValidator,

    sendMsgUndelegate,

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
  } = unref(ignite.cosmosStakingV1Beta1)

  sendMsgDelegate = sendMsgDelegate.bind(ignite.cosmosStakingV1Beta1)

  sendMsgBeginRedelegate = sendMsgBeginRedelegate.bind(
    ignite.cosmosStakingV1Beta1
  )

  sendMsgEditValidator = sendMsgEditValidator.bind(ignite.cosmosStakingV1Beta1)

  sendMsgCreateValidator = sendMsgCreateValidator.bind(
    ignite.cosmosStakingV1Beta1
  )

  sendMsgUndelegate = sendMsgUndelegate.bind(ignite.cosmosStakingV1Beta1)

  queryValidators = queryValidators.bind(ignite.cosmosStakingV1Beta1)

  queryValidator = queryValidator.bind(ignite.cosmosStakingV1Beta1)

  queryValidatorDelegations = queryValidatorDelegations.bind(
    ignite.cosmosStakingV1Beta1
  )

  queryValidatorUnbondingDelegations = queryValidatorUnbondingDelegations.bind(
    ignite.cosmosStakingV1Beta1
  )

  queryDelegation = queryDelegation.bind(ignite.cosmosStakingV1Beta1)

  queryUnbondingDelegation = queryUnbondingDelegation.bind(
    ignite.cosmosStakingV1Beta1
  )

  queryDelegatorDelegations = queryDelegatorDelegations.bind(
    ignite.cosmosStakingV1Beta1
  )

  queryDelegatorUnbondingDelegations = queryDelegatorUnbondingDelegations.bind(
    ignite.cosmosStakingV1Beta1
  )

  queryRedelegations = queryRedelegations.bind(ignite.cosmosStakingV1Beta1)

  queryDelegatorValidators = queryDelegatorValidators.bind(
    ignite.cosmosStakingV1Beta1
  )

  queryDelegatorValidator = queryDelegatorValidator.bind(
    ignite.cosmosStakingV1Beta1
  )

  queryHistoricalInfo = queryHistoricalInfo.bind(ignite.cosmosStakingV1Beta1)

  queryPool = queryPool.bind(ignite.cosmosStakingV1Beta1)

  queryParams = queryParams.bind(ignite.cosmosStakingV1Beta1)

  return {
    sendMsgDelegate,

    sendMsgBeginRedelegate,

    sendMsgEditValidator,

    sendMsgCreateValidator,

    sendMsgUndelegate,

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
