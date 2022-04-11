// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { SigningStargateClient, DeliverTxResponse } from '@cosmjs/stargate'
import { EncodeObject } from '@cosmjs/proto-signing'

import { Api } from './rest'

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
}

export default Module
