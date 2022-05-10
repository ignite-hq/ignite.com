import { GeneratedType } from '@cosmjs/proto-signing'
import { MsgParticipate } from './types/participation/tx'
import { MsgWithdrawAllocations } from './types/participation/tx'

const msgTypes: Array<[string, GeneratedType]> = [
  ['/tendermint.spn.participation.MsgParticipate', MsgParticipate],
  [
    '/tendermint.spn.participation.MsgWithdrawAllocations',
    MsgWithdrawAllocations
  ]
]

export { msgTypes }
