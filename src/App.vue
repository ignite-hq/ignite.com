<template>
  <div>
    <Suspense>
      <Ignt>
        <SpTheme>
          <SpNavbar
            :links="navbarLinks"
            :activeRoute="router.currentRoute.value.path"
          />
          <router-view />
        </SpTheme>
      </Ignt>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { SpTheme, SpNavbar } from '@starport/vue'
import { useRouter } from 'vue-router'
import Ignt from './components/Ignt.vue'

export default {
  components: { SpTheme, SpNavbar, Ignt },

  setup() {
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
