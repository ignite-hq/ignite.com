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
import { useTendermintFundraising } from 'tendermint-spn-vue'

const { queryActions } = useTendermintFundraising()
```

### To get the `igniteClient` instance, do =

```ts
import { useIgnite } from 'tendermint-spn-ts-client'

const { ignite } = useIgnite()
```

### To sign in/out, do =

```ts
const { signIn, signOut } = useIgnite()
```

### To use the keplr plugin, do =

```ts
ignite.keplr // fully typed
```

### To attach a custom plugin, do =

```ts
import { _use, createIgnite } from 'tendermint-spn-ts-client'

function plugBlockEx(): { blockex: {} } {
  return {
    blockex: {} // implementation of the plugin goes here
  }
}

let ignite = _use({
  ...createIgnite(),
  ...plugBlockEx()
})

ignite.blockex // blockex is fully typed
```

## 🏗 WIP

The generated code is on early alpha. This means a bunch of minor and couple of major issues are yet to be solved.
