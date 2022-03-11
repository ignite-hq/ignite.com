// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject } from "@cosmjs/proto-signing";

import { Api } from "./rest";
import { MsgSettleRequest } from "./types/launch/tx";
import { MsgRequestAddVestingAccount } from "./types/launch/tx";
import { MsgRequestRemoveValidator } from "./types/launch/tx";
import { MsgTriggerLaunch } from "./types/launch/tx";
import { MsgRevertLaunch } from "./types/launch/tx";
import { MsgCreateChain } from "./types/launch/tx";
import { MsgRequestAddValidator } from "./types/launch/tx";
import { MsgRequestRemoveAccount } from "./types/launch/tx";
import { MsgRequestAddAccount } from "./types/launch/tx";
import { MsgEditChain } from "./types/launch/tx";

type sendMsgSettleRequestParams = {
  value: MsgSettleRequest;
  fee?: StdFee;
  memo?: string;
};

type sendMsgRequestAddVestingAccountParams = {
  value: MsgRequestAddVestingAccount;
  fee?: StdFee;
  memo?: string;
};

type sendMsgRequestRemoveValidatorParams = {
  value: MsgRequestRemoveValidator;
  fee?: StdFee;
  memo?: string;
};

type sendMsgTriggerLaunchParams = {
  value: MsgTriggerLaunch;
  fee?: StdFee;
  memo?: string;
};

type sendMsgRevertLaunchParams = {
  value: MsgRevertLaunch;
  fee?: StdFee;
  memo?: string;
};

type sendMsgCreateChainParams = {
  value: MsgCreateChain;
  fee?: StdFee;
  memo?: string;
};

type sendMsgRequestAddValidatorParams = {
  value: MsgRequestAddValidator;
  fee?: StdFee;
  memo?: string;
};

type sendMsgRequestRemoveAccountParams = {
  value: MsgRequestRemoveAccount;
  fee?: StdFee;
  memo?: string;
};

type sendMsgRequestAddAccountParams = {
  value: MsgRequestAddAccount;
  fee?: StdFee;
  memo?: string;
};

type sendMsgEditChainParams = {
  value: MsgEditChain;
  fee?: StdFee;
  memo?: string;
};

type msgSettleRequestParams = {
  value: MsgSettleRequest;
};

type msgRequestAddVestingAccountParams = {
  value: MsgRequestAddVestingAccount;
};

type msgRequestRemoveValidatorParams = {
  value: MsgRequestRemoveValidator;
};

type msgTriggerLaunchParams = {
  value: MsgTriggerLaunch;
};

type msgRevertLaunchParams = {
  value: MsgRevertLaunch;
};

type msgCreateChainParams = {
  value: MsgCreateChain;
};

type msgRequestAddValidatorParams = {
  value: MsgRequestAddValidator;
};

type msgRequestRemoveAccountParams = {
  value: MsgRequestRemoveAccount;
};

type msgRequestAddAccountParams = {
  value: MsgRequestAddAccount;
};

