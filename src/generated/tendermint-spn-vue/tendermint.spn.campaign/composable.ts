// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Module from '../../tendermint-spn-ts-client/tendermint.spn.campaign/module'
import useIgnite from '../useIgnite'
import { unref } from 'vue'

type SendMsgUpdateTotalSupplyType =
  typeof Module.prototype.sendMsgUpdateTotalSupply
type SendMsgCreateCampaignType = typeof Module.prototype.sendMsgCreateCampaign
type SendMsgInitializeMainnetType =
  typeof Module.prototype.sendMsgInitializeMainnet
type SendMsgRedeemVouchersType = typeof Module.prototype.sendMsgRedeemVouchers
type SendMsgAddVestingOptionsType =
  typeof Module.prototype.sendMsgAddVestingOptions
type SendMsgBurnVouchersType = typeof Module.prototype.sendMsgBurnVouchers
type SendMsgAddSharesType = typeof Module.prototype.sendMsgAddShares
type SendMsgUnredeemVouchersType =
  typeof Module.prototype.sendMsgUnredeemVouchers
type SendMsgEditCampaignType = typeof Module.prototype.sendMsgEditCampaign
type SendMsgMintVouchersType = typeof Module.prototype.sendMsgMintVouchers

type QueryCampaignType = typeof Module.prototype.queryCampaign
type QueryCampaignAllType = typeof Module.prototype.queryCampaignAll
type QueryCampaignChainsType = typeof Module.prototype.queryCampaignChains
type QueryMainnetAccountType = typeof Module.prototype.queryMainnetAccount
type QueryMainnetAccountAllType = typeof Module.prototype.queryMainnetAccountAll
type QueryMainnetVestingAccountType =
  typeof Module.prototype.queryMainnetVestingAccount
type QueryMainnetVestingAccountAllType =
  typeof Module.prototype.queryMainnetVestingAccountAll
type QueryCampaignSummaryType = typeof Module.prototype.queryCampaignSummary
type QueryCampaignSummariesType = typeof Module.prototype.queryCampaignSummaries
type QueryParamsType = typeof Module.prototype.queryParams
type QueryTotalSharesType = typeof Module.prototype.queryTotalShares

type Response = {
  sendMsgUpdateTotalSupply: SendMsgUpdateTotalSupplyType
  sendMsgCreateCampaign: SendMsgCreateCampaignType
  sendMsgInitializeMainnet: SendMsgInitializeMainnetType
  sendMsgRedeemVouchers: SendMsgRedeemVouchersType
  sendMsgAddVestingOptions: SendMsgAddVestingOptionsType
  sendMsgBurnVouchers: SendMsgBurnVouchersType
  sendMsgAddShares: SendMsgAddSharesType
  sendMsgUnredeemVouchers: SendMsgUnredeemVouchersType
  sendMsgEditCampaign: SendMsgEditCampaignType
  sendMsgMintVouchers: SendMsgMintVouchersType

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

function useModule(): Response {
  // ignite
  let { ignite } = useIgnite()

  let {
    sendMsgUpdateTotalSupply,

    sendMsgCreateCampaign,

    sendMsgInitializeMainnet,

    sendMsgRedeemVouchers,

    sendMsgAddVestingOptions,

    sendMsgBurnVouchers,

    sendMsgAddShares,

    sendMsgUnredeemVouchers,

    sendMsgEditCampaign,

    sendMsgMintVouchers,

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

    queryTotalShares
  } = unref(ignite.tendermintSpnCampaign)

  sendMsgUpdateTotalSupply = sendMsgUpdateTotalSupply.bind(
    ignite.tendermintSpnCampaign
  )

  sendMsgCreateCampaign = sendMsgCreateCampaign.bind(
    ignite.tendermintSpnCampaign
  )

  sendMsgInitializeMainnet = sendMsgInitializeMainnet.bind(
    ignite.tendermintSpnCampaign
  )

  sendMsgRedeemVouchers = sendMsgRedeemVouchers.bind(
    ignite.tendermintSpnCampaign
  )

  sendMsgAddVestingOptions = sendMsgAddVestingOptions.bind(
    ignite.tendermintSpnCampaign
  )

  sendMsgBurnVouchers = sendMsgBurnVouchers.bind(ignite.tendermintSpnCampaign)

  sendMsgAddShares = sendMsgAddShares.bind(ignite.tendermintSpnCampaign)

  sendMsgUnredeemVouchers = sendMsgUnredeemVouchers.bind(
    ignite.tendermintSpnCampaign
  )

  sendMsgEditCampaign = sendMsgEditCampaign.bind(ignite.tendermintSpnCampaign)

  sendMsgMintVouchers = sendMsgMintVouchers.bind(ignite.tendermintSpnCampaign)

  queryCampaign = queryCampaign.bind(ignite.tendermintSpnCampaign)

  queryCampaignAll = queryCampaignAll.bind(ignite.tendermintSpnCampaign)

  queryCampaignChains = queryCampaignChains.bind(ignite.tendermintSpnCampaign)

  queryMainnetAccount = queryMainnetAccount.bind(ignite.tendermintSpnCampaign)

  queryMainnetAccountAll = queryMainnetAccountAll.bind(
    ignite.tendermintSpnCampaign
  )

  queryMainnetVestingAccount = queryMainnetVestingAccount.bind(
    ignite.tendermintSpnCampaign
  )

  queryMainnetVestingAccountAll = queryMainnetVestingAccountAll.bind(
    ignite.tendermintSpnCampaign
  )

  queryCampaignSummary = queryCampaignSummary.bind(ignite.tendermintSpnCampaign)

  queryCampaignSummaries = queryCampaignSummaries.bind(
    ignite.tendermintSpnCampaign
  )

  queryParams = queryParams.bind(ignite.tendermintSpnCampaign)

  queryTotalShares = queryTotalShares.bind(ignite.tendermintSpnCampaign)

  return {
    sendMsgUpdateTotalSupply,

    sendMsgCreateCampaign,

    sendMsgInitializeMainnet,

    sendMsgRedeemVouchers,

    sendMsgAddVestingOptions,

    sendMsgBurnVouchers,

    sendMsgAddShares,

    sendMsgUnredeemVouchers,

    sendMsgEditCampaign,

    sendMsgMintVouchers,

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

    queryTotalShares
  }
}

export { useModule }
