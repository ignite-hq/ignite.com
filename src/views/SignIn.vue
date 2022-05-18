<script lang="ts">
export default {
  name: 'SignIn'
}
</script>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'

import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteAccount from '~/components/wallet/IgniteAccount.vue'

// composables
const router = useRouter()
const route = useRoute()

// handlers
function handleConnect() {
  router.push((route.query.redirect as string) ?? '/')
}
</script>

<template>
  <div class="container flex h-screen flex-col items-center justify-center">
    <IgniteHeading as="h1" class="font-title text-7 font-semibold md:text-8">
      Please sign in
    </IgniteHeading>

    <div class="mt-6">
      <IgniteAccount @connect="handleConnect"></IgniteAccount>
    </div>
  </div>
</template>
