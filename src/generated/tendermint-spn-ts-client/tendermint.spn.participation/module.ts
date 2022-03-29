// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject } from "@cosmjs/proto-signing";

import { Api } from "./rest";
import { MsgWithdrawAllocations } from "./types/participation/tx";
import { MsgParticipate } from "./types/participation/tx";



type sendMsgWithdrawAllocationsParams = {
  value: MsgWithdrawAllocations,
  fee?: StdFee,
  memo?: string
};

type sendMsgParticipateParams = {
  value: MsgParticipate,
  fee?: StdFee,
  memo?: string
};


type msgWithdrawAllocationsParams = {
  value: MsgWithdrawAllocations,
};

type msgParticipateParams = {
  value: MsgParticipate,
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

	
	async sendMsgWithdrawAllocations({ value, fee, memo }: sendMsgWithdrawAllocationsParams): Promise<DeliverTxResponse> {
		if (!this._client) {
		    throw new Error('TxClient:sendMsgWithdrawAllocations: Unable to sign Tx. Signer is not present.')
		}
		if (!this._addr) {
            throw new Error('TxClient:sendMsgWithdrawAllocations: Unable to sign Tx. Address is not present.')
        }
		try {
			let msg = this.msgWithdrawAllocations({ value: MsgWithdrawAllocations.fromPartial(value) })
			return await this._client.signAndBroadcast(this._addr, [msg], fee ? fee : { amount: [], gas: '200000' }, memo)
		} catch (e: any) {
			throw new Error('TxClient:sendMsgWithdrawAllocations: Could not broadcast Tx: '+ e.message)
		}
	}
	
	async sendMsgParticipate({ value, fee, memo }: sendMsgParticipateParams): Promise<DeliverTxResponse> {
		if (!this._client) {
		    throw new Error('TxClient:sendMsgParticipate: Unable to sign Tx. Signer is not present.')
		}
		if (!this._addr) {
            throw new Error('TxClient:sendMsgParticipate: Unable to sign Tx. Address is not present.')
        }
		try {
			let msg = this.msgParticipate({ value: MsgParticipate.fromPartial(value) })
			return await this._client.signAndBroadcast(this._addr, [msg], fee ? fee : { amount: [], gas: '200000' }, memo)
		} catch (e: any) {
			throw new Error('TxClient:sendMsgParticipate: Could not broadcast Tx: '+ e.message)
		}
	}
	
	
	msgWithdrawAllocations({ value }: msgWithdrawAllocationsParams): EncodeObject {
		try {
			return { typeUrl: "/tendermint.spn.participation.MsgWithdrawAllocations", value: MsgWithdrawAllocations.fromPartial( value ) }  
		} catch (e: any) {
			throw new Error('TxClient:MsgWithdrawAllocations: Could not create message: ' + e.message)
		}
	}
	
	msgParticipate({ value }: msgParticipateParams): EncodeObject {
		try {
			return { typeUrl: "/tendermint.spn.participation.MsgParticipate", value: MsgParticipate.fromPartial( value ) }  
		} catch (e: any) {
			throw new Error('TxClient:MsgParticipate: Could not create message: ' + e.message)
		}
	}
	
};

export default Module;
