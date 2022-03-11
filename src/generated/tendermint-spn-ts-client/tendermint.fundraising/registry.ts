import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCancelAuction } from "./types/fundraising/tx";
import { MsgCreateEnglishAuction } from "./types/fundraising/tx";
import { MsgAddAllowedBidder } from "./types/fundraising/tx";
import { MsgCreateFixedPriceAuction } from "./types/fundraising/tx";
import { MsgPlaceBid } from "./types/fundraising/tx";

const msgTypes: Array<[string, GeneratedType]> = [
  ["/tendermint.fundraising.MsgCancelAuction", MsgCancelAuction],
  ["/tendermint.fundraising.MsgCreateEnglishAuction", MsgCreateEnglishAuction],
  ["/tendermint.fundraising.MsgAddAllowedBidder", MsgAddAllowedBidder],
  [
    "/tendermint.fundraising.MsgCreateFixedPriceAuction",
    MsgCreateFixedPriceAuction,
  ],
  ["/tendermint.fundraising.MsgPlaceBid", MsgPlaceBid],
];

export { msgTypes };
