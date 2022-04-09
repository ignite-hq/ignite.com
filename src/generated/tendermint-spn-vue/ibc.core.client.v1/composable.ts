// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Module from '../../tendermint-spn-ts-client/ibc.core.client.v1/module'
import useIgnite from '../useIgnite'
import { unref } from 'vue'

type QueryClientStateType = typeof Module.prototype.queryClientState
type QueryClientStatesType = typeof Module.prototype.queryClientStates
type QueryConsensusStateType = typeof Module.prototype.queryConsensusState
type QueryConsensusStatesType = typeof Module.prototype.queryConsensusStates
type QueryClientStatusType = typeof Module.prototype.queryClientStatus
type QueryClientParamsType = typeof Module.prototype.queryClientParams
type QueryUpgradedClientStateType =
  typeof Module.prototype.queryUpgradedClientState
type QueryUpgradedConsensusStateType =
  typeof Module.prototype.queryUpgradedConsensusState

type Response = {
  queryClientState: QueryClientStateType
  queryClientStates: QueryClientStatesType
  queryConsensusState: QueryConsensusStateType
  queryConsensusStates: QueryConsensusStatesType
  queryClientStatus: QueryClientStatusType
  queryClientParams: QueryClientParamsType
  queryUpgradedClientState: QueryUpgradedClientStateType
  queryUpgradedConsensusState: QueryUpgradedConsensusStateType
}

function useModule(): Response {
  // ignite
  let { ignite } = useIgnite()

  let {
    queryClientState,

    queryClientStates,

    queryConsensusState,

    queryConsensusStates,

    queryClientStatus,

    queryClientParams,

    queryUpgradedClientState,

    queryUpgradedConsensusState
  } = unref(ignite.ibcCoreClientV1)

  queryClientState = queryClientState.bind(ignite.ibcCoreClientV1)

  queryClientStates = queryClientStates.bind(ignite.ibcCoreClientV1)

  queryConsensusState = queryConsensusState.bind(ignite.ibcCoreClientV1)

  queryConsensusStates = queryConsensusStates.bind(ignite.ibcCoreClientV1)

  queryClientStatus = queryClientStatus.bind(ignite.ibcCoreClientV1)

  queryClientParams = queryClientParams.bind(ignite.ibcCoreClientV1)

  queryUpgradedClientState = queryUpgradedClientState.bind(
    ignite.ibcCoreClientV1
  )

  queryUpgradedConsensusState = queryUpgradedConsensusState.bind(
    ignite.ibcCoreClientV1
  )

  return {
    queryClientState,

    queryClientStates,

    queryConsensusState,

    queryConsensusStates,

    queryClientStatus,

    queryClientParams,

    queryUpgradedClientState,

    queryUpgradedConsensusState
  }
}

export { useModule }
