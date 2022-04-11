import { GeneratedType } from '@cosmjs/proto-signing'
import { MsgCreateBatchAuction } from './types/fundraising/tx'
import { MsgCreateFixedPriceAuction } from './types/fundraising/tx'
import { MsgAddAllowedBidder } from './types/fundraising/tx'
import { MsgPlaceBid } from './types/fundraising/tx'
import { MsgCancelAuction } from './types/fundraising/tx'
import { MsgModifyBid } from './types/fundraising/tx'

const msgTypes: Array<[string, GeneratedType]> = [
  ['/tendermint.fundraising.MsgCreateBatchAuction', MsgCreateBatchAuction],
  [
    '/tendermint.fundraising.MsgCreateFixedPriceAuction',
    MsgCreateFixedPriceAuction
  ],
  ['/tendermint.fundraising.MsgAddAllowedBidder', MsgAddAllowedBidder],
  ['/tendermint.fundraising.MsgPlaceBid', MsgPlaceBid],
  ['/tendermint.fundraising.MsgCancelAuction', MsgCancelAuction],
  ['/tendermint.fundraising.MsgModifyBid', MsgModifyBid]
]

export { msgTypes }
