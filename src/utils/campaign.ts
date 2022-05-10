export enum ProjectStatusEnvironment {
  Mainnet,
  Testnet,
  NoChains,
  Unknown
}

export function getCampaignStatus(
  isMainnetInitalized: boolean,
  chains: string[]
) {
  if (!chains.length) {
    return ProjectStatusEnvironment.NoChains
  }

  if (isMainnetInitalized) {
    return ProjectStatusEnvironment.Mainnet
  }

  return ProjectStatusEnvironment.Testnet
}
