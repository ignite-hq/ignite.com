<template>
  <SpNavbar :links="navbarLinks" :active-route="router.currentRoute.value.path">
    <template #logo>
      <router-link :to="'/'" alt="Home" title="Home">
        <IconIgnite />
      </router-link>
    </template>
  </SpNavbar>
</template>

<script lang="ts" setup>
import { SpNavbar } from '@starport/vue'
import { NavbarLink } from '@starport/vue/src/components/SpNavbar/SpNavbar.vue'
import { useRouter } from 'vue-router'

import IconIgnite from './icons/IconIgnite.vue'

// variables
const navbarLinks: NavbarLink[] = []

// composables
let router = useRouter()
</script>
