// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from "@ignt/client";
import Module from "@ignt/client/tendermint.spn.launch/module";
		
type SendMsgRevertLaunchType = typeof Module.prototype.sendMsgRevertLaunch
type SendMsgRequestAddValidatorType = typeof Module.prototype.sendMsgRequestAddValidator
type SendMsgRequestRemoveValidatorType = typeof Module.prototype.sendMsgRequestRemoveValidator
type SendMsgCreateChainType = typeof Module.prototype.sendMsgCreateChain
type SendMsgRequestAddAccountType = typeof Module.prototype.sendMsgRequestAddAccount
type SendMsgTriggerLaunchType = typeof Module.prototype.sendMsgTriggerLaunch
type SendMsgRequestRemoveAccountType = typeof Module.prototype.sendMsgRequestRemoveAccount
type SendMsgRequestAddVestingAccountType = typeof Module.prototype.sendMsgRequestAddVestingAccount
type SendMsgUpdateLaunchInformationType = typeof Module.prototype.sendMsgUpdateLaunchInformation
type SendMsgEditChainType = typeof Module.prototype.sendMsgEditChain
type SendMsgSettleRequestType = typeof Module.prototype.sendMsgSettleRequest

type QueryChainType = typeof Module.prototype.queryChain
type QueryChainAllType = typeof Module.prototype.queryChainAll
type QueryGenesisAccountType = typeof Module.prototype.queryGenesisAccount
type QueryGenesisAccountAllType = typeof Module.prototype.queryGenesisAccountAll
type QueryVestingAccountType = typeof Module.prototype.queryVestingAccount
type QueryVestingAccountAllType = typeof Module.prototype.queryVestingAccountAll
type QueryGenesisValidatorType = typeof Module.prototype.queryGenesisValidator
type QueryGenesisValidatorAllType = typeof Module.prototype.queryGenesisValidatorAll
type QueryRequestType = typeof Module.prototype.queryRequest
type QueryRequestAllType = typeof Module.prototype.queryRequestAll
type QueryParamsType = typeof Module.prototype.queryParams


type Response = {
  sendMsgRevertLaunch: SendMsgRevertLaunchType,
  sendMsgRequestAddValidator: SendMsgRequestAddValidatorType,
  sendMsgRequestRemoveValidator: SendMsgRequestRemoveValidatorType,
  sendMsgCreateChain: SendMsgCreateChainType,
  sendMsgRequestAddAccount: SendMsgRequestAddAccountType,
  sendMsgTriggerLaunch: SendMsgTriggerLaunchType,
  sendMsgRequestRemoveAccount: SendMsgRequestRemoveAccountType,
  sendMsgRequestAddVestingAccount: SendMsgRequestAddVestingAccountType,
  sendMsgUpdateLaunchInformation: SendMsgUpdateLaunchInformationType,
  sendMsgEditChain: SendMsgEditChainType,
  sendMsgSettleRequest: SendMsgSettleRequestType,
  
  queryChain: QueryChainType
  queryChainAll: QueryChainAllType
  queryGenesisAccount: QueryGenesisAccountType
  queryGenesisAccountAll: QueryGenesisAccountAllType
  queryVestingAccount: QueryVestingAccountType
  queryVestingAccountAll: QueryVestingAccountAllType
  queryGenesisValidator: QueryGenesisValidatorType
  queryGenesisValidatorAll: QueryGenesisValidatorAllType
  queryRequest: QueryRequestType
  queryRequestAll: QueryRequestAllType
  queryParams: QueryParamsType
  
}

type Params = {
  ignite: Ignite;
}

