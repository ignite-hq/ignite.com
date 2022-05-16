// Generated by Ignite ignite.com/cli
import { unref } from 'vue'
import Module from 'tendermint-spn-ts-client/cosmos.staking.v1beta1/module'
import useSpn from '../use'

type SendMsgUndelegateType = typeof Module.prototype.sendMsgUndelegate
type SendMsgBeginRedelegateType = typeof Module.prototype.sendMsgBeginRedelegate
type SendMsgEditValidatorType = typeof Module.prototype.sendMsgEditValidator
type SendMsgCreateValidatorType = typeof Module.prototype.sendMsgCreateValidator
type SendMsgDelegateType = typeof Module.prototype.sendMsgDelegate

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
  sendMsgUndelegate: SendMsgUndelegateType
  sendMsgBeginRedelegate: SendMsgBeginRedelegateType
  sendMsgEditValidator: SendMsgEditValidatorType
  sendMsgCreateValidator: SendMsgCreateValidatorType
  sendMsgDelegate: SendMsgDelegateType

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
  let { spn } = useSpn()

  let {
    sendMsgUndelegate,

    sendMsgBeginRedelegate,

    sendMsgEditValidator,

    sendMsgCreateValidator,

    sendMsgDelegate,

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
  } = unref(spn.cosmosStakingV1Beta1)

  sendMsgUndelegate = sendMsgUndelegate.bind(spn.cosmosStakingV1Beta1)

  sendMsgBeginRedelegate = sendMsgBeginRedelegate.bind(spn.cosmosStakingV1Beta1)

  sendMsgEditValidator = sendMsgEditValidator.bind(spn.cosmosStakingV1Beta1)

  sendMsgCreateValidator = sendMsgCreateValidator.bind(spn.cosmosStakingV1Beta1)

  sendMsgDelegate = sendMsgDelegate.bind(spn.cosmosStakingV1Beta1)

  queryValidators = queryValidators.bind(spn.cosmosStakingV1Beta1)

  queryValidator = queryValidator.bind(spn.cosmosStakingV1Beta1)

  queryValidatorDelegations = queryValidatorDelegations.bind(
    spn.cosmosStakingV1Beta1
  )

  queryValidatorUnbondingDelegations = queryValidatorUnbondingDelegations.bind(
    spn.cosmosStakingV1Beta1
  )

  queryDelegation = queryDelegation.bind(spn.cosmosStakingV1Beta1)

  queryUnbondingDelegation = queryUnbondingDelegation.bind(
    spn.cosmosStakingV1Beta1
  )

  queryDelegatorDelegations = queryDelegatorDelegations.bind(
    spn.cosmosStakingV1Beta1
  )

  queryDelegatorUnbondingDelegations = queryDelegatorUnbondingDelegations.bind(
    spn.cosmosStakingV1Beta1
  )

  queryRedelegations = queryRedelegations.bind(spn.cosmosStakingV1Beta1)

  queryDelegatorValidators = queryDelegatorValidators.bind(
    spn.cosmosStakingV1Beta1
  )

  queryDelegatorValidator = queryDelegatorValidator.bind(
    spn.cosmosStakingV1Beta1
  )

  queryHistoricalInfo = queryHistoricalInfo.bind(spn.cosmosStakingV1Beta1)

  queryPool = queryPool.bind(spn.cosmosStakingV1Beta1)

  queryParams = queryParams.bind(spn.cosmosStakingV1Beta1)

  return {
    sendMsgUndelegate,

    sendMsgBeginRedelegate,

    sendMsgEditValidator,

    sendMsgCreateValidator,

    sendMsgDelegate,

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
