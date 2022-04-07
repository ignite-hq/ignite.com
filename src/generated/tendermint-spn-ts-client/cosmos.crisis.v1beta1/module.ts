// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { SigningStargateClient, DeliverTxResponse } from '@cosmjs/stargate'
import { EncodeObject } from '@cosmjs/proto-signing'

import { Api } from './rest'
import { MsgVerifyInvariant } from './types/cosmos/crisis/v1beta1/tx'

type sendMsgVerifyInvariantParams = {
  value: MsgVerifyInvariant
  fee?: StdFee
  memo?: string
}

type msgVerifyInvariantParams = {
  value: MsgVerifyInvariant
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

  async sendMsgVerifyInvariant({
    value,
    fee,
    memo
  }: sendMsgVerifyInvariantParams): Promise<DeliverTxResponse> {
    if (!this._client) {
      throw new Error(
        'TxClient:sendMsgVerifyInvariant: Unable to sign Tx. Signer is not present.'
      )
    }
    if (!this._addr) {
      throw new Error(
        'TxClient:sendMsgVerifyInvariant: Unable to sign Tx. Address is not present.'
      )
    }
    try {
      let msg = this.msgVerifyInvariant({
        value: MsgVerifyInvariant.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._addr,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:sendMsgVerifyInvariant: Could not broadcast Tx: ' + e.message
      )
    }
  }

  msgVerifyInvariant({ value }: msgVerifyInvariantParams): EncodeObject {
    try {
      return {
        typeUrl: '/cosmos.crisis.v1beta1.MsgVerifyInvariant',
        value: MsgVerifyInvariant.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgVerifyInvariant: Could not create message: ' + e.message
      )
    }
  }
}

export default Module
