// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { SigningStargateClient, DeliverTxResponse } from '@cosmjs/stargate'
import { EncodeObject } from '@cosmjs/proto-signing'

import { Api } from './rest'
import { MsgEditChain } from './types/launch/tx'
import { MsgRequestRemoveAccount } from './types/launch/tx'
import { MsgSettleRequest } from './types/launch/tx'
import { MsgCreateChain } from './types/launch/tx'
import { MsgUpdateLaunchInformation } from './types/launch/tx'
import { MsgRequestRemoveValidator } from './types/launch/tx'
import { MsgRequestAddAccount } from './types/launch/tx'
import { MsgRequestAddValidator } from './types/launch/tx'
import { MsgRevertLaunch } from './types/launch/tx'
import { MsgRequestAddVestingAccount } from './types/launch/tx'
import { MsgTriggerLaunch } from './types/launch/tx'

type sendMsgEditChainParams = {
  value: MsgEditChain
  fee?: StdFee
  memo?: string
}

type sendMsgRequestRemoveAccountParams = {
  value: MsgRequestRemoveAccount
  fee?: StdFee
  memo?: string
}

type sendMsgSettleRequestParams = {
  value: MsgSettleRequest
  fee?: StdFee
  memo?: string
}

type sendMsgCreateChainParams = {
  value: MsgCreateChain
  fee?: StdFee
  memo?: string
}

type sendMsgUpdateLaunchInformationParams = {
  value: MsgUpdateLaunchInformation
  fee?: StdFee
  memo?: string
}

type sendMsgRequestRemoveValidatorParams = {
  value: MsgRequestRemoveValidator
  fee?: StdFee
  memo?: string
}

type sendMsgRequestAddAccountParams = {
  value: MsgRequestAddAccount
  fee?: StdFee
  memo?: string
}

type sendMsgRequestAddValidatorParams = {
  value: MsgRequestAddValidator
  fee?: StdFee
  memo?: string
}

type sendMsgRevertLaunchParams = {
  value: MsgRevertLaunch
  fee?: StdFee
  memo?: string
}

type sendMsgRequestAddVestingAccountParams = {
  value: MsgRequestAddVestingAccount
  fee?: StdFee
  memo?: string
}

type sendMsgTriggerLaunchParams = {
  value: MsgTriggerLaunch
  fee?: StdFee
  memo?: string
}

type msgEditChainParams = {
  value: MsgEditChain
}

type msgRequestRemoveAccountParams = {
  value: MsgRequestRemoveAccount
}

type msgSettleRequestParams = {
  value: MsgSettleRequest
}

type msgCreateChainParams = {
  value: MsgCreateChain
}

type msgUpdateLaunchInformationParams = {
  value: MsgUpdateLaunchInformation
}

type msgRequestRemoveValidatorParams = {
  value: MsgRequestRemoveValidator
}

type msgRequestAddAccountParams = {
  value: MsgRequestAddAccount
}

type msgRequestAddValidatorParams = {
  value: MsgRequestAddValidator
}

type msgRevertLaunchParams = {
  value: MsgRevertLaunch
}

type msgRequestAddVestingAccountParams = {
  value: MsgRequestAddVestingAccount
}

