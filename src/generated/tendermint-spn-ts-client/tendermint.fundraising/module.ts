// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject } from "@cosmjs/proto-signing";

import { Api } from "./rest";
import { MsgAddAllowedBidder } from "./types/fundraising/tx";
import { MsgCreateFixedPriceAuction } from "./types/fundraising/tx";
import { MsgCancelAuction } from "./types/fundraising/tx";
import { MsgPlaceBid } from "./types/fundraising/tx";
import { MsgCreateEnglishAuction } from "./types/fundraising/tx";



type sendMsgAddAllowedBidderParams = {
  value: MsgAddAllowedBidder,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateFixedPriceAuctionParams = {
  value: MsgCreateFixedPriceAuction,
  fee?: StdFee,
  memo?: string
};

type sendMsgCancelAuctionParams = {
  value: MsgCancelAuction,
  fee?: StdFee,
  memo?: string
};

type sendMsgPlaceBidParams = {
  value: MsgPlaceBid,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateEnglishAuctionParams = {
  value: MsgCreateEnglishAuction,
  fee?: StdFee,
  memo?: string
};


type msgAddAllowedBidderParams = {
  value: MsgAddAllowedBidder,
};

type msgCreateFixedPriceAuctionParams = {
  value: MsgCreateFixedPriceAuction,
};

type msgCancelAuctionParams = {
  value: MsgCancelAuction,
};

type msgPlaceBidParams = {
  value: MsgPlaceBid,
};

type msgCreateEnglishAuctionParams = {
  value: MsgCreateEnglishAuction,
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

	
	async sendMsgAddAllowedBidder({ value, fee, memo }: sendMsgAddAllowedBidderParams): Promise<DeliverTxResponse> {
		if (!this._client) {
		    throw new Error('TxClient:sendMsgAddAllowedBidder: Unable to sign Tx. Signer is not present.')
		}
		if (!this._addr) {
            throw new Error('TxClient:sendMsgAddAllowedBidder: Unable to sign Tx. Address is not present.')
        }
		try {
			let msg = this.msgAddAllowedBidder({ value: MsgAddAllowedBidder.fromPartial(value) })
			return await this._client.signAndBroadcast(this._addr, [msg], fee ? fee : { amount: [], gas: '200000' }, memo)
		} catch (e: any) {
			throw new Error('TxClient:sendMsgAddAllowedBidder: Could not broadcast Tx: '+ e.message)
		}
	}
	
	async sendMsgCreateFixedPriceAuction({ value, fee, memo }: sendMsgCreateFixedPriceAuctionParams): Promise<DeliverTxResponse> {
		if (!this._client) {
		    throw new Error('TxClient:sendMsgCreateFixedPriceAuction: Unable to sign Tx. Signer is not present.')
		}
		if (!this._addr) {
            throw new Error('TxClient:sendMsgCreateFixedPriceAuction: Unable to sign Tx. Address is not present.')
        }
		try {
			let msg = this.msgCreateFixedPriceAuction({ value: MsgCreateFixedPriceAuction.fromPartial(value) })
			return await this._client.signAndBroadcast(this._addr, [msg], fee ? fee : { amount: [], gas: '200000' }, memo)
		} catch (e: any) {
			throw new Error('TxClient:sendMsgCreateFixedPriceAuction: Could not broadcast Tx: '+ e.message)
		}
	}
	
	async sendMsgCancelAuction({ value, fee, memo }: sendMsgCancelAuctionParams): Promise<DeliverTxResponse> {
		if (!this._client) {
		    throw new Error('TxClient:sendMsgCancelAuction: Unable to sign Tx. Signer is not present.')
		}
		if (!this._addr) {
            throw new Error('TxClient:sendMsgCancelAuction: Unable to sign Tx. Address is not present.')
        }
		try {
			let msg = this.msgCancelAuction({ value: MsgCancelAuction.fromPartial(value) })
			return await this._client.signAndBroadcast(this._addr, [msg], fee ? fee : { amount: [], gas: '200000' }, memo)
		} catch (e: any) {
			throw new Error('TxClient:sendMsgCancelAuction: Could not broadcast Tx: '+ e.message)
		}
	}
	
	async sendMsgPlaceBid({ value, fee, memo }: sendMsgPlaceBidParams): Promise<DeliverTxResponse> {
		if (!this._client) {
		    throw new Error('TxClient:sendMsgPlaceBid: Unable to sign Tx. Signer is not present.')
		}
		if (!this._addr) {
            throw new Error('TxClient:sendMsgPlaceBid: Unable to sign Tx. Address is not present.')
        }
		try {
			let msg = this.msgPlaceBid({ value: MsgPlaceBid.fromPartial(value) })
			return await this._client.signAndBroadcast(this._addr, [msg], fee ? fee : { amount: [], gas: '200000' }, memo)
		} catch (e: any) {
			throw new Error('TxClient:sendMsgPlaceBid: Could not broadcast Tx: '+ e.message)
		}
	}
	
	async sendMsgCreateEnglishAuction({ value, fee, memo }: sendMsgCreateEnglishAuctionParams): Promise<DeliverTxResponse> {
		if (!this._client) {
		    throw new Error('TxClient:sendMsgCreateEnglishAuction: Unable to sign Tx. Signer is not present.')
		}
		if (!this._addr) {
            throw new Error('TxClient:sendMsgCreateEnglishAuction: Unable to sign Tx. Address is not present.')
        }
		try {
			let msg = this.msgCreateEnglishAuction({ value: MsgCreateEnglishAuction.fromPartial(value) })
			return await this._client.signAndBroadcast(this._addr, [msg], fee ? fee : { amount: [], gas: '200000' }, memo)
		} catch (e: any) {
			throw new Error('TxClient:sendMsgCreateEnglishAuction: Could not broadcast Tx: '+ e.message)
		}
	}
	
	
	msgAddAllowedBidder({ value }: msgAddAllowedBidderParams): EncodeObject {
		try {
			return { typeUrl: "/tendermint.fundraising.MsgAddAllowedBidder", value: MsgAddAllowedBidder.fromPartial( value ) }  
		} catch (e: any) {
			throw new Error('TxClient:MsgAddAllowedBidder: Could not create message: ' + e.message)
		}
	}
	
	msgCreateFixedPriceAuction({ value }: msgCreateFixedPriceAuctionParams): EncodeObject {
		try {
			return { typeUrl: "/tendermint.fundraising.MsgCreateFixedPriceAuction", value: MsgCreateFixedPriceAuction.fromPartial( value ) }  
		} catch (e: any) {
			throw new Error('TxClient:MsgCreateFixedPriceAuction: Could not create message: ' + e.message)
		}
	}
	
	msgCancelAuction({ value }: msgCancelAuctionParams): EncodeObject {
		try {
			return { typeUrl: "/tendermint.fundraising.MsgCancelAuction", value: MsgCancelAuction.fromPartial( value ) }  
		} catch (e: any) {
			throw new Error('TxClient:MsgCancelAuction: Could not create message: ' + e.message)
		}
	}
	
	msgPlaceBid({ value }: msgPlaceBidParams): EncodeObject {
		try {
			return { typeUrl: "/tendermint.fundraising.MsgPlaceBid", value: MsgPlaceBid.fromPartial( value ) }  
		} catch (e: any) {
			throw new Error('TxClient:MsgPlaceBid: Could not create message: ' + e.message)
		}
	}
	
	msgCreateEnglishAuction({ value }: msgCreateEnglishAuctionParams): EncodeObject {
		try {
			return { typeUrl: "/tendermint.fundraising.MsgCreateEnglishAuction", value: MsgCreateEnglishAuction.fromPartial( value ) }  
		} catch (e: any) {
			throw new Error('TxClient:MsgCreateEnglishAuction: Could not create message: ' + e.message)
		}
	}
	
};

export default Module;
