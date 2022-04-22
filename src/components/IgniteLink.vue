<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'IgniteLink',
  inheritAttrs: false,

  props: {
    // add @ts-ignore if using TypeScript
    ...RouterLink.props,
    activeClass: String,
    inactiveClass: String,
    type: String, // button
    color: String // primary
  },

  computed: {
    isExternalLink() {
      return typeof this.to === 'string' && this.to.startsWith('http')
    }
  }
}
</script>

<template>
  <a
    v-if="isExternalLink"
    v-bind="$attrs"
    :href="to"
    target="_blank"
    class="duration-250 inline-flex items-center justify-center transition-all ease-in-out"
    :class="[
      type === 'button' && 'rounded-sm rounded-3sm py-5 px-5 text-3 sm:px-8.5',
      color === 'primary' &&
        'bg-primary font-semibold text-white-1000 hover:scale-105 hover:text-white-1000'
    ]"
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
      :class="[
        isActive ? activeClass : inactiveClass,
        type === 'button' && 'rounded-sm py-5 px-5 text-3 font-medium',
        color === 'primary' &&
          'bg-primary text-white-1000 hover:scale-105 hover:text-white-1000'
      ]"
      class="duration-250 inline-flex items-center justify-center transition-all ease-in-out"
      @click="navigate"
    >
      <slot />
    </a>
  </router-link>
</template>
