// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Module from '../../tendermint-spn-ts-client/cosmos.params.v1beta1/module'
import useIgnite from '../useIgnite'
import { unref } from 'vue'

type QueryParamsType = typeof Module.prototype.queryParams

type Response = {
  queryParams: QueryParamsType
}

function useModule(): Response {
  // ignite
  let { ignite } = useIgnite()

  let { queryParams } = unref(ignite.cosmosParamsV1Beta1)

  queryParams = queryParams.bind(ignite.cosmosParamsV1Beta1)

  return {
    queryParams
  }
}

export { useModule }
