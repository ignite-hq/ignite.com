// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject } from "@cosmjs/proto-signing";

import { Api } from "./rest";
import { MsgBurnVouchers } from "./types/campaign/tx";
import { MsgAddShares } from "./types/campaign/tx";
import { MsgRedeemVouchers } from "./types/campaign/tx";
import { MsgUnredeemVouchers } from "./types/campaign/tx";
import { MsgCreateCampaign } from "./types/campaign/tx";
import { MsgMintVouchers } from "./types/campaign/tx";
import { MsgInitializeMainnet } from "./types/campaign/tx";
import { MsgUpdateTotalSupply } from "./types/campaign/tx";
import { MsgAddVestingOptions } from "./types/campaign/tx";
import { MsgUpdateTotalShares } from "./types/campaign/tx";
import { MsgEditCampaign } from "./types/campaign/tx";



type sendMsgBurnVouchersParams = {
  value: MsgBurnVouchers,
  fee?: StdFee,
  memo?: string
};

type sendMsgAddSharesParams = {
  value: MsgAddShares,
  fee?: StdFee,
  memo?: string
};

type sendMsgRedeemVouchersParams = {
  value: MsgRedeemVouchers,
  fee?: StdFee,
  memo?: string
};

type sendMsgUnredeemVouchersParams = {
  value: MsgUnredeemVouchers,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateCampaignParams = {
  value: MsgCreateCampaign,
  fee?: StdFee,
  memo?: string
};

type sendMsgMintVouchersParams = {
  value: MsgMintVouchers,
  fee?: StdFee,
  memo?: string
};

type sendMsgInitializeMainnetParams = {
  value: MsgInitializeMainnet,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateTotalSupplyParams = {
  value: MsgUpdateTotalSupply,
  fee?: StdFee,
  memo?: string
};

type sendMsgAddVestingOptionsParams = {
  value: MsgAddVestingOptions,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateTotalSharesParams = {
  value: MsgUpdateTotalShares,
  fee?: StdFee,
  memo?: string
};

type sendMsgEditCampaignParams = {
  value: MsgEditCampaign,
  fee?: StdFee,
  memo?: string
};


type msgBurnVouchersParams = {
  value: MsgBurnVouchers,
};

type msgAddSharesParams = {
  value: MsgAddShares,
};

type msgRedeemVouchersParams = {
  value: MsgRedeemVouchers,
};

type msgUnredeemVouchersParams = {
  value: MsgUnredeemVouchers,
};

type msgCreateCampaignParams = {
  value: MsgCreateCampaign,
};

type msgMintVouchersParams = {
  value: MsgMintVouchers,
};

type msgInitializeMainnetParams = {
  value: MsgInitializeMainnet,
};

type msgUpdateTotalSupplyParams = {
  value: MsgUpdateTotalSupply,
};

type msgAddVestingOptionsParams = {
  value: MsgAddVestingOptions,
};

type msgUpdateTotalSharesParams = {
  value: MsgUpdateTotalShares,
};

type msgEditCampaignParams = {
  value: MsgEditCampaign,
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

	
	async sendMsgBurnVouchers({ value, fee, memo }: sendMsgBurnVouchersParams): Promise<DeliverTxResponse> {
		if (!this._client) {
		    throw new Error('TxClient:sendMsgBurnVouchers: Unable to sign Tx. Signer is not present.')
		}
		if (!this._addr) {
            throw new Error('TxClient:sendMsgBurnVouchers: Unable to sign Tx. Address is not present.')
        }
		try {
			let msg = this.msgBurnVouchers({ value: MsgBurnVouchers.fromPartial(value) })
			return await this._client.signAndBroadcast(this._addr, [msg], fee ? fee : { amount: [], gas: '200000' }, memo)
		} catch (e: any) {
			throw new Error('TxClient:sendMsgBurnVouchers: Could not broadcast Tx: '+ e.message)
		}
	}
	
	async sendMsgAddShares({ value, fee, memo }: sendMsgAddSharesParams): Promise<DeliverTxResponse> {
		if (!this._client) {
		    throw new Error('TxClient:sendMsgAddShares: Unable to sign Tx. Signer is not present.')
		}
		if (!this._addr) {
            throw new Error('TxClient:sendMsgAddShares: Unable to sign Tx. Address is not present.')
        }
		try {
			let msg = this.msgAddShares({ value: MsgAddShares.fromPartial(value) })
			return await this._client.signAndBroadcast(this._addr, [msg], fee ? fee : { amount: [], gas: '200000' }, memo)
		} catch (e: any) {
			throw new Error('TxClient:sendMsgAddShares: Could not broadcast Tx: '+ e.message)
		}
	}
	
	async sendMsgRedeemVouchers({ value, fee, memo }: sendMsgRedeemVouchersParams): Promise<DeliverTxResponse> {
		if (!this._client) {
		    throw new Error('TxClient:sendMsgRedeemVouchers: Unable to sign Tx. Signer is not present.')
		}
		if (!this._addr) {
            throw new Error('TxClient:sendMsgRedeemVouchers: Unable to sign Tx. Address is not present.')
        }
		try {
			let msg = this.msgRedeemVouchers({ value: MsgRedeemVouchers.fromPartial(value) })
			return await this._client.signAndBroadcast(this._addr, [msg], fee ? fee : { amount: [], gas: '200000' }, memo)
		} catch (e: any) {
			throw new Error('TxClient:sendMsgRedeemVouchers: Could not broadcast Tx: '+ e.message)
		}
	}
	
	async sendMsgUnredeemVouchers({ value, fee, memo }: sendMsgUnredeemVouchersParams): Promise<DeliverTxResponse> {
		if (!this._client) {
		    throw new Error('TxClient:sendMsgUnredeemVouchers: Unable to sign Tx. Signer is not present.')
		}
		if (!this._addr) {
            throw new Error('TxClient:sendMsgUnredeemVouchers: Unable to sign Tx. Address is not present.')
        }
		try {
			let msg = this.msgUnredeemVouchers({ value: MsgUnredeemVouchers.fromPartial(value) })
			return await this._client.signAndBroadcast(this._addr, [msg], fee ? fee : { amount: [], gas: '200000' }, memo)
		} catch (e: any) {
			throw new Error('TxClient:sendMsgUnredeemVouchers: Could not broadcast Tx: '+ e.message)
		}
	}
	
	async sendMsgCreateCampaign({ value, fee, memo }: sendMsgCreateCampaignParams): Promise<DeliverTxResponse> {
		if (!this._client) {
		    throw new Error('TxClient:sendMsgCreateCampaign: Unable to sign Tx. Signer is not present.')
		}
		if (!this._addr) {
            throw new Error('TxClient:sendMsgCreateCampaign: Unable to sign Tx. Address is not present.')
        }
		try {
			let msg = this.msgCreateCampaign({ value: MsgCreateCampaign.fromPartial(value) })
			return await this._client.signAndBroadcast(this._addr, [msg], fee ? fee : { amount: [], gas: '200000' }, memo)
		} catch (e: any) {
			throw new Error('TxClient:sendMsgCreateCampaign: Could not broadcast Tx: '+ e.message)
		}
	}
	
	async sendMsgMintVouchers({ value, fee, memo }: sendMsgMintVouchersParams): Promise<DeliverTxResponse> {
		if (!this._client) {
		    throw new Error('TxClient:sendMsgMintVouchers: Unable to sign Tx. Signer is not present.')
		}
		if (!this._addr) {
            throw new Error('TxClient:sendMsgMintVouchers: Unable to sign Tx. Address is not present.')
        }
		try {
			let msg = this.msgMintVouchers({ value: MsgMintVouchers.fromPartial(value) })
			return await this._client.signAndBroadcast(this._addr, [msg], fee ? fee : { amount: [], gas: '200000' }, memo)
		} catch (e: any) {
			throw new Error('TxClient:sendMsgMintVouchers: Could not broadcast Tx: '+ e.message)
		}
	}
	
	async sendMsgInitializeMainnet({ value, fee, memo }: sendMsgInitializeMainnetParams): Promise<DeliverTxResponse> {
		if (!this._client) {
		    throw new Error('TxClient:sendMsgInitializeMainnet: Unable to sign Tx. Signer is not present.')
		}
		if (!this._addr) {
            throw new Error('TxClient:sendMsgInitializeMainnet: Unable to sign Tx. Address is not present.')
        }
		try {
			let msg = this.msgInitializeMainnet({ value: MsgInitializeMainnet.fromPartial(value) })
			return await this._client.signAndBroadcast(this._addr, [msg], fee ? fee : { amount: [], gas: '200000' }, memo)
		} catch (e: any) {
			throw new Error('TxClient:sendMsgInitializeMainnet: Could not broadcast Tx: '+ e.message)
		}
	}
	
	async sendMsgUpdateTotalSupply({ value, fee, memo }: sendMsgUpdateTotalSupplyParams): Promise<DeliverTxResponse> {
		if (!this._client) {
		    throw new Error('TxClient:sendMsgUpdateTotalSupply: Unable to sign Tx. Signer is not present.')
		}
		if (!this._addr) {
            throw new Error('TxClient:sendMsgUpdateTotalSupply: Unable to sign Tx. Address is not present.')
        }
		try {
			let msg = this.msgUpdateTotalSupply({ value: MsgUpdateTotalSupply.fromPartial(value) })
			return await this._client.signAndBroadcast(this._addr, [msg], fee ? fee : { amount: [], gas: '200000' }, memo)
		} catch (e: any) {
			throw new Error('TxClient:sendMsgUpdateTotalSupply: Could not broadcast Tx: '+ e.message)
		}
	}
	
	async sendMsgAddVestingOptions({ value, fee, memo }: sendMsgAddVestingOptionsParams): Promise<DeliverTxResponse> {
		if (!this._client) {
		    throw new Error('TxClient:sendMsgAddVestingOptions: Unable to sign Tx. Signer is not present.')
		}
		if (!this._addr) {
            throw new Error('TxClient:sendMsgAddVestingOptions: Unable to sign Tx. Address is not present.')
        }
		try {
			let msg = this.msgAddVestingOptions({ value: MsgAddVestingOptions.fromPartial(value) })
			return await this._client.signAndBroadcast(this._addr, [msg], fee ? fee : { amount: [], gas: '200000' }, memo)
		} catch (e: any) {
			throw new Error('TxClient:sendMsgAddVestingOptions: Could not broadcast Tx: '+ e.message)
		}
	}
	
	async sendMsgUpdateTotalShares({ value, fee, memo }: sendMsgUpdateTotalSharesParams): Promise<DeliverTxResponse> {
		if (!this._client) {
		    throw new Error('TxClient:sendMsgUpdateTotalShares: Unable to sign Tx. Signer is not present.')
		}
		if (!this._addr) {
            throw new Error('TxClient:sendMsgUpdateTotalShares: Unable to sign Tx. Address is not present.')
        }
		try {
			let msg = this.msgUpdateTotalShares({ value: MsgUpdateTotalShares.fromPartial(value) })
			return await this._client.signAndBroadcast(this._addr, [msg], fee ? fee : { amount: [], gas: '200000' }, memo)
		} catch (e: any) {
			throw new Error('TxClient:sendMsgUpdateTotalShares: Could not broadcast Tx: '+ e.message)
		}
	}
	
	async sendMsgEditCampaign({ value, fee, memo }: sendMsgEditCampaignParams): Promise<DeliverTxResponse> {
		if (!this._client) {
		    throw new Error('TxClient:sendMsgEditCampaign: Unable to sign Tx. Signer is not present.')
		}
		if (!this._addr) {
            throw new Error('TxClient:sendMsgEditCampaign: Unable to sign Tx. Address is not present.')
        }
		try {
			let msg = this.msgEditCampaign({ value: MsgEditCampaign.fromPartial(value) })
			return await this._client.signAndBroadcast(this._addr, [msg], fee ? fee : { amount: [], gas: '200000' }, memo)
		} catch (e: any) {
			throw new Error('TxClient:sendMsgEditCampaign: Could not broadcast Tx: '+ e.message)
		}
	}
	
	
	msgBurnVouchers({ value }: msgBurnVouchersParams): EncodeObject {
		try {
			return { typeUrl: "/tendermint.spn.campaign.MsgBurnVouchers", value: MsgBurnVouchers.fromPartial( value ) }  
		} catch (e: any) {
			throw new Error('TxClient:MsgBurnVouchers: Could not create message: ' + e.message)
		}
	}
	
	msgAddShares({ value }: msgAddSharesParams): EncodeObject {
		try {
			return { typeUrl: "/tendermint.spn.campaign.MsgAddShares", value: MsgAddShares.fromPartial( value ) }  
		} catch (e: any) {
			throw new Error('TxClient:MsgAddShares: Could not create message: ' + e.message)
		}
	}
	
	msgRedeemVouchers({ value }: msgRedeemVouchersParams): EncodeObject {
		try {
			return { typeUrl: "/tendermint.spn.campaign.MsgRedeemVouchers", value: MsgRedeemVouchers.fromPartial( value ) }  
		} catch (e: any) {
			throw new Error('TxClient:MsgRedeemVouchers: Could not create message: ' + e.message)
		}
	}
	
	msgUnredeemVouchers({ value }: msgUnredeemVouchersParams): EncodeObject {
		try {
			return { typeUrl: "/tendermint.spn.campaign.MsgUnredeemVouchers", value: MsgUnredeemVouchers.fromPartial( value ) }  
		} catch (e: any) {
			throw new Error('TxClient:MsgUnredeemVouchers: Could not create message: ' + e.message)
		}
	}
	
	msgCreateCampaign({ value }: msgCreateCampaignParams): EncodeObject {
		try {
			return { typeUrl: "/tendermint.spn.campaign.MsgCreateCampaign", value: MsgCreateCampaign.fromPartial( value ) }  
		} catch (e: any) {
			throw new Error('TxClient:MsgCreateCampaign: Could not create message: ' + e.message)
		}
	}
	
	msgMintVouchers({ value }: msgMintVouchersParams): EncodeObject {
		try {
			return { typeUrl: "/tendermint.spn.campaign.MsgMintVouchers", value: MsgMintVouchers.fromPartial( value ) }  
		} catch (e: any) {
			throw new Error('TxClient:MsgMintVouchers: Could not create message: ' + e.message)
		}
	}
	
	msgInitializeMainnet({ value }: msgInitializeMainnetParams): EncodeObject {
		try {
			return { typeUrl: "/tendermint.spn.campaign.MsgInitializeMainnet", value: MsgInitializeMainnet.fromPartial( value ) }  
		} catch (e: any) {
			throw new Error('TxClient:MsgInitializeMainnet: Could not create message: ' + e.message)
		}
	}
	
	msgUpdateTotalSupply({ value }: msgUpdateTotalSupplyParams): EncodeObject {
		try {
			return { typeUrl: "/tendermint.spn.campaign.MsgUpdateTotalSupply", value: MsgUpdateTotalSupply.fromPartial( value ) }  
		} catch (e: any) {
			throw new Error('TxClient:MsgUpdateTotalSupply: Could not create message: ' + e.message)
		}
	}
	
	msgAddVestingOptions({ value }: msgAddVestingOptionsParams): EncodeObject {
		try {
			return { typeUrl: "/tendermint.spn.campaign.MsgAddVestingOptions", value: MsgAddVestingOptions.fromPartial( value ) }  
		} catch (e: any) {
			throw new Error('TxClient:MsgAddVestingOptions: Could not create message: ' + e.message)
		}
	}
	
	msgUpdateTotalShares({ value }: msgUpdateTotalSharesParams): EncodeObject {
		try {
			return { typeUrl: "/tendermint.spn.campaign.MsgUpdateTotalShares", value: MsgUpdateTotalShares.fromPartial( value ) }  
		} catch (e: any) {
			throw new Error('TxClient:MsgUpdateTotalShares: Could not create message: ' + e.message)
		}
	}
	
	msgEditCampaign({ value }: msgEditCampaignParams): EncodeObject {
		try {
			return { typeUrl: "/tendermint.spn.campaign.MsgEditCampaign", value: MsgEditCampaign.fromPartial( value ) }  
		} catch (e: any) {
			throw new Error('TxClient:MsgEditCampaign: Could not create message: ' + e.message)
		}
	}
	
};

export default Module;
