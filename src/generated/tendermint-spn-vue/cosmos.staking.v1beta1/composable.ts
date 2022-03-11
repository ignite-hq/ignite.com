// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Store } from 'pinia'
import { usePiniaStore, PiniaState } from './'

import { Ignite } from 'tendermint-spn-ts-client'
import Module from 'tendermint-spn-ts-client/cosmos.staking.v1beta1/module'

type SendMsgBeginRedelegateType = typeof Module.prototype.sendMsgBeginRedelegate
type SendMsgDelegateType = typeof Module.prototype.sendMsgDelegate
type SendMsgCreateValidatorType = typeof Module.prototype.sendMsgCreateValidator
type SendMsgEditValidatorType = typeof Module.prototype.sendMsgEditValidator
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
  $s: Store<'cosmos.staking.v1beta1', PiniaState, {}, {}>
  sendMsgBeginRedelegate: SendMsgBeginRedelegateType
  sendMsgDelegate: SendMsgDelegateType
  sendMsgCreateValidator: SendMsgCreateValidatorType
  sendMsgEditValidator: SendMsgEditValidatorType
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

type Params = {
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let {
    sendMsgBeginRedelegate,

    sendMsgDelegate,

    sendMsgCreateValidator,

    sendMsgEditValidator,

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
  } = $ignt.CosmosStakingV1Beta1

  return {
    $s,

    sendMsgBeginRedelegate,

    sendMsgDelegate,

    sendMsgCreateValidator,

    sendMsgEditValidator,

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
