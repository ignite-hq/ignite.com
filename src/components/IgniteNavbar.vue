<script lang="ts" setup>
import { useIgnite } from '@ignt/vue'
import { watch } from 'vue'

import { useIgnite as useIgniteN } from '~/generated/tendermint-spn-vue'

import IconIgnite from './icons/IconIgnite.vue'
import IgniteLink from './IgniteLink.vue'
import IgniteAccount from './wallet/IgniteAccount.vue'

interface Link {
  name: string
  path: string
}

// variables
const links: Link[] = [
  {
    name: 'Explore',
    path: '/'
  },
  {
    name: 'Launch',
    path: '/launch'
  },
  {
    name: 'Validate',
    path: '/validate'
  }
]

// composables
const {
  state: { ignite }
} = useIgnite()
const { ignite: igniteN, signIn } = useIgniteN()

// watchers
watch(
  () => ignite.value.addr,
  (address) => {
    if (address) {
      const offlineSigner = igniteN.keplr.value.getOfflineSigner(
        process.env.VUE_APP_CHAIN_ID ?? 'spn-nightly'
      )

      signIn(offlineSigner)
    }
  }
)
</script>

<template>
  <nav class="container flex items-center justify-between py-6">
    <div class="flex items-center space-x-8">
      <router-link :to="'/'" alt="Home" title="Home">
        <IconIgnite />
      </router-link>

      <div class="flex items-center space-x-6">
        <IgniteLink
          v-for="link in links"
          :key="link.name"
          class="text-muted hover:text-primary"
          :to="link.path"
          active-class="text-primary"
        >
          {{ link.name }}
        </IgniteLink>
      </div>
    </div>

    <IgniteAccount />
  </nav>
</template>
