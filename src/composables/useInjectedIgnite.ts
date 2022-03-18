import { Ignite } from 'tendermint-spn-ts-client'
import { inject, Ref } from 'vue'

export default function useInjectedIgnite() {
  const igniteClient = inject<Ref<Ignite>>('ignt')
  return { igniteClient }
}
