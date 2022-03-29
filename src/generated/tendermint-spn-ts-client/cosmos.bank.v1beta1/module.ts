// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject } from "@cosmjs/proto-signing";

import { Api } from "./rest";
import { MsgSend } from "./types/cosmos/bank/v1beta1/tx";
import { MsgMultiSend } from "./types/cosmos/bank/v1beta1/tx";



type sendMsgSendParams = {
  value: MsgSend,
  fee?: StdFee,
  memo?: string
};

type sendMsgMultiSendParams = {
  value: MsgMultiSend,
  fee?: StdFee,
  memo?: string
};


type msgSendParams = {
  value: MsgSend,
};

type msgMultiSendParams = {
  value: MsgMultiSend,
};


class Module extends Api<any> {
	private _client: SigningStargateClient;
	private _addr: string;

  	constructor(baseUrl: string) {
		super({
			baseUrl
		})
	}

	public withSigner(client: SigningStargateClient, _addr: string) {
		this._client = client;
		this._addr = _addr;
	}

	
	async sendMsgSend({ value, fee, memo }: sendMsgSendParams): Promise<DeliverTxResponse> {
		if (!this._client) {
		    throw new Error('TxClient:sendMsgSend: Unable to sign Tx. Signer is not present.')
		}
		if (!this._addr) {
            throw new Error('TxClient:sendMsgSend: Unable to sign Tx. Address is not present.')
        }
		try {
			let msg = this.msgSend({ value: MsgSend.fromPartial(value) })
			return await this._client.signAndBroadcast(this._addr, [msg], fee ? fee : { amount: [], gas: '200000' }, memo)
		} catch (e: any) {
			throw new Error('TxClient:sendMsgSend: Could not broadcast Tx: '+ e.message)
		}
	}
	
	async sendMsgMultiSend({ value, fee, memo }: sendMsgMultiSendParams): Promise<DeliverTxResponse> {
		if (!this._client) {
		    throw new Error('TxClient:sendMsgMultiSend: Unable to sign Tx. Signer is not present.')
		}
		if (!this._addr) {
            throw new Error('TxClient:sendMsgMultiSend: Unable to sign Tx. Address is not present.')
        }
		try {
			let msg = this.msgMultiSend({ value: MsgMultiSend.fromPartial(value) })
			return await this._client.signAndBroadcast(this._addr, [msg], fee ? fee : { amount: [], gas: '200000' }, memo)
		} catch (e: any) {
			throw new Error('TxClient:sendMsgMultiSend: Could not broadcast Tx: '+ e.message)
		}
	}
	
	
	msgSend({ value }: msgSendParams): EncodeObject {
		try {
			return { typeUrl: "/cosmos.bank.v1beta1.MsgSend", value: MsgSend.fromPartial( value ) }  
		} catch (e: any) {
			throw new Error('TxClient:MsgSend: Could not create message: ' + e.message)
		}
	}
	
	msgMultiSend({ value }: msgMultiSendParams): EncodeObject {
		try {
			return { typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend", value: MsgMultiSend.fromPartial( value ) }  
		} catch (e: any) {
			throw new Error('TxClient:MsgMultiSend: Could not create message: ' + e.message)
		}
	}
	
};

export default Module;
