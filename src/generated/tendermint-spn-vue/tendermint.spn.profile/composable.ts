// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Store } from 'pinia'
import { usePiniaStore, PiniaState } from './'

import { Ignite } from 'tendermint-spn-ts-client'
import Module from 'tendermint-spn-ts-client/tendermint.spn.profile/module'

type SendMsgCreateCoordinatorType =
  typeof Module.prototype.sendMsgCreateCoordinator
type SendMsgUpdateCoordinatorAddressType =
  typeof Module.prototype.sendMsgUpdateCoordinatorAddress
type SendMsgUpdateCoordinatorDescriptionType =
  typeof Module.prototype.sendMsgUpdateCoordinatorDescription
type SendMsgUpdateValidatorDescriptionType =
  typeof Module.prototype.sendMsgUpdateValidatorDescription
type SendMsgAddValidatorOperatorAddressType =
  typeof Module.prototype.sendMsgAddValidatorOperatorAddress
type SendMsgDisableCoordinatorType =
  typeof Module.prototype.sendMsgDisableCoordinator

type QueryValidatorType = typeof Module.prototype.queryValidator
type QueryValidatorAllType = typeof Module.prototype.queryValidatorAll
type QueryValidatorByOperatorAddressType =
  typeof Module.prototype.queryValidatorByOperatorAddress
type QueryCoordinatorType = typeof Module.prototype.queryCoordinator
type QueryCoordinatorAllType = typeof Module.prototype.queryCoordinatorAll
type QueryCoordinatorByAddressType =
  typeof Module.prototype.queryCoordinatorByAddress

type Response = {
  $s: Store<'tendermint.spn.profile', PiniaState, {}, {}>
  sendMsgCreateCoordinator: SendMsgCreateCoordinatorType
  sendMsgUpdateCoordinatorAddress: SendMsgUpdateCoordinatorAddressType
  sendMsgUpdateCoordinatorDescription: SendMsgUpdateCoordinatorDescriptionType
  sendMsgUpdateValidatorDescription: SendMsgUpdateValidatorDescriptionType
  sendMsgAddValidatorOperatorAddress: SendMsgAddValidatorOperatorAddressType
  sendMsgDisableCoordinator: SendMsgDisableCoordinatorType

  queryValidator: QueryValidatorType
  queryValidatorAll: QueryValidatorAllType
  queryValidatorByOperatorAddress: QueryValidatorByOperatorAddressType
  queryCoordinator: QueryCoordinatorType
  queryCoordinatorAll: QueryCoordinatorAllType
  queryCoordinatorByAddress: QueryCoordinatorByAddressType
}

type Params = {
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let {
    sendMsgCreateCoordinator,

    sendMsgUpdateCoordinatorAddress,

    sendMsgUpdateCoordinatorDescription,

    sendMsgUpdateValidatorDescription,

    sendMsgAddValidatorOperatorAddress,

    sendMsgDisableCoordinator,

    queryValidator,

    queryValidatorAll,

    queryValidatorByOperatorAddress,

    queryCoordinator,

    queryCoordinatorAll,

    queryCoordinatorByAddress
  } = $ignt.TendermintSpnProfile

  sendMsgCreateCoordinator = sendMsgCreateCoordinator.bind(
    $ignt.TendermintSpnProfile
  )

  sendMsgUpdateCoordinatorAddress = sendMsgUpdateCoordinatorAddress.bind(
    $ignt.TendermintSpnProfile
  )

  sendMsgUpdateCoordinatorDescription =
    sendMsgUpdateCoordinatorDescription.bind($ignt.TendermintSpnProfile)

  sendMsgUpdateValidatorDescription = sendMsgUpdateValidatorDescription.bind(
    $ignt.TendermintSpnProfile
  )

  sendMsgAddValidatorOperatorAddress = sendMsgAddValidatorOperatorAddress.bind(
    $ignt.TendermintSpnProfile
  )

  sendMsgDisableCoordinator = sendMsgDisableCoordinator.bind(
    $ignt.TendermintSpnProfile
  )

  queryValidator = queryValidator.bind($ignt.TendermintSpnProfile)

  queryValidatorAll = queryValidatorAll.bind($ignt.TendermintSpnProfile)

  queryValidatorByOperatorAddress = queryValidatorByOperatorAddress.bind(
    $ignt.TendermintSpnProfile
  )

  queryCoordinator = queryCoordinator.bind($ignt.TendermintSpnProfile)

  queryCoordinatorAll = queryCoordinatorAll.bind($ignt.TendermintSpnProfile)

  queryCoordinatorByAddress = queryCoordinatorByAddress.bind(
    $ignt.TendermintSpnProfile
  )

  return {
    $s,

    sendMsgCreateCoordinator,

    sendMsgUpdateCoordinatorAddress,

    sendMsgUpdateCoordinatorDescription,

    sendMsgUpdateValidatorDescription,

    sendMsgAddValidatorOperatorAddress,

    sendMsgDisableCoordinator,

    queryValidator,

    queryValidatorAll,

    queryValidatorByOperatorAddress,

    queryCoordinator,

    queryCoordinatorAll,

    queryCoordinatorByAddress
  }
}

export { useModule }
