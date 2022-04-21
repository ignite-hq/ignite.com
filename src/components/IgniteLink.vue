<script lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

export default {
  name: 'IgniteLink',

  components: {
    RouterLink
  },

  inheritAttrs: false,

  props: {
    // @ts-ignore
    ...RouterLink.props,
    inactiveClass: {
      type: String,
      default: ''
    },
    activeClass: {
      type: String,
      default: ''
    }
  },

  setup(props: any) {
    const isExternalLink = computed(() => {
      return (
        typeof props.to === 'string' &&
        (props.to.startsWith('http') || props.to.startsWith('https'))
      )
    })

    return { isExternalLink }
  }
}
</script>

<template>
  <a
    v-if="isExternalLink"
    v-bind="$attrs"
    :href="to as string"
    target="_blank"
    class="duration-250 flex items-center transition-colors ease-in-out"
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
