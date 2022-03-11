// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Store } from 'pinia'
import { usePiniaStore, PiniaState } from './'

import { Ignite } from 'tendermint-spn-ts-client'
import Module from 'tendermint-spn-ts-client/cosmos.gov.v1beta1/module'

type SendMsgSubmitProposalType = typeof Module.prototype.sendMsgSubmitProposal
type SendMsgDepositType = typeof Module.prototype.sendMsgDeposit
type SendMsgVoteType = typeof Module.prototype.sendMsgVote
type SendMsgVoteWeightedType = typeof Module.prototype.sendMsgVoteWeighted

type QueryProposalType = typeof Module.prototype.queryProposal
type QueryProposalsType = typeof Module.prototype.queryProposals
type QueryVoteType = typeof Module.prototype.queryVote
type QueryVotesType = typeof Module.prototype.queryVotes
type QueryParamsType = typeof Module.prototype.queryParams
type QueryDepositType = typeof Module.prototype.queryDeposit
type QueryDepositsType = typeof Module.prototype.queryDeposits
type QueryTallyResultType = typeof Module.prototype.queryTallyResult

type Response = {
  $s: Store<'cosmos.gov.v1beta1', PiniaState, {}, {}>
  sendMsgSubmitProposal: SendMsgSubmitProposalType
  sendMsgDeposit: SendMsgDepositType
  sendMsgVote: SendMsgVoteType
  sendMsgVoteWeighted: SendMsgVoteWeightedType

  queryProposal: QueryProposalType
  queryProposals: QueryProposalsType
  queryVote: QueryVoteType
  queryVotes: QueryVotesType
  queryParams: QueryParamsType
  queryDeposit: QueryDepositType
  queryDeposits: QueryDepositsType
  queryTallyResult: QueryTallyResultType
}

type Params = {
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let {
    sendMsgSubmitProposal,

    sendMsgDeposit,

    sendMsgVote,

    sendMsgVoteWeighted,

    queryProposal,

    queryProposals,

    queryVote,

    queryVotes,

    queryParams,

    queryDeposit,

    queryDeposits,

    queryTallyResult
  } = $ignt.CosmosGovV1Beta1

  return {
    $s,

    sendMsgSubmitProposal,

    sendMsgDeposit,

    sendMsgVote,

    sendMsgVoteWeighted,

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
