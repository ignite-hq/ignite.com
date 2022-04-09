// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Module from '../../tendermint-spn-ts-client/tendermint.spn.profile/module'
import useIgnite from '../useIgnite'
import { unref } from 'vue'

type SendMsgUpdateCoordinatorAddressType =
  typeof Module.prototype.sendMsgUpdateCoordinatorAddress
type SendMsgCreateCoordinatorType =
  typeof Module.prototype.sendMsgCreateCoordinator
type SendMsgUpdateValidatorDescriptionType =
  typeof Module.prototype.sendMsgUpdateValidatorDescription
type SendMsgAddValidatorOperatorAddressType =
  typeof Module.prototype.sendMsgAddValidatorOperatorAddress
type SendMsgDisableCoordinatorType =
  typeof Module.prototype.sendMsgDisableCoordinator
type SendMsgUpdateCoordinatorDescriptionType =
  typeof Module.prototype.sendMsgUpdateCoordinatorDescription

type QueryValidatorType = typeof Module.prototype.queryValidator
type QueryValidatorAllType = typeof Module.prototype.queryValidatorAll
type QueryValidatorByOperatorAddressType =
  typeof Module.prototype.queryValidatorByOperatorAddress
type QueryCoordinatorType = typeof Module.prototype.queryCoordinator
type QueryCoordinatorAllType = typeof Module.prototype.queryCoordinatorAll
type QueryCoordinatorByAddressType =
  typeof Module.prototype.queryCoordinatorByAddress

type Response = {
  sendMsgUpdateCoordinatorAddress: SendMsgUpdateCoordinatorAddressType
  sendMsgCreateCoordinator: SendMsgCreateCoordinatorType
  sendMsgUpdateValidatorDescription: SendMsgUpdateValidatorDescriptionType
  sendMsgAddValidatorOperatorAddress: SendMsgAddValidatorOperatorAddressType
  sendMsgDisableCoordinator: SendMsgDisableCoordinatorType
  sendMsgUpdateCoordinatorDescription: SendMsgUpdateCoordinatorDescriptionType

  queryValidator: QueryValidatorType
  queryValidatorAll: QueryValidatorAllType
  queryValidatorByOperatorAddress: QueryValidatorByOperatorAddressType
  queryCoordinator: QueryCoordinatorType
  queryCoordinatorAll: QueryCoordinatorAllType
  queryCoordinatorByAddress: QueryCoordinatorByAddressType
}

function useModule(): Response {
  // ignite
  let { ignite } = useIgnite()

  let {
    sendMsgUpdateCoordinatorAddress,

    sendMsgCreateCoordinator,

    sendMsgUpdateValidatorDescription,

    sendMsgAddValidatorOperatorAddress,

    sendMsgDisableCoordinator,

    sendMsgUpdateCoordinatorDescription,

    queryValidator,

    queryValidatorAll,

    queryValidatorByOperatorAddress,

    queryCoordinator,

    queryCoordinatorAll,

    queryCoordinatorByAddress
  } = unref(ignite.tendermintSpnProfile)

  sendMsgUpdateCoordinatorAddress = sendMsgUpdateCoordinatorAddress.bind(
    ignite.tendermintSpnProfile
  )

  sendMsgCreateCoordinator = sendMsgCreateCoordinator.bind(
    ignite.tendermintSpnProfile
  )

  sendMsgUpdateValidatorDescription = sendMsgUpdateValidatorDescription.bind(
    ignite.tendermintSpnProfile
  )

  sendMsgAddValidatorOperatorAddress = sendMsgAddValidatorOperatorAddress.bind(
    ignite.tendermintSpnProfile
  )

  sendMsgDisableCoordinator = sendMsgDisableCoordinator.bind(
    ignite.tendermintSpnProfile
  )

  sendMsgUpdateCoordinatorDescription =
    sendMsgUpdateCoordinatorDescription.bind(ignite.tendermintSpnProfile)

  queryValidator = queryValidator.bind(ignite.tendermintSpnProfile)

  queryValidatorAll = queryValidatorAll.bind(ignite.tendermintSpnProfile)

  queryValidatorByOperatorAddress = queryValidatorByOperatorAddress.bind(
    ignite.tendermintSpnProfile
  )

  queryCoordinator = queryCoordinator.bind(ignite.tendermintSpnProfile)

  queryCoordinatorAll = queryCoordinatorAll.bind(ignite.tendermintSpnProfile)

  queryCoordinatorByAddress = queryCoordinatorByAddress.bind(
    ignite.tendermintSpnProfile
  )

  return {
    sendMsgUpdateCoordinatorAddress,

    sendMsgCreateCoordinator,

    sendMsgUpdateValidatorDescription,

    sendMsgAddValidatorOperatorAddress,

    sendMsgDisableCoordinator,

    sendMsgUpdateCoordinatorDescription,

    queryValidator,

    queryValidatorAll,

    queryValidatorByOperatorAddress,

    queryCoordinator,

    queryCoordinatorAll,

    queryCoordinatorByAddress
  }
}

export { useModule }
