// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { defineStore } from 'pinia'

import {
  WeightedVoteOption,
  TextProposal,
  Deposit,
  Proposal,
  TallyResult,
  Vote,
  DepositParams,
  VotingParams,
  TallyParams
} from 'ts-client/cosmos.gov.v1beta1/types'

type PiniaState = {
  WeightedVoteOptionAll: WeightedVoteOption[]
  TextProposalAll: TextProposal[]
  DepositAll: Deposit[]
  ProposalAll: Proposal[]
  TallyResultAll: TallyResult[]
  VoteAll: Vote[]
  DepositParamsAll: DepositParams[]
  VotingParamsAll: VotingParams[]
  TallyParamsAll: TallyParams[]
}

const piniaStore = {
  state: (): PiniaState => {
    return {
      WeightedVoteOptionAll: [],
      TextProposalAll: [],
      DepositAll: [],
      ProposalAll: [],
      TallyResultAll: [],
      VoteAll: [],
      DepositParamsAll: [],
      VotingParamsAll: [],
      TallyParamsAll: []
    }
  }
}

const usePiniaStore = defineStore('cosmos.gov.v1beta1', piniaStore)

export { usePiniaStore, PiniaState }
