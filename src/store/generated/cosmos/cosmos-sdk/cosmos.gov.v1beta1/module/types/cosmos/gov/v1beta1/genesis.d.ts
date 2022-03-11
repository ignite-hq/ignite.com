import { Writer, Reader } from 'protobufjs/minimal'
import {
  Deposit,
  Vote,
  Proposal,
  DepositParams,
  VotingParams,
  TallyParams
} from '../../../cosmos/gov/v1beta1/gov'
export declare const protobufPackage = 'cosmos.gov.v1beta1'
/** GenesisState defines the gov module's genesis state. */
export interface GenesisState {
  /** starting_proposal_id is the ID of the starting proposal. */
  starting_proposal_id: number
  /** deposits defines all the deposits present at genesis. */
  deposits: Deposit[]
  /** votes defines all the votes present at genesis. */
  votes: Vote[]
  /** proposals defines all the proposals present at genesis. */
  proposals: Proposal[]
  /** params defines all the paramaters of related to deposit. */
  deposit_params: DepositParams | undefined
  /** params defines all the paramaters of related to voting. */
  voting_params: VotingParams | undefined
  /** params defines all the paramaters of related to tally. */
  tally_params: TallyParams | undefined
}
export declare const GenesisState: {
  encode(message: GenesisState, writer?: Writer): Writer
  decode(input: Reader | Uint8Array, length?: number): GenesisState
  fromJSON(object: any): GenesisState
  toJSON(message: GenesisState): unknown
  fromPartial(object: DeepPartial<GenesisState>): GenesisState
}
declare type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | undefined
export declare type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? {
      [K in keyof T]?: DeepPartial<T[K]>
    }
  : Partial<T>
export {}
