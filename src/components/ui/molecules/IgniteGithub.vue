<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteGithub'
})
</script>

<script lang="ts" setup>
import { getUserAndRepositoryFromUrl } from '../../../utils/github'
import IconGithub from '../icons/IconGithub.vue'
import IgniteLink from '../atoms/IgniteLink.vue'
import IgniteText from '../atoms/IgniteText.vue'

const props = defineProps({
  githubUrl: { type: String, required: true }
})

// variables
const { githubRepo, githubUser } = getUserAndRepositoryFromUrl(props.githubUrl)
</script>

<template>
  <IgniteLink
    :to="githubUrl"
    class="flex items-center text-muted hover:text-title"
  >
    <IconGithub class="mr-1 text-title" />
    <IgniteText as="span" class="font-medium">{{ githubUser }}</IgniteText>
    <IgniteText as="span" class="mx-1 font-medium text-inactive">/</IgniteText>
    <IgniteText as="span" class="font-medium">{{ githubRepo }}</IgniteText>
  </IgniteLink>
</template>

<style scoped lang="postcss"></style>
