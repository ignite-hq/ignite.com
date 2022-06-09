import dayjs from 'dayjs'

import {
  AuctionStatus,
  FixedPriceAuction
} from '~/generated/tendermint-spn-ts-client/tendermint.fundraising/types/fundraising/fundraising'

export enum HumanizedAuctionStatus {
  CurrentAndUpcoming = 'Current and upcoming',
  Current = 'Current',
  Upcoming = 'Upcoming',
  Previous = 'Previous',
  Other = 'Other'
}

export function getHumanizedAuctionStatus(
  auctionType?: string
): HumanizedAuctionStatus {
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

export function getDenomName(voucherDenom: string): string {
  // 'V/3/foo' -> 'FOO'
  return voucherDenom.toUpperCase().split('/').pop() ?? ''
}

export const toCompactNumber: Intl.NumberFormat = Intl.NumberFormat('en', {
  notation: 'compact'
})

export function getAuctionsByStatus(
  status: HumanizedAuctionStatus,
  auctions: FixedPriceAuction[]
) {
  return auctions.filter((auction: FixedPriceAuction) => {
    return (
      getHumanizedAuctionStatus(
        auction?.base_auction?.status as unknown as string
      ) === status
    )
  })
}

export const REGISTRATION_TERM_DAYS = 7
export const ENDED_TERM_DAYS = 7

export function getRegistrationStartDate(startDate: string | number | Date) {
  const date = dayjs(startDate)

  return date.subtract(REGISTRATION_TERM_DAYS, 'days').toDate()
}