type msgTriggerLaunchParams = {
  value: MsgTriggerLaunch
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

  public noSigner() {
    this._client = undefined
    this._addr = undefined
  }

  async sendMsgEditChain({
    value,
    fee,
    memo
  }: sendMsgEditChainParams): Promise<DeliverTxResponse> {
    if (!this._client) {
      throw new Error(
        'TxClient:sendMsgEditChain: Unable to sign Tx. Signer is not present.'
      )
    }
    if (!this._addr) {
      throw new Error(
        'TxClient:sendMsgEditChain: Unable to sign Tx. Address is not present.'
      )
    }
    try {
      let msg = this.msgEditChain({ value: MsgEditChain.fromPartial(value) })
      return await this._client.signAndBroadcast(
        this._addr,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:sendMsgEditChain: Could not broadcast Tx: ' + e.message
      )
    }
  }

  async sendMsgRequestRemoveAccount({
    value,
    fee,
    memo
  }: sendMsgRequestRemoveAccountParams): Promise<DeliverTxResponse> {
    if (!this._client) {
      throw new Error(
        'TxClient:sendMsgRequestRemoveAccount: Unable to sign Tx. Signer is not present.'
      )
    }
    if (!this._addr) {
      throw new Error(
        'TxClient:sendMsgRequestRemoveAccount: Unable to sign Tx. Address is not present.'
      )
    }
    try {
      let msg = this.msgRequestRemoveAccount({
        value: MsgRequestRemoveAccount.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._addr,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:sendMsgRequestRemoveAccount: Could not broadcast Tx: ' +
          e.message
      )
    }
  }

  async sendMsgSettleRequest({
    value,
    fee,
    memo
  }: sendMsgSettleRequestParams): Promise<DeliverTxResponse> {
    if (!this._client) {
      throw new Error(
        'TxClient:sendMsgSettleRequest: Unable to sign Tx. Signer is not present.'
      )
    }
    if (!this._addr) {
      throw new Error(
        'TxClient:sendMsgSettleRequest: Unable to sign Tx. Address is not present.'
      )
    }
    try {
      let msg = this.msgSettleRequest({
        value: MsgSettleRequest.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._addr,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:sendMsgSettleRequest: Could not broadcast Tx: ' + e.message
      )
    }
  }

  async sendMsgCreateChain({
    value,
    fee,
    memo
  }: sendMsgCreateChainParams): Promise<DeliverTxResponse> {
    if (!this._client) {
      throw new Error(
        'TxClient:sendMsgCreateChain: Unable to sign Tx. Signer is not present.'
      )
    }
    if (!this._addr) {
      throw new Error(
        'TxClient:sendMsgCreateChain: Unable to sign Tx. Address is not present.'
      )
    }
    try {
      let msg = this.msgCreateChain({
        value: MsgCreateChain.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._addr,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:sendMsgCreateChain: Could not broadcast Tx: ' + e.message
      )
    }
  }

  async sendMsgUpdateLaunchInformation({
    value,
    fee,
    memo
  }: sendMsgUpdateLaunchInformationParams): Promise<DeliverTxResponse> {
    if (!this._client) {
      throw new Error(
        'TxClient:sendMsgUpdateLaunchInformation: Unable to sign Tx. Signer is not present.'
      )
    }
    if (!this._addr) {
      throw new Error(
        'TxClient:sendMsgUpdateLaunchInformation: Unable to sign Tx. Address is not present.'
      )
    }
    try {
      let msg = this.msgUpdateLaunchInformation({
        value: MsgUpdateLaunchInformation.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._addr,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:sendMsgUpdateLaunchInformation: Could not broadcast Tx: ' +
          e.message
      )
    }
  }

  async sendMsgRequestRemoveValidator({
    value,
    fee,
    memo
  }: sendMsgRequestRemoveValidatorParams): Promise<DeliverTxResponse> {
    if (!this._client) {
      throw new Error(
        'TxClient:sendMsgRequestRemoveValidator: Unable to sign Tx. Signer is not present.'
      )
    }
    if (!this._addr) {
      throw new Error(
        'TxClient:sendMsgRequestRemoveValidator: Unable to sign Tx. Address is not present.'
      )
    }
    try {
      let msg = this.msgRequestRemoveValidator({
        value: MsgRequestRemoveValidator.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._addr,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:sendMsgRequestRemoveValidator: Could not broadcast Tx: ' +
          e.message
      )
    }
  }

  async sendMsgRequestAddAccount({
    value,
    fee,
    memo
  }: sendMsgRequestAddAccountParams): Promise<DeliverTxResponse> {
    if (!this._client) {
      throw new Error(
        'TxClient:sendMsgRequestAddAccount: Unable to sign Tx. Signer is not present.'
      )
    }
    if (!this._addr) {
      throw new Error(
        'TxClient:sendMsgRequestAddAccount: Unable to sign Tx. Address is not present.'
      )
    }
    try {
      let msg = this.msgRequestAddAccount({
        value: MsgRequestAddAccount.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._addr,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:sendMsgRequestAddAccount: Could not broadcast Tx: ' +
          e.message
      )
    }
  }

  async sendMsgRequestAddValidator({
    value,
    fee,
    memo
  }: sendMsgRequestAddValidatorParams): Promise<DeliverTxResponse> {
    if (!this._client) {
      throw new Error(
        'TxClient:sendMsgRequestAddValidator: Unable to sign Tx. Signer is not present.'
      )
    }
    if (!this._addr) {
      throw new Error(
        'TxClient:sendMsgRequestAddValidator: Unable to sign Tx. Address is not present.'
      )
    }
    try {
      let msg = this.msgRequestAddValidator({
        value: MsgRequestAddValidator.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._addr,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:sendMsgRequestAddValidator: Could not broadcast Tx: ' +
          e.message
      )
    }
  }

  async sendMsgRevertLaunch({
    value,
    fee,
    memo
  }: sendMsgRevertLaunchParams): Promise<DeliverTxResponse> {
    if (!this._client) {
      throw new Error(
        'TxClient:sendMsgRevertLaunch: Unable to sign Tx. Signer is not present.'
      )
    }
    if (!this._addr) {
      throw new Error(
        'TxClient:sendMsgRevertLaunch: Unable to sign Tx. Address is not present.'
      )
    }
    try {
      let msg = this.msgRevertLaunch({
        value: MsgRevertLaunch.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._addr,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:sendMsgRevertLaunch: Could not broadcast Tx: ' + e.message
      )
    }
  }

  async sendMsgRequestAddVestingAccount({
    value,
    fee,
    memo
  }: sendMsgRequestAddVestingAccountParams): Promise<DeliverTxResponse> {
    if (!this._client) {
      throw new Error(
        'TxClient:sendMsgRequestAddVestingAccount: Unable to sign Tx. Signer is not present.'
      )
    }
    if (!this._addr) {
      throw new Error(
        'TxClient:sendMsgRequestAddVestingAccount: Unable to sign Tx. Address is not present.'
      )
    }
    try {
      let msg = this.msgRequestAddVestingAccount({
        value: MsgRequestAddVestingAccount.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._addr,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:sendMsgRequestAddVestingAccount: Could not broadcast Tx: ' +
          e.message
      )
    }
  }

  async sendMsgTriggerLaunch({
    value,
    fee,
    memo
  }: sendMsgTriggerLaunchParams): Promise<DeliverTxResponse> {
    if (!this._client) {
      throw new Error(
        'TxClient:sendMsgTriggerLaunch: Unable to sign Tx. Signer is not present.'
      )
    }
    if (!this._addr) {
      throw new Error(
        'TxClient:sendMsgTriggerLaunch: Unable to sign Tx. Address is not present.'
      )
    }
    try {
      let msg = this.msgTriggerLaunch({
        value: MsgTriggerLaunch.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._addr,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:sendMsgTriggerLaunch: Could not broadcast Tx: ' + e.message
      )
    }
  }

  msgEditChain({ value }: msgEditChainParams): EncodeObject {
    try {
      return {
        typeUrl: '/tendermint.spn.launch.MsgEditChain',
        value: MsgEditChain.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgEditChain: Could not create message: ' + e.message
      )
    }
  }

  msgRequestRemoveAccount({
    value
  }: msgRequestRemoveAccountParams): EncodeObject {
    try {
      return {
        typeUrl: '/tendermint.spn.launch.MsgRequestRemoveAccount',
        value: MsgRequestRemoveAccount.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgRequestRemoveAccount: Could not create message: ' +
          e.message
      )
    }
  }

  msgSettleRequest({ value }: msgSettleRequestParams): EncodeObject {
    try {
      return {
        typeUrl: '/tendermint.spn.launch.MsgSettleRequest',
        value: MsgSettleRequest.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgSettleRequest: Could not create message: ' + e.message
      )
    }
  }

  msgCreateChain({ value }: msgCreateChainParams): EncodeObject {
    try {
      return {
        typeUrl: '/tendermint.spn.launch.MsgCreateChain',
        value: MsgCreateChain.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgCreateChain: Could not create message: ' + e.message
      )
    }
  }

  msgUpdateLaunchInformation({
    value
  }: msgUpdateLaunchInformationParams): EncodeObject {
    try {
      return {
        typeUrl: '/tendermint.spn.launch.MsgUpdateLaunchInformation',
        value: MsgUpdateLaunchInformation.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgUpdateLaunchInformation: Could not create message: ' +
          e.message
      )
    }
  }

  msgRequestRemoveValidator({
    value
  }: msgRequestRemoveValidatorParams): EncodeObject {
    try {
      return {
        typeUrl: '/tendermint.spn.launch.MsgRequestRemoveValidator',
        value: MsgRequestRemoveValidator.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgRequestRemoveValidator: Could not create message: ' +
          e.message
      )
    }
  }

  msgRequestAddAccount({ value }: msgRequestAddAccountParams): EncodeObject {
    try {
      return {
        typeUrl: '/tendermint.spn.launch.MsgRequestAddAccount',
        value: MsgRequestAddAccount.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgRequestAddAccount: Could not create message: ' + e.message
      )
    }
  }

  msgRequestAddValidator({
    value
  }: msgRequestAddValidatorParams): EncodeObject {
    try {
      return {
        typeUrl: '/tendermint.spn.launch.MsgRequestAddValidator',
        value: MsgRequestAddValidator.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgRequestAddValidator: Could not create message: ' +
          e.message
      )
    }
  }

  msgRevertLaunch({ value }: msgRevertLaunchParams): EncodeObject {
    try {
      return {
        typeUrl: '/tendermint.spn.launch.MsgRevertLaunch',
        value: MsgRevertLaunch.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgRevertLaunch: Could not create message: ' + e.message
      )
    }
  }

  msgRequestAddVestingAccount({
    value
  }: msgRequestAddVestingAccountParams): EncodeObject {
    try {
      return {
        typeUrl: '/tendermint.spn.launch.MsgRequestAddVestingAccount',
        value: MsgRequestAddVestingAccount.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgRequestAddVestingAccount: Could not create message: ' +
          e.message
      )
    }
  }

  msgTriggerLaunch({ value }: msgTriggerLaunchParams): EncodeObject {
    try {
      return {
        typeUrl: '/tendermint.spn.launch.MsgTriggerLaunch',
        value: MsgTriggerLaunch.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgTriggerLaunch: Could not create message: ' + e.message
      )
    }
  }
}

export default Module
