// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { SigningStargateClient, DeliverTxResponse } from '@cosmjs/stargate'
import { EncodeObject } from '@cosmjs/proto-signing'

import { Api } from './rest'
import { MsgCreateClient } from './types/monitoringc/tx'

type sendMsgCreateClientParams = {
  value: MsgCreateClient
  fee?: StdFee
  memo?: string
}

type msgCreateClientParams = {
  value: MsgCreateClient
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

  async sendMsgCreateClient({
    value,
    fee,
    memo
  }: sendMsgCreateClientParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgCreateClient({
        value: MsgCreateClient.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgCreateClient:Send Could not broadcast Tx: ' + e.message
      )
    }
  }

  msgCreateClient({ value }: msgCreateClientParams): EncodeObject {
    try {
      return {
        typeUrl: '/tendermint.spn.monitoringc.MsgCreateClient',
        value: MsgCreateClient.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgCreateClient:Create Could not create message: ' + e.message
      )
    }
  }
}

export default Module
