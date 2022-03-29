// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from "tendermint-spn-ts-client";
import Module from "tendermint-spn-ts-client/tendermint.spn.campaign/module";
		
type SendMsgInitializeMainnetType = typeof Module.prototype.sendMsgInitializeMainnet
type SendMsgRedeemVouchersType = typeof Module.prototype.sendMsgRedeemVouchers
type SendMsgEditCampaignType = typeof Module.prototype.sendMsgEditCampaign
type SendMsgCreateCampaignType = typeof Module.prototype.sendMsgCreateCampaign
type SendMsgAddSharesType = typeof Module.prototype.sendMsgAddShares
type SendMsgUpdateTotalSupplyType = typeof Module.prototype.sendMsgUpdateTotalSupply
type SendMsgBurnVouchersType = typeof Module.prototype.sendMsgBurnVouchers
type SendMsgMintVouchersType = typeof Module.prototype.sendMsgMintVouchers
type SendMsgAddVestingOptionsType = typeof Module.prototype.sendMsgAddVestingOptions
type SendMsgUnredeemVouchersType = typeof Module.prototype.sendMsgUnredeemVouchers
type SendMsgUpdateTotalSharesType = typeof Module.prototype.sendMsgUpdateTotalShares

type QueryCampaignType = typeof Module.prototype.queryCampaign
type QueryCampaignAllType = typeof Module.prototype.queryCampaignAll
type QueryCampaignChainsType = typeof Module.prototype.queryCampaignChains
type QueryMainnetAccountType = typeof Module.prototype.queryMainnetAccount
type QueryMainnetAccountAllType = typeof Module.prototype.queryMainnetAccountAll
type QueryMainnetVestingAccountType = typeof Module.prototype.queryMainnetVestingAccount
type QueryMainnetVestingAccountAllType = typeof Module.prototype.queryMainnetVestingAccountAll
type QueryCampaignSummaryType = typeof Module.prototype.queryCampaignSummary
type QueryCampaignSummariesType = typeof Module.prototype.queryCampaignSummaries
type QueryParamsType = typeof Module.prototype.queryParams
type QueryTotalSharesType = typeof Module.prototype.queryTotalShares


type Response = {
  sendMsgInitializeMainnet: SendMsgInitializeMainnetType,
  sendMsgRedeemVouchers: SendMsgRedeemVouchersType,
  sendMsgEditCampaign: SendMsgEditCampaignType,
  sendMsgCreateCampaign: SendMsgCreateCampaignType,
  sendMsgAddShares: SendMsgAddSharesType,
  sendMsgUpdateTotalSupply: SendMsgUpdateTotalSupplyType,
  sendMsgBurnVouchers: SendMsgBurnVouchersType,
  sendMsgMintVouchers: SendMsgMintVouchersType,
  sendMsgAddVestingOptions: SendMsgAddVestingOptionsType,
  sendMsgUnredeemVouchers: SendMsgUnredeemVouchersType,
  sendMsgUpdateTotalShares: SendMsgUpdateTotalSharesType,
  
  queryCampaign: QueryCampaignType
  queryCampaignAll: QueryCampaignAllType
  queryCampaignChains: QueryCampaignChainsType
  queryMainnetAccount: QueryMainnetAccountType
  queryMainnetAccountAll: QueryMainnetAccountAllType
  queryMainnetVestingAccount: QueryMainnetVestingAccountType
  queryMainnetVestingAccountAll: QueryMainnetVestingAccountAllType
  queryCampaignSummary: QueryCampaignSummaryType
  queryCampaignSummaries: QueryCampaignSummariesType
  queryParams: QueryParamsType
  queryTotalShares: QueryTotalSharesType
  
}

type Params = {
  ignite: Ignite;
}

