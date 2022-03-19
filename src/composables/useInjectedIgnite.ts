import { Ignite } from 'tendermint-spn-ts-client'
import { inject, Ref } from 'vue'

export default function useInjectedIgnite() {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const igniteClient = inject<Ref<Ignite>>('ignt')!
  return { igniteClient }
}
