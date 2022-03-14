<template>
  <div>
    <Suspense>
      <SpTheme>
        <SpNavbar
          :links="navbarLinks"
          :activeRoute="router.currentRoute.value.path"
        />
        <router-view v-if="$ignt" />
      </SpTheme>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { SpTheme, SpNavbar } from '@starport/vue'
import { useRouter } from 'vue-router'
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
