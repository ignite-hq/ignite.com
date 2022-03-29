// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from "tendermint-spn-ts-client";
import Module from "tendermint-spn-ts-client/ibc.core.client.v1/module";
		

type QueryClientStateType = typeof Module.prototype.queryClientState
type QueryClientStatesType = typeof Module.prototype.queryClientStates
type QueryConsensusStateType = typeof Module.prototype.queryConsensusState
type QueryConsensusStatesType = typeof Module.prototype.queryConsensusStates
type QueryClientStatusType = typeof Module.prototype.queryClientStatus
type QueryClientParamsType = typeof Module.prototype.queryClientParams
type QueryUpgradedClientStateType = typeof Module.prototype.queryUpgradedClientState
type QueryUpgradedConsensusStateType = typeof Module.prototype.queryUpgradedConsensusState


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

type Params = {
  ignite: Ignite;
}

function useModule({ ignite }: Params): Response {
  let {
	
  
  queryClientState,
  
  queryClientStates,
  
  queryConsensusState,
  
  queryConsensusStates,
  
  queryClientStatus,
  
  queryClientParams,
  
  queryUpgradedClientState,
  
  queryUpgradedConsensusState,
  
  } = ignite.IbcCoreClientV1

  
  
  
  queryClientState = queryClientState.bind(ignite.IbcCoreClientV1)
  
  queryClientStates = queryClientStates.bind(ignite.IbcCoreClientV1)
  
  queryConsensusState = queryConsensusState.bind(ignite.IbcCoreClientV1)
  
  queryConsensusStates = queryConsensusStates.bind(ignite.IbcCoreClientV1)
  
  queryClientStatus = queryClientStatus.bind(ignite.IbcCoreClientV1)
  
  queryClientParams = queryClientParams.bind(ignite.IbcCoreClientV1)
  
  queryUpgradedClientState = queryUpgradedClientState.bind(ignite.IbcCoreClientV1)
  
  queryUpgradedConsensusState = queryUpgradedConsensusState.bind(ignite.IbcCoreClientV1)
  

  return {
  
  
  queryClientState,
  
  queryClientStates,
  
  queryConsensusState,
  
  queryConsensusStates,
  
  queryClientStatus,
  
  queryClientParams,
  
  queryUpgradedClientState,
  
  queryUpgradedConsensusState,
  
  }
}

export { useModule }
