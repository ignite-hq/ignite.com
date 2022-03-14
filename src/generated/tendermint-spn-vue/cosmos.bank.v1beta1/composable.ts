// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Store } from 'pinia'
import { usePiniaStore, PiniaState } from './'

import { Ignite } from 'tendermint-spn-ts-client'
import Module from 'tendermint-spn-ts-client/cosmos.bank.v1beta1/module'

type SendMsgMultiSendType = typeof Module.prototype.sendMsgMultiSend
type SendMsgSendType = typeof Module.prototype.sendMsgSend

type QueryBalanceType = typeof Module.prototype.queryBalance
type QueryAllBalancesType = typeof Module.prototype.queryAllBalances
type QueryTotalSupplyType = typeof Module.prototype.queryTotalSupply
type QuerySupplyOfType = typeof Module.prototype.querySupplyOf
type QueryParamsType = typeof Module.prototype.queryParams
type QueryDenomMetadataType = typeof Module.prototype.queryDenomMetadata
type QueryDenomsMetadataType = typeof Module.prototype.queryDenomsMetadata

type Response = {
  $s: Store<'cosmos.bank.v1beta1', PiniaState, {}, {}>
  sendMsgMultiSend: SendMsgMultiSendType
  sendMsgSend: SendMsgSendType

  queryBalance: QueryBalanceType
  queryAllBalances: QueryAllBalancesType
  queryTotalSupply: QueryTotalSupplyType
  querySupplyOf: QuerySupplyOfType
  queryParams: QueryParamsType
  queryDenomMetadata: QueryDenomMetadataType
  queryDenomsMetadata: QueryDenomsMetadataType
}

type Params = {
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let {
    sendMsgMultiSend,

    sendMsgSend,

    queryBalance,

    queryAllBalances,

    queryTotalSupply,

    querySupplyOf,

    queryParams,

    queryDenomMetadata,

    queryDenomsMetadata
  } = $ignt.CosmosBankV1Beta1

  sendMsgMultiSend = sendMsgMultiSend.bind($ignt.CosmosBankV1Beta1)

  sendMsgSend = sendMsgSend.bind($ignt.CosmosBankV1Beta1)

  queryBalance = queryBalance.bind($ignt.CosmosBankV1Beta1)

  queryAllBalances = queryAllBalances.bind($ignt.CosmosBankV1Beta1)

  queryTotalSupply = queryTotalSupply.bind($ignt.CosmosBankV1Beta1)

  querySupplyOf = querySupplyOf.bind($ignt.CosmosBankV1Beta1)

  queryParams = queryParams.bind($ignt.CosmosBankV1Beta1)

  queryDenomMetadata = queryDenomMetadata.bind($ignt.CosmosBankV1Beta1)

  queryDenomsMetadata = queryDenomsMetadata.bind($ignt.CosmosBankV1Beta1)

  return {
    $s,

    sendMsgMultiSend,

    sendMsgSend,

    queryBalance,

    queryAllBalances,

    queryTotalSupply,

    querySupplyOf,

    queryParams,

    queryDenomMetadata,

    queryDenomsMetadata
  }
}

export { useModule }
