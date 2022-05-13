// Generated by Ignite ignite.com/cli
import { OfflineDirectSigner } from '@cosmjs/proto-signing'
import { SigningStargateClient } from '@cosmjs/stargate'
import { Spn, registry } from 'tendermint-spn-ts-client'
import { toRefs, ToRefs, reactive, UnwrapNestedRefs } from 'vue'

type State = UnwrapNestedRefs<Spn>

type Response = {
  spn: ToRefs<Spn>
  signIn: (offlineSigner: OfflineDirectSigner) => void
  signOut: () => void
  inject: (instance: Spn) => void
}

let _spnGlobal: State

export default function (): Response {
  let signIn = async (offlineSigner: OfflineDirectSigner) => {
    let [acc] = await offlineSigner.getAccounts()

    let stargateClient = await SigningStargateClient.connectWithSigner(
      _spnGlobal.env.rpcURL,
      offlineSigner,
      { registry }
    )
    let addr = acc.address

    _spnGlobal.signer.client = stargateClient
    _spnGlobal.signer.addr = addr

    _spnGlobal.tendermintSpnCampaign.withSigner(stargateClient, addr)

    _spnGlobal.tendermintSpnLaunch.withSigner(stargateClient, addr)

    _spnGlobal.tendermintSpnMonitoringc.withSigner(stargateClient, addr)

    _spnGlobal.tendermintSpnMonitoringp.withSigner(stargateClient, addr)

    _spnGlobal.tendermintSpnParticipation.withSigner(stargateClient, addr)

    _spnGlobal.tendermintSpnProfile.withSigner(stargateClient, addr)

    _spnGlobal.tendermintSpnReward.withSigner(stargateClient, addr)

    _spnGlobal.cosmosAuthV1Beta1.withSigner(stargateClient, addr)

    _spnGlobal.cosmosAuthzV1Beta1.withSigner(stargateClient, addr)

    _spnGlobal.cosmosBankV1Beta1.withSigner(stargateClient, addr)

    _spnGlobal.cosmosBaseTendermintV1Beta1.withSigner(stargateClient, addr)

    _spnGlobal.cosmosCrisisV1Beta1.withSigner(stargateClient, addr)

    _spnGlobal.cosmosDistributionV1Beta1.withSigner(stargateClient, addr)

    _spnGlobal.cosmosEvidenceV1Beta1.withSigner(stargateClient, addr)

    _spnGlobal.cosmosFeegrantV1Beta1.withSigner(stargateClient, addr)

    _spnGlobal.cosmosGovV1Beta1.withSigner(stargateClient, addr)

    _spnGlobal.cosmosMintV1Beta1.withSigner(stargateClient, addr)

    _spnGlobal.cosmosParamsV1Beta1.withSigner(stargateClient, addr)

    _spnGlobal.cosmosSlashingV1Beta1.withSigner(stargateClient, addr)

    _spnGlobal.cosmosStakingV1Beta1.withSigner(stargateClient, addr)

    _spnGlobal.cosmosTxV1Beta1.withSigner(stargateClient, addr)

    _spnGlobal.cosmosUpgradeV1Beta1.withSigner(stargateClient, addr)

    _spnGlobal.cosmosVestingV1Beta1.withSigner(stargateClient, addr)

    _spnGlobal.tendermintFundraising.withSigner(stargateClient, addr)

    _spnGlobal.ibcApplicationsTransferV1.withSigner(stargateClient, addr)

    _spnGlobal.ibcCoreChannelV1.withSigner(stargateClient, addr)

    _spnGlobal.ibcCoreClientV1.withSigner(stargateClient, addr)

    _spnGlobal.ibcCoreConnectionV1.withSigner(stargateClient, addr)

    _spnGlobal.ibcCorePortV1.withSigner(stargateClient, addr)
  }

  let signOut = () => {
    _spnGlobal.signer.client = undefined
    _spnGlobal.signer.addr = undefined

    _spnGlobal.tendermintSpnCampaign.noSigner()

    _spnGlobal.tendermintSpnLaunch.noSigner()

    _spnGlobal.tendermintSpnMonitoringc.noSigner()

    _spnGlobal.tendermintSpnMonitoringp.noSigner()

    _spnGlobal.tendermintSpnParticipation.noSigner()

    _spnGlobal.tendermintSpnProfile.noSigner()

    _spnGlobal.tendermintSpnReward.noSigner()

    _spnGlobal.cosmosAuthV1Beta1.noSigner()

    _spnGlobal.cosmosAuthzV1Beta1.noSigner()

    _spnGlobal.cosmosBankV1Beta1.noSigner()

    _spnGlobal.cosmosBaseTendermintV1Beta1.noSigner()

    _spnGlobal.cosmosCrisisV1Beta1.noSigner()

    _spnGlobal.cosmosDistributionV1Beta1.noSigner()

    _spnGlobal.cosmosEvidenceV1Beta1.noSigner()

    _spnGlobal.cosmosFeegrantV1Beta1.noSigner()

    _spnGlobal.cosmosGovV1Beta1.noSigner()

    _spnGlobal.cosmosMintV1Beta1.noSigner()

    _spnGlobal.cosmosParamsV1Beta1.noSigner()

    _spnGlobal.cosmosSlashingV1Beta1.noSigner()

    _spnGlobal.cosmosStakingV1Beta1.noSigner()

    _spnGlobal.cosmosTxV1Beta1.noSigner()

    _spnGlobal.cosmosUpgradeV1Beta1.noSigner()

    _spnGlobal.cosmosVestingV1Beta1.noSigner()

    _spnGlobal.tendermintFundraising.noSigner()

    _spnGlobal.ibcApplicationsTransferV1.noSigner()

    _spnGlobal.ibcCoreChannelV1.noSigner()

    _spnGlobal.ibcCoreClientV1.noSigner()

    _spnGlobal.ibcCoreConnectionV1.noSigner()

    _spnGlobal.ibcCorePortV1.noSigner()
  }

  let inject = (instance: Spn) => {
    _spnGlobal = reactive<Spn>(instance)
  }

  return {
    inject,
    spn: toRefs(_spnGlobal as Spn),
    signIn,
    signOut
  }
}
