// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { SigningStargateClient, DeliverTxResponse } from '@cosmjs/stargate'
import { EncodeObject } from '@cosmjs/proto-signing'

import { Api } from './rest'
import { MsgUpdateValidatorDescription } from './types/profile/tx'
import { MsgAddValidatorOperatorAddress } from './types/profile/tx'
import { MsgDisableCoordinator } from './types/profile/tx'
import { MsgUpdateCoordinatorDescription } from './types/profile/tx'
import { MsgCreateCoordinator } from './types/profile/tx'
import { MsgUpdateCoordinatorAddress } from './types/profile/tx'

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

type sendMsgUpdateCoordinatorDescriptionParams = {
  value: MsgUpdateCoordinatorDescription
  fee?: StdFee
  memo?: string
}

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

type msgUpdateValidatorDescriptionParams = {
  value: MsgUpdateValidatorDescription
}

type msgAddValidatorOperatorAddressParams = {
  value: MsgAddValidatorOperatorAddress
}

type msgDisableCoordinatorParams = {
  value: MsgDisableCoordinator
}

type msgUpdateCoordinatorDescriptionParams = {
  value: MsgUpdateCoordinatorDescription
}

type msgCreateCoordinatorParams = {
  value: MsgCreateCoordinator
}

type msgUpdateCoordinatorAddressParams = {
  value: MsgUpdateCoordinatorAddress
}

class Module extends Api<any> {
  private _client: SigningStargateClient
  private _addr: string

  constructor(baseUrl: string) {
    super({
      baseUrl
    })
  }

  public withSigner(client: SigningStargateClient, _addr: string) {
    this._client = client
    this._addr = _addr
  }

  async sendMsgUpdateValidatorDescription({
    value,
    fee,
    memo
  }: sendMsgUpdateValidatorDescriptionParams): Promise<DeliverTxResponse> {
    if (!this._client) {
      throw new Error(
        'TxClient:sendMsgUpdateValidatorDescription: Unable to sign Tx. Signer is not present.'
      )
    }
    if (!this._addr) {
      throw new Error(
        'TxClient:sendMsgUpdateValidatorDescription: Unable to sign Tx. Address is not present.'
      )
    }
    try {
      let msg = this.msgUpdateValidatorDescription({
        value: MsgUpdateValidatorDescription.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._addr,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:sendMsgUpdateValidatorDescription: Could not broadcast Tx: ' +
          e.message
      )
    }
  }

  async sendMsgAddValidatorOperatorAddress({
    value,
    fee,
    memo
  }: sendMsgAddValidatorOperatorAddressParams): Promise<DeliverTxResponse> {
    if (!this._client) {
      throw new Error(
        'TxClient:sendMsgAddValidatorOperatorAddress: Unable to sign Tx. Signer is not present.'
      )
    }
    if (!this._addr) {
      throw new Error(
        'TxClient:sendMsgAddValidatorOperatorAddress: Unable to sign Tx. Address is not present.'
      )
    }
    try {
      let msg = this.msgAddValidatorOperatorAddress({
        value: MsgAddValidatorOperatorAddress.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._addr,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:sendMsgAddValidatorOperatorAddress: Could not broadcast Tx: ' +
          e.message
      )
    }
  }

  async sendMsgDisableCoordinator({
    value,
    fee,
    memo
  }: sendMsgDisableCoordinatorParams): Promise<DeliverTxResponse> {
    if (!this._client) {
      throw new Error(
        'TxClient:sendMsgDisableCoordinator: Unable to sign Tx. Signer is not present.'
      )
    }
    if (!this._addr) {
      throw new Error(
        'TxClient:sendMsgDisableCoordinator: Unable to sign Tx. Address is not present.'
      )
    }
    try {
      let msg = this.msgDisableCoordinator({
        value: MsgDisableCoordinator.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._addr,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:sendMsgDisableCoordinator: Could not broadcast Tx: ' +
          e.message
      )
    }
  }

  async sendMsgUpdateCoordinatorDescription({
    value,
    fee,
    memo
  }: sendMsgUpdateCoordinatorDescriptionParams): Promise<DeliverTxResponse> {
    if (!this._client) {
      throw new Error(
        'TxClient:sendMsgUpdateCoordinatorDescription: Unable to sign Tx. Signer is not present.'
      )
    }
    if (!this._addr) {
      throw new Error(
        'TxClient:sendMsgUpdateCoordinatorDescription: Unable to sign Tx. Address is not present.'
      )
    }
    try {
      let msg = this.msgUpdateCoordinatorDescription({
        value: MsgUpdateCoordinatorDescription.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._addr,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:sendMsgUpdateCoordinatorDescription: Could not broadcast Tx: ' +
          e.message
      )
    }
  }

  async sendMsgCreateCoordinator({
    value,
    fee,
    memo
  }: sendMsgCreateCoordinatorParams): Promise<DeliverTxResponse> {
    if (!this._client) {
      throw new Error(
        'TxClient:sendMsgCreateCoordinator: Unable to sign Tx. Signer is not present.'
      )
    }
    if (!this._addr) {
      throw new Error(
        'TxClient:sendMsgCreateCoordinator: Unable to sign Tx. Address is not present.'
      )
    }
    try {
      let msg = this.msgCreateCoordinator({
        value: MsgCreateCoordinator.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._addr,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:sendMsgCreateCoordinator: Could not broadcast Tx: ' +
          e.message
      )
    }
  }

  async sendMsgUpdateCoordinatorAddress({
    value,
    fee,
    memo
  }: sendMsgUpdateCoordinatorAddressParams): Promise<DeliverTxResponse> {
    if (!this._client) {
      throw new Error(
        'TxClient:sendMsgUpdateCoordinatorAddress: Unable to sign Tx. Signer is not present.'
      )
    }
    if (!this._addr) {
      throw new Error(
        'TxClient:sendMsgUpdateCoordinatorAddress: Unable to sign Tx. Address is not present.'
      )
    }
    try {
      let msg = this.msgUpdateCoordinatorAddress({
        value: MsgUpdateCoordinatorAddress.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._addr,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:sendMsgUpdateCoordinatorAddress: Could not broadcast Tx: ' +
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
        'TxClient:MsgUpdateValidatorDescription: Could not create message: ' +
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
        'TxClient:MsgAddValidatorOperatorAddress: Could not create message: ' +
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
        'TxClient:MsgDisableCoordinator: Could not create message: ' + e.message
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
        'TxClient:MsgUpdateCoordinatorDescription: Could not create message: ' +
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
        'TxClient:MsgCreateCoordinator: Could not create message: ' + e.message
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
        'TxClient:MsgUpdateCoordinatorAddress: Could not create message: ' +
          e.message
      )
    }
  }
}

export default Module
