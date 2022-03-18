## Commands

```
npm i
```

```
npm run dev
```

## Generated code

The two packages, `tendermint-spn-ts-client` and `tendermint-spn-vue`, inside `src/generated` were generated by Ignite CLI on top of Ignite Network chain.

### To make use of the Vue Api, do =

```ts
import { useTendermintFundraisingModule } from 'tendermint-spn-vue'

let { queryAuctions } = useTendermintFundraisingModule({
  igniteClient: igniteClient.value
})
```

### To get the `igniteClient` instance, do =

```ts
import { Ignite } from 'tendermint-spn-ts-client'

let igniteClient = inject<Ref<Ignite>>('ignt')
```

### To get the Pinia Store instance, do =

```ts
import { useTendermintFundraisingModule } from 'tendermint-spn-vue'

let { store } = useTendermintFundraisingModule({
  igniteClient: igniteClient.value
})
```

## 🏗 WIP

The generated code is on early alpha. This means a bunch of minor and couple of major issues are yet to be solved. Some notes =

- For now using the Pinia Store is not recommended.
- The logic inside `Ignt.vue` will be moved outside the repo.
- The need to place the usage of Vue API inside a watch (as in `views/Index.vue`) is only temporary.
- The need for having both `src/store/generated` and `src/generated` is only temporary.
