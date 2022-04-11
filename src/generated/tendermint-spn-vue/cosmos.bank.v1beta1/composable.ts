// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Module from '../../tendermint-spn-ts-client/cosmos.bank.v1beta1/module'
import useIgnite from '../useIgnite'
import { unref } from 'vue'

type SendMsgMultiSendType = typeof Module.prototype.sendMsgMultiSend
type SendMsgSendType = typeof Module.prototype.sendMsgSend

type QueryBalanceType = typeof Module.prototype.queryBalance
type QueryAllBalancesType = typeof Module.prototype.queryAllBalances
type QuerySpendableBalancesType = typeof Module.prototype.querySpendableBalances
type QueryTotalSupplyType = typeof Module.prototype.queryTotalSupply
type QuerySupplyOfType = typeof Module.prototype.querySupplyOf
type QueryParamsType = typeof Module.prototype.queryParams
type QueryDenomMetadataType = typeof Module.prototype.queryDenomMetadata
type QueryDenomsMetadataType = typeof Module.prototype.queryDenomsMetadata

type Response = {
  sendMsgMultiSend: SendMsgMultiSendType
  sendMsgSend: SendMsgSendType

  queryBalance: QueryBalanceType
  queryAllBalances: QueryAllBalancesType
  querySpendableBalances: QuerySpendableBalancesType
  queryTotalSupply: QueryTotalSupplyType
  querySupplyOf: QuerySupplyOfType
  queryParams: QueryParamsType
  queryDenomMetadata: QueryDenomMetadataType
  queryDenomsMetadata: QueryDenomsMetadataType
}

function useModule(): Response {
  // ignite
  let { ignite } = useIgnite()

  let {
    sendMsgMultiSend,

    sendMsgSend,

    queryBalance,

    queryAllBalances,

    querySpendableBalances,

    queryTotalSupply,

    querySupplyOf,

    queryParams,

    queryDenomMetadata,

    queryDenomsMetadata
  } = unref(ignite.cosmosBankV1Beta1)

  sendMsgMultiSend = sendMsgMultiSend.bind(ignite.cosmosBankV1Beta1)

  sendMsgSend = sendMsgSend.bind(ignite.cosmosBankV1Beta1)

  queryBalance = queryBalance.bind(ignite.cosmosBankV1Beta1)

  queryAllBalances = queryAllBalances.bind(ignite.cosmosBankV1Beta1)

  querySpendableBalances = querySpendableBalances.bind(ignite.cosmosBankV1Beta1)

  queryTotalSupply = queryTotalSupply.bind(ignite.cosmosBankV1Beta1)

  querySupplyOf = querySupplyOf.bind(ignite.cosmosBankV1Beta1)

  queryParams = queryParams.bind(ignite.cosmosBankV1Beta1)

  queryDenomMetadata = queryDenomMetadata.bind(ignite.cosmosBankV1Beta1)

  queryDenomsMetadata = queryDenomsMetadata.bind(ignite.cosmosBankV1Beta1)

  return {
    sendMsgMultiSend,

    sendMsgSend,

    queryBalance,

    queryAllBalances,

    querySpendableBalances,

    queryTotalSupply,

    querySupplyOf,

    queryParams,

    queryDenomMetadata,

    queryDenomsMetadata
  }
}

export { useModule }
