// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { SigningStargateClient, DeliverTxResponse } from '@cosmjs/stargate'
import { EncodeObject } from '@cosmjs/proto-signing'

import { Api } from './rest'
import { MsgCreateVestingAccount } from './types/cosmos/vesting/v1beta1/tx'

type sendMsgCreateVestingAccountParams = {
  value: MsgCreateVestingAccount
  fee?: StdFee
  memo?: string
}

type msgCreateVestingAccountParams = {
  value: MsgCreateVestingAccount
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

  async sendMsgCreateVestingAccount({
    value,
    fee,
    memo
  }: sendMsgCreateVestingAccountParams): Promise<DeliverTxResponse> {
    if (!this._client) {
      throw new Error(
        'TxClient:sendMsgCreateVestingAccount: Unable to sign Tx. Signer is not present.'
      )
    }
    if (!this._addr) {
      throw new Error(
        'TxClient:sendMsgCreateVestingAccount: Unable to sign Tx. Address is not present.'
      )
    }
    try {
      let msg = this.msgCreateVestingAccount({
        value: MsgCreateVestingAccount.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._addr,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:sendMsgCreateVestingAccount: Could not broadcast Tx: ' +
          e.message
      )
    }
  }

  msgCreateVestingAccount({
    value
  }: msgCreateVestingAccountParams): EncodeObject {
    try {
      return {
        typeUrl: '/cosmos.vesting.v1beta1.MsgCreateVestingAccount',
        value: MsgCreateVestingAccount.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgCreateVestingAccount: Could not create message: ' +
          e.message
      )
    }
  }
}

export default Module
