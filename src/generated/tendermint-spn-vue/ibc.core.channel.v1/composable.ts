// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Module from '../../tendermint-spn-ts-client/ibc.core.channel.v1/module'
import useIgnite from '../useIgnite'
import { unref } from 'vue'

type QueryChannelType = typeof Module.prototype.queryChannel
type QueryChannelsType = typeof Module.prototype.queryChannels
type QueryConnectionChannelsType =
  typeof Module.prototype.queryConnectionChannels
type QueryChannelClientStateType =
  typeof Module.prototype.queryChannelClientState
type QueryChannelConsensusStateType =
  typeof Module.prototype.queryChannelConsensusState
type QueryPacketCommitmentType = typeof Module.prototype.queryPacketCommitment
type QueryPacketCommitmentsType = typeof Module.prototype.queryPacketCommitments
type QueryPacketReceiptType = typeof Module.prototype.queryPacketReceipt
type QueryPacketAcknowledgementType =
  typeof Module.prototype.queryPacketAcknowledgement
type QueryPacketAcknowledgementsType =
  typeof Module.prototype.queryPacketAcknowledgements
type QueryUnreceivedPacketsType = typeof Module.prototype.queryUnreceivedPackets
type QueryUnreceivedAcksType = typeof Module.prototype.queryUnreceivedAcks
type QueryNextSequenceReceiveType =
  typeof Module.prototype.queryNextSequenceReceive

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

function useModule(): Response {
  // ignite
  let { ignite } = useIgnite()

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

    queryNextSequenceReceive
  } = unref(ignite.ibcCoreChannelV1)

  queryChannel = queryChannel.bind(ignite.ibcCoreChannelV1)

  queryChannels = queryChannels.bind(ignite.ibcCoreChannelV1)

  queryConnectionChannels = queryConnectionChannels.bind(
    ignite.ibcCoreChannelV1
  )

  queryChannelClientState = queryChannelClientState.bind(
    ignite.ibcCoreChannelV1
  )

  queryChannelConsensusState = queryChannelConsensusState.bind(
    ignite.ibcCoreChannelV1
  )

  queryPacketCommitment = queryPacketCommitment.bind(ignite.ibcCoreChannelV1)

  queryPacketCommitments = queryPacketCommitments.bind(ignite.ibcCoreChannelV1)

  queryPacketReceipt = queryPacketReceipt.bind(ignite.ibcCoreChannelV1)

  queryPacketAcknowledgement = queryPacketAcknowledgement.bind(
    ignite.ibcCoreChannelV1
  )

  queryPacketAcknowledgements = queryPacketAcknowledgements.bind(
    ignite.ibcCoreChannelV1
  )

  queryUnreceivedPackets = queryUnreceivedPackets.bind(ignite.ibcCoreChannelV1)

  queryUnreceivedAcks = queryUnreceivedAcks.bind(ignite.ibcCoreChannelV1)

  queryNextSequenceReceive = queryNextSequenceReceive.bind(
    ignite.ibcCoreChannelV1
  )

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

    queryNextSequenceReceive
  }
}

export { useModule }
