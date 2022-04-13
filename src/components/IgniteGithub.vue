<template>
  <IgniteLink
    :to="githubUrl"
    class="flex items-center text-muted hover:text-title"
  >
    <IconGithub class="mr-1 text-title" />
    <span class="ignite-text font-medium">{{ githubUser }}</span>
    <span class="ignite-text mx-1 font-medium text-inactive">/</span>
    <span class="ignite-text font-medium">{{ githubRepo }}</span>
  </IgniteLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteGithub'
})
</script>

<script lang="ts" setup>
import { getUserAndRepositoryFromUrl } from '../utils/github'
import IconGithub from './icons/IconGithub.vue'
import IgniteLink from './IgniteLink.vue'

const props = defineProps({
  githubUrl: { type: String, required: true }
})

// variables
const { githubRepo, githubUser } = getUserAndRepositoryFromUrl(props.githubUrl)
</script>

<style scoped lang="postcss"></style>
