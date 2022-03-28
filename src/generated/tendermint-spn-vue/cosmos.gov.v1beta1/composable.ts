// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from "@ignt/client";
import Module from "@ignt/client/cosmos.gov.v1beta1/module";
		
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
  sendMsgSubmitProposal: SendMsgSubmitProposalType,
  sendMsgDeposit: SendMsgDepositType,
  sendMsgVote: SendMsgVoteType,
  sendMsgVoteWeighted: SendMsgVoteWeightedType,
  
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
  ignite: Ignite;
}

function useModule({ ignite }: Params): Response {
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
  
  queryTallyResult,
  
  } = ignite.CosmosGovV1Beta1

  
  
	sendMsgSubmitProposal = sendMsgSubmitProposal.bind(ignite.CosmosGovV1Beta1)
  
	sendMsgDeposit = sendMsgDeposit.bind(ignite.CosmosGovV1Beta1)
  
	sendMsgVote = sendMsgVote.bind(ignite.CosmosGovV1Beta1)
  
	sendMsgVoteWeighted = sendMsgVoteWeighted.bind(ignite.CosmosGovV1Beta1)
  
  
  queryProposal = queryProposal.bind(ignite.CosmosGovV1Beta1)
  
  queryProposals = queryProposals.bind(ignite.CosmosGovV1Beta1)
  
  queryVote = queryVote.bind(ignite.CosmosGovV1Beta1)
  
  queryVotes = queryVotes.bind(ignite.CosmosGovV1Beta1)
  
  queryParams = queryParams.bind(ignite.CosmosGovV1Beta1)
  
  queryDeposit = queryDeposit.bind(ignite.CosmosGovV1Beta1)
  
  queryDeposits = queryDeposits.bind(ignite.CosmosGovV1Beta1)
  
  queryTallyResult = queryTallyResult.bind(ignite.CosmosGovV1Beta1)
  

  return {
  
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
  
  queryTallyResult,
  
  }
}

export { useModule }
