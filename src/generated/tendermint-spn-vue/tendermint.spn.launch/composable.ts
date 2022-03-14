// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Store } from 'pinia'
import { usePiniaStore, PiniaState } from './'

import { Ignite } from 'tendermint-spn-ts-client'
import Module from 'tendermint-spn-ts-client/tendermint.spn.launch/module'

type SendMsgRequestRemoveAccountType =
  typeof Module.prototype.sendMsgRequestRemoveAccount
type SendMsgRequestAddAccountType =
  typeof Module.prototype.sendMsgRequestAddAccount
type SendMsgRevertLaunchType = typeof Module.prototype.sendMsgRevertLaunch
type SendMsgRequestAddVestingAccountType =
  typeof Module.prototype.sendMsgRequestAddVestingAccount
type SendMsgCreateChainType = typeof Module.prototype.sendMsgCreateChain
type SendMsgTriggerLaunchType = typeof Module.prototype.sendMsgTriggerLaunch
type SendMsgRequestRemoveValidatorType =
  typeof Module.prototype.sendMsgRequestRemoveValidator
type SendMsgSettleRequestType = typeof Module.prototype.sendMsgSettleRequest
type SendMsgEditChainType = typeof Module.prototype.sendMsgEditChain
type SendMsgRequestAddValidatorType =
  typeof Module.prototype.sendMsgRequestAddValidator

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
  $s: Store<'tendermint.spn.launch', PiniaState, {}, {}>
  sendMsgRequestRemoveAccount: SendMsgRequestRemoveAccountType
  sendMsgRequestAddAccount: SendMsgRequestAddAccountType
  sendMsgRevertLaunch: SendMsgRevertLaunchType
  sendMsgRequestAddVestingAccount: SendMsgRequestAddVestingAccountType
  sendMsgCreateChain: SendMsgCreateChainType
  sendMsgTriggerLaunch: SendMsgTriggerLaunchType
  sendMsgRequestRemoveValidator: SendMsgRequestRemoveValidatorType
  sendMsgSettleRequest: SendMsgSettleRequestType
  sendMsgEditChain: SendMsgEditChainType
  sendMsgRequestAddValidator: SendMsgRequestAddValidatorType

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
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let {
    sendMsgRequestRemoveAccount,

    sendMsgRequestAddAccount,

    sendMsgRevertLaunch,

    sendMsgRequestAddVestingAccount,

    sendMsgCreateChain,

    sendMsgTriggerLaunch,

    sendMsgRequestRemoveValidator,

    sendMsgSettleRequest,

    sendMsgEditChain,

    sendMsgRequestAddValidator,

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
  } = $ignt.TendermintSpnLaunch

  sendMsgRequestRemoveAccount = sendMsgRequestRemoveAccount.bind(
    $ignt.TendermintSpnLaunch
  )

  sendMsgRequestAddAccount = sendMsgRequestAddAccount.bind(
    $ignt.TendermintSpnLaunch
  )

  sendMsgRevertLaunch = sendMsgRevertLaunch.bind($ignt.TendermintSpnLaunch)

  sendMsgRequestAddVestingAccount = sendMsgRequestAddVestingAccount.bind(
    $ignt.TendermintSpnLaunch
  )

  sendMsgCreateChain = sendMsgCreateChain.bind($ignt.TendermintSpnLaunch)

  sendMsgTriggerLaunch = sendMsgTriggerLaunch.bind($ignt.TendermintSpnLaunch)

  sendMsgRequestRemoveValidator = sendMsgRequestRemoveValidator.bind(
    $ignt.TendermintSpnLaunch
  )

  sendMsgSettleRequest = sendMsgSettleRequest.bind($ignt.TendermintSpnLaunch)

  sendMsgEditChain = sendMsgEditChain.bind($ignt.TendermintSpnLaunch)

  sendMsgRequestAddValidator = sendMsgRequestAddValidator.bind(
    $ignt.TendermintSpnLaunch
  )

  queryChain = queryChain.bind($ignt.TendermintSpnLaunch)

  queryChainAll = queryChainAll.bind($ignt.TendermintSpnLaunch)

  queryGenesisAccount = queryGenesisAccount.bind($ignt.TendermintSpnLaunch)

  queryGenesisAccountAll = queryGenesisAccountAll.bind(
    $ignt.TendermintSpnLaunch
  )

  queryVestingAccount = queryVestingAccount.bind($ignt.TendermintSpnLaunch)

  queryVestingAccountAll = queryVestingAccountAll.bind(
    $ignt.TendermintSpnLaunch
  )

  queryGenesisValidator = queryGenesisValidator.bind($ignt.TendermintSpnLaunch)

  queryGenesisValidatorAll = queryGenesisValidatorAll.bind(
    $ignt.TendermintSpnLaunch
  )

  queryRequest = queryRequest.bind($ignt.TendermintSpnLaunch)

  queryRequestAll = queryRequestAll.bind($ignt.TendermintSpnLaunch)

  queryParams = queryParams.bind($ignt.TendermintSpnLaunch)

  return {
    $s,

    sendMsgRequestRemoveAccount,

    sendMsgRequestAddAccount,

    sendMsgRevertLaunch,

    sendMsgRequestAddVestingAccount,

    sendMsgCreateChain,

    sendMsgTriggerLaunch,

    sendMsgRequestRemoveValidator,

    sendMsgSettleRequest,

    sendMsgEditChain,

    sendMsgRequestAddValidator,

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
