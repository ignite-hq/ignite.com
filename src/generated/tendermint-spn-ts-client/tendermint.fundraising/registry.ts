import { GeneratedType } from '@cosmjs/proto-signing'
import { MsgAddAllowedBidder } from './types/fundraising/tx'
import { MsgCreateFixedPriceAuction } from './types/fundraising/tx'
import { MsgCreateBatchAuction } from './types/fundraising/tx'
import { MsgPlaceBid } from './types/fundraising/tx'
import { MsgModifyBid } from './types/fundraising/tx'
import { MsgCancelAuction } from './types/fundraising/tx'

const msgTypes: Array<[string, GeneratedType]> = [
  ['/tendermint.fundraising.MsgAddAllowedBidder', MsgAddAllowedBidder],
  [
    '/tendermint.fundraising.MsgCreateFixedPriceAuction',
    MsgCreateFixedPriceAuction
  ],
  ['/tendermint.fundraising.MsgCreateBatchAuction', MsgCreateBatchAuction],
  ['/tendermint.fundraising.MsgPlaceBid', MsgPlaceBid],
  ['/tendermint.fundraising.MsgModifyBid', MsgModifyBid],
  ['/tendermint.fundraising.MsgCancelAuction', MsgCancelAuction]
]

export { msgTypes }
