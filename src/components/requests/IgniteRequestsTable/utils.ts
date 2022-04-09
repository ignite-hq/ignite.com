import { LaunchRequestContent } from '~/generated/tendermint-spn-ts-client/tendermint.spn.launch/rest'

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
