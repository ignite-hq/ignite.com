// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from 'tendermint-spn-ts-client'
import Module from 'tendermint-spn-ts-client/tendermint.spn.profile/module'

type SendMsgUpdateValidatorDescriptionType =
  typeof Module.prototype.sendMsgUpdateValidatorDescription
type SendMsgAddValidatorOperatorAddressType =
  typeof Module.prototype.sendMsgAddValidatorOperatorAddress
type SendMsgDisableCoordinatorType =
  typeof Module.prototype.sendMsgDisableCoordinator
type SendMsgUpdateCoordinatorDescriptionType =
  typeof Module.prototype.sendMsgUpdateCoordinatorDescription
type SendMsgCreateCoordinatorType =
  typeof Module.prototype.sendMsgCreateCoordinator
type SendMsgUpdateCoordinatorAddressType =
  typeof Module.prototype.sendMsgUpdateCoordinatorAddress

type QueryValidatorType = typeof Module.prototype.queryValidator
type QueryValidatorAllType = typeof Module.prototype.queryValidatorAll
type QueryValidatorByOperatorAddressType =
  typeof Module.prototype.queryValidatorByOperatorAddress
type QueryCoordinatorType = typeof Module.prototype.queryCoordinator
type QueryCoordinatorAllType = typeof Module.prototype.queryCoordinatorAll
type QueryCoordinatorByAddressType =
  typeof Module.prototype.queryCoordinatorByAddress

type Response = {
  sendMsgUpdateValidatorDescription: SendMsgUpdateValidatorDescriptionType
  sendMsgAddValidatorOperatorAddress: SendMsgAddValidatorOperatorAddressType
  sendMsgDisableCoordinator: SendMsgDisableCoordinatorType
  sendMsgUpdateCoordinatorDescription: SendMsgUpdateCoordinatorDescriptionType
  sendMsgCreateCoordinator: SendMsgCreateCoordinatorType
  sendMsgUpdateCoordinatorAddress: SendMsgUpdateCoordinatorAddressType

  queryValidator: QueryValidatorType
  queryValidatorAll: QueryValidatorAllType
  queryValidatorByOperatorAddress: QueryValidatorByOperatorAddressType
  queryCoordinator: QueryCoordinatorType
  queryCoordinatorAll: QueryCoordinatorAllType
  queryCoordinatorByAddress: QueryCoordinatorByAddressType
}

type Params = {
  ignite: Ignite
}

function useModule({ ignite }: Params): Response {
  let {
    sendMsgUpdateValidatorDescription,

    sendMsgAddValidatorOperatorAddress,

    sendMsgDisableCoordinator,

    sendMsgUpdateCoordinatorDescription,

    sendMsgCreateCoordinator,

    sendMsgUpdateCoordinatorAddress,

    queryValidator,

    queryValidatorAll,

    queryValidatorByOperatorAddress,

    queryCoordinator,

    queryCoordinatorAll,

    queryCoordinatorByAddress
  } = ignite.TendermintSpnProfile

  sendMsgUpdateValidatorDescription = sendMsgUpdateValidatorDescription.bind(
    ignite.TendermintSpnProfile
  )

  sendMsgAddValidatorOperatorAddress = sendMsgAddValidatorOperatorAddress.bind(
    ignite.TendermintSpnProfile
  )

  sendMsgDisableCoordinator = sendMsgDisableCoordinator.bind(
    ignite.TendermintSpnProfile
  )

  sendMsgUpdateCoordinatorDescription =
    sendMsgUpdateCoordinatorDescription.bind(ignite.TendermintSpnProfile)

  sendMsgCreateCoordinator = sendMsgCreateCoordinator.bind(
    ignite.TendermintSpnProfile
  )

  sendMsgUpdateCoordinatorAddress = sendMsgUpdateCoordinatorAddress.bind(
    ignite.TendermintSpnProfile
  )

  queryValidator = queryValidator.bind(ignite.TendermintSpnProfile)

  queryValidatorAll = queryValidatorAll.bind(ignite.TendermintSpnProfile)

  queryValidatorByOperatorAddress = queryValidatorByOperatorAddress.bind(
    ignite.TendermintSpnProfile
  )

  queryCoordinator = queryCoordinator.bind(ignite.TendermintSpnProfile)

  queryCoordinatorAll = queryCoordinatorAll.bind(ignite.TendermintSpnProfile)

  queryCoordinatorByAddress = queryCoordinatorByAddress.bind(
    ignite.TendermintSpnProfile
  )

  return {
    sendMsgUpdateValidatorDescription,

    sendMsgAddValidatorOperatorAddress,

    sendMsgDisableCoordinator,

    sendMsgUpdateCoordinatorDescription,

    sendMsgCreateCoordinator,

    sendMsgUpdateCoordinatorAddress,

    queryValidator,

    queryValidatorAll,

    queryValidatorByOperatorAddress,

    queryCoordinator,

    queryCoordinatorAll,

    queryCoordinatorByAddress
  }
}

export { useModule }
