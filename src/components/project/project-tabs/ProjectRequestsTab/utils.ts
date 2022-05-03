import { EncodeObject } from '@cosmjs/proto-signing'
import BigNumber from 'bignumber.js'

import LaunchModule from 'tendermint-spn-ts-client/tendermint.spn.launch/module'
import {
  LaunchRequest,
  LaunchRequestContent,
  V1Beta1Coin
} from 'tendermint-spn-ts-client/tendermint.spn.launch/rest'

type LaunchTypes = keyof LaunchRequestContent

export function getTypeFromContent(content?: LaunchRequestContent) {
  if (!content) return ''
  return Object.keys(content)[0] as LaunchTypes
}

export function getSettleRequestTxMessages(
  signer: string,
  approve: boolean,
  selectedRequests: LaunchRequest[]
) {
  const messages: EncodeObject[] = []

  selectedRequests.forEach(({ launchID, content, requestID }) => {
    if (!content) return

    const launchModule = new LaunchModule('')
    const message = launchModule.msgSettleRequest({
      value: {
        approve,
        launchID: Number(launchID),
        requestID: Number(requestID),
        signer: signer
      }
    })

    messages.push(message)
  })

  return messages
}

export function getRequestsSummaries(requests: LaunchRequest[]) {
  let validatorCount = 0
  const coinsToGrant: Record<string, V1Beta1Coin> = {}

  requests.forEach(({ content }) => {
    const rawActionType = getTypeFromContent(content)

    if (rawActionType === 'genesisValidator') {
      return validatorCount++
    }

    if (rawActionType === 'genesisAccount') {
      return content?.genesisAccount?.coins?.forEach(({ amount, denom }) => {
        if (!denom || !amount) return
        const previousAmount = new BigNumber(coinsToGrant[denom]?.amount || 0)
        const newAmount = new BigNumber(amount)

        coinsToGrant[denom] = {
          denom,
          amount: previousAmount.plus(newAmount).toString()
        }
      })
    }
  })

  return {
    validatorCount,
    coinsToGrant: Object.values(coinsToGrant)
  }
}
