import { GeneratedType } from '@cosmjs/proto-signing'
import { MsgWithdrawAllocations } from './types/participation/tx'
import { MsgParticipate } from './types/participation/tx'

const msgTypes: Array<[string, GeneratedType]> = [
  [
    '/tendermint.spn.participation.MsgWithdrawAllocations',
    MsgWithdrawAllocations
  ],
  ['/tendermint.spn.participation.MsgParticipate', MsgParticipate]
]

export { msgTypes }
