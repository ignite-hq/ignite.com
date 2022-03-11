// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject } from "@cosmjs/proto-signing";

import { Api } from "./rest";
import { MsgCancelAuction } from "./types/fundraising/tx";
import { MsgCreateEnglishAuction } from "./types/fundraising/tx";
import { MsgAddAllowedBidder } from "./types/fundraising/tx";
import { MsgCreateFixedPriceAuction } from "./types/fundraising/tx";
import { MsgPlaceBid } from "./types/fundraising/tx";

type sendMsgCancelAuctionParams = {
  value: MsgCancelAuction;
  fee?: StdFee;
  memo?: string;
};

type sendMsgCreateEnglishAuctionParams = {
  value: MsgCreateEnglishAuction;
  fee?: StdFee;
  memo?: string;
};

type sendMsgAddAllowedBidderParams = {
  value: MsgAddAllowedBidder;
  fee?: StdFee;
  memo?: string;
};

type sendMsgCreateFixedPriceAuctionParams = {
  value: MsgCreateFixedPriceAuction;
  fee?: StdFee;
  memo?: string;
};

type sendMsgPlaceBidParams = {
  value: MsgPlaceBid;
  fee?: StdFee;
  memo?: string;
};

type msgCancelAuctionParams = {
  value: MsgCancelAuction;
};

type msgCreateEnglishAuctionParams = {
  value: MsgCreateEnglishAuction;
};

type msgAddAllowedBidderParams = {
  value: MsgAddAllowedBidder;
};

type msgCreateFixedPriceAuctionParams = {
  value: MsgCreateFixedPriceAuction;
};

type msgPlaceBidParams = {
  value: MsgPlaceBid;
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

  async sendMsgCancelAuction({
    value,
    fee,
    memo,
  }: sendMsgCancelAuctionParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgCancelAuction({
        value: MsgCancelAuction.fromPartial(value),
      });
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: "200000" },
        memo
      );
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgCancelAuction:Send Could not broadcast Tx: " + e.message
      );
    }
  }

  async sendMsgCreateEnglishAuction({
    value,
    fee,
    memo,
  }: sendMsgCreateEnglishAuctionParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgCreateEnglishAuction({
        value: MsgCreateEnglishAuction.fromPartial(value),
      });
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: "200000" },
        memo
      );
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgCreateEnglishAuction:Send Could not broadcast Tx: " +
          e.message
      );
    }
  }

  async sendMsgAddAllowedBidder({
    value,
    fee,
    memo,
  }: sendMsgAddAllowedBidderParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgAddAllowedBidder({
        value: MsgAddAllowedBidder.fromPartial(value),
      });
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: "200000" },
        memo
      );
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgAddAllowedBidder:Send Could not broadcast Tx: " + e.message
      );
    }
  }

  async sendMsgCreateFixedPriceAuction({
    value,
    fee,
    memo,
  }: sendMsgCreateFixedPriceAuctionParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgCreateFixedPriceAuction({
        value: MsgCreateFixedPriceAuction.fromPartial(value),
      });
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: "200000" },
        memo
      );
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgCreateFixedPriceAuction:Send Could not broadcast Tx: " +
          e.message
      );
    }
  }

  async sendMsgPlaceBid({
    value,
    fee,
    memo,
  }: sendMsgPlaceBidParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgPlaceBid({ value: MsgPlaceBid.fromPartial(value) });
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: "200000" },
        memo
      );
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgPlaceBid:Send Could not broadcast Tx: " + e.message
      );
    }
  }

  msgCancelAuction({ value }: msgCancelAuctionParams): EncodeObject {
    try {
      return {
        typeUrl: "/tendermint.fundraising.MsgCancelAuction",
        value: MsgCancelAuction.fromPartial(value),
      };
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgCancelAuction:Create Could not create message: " +
          e.message
      );
    }
  }

  msgCreateEnglishAuction({
    value,
  }: msgCreateEnglishAuctionParams): EncodeObject {
    try {
      return {
        typeUrl: "/tendermint.fundraising.MsgCreateEnglishAuction",
        value: MsgCreateEnglishAuction.fromPartial(value),
      };
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgCreateEnglishAuction:Create Could not create message: " +
          e.message
      );
    }
  }

  msgAddAllowedBidder({ value }: msgAddAllowedBidderParams): EncodeObject {
    try {
      return {
        typeUrl: "/tendermint.fundraising.MsgAddAllowedBidder",
        value: MsgAddAllowedBidder.fromPartial(value),
      };
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgAddAllowedBidder:Create Could not create message: " +
          e.message
      );
    }
  }

  msgCreateFixedPriceAuction({
    value,
  }: msgCreateFixedPriceAuctionParams): EncodeObject {
    try {
      return {
        typeUrl: "/tendermint.fundraising.MsgCreateFixedPriceAuction",
        value: MsgCreateFixedPriceAuction.fromPartial(value),
      };
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgCreateFixedPriceAuction:Create Could not create message: " +
          e.message
      );
    }
  }

  msgPlaceBid({ value }: msgPlaceBidParams): EncodeObject {
    try {
      return {
        typeUrl: "/tendermint.fundraising.MsgPlaceBid",
        value: MsgPlaceBid.fromPartial(value),
      };
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgPlaceBid:Create Could not create message: " + e.message
      );
    }
  }
}

export default Module;
