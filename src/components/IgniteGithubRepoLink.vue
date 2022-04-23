<script lang="ts">
export default {
  name: 'IgniteGithubRepoLink',
  inheritAttrs: false
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'

import { getUserAndRepositoryFromUrl } from '../utils/github'
import IconGithub from './icons/IconGithub.vue'
import IgniteLink from './IgniteLink.vue'
import IgniteLoader from './IgniteLoader.vue'
import IgniteText from './IgniteText.vue'

const props = defineProps({
  loading: { type: Boolean, default: false },
  githubUrl: { type: String, required: true, default: '' }
})

// variables
const github = computed(() => {
  return getUserAndRepositoryFromUrl(props.githubUrl)
})
</script>

<template>
  <div class="text-center">
    <IgniteLoader v-if="loading" v-bind="$attrs" class="h-6 w-11" />
    <IgniteLink
      v-else-if="Boolean(githubUrl)"
      :to="github.redirectGithubUrl"
      class="flex items-center text-muted hover:text-title"
      v-bind="$attrs"
      @click.stop
    >
      <IconGithub class="mr-1 text-title" />
      <IgniteText as="span" class="font-medium">{{ github.user }}</IgniteText>
      <IgniteText as="span" class="mx-1 font-medium text-inactive"
        >/</IgniteText
      >
      <IgniteText as="span" class="font-medium">{{
        github.repository
      }}</IgniteText>
    </IgniteLink>
  </div>
</template>

<style scoped lang="postcss"></style>
