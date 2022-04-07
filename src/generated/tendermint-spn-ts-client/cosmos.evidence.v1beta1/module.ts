// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { SigningStargateClient, DeliverTxResponse } from '@cosmjs/stargate'
import { EncodeObject } from '@cosmjs/proto-signing'

import { Api } from './rest'
import { MsgSubmitEvidence } from './types/cosmos/evidence/v1beta1/tx'

type sendMsgSubmitEvidenceParams = {
  value: MsgSubmitEvidence
  fee?: StdFee
  memo?: string
}

type msgSubmitEvidenceParams = {
  value: MsgSubmitEvidence
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

  async sendMsgSubmitEvidence({
    value,
    fee,
    memo
  }: sendMsgSubmitEvidenceParams): Promise<DeliverTxResponse> {
    if (!this._client) {
      throw new Error(
        'TxClient:sendMsgSubmitEvidence: Unable to sign Tx. Signer is not present.'
      )
    }
    if (!this._addr) {
      throw new Error(
        'TxClient:sendMsgSubmitEvidence: Unable to sign Tx. Address is not present.'
      )
    }
    try {
      let msg = this.msgSubmitEvidence({
        value: MsgSubmitEvidence.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._addr,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:sendMsgSubmitEvidence: Could not broadcast Tx: ' + e.message
      )
    }
  }

  msgSubmitEvidence({ value }: msgSubmitEvidenceParams): EncodeObject {
    try {
      return {
        typeUrl: '/cosmos.evidence.v1beta1.MsgSubmitEvidence',
        value: MsgSubmitEvidence.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgSubmitEvidence: Could not create message: ' + e.message
      )
    }
  }
}

export default Module
