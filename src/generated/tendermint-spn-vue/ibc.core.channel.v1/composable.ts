// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from "tendermint-spn-ts-client";
import Module from "tendermint-spn-ts-client/ibc.core.channel.v1/module";
		

type QueryChannelType = typeof Module.prototype.queryChannel
type QueryChannelsType = typeof Module.prototype.queryChannels
type QueryConnectionChannelsType = typeof Module.prototype.queryConnectionChannels
type QueryChannelClientStateType = typeof Module.prototype.queryChannelClientState
type QueryChannelConsensusStateType = typeof Module.prototype.queryChannelConsensusState
type QueryPacketCommitmentType = typeof Module.prototype.queryPacketCommitment
type QueryPacketCommitmentsType = typeof Module.prototype.queryPacketCommitments
type QueryPacketReceiptType = typeof Module.prototype.queryPacketReceipt
type QueryPacketAcknowledgementType = typeof Module.prototype.queryPacketAcknowledgement
type QueryPacketAcknowledgementsType = typeof Module.prototype.queryPacketAcknowledgements
type QueryUnreceivedPacketsType = typeof Module.prototype.queryUnreceivedPackets
type QueryUnreceivedAcksType = typeof Module.prototype.queryUnreceivedAcks
type QueryNextSequenceReceiveType = typeof Module.prototype.queryNextSequenceReceive


type Response = {
  
  queryChannel: QueryChannelType
  queryChannels: QueryChannelsType
  queryConnectionChannels: QueryConnectionChannelsType
  queryChannelClientState: QueryChannelClientStateType
  queryChannelConsensusState: QueryChannelConsensusStateType
  queryPacketCommitment: QueryPacketCommitmentType
  queryPacketCommitments: QueryPacketCommitmentsType
  queryPacketReceipt: QueryPacketReceiptType
  queryPacketAcknowledgement: QueryPacketAcknowledgementType
  queryPacketAcknowledgements: QueryPacketAcknowledgementsType
  queryUnreceivedPackets: QueryUnreceivedPacketsType
  queryUnreceivedAcks: QueryUnreceivedAcksType
  queryNextSequenceReceive: QueryNextSequenceReceiveType
  
}

type Params = {
  ignite: Ignite;
}

function useModule({ ignite }: Params): Response {
  let {
	
  
  queryChannel,
  
  queryChannels,
  
  queryConnectionChannels,
  
  queryChannelClientState,
  
  queryChannelConsensusState,
  
  queryPacketCommitment,
  
  queryPacketCommitments,
  
  queryPacketReceipt,
  
  queryPacketAcknowledgement,
  
  queryPacketAcknowledgements,
  
  queryUnreceivedPackets,
  
  queryUnreceivedAcks,
  
  queryNextSequenceReceive,
  
  } = ignite.IbcCoreChannelV1

  
  
  
  queryChannel = queryChannel.bind(ignite.IbcCoreChannelV1)
  
  queryChannels = queryChannels.bind(ignite.IbcCoreChannelV1)
  
  queryConnectionChannels = queryConnectionChannels.bind(ignite.IbcCoreChannelV1)
  
  queryChannelClientState = queryChannelClientState.bind(ignite.IbcCoreChannelV1)
  
  queryChannelConsensusState = queryChannelConsensusState.bind(ignite.IbcCoreChannelV1)
  
  queryPacketCommitment = queryPacketCommitment.bind(ignite.IbcCoreChannelV1)
  
  queryPacketCommitments = queryPacketCommitments.bind(ignite.IbcCoreChannelV1)
  
  queryPacketReceipt = queryPacketReceipt.bind(ignite.IbcCoreChannelV1)
  
  queryPacketAcknowledgement = queryPacketAcknowledgement.bind(ignite.IbcCoreChannelV1)
  
  queryPacketAcknowledgements = queryPacketAcknowledgements.bind(ignite.IbcCoreChannelV1)
  
  queryUnreceivedPackets = queryUnreceivedPackets.bind(ignite.IbcCoreChannelV1)
  
  queryUnreceivedAcks = queryUnreceivedAcks.bind(ignite.IbcCoreChannelV1)
  
  queryNextSequenceReceive = queryNextSequenceReceive.bind(ignite.IbcCoreChannelV1)
  

  return {
  
  
  queryChannel,
  
  queryChannels,
  
  queryConnectionChannels,
  
  queryChannelClientState,
  
  queryChannelConsensusState,
  
  queryPacketCommitment,
  
  queryPacketCommitments,
  
  queryPacketReceipt,
  
  queryPacketAcknowledgement,
  
  queryPacketAcknowledgements,
  
  queryUnreceivedPackets,
  
  queryUnreceivedAcks,
  
  queryNextSequenceReceive,
  
  }
}

export { useModule }
