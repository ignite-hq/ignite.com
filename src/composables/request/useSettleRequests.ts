import { EncodeObject } from '@cosmjs/proto-signing'
import { DeliverTxResponse } from '@cosmjs/stargate'
import { useMutation, useQueryClient } from 'vue-query'

import { useIgnite } from '~/generated/tendermint-spn-vue'

import { invalidateChainRequestsQuery } from './useChainRequests'

interface UseSettleRequestDTO {
  signerAddress: string
  messages: EncodeObject[]
}

export default function useSettleRequests() {
  const { ignite } = useIgnite()
  const queryClient = useQueryClient()

  return useMutation<DeliverTxResponse, Error, UseSettleRequestDTO, unknown>(
    ({ signerAddress, messages }) => {
      return ignite.signer.value.client.signAndBroadcast(
        signerAddress,
        messages,
        {
          amount: [],
          gas: '200000'
        }
      )
    },
    {
      onSuccess: () => {
        invalidateChainRequestsQuery(queryClient)
      }
    }
  )
}