type msgEditChainParams = {
  value: MsgEditChain;
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

  async sendMsgSettleRequest({
    value,
    fee,
    memo,
  }: sendMsgSettleRequestParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgSettleRequest({
        value: MsgSettleRequest.fromPartial(value),
      });
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: "200000" },
        memo
      );
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgSettleRequest:Send Could not broadcast Tx: " + e.message
      );
    }
  }

  async sendMsgRequestAddVestingAccount({
    value,
    fee,
    memo,
  }: sendMsgRequestAddVestingAccountParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgRequestAddVestingAccount({
        value: MsgRequestAddVestingAccount.fromPartial(value),
      });
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: "200000" },
        memo
      );
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgRequestAddVestingAccount:Send Could not broadcast Tx: " +
          e.message
      );
    }
  }

  async sendMsgRequestRemoveValidator({
    value,
    fee,
    memo,
  }: sendMsgRequestRemoveValidatorParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgRequestRemoveValidator({
        value: MsgRequestRemoveValidator.fromPartial(value),
      });
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: "200000" },
        memo
      );
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgRequestRemoveValidator:Send Could not broadcast Tx: " +
          e.message
      );
    }
  }

  async sendMsgTriggerLaunch({
    value,
    fee,
    memo,
  }: sendMsgTriggerLaunchParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgTriggerLaunch({
        value: MsgTriggerLaunch.fromPartial(value),
      });
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: "200000" },
        memo
      );
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgTriggerLaunch:Send Could not broadcast Tx: " + e.message
      );
    }
  }

  async sendMsgRevertLaunch({
    value,
    fee,
    memo,
  }: sendMsgRevertLaunchParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgRevertLaunch({
        value: MsgRevertLaunch.fromPartial(value),
      });
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: "200000" },
        memo
      );
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgRevertLaunch:Send Could not broadcast Tx: " + e.message
      );
    }
  }

  async sendMsgCreateChain({
    value,
    fee,
    memo,
  }: sendMsgCreateChainParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgCreateChain({
        value: MsgCreateChain.fromPartial(value),
      });
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: "200000" },
        memo
      );
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgCreateChain:Send Could not broadcast Tx: " + e.message
      );
    }
  }

  async sendMsgRequestAddValidator({
    value,
    fee,
    memo,
  }: sendMsgRequestAddValidatorParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgRequestAddValidator({
        value: MsgRequestAddValidator.fromPartial(value),
      });
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: "200000" },
        memo
      );
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgRequestAddValidator:Send Could not broadcast Tx: " +
          e.message
      );
    }
  }

  async sendMsgRequestRemoveAccount({
    value,
    fee,
    memo,
  }: sendMsgRequestRemoveAccountParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgRequestRemoveAccount({
        value: MsgRequestRemoveAccount.fromPartial(value),
      });
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: "200000" },
        memo
      );
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgRequestRemoveAccount:Send Could not broadcast Tx: " +
          e.message
      );
    }
  }

  async sendMsgRequestAddAccount({
    value,
    fee,
    memo,
  }: sendMsgRequestAddAccountParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgRequestAddAccount({
        value: MsgRequestAddAccount.fromPartial(value),
      });
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: "200000" },
        memo
      );
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgRequestAddAccount:Send Could not broadcast Tx: " +
          e.message
      );
    }
  }

  async sendMsgEditChain({
    value,
    fee,
    memo,
  }: sendMsgEditChainParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgEditChain({ value: MsgEditChain.fromPartial(value) });
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: "200000" },
        memo
      );
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgEditChain:Send Could not broadcast Tx: " + e.message
      );
    }
  }

  msgSettleRequest({ value }: msgSettleRequestParams): EncodeObject {
    try {
      return {
        typeUrl: "/tendermint.spn.launch.MsgSettleRequest",
        value: MsgSettleRequest.fromPartial(value),
      };
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgSettleRequest:Create Could not create message: " +
          e.message
      );
    }
  }

  msgRequestAddVestingAccount({
    value,
  }: msgRequestAddVestingAccountParams): EncodeObject {
    try {
      return {
        typeUrl: "/tendermint.spn.launch.MsgRequestAddVestingAccount",
        value: MsgRequestAddVestingAccount.fromPartial(value),
      };
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgRequestAddVestingAccount:Create Could not create message: " +
          e.message
      );
    }
  }

  msgRequestRemoveValidator({
    value,
  }: msgRequestRemoveValidatorParams): EncodeObject {
    try {
      return {
        typeUrl: "/tendermint.spn.launch.MsgRequestRemoveValidator",
        value: MsgRequestRemoveValidator.fromPartial(value),
      };
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgRequestRemoveValidator:Create Could not create message: " +
          e.message
      );
    }
  }

  msgTriggerLaunch({ value }: msgTriggerLaunchParams): EncodeObject {
    try {
      return {
        typeUrl: "/tendermint.spn.launch.MsgTriggerLaunch",
        value: MsgTriggerLaunch.fromPartial(value),
      };
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgTriggerLaunch:Create Could not create message: " +
          e.message
      );
    }
  }

  msgRevertLaunch({ value }: msgRevertLaunchParams): EncodeObject {
    try {
      return {
        typeUrl: "/tendermint.spn.launch.MsgRevertLaunch",
        value: MsgRevertLaunch.fromPartial(value),
      };
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgRevertLaunch:Create Could not create message: " + e.message
      );
    }
  }

  msgCreateChain({ value }: msgCreateChainParams): EncodeObject {
    try {
      return {
        typeUrl: "/tendermint.spn.launch.MsgCreateChain",
        value: MsgCreateChain.fromPartial(value),
      };
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgCreateChain:Create Could not create message: " + e.message
      );
    }
  }

  msgRequestAddValidator({
    value,
  }: msgRequestAddValidatorParams): EncodeObject {
    try {
      return {
        typeUrl: "/tendermint.spn.launch.MsgRequestAddValidator",
        value: MsgRequestAddValidator.fromPartial(value),
      };
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgRequestAddValidator:Create Could not create message: " +
          e.message
      );
    }
  }

  msgRequestRemoveAccount({
    value,
  }: msgRequestRemoveAccountParams): EncodeObject {
    try {
      return {
        typeUrl: "/tendermint.spn.launch.MsgRequestRemoveAccount",
        value: MsgRequestRemoveAccount.fromPartial(value),
      };
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgRequestRemoveAccount:Create Could not create message: " +
          e.message
      );
    }
  }

  msgRequestAddAccount({ value }: msgRequestAddAccountParams): EncodeObject {
    try {
      return {
        typeUrl: "/tendermint.spn.launch.MsgRequestAddAccount",
        value: MsgRequestAddAccount.fromPartial(value),
      };
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgRequestAddAccount:Create Could not create message: " +
          e.message
      );
    }
  }

  msgEditChain({ value }: msgEditChainParams): EncodeObject {
    try {
      return {
        typeUrl: "/tendermint.spn.launch.MsgEditChain",
        value: MsgEditChain.fromPartial(value),
      };
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgEditChain:Create Could not create message: " + e.message
      );
    }
  }
}

export default Module;
