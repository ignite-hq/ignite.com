// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from "@ignt/client";
import Module from "@ignt/client/tendermint.spn.profile/module";
		
type SendMsgAddValidatorOperatorAddressType = typeof Module.prototype.sendMsgAddValidatorOperatorAddress
type SendMsgCreateCoordinatorType = typeof Module.prototype.sendMsgCreateCoordinator
type SendMsgUpdateCoordinatorAddressType = typeof Module.prototype.sendMsgUpdateCoordinatorAddress
type SendMsgUpdateValidatorDescriptionType = typeof Module.prototype.sendMsgUpdateValidatorDescription
type SendMsgDisableCoordinatorType = typeof Module.prototype.sendMsgDisableCoordinator
type SendMsgUpdateCoordinatorDescriptionType = typeof Module.prototype.sendMsgUpdateCoordinatorDescription

type QueryValidatorType = typeof Module.prototype.queryValidator
type QueryValidatorAllType = typeof Module.prototype.queryValidatorAll
type QueryValidatorByOperatorAddressType = typeof Module.prototype.queryValidatorByOperatorAddress
type QueryCoordinatorType = typeof Module.prototype.queryCoordinator
type QueryCoordinatorAllType = typeof Module.prototype.queryCoordinatorAll
type QueryCoordinatorByAddressType = typeof Module.prototype.queryCoordinatorByAddress


type Response = {
  sendMsgAddValidatorOperatorAddress: SendMsgAddValidatorOperatorAddressType,
  sendMsgCreateCoordinator: SendMsgCreateCoordinatorType,
  sendMsgUpdateCoordinatorAddress: SendMsgUpdateCoordinatorAddressType,
  sendMsgUpdateValidatorDescription: SendMsgUpdateValidatorDescriptionType,
  sendMsgDisableCoordinator: SendMsgDisableCoordinatorType,
  sendMsgUpdateCoordinatorDescription: SendMsgUpdateCoordinatorDescriptionType,
  
  queryValidator: QueryValidatorType
  queryValidatorAll: QueryValidatorAllType
  queryValidatorByOperatorAddress: QueryValidatorByOperatorAddressType
  queryCoordinator: QueryCoordinatorType
  queryCoordinatorAll: QueryCoordinatorAllType
  queryCoordinatorByAddress: QueryCoordinatorByAddressType
  
}

type Params = {
  ignite: Ignite;
}

function useModule({ ignite }: Params): Response {
  let {
	
	sendMsgAddValidatorOperatorAddress,
  
	sendMsgCreateCoordinator,
  
	sendMsgUpdateCoordinatorAddress,
  
	sendMsgUpdateValidatorDescription,
  
	sendMsgDisableCoordinator,
  
	sendMsgUpdateCoordinatorDescription,
  
  
  queryValidator,
  
  queryValidatorAll,
  
  queryValidatorByOperatorAddress,
  
  queryCoordinator,
  
  queryCoordinatorAll,
  
  queryCoordinatorByAddress,
  
  } = ignite.TendermintSpnProfile

  
  
	sendMsgAddValidatorOperatorAddress = sendMsgAddValidatorOperatorAddress.bind(ignite.TendermintSpnProfile)
  
	sendMsgCreateCoordinator = sendMsgCreateCoordinator.bind(ignite.TendermintSpnProfile)
  
	sendMsgUpdateCoordinatorAddress = sendMsgUpdateCoordinatorAddress.bind(ignite.TendermintSpnProfile)
  
	sendMsgUpdateValidatorDescription = sendMsgUpdateValidatorDescription.bind(ignite.TendermintSpnProfile)
  
	sendMsgDisableCoordinator = sendMsgDisableCoordinator.bind(ignite.TendermintSpnProfile)
  
	sendMsgUpdateCoordinatorDescription = sendMsgUpdateCoordinatorDescription.bind(ignite.TendermintSpnProfile)
  
  
  queryValidator = queryValidator.bind(ignite.TendermintSpnProfile)
  
  queryValidatorAll = queryValidatorAll.bind(ignite.TendermintSpnProfile)
  
  queryValidatorByOperatorAddress = queryValidatorByOperatorAddress.bind(ignite.TendermintSpnProfile)
  
  queryCoordinator = queryCoordinator.bind(ignite.TendermintSpnProfile)
  
  queryCoordinatorAll = queryCoordinatorAll.bind(ignite.TendermintSpnProfile)
  
  queryCoordinatorByAddress = queryCoordinatorByAddress.bind(ignite.TendermintSpnProfile)
  

  return {
  
  sendMsgAddValidatorOperatorAddress,
  
  sendMsgCreateCoordinator,
  
  sendMsgUpdateCoordinatorAddress,
  
  sendMsgUpdateValidatorDescription,
  
  sendMsgDisableCoordinator,
  
  sendMsgUpdateCoordinatorDescription,
  
  
  queryValidator,
  
  queryValidatorAll,
  
  queryValidatorByOperatorAddress,
  
  queryCoordinator,
  
  queryCoordinatorAll,
  
  queryCoordinatorByAddress,
  
  }
}

export { useModule }
