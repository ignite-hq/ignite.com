// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from 'tendermint-spn-ts-client'
import Module from 'tendermint-spn-ts-client/cosmos.params.v1beta1/module'

type QueryParamsType = typeof Module.prototype.queryParams

type Response = {
  queryParams: QueryParamsType
}

type Params = {
  ignite: Ignite
}

function useModule({ ignite }: Params): Response {
  let { queryParams } = ignite.CosmosParamsV1Beta1

  queryParams = queryParams.bind(ignite.CosmosParamsV1Beta1)

  return {
    queryParams
  }
}

export { useModule }
