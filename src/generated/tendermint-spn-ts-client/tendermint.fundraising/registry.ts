import { GeneratedType } from '@cosmjs/proto-signing'
import { MsgCreateFixedPriceAuction } from './types/fundraising/tx'
import { MsgCreateEnglishAuction } from './types/fundraising/tx'
import { MsgCancelAuction } from './types/fundraising/tx'
import { MsgPlaceBid } from './types/fundraising/tx'
import { MsgAddAllowedBidder } from './types/fundraising/tx'

const msgTypes: Array<[string, GeneratedType]> = [
  [
    '/tendermint.fundraising.MsgCreateFixedPriceAuction',
    MsgCreateFixedPriceAuction
  ],
  ['/tendermint.fundraising.MsgCreateEnglishAuction', MsgCreateEnglishAuction],
  ['/tendermint.fundraising.MsgCancelAuction', MsgCancelAuction],
  ['/tendermint.fundraising.MsgPlaceBid', MsgPlaceBid],
  ['/tendermint.fundraising.MsgAddAllowedBidder', MsgAddAllowedBidder]
]

export { msgTypes }
