// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from 'tendermint-spn-ts-client'
import Module from 'tendermint-spn-ts-client/cosmos.mint.v1beta1/module'

type QueryParamsType = typeof Module.prototype.queryParams
type QueryInflationType = typeof Module.prototype.queryInflation
type QueryAnnualProvisionsType = typeof Module.prototype.queryAnnualProvisions

type Response = {
  queryParams: QueryParamsType
  queryInflation: QueryInflationType
  queryAnnualProvisions: QueryAnnualProvisionsType
}

type Params = {
  ignite: Ignite
}

function useModule({ ignite }: Params): Response {
  let {
    queryParams,

    queryInflation,

    queryAnnualProvisions
  } = ignite.CosmosMintV1Beta1

  queryParams = queryParams.bind(ignite.CosmosMintV1Beta1)

  queryInflation = queryInflation.bind(ignite.CosmosMintV1Beta1)

  queryAnnualProvisions = queryAnnualProvisions.bind(ignite.CosmosMintV1Beta1)

  return {
    queryParams,

    queryInflation,

    queryAnnualProvisions
  }
}

export { useModule }
