// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { SigningStargateClient, DeliverTxResponse } from '@cosmjs/stargate'
import { EncodeObject } from '@cosmjs/proto-signing'

import { Api } from './rest'
import { MsgCreateCoordinator } from './types/profile/tx'
import { MsgUpdateCoordinatorAddress } from './types/profile/tx'
import { MsgUpdateCoordinatorDescription } from './types/profile/tx'
import { MsgUpdateValidatorDescription } from './types/profile/tx'
import { MsgAddValidatorOperatorAddress } from './types/profile/tx'
import { MsgDisableCoordinator } from './types/profile/tx'

type sendMsgCreateCoordinatorParams = {
  value: MsgCreateCoordinator
  fee?: StdFee
  memo?: string
}

type sendMsgUpdateCoordinatorAddressParams = {
  value: MsgUpdateCoordinatorAddress
  fee?: StdFee
  memo?: string
}

type sendMsgUpdateCoordinatorDescriptionParams = {
  value: MsgUpdateCoordinatorDescription
  fee?: StdFee
  memo?: string
}

type sendMsgUpdateValidatorDescriptionParams = {
  value: MsgUpdateValidatorDescription
  fee?: StdFee
  memo?: string
}

type sendMsgAddValidatorOperatorAddressParams = {
  value: MsgAddValidatorOperatorAddress
  fee?: StdFee
  memo?: string
}

type sendMsgDisableCoordinatorParams = {
  value: MsgDisableCoordinator
  fee?: StdFee
  memo?: string
}

type msgCreateCoordinatorParams = {
  value: MsgCreateCoordinator
}

type msgUpdateCoordinatorAddressParams = {
  value: MsgUpdateCoordinatorAddress
}

type msgUpdateCoordinatorDescriptionParams = {
  value: MsgUpdateCoordinatorDescription
}

type msgUpdateValidatorDescriptionParams = {
  value: MsgUpdateValidatorDescription
}

type msgAddValidatorOperatorAddressParams = {
  value: MsgAddValidatorOperatorAddress
}

type msgDisableCoordinatorParams = {
  value: MsgDisableCoordinator
}

class Module extends Api<any> {
  private _client: SigningStargateClient
  private _address: string

  constructor(client: SigningStargateClient, address: string, baseUrl: string) {
    super({
      baseUrl
    })

    this._client = client
    this._address = address
  }

  async sendMsgCreateCoordinator({
    value,
    fee,
    memo
  }: sendMsgCreateCoordinatorParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgCreateCoordinator({
        value: MsgCreateCoordinator.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgCreateCoordinator:Send Could not broadcast Tx: ' +
          e.message
      )
    }
  }

  async sendMsgUpdateCoordinatorAddress({
    value,
    fee,
    memo
  }: sendMsgUpdateCoordinatorAddressParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgUpdateCoordinatorAddress({
        value: MsgUpdateCoordinatorAddress.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgUpdateCoordinatorAddress:Send Could not broadcast Tx: ' +
          e.message
      )
    }
  }

  async sendMsgUpdateCoordinatorDescription({
    value,
    fee,
    memo
  }: sendMsgUpdateCoordinatorDescriptionParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgUpdateCoordinatorDescription({
        value: MsgUpdateCoordinatorDescription.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgUpdateCoordinatorDescription:Send Could not broadcast Tx: ' +
          e.message
      )
    }
  }

  async sendMsgUpdateValidatorDescription({
    value,
    fee,
    memo
  }: sendMsgUpdateValidatorDescriptionParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgUpdateValidatorDescription({
        value: MsgUpdateValidatorDescription.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgUpdateValidatorDescription:Send Could not broadcast Tx: ' +
          e.message
      )
    }
  }

  async sendMsgAddValidatorOperatorAddress({
    value,
    fee,
    memo
  }: sendMsgAddValidatorOperatorAddressParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgAddValidatorOperatorAddress({
        value: MsgAddValidatorOperatorAddress.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgAddValidatorOperatorAddress:Send Could not broadcast Tx: ' +
          e.message
      )
    }
  }

  async sendMsgDisableCoordinator({
    value,
    fee,
    memo
  }: sendMsgDisableCoordinatorParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgDisableCoordinator({
        value: MsgDisableCoordinator.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgDisableCoordinator:Send Could not broadcast Tx: ' +
          e.message
      )
    }
  }

  msgCreateCoordinator({ value }: msgCreateCoordinatorParams): EncodeObject {
    try {
      return {
        typeUrl: '/tendermint.spn.profile.MsgCreateCoordinator',
        value: MsgCreateCoordinator.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgCreateCoordinator:Create Could not create message: ' +
          e.message
      )
    }
  }

  msgUpdateCoordinatorAddress({
    value
  }: msgUpdateCoordinatorAddressParams): EncodeObject {
    try {
      return {
        typeUrl: '/tendermint.spn.profile.MsgUpdateCoordinatorAddress',
        value: MsgUpdateCoordinatorAddress.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgUpdateCoordinatorAddress:Create Could not create message: ' +
          e.message
      )
    }
  }

  msgUpdateCoordinatorDescription({
    value
  }: msgUpdateCoordinatorDescriptionParams): EncodeObject {
    try {
      return {
        typeUrl: '/tendermint.spn.profile.MsgUpdateCoordinatorDescription',
        value: MsgUpdateCoordinatorDescription.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgUpdateCoordinatorDescription:Create Could not create message: ' +
          e.message
      )
    }
  }

  msgUpdateValidatorDescription({
    value
  }: msgUpdateValidatorDescriptionParams): EncodeObject {
    try {
      return {
        typeUrl: '/tendermint.spn.profile.MsgUpdateValidatorDescription',
        value: MsgUpdateValidatorDescription.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgUpdateValidatorDescription:Create Could not create message: ' +
          e.message
      )
    }
  }

  msgAddValidatorOperatorAddress({
    value
  }: msgAddValidatorOperatorAddressParams): EncodeObject {
    try {
      return {
        typeUrl: '/tendermint.spn.profile.MsgAddValidatorOperatorAddress',
        value: MsgAddValidatorOperatorAddress.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgAddValidatorOperatorAddress:Create Could not create message: ' +
          e.message
      )
    }
  }

  msgDisableCoordinator({ value }: msgDisableCoordinatorParams): EncodeObject {
    try {
      return {
        typeUrl: '/tendermint.spn.profile.MsgDisableCoordinator',
        value: MsgDisableCoordinator.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgDisableCoordinator:Create Could not create message: ' +
          e.message
      )
    }
  }
}

export default Module
