// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { SigningStargateClient } from '@cosmjs/stargate'
import {
  Registry,
  OfflineSigner,
  EncodeObject,
  DirectSecp256k1HdWallet
} from '@cosmjs/proto-signing'
import { Api } from './rest'
import { MsgCreateFixedPriceAuction } from './types/fundraising/tx'
import { MsgAddAllowedBidder } from './types/fundraising/tx'
import { MsgCancelAuction } from './types/fundraising/tx'
import { MsgPlaceBid } from './types/fundraising/tx'
import { MsgCreateEnglishAuction } from './types/fundraising/tx'

const types = [
  [
    '/tendermint.fundraising.MsgCreateFixedPriceAuction',
    MsgCreateFixedPriceAuction
  ],
  ['/tendermint.fundraising.MsgAddAllowedBidder', MsgAddAllowedBidder],
  ['/tendermint.fundraising.MsgCancelAuction', MsgCancelAuction],
  ['/tendermint.fundraising.MsgPlaceBid', MsgPlaceBid],
  ['/tendermint.fundraising.MsgCreateEnglishAuction', MsgCreateEnglishAuction]
]
export const MissingWalletError = new Error('wallet is required')

export const registry = new Registry(<any>types)

const defaultFee = {
  amount: [],
  gas: '200000'
}

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee
  memo?: string
}

const txClient = async (
  wallet: OfflineSigner,
  { addr: addr }: TxClientOptions = { addr: 'http://localhost:26657' }
) => {
  if (!wallet) throw MissingWalletError
  let client
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, {
      registry
    })
  } else {
    client = await SigningStargateClient.offline(wallet, { registry })
  }
  const { address } = (await wallet.getAccounts())[0]

  return {
    signAndBroadcast: (
      msgs: EncodeObject[],
      { fee, memo }: SignAndBroadcastOptions = { fee: defaultFee, memo: '' }
    ) => client.signAndBroadcast(address, msgs, fee, memo),
    msgCreateFixedPriceAuction: (
      data: MsgCreateFixedPriceAuction
    ): EncodeObject => ({
      typeUrl: '/tendermint.fundraising.MsgCreateFixedPriceAuction',
      value: MsgCreateFixedPriceAuction.fromPartial(data)
    }),
    msgAddAllowedBidder: (data: MsgAddAllowedBidder): EncodeObject => ({
      typeUrl: '/tendermint.fundraising.MsgAddAllowedBidder',
      value: MsgAddAllowedBidder.fromPartial(data)
    }),
    msgCancelAuction: (data: MsgCancelAuction): EncodeObject => ({
      typeUrl: '/tendermint.fundraising.MsgCancelAuction',
      value: MsgCancelAuction.fromPartial(data)
    }),
    msgPlaceBid: (data: MsgPlaceBid): EncodeObject => ({
      typeUrl: '/tendermint.fundraising.MsgPlaceBid',
      value: MsgPlaceBid.fromPartial(data)
    }),
    msgCreateEnglishAuction: (data: MsgCreateEnglishAuction): EncodeObject => ({
      typeUrl: '/tendermint.fundraising.MsgCreateEnglishAuction',
      value: MsgCreateEnglishAuction.fromPartial(data)
    })
  }
}

interface QueryClientOptions {
  addr: string
}

const queryClient = async (
  { addr: addr }: QueryClientOptions = { addr: 'http://localhost:1317' }
) => {
  return new Api({ baseUrl: addr })
}

export { txClient, queryClient }
