// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from "@ignt/client";
import Module from "@ignt/client/cosmos.base.tendermint.v1beta1/module";
		

type ServiceGetNodeInfoType = typeof Module.prototype.serviceGetNodeInfo
type ServiceGetSyncingType = typeof Module.prototype.serviceGetSyncing
type ServiceGetLatestBlockType = typeof Module.prototype.serviceGetLatestBlock
type ServiceGetBlockByHeightType = typeof Module.prototype.serviceGetBlockByHeight
type ServiceGetLatestValidatorSetType = typeof Module.prototype.serviceGetLatestValidatorSet
type ServiceGetValidatorSetByHeightType = typeof Module.prototype.serviceGetValidatorSetByHeight


type Response = {
  
  serviceGetNodeInfo: ServiceGetNodeInfoType
  serviceGetSyncing: ServiceGetSyncingType
  serviceGetLatestBlock: ServiceGetLatestBlockType
  serviceGetBlockByHeight: ServiceGetBlockByHeightType
  serviceGetLatestValidatorSet: ServiceGetLatestValidatorSetType
  serviceGetValidatorSetByHeight: ServiceGetValidatorSetByHeightType
  
}

type Params = {
  ignite: Ignite;
}

function useModule({ ignite }: Params): Response {
  let {
	
  
  serviceGetNodeInfo,
  
  serviceGetSyncing,
  
  serviceGetLatestBlock,
  
  serviceGetBlockByHeight,
  
  serviceGetLatestValidatorSet,
  
  serviceGetValidatorSetByHeight,
  
  } = ignite.CosmosBaseTendermintV1Beta1

  
  
  
  serviceGetNodeInfo = serviceGetNodeInfo.bind(ignite.CosmosBaseTendermintV1Beta1)
  
  serviceGetSyncing = serviceGetSyncing.bind(ignite.CosmosBaseTendermintV1Beta1)
  
  serviceGetLatestBlock = serviceGetLatestBlock.bind(ignite.CosmosBaseTendermintV1Beta1)
  
  serviceGetBlockByHeight = serviceGetBlockByHeight.bind(ignite.CosmosBaseTendermintV1Beta1)
  
  serviceGetLatestValidatorSet = serviceGetLatestValidatorSet.bind(ignite.CosmosBaseTendermintV1Beta1)
  
  serviceGetValidatorSetByHeight = serviceGetValidatorSetByHeight.bind(ignite.CosmosBaseTendermintV1Beta1)
  

  return {
  
  
  serviceGetNodeInfo,
  
  serviceGetSyncing,
  
  serviceGetLatestBlock,
  
  serviceGetBlockByHeight,
  
  serviceGetLatestValidatorSet,
  
  serviceGetValidatorSetByHeight,
  
  }
}

export { useModule }
