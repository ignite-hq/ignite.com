<script lang="ts">
export default {
  name: 'IndexView'
}
</script>

<script lang="ts" setup>
import IgniteNavbar from './components/common/IgniteNavbar.vue'
</script>

<template>
  <div>
    <IgniteNavbar />
    <router-view />
  </div>
</template>

<style scoped lang="postcss">
body {
  margin: 0;
}
</style>