function useModule({ ignite }: Params): Response {
  let {
	
	sendMsgInitializeMainnet,
  
	sendMsgRedeemVouchers,
  
	sendMsgEditCampaign,
  
	sendMsgCreateCampaign,
  
	sendMsgAddShares,
  
	sendMsgUpdateTotalSupply,
  
	sendMsgBurnVouchers,
  
	sendMsgMintVouchers,
  
	sendMsgAddVestingOptions,
  
	sendMsgUnredeemVouchers,
  
	sendMsgUpdateTotalShares,
  
  
  queryCampaign,
  
  queryCampaignAll,
  
  queryCampaignChains,
  
  queryMainnetAccount,
  
  queryMainnetAccountAll,
  
  queryMainnetVestingAccount,
  
  queryMainnetVestingAccountAll,
  
  queryCampaignSummary,
  
  queryCampaignSummaries,
  
  queryParams,
  
  queryTotalShares,
  
  } = ignite.TendermintSpnCampaign

  
  
	sendMsgInitializeMainnet = sendMsgInitializeMainnet.bind(ignite.TendermintSpnCampaign)
  
	sendMsgRedeemVouchers = sendMsgRedeemVouchers.bind(ignite.TendermintSpnCampaign)
  
	sendMsgEditCampaign = sendMsgEditCampaign.bind(ignite.TendermintSpnCampaign)
  
	sendMsgCreateCampaign = sendMsgCreateCampaign.bind(ignite.TendermintSpnCampaign)
  
	sendMsgAddShares = sendMsgAddShares.bind(ignite.TendermintSpnCampaign)
  
	sendMsgUpdateTotalSupply = sendMsgUpdateTotalSupply.bind(ignite.TendermintSpnCampaign)
  
	sendMsgBurnVouchers = sendMsgBurnVouchers.bind(ignite.TendermintSpnCampaign)
  
	sendMsgMintVouchers = sendMsgMintVouchers.bind(ignite.TendermintSpnCampaign)
  
	sendMsgAddVestingOptions = sendMsgAddVestingOptions.bind(ignite.TendermintSpnCampaign)
  
	sendMsgUnredeemVouchers = sendMsgUnredeemVouchers.bind(ignite.TendermintSpnCampaign)
  
	sendMsgUpdateTotalShares = sendMsgUpdateTotalShares.bind(ignite.TendermintSpnCampaign)
  
  
  queryCampaign = queryCampaign.bind(ignite.TendermintSpnCampaign)
  
  queryCampaignAll = queryCampaignAll.bind(ignite.TendermintSpnCampaign)
  
  queryCampaignChains = queryCampaignChains.bind(ignite.TendermintSpnCampaign)
  
  queryMainnetAccount = queryMainnetAccount.bind(ignite.TendermintSpnCampaign)
  
  queryMainnetAccountAll = queryMainnetAccountAll.bind(ignite.TendermintSpnCampaign)
  
  queryMainnetVestingAccount = queryMainnetVestingAccount.bind(ignite.TendermintSpnCampaign)
  
  queryMainnetVestingAccountAll = queryMainnetVestingAccountAll.bind(ignite.TendermintSpnCampaign)
  
  queryCampaignSummary = queryCampaignSummary.bind(ignite.TendermintSpnCampaign)
  
  queryCampaignSummaries = queryCampaignSummaries.bind(ignite.TendermintSpnCampaign)
  
  queryParams = queryParams.bind(ignite.TendermintSpnCampaign)
  
  queryTotalShares = queryTotalShares.bind(ignite.TendermintSpnCampaign)
  

  return {
  
  sendMsgInitializeMainnet,
  
  sendMsgRedeemVouchers,
  
  sendMsgEditCampaign,
  
  sendMsgCreateCampaign,
  
  sendMsgAddShares,
  
  sendMsgUpdateTotalSupply,
  
  sendMsgBurnVouchers,
  
  sendMsgMintVouchers,
  
  sendMsgAddVestingOptions,
  
  sendMsgUnredeemVouchers,
  
  sendMsgUpdateTotalShares,
  
  
  queryCampaign,
  
  queryCampaignAll,
  
  queryCampaignChains,
  
  queryMainnetAccount,
  
  queryMainnetAccountAll,
  
  queryMainnetVestingAccount,
  
  queryMainnetVestingAccountAll,
  
  queryCampaignSummary,
  
  queryCampaignSummaries,
  
  queryParams,
  
  queryTotalShares,
  
  }
}

export { useModule }
