// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Store } from 'pinia'
import { usePiniaStore, PiniaState } from './'

import { Ignite } from 'tendermint-spn-ts-client'
import Module from 'tendermint-spn-ts-client/tendermint.spn.campaign/module'

type SendMsgUpdateTotalSupplyType =
  typeof Module.prototype.sendMsgUpdateTotalSupply
type SendMsgInitializeMainnetType =
  typeof Module.prototype.sendMsgInitializeMainnet
type SendMsgRedeemVouchersType = typeof Module.prototype.sendMsgRedeemVouchers
type SendMsgEditCampaignType = typeof Module.prototype.sendMsgEditCampaign
type SendMsgUnredeemVouchersType =
  typeof Module.prototype.sendMsgUnredeemVouchers
type SendMsgAddSharesType = typeof Module.prototype.sendMsgAddShares
type SendMsgBurnVouchersType = typeof Module.prototype.sendMsgBurnVouchers
type SendMsgUpdateTotalSharesType =
  typeof Module.prototype.sendMsgUpdateTotalShares
type SendMsgAddVestingOptionsType =
  typeof Module.prototype.sendMsgAddVestingOptions
type SendMsgMintVouchersType = typeof Module.prototype.sendMsgMintVouchers
type SendMsgCreateCampaignType = typeof Module.prototype.sendMsgCreateCampaign

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
  sendMsgUpdateTotalSupply: SendMsgUpdateTotalSupplyType
  sendMsgInitializeMainnet: SendMsgInitializeMainnetType
  sendMsgRedeemVouchers: SendMsgRedeemVouchersType
  sendMsgEditCampaign: SendMsgEditCampaignType
  sendMsgUnredeemVouchers: SendMsgUnredeemVouchersType
  sendMsgAddShares: SendMsgAddSharesType
  sendMsgBurnVouchers: SendMsgBurnVouchersType
  sendMsgUpdateTotalShares: SendMsgUpdateTotalSharesType
  sendMsgAddVestingOptions: SendMsgAddVestingOptionsType
  sendMsgMintVouchers: SendMsgMintVouchersType
  sendMsgCreateCampaign: SendMsgCreateCampaignType

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
    sendMsgUpdateTotalSupply,

    sendMsgInitializeMainnet,

    sendMsgRedeemVouchers,

    sendMsgEditCampaign,

    sendMsgUnredeemVouchers,

    sendMsgAddShares,

    sendMsgBurnVouchers,

    sendMsgUpdateTotalShares,

    sendMsgAddVestingOptions,

    sendMsgMintVouchers,

    sendMsgCreateCampaign,

    queryCampaign,

    queryCampaignAll,

    queryCampaignChains,

    queryMainnetAccount,

    queryMainnetAccountAll,

    queryMainnetVestingAccount,

    queryMainnetVestingAccountAll,

    queryParams
  } = $ignt.TendermintSpnCampaign

  sendMsgUpdateTotalSupply = sendMsgUpdateTotalSupply.bind(
    $ignt.TendermintSpnCampaign
  )

  sendMsgInitializeMainnet = sendMsgInitializeMainnet.bind(
    $ignt.TendermintSpnCampaign
  )

  sendMsgRedeemVouchers = sendMsgRedeemVouchers.bind(
    $ignt.TendermintSpnCampaign
  )

  sendMsgEditCampaign = sendMsgEditCampaign.bind($ignt.TendermintSpnCampaign)

  sendMsgUnredeemVouchers = sendMsgUnredeemVouchers.bind(
    $ignt.TendermintSpnCampaign
  )

  sendMsgAddShares = sendMsgAddShares.bind($ignt.TendermintSpnCampaign)

  sendMsgBurnVouchers = sendMsgBurnVouchers.bind($ignt.TendermintSpnCampaign)

  sendMsgUpdateTotalShares = sendMsgUpdateTotalShares.bind(
    $ignt.TendermintSpnCampaign
  )

  sendMsgAddVestingOptions = sendMsgAddVestingOptions.bind(
    $ignt.TendermintSpnCampaign
  )

  sendMsgMintVouchers = sendMsgMintVouchers.bind($ignt.TendermintSpnCampaign)

  sendMsgCreateCampaign = sendMsgCreateCampaign.bind(
    $ignt.TendermintSpnCampaign
  )

  queryCampaign = queryCampaign.bind($ignt.TendermintSpnCampaign)

  queryCampaignAll = queryCampaignAll.bind($ignt.TendermintSpnCampaign)

  queryCampaignChains = queryCampaignChains.bind($ignt.TendermintSpnCampaign)

  queryMainnetAccount = queryMainnetAccount.bind($ignt.TendermintSpnCampaign)

  queryMainnetAccountAll = queryMainnetAccountAll.bind(
    $ignt.TendermintSpnCampaign
  )

  queryMainnetVestingAccount = queryMainnetVestingAccount.bind(
    $ignt.TendermintSpnCampaign
  )

  queryMainnetVestingAccountAll = queryMainnetVestingAccountAll.bind(
    $ignt.TendermintSpnCampaign
  )

  queryParams = queryParams.bind($ignt.TendermintSpnCampaign)

  return {
    $s,

    sendMsgUpdateTotalSupply,

    sendMsgInitializeMainnet,

    sendMsgRedeemVouchers,

    sendMsgEditCampaign,

    sendMsgUnredeemVouchers,

    sendMsgAddShares,

    sendMsgBurnVouchers,

    sendMsgUpdateTotalShares,

    sendMsgAddVestingOptions,

    sendMsgMintVouchers,

    sendMsgCreateCampaign,

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
