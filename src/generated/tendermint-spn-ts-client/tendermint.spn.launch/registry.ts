import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRevertLaunch } from "./types/launch/tx";
import { MsgRequestAddValidator } from "./types/launch/tx";
import { MsgRequestRemoveValidator } from "./types/launch/tx";
import { MsgCreateChain } from "./types/launch/tx";
import { MsgRequestAddAccount } from "./types/launch/tx";
import { MsgTriggerLaunch } from "./types/launch/tx";
import { MsgRequestRemoveAccount } from "./types/launch/tx";
import { MsgRequestAddVestingAccount } from "./types/launch/tx";
import { MsgUpdateLaunchInformation } from "./types/launch/tx";
import { MsgEditChain } from "./types/launch/tx";
import { MsgSettleRequest } from "./types/launch/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/tendermint.spn.launch.MsgRevertLaunch", MsgRevertLaunch],
    ["/tendermint.spn.launch.MsgRequestAddValidator", MsgRequestAddValidator],
    ["/tendermint.spn.launch.MsgRequestRemoveValidator", MsgRequestRemoveValidator],
    ["/tendermint.spn.launch.MsgCreateChain", MsgCreateChain],
    ["/tendermint.spn.launch.MsgRequestAddAccount", MsgRequestAddAccount],
    ["/tendermint.spn.launch.MsgTriggerLaunch", MsgTriggerLaunch],
    ["/tendermint.spn.launch.MsgRequestRemoveAccount", MsgRequestRemoveAccount],
    ["/tendermint.spn.launch.MsgRequestAddVestingAccount", MsgRequestAddVestingAccount],
    ["/tendermint.spn.launch.MsgUpdateLaunchInformation", MsgUpdateLaunchInformation],
    ["/tendermint.spn.launch.MsgEditChain", MsgEditChain],
    ["/tendermint.spn.launch.MsgSettleRequest", MsgSettleRequest],
    
];

export { msgTypes }