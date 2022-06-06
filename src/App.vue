<script lang="ts">
export default {
  name: 'IndexView'
}
</script>

<script lang="ts" setup>
import IgniteFooter from './components/common/IgniteFooter.vue'
import IgniteNavbar from './components/common/IgniteNavbar.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col justify-between">
    <IgniteNavbar />
    <div class="main h-[100%]">
      <router-view />
    </div>
    <IgniteFooter />
  </div>
</template>

<style scoped lang="postcss">
body {
  margin: 0;
}
.main {
  flex-grow: 1;
  padding-bottom: 9.5rem;
  &:last-child {
    padding-bottom: 0;
  }
}
</style>
