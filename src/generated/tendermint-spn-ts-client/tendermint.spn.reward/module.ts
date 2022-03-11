// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject } from "@cosmjs/proto-signing";

import { Api } from "./rest";
import { MsgSetRewards } from "./types/reward/tx";

type sendMsgSetRewardsParams = {
  value: MsgSetRewards;
  fee?: StdFee;
  memo?: string;
};

type msgSetRewardsParams = {
  value: MsgSetRewards;
};

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

  async sendMsgSetRewards({
    value,
    fee,
    memo,
  }: sendMsgSetRewardsParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgSetRewards({ value: MsgSetRewards.fromPartial(value) });
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: "200000" },
        memo
      );
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgSetRewards:Send Could not broadcast Tx: " + e.message
      );
    }
  }

  msgSetRewards({ value }: msgSetRewardsParams): EncodeObject {
    try {
      return {
        typeUrl: "/tendermint.spn.reward.MsgSetRewards",
        value: MsgSetRewards.fromPartial(value),
      };
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgSetRewards:Create Could not create message: " + e.message
      );
    }
  }
}

export default Module;
