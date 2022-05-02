<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteImage'
})
</script>

<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    reqired: true
  },
  alt: {
    type: String,
    default: ''
  }
})

// methods
function getImageUrl(name: string) {
  return new URL(`~/assets/images/${name}`, import.meta.url).href
}
</script>

<template>
  <picture>
    <source
      :srcset="`${getImageUrl(`${name}.webp`)} 1x, ${getImageUrl(
        `${name}@2x.webp`
      )} 2x`"
      type="image/webp"
    />
    <source
      :srcset="`${getImageUrl(`${name}.png`)} 1x, ${getImageUrl(
        `${name}@2x.png`
      )} 2x`"
      type="image/png"
    />
    <img :src="getImageUrl(`${name}.png`)" :alt="alt" />
  </picture>
</template>
