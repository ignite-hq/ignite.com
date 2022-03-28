// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from "@ignt/client";
import Module from "@ignt/client/tendermint.spn.launch/module";
		
type SendMsgSettleRequestType = typeof Module.prototype.sendMsgSettleRequest
type SendMsgRequestAddVestingAccountType = typeof Module.prototype.sendMsgRequestAddVestingAccount
type SendMsgUpdateLaunchInformationType = typeof Module.prototype.sendMsgUpdateLaunchInformation
type SendMsgRequestAddAccountType = typeof Module.prototype.sendMsgRequestAddAccount
type SendMsgRequestRemoveAccountType = typeof Module.prototype.sendMsgRequestRemoveAccount
type SendMsgRequestAddValidatorType = typeof Module.prototype.sendMsgRequestAddValidator
type SendMsgRevertLaunchType = typeof Module.prototype.sendMsgRevertLaunch
type SendMsgRequestRemoveValidatorType = typeof Module.prototype.sendMsgRequestRemoveValidator
type SendMsgCreateChainType = typeof Module.prototype.sendMsgCreateChain
type SendMsgTriggerLaunchType = typeof Module.prototype.sendMsgTriggerLaunch
type SendMsgEditChainType = typeof Module.prototype.sendMsgEditChain

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
  sendMsgSettleRequest: SendMsgSettleRequestType,
  sendMsgRequestAddVestingAccount: SendMsgRequestAddVestingAccountType,
  sendMsgUpdateLaunchInformation: SendMsgUpdateLaunchInformationType,
  sendMsgRequestAddAccount: SendMsgRequestAddAccountType,
  sendMsgRequestRemoveAccount: SendMsgRequestRemoveAccountType,
  sendMsgRequestAddValidator: SendMsgRequestAddValidatorType,
  sendMsgRevertLaunch: SendMsgRevertLaunchType,
  sendMsgRequestRemoveValidator: SendMsgRequestRemoveValidatorType,
  sendMsgCreateChain: SendMsgCreateChainType,
  sendMsgTriggerLaunch: SendMsgTriggerLaunchType,
  sendMsgEditChain: SendMsgEditChainType,
  
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
	
	sendMsgSettleRequest,
  
	sendMsgRequestAddVestingAccount,
  
	sendMsgUpdateLaunchInformation,
  
	sendMsgRequestAddAccount,
  
	sendMsgRequestRemoveAccount,
  
	sendMsgRequestAddValidator,
  
	sendMsgRevertLaunch,
  
	sendMsgRequestRemoveValidator,
  
	sendMsgCreateChain,
  
	sendMsgTriggerLaunch,
  
	sendMsgEditChain,
  
  
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

  
  
	sendMsgSettleRequest = sendMsgSettleRequest.bind(ignite.TendermintSpnLaunch)
  
	sendMsgRequestAddVestingAccount = sendMsgRequestAddVestingAccount.bind(ignite.TendermintSpnLaunch)
  
	sendMsgUpdateLaunchInformation = sendMsgUpdateLaunchInformation.bind(ignite.TendermintSpnLaunch)
  
	sendMsgRequestAddAccount = sendMsgRequestAddAccount.bind(ignite.TendermintSpnLaunch)
  
	sendMsgRequestRemoveAccount = sendMsgRequestRemoveAccount.bind(ignite.TendermintSpnLaunch)
  
	sendMsgRequestAddValidator = sendMsgRequestAddValidator.bind(ignite.TendermintSpnLaunch)
  
	sendMsgRevertLaunch = sendMsgRevertLaunch.bind(ignite.TendermintSpnLaunch)
  
	sendMsgRequestRemoveValidator = sendMsgRequestRemoveValidator.bind(ignite.TendermintSpnLaunch)
  
	sendMsgCreateChain = sendMsgCreateChain.bind(ignite.TendermintSpnLaunch)
  
	sendMsgTriggerLaunch = sendMsgTriggerLaunch.bind(ignite.TendermintSpnLaunch)
  
	sendMsgEditChain = sendMsgEditChain.bind(ignite.TendermintSpnLaunch)
  
  
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
  
  sendMsgSettleRequest,
  
  sendMsgRequestAddVestingAccount,
  
  sendMsgUpdateLaunchInformation,
  
  sendMsgRequestAddAccount,
  
  sendMsgRequestRemoveAccount,
  
  sendMsgRequestAddValidator,
  
  sendMsgRevertLaunch,
  
  sendMsgRequestRemoveValidator,
  
  sendMsgCreateChain,
  
  sendMsgTriggerLaunch,
  
  sendMsgEditChain,
  
  
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
