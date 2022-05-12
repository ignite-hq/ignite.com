import { V1Beta1Coin } from '~/generated/tendermint-spn-ts-client/cosmos.staking.v1beta1/rest'
import { CampaignCampaignSummary } from '~/generated/tendermint-spn-ts-client/tendermint.spn.campaign/rest'

export function isShare(campaignId: string, coin: V1Beta1Coin): boolean {
  return coin.denom?.startsWith(`v/${campaignId}`) ?? false
}

export function getVouchersFromRewards(
  campaignId: string,
  rewards: CampaignCampaignSummary['rewards'] = []
) {
  return rewards.filter((coin) => isShare(campaignId, coin))
}

export function hasAtLeastOneVoucher(
  campaignId: string,
  rewards: CampaignCampaignSummary['rewards'] = []
): boolean {
  return rewards?.some((supply) => {
    const isShare = supply.denom?.startsWith(`v/${campaignId}`)
    return isShare
  })
}

export function getIncentivesFromRewards(
  campaignId: string,
  rewards: CampaignCampaignSummary['rewards'] = []
) {
  return rewards.filter((coin) => !isShare(campaignId, coin))
}

export function hasAtLeastOneIncentive(
  campaignId: string,
  rewards: CampaignCampaignSummary['rewards'] = []
): boolean {
  return rewards?.some((supply) => {
    const isIncentive = !supply.denom?.startsWith(`v/${campaignId}`)
    return isIncentive
  })
}
