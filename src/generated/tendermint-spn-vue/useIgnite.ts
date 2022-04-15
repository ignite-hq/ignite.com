// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { OfflineDirectSigner } from '@cosmjs/proto-signing'
import { SigningStargateClient } from '@cosmjs/stargate'
import { Ignite, registry } from '../tendermint-spn-ts-client'
import { toRefs, ToRefs, reactive, UnwrapNestedRefs } from 'vue'

type State = UnwrapNestedRefs<Ignite>

type Response = {
  ignite: ToRefs<Ignite>
  signIn: (offlineSigner: OfflineDirectSigner) => Promise<void>
  signOut: () => void
  inject: (instance: Ignite) => void
}

let _igniteGlobal: State

export default function (): Response {
  let signIn = async (offlineSigner: OfflineDirectSigner) => {
    let [acc] = await offlineSigner.getAccounts()

    let stargateClient = await SigningStargateClient.connectWithSigner(
      _igniteGlobal.env.rpcURL,
      offlineSigner,
      { registry }
    )
    let addr = acc.address

    _igniteGlobal.signer.client = stargateClient
    _igniteGlobal.signer.addr = addr

    _igniteGlobal.cosmosAuthV1Beta1.withSigner(stargateClient, addr)

    _igniteGlobal.cosmosBankV1Beta1.withSigner(stargateClient, addr)

    _igniteGlobal.cosmosBaseTendermintV1Beta1.withSigner(stargateClient, addr)

    _igniteGlobal.cosmosCrisisV1Beta1.withSigner(stargateClient, addr)

    _igniteGlobal.cosmosDistributionV1Beta1.withSigner(stargateClient, addr)

    _igniteGlobal.cosmosEvidenceV1Beta1.withSigner(stargateClient, addr)

    _igniteGlobal.cosmosGovV1Beta1.withSigner(stargateClient, addr)

    _igniteGlobal.cosmosMintV1Beta1.withSigner(stargateClient, addr)

    _igniteGlobal.cosmosParamsV1Beta1.withSigner(stargateClient, addr)

    _igniteGlobal.cosmosSlashingV1Beta1.withSigner(stargateClient, addr)

    _igniteGlobal.cosmosStakingV1Beta1.withSigner(stargateClient, addr)

    _igniteGlobal.cosmosTxV1Beta1.withSigner(stargateClient, addr)

    _igniteGlobal.cosmosUpgradeV1Beta1.withSigner(stargateClient, addr)

    _igniteGlobal.cosmosVestingV1Beta1.withSigner(stargateClient, addr)

    _igniteGlobal.ibcApplicationsTransferV1.withSigner(stargateClient, addr)

    _igniteGlobal.ibcCoreChannelV1.withSigner(stargateClient, addr)

    _igniteGlobal.ibcCoreClientV1.withSigner(stargateClient, addr)

    _igniteGlobal.ibcCoreConnectionV1.withSigner(stargateClient, addr)

    _igniteGlobal.ibcCorePortV1.withSigner(stargateClient, addr)

    _igniteGlobal.tendermintFundraising.withSigner(stargateClient, addr)

    _igniteGlobal.tendermintSpnCampaign.withSigner(stargateClient, addr)

    _igniteGlobal.tendermintSpnLaunch.withSigner(stargateClient, addr)

    _igniteGlobal.tendermintSpnMonitoringc.withSigner(stargateClient, addr)

    _igniteGlobal.tendermintSpnMonitoringp.withSigner(stargateClient, addr)

    _igniteGlobal.tendermintSpnParticipation.withSigner(stargateClient, addr)

    _igniteGlobal.tendermintSpnProfile.withSigner(stargateClient, addr)

    _igniteGlobal.tendermintSpnReward.withSigner(stargateClient, addr)
  }

  let signOut = () => {
    _igniteGlobal.signer.client = undefined
    _igniteGlobal.signer.addr = undefined

    _igniteGlobal.cosmosAuthV1Beta1.noSigner()

    _igniteGlobal.cosmosBankV1Beta1.noSigner()

    _igniteGlobal.cosmosBaseTendermintV1Beta1.noSigner()

    _igniteGlobal.cosmosCrisisV1Beta1.noSigner()

    _igniteGlobal.cosmosDistributionV1Beta1.noSigner()

    _igniteGlobal.cosmosEvidenceV1Beta1.noSigner()

    _igniteGlobal.cosmosGovV1Beta1.noSigner()

    _igniteGlobal.cosmosMintV1Beta1.noSigner()

    _igniteGlobal.cosmosParamsV1Beta1.noSigner()

    _igniteGlobal.cosmosSlashingV1Beta1.noSigner()

    _igniteGlobal.cosmosStakingV1Beta1.noSigner()

    _igniteGlobal.cosmosTxV1Beta1.noSigner()

    _igniteGlobal.cosmosUpgradeV1Beta1.noSigner()

    _igniteGlobal.cosmosVestingV1Beta1.noSigner()

    _igniteGlobal.ibcApplicationsTransferV1.noSigner()

    _igniteGlobal.ibcCoreChannelV1.noSigner()

    _igniteGlobal.ibcCoreClientV1.noSigner()

    _igniteGlobal.ibcCoreConnectionV1.noSigner()

    _igniteGlobal.ibcCorePortV1.noSigner()

    _igniteGlobal.tendermintFundraising.noSigner()

    _igniteGlobal.tendermintSpnCampaign.noSigner()

    _igniteGlobal.tendermintSpnLaunch.noSigner()

    _igniteGlobal.tendermintSpnMonitoringc.noSigner()

    _igniteGlobal.tendermintSpnMonitoringp.noSigner()

    _igniteGlobal.tendermintSpnParticipation.noSigner()

    _igniteGlobal.tendermintSpnProfile.noSigner()

    _igniteGlobal.tendermintSpnReward.noSigner()
  }

  let inject = (instance: Ignite) => {
    _igniteGlobal = reactive<Ignite>(instance)
  }

  return {
    inject,
    ignite: toRefs(_igniteGlobal as Ignite),
    signIn,
    signOut
  }
}
