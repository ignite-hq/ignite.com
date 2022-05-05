<script lang="ts" setup>
import IconIgnite from '~/components/icons/IconIgnite.vue'
import IgniteAccount from '~/components/wallet/IgniteAccount.vue'

import IgniteLink from '~/components/ui/IgniteLink.vue'
import IgniteContainer from '~/components/ui/IgniteContainer.vue'

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
</script>

<template>
  <nav class="py-6 shadow-border">
    <IgniteContainer class="flex items-center justify-between">
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
    </IgniteContainer>
  </nav>
</template>

<style lang="postcss" scoped></style>
