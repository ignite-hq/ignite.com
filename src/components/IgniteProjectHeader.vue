<template>
  <div>
    <div class="container-full px-6 xl:container">
      <div class="py-7.5">
        <IgniteBreadcrumbs />
      </div>

      <div class="pt-5.5 pb-8 m:pb-9">
        <div class="grid grid-cols-1 gap-4 m:grid-cols-8 l:grid-cols-6">
          <div class="px-0 m:col-span-6 l:col-span-4 xl:col-span-3">
            <div class="m:flex">
              <div
                class="relative mb-6 h-9.5 w-9.5 shrink-0 rounded-md bg-primary m:mb-0 m:mr-7"
              >
                <div class="absolute inset-0 z-[2] overflow-hidden">
                  <IgniteBgWave />
                </div>
              </div>
              <div class="max-w-lg">
                <IgniteHeading
                  class="mb-6 font-title text-7 font-semibold m:text-8"
                >
                  Project Name
                </IgniteHeading>
                <div class="item-center mb-7 l:flex">
                  <IgniteGithubRepoLink
                    :github-url="githubUrl"
                    class="mb-5 text-3 l:mb-0 l:mr-7"
                  />
                  <IgniteProjectStatus
                    campaign-id="0"
                    launch-id="0"
                    stargazer-count="1"
                    request-count="100"
                    validator-count="30"
                  />
                </div>
                <IgniteText class="text-2 text-muted m:text-3">
                  NFT game powered by Unreal Engine hosted on Akash and built on
                  top of Cosmos. From the creators of Passage3D.
                </IgniteText>
              </div>
            </div>
          </div>

          <div class="mt-6 px-0 m:col-span-2 m:mt-0 l:col-span-1 l:col-start-6">
            <IgniteProjectActions />
          </div>
        </div>
      </div>
    </div>

    <div class="shadow-border_double py-6">
      <div class="container-full px-6 xl:container">
        <IgniteProjectNav :items="navigation" />
      </div>
    </div>

    <div class="relative bg-primary pb-[50%] m:pb-[33.33%]">
      <div class="absolute inset-0 z-[2] overflow-hidden">
        <IgniteBgWave />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'IgniteProjectHeader'
}
</script>

<script lang="ts" setup>
import IgniteBgWave from './IgniteBgWave.vue'
import IgniteBreadcrumbs from './IgniteBreadcrumbs.vue'
import IgniteGithubRepoLink from './IgniteGithubRepoLink.vue'
import IgniteHeading from './IgniteHeading.vue'
import IgniteProjectActions from './IgniteProjectActions.vue'
import IgniteProjectNav from './IgniteProjectNav.vue'
import IgniteProjectStatus from './IgniteProjectStatus.vue'
import IgniteText from './IgniteText.vue'

const githubUrl = 'https://github.com/allinbits/ignite-ui'
const navigation = [
  {
    link: '/project',
    title: 'Overview'
  },
  {
    link: '/validators',
    title: 'Validators'
  },
  {
    link: '/requests',
    title: 'Requests'
  },
  {
    link: '/invest',
    title: 'Invest'
  }
]
</script>

<style scoped lang="postcss"></style>
