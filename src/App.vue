<template>
  <div>
    <Suspense>
      <SpTheme>
        <SpNavbar
          :links="navbarLinks"
          :active-route="router.currentRoute.value.path"
        />
        <router-view v-if="$ignt" />
      </SpTheme>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { SpNavbar, SpTheme } from '@starport/vue'
import { computed, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

import useIgnite from './composables/useIgnite'

export default {
  components: { SpTheme, SpNavbar },

  setup() {
    // ignt
    let { $ignt } = useIgnite()

    // store
    let $s = useStore()

    // router
    let router = useRouter()

    // state
    let navbarLinks = []

    // computed
    let address = computed(() => $s.getters['common/wallet/address'])

    // lh
    onBeforeMount(async () => {
      await $s.dispatch('common/env/init')
    })

    return {
      // ignt
      $ignt,
      // state,
      navbarLinks,
      // router
      router,
      // computed
      address
    }
  }
}
</script>

<style scoped lang="scss">
body {
  margin: 0;
}
</style>
