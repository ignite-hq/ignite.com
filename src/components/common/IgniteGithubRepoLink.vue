<script lang="ts">
export default {
  name: 'IgniteGithubRepoLink'
}
</script>

<script lang="ts" setup>
import IconGithub from '~/components/icons/IconGithub.vue'
import IgniteLink from '~/components/ui/IgniteLink.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import { getUserAndRepositoryFromUrl } from '~/utils/github'

const props = defineProps({
  githubUrl: { type: String, required: true }
})

// variables
const { githubRepo, githubUser, redirectGithubUrl } =
  getUserAndRepositoryFromUrl(props.githubUrl)
</script>

<template>
  <IgniteLink
    v-if="Boolean(githubUrl)"
    :to="redirectGithubUrl"
    class="flex items-center text-muted hover:text-title"
    @click.stop
  >
    <IconGithub class="mr-1 text-title" />
    <IgniteText as="span" class="font-medium">{{ githubUser }}</IgniteText>
    <IgniteText as="span" class="mx-1 font-medium text-inactive">/</IgniteText>
    <IgniteText as="span" class="font-medium">{{ githubRepo }}</IgniteText>
  </IgniteLink>
</template>

<style scoped lang="postcss"></style>
