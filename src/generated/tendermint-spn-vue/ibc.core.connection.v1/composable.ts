// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Module from '../../tendermint-spn-ts-client/ibc.core.connection.v1/module'
import useIgnite from '../useIgnite'
import { unref } from 'vue'

type QueryConnectionType = typeof Module.prototype.queryConnection
type QueryConnectionsType = typeof Module.prototype.queryConnections
type QueryClientConnectionsType = typeof Module.prototype.queryClientConnections
type QueryConnectionClientStateType =
  typeof Module.prototype.queryConnectionClientState
type QueryConnectionConsensusStateType =
  typeof Module.prototype.queryConnectionConsensusState

type Response = {
  queryConnection: QueryConnectionType
  queryConnections: QueryConnectionsType
  queryClientConnections: QueryClientConnectionsType
  queryConnectionClientState: QueryConnectionClientStateType
  queryConnectionConsensusState: QueryConnectionConsensusStateType
}

function useModule(): Response {
  // ignite
  let { ignite } = useIgnite()

  let {
    queryConnection,

    queryConnections,

    queryClientConnections,

    queryConnectionClientState,

    queryConnectionConsensusState
  } = unref(ignite.ibcCoreConnectionV1)

  queryConnection = queryConnection.bind(ignite.ibcCoreConnectionV1)

  queryConnections = queryConnections.bind(ignite.ibcCoreConnectionV1)

  queryClientConnections = queryClientConnections.bind(
    ignite.ibcCoreConnectionV1
  )

  queryConnectionClientState = queryConnectionClientState.bind(
    ignite.ibcCoreConnectionV1
  )

  queryConnectionConsensusState = queryConnectionConsensusState.bind(
    ignite.ibcCoreConnectionV1
  )

  return {
    queryConnection,

    queryConnections,

    queryClientConnections,

    queryConnectionClientState,

    queryConnectionConsensusState
  }
}

export { useModule }
