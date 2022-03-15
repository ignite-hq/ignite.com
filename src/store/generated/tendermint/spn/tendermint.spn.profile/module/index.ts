// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateCoordinator } from "./types/profile/tx";
import { MsgUpdateCoordinatorAddress } from "./types/profile/tx";
import { MsgUpdateCoordinatorDescription } from "./types/profile/tx";
import { MsgDisableCoordinator } from "./types/profile/tx";
import { MsgUpdateValidatorDescription } from "./types/profile/tx";
import { MsgAddValidatorOperatorAddress } from "./types/profile/tx";


const types = [
  ["/tendermint.spn.profile.MsgCreateCoordinator", MsgCreateCoordinator],
  ["/tendermint.spn.profile.MsgUpdateCoordinatorAddress", MsgUpdateCoordinatorAddress],
  ["/tendermint.spn.profile.MsgUpdateCoordinatorDescription", MsgUpdateCoordinatorDescription],
  ["/tendermint.spn.profile.MsgDisableCoordinator", MsgDisableCoordinator],
  ["/tendermint.spn.profile.MsgUpdateValidatorDescription", MsgUpdateValidatorDescription],
  ["/tendermint.spn.profile.MsgAddValidatorOperatorAddress", MsgAddValidatorOperatorAddress],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgCreateCoordinator: (data: MsgCreateCoordinator): EncodeObject => ({ typeUrl: "/tendermint.spn.profile.MsgCreateCoordinator", value: MsgCreateCoordinator.fromPartial( data ) }),
    msgUpdateCoordinatorAddress: (data: MsgUpdateCoordinatorAddress): EncodeObject => ({ typeUrl: "/tendermint.spn.profile.MsgUpdateCoordinatorAddress", value: MsgUpdateCoordinatorAddress.fromPartial( data ) }),
    msgUpdateCoordinatorDescription: (data: MsgUpdateCoordinatorDescription): EncodeObject => ({ typeUrl: "/tendermint.spn.profile.MsgUpdateCoordinatorDescription", value: MsgUpdateCoordinatorDescription.fromPartial( data ) }),
    msgDisableCoordinator: (data: MsgDisableCoordinator): EncodeObject => ({ typeUrl: "/tendermint.spn.profile.MsgDisableCoordinator", value: MsgDisableCoordinator.fromPartial( data ) }),
    msgUpdateValidatorDescription: (data: MsgUpdateValidatorDescription): EncodeObject => ({ typeUrl: "/tendermint.spn.profile.MsgUpdateValidatorDescription", value: MsgUpdateValidatorDescription.fromPartial( data ) }),
    msgAddValidatorOperatorAddress: (data: MsgAddValidatorOperatorAddress): EncodeObject => ({ typeUrl: "/tendermint.spn.profile.MsgAddValidatorOperatorAddress", value: MsgAddValidatorOperatorAddress.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
