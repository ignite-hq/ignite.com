// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Module from '../../tendermint-spn-ts-client/cosmos.base.tendermint.v1beta1/module'
import useIgnite from '../useIgnite'
import { unref } from 'vue'

type ServiceGetNodeInfoType = typeof Module.prototype.serviceGetNodeInfo
type ServiceGetSyncingType = typeof Module.prototype.serviceGetSyncing
type ServiceGetLatestBlockType = typeof Module.prototype.serviceGetLatestBlock
type ServiceGetBlockByHeightType =
  typeof Module.prototype.serviceGetBlockByHeight
type ServiceGetLatestValidatorSetType =
  typeof Module.prototype.serviceGetLatestValidatorSet
type ServiceGetValidatorSetByHeightType =
  typeof Module.prototype.serviceGetValidatorSetByHeight

type Response = {
  serviceGetNodeInfo: ServiceGetNodeInfoType
  serviceGetSyncing: ServiceGetSyncingType
  serviceGetLatestBlock: ServiceGetLatestBlockType
  serviceGetBlockByHeight: ServiceGetBlockByHeightType
  serviceGetLatestValidatorSet: ServiceGetLatestValidatorSetType
  serviceGetValidatorSetByHeight: ServiceGetValidatorSetByHeightType
}

function useModule(): Response {
  // ignite
  let { ignite } = useIgnite()

  let {
    serviceGetNodeInfo,

    serviceGetSyncing,

    serviceGetLatestBlock,

    serviceGetBlockByHeight,

    serviceGetLatestValidatorSet,

    serviceGetValidatorSetByHeight
  } = unref(ignite.cosmosBaseTendermintV1Beta1)

  serviceGetNodeInfo = serviceGetNodeInfo.bind(
    ignite.cosmosBaseTendermintV1Beta1
  )

  serviceGetSyncing = serviceGetSyncing.bind(ignite.cosmosBaseTendermintV1Beta1)

  serviceGetLatestBlock = serviceGetLatestBlock.bind(
    ignite.cosmosBaseTendermintV1Beta1
  )

  serviceGetBlockByHeight = serviceGetBlockByHeight.bind(
    ignite.cosmosBaseTendermintV1Beta1
  )

  serviceGetLatestValidatorSet = serviceGetLatestValidatorSet.bind(
    ignite.cosmosBaseTendermintV1Beta1
  )

  serviceGetValidatorSetByHeight = serviceGetValidatorSetByHeight.bind(
    ignite.cosmosBaseTendermintV1Beta1
  )

  return {
    serviceGetNodeInfo,

    serviceGetSyncing,

    serviceGetLatestBlock,

    serviceGetBlockByHeight,

    serviceGetLatestValidatorSet,

    serviceGetValidatorSetByHeight
  }
}

export { useModule }
