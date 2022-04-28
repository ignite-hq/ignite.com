import { computed } from 'vue'
import { useQuery } from 'vue-query'
import axios from 'axios'
import { useIgnite } from '~/generated/tendermint-spn-vue'

export default function useValidatorLaunchesCount(operatorAddress: string) {
  const { ignite } = useIgnite()

  const queryUrl =
    `${ignite.env.value.rpcURL}/tx_search?query="message.action=` +
    `'request_add_validator' AND tendermint.spn.launch.EventValidatorAdded` +
    `.genesisValidator CONTAINS '${operatorAddress}'"`

  const { data, ...other } = useQuery(
    ['validators', 'launchCount', operatorAddress],
    () => {
      return axios.get(queryUrl)
    }
  )

  const validatorLaunchesCount = computed(() => {
    return data?.value?.data.result.txs.length || 0
  })

  return { validatorLaunchesCount, ...other }
}
