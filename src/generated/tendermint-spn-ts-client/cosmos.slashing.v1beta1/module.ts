// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject } from "@cosmjs/proto-signing";

import { Api } from "./rest";
import { MsgUnjail } from "./types/cosmos/slashing/v1beta1/tx";



type sendMsgUnjailParams = {
  value: MsgUnjail,
  fee?: StdFee,
  memo?: string
};


type msgUnjailParams = {
  value: MsgUnjail,
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

	
	async sendMsgUnjail({ value, fee, memo }: sendMsgUnjailParams): Promise<DeliverTxResponse> {
		if (!this._client) {
		    throw new Error('TxClient:sendMsgUnjail: Unable to sign Tx. Signer is not present.')
		}
		if (!this._addr) {
            throw new Error('TxClient:sendMsgUnjail: Unable to sign Tx. Address is not present.')
        }
		try {
			let msg = this.msgUnjail({ value: MsgUnjail.fromPartial(value) })
			return await this._client.signAndBroadcast(this._addr, [msg], fee ? fee : { amount: [], gas: '200000' }, memo)
		} catch (e: any) {
			throw new Error('TxClient:sendMsgUnjail: Could not broadcast Tx: '+ e.message)
		}
	}
	
	
	msgUnjail({ value }: msgUnjailParams): EncodeObject {
		try {
			return { typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail", value: MsgUnjail.fromPartial( value ) }  
		} catch (e: any) {
			throw new Error('TxClient:MsgUnjail: Could not create message: ' + e.message)
		}
	}
	
};

export default Module;
