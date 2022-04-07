// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from 'tendermint-spn-ts-client'
import Module from 'tendermint-spn-ts-client/cosmos.slashing.v1beta1/module'

type SendMsgUnjailType = typeof Module.prototype.sendMsgUnjail

type QueryParamsType = typeof Module.prototype.queryParams
type QuerySigningInfoType = typeof Module.prototype.querySigningInfo
type QuerySigningInfosType = typeof Module.prototype.querySigningInfos

type Response = {
  sendMsgUnjail: SendMsgUnjailType

  queryParams: QueryParamsType
  querySigningInfo: QuerySigningInfoType
  querySigningInfos: QuerySigningInfosType
}

type Params = {
  ignite: Ignite
}

function useModule({ ignite }: Params): Response {
  let {
    sendMsgUnjail,

    queryParams,

    querySigningInfo,

    querySigningInfos
  } = ignite.CosmosSlashingV1Beta1

  sendMsgUnjail = sendMsgUnjail.bind(ignite.CosmosSlashingV1Beta1)

  queryParams = queryParams.bind(ignite.CosmosSlashingV1Beta1)

  querySigningInfo = querySigningInfo.bind(ignite.CosmosSlashingV1Beta1)

  querySigningInfos = querySigningInfos.bind(ignite.CosmosSlashingV1Beta1)

  return {
    sendMsgUnjail,

    queryParams,

    querySigningInfo,

    querySigningInfos
  }
}

export { useModule }
