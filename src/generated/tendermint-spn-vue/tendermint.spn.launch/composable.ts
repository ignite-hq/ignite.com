// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Store } from "pinia";
import { usePiniaStore, PiniaState } from "./";

import { Ignite } from "tendermint-spn-ts-client";
import Module from "tendermint-spn-ts-client/tendermint.spn.launch/module";

type SendMsgSettleRequestType = typeof Module.prototype.sendMsgSettleRequest;
type SendMsgRequestAddVestingAccountType =
  typeof Module.prototype.sendMsgRequestAddVestingAccount;
type SendMsgRequestRemoveValidatorType =
  typeof Module.prototype.sendMsgRequestRemoveValidator;
type SendMsgTriggerLaunchType = typeof Module.prototype.sendMsgTriggerLaunch;
type SendMsgRevertLaunchType = typeof Module.prototype.sendMsgRevertLaunch;
type SendMsgCreateChainType = typeof Module.prototype.sendMsgCreateChain;
type SendMsgRequestAddValidatorType =
  typeof Module.prototype.sendMsgRequestAddValidator;
type SendMsgRequestRemoveAccountType =
  typeof Module.prototype.sendMsgRequestRemoveAccount;
type SendMsgRequestAddAccountType =
  typeof Module.prototype.sendMsgRequestAddAccount;
type SendMsgEditChainType = typeof Module.prototype.sendMsgEditChain;

type QueryChainType = typeof Module.prototype.queryChain;
type QueryChainAllType = typeof Module.prototype.queryChainAll;
type QueryGenesisAccountType = typeof Module.prototype.queryGenesisAccount;
type QueryGenesisAccountAllType =
  typeof Module.prototype.queryGenesisAccountAll;
type QueryVestingAccountType = typeof Module.prototype.queryVestingAccount;
type QueryVestingAccountAllType =
  typeof Module.prototype.queryVestingAccountAll;
type QueryGenesisValidatorType = typeof Module.prototype.queryGenesisValidator;
type QueryGenesisValidatorAllType =
  typeof Module.prototype.queryGenesisValidatorAll;
type QueryRequestType = typeof Module.prototype.queryRequest;
type QueryRequestAllType = typeof Module.prototype.queryRequestAll;
type QueryParamsType = typeof Module.prototype.queryParams;

type Response = {
  $s: Store<"tendermint.spn.launch", PiniaState, {}, {}>;
  sendMsgSettleRequest: SendMsgSettleRequestType;
  sendMsgRequestAddVestingAccount: SendMsgRequestAddVestingAccountType;
  sendMsgRequestRemoveValidator: SendMsgRequestRemoveValidatorType;
  sendMsgTriggerLaunch: SendMsgTriggerLaunchType;
  sendMsgRevertLaunch: SendMsgRevertLaunchType;
  sendMsgCreateChain: SendMsgCreateChainType;
  sendMsgRequestAddValidator: SendMsgRequestAddValidatorType;
  sendMsgRequestRemoveAccount: SendMsgRequestRemoveAccountType;
  sendMsgRequestAddAccount: SendMsgRequestAddAccountType;
  sendMsgEditChain: SendMsgEditChainType;

  queryChain: QueryChainType;
  queryChainAll: QueryChainAllType;
  queryGenesisAccount: QueryGenesisAccountType;
  queryGenesisAccountAll: QueryGenesisAccountAllType;
  queryVestingAccount: QueryVestingAccountType;
  queryVestingAccountAll: QueryVestingAccountAllType;
  queryGenesisValidator: QueryGenesisValidatorType;
  queryGenesisValidatorAll: QueryGenesisValidatorAllType;
  queryRequest: QueryRequestType;
  queryRequestAll: QueryRequestAllType;
  queryParams: QueryParamsType;
};

type Params = {
  $ignt: Ignite;
};

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore();

  let {
    sendMsgSettleRequest,

    sendMsgRequestAddVestingAccount,

    sendMsgRequestRemoveValidator,

    sendMsgTriggerLaunch,

    sendMsgRevertLaunch,

    sendMsgCreateChain,

    sendMsgRequestAddValidator,

    sendMsgRequestRemoveAccount,

    sendMsgRequestAddAccount,

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
  } = $ignt.TendermintSpnLaunch;

  return {
    $s,

    sendMsgSettleRequest,

    sendMsgRequestAddVestingAccount,

    sendMsgRequestRemoveValidator,

    sendMsgTriggerLaunch,

    sendMsgRevertLaunch,

    sendMsgCreateChain,

    sendMsgRequestAddValidator,

    sendMsgRequestRemoveAccount,

    sendMsgRequestAddAccount,

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
  };
}

export { useModule };
