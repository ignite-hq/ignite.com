<script lang="ts">
import { computed, PropType } from 'vue'
import { RouterLink } from 'vue-router'

type Type = 'button' | 'default'
type Color = 'primary' | 'none'

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
    },
    type: {
      type: String as PropType<Type>,
      default: 'default'
    },
    color: {
      type: String as PropType<Color>,
      default: 'none'
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
    class="duration-250 inline-flex items-center justify-center transition-all ease-in-out"
    :class="[
      type === 'button' && 'rounded-sm py-5 px-5 text-3 sm:px-8.5',
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
