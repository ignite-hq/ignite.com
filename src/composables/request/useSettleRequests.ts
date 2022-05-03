import { EncodeObject } from '@cosmjs/proto-signing'
import { DeliverTxResponse } from '@cosmjs/stargate'
import { useMutation, useQueryClient } from 'vue-query'

import { useSpn } from 'tendermint-spn-vue-client'

import { invalidateChainRequestsQuery } from './useChainRequests'

interface UseSettleRequestDTO {
  signerAddress: string
  messages: EncodeObject[]
}

export default function useSettleRequests() {
  const { spn } = useSpn()
  const queryClient = useQueryClient()

  return useMutation<DeliverTxResponse, Error, UseSettleRequestDTO, unknown>(
    ({ signerAddress, messages }) => {
      return spn.signer.value.client.signAndBroadcast(signerAddress, messages, {
        amount: [],
        gas: '200000'
      })
    },
    {
      onSuccess: () => {
        invalidateChainRequestsQuery(queryClient)
      }
    }
  )
}
