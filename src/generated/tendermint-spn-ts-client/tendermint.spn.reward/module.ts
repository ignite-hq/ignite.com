// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { SigningStargateClient, DeliverTxResponse } from '@cosmjs/stargate'
import { EncodeObject } from '@cosmjs/proto-signing'

import { Api } from './rest'
import { MsgSetRewards } from './types/reward/tx'

type sendMsgSetRewardsParams = {
  value: MsgSetRewards
  fee?: StdFee
  memo?: string
}

type msgSetRewardsParams = {
  value: MsgSetRewards
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

  async sendMsgSetRewards({
    value,
    fee,
    memo
  }: sendMsgSetRewardsParams): Promise<DeliverTxResponse> {
    if (!this._client) {
      throw new Error(
        'TxClient:sendMsgSetRewards: Unable to sign Tx. Signer is not present.'
      )
    }
    if (!this._addr) {
      throw new Error(
        'TxClient:sendMsgSetRewards: Unable to sign Tx. Address is not present.'
      )
    }
    try {
      let msg = this.msgSetRewards({ value: MsgSetRewards.fromPartial(value) })
      return await this._client.signAndBroadcast(
        this._addr,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:sendMsgSetRewards: Could not broadcast Tx: ' + e.message
      )
    }
  }

  msgSetRewards({ value }: msgSetRewardsParams): EncodeObject {
    try {
      return {
        typeUrl: '/tendermint.spn.reward.MsgSetRewards',
        value: MsgSetRewards.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgSetRewards: Could not create message: ' + e.message
      )
    }
  }
}

export default Module
