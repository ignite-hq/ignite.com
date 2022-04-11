// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Module from '../../tendermint-spn-ts-client/cosmos.gov.v1beta1/module'
import useIgnite from '../useIgnite'
import { unref } from 'vue'

type SendMsgVoteWeightedType = typeof Module.prototype.sendMsgVoteWeighted
type SendMsgDepositType = typeof Module.prototype.sendMsgDeposit
type SendMsgVoteType = typeof Module.prototype.sendMsgVote
type SendMsgSubmitProposalType = typeof Module.prototype.sendMsgSubmitProposal

type QueryProposalType = typeof Module.prototype.queryProposal
type QueryProposalsType = typeof Module.prototype.queryProposals
type QueryVoteType = typeof Module.prototype.queryVote
type QueryVotesType = typeof Module.prototype.queryVotes
type QueryParamsType = typeof Module.prototype.queryParams
type QueryDepositType = typeof Module.prototype.queryDeposit
type QueryDepositsType = typeof Module.prototype.queryDeposits
type QueryTallyResultType = typeof Module.prototype.queryTallyResult

type Response = {
  sendMsgVoteWeighted: SendMsgVoteWeightedType
  sendMsgDeposit: SendMsgDepositType
  sendMsgVote: SendMsgVoteType
  sendMsgSubmitProposal: SendMsgSubmitProposalType

  queryProposal: QueryProposalType
  queryProposals: QueryProposalsType
  queryVote: QueryVoteType
  queryVotes: QueryVotesType
  queryParams: QueryParamsType
  queryDeposit: QueryDepositType
  queryDeposits: QueryDepositsType
  queryTallyResult: QueryTallyResultType
}

function useModule(): Response {
  // ignite
  let { ignite } = useIgnite()

  let {
    sendMsgVoteWeighted,

    sendMsgDeposit,

    sendMsgVote,

    sendMsgSubmitProposal,

    queryProposal,

    queryProposals,

    queryVote,

    queryVotes,

    queryParams,

    queryDeposit,

    queryDeposits,

    queryTallyResult
  } = unref(ignite.cosmosGovV1Beta1)

  sendMsgVoteWeighted = sendMsgVoteWeighted.bind(ignite.cosmosGovV1Beta1)

  sendMsgDeposit = sendMsgDeposit.bind(ignite.cosmosGovV1Beta1)

  sendMsgVote = sendMsgVote.bind(ignite.cosmosGovV1Beta1)

  sendMsgSubmitProposal = sendMsgSubmitProposal.bind(ignite.cosmosGovV1Beta1)

  queryProposal = queryProposal.bind(ignite.cosmosGovV1Beta1)

  queryProposals = queryProposals.bind(ignite.cosmosGovV1Beta1)

  queryVote = queryVote.bind(ignite.cosmosGovV1Beta1)

  queryVotes = queryVotes.bind(ignite.cosmosGovV1Beta1)

  queryParams = queryParams.bind(ignite.cosmosGovV1Beta1)

  queryDeposit = queryDeposit.bind(ignite.cosmosGovV1Beta1)

  queryDeposits = queryDeposits.bind(ignite.cosmosGovV1Beta1)

  queryTallyResult = queryTallyResult.bind(ignite.cosmosGovV1Beta1)

  return {
    sendMsgVoteWeighted,

    sendMsgDeposit,

    sendMsgVote,

    sendMsgSubmitProposal,

    queryProposal,

    queryProposals,

    queryVote,

    queryVotes,

    queryParams,

    queryDeposit,

    queryDeposits,

    queryTallyResult
  }
}

export { useModule }
