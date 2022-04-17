import { useTendermintSpnProfile } from 'tendermint-spn-vue'
import { computed } from 'vue'
import { useQuery } from 'vue-query'

export default function useValidatorProfile(operatorAddress: string) {
  const { queryValidator } = useTendermintSpnProfile()

  const { data, ...other } = useQuery(
    ['validators', 'profile', operatorAddress],
    () => {
      return queryValidator(operatorAddress).then((r) => r.data)
    }
  )

  const validatorProfileData = computed(() => {
    return data.value
  })

  return { validatorProfileData, ...other }
}
