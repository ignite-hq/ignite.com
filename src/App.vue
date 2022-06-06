<script lang="ts">
export default {
  name: 'IndexView'
}
</script>

<script lang="ts" setup>
import IgniteNavbar from './components/common/IgniteNavbar.vue'
import IgniteFooter from './components/common/IgniteFooter.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col justify-between">
    <IgniteNavbar />
    <router-view />
    <IgniteFooter />
  </div>
</template>

<style scoped lang="postcss">
body {
  margin: 0;
}
</style>
