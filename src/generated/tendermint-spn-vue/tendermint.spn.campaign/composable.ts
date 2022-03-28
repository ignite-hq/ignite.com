// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from "@ignt/client";
import Module from "@ignt/client/tendermint.spn.campaign/module";
		
type SendMsgBurnVouchersType = typeof Module.prototype.sendMsgBurnVouchers
type SendMsgAddSharesType = typeof Module.prototype.sendMsgAddShares
type SendMsgRedeemVouchersType = typeof Module.prototype.sendMsgRedeemVouchers
type SendMsgUnredeemVouchersType = typeof Module.prototype.sendMsgUnredeemVouchers
type SendMsgCreateCampaignType = typeof Module.prototype.sendMsgCreateCampaign
type SendMsgMintVouchersType = typeof Module.prototype.sendMsgMintVouchers
type SendMsgInitializeMainnetType = typeof Module.prototype.sendMsgInitializeMainnet
type SendMsgUpdateTotalSupplyType = typeof Module.prototype.sendMsgUpdateTotalSupply
type SendMsgAddVestingOptionsType = typeof Module.prototype.sendMsgAddVestingOptions
type SendMsgUpdateTotalSharesType = typeof Module.prototype.sendMsgUpdateTotalShares
type SendMsgEditCampaignType = typeof Module.prototype.sendMsgEditCampaign

type QueryCampaignType = typeof Module.prototype.queryCampaign
type QueryCampaignAllType = typeof Module.prototype.queryCampaignAll
type QueryCampaignChainsType = typeof Module.prototype.queryCampaignChains
type QueryMainnetAccountType = typeof Module.prototype.queryMainnetAccount
type QueryMainnetAccountAllType = typeof Module.prototype.queryMainnetAccountAll
type QueryMainnetVestingAccountType = typeof Module.prototype.queryMainnetVestingAccount
type QueryMainnetVestingAccountAllType = typeof Module.prototype.queryMainnetVestingAccountAll
type QueryParamsType = typeof Module.prototype.queryParams
type QueryTotalSharesType = typeof Module.prototype.queryTotalShares


type Response = {
  sendMsgBurnVouchers: SendMsgBurnVouchersType,
  sendMsgAddShares: SendMsgAddSharesType,
  sendMsgRedeemVouchers: SendMsgRedeemVouchersType,
  sendMsgUnredeemVouchers: SendMsgUnredeemVouchersType,
  sendMsgCreateCampaign: SendMsgCreateCampaignType,
  sendMsgMintVouchers: SendMsgMintVouchersType,
  sendMsgInitializeMainnet: SendMsgInitializeMainnetType,
  sendMsgUpdateTotalSupply: SendMsgUpdateTotalSupplyType,
  sendMsgAddVestingOptions: SendMsgAddVestingOptionsType,
  sendMsgUpdateTotalShares: SendMsgUpdateTotalSharesType,
  sendMsgEditCampaign: SendMsgEditCampaignType,
  
  queryCampaign: QueryCampaignType
  queryCampaignAll: QueryCampaignAllType
  queryCampaignChains: QueryCampaignChainsType
  queryMainnetAccount: QueryMainnetAccountType
  queryMainnetAccountAll: QueryMainnetAccountAllType
  queryMainnetVestingAccount: QueryMainnetVestingAccountType
  queryMainnetVestingAccountAll: QueryMainnetVestingAccountAllType
  queryParams: QueryParamsType
  queryTotalShares: QueryTotalSharesType
  
}

type Params = {
  ignite: Ignite;
}

function useModule({ ignite }: Params): Response {
  let {
	
	sendMsgBurnVouchers,
  
	sendMsgAddShares,
  
	sendMsgRedeemVouchers,
  
	sendMsgUnredeemVouchers,
  
	sendMsgCreateCampaign,
  
	sendMsgMintVouchers,
  
	sendMsgInitializeMainnet,
  
	sendMsgUpdateTotalSupply,
  
	sendMsgAddVestingOptions,
  
	sendMsgUpdateTotalShares,
  
	sendMsgEditCampaign,
  
  
  queryCampaign,
  
  queryCampaignAll,
  
  queryCampaignChains,
  
  queryMainnetAccount,
  
  queryMainnetAccountAll,
  
  queryMainnetVestingAccount,
  
  queryMainnetVestingAccountAll,
  
  queryParams,
  
  queryTotalShares,
  
  } = ignite.TendermintSpnCampaign

  
  
	sendMsgBurnVouchers = sendMsgBurnVouchers.bind(ignite.TendermintSpnCampaign)
  
	sendMsgAddShares = sendMsgAddShares.bind(ignite.TendermintSpnCampaign)
  
	sendMsgRedeemVouchers = sendMsgRedeemVouchers.bind(ignite.TendermintSpnCampaign)
  
	sendMsgUnredeemVouchers = sendMsgUnredeemVouchers.bind(ignite.TendermintSpnCampaign)
  
	sendMsgCreateCampaign = sendMsgCreateCampaign.bind(ignite.TendermintSpnCampaign)
  
	sendMsgMintVouchers = sendMsgMintVouchers.bind(ignite.TendermintSpnCampaign)
  
	sendMsgInitializeMainnet = sendMsgInitializeMainnet.bind(ignite.TendermintSpnCampaign)
  
	sendMsgUpdateTotalSupply = sendMsgUpdateTotalSupply.bind(ignite.TendermintSpnCampaign)
  
	sendMsgAddVestingOptions = sendMsgAddVestingOptions.bind(ignite.TendermintSpnCampaign)
  
	sendMsgUpdateTotalShares = sendMsgUpdateTotalShares.bind(ignite.TendermintSpnCampaign)
  
	sendMsgEditCampaign = sendMsgEditCampaign.bind(ignite.TendermintSpnCampaign)
  
  
  queryCampaign = queryCampaign.bind(ignite.TendermintSpnCampaign)
  
  queryCampaignAll = queryCampaignAll.bind(ignite.TendermintSpnCampaign)
  
  queryCampaignChains = queryCampaignChains.bind(ignite.TendermintSpnCampaign)
  
  queryMainnetAccount = queryMainnetAccount.bind(ignite.TendermintSpnCampaign)
  
  queryMainnetAccountAll = queryMainnetAccountAll.bind(ignite.TendermintSpnCampaign)
  
  queryMainnetVestingAccount = queryMainnetVestingAccount.bind(ignite.TendermintSpnCampaign)
  
  queryMainnetVestingAccountAll = queryMainnetVestingAccountAll.bind(ignite.TendermintSpnCampaign)
  
  queryParams = queryParams.bind(ignite.TendermintSpnCampaign)
  
  queryTotalShares = queryTotalShares.bind(ignite.TendermintSpnCampaign)
  

  return {
  
  sendMsgBurnVouchers,
  
  sendMsgAddShares,
  
  sendMsgRedeemVouchers,
  
  sendMsgUnredeemVouchers,
  
  sendMsgCreateCampaign,
  
  sendMsgMintVouchers,
  
  sendMsgInitializeMainnet,
  
  sendMsgUpdateTotalSupply,
  
  sendMsgAddVestingOptions,
  
  sendMsgUpdateTotalShares,
  
  sendMsgEditCampaign,
  
  
  queryCampaign,
  
  queryCampaignAll,
  
  queryCampaignChains,
  
  queryMainnetAccount,
  
  queryMainnetAccountAll,
  
  queryMainnetVestingAccount,
  
  queryMainnetVestingAccountAll,
  
  queryParams,
  
  queryTotalShares,
  
  }
}

export { useModule }
