import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateValidatorDescription } from "./types/profile/tx";
import { MsgAddValidatorOperatorAddress } from "./types/profile/tx";
import { MsgDisableCoordinator } from "./types/profile/tx";
import { MsgUpdateCoordinatorDescription } from "./types/profile/tx";
import { MsgCreateCoordinator } from "./types/profile/tx";
import { MsgUpdateCoordinatorAddress } from "./types/profile/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/tendermint.spn.profile.MsgUpdateValidatorDescription", MsgUpdateValidatorDescription],
    ["/tendermint.spn.profile.MsgAddValidatorOperatorAddress", MsgAddValidatorOperatorAddress],
    ["/tendermint.spn.profile.MsgDisableCoordinator", MsgDisableCoordinator],
    ["/tendermint.spn.profile.MsgUpdateCoordinatorDescription", MsgUpdateCoordinatorDescription],
    ["/tendermint.spn.profile.MsgCreateCoordinator", MsgCreateCoordinator],
    ["/tendermint.spn.profile.MsgUpdateCoordinatorAddress", MsgUpdateCoordinatorAddress],
    
];

export { msgTypes }