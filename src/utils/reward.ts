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

export function getIncentivesFromRewards(
  campaignId: string,
  rewards: CampaignCampaignSummary['rewards'] = []
) {
  return rewards.filter((coin) => !isShare(campaignId, coin))
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

export function hasAtLeastOneIncentive(
  campaignId: string,
  rewards: CampaignCampaignSummary['rewards'] = []
): boolean {
  return rewards?.some((supply) => {
    const isIncentive = !supply.denom?.startsWith(`v/${campaignId}`)
    return isIncentive
  })
}

export function getIncentivesSummary(
  campaignId: string,
  rewards: CampaignCampaignSummary['rewards']
) {
  const incentiveCoins = getIncentivesFromRewards(campaignId ?? '', rewards)

  const total = incentiveCoins.reduce((acc, coin) => {
    const isIncentive = !isShare(campaignId ?? '', coin)
    if (isIncentive) return acc + Number(coin.amount)
    return acc
  }, 0)
  const denoms = incentiveCoins.map((coin) => coin?.denom?.toUpperCase() ?? '')

  return { total, denoms }
}

export function getVouchersSummary(
  campaignId: string,
  rewards: CampaignCampaignSummary['rewards']
) {
  const vouchers = getVouchersFromRewards(campaignId ?? '', rewards)

  const avgSharePercentage = vouchers.reduce((acc, coin) => {
    const TOTAL_SUPPLY = 100_000

    const currentValue = (Number(coin.amount) / TOTAL_SUPPLY) * 100

    const newAvgSharePercentage = acc + currentValue / vouchers.length

    return newAvgSharePercentage
  }, 0)
  const denoms = vouchers.map((coin) => {
    const denom = coin.denom?.split('/')[2] ?? ''
    return denom
  })

  return { avgSharePercentage, denoms }
}
