import { GeneratedType } from '@cosmjs/proto-signing'
import { MsgRequestRemoveAccount } from './types/launch/tx'
import { MsgRequestAddAccount } from './types/launch/tx'
import { MsgRevertLaunch } from './types/launch/tx'
import { MsgRequestAddVestingAccount } from './types/launch/tx'
import { MsgCreateChain } from './types/launch/tx'
import { MsgTriggerLaunch } from './types/launch/tx'
import { MsgRequestRemoveValidator } from './types/launch/tx'
import { MsgSettleRequest } from './types/launch/tx'
import { MsgEditChain } from './types/launch/tx'
import { MsgRequestAddValidator } from './types/launch/tx'

const msgTypes: Array<[string, GeneratedType]> = [
  ['/tendermint.spn.launch.MsgRequestRemoveAccount', MsgRequestRemoveAccount],
  ['/tendermint.spn.launch.MsgRequestAddAccount', MsgRequestAddAccount],
  ['/tendermint.spn.launch.MsgRevertLaunch', MsgRevertLaunch],
  [
    '/tendermint.spn.launch.MsgRequestAddVestingAccount',
    MsgRequestAddVestingAccount
  ],
  ['/tendermint.spn.launch.MsgCreateChain', MsgCreateChain],
  ['/tendermint.spn.launch.MsgTriggerLaunch', MsgTriggerLaunch],
  [
    '/tendermint.spn.launch.MsgRequestRemoveValidator',
    MsgRequestRemoveValidator
  ],
  ['/tendermint.spn.launch.MsgSettleRequest', MsgSettleRequest],
  ['/tendermint.spn.launch.MsgEditChain', MsgEditChain],
  ['/tendermint.spn.launch.MsgRequestAddValidator', MsgRequestAddValidator]
]

export { msgTypes }
