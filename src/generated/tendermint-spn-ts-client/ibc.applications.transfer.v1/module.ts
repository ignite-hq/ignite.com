// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { SigningStargateClient, DeliverTxResponse } from '@cosmjs/stargate'
import { EncodeObject } from '@cosmjs/proto-signing'

import { Api } from './rest'
import { MsgTransfer } from './types/ibc/applications/transfer/v1/tx'

type sendMsgTransferParams = {
  value: MsgTransfer
  fee?: StdFee
  memo?: string
}

type msgTransferParams = {
  value: MsgTransfer
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

  async sendMsgTransfer({
    value,
    fee,
    memo
  }: sendMsgTransferParams): Promise<DeliverTxResponse> {
    if (!this._client) {
      throw new Error(
        'TxClient:sendMsgTransfer: Unable to sign Tx. Signer is not present.'
      )
    }
    if (!this._addr) {
      throw new Error(
        'TxClient:sendMsgTransfer: Unable to sign Tx. Address is not present.'
      )
    }
    try {
      let msg = this.msgTransfer({ value: MsgTransfer.fromPartial(value) })
      return await this._client.signAndBroadcast(
        this._addr,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:sendMsgTransfer: Could not broadcast Tx: ' + e.message
      )
    }
  }

  msgTransfer({ value }: msgTransferParams): EncodeObject {
    try {
      return {
        typeUrl: '/ibc.applications.transfer.v1.MsgTransfer',
        value: MsgTransfer.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgTransfer: Could not create message: ' + e.message
      )
    }
  }
}

export default Module
