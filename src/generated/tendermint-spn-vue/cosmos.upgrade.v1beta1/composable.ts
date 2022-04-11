// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Module from '../../tendermint-spn-ts-client/cosmos.upgrade.v1beta1/module'
import useIgnite from '../useIgnite'
import { unref } from 'vue'

type QueryCurrentPlanType = typeof Module.prototype.queryCurrentPlan
type QueryAppliedPlanType = typeof Module.prototype.queryAppliedPlan
type QueryUpgradedConsensusStateType =
  typeof Module.prototype.queryUpgradedConsensusState
type QueryModuleVersionsType = typeof Module.prototype.queryModuleVersions

type Response = {
  queryCurrentPlan: QueryCurrentPlanType
  queryAppliedPlan: QueryAppliedPlanType
  queryUpgradedConsensusState: QueryUpgradedConsensusStateType
  queryModuleVersions: QueryModuleVersionsType
}

function useModule(): Response {
  // ignite
  let { ignite } = useIgnite()

  let {
    queryCurrentPlan,

    queryAppliedPlan,

    queryUpgradedConsensusState,

    queryModuleVersions
  } = unref(ignite.cosmosUpgradeV1Beta1)

  queryCurrentPlan = queryCurrentPlan.bind(ignite.cosmosUpgradeV1Beta1)

  queryAppliedPlan = queryAppliedPlan.bind(ignite.cosmosUpgradeV1Beta1)

  queryUpgradedConsensusState = queryUpgradedConsensusState.bind(
    ignite.cosmosUpgradeV1Beta1
  )

  queryModuleVersions = queryModuleVersions.bind(ignite.cosmosUpgradeV1Beta1)

  return {
    queryCurrentPlan,

    queryAppliedPlan,

    queryUpgradedConsensusState,

    queryModuleVersions
  }
}

export { useModule }
