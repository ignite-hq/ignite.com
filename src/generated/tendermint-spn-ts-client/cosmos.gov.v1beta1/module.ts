// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject } from "@cosmjs/proto-signing";

import { Api } from "./rest";
import { MsgDeposit } from "./types/cosmos/gov/v1beta1/tx";
import { MsgVote } from "./types/cosmos/gov/v1beta1/tx";
import { MsgVoteWeighted } from "./types/cosmos/gov/v1beta1/tx";
import { MsgSubmitProposal } from "./types/cosmos/gov/v1beta1/tx";



type sendMsgDepositParams = {
  value: MsgDeposit,
  fee?: StdFee,
  memo?: string
};

type sendMsgVoteParams = {
  value: MsgVote,
  fee?: StdFee,
  memo?: string
};

type sendMsgVoteWeightedParams = {
  value: MsgVoteWeighted,
  fee?: StdFee,
  memo?: string
};

type sendMsgSubmitProposalParams = {
  value: MsgSubmitProposal,
  fee?: StdFee,
  memo?: string
};


type msgDepositParams = {
  value: MsgDeposit,
};

type msgVoteParams = {
  value: MsgVote,
};

type msgVoteWeightedParams = {
  value: MsgVoteWeighted,
};

type msgSubmitProposalParams = {
  value: MsgSubmitProposal,
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

	
	async sendMsgDeposit({ value, fee, memo }: sendMsgDepositParams): Promise<DeliverTxResponse> {
		if (!this._client) {
		    throw new Error('TxClient:sendMsgDeposit: Unable to sign Tx. Signer is not present.')
		}
		if (!this._addr) {
            throw new Error('TxClient:sendMsgDeposit: Unable to sign Tx. Address is not present.')
        }
		try {
			let msg = this.msgDeposit({ value: MsgDeposit.fromPartial(value) })
			return await this._client.signAndBroadcast(this._addr, [msg], fee ? fee : { amount: [], gas: '200000' }, memo)
		} catch (e: any) {
			throw new Error('TxClient:sendMsgDeposit: Could not broadcast Tx: '+ e.message)
		}
	}
	
	async sendMsgVote({ value, fee, memo }: sendMsgVoteParams): Promise<DeliverTxResponse> {
		if (!this._client) {
		    throw new Error('TxClient:sendMsgVote: Unable to sign Tx. Signer is not present.')
		}
		if (!this._addr) {
            throw new Error('TxClient:sendMsgVote: Unable to sign Tx. Address is not present.')
        }
		try {
			let msg = this.msgVote({ value: MsgVote.fromPartial(value) })
			return await this._client.signAndBroadcast(this._addr, [msg], fee ? fee : { amount: [], gas: '200000' }, memo)
		} catch (e: any) {
			throw new Error('TxClient:sendMsgVote: Could not broadcast Tx: '+ e.message)
		}
	}
	
	async sendMsgVoteWeighted({ value, fee, memo }: sendMsgVoteWeightedParams): Promise<DeliverTxResponse> {
		if (!this._client) {
		    throw new Error('TxClient:sendMsgVoteWeighted: Unable to sign Tx. Signer is not present.')
		}
		if (!this._addr) {
            throw new Error('TxClient:sendMsgVoteWeighted: Unable to sign Tx. Address is not present.')
        }
		try {
			let msg = this.msgVoteWeighted({ value: MsgVoteWeighted.fromPartial(value) })
			return await this._client.signAndBroadcast(this._addr, [msg], fee ? fee : { amount: [], gas: '200000' }, memo)
		} catch (e: any) {
			throw new Error('TxClient:sendMsgVoteWeighted: Could not broadcast Tx: '+ e.message)
		}
	}
	
	async sendMsgSubmitProposal({ value, fee, memo }: sendMsgSubmitProposalParams): Promise<DeliverTxResponse> {
		if (!this._client) {
		    throw new Error('TxClient:sendMsgSubmitProposal: Unable to sign Tx. Signer is not present.')
		}
		if (!this._addr) {
            throw new Error('TxClient:sendMsgSubmitProposal: Unable to sign Tx. Address is not present.')
        }
		try {
			let msg = this.msgSubmitProposal({ value: MsgSubmitProposal.fromPartial(value) })
			return await this._client.signAndBroadcast(this._addr, [msg], fee ? fee : { amount: [], gas: '200000' }, memo)
		} catch (e: any) {
			throw new Error('TxClient:sendMsgSubmitProposal: Could not broadcast Tx: '+ e.message)
		}
	}
	
	
	msgDeposit({ value }: msgDepositParams): EncodeObject {
		try {
			return { typeUrl: "/cosmos.gov.v1beta1.MsgDeposit", value: MsgDeposit.fromPartial( value ) }  
		} catch (e: any) {
			throw new Error('TxClient:MsgDeposit: Could not create message: ' + e.message)
		}
	}
	
	msgVote({ value }: msgVoteParams): EncodeObject {
		try {
			return { typeUrl: "/cosmos.gov.v1beta1.MsgVote", value: MsgVote.fromPartial( value ) }  
		} catch (e: any) {
			throw new Error('TxClient:MsgVote: Could not create message: ' + e.message)
		}
	}
	
	msgVoteWeighted({ value }: msgVoteWeightedParams): EncodeObject {
		try {
			return { typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted", value: MsgVoteWeighted.fromPartial( value ) }  
		} catch (e: any) {
			throw new Error('TxClient:MsgVoteWeighted: Could not create message: ' + e.message)
		}
	}
	
	msgSubmitProposal({ value }: msgSubmitProposalParams): EncodeObject {
		try {
			return { typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal", value: MsgSubmitProposal.fromPartial( value ) }  
		} catch (e: any) {
			throw new Error('TxClient:MsgSubmitProposal: Could not create message: ' + e.message)
		}
	}
	
};

export default Module;
