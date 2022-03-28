// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from "@ignt/client";
import Module from "@ignt/client/cosmos.upgrade.v1beta1/module";
		

type QueryCurrentPlanType = typeof Module.prototype.queryCurrentPlan
type QueryAppliedPlanType = typeof Module.prototype.queryAppliedPlan
type QueryUpgradedConsensusStateType = typeof Module.prototype.queryUpgradedConsensusState
type QueryModuleVersionsType = typeof Module.prototype.queryModuleVersions


type Response = {
  
  queryCurrentPlan: QueryCurrentPlanType
  queryAppliedPlan: QueryAppliedPlanType
  queryUpgradedConsensusState: QueryUpgradedConsensusStateType
  queryModuleVersions: QueryModuleVersionsType
  
}

type Params = {
  ignite: Ignite;
}

function useModule({ ignite }: Params): Response {
  let {
	
  
  queryCurrentPlan,
  
  queryAppliedPlan,
  
  queryUpgradedConsensusState,
  
  queryModuleVersions,
  
  } = ignite.CosmosUpgradeV1Beta1

  
  
  
  queryCurrentPlan = queryCurrentPlan.bind(ignite.CosmosUpgradeV1Beta1)
  
  queryAppliedPlan = queryAppliedPlan.bind(ignite.CosmosUpgradeV1Beta1)
  
  queryUpgradedConsensusState = queryUpgradedConsensusState.bind(ignite.CosmosUpgradeV1Beta1)
  
  queryModuleVersions = queryModuleVersions.bind(ignite.CosmosUpgradeV1Beta1)
  

  return {
  
  
  queryCurrentPlan,
  
  queryAppliedPlan,
  
  queryUpgradedConsensusState,
  
  queryModuleVersions,
  
  }
}

export { useModule }
