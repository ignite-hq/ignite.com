<template>
  <a
    v-if="isExternalLink"
    v-bind="$attrs"
    :href="to"
    target="_blank"
    class="duration-250 transition-colors ease-in-out"
  >
    <slot />
  </a>

  <router-link
    v-else
    v-slot="{ isActive, href, navigate }"
    v-bind="$props"
    custom
  >
    <a
      v-bind="$attrs"
      :href="href"
      :class="isActive ? activeClass : inactiveClass"
      class="duration-250 transition-colors ease-in-out"
      @click="navigate"
    >
      <slot />
    </a>
  </router-link>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'IgniteLink',
  inheritAttrs: false,

  props: {
    // add @ts-ignore if using TypeScript
    ...RouterLink.props,
    activeClass: String,
    inactiveClass: String
  },

  computed: {
    isExternalLink() {
      return typeof this.to === 'string' && this.to.startsWith('http')
    }
  }
}
</script>
