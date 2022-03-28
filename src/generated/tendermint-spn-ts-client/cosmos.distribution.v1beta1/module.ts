// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject } from "@cosmjs/proto-signing";

import { Api } from "./rest";
import { MsgWithdrawValidatorCommission } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgSetWithdrawAddress } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgFundCommunityPool } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgWithdrawDelegatorReward } from "./types/cosmos/distribution/v1beta1/tx";



type sendMsgWithdrawValidatorCommissionParams = {
  value: MsgWithdrawValidatorCommission,
  fee?: StdFee,
  memo?: string
};

type sendMsgSetWithdrawAddressParams = {
  value: MsgSetWithdrawAddress,
  fee?: StdFee,
  memo?: string
};

type sendMsgFundCommunityPoolParams = {
  value: MsgFundCommunityPool,
  fee?: StdFee,
  memo?: string
};

type sendMsgWithdrawDelegatorRewardParams = {
  value: MsgWithdrawDelegatorReward,
  fee?: StdFee,
  memo?: string
};


type msgWithdrawValidatorCommissionParams = {
  value: MsgWithdrawValidatorCommission,
};

type msgSetWithdrawAddressParams = {
  value: MsgSetWithdrawAddress,
};

type msgFundCommunityPoolParams = {
  value: MsgFundCommunityPool,
};

type msgWithdrawDelegatorRewardParams = {
  value: MsgWithdrawDelegatorReward,
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

	
	async sendMsgWithdrawValidatorCommission({ value, fee, memo }: sendMsgWithdrawValidatorCommissionParams): Promise<DeliverTxResponse> {
		if (!this._client) {
		    throw new Error('TxClient:sendMsgWithdrawValidatorCommission: Unable to sign Tx. Signer is not present.')
		}
		if (!this._addr) {
            throw new Error('TxClient:sendMsgWithdrawValidatorCommission: Unable to sign Tx. Address is not present.')
        }
		try {
			let msg = this.msgWithdrawValidatorCommission({ value: MsgWithdrawValidatorCommission.fromPartial(value) })
			return await this._client.signAndBroadcast(this._addr, [msg], fee ? fee : { amount: [], gas: '200000' }, memo)
		} catch (e: any) {
			throw new Error('TxClient:sendMsgWithdrawValidatorCommission: Could not broadcast Tx: '+ e.message)
		}
	}
	
	async sendMsgSetWithdrawAddress({ value, fee, memo }: sendMsgSetWithdrawAddressParams): Promise<DeliverTxResponse> {
		if (!this._client) {
		    throw new Error('TxClient:sendMsgSetWithdrawAddress: Unable to sign Tx. Signer is not present.')
		}
		if (!this._addr) {
            throw new Error('TxClient:sendMsgSetWithdrawAddress: Unable to sign Tx. Address is not present.')
        }
		try {
			let msg = this.msgSetWithdrawAddress({ value: MsgSetWithdrawAddress.fromPartial(value) })
			return await this._client.signAndBroadcast(this._addr, [msg], fee ? fee : { amount: [], gas: '200000' }, memo)
		} catch (e: any) {
			throw new Error('TxClient:sendMsgSetWithdrawAddress: Could not broadcast Tx: '+ e.message)
		}
	}
	
	async sendMsgFundCommunityPool({ value, fee, memo }: sendMsgFundCommunityPoolParams): Promise<DeliverTxResponse> {
		if (!this._client) {
		    throw new Error('TxClient:sendMsgFundCommunityPool: Unable to sign Tx. Signer is not present.')
		}
		if (!this._addr) {
            throw new Error('TxClient:sendMsgFundCommunityPool: Unable to sign Tx. Address is not present.')
        }
		try {
			let msg = this.msgFundCommunityPool({ value: MsgFundCommunityPool.fromPartial(value) })
			return await this._client.signAndBroadcast(this._addr, [msg], fee ? fee : { amount: [], gas: '200000' }, memo)
		} catch (e: any) {
			throw new Error('TxClient:sendMsgFundCommunityPool: Could not broadcast Tx: '+ e.message)
		}
	}
	
	async sendMsgWithdrawDelegatorReward({ value, fee, memo }: sendMsgWithdrawDelegatorRewardParams): Promise<DeliverTxResponse> {
		if (!this._client) {
		    throw new Error('TxClient:sendMsgWithdrawDelegatorReward: Unable to sign Tx. Signer is not present.')
		}
		if (!this._addr) {
            throw new Error('TxClient:sendMsgWithdrawDelegatorReward: Unable to sign Tx. Address is not present.')
        }
		try {
			let msg = this.msgWithdrawDelegatorReward({ value: MsgWithdrawDelegatorReward.fromPartial(value) })
			return await this._client.signAndBroadcast(this._addr, [msg], fee ? fee : { amount: [], gas: '200000' }, memo)
		} catch (e: any) {
			throw new Error('TxClient:sendMsgWithdrawDelegatorReward: Could not broadcast Tx: '+ e.message)
		}
	}
	
	
	msgWithdrawValidatorCommission({ value }: msgWithdrawValidatorCommissionParams): EncodeObject {
		try {
			return { typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", value: MsgWithdrawValidatorCommission.fromPartial( value ) }  
		} catch (e: any) {
			throw new Error('TxClient:MsgWithdrawValidatorCommission: Could not create message: ' + e.message)
		}
	}
	
	msgSetWithdrawAddress({ value }: msgSetWithdrawAddressParams): EncodeObject {
		try {
			return { typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", value: MsgSetWithdrawAddress.fromPartial( value ) }  
		} catch (e: any) {
			throw new Error('TxClient:MsgSetWithdrawAddress: Could not create message: ' + e.message)
		}
	}
	
	msgFundCommunityPool({ value }: msgFundCommunityPoolParams): EncodeObject {
		try {
			return { typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool", value: MsgFundCommunityPool.fromPartial( value ) }  
		} catch (e: any) {
			throw new Error('TxClient:MsgFundCommunityPool: Could not create message: ' + e.message)
		}
	}
	
	msgWithdrawDelegatorReward({ value }: msgWithdrawDelegatorRewardParams): EncodeObject {
		try {
			return { typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", value: MsgWithdrawDelegatorReward.fromPartial( value ) }  
		} catch (e: any) {
			throw new Error('TxClient:MsgWithdrawDelegatorReward: Could not create message: ' + e.message)
		}
	}
	
};

export default Module;
