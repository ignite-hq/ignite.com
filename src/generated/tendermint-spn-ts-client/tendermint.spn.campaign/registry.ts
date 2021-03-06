import { GeneratedType } from '@cosmjs/proto-signing'
import { MsgCreateCampaign } from './types/campaign/tx'
import { MsgRedeemVouchers } from './types/campaign/tx'
import { MsgUnredeemVouchers } from './types/campaign/tx'
import { MsgAddShares } from './types/campaign/tx'
import { MsgBurnVouchers } from './types/campaign/tx'
import { MsgEditCampaign } from './types/campaign/tx'
import { MsgUpdateTotalSupply } from './types/campaign/tx'
import { MsgAddVestingOptions } from './types/campaign/tx'
import { MsgMintVouchers } from './types/campaign/tx'
import { MsgInitializeMainnet } from './types/campaign/tx'

const msgTypes: Array<[string, GeneratedType]> = [
  ['/tendermint.spn.campaign.MsgCreateCampaign', MsgCreateCampaign],
  ['/tendermint.spn.campaign.MsgRedeemVouchers', MsgRedeemVouchers],
  ['/tendermint.spn.campaign.MsgUnredeemVouchers', MsgUnredeemVouchers],
  ['/tendermint.spn.campaign.MsgAddShares', MsgAddShares],
  ['/tendermint.spn.campaign.MsgBurnVouchers', MsgBurnVouchers],
  ['/tendermint.spn.campaign.MsgEditCampaign', MsgEditCampaign],
  ['/tendermint.spn.campaign.MsgUpdateTotalSupply', MsgUpdateTotalSupply],
  ['/tendermint.spn.campaign.MsgAddVestingOptions', MsgAddVestingOptions],
  ['/tendermint.spn.campaign.MsgMintVouchers', MsgMintVouchers],
  ['/tendermint.spn.campaign.MsgInitializeMainnet', MsgInitializeMainnet]
]

export { msgTypes }
