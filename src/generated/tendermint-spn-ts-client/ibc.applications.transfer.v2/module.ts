// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject } from "@cosmjs/proto-signing";

import { Api } from "./rest";

class Module extends Api<any> {
  private _client: SigningStargateClient;
  private _address: string;

  constructor(client: SigningStargateClient, address: string, baseUrl: string) {
    super({
      baseUrl,
    });

    this._client = client;
    this._address = address;
  }
}

export default Module;