function useModule({ ignite }: Params): Response {
  let {
	
	sendMsgRevertLaunch,
  
	sendMsgRequestAddValidator,
  
	sendMsgRequestRemoveValidator,
  
	sendMsgCreateChain,
  
	sendMsgRequestAddAccount,
  
	sendMsgTriggerLaunch,
  
	sendMsgRequestRemoveAccount,
  
	sendMsgRequestAddVestingAccount,
  
	sendMsgUpdateLaunchInformation,
  
	sendMsgEditChain,
  
	sendMsgSettleRequest,
  
  
  queryChain,
  
  queryChainAll,
  
  queryGenesisAccount,
  
  queryGenesisAccountAll,
  
  queryVestingAccount,
  
  queryVestingAccountAll,
  
  queryGenesisValidator,
  
  queryGenesisValidatorAll,
  
  queryRequest,
  
  queryRequestAll,
  
  queryParams,
  
  } = ignite.TendermintSpnLaunch

  
  
	sendMsgRevertLaunch = sendMsgRevertLaunch.bind(ignite.TendermintSpnLaunch)
  
	sendMsgRequestAddValidator = sendMsgRequestAddValidator.bind(ignite.TendermintSpnLaunch)
  
	sendMsgRequestRemoveValidator = sendMsgRequestRemoveValidator.bind(ignite.TendermintSpnLaunch)
  
	sendMsgCreateChain = sendMsgCreateChain.bind(ignite.TendermintSpnLaunch)
  
	sendMsgRequestAddAccount = sendMsgRequestAddAccount.bind(ignite.TendermintSpnLaunch)
  
	sendMsgTriggerLaunch = sendMsgTriggerLaunch.bind(ignite.TendermintSpnLaunch)
  
	sendMsgRequestRemoveAccount = sendMsgRequestRemoveAccount.bind(ignite.TendermintSpnLaunch)
  
	sendMsgRequestAddVestingAccount = sendMsgRequestAddVestingAccount.bind(ignite.TendermintSpnLaunch)
  
	sendMsgUpdateLaunchInformation = sendMsgUpdateLaunchInformation.bind(ignite.TendermintSpnLaunch)
  
	sendMsgEditChain = sendMsgEditChain.bind(ignite.TendermintSpnLaunch)
  
	sendMsgSettleRequest = sendMsgSettleRequest.bind(ignite.TendermintSpnLaunch)
  
  
  queryChain = queryChain.bind(ignite.TendermintSpnLaunch)
  
  queryChainAll = queryChainAll.bind(ignite.TendermintSpnLaunch)
  
  queryGenesisAccount = queryGenesisAccount.bind(ignite.TendermintSpnLaunch)
  
  queryGenesisAccountAll = queryGenesisAccountAll.bind(ignite.TendermintSpnLaunch)
  
  queryVestingAccount = queryVestingAccount.bind(ignite.TendermintSpnLaunch)
  
  queryVestingAccountAll = queryVestingAccountAll.bind(ignite.TendermintSpnLaunch)
  
  queryGenesisValidator = queryGenesisValidator.bind(ignite.TendermintSpnLaunch)
  
  queryGenesisValidatorAll = queryGenesisValidatorAll.bind(ignite.TendermintSpnLaunch)
  
  queryRequest = queryRequest.bind(ignite.TendermintSpnLaunch)
  
  queryRequestAll = queryRequestAll.bind(ignite.TendermintSpnLaunch)
  
  queryParams = queryParams.bind(ignite.TendermintSpnLaunch)
  

  return {
  
  sendMsgRevertLaunch,
  
  sendMsgRequestAddValidator,
  
  sendMsgRequestRemoveValidator,
  
  sendMsgCreateChain,
  
  sendMsgRequestAddAccount,
  
  sendMsgTriggerLaunch,
  
  sendMsgRequestRemoveAccount,
  
  sendMsgRequestAddVestingAccount,
  
  sendMsgUpdateLaunchInformation,
  
  sendMsgEditChain,
  
  sendMsgSettleRequest,
  
  
  queryChain,
  
  queryChainAll,
  
  queryGenesisAccount,
  
  queryGenesisAccountAll,
  
  queryVestingAccount,
  
  queryVestingAccountAll,
  
  queryGenesisValidator,
  
  queryGenesisValidatorAll,
  
  queryRequest,
  
  queryRequestAll,
  
  queryParams,
  
  }
}

export { useModule }
