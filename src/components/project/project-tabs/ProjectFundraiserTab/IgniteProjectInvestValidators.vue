<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'IgniteProjectInvestValidators'
})
</script>

<script setup lang="ts">
import IgniteCard from '~/components/ui/IgniteCard.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteImage from '~/components/ui/IgniteImage.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import useCampaignChains from '~/composables/campaign/useCampaignChains'
import { useTendermintSpnLaunch } from '~/generated/tendermint-spn-vue-client'
import { LaunchGenesisValidator } from '~/generated/tendermint-spn-ts-client/tendermint.spn.launch/rest'

interface Props {
  isWild?: boolean
}

withDefaults(defineProps<Props>(), {
  isWild: false
})

const route = useRoute()
const projectId = route.params.projectId.toString() || '0'

// variables
const allGenesisValidators = ref<LaunchGenesisValidator[]>([])

// composables
const { queryGenesisValidatorAll } = useTendermintSpnLaunch()
const { campaignChains } = useCampaignChains(projectId)

// watchers
watch(campaignChains, (newVal) => {
  if (newVal?.pages && newVal?.pages[0].campaignChains?.chains) {
    getValidatorsFromAllChains(newVal.pages[0].campaignChains.chains)
  }
})

// methods
const getValidatorsFromAllChains = async (chains: string[]) => {
  const validatorsFromAllChains = await Promise.all(
    chains.map(async (chainId: string) => {
      return await queryGenesisValidatorAll(chainId.toString()).then(
        (r) => r.data
      )
    })
  )

  const reducedValidatorsFromAllChains = validatorsFromAllChains.flatMap(
    (chainValidators) => chainValidators?.genesisValidator || []
  )

  allGenesisValidators.value = [
    ...new Map(
      reducedValidatorsFromAllChains.map((validator) => [
        validator.address,
        validator
      ])
    ).values()
  ]
}
</script>

<template>
  <div>
    <IgniteCard class="px-5 py-7 md:p-8 lg:p-9">
      <div :class="isWild && 'md:flex md:items-center md:justify-between'">
        <div
          class="text-center"
          :class="
            !isWild
              ? 'mx-auto max-w-[21.5rem]'
              : 'max-w-xs md:mr-4 md:text-left'
          "
        >
          <IgniteHeading as="div" class="font-title text-4 md:text-5">
            Top validators
          </IgniteHeading>
          <IgniteText as="div" class="mt-5 text-3 text-muted">
            Top validators are helping to support this project by securing the
            network.
          </IgniteText>
        </div>
        <div
          class="mt-7"
          :class="!isWild ? 'mx-auto mt-7.5 max-w-[21.5rem]' : 'md:mt-0'"
        >
          <ul
            class="-m-4 flex flex-wrap justify-center md:-m-5"
            :class="isWild && 'md:justify-center'"
          >
            <li
              v-for="validator in allGenesisValidators.slice(0, 8)"
              :key="`validator_${validator.address}`"
              class="p-4 md:p-5"
            >
              <IgniteImage
                :name="`validators/avatar_${0}`"
                :alt="`avatar_${validator.address}`"
                class="block w-8"
              />
            </li>
          </ul>
        </div>
      </div>
    </IgniteCard>
  </div>
</template>

<style scoped lang="postcss"></style>
