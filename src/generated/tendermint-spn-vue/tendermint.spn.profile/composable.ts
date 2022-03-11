// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Store } from "pinia";
import { usePiniaStore, PiniaState } from "./";

import { Ignite } from "tendermint-spn-ts-client";
import Module from "tendermint-spn-ts-client/tendermint.spn.profile/module";

type SendMsgUpdateCoordinatorAddressType =
  typeof Module.prototype.sendMsgUpdateCoordinatorAddress;
type SendMsgUpdateValidatorDescriptionType =
  typeof Module.prototype.sendMsgUpdateValidatorDescription;
type SendMsgUpdateCoordinatorDescriptionType =
  typeof Module.prototype.sendMsgUpdateCoordinatorDescription;
type SendMsgCreateCoordinatorType =
  typeof Module.prototype.sendMsgCreateCoordinator;
type SendMsgAddValidatorOperatorAddressType =
  typeof Module.prototype.sendMsgAddValidatorOperatorAddress;
type SendMsgDisableCoordinatorType =
  typeof Module.prototype.sendMsgDisableCoordinator;

type QueryValidatorType = typeof Module.prototype.queryValidator;
type QueryValidatorAllType = typeof Module.prototype.queryValidatorAll;
type QueryValidatorByOperatorAddressType =
  typeof Module.prototype.queryValidatorByOperatorAddress;
type QueryCoordinatorType = typeof Module.prototype.queryCoordinator;
type QueryCoordinatorAllType = typeof Module.prototype.queryCoordinatorAll;
type QueryCoordinatorByAddressType =
  typeof Module.prototype.queryCoordinatorByAddress;

type Response = {
  $s: Store<"tendermint.spn.profile", PiniaState, {}, {}>;
  sendMsgUpdateCoordinatorAddress: SendMsgUpdateCoordinatorAddressType;
  sendMsgUpdateValidatorDescription: SendMsgUpdateValidatorDescriptionType;
  sendMsgUpdateCoordinatorDescription: SendMsgUpdateCoordinatorDescriptionType;
  sendMsgCreateCoordinator: SendMsgCreateCoordinatorType;
  sendMsgAddValidatorOperatorAddress: SendMsgAddValidatorOperatorAddressType;
  sendMsgDisableCoordinator: SendMsgDisableCoordinatorType;

  queryValidator: QueryValidatorType;
  queryValidatorAll: QueryValidatorAllType;
  queryValidatorByOperatorAddress: QueryValidatorByOperatorAddressType;
  queryCoordinator: QueryCoordinatorType;
  queryCoordinatorAll: QueryCoordinatorAllType;
  queryCoordinatorByAddress: QueryCoordinatorByAddressType;
};

type Params = {
  $ignt: Ignite;
};

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore();

  let {
    sendMsgUpdateCoordinatorAddress,

    sendMsgUpdateValidatorDescription,

    sendMsgUpdateCoordinatorDescription,

    sendMsgCreateCoordinator,

    sendMsgAddValidatorOperatorAddress,

    sendMsgDisableCoordinator,

    queryValidator,

    queryValidatorAll,

    queryValidatorByOperatorAddress,

    queryCoordinator,

    queryCoordinatorAll,

    queryCoordinatorByAddress,
  } = $ignt.TendermintSpnProfile;

  return {
    $s,

    sendMsgUpdateCoordinatorAddress,

    sendMsgUpdateValidatorDescription,

    sendMsgUpdateCoordinatorDescription,

    sendMsgCreateCoordinator,

    sendMsgAddValidatorOperatorAddress,

    sendMsgDisableCoordinator,

    queryValidator,

    queryValidatorAll,

    queryValidatorByOperatorAddress,

    queryCoordinator,

    queryCoordinatorAll,

    queryCoordinatorByAddress,
  };
}

export { useModule };
