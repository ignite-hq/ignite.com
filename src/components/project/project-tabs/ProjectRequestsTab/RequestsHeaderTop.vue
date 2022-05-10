<script lang="ts">
export default {
  name: 'RequestsHeaderTop'
}
</script>

<script lang="ts" setup>
import IgniteDenom from '~/components/common/IgniteDenom.vue'
import IgniteGithubRepoLink from '~/components/common/IgniteGithubRepoLink.vue'
import IconStack from '~/components/icons/IconStack.vue'
import ProjectStatus from '~/components/project/ProjectHeader/ProjectStatus.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteLoader from '~/components/ui/IgniteLoader.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
</script>

<template>
  <div class="grid grid-cols-1 gap-4 text-left lg:gap-7 xl:grid-cols-12">
    <div class="md:col-span-4">
      <IgniteText class="text-2 text-muted">Launch ID 4</IgniteText>
      <IgniteLoader v-if="isLoading" class="mt-5 h-8" />
      <IgniteHeading
        v-else
        class="mt-5 font-title text-7 font-semibold xl:text-8"
      >
        Testnet 4
      </IgniteHeading>
      <div class="item-center mt-5 md:flex">
        <IgniteGithubRepoLink
          :loading="isLoading"
          github-url="https://github.com/JoseRFelix/neptune"
          class="mb-5 text-3 md:mb-0 md:mr-7"
        />
        <ProjectStatus
          :loading="isLoading"
          :project-id="6"
          :campaign-id="'0'"
          :validator-count="'0'"
          :request-count="'0'"
          :stargazer-count="'0'"
          :status="false"
        />
      </div>

      <IgniteLoader v-if="isLoading" class="mt-7 h-7 w-[32rem] !max-w-none" />
      <IgniteText v-else class="mt-7 max-w-[21.25rem] text-2 text-muted">
        Final testnet before our upcoming mainnet launch with incentivized
        rewards for helping to test the network.
      </IgniteText>
    </div>

    <div
      class="-mx-6 mt-7 flex flex-wrap md:flex-nowrap xl:col-span-8 xl:mt-0 xl:items-end xl:justify-end"
    >
      <div class="mb-6 px-6 md:mb-0">
        <IgniteText as="div" class="text-2 text-muted">Type</IgniteText>
        <IgniteText as="div" class="ignite-badge text-medium mt-2 text-4"
          >testnet</IgniteText
        >
      </div>
      <div class="mb-6 px-6 md:mb-0">
        <IgniteText as="div" class="text-2 text-muted">Launched</IgniteText>
        <IgniteText as="div" class="text-medium mt-2 py-1 text-4"
          >02.14.2022</IgniteText
        >
      </div>
      <div class="mb-6 px-6 md:mb-0">
        <IgniteText as="div" class="text-2 text-muted">Status</IgniteText>
        <div class="mt-2 flex items-center">
          <div
            class="mr-3 flex h-5 w-5 items-center justify-center rounded-circle border border-border after:h-[0.625rem] after:w-[0.625rem] after:rounded-circle after:bg-green"
          ></div>
          <IgniteText as="div" class="text-medium py-1 text-4"
            >Active</IgniteText
          >
        </div>
      </div>
      <div class="mb-6 px-6 md:mb-0">
        <IgniteText as="div" class="text-2 text-muted"
          >Share allocation</IgniteText
        >
        <div class="mt-2 flex items-center">
          <IconStack class="mr-3" />
          <IgniteText as="div" class="text-medium py-1 text-4">20%</IgniteText>
        </div>
      </div>
      <div class="px-6">
        <IgniteText as="div" class="text-2 text-muted">Incentives</IgniteText>
        <div class="mt-2 flex items-center">
          <IgniteDenom
            modifier="avatar"
            denom="denom"
            title="denom"
            size="small"
            class="mr-3"
          />
          <IgniteText as="div" class="text-medium py-1 text-4">$40k</IgniteText>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
