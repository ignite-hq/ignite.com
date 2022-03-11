// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Store } from 'pinia'
import { usePiniaStore, PiniaState } from './'

import { Ignite } from 'tendermint-spn-ts-client'
import Module from 'tendermint-spn-ts-client/tendermint.spn.campaign/module'

type SendMsgAddVestingOptionsType =
  typeof Module.prototype.sendMsgAddVestingOptions
type SendMsgUpdateTotalSharesType =
  typeof Module.prototype.sendMsgUpdateTotalShares
type SendMsgEditCampaignType = typeof Module.prototype.sendMsgEditCampaign
type SendMsgMintVouchersType = typeof Module.prototype.sendMsgMintVouchers
type SendMsgAddSharesType = typeof Module.prototype.sendMsgAddShares
type SendMsgCreateCampaignType = typeof Module.prototype.sendMsgCreateCampaign
type SendMsgRedeemVouchersType = typeof Module.prototype.sendMsgRedeemVouchers
type SendMsgUnredeemVouchersType =
  typeof Module.prototype.sendMsgUnredeemVouchers
type SendMsgBurnVouchersType = typeof Module.prototype.sendMsgBurnVouchers
type SendMsgInitializeMainnetType =
  typeof Module.prototype.sendMsgInitializeMainnet
type SendMsgUpdateTotalSupplyType =
  typeof Module.prototype.sendMsgUpdateTotalSupply

type QueryCampaignType = typeof Module.prototype.queryCampaign
type QueryCampaignAllType = typeof Module.prototype.queryCampaignAll
type QueryCampaignChainsType = typeof Module.prototype.queryCampaignChains
type QueryMainnetAccountType = typeof Module.prototype.queryMainnetAccount
type QueryMainnetAccountAllType = typeof Module.prototype.queryMainnetAccountAll
type QueryMainnetVestingAccountType =
  typeof Module.prototype.queryMainnetVestingAccount
type QueryMainnetVestingAccountAllType =
  typeof Module.prototype.queryMainnetVestingAccountAll
type QueryParamsType = typeof Module.prototype.queryParams

type Response = {
  $s: Store<'tendermint.spn.campaign', PiniaState, {}, {}>
  sendMsgAddVestingOptions: SendMsgAddVestingOptionsType
  sendMsgUpdateTotalShares: SendMsgUpdateTotalSharesType
  sendMsgEditCampaign: SendMsgEditCampaignType
  sendMsgMintVouchers: SendMsgMintVouchersType
  sendMsgAddShares: SendMsgAddSharesType
  sendMsgCreateCampaign: SendMsgCreateCampaignType
  sendMsgRedeemVouchers: SendMsgRedeemVouchersType
  sendMsgUnredeemVouchers: SendMsgUnredeemVouchersType
  sendMsgBurnVouchers: SendMsgBurnVouchersType
  sendMsgInitializeMainnet: SendMsgInitializeMainnetType
  sendMsgUpdateTotalSupply: SendMsgUpdateTotalSupplyType

  queryCampaign: QueryCampaignType
  queryCampaignAll: QueryCampaignAllType
  queryCampaignChains: QueryCampaignChainsType
  queryMainnetAccount: QueryMainnetAccountType
  queryMainnetAccountAll: QueryMainnetAccountAllType
  queryMainnetVestingAccount: QueryMainnetVestingAccountType
  queryMainnetVestingAccountAll: QueryMainnetVestingAccountAllType
  queryParams: QueryParamsType
}

type Params = {
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let {
    sendMsgAddVestingOptions,

    sendMsgUpdateTotalShares,

    sendMsgEditCampaign,

    sendMsgMintVouchers,

    sendMsgAddShares,

    sendMsgCreateCampaign,

    sendMsgRedeemVouchers,

    sendMsgUnredeemVouchers,

    sendMsgBurnVouchers,

    sendMsgInitializeMainnet,

    sendMsgUpdateTotalSupply,

    queryCampaign,

    queryCampaignAll,

    queryCampaignChains,

    queryMainnetAccount,

    queryMainnetAccountAll,

    queryMainnetVestingAccount,

    queryMainnetVestingAccountAll,

    queryParams
  } = $ignt.TendermintSpnCampaign

  return {
    $s,

    sendMsgAddVestingOptions,

    sendMsgUpdateTotalShares,

    sendMsgEditCampaign,

    sendMsgMintVouchers,

    sendMsgAddShares,

    sendMsgCreateCampaign,

    sendMsgRedeemVouchers,

    sendMsgUnredeemVouchers,

    sendMsgBurnVouchers,

    sendMsgInitializeMainnet,

    sendMsgUpdateTotalSupply,

    queryCampaign,

    queryCampaignAll,

    queryCampaignChains,

    queryMainnetAccount,

    queryMainnetAccountAll,

    queryMainnetVestingAccount,

    queryMainnetVestingAccountAll,

    queryParams
  }
}

export { useModule }
