import {
  LaunchRequest,
  LaunchRequestContent
} from '~/generated/tendermint-spn-ts-client/tendermint.spn.launch/rest'
import { RequestPageSorts } from '~/stores/requests-store'

import { getTypeFromContent } from '../utils'

export function getHumanizedType(content?: LaunchRequestContent): string {
  const type = getTypeFromContent(content)

  switch (type) {
    case 'genesisAccount':
      return 'Request for tokens'
    case 'genesisValidator':
      return 'Request to validate'
    default:
      return 'Unknown'
  }
}

export function sortRequests(
  requests: LaunchRequest[],
  sortBy: RequestPageSorts
) {
  switch (sortBy) {
    case RequestPageSorts.Newest:
      return requests.sort(
        (a, b) => Number(a?.createdAt ?? '') - Number(b?.createdAt ?? '')
      )
    case RequestPageSorts.RequestType:
      return requests.sort((a, b) => {
        const aType = getTypeFromContent(a.content)
        const bType = getTypeFromContent(b.content)

        if (aType < bType) {
          return -1
        }

        if (aType > bType) {
          return 1
        }

        return 0
      })
    case RequestPageSorts.Requestor:
      return requests.sort((a, b) => {
        const aRequestor = a.creator ?? ''
        const bRequestor = b.creator ?? ''

        if (aRequestor < bRequestor) {
          return -1
        }

        if (aRequestor > bRequestor) {
          return 1
        }

        return 0
      })
    default:
      return requests
  }
}
