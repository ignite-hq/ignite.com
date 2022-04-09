import { LaunchRequestContent } from '~/generated/tendermint-spn-ts-client/tendermint.spn.launch/rest'

type LaunchTypes = keyof LaunchRequestContent

export function getTypeFromContent(content?: LaunchRequestContent) {
  if (!content) return ''
  return Object.keys(content)[0] as LaunchTypes
}
