<script lang="ts">
export default {
  name: 'IgniteProjectHeader'
}
</script>

<script lang="ts" setup>
import { reactive } from 'vue'

import IgniteBgWave from './IgniteBgWave.vue'
import IgniteBreadcrumbs from './IgniteBreadcrumbs.vue'
import IgniteGithubRepoLink from './IgniteGithubRepoLink.vue'
import IgniteHeading from './IgniteHeading.vue'
import IgniteProjectActions from './IgniteProjectActions.vue'
import IgniteProjectNav from './IgniteProjectNav.vue'
import IgniteProjectStatus from './IgniteProjectStatus.vue'
import IgniteText from './IgniteText.vue'

const props = defineProps({
  projectId: String,
  activeTab: String
})

const githubUrl = 'https://github.com/allinbits/ignite-ui'
const navigation = reactive([
  {
    link: `/projects/${props.projectId}/overview`,
    title: 'Overview'
  },
  {
    link: `/projects/${props.projectId}/validators`,
    title: 'Validators'
  },
  {
    link: `/projects/${props.projectId}/requests`,
    title: 'Requests'
  },
  {
    link: `/projects/${props.projectId}/invest`,
    title: 'Invest'
  }
])
</script>

<template>
  <div>
    <div class="container-full px-6 xl:container">
      <div class="py-7.5">
        <IgniteBreadcrumbs />
      </div>

      <div class="pt-5.5 pb-8 md:pb-9">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-8 lg:grid-cols-6">
          <div class="px-0 md:col-span-6 lg:col-span-4 xl:col-span-3">
            <div class="md:flex">
              <div
                class="relative mb-6 h-9.5 w-9.5 shrink-0 rounded-md bg-primary md:mb-0 md:mr-7"
              >
                <div class="absolute inset-0 z-[2] overflow-hidden">
                  <IgniteBgWave />
                </div>
              </div>
              <div class="max-w-lg">
                <IgniteHeading
                  class="mb-6 font-title text-7 font-semibold md:text-8"
                >
                  Project Name
                </IgniteHeading>
                <div class="item-center mb-7 lg:flex">
                  <IgniteGithubRepoLink
                    :github-url="githubUrl"
                    class="mb-5 text-3 lg:mb-0 lg:mr-7"
                  />
                  <IgniteProjectStatus
                    campaign-id="0"
                    launch-id="0"
                    stargazer-count="1"
                    request-count="100"
                    validator-count="30"
                  />
                </div>
                <IgniteText class="text-2 text-muted md:text-3">
                  NFT game powered by Unreal Engine hosted on Akash and built on
                  top of Cosmos. From the creators of Passage3D.
                </IgniteText>
              </div>
            </div>
          </div>

          <div
            class="mt-6 px-0 md:col-span-2 md:mt-0 lg:col-span-1 lg:col-start-6"
          >
            <IgniteProjectActions />
          </div>
        </div>
      </div>
    </div>

    <div class="shadow-border_double py-6">
      <div class="container-full px-6 xl:container">
        <IgniteProjectNav :items="navigation" :active-tab="tab" />
      </div>
    </div>

    <div class="relative bg-primary pb-[50%] md:pb-[33.33%]">
      <div class="absolute inset-0 z-[2] overflow-hidden">
        <IgniteBgWave />
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
