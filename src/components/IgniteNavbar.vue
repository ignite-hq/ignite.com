<template>
  <SpNavbar
    :links="navbarLinks"
    :active-route="router.currentRoute.value.path"
    class="mb-0 shadow-border"
  >
    <template #logo>
      <router-link :to="'/'" alt="Home" title="Home">
        <IconIgnite />
      </router-link>
    </template>
  </SpNavbar>
</template>

<script lang="ts" setup>
import { useIgnite } from '@ignt/vue'
import { SpNavbar } from '@starport/vue'
import { NavbarLink } from '@starport/vue/src/components/SpNavbar/SpNavbar.vue'
import { watch } from 'vue'
import { useRouter } from 'vue-router'

import { useIgnite as useIgniteN } from '~/generated/tendermint-spn-vue'

import IconIgnite from './icons/IconIgnite.vue'

// variables
const navbarLinks: NavbarLink[] = []

// composables
const router = useRouter()
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
