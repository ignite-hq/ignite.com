// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from 'tendermint-spn-ts-client'
import Module from 'tendermint-spn-ts-client/ibc.core.connection.v1/module'

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

type Params = {
  ignite: Ignite
}

function useModule({ ignite }: Params): Response {
  let {
    queryConnection,

    queryConnections,

    queryClientConnections,

    queryConnectionClientState,

    queryConnectionConsensusState
  } = ignite.IbcCoreConnectionV1

  queryConnection = queryConnection.bind(ignite.IbcCoreConnectionV1)

  queryConnections = queryConnections.bind(ignite.IbcCoreConnectionV1)

  queryClientConnections = queryClientConnections.bind(
    ignite.IbcCoreConnectionV1
  )

  queryConnectionClientState = queryConnectionClientState.bind(
    ignite.IbcCoreConnectionV1
  )

  queryConnectionConsensusState = queryConnectionConsensusState.bind(
    ignite.IbcCoreConnectionV1
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
