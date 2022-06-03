<script lang="ts">
export default {
  name: 'ValidateView'
}
</script>

<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'

import IconDoc from '~/components/icons/IconDoc.vue'
import IgniteCard from '~/components/ui/IgniteCard.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteImage from '~/components/ui/IgniteImage.vue'
import IgniteLink from '~/components/ui/IgniteLink.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import ValidateProjectsTab from '~/components/validate/validate-tabs/ValidateProjectsTab/index.vue'
import ValidateRequestsTab from '~/components/validate/validate-tabs/ValidateRequestsTab/index.vue'
import ValidateHeader from '~/components/validate/ValidateHeader/index.vue'

const route = useRoute()
const tab = ref(route.params?.tab?.toString().toLowerCase() || 'projects')

onBeforeMount(() => {
  window.scrollTo(0, 0)
})

onBeforeRouteUpdate(async (to) => {
  tab.value = to.params?.tab?.toString().toLowerCase() || 'projects'
})
</script>

<template>
  <div>
    <ValidateHeader :active-tab="tab" />
    <ValidateProjectsTab v-if="tab === 'projects'" />
    <ValidateRequestsTab v-if="tab === 'requests'" />

    <div class="container mt-10 md:mt-12">
      <IgniteCard
        class="relative px-5 pt-7 pb-0 sm:px-7 md:px-9 md:pt-8 lg:py-9 xl:px-10"
      >
        <div class="w-full max-w-[23rem]">
          <IgniteHeading class="font-title text-4 font-semibold md:text-5">
            Validate a project
          </IgniteHeading>
          <IgniteText class="mt-3 text-2 text-muted">
            Get up and running quickly with just a few commands.
          </IgniteText>
          <div class="mt-6">
            <IgniteLink
              to="/"
              class="flex-items flex font-medium text-primary hover:text-title"
            >
              <IconDoc class="mx-3" />
              View guide
            </IgniteLink>
          </div>
        </div>

        <IgniteImage
          class="mt-6 block h-auto w-auto lg:absolute lg:bottom-0 lg:left-auto lg:right-7 lg:mt-0 lg:max-w-[50%] xl:right-11"
          name="project"
          alt="project"
        />
      </IgniteCard>
    </div>
  </div>
</template>
