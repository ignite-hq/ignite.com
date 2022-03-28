import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateEnglishAuction } from "./types/fundraising/tx";
import { MsgAddAllowedBidder } from "./types/fundraising/tx";
import { MsgPlaceBid } from "./types/fundraising/tx";
import { MsgCreateFixedPriceAuction } from "./types/fundraising/tx";
import { MsgCancelAuction } from "./types/fundraising/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/tendermint.fundraising.MsgCreateEnglishAuction", MsgCreateEnglishAuction],
    ["/tendermint.fundraising.MsgAddAllowedBidder", MsgAddAllowedBidder],
    ["/tendermint.fundraising.MsgPlaceBid", MsgPlaceBid],
    ["/tendermint.fundraising.MsgCreateFixedPriceAuction", MsgCreateFixedPriceAuction],
    ["/tendermint.fundraising.MsgCancelAuction", MsgCancelAuction],
    
];

export { msgTypes }