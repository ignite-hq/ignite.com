// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Module from '../../tendermint-spn-ts-client/cosmos.slashing.v1beta1/module'
import useIgnite from '../useIgnite'
import { unref } from 'vue'

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

function useModule(): Response {
  // ignite
  let { ignite } = useIgnite()

  let {
    sendMsgUnjail,

    queryParams,

    querySigningInfo,

    querySigningInfos
  } = unref(ignite.cosmosSlashingV1Beta1)

  sendMsgUnjail = sendMsgUnjail.bind(ignite.cosmosSlashingV1Beta1)

  queryParams = queryParams.bind(ignite.cosmosSlashingV1Beta1)

  querySigningInfo = querySigningInfo.bind(ignite.cosmosSlashingV1Beta1)

  querySigningInfos = querySigningInfos.bind(ignite.cosmosSlashingV1Beta1)

  return {
    sendMsgUnjail,

    queryParams,

    querySigningInfo,

    querySigningInfos
  }
}

export { useModule }
