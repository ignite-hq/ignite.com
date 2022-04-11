// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Module from '../../tendermint-spn-ts-client/cosmos.mint.v1beta1/module'
import useIgnite from '../useIgnite'
import { unref } from 'vue'

type QueryParamsType = typeof Module.prototype.queryParams
type QueryInflationType = typeof Module.prototype.queryInflation
type QueryAnnualProvisionsType = typeof Module.prototype.queryAnnualProvisions

type Response = {
  queryParams: QueryParamsType
  queryInflation: QueryInflationType
  queryAnnualProvisions: QueryAnnualProvisionsType
}

function useModule(): Response {
  // ignite
  let { ignite } = useIgnite()

  let {
    queryParams,

    queryInflation,

    queryAnnualProvisions
  } = unref(ignite.cosmosMintV1Beta1)

  queryParams = queryParams.bind(ignite.cosmosMintV1Beta1)

  queryInflation = queryInflation.bind(ignite.cosmosMintV1Beta1)

  queryAnnualProvisions = queryAnnualProvisions.bind(ignite.cosmosMintV1Beta1)

  return {
    queryParams,

    queryInflation,

    queryAnnualProvisions
  }
}

export { useModule }
