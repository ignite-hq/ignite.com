import { GeneratedType } from '@cosmjs/proto-signing'
import { MsgAddAllowedBidder } from './types/fundraising/tx'
import { MsgCreateFixedPriceAuction } from './types/fundraising/tx'
import { MsgCancelAuction } from './types/fundraising/tx'
import { MsgPlaceBid } from './types/fundraising/tx'
import { MsgCreateEnglishAuction } from './types/fundraising/tx'

const msgTypes: Array<[string, GeneratedType]> = [
  ['/tendermint.fundraising.MsgAddAllowedBidder', MsgAddAllowedBidder],
  [
    '/tendermint.fundraising.MsgCreateFixedPriceAuction',
    MsgCreateFixedPriceAuction
  ],
  ['/tendermint.fundraising.MsgCancelAuction', MsgCancelAuction],
  ['/tendermint.fundraising.MsgPlaceBid', MsgPlaceBid],
  ['/tendermint.fundraising.MsgCreateEnglishAuction', MsgCreateEnglishAuction]
]

export { msgTypes }
