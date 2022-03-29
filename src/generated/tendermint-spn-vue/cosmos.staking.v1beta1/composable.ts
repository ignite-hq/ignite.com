// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from "tendermint-spn-ts-client";
import Module from "tendermint-spn-ts-client/cosmos.staking.v1beta1/module";
		
type SendMsgEditValidatorType = typeof Module.prototype.sendMsgEditValidator
type SendMsgDelegateType = typeof Module.prototype.sendMsgDelegate
type SendMsgBeginRedelegateType = typeof Module.prototype.sendMsgBeginRedelegate
type SendMsgUndelegateType = typeof Module.prototype.sendMsgUndelegate
type SendMsgCreateValidatorType = typeof Module.prototype.sendMsgCreateValidator

type QueryValidatorsType = typeof Module.prototype.queryValidators
type QueryValidatorType = typeof Module.prototype.queryValidator
type QueryValidatorDelegationsType = typeof Module.prototype.queryValidatorDelegations
type QueryValidatorUnbondingDelegationsType = typeof Module.prototype.queryValidatorUnbondingDelegations
type QueryDelegationType = typeof Module.prototype.queryDelegation
type QueryUnbondingDelegationType = typeof Module.prototype.queryUnbondingDelegation
type QueryDelegatorDelegationsType = typeof Module.prototype.queryDelegatorDelegations
type QueryDelegatorUnbondingDelegationsType = typeof Module.prototype.queryDelegatorUnbondingDelegations
type QueryRedelegationsType = typeof Module.prototype.queryRedelegations
type QueryDelegatorValidatorsType = typeof Module.prototype.queryDelegatorValidators
type QueryDelegatorValidatorType = typeof Module.prototype.queryDelegatorValidator
type QueryHistoricalInfoType = typeof Module.prototype.queryHistoricalInfo
type QueryPoolType = typeof Module.prototype.queryPool
type QueryParamsType = typeof Module.prototype.queryParams


type Response = {
  sendMsgEditValidator: SendMsgEditValidatorType,
  sendMsgDelegate: SendMsgDelegateType,
  sendMsgBeginRedelegate: SendMsgBeginRedelegateType,
  sendMsgUndelegate: SendMsgUndelegateType,
  sendMsgCreateValidator: SendMsgCreateValidatorType,
  
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
  ignite: Ignite;
}

function useModule({ ignite }: Params): Response {
  let {
	
	sendMsgEditValidator,
  
	sendMsgDelegate,
  
	sendMsgBeginRedelegate,
  
	sendMsgUndelegate,
  
	sendMsgCreateValidator,
  
  
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
  
  queryParams,
  
  } = ignite.CosmosStakingV1Beta1

  
  
	sendMsgEditValidator = sendMsgEditValidator.bind(ignite.CosmosStakingV1Beta1)
  
	sendMsgDelegate = sendMsgDelegate.bind(ignite.CosmosStakingV1Beta1)
  
	sendMsgBeginRedelegate = sendMsgBeginRedelegate.bind(ignite.CosmosStakingV1Beta1)
  
	sendMsgUndelegate = sendMsgUndelegate.bind(ignite.CosmosStakingV1Beta1)
  
	sendMsgCreateValidator = sendMsgCreateValidator.bind(ignite.CosmosStakingV1Beta1)
  
  
  queryValidators = queryValidators.bind(ignite.CosmosStakingV1Beta1)
  
  queryValidator = queryValidator.bind(ignite.CosmosStakingV1Beta1)
  
  queryValidatorDelegations = queryValidatorDelegations.bind(ignite.CosmosStakingV1Beta1)
  
  queryValidatorUnbondingDelegations = queryValidatorUnbondingDelegations.bind(ignite.CosmosStakingV1Beta1)
  
  queryDelegation = queryDelegation.bind(ignite.CosmosStakingV1Beta1)
  
  queryUnbondingDelegation = queryUnbondingDelegation.bind(ignite.CosmosStakingV1Beta1)
  
  queryDelegatorDelegations = queryDelegatorDelegations.bind(ignite.CosmosStakingV1Beta1)
  
  queryDelegatorUnbondingDelegations = queryDelegatorUnbondingDelegations.bind(ignite.CosmosStakingV1Beta1)
  
  queryRedelegations = queryRedelegations.bind(ignite.CosmosStakingV1Beta1)
  
  queryDelegatorValidators = queryDelegatorValidators.bind(ignite.CosmosStakingV1Beta1)
  
  queryDelegatorValidator = queryDelegatorValidator.bind(ignite.CosmosStakingV1Beta1)
  
  queryHistoricalInfo = queryHistoricalInfo.bind(ignite.CosmosStakingV1Beta1)
  
  queryPool = queryPool.bind(ignite.CosmosStakingV1Beta1)
  
  queryParams = queryParams.bind(ignite.CosmosStakingV1Beta1)
  

  return {
  
  sendMsgEditValidator,
  
  sendMsgDelegate,
  
  sendMsgBeginRedelegate,
  
  sendMsgUndelegate,
  
  sendMsgCreateValidator,
  
  
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
  
  queryParams,
  
  }
}

export { useModule }
