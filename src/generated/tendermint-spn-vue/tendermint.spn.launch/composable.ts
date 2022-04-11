// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Module from '../../tendermint-spn-ts-client/tendermint.spn.launch/module'
import useIgnite from '../useIgnite'
import { unref } from 'vue'

type SendMsgEditChainType = typeof Module.prototype.sendMsgEditChain
type SendMsgRequestRemoveAccountType =
  typeof Module.prototype.sendMsgRequestRemoveAccount
type SendMsgSettleRequestType = typeof Module.prototype.sendMsgSettleRequest
type SendMsgCreateChainType = typeof Module.prototype.sendMsgCreateChain
type SendMsgUpdateLaunchInformationType =
  typeof Module.prototype.sendMsgUpdateLaunchInformation
type SendMsgRequestRemoveValidatorType =
  typeof Module.prototype.sendMsgRequestRemoveValidator
type SendMsgRequestAddAccountType =
  typeof Module.prototype.sendMsgRequestAddAccount
type SendMsgRequestAddValidatorType =
  typeof Module.prototype.sendMsgRequestAddValidator
type SendMsgRevertLaunchType = typeof Module.prototype.sendMsgRevertLaunch
type SendMsgRequestAddVestingAccountType =
  typeof Module.prototype.sendMsgRequestAddVestingAccount
type SendMsgTriggerLaunchType = typeof Module.prototype.sendMsgTriggerLaunch

type QueryChainType = typeof Module.prototype.queryChain
type QueryChainAllType = typeof Module.prototype.queryChainAll
type QueryGenesisAccountType = typeof Module.prototype.queryGenesisAccount
type QueryGenesisAccountAllType = typeof Module.prototype.queryGenesisAccountAll
type QueryVestingAccountType = typeof Module.prototype.queryVestingAccount
type QueryVestingAccountAllType = typeof Module.prototype.queryVestingAccountAll
type QueryGenesisValidatorType = typeof Module.prototype.queryGenesisValidator
type QueryGenesisValidatorAllType =
  typeof Module.prototype.queryGenesisValidatorAll
type QueryRequestType = typeof Module.prototype.queryRequest
type QueryRequestAllType = typeof Module.prototype.queryRequestAll
type QueryParamsType = typeof Module.prototype.queryParams

type Response = {
  sendMsgEditChain: SendMsgEditChainType
  sendMsgRequestRemoveAccount: SendMsgRequestRemoveAccountType
  sendMsgSettleRequest: SendMsgSettleRequestType
  sendMsgCreateChain: SendMsgCreateChainType
  sendMsgUpdateLaunchInformation: SendMsgUpdateLaunchInformationType
  sendMsgRequestRemoveValidator: SendMsgRequestRemoveValidatorType
  sendMsgRequestAddAccount: SendMsgRequestAddAccountType
  sendMsgRequestAddValidator: SendMsgRequestAddValidatorType
  sendMsgRevertLaunch: SendMsgRevertLaunchType
  sendMsgRequestAddVestingAccount: SendMsgRequestAddVestingAccountType
  sendMsgTriggerLaunch: SendMsgTriggerLaunchType

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

function useModule(): Response {
  // ignite
  let { ignite } = useIgnite()

  let {
    sendMsgEditChain,

    sendMsgRequestRemoveAccount,

    sendMsgSettleRequest,

    sendMsgCreateChain,

    sendMsgUpdateLaunchInformation,

    sendMsgRequestRemoveValidator,

    sendMsgRequestAddAccount,

    sendMsgRequestAddValidator,

    sendMsgRevertLaunch,

    sendMsgRequestAddVestingAccount,

    sendMsgTriggerLaunch,

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

    queryParams
  } = unref(ignite.tendermintSpnLaunch)

  sendMsgEditChain = sendMsgEditChain.bind(ignite.tendermintSpnLaunch)

  sendMsgRequestRemoveAccount = sendMsgRequestRemoveAccount.bind(
    ignite.tendermintSpnLaunch
  )

  sendMsgSettleRequest = sendMsgSettleRequest.bind(ignite.tendermintSpnLaunch)

  sendMsgCreateChain = sendMsgCreateChain.bind(ignite.tendermintSpnLaunch)

  sendMsgUpdateLaunchInformation = sendMsgUpdateLaunchInformation.bind(
    ignite.tendermintSpnLaunch
  )

  sendMsgRequestRemoveValidator = sendMsgRequestRemoveValidator.bind(
    ignite.tendermintSpnLaunch
  )

  sendMsgRequestAddAccount = sendMsgRequestAddAccount.bind(
    ignite.tendermintSpnLaunch
  )

  sendMsgRequestAddValidator = sendMsgRequestAddValidator.bind(
    ignite.tendermintSpnLaunch
  )

  sendMsgRevertLaunch = sendMsgRevertLaunch.bind(ignite.tendermintSpnLaunch)

  sendMsgRequestAddVestingAccount = sendMsgRequestAddVestingAccount.bind(
    ignite.tendermintSpnLaunch
  )

  sendMsgTriggerLaunch = sendMsgTriggerLaunch.bind(ignite.tendermintSpnLaunch)

  queryChain = queryChain.bind(ignite.tendermintSpnLaunch)

  queryChainAll = queryChainAll.bind(ignite.tendermintSpnLaunch)

  queryGenesisAccount = queryGenesisAccount.bind(ignite.tendermintSpnLaunch)

  queryGenesisAccountAll = queryGenesisAccountAll.bind(
    ignite.tendermintSpnLaunch
  )

  queryVestingAccount = queryVestingAccount.bind(ignite.tendermintSpnLaunch)

  queryVestingAccountAll = queryVestingAccountAll.bind(
    ignite.tendermintSpnLaunch
  )

  queryGenesisValidator = queryGenesisValidator.bind(ignite.tendermintSpnLaunch)

  queryGenesisValidatorAll = queryGenesisValidatorAll.bind(
    ignite.tendermintSpnLaunch
  )

  queryRequest = queryRequest.bind(ignite.tendermintSpnLaunch)

  queryRequestAll = queryRequestAll.bind(ignite.tendermintSpnLaunch)

  queryParams = queryParams.bind(ignite.tendermintSpnLaunch)

  return {
    sendMsgEditChain,

    sendMsgRequestRemoveAccount,

    sendMsgSettleRequest,

    sendMsgCreateChain,

    sendMsgUpdateLaunchInformation,

    sendMsgRequestRemoveValidator,

    sendMsgRequestAddAccount,

    sendMsgRequestAddValidator,

    sendMsgRevertLaunch,

    sendMsgRequestAddVestingAccount,

    sendMsgTriggerLaunch,

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

    queryParams
  }
}

export { useModule }
