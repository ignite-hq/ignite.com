<template>
  <div>
    <div class="container-full container px-5 sm:px-5.5 l:px-7">
      <div class="py-7.5">
        <IgniteBreadcrumbs />
      </div>

      <div class="pt-5.5 pb-8 m:pb-9">
        <div class="grid grid-cols-1 m:grid-cols-8 l:grid-cols-6 gap-4">
          <div class="m:col-span-6 l:col-span-4 xl:col-span-3 px-0">
            <div class="m:flex">
              <div
                class="relative shrink-0 rounded-md bg-primary w-9.5 h-9.5 mb-6 m:mb-0 m:mr-7"
              >
                <div class="overflow-hidden absolute z-[2] inset-0">
                  <IgniteBgWave />
                </div>
              </div>
              <div class="max-w-lg">
                <div
                  class="mb-6 ignt-title text-7 m:text-8 font-semibold font-title"
                >
                  Project Name
                </div>
                <div class="l:flex item-center mb-7">
                  <IgniteGithub
                    :github-url="githubUrl"
                    class="mb-5 l:mb-0 l:mr-7 text-3"
                  />
                  <IgniteProjectStatus
                    stargazer-count="1"
                    request-count="100"
                    validator-count="30"
                  />
                </div>
                <div class="ignt-text text-2 m:text-3 text-muted">
                  NFT game powered by Unreal Engine hosted on Akash and built on
                  top of Cosmos. From the creators of Passage3D.
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 m:mt-0 m:col-span-2 l:col-span-1 l:col-start-6 px-0">
            <IgniteProjectActions />
          </div>
        </div>
      </div>
    </div>

    <div class="py-6 shadow-border_double">
      <div class="container-full container px-5 sm:px-5.5 l:px-7">
        <IgniteProjectNav :items="navigation" />
      </div>
    </div>

    <div class="relative bg-primary pb-[50%] m:pb-[33.33%]">
      <div class="overflow-hidden absolute z-[2] inset-0">
        <IgniteBgWave />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import IgniteBgWave from './IgniteBgWave.vue'
import IgniteBreadcrumbs from './IgniteBreadcrumbs.vue'
import IgniteGithub from './IgniteGithub.vue'
import IgniteProjectActions from './IgniteProjectActions.vue'
import IgniteProjectNav from './IgniteProjectNav.vue'
import IgniteProjectStatus from './IgniteProjectStatus.vue'

export default defineComponent({
  name: 'IgniteProjectHeader',

  components: {
    IgniteBreadcrumbs,
    IgniteGithub,
    IgniteProjectStatus,
    IgniteProjectNav,
    IgniteProjectActions,
    IgniteBgWave
  },

  data() {
    return {
      githubUrl: 'https://github.com/allinbits/ignite-ui',
      navigation: [
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
    }
  }
})
</script>

<style scoped lang="postcss"></style>
