import { useIgnite, useTendermintSpnProfileModule } from 'tendermint-spn-vue'
import { computed } from 'vue'
import { useQuery } from 'vue-query'

export default function useValidatorProfile(operatorAddress: string) {
  const {
    state: { ignite }
  } = useIgnite()
  const { queryValidator } = useTendermintSpnProfileModule({
    ignite: ignite.value
  })

  const { data, ...other } = useQuery(['launchID'], () => {
    return queryValidator(operatorAddress).then((r) => r.data)
  })

  const validatorProfileData = computed(() => {
    return data.value
  })

  return { validatorProfileData, ...other }
}
