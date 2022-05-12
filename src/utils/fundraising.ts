import { AuctionStatus } from '~/generated/tendermint-spn-ts-client/tendermint.fundraising/types/fundraising/fundraising'

export enum HumanizedAuctionStatus {
  CurrentAndUpcoming = 'Current and upcoming',
  Current = 'Current',
  Upcoming = 'Upcoming',
  Previous = 'Previous',
  Other = 'Other'
}

export const getHumanizedAuctionStatus = (
  auctionType?: string
): HumanizedAuctionStatus => {
  const type = AuctionStatus[auctionType as any] as unknown as AuctionStatus

  switch (type) {
    case AuctionStatus.AUCTION_STATUS_VESTING:
    case AuctionStatus.AUCTION_STATUS_STARTED:
      return HumanizedAuctionStatus.Current
    case AuctionStatus.AUCTION_STATUS_STANDBY:
      return HumanizedAuctionStatus.Upcoming
    case AuctionStatus.AUCTION_STATUS_FINISHED:
    case AuctionStatus.AUCTION_STATUS_CANCELLED:
      return HumanizedAuctionStatus.Previous
    default:
      return HumanizedAuctionStatus.Other
  }
}