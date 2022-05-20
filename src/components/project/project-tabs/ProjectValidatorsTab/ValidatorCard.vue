<script lang="ts" setup>
import { Validator } from 'tendermint-spn-ts-client/cosmos.staking.v1beta1'
import { LaunchGenesisValidator } from 'tendermint-spn-ts-client/tendermint.spn.launch/rest'
import { computed, PropType } from 'vue'

import validatorAvatar from '~/assets/svg/validatorAvatar.svg'
import IgniteCard from '~/components/ui/IgniteCard.vue'
import IgniteLink from '~/components/ui/IgniteLink.vue'
import IgniteText from '~/components/ui/IgniteText.vue'

const props = defineProps({
  validator: {
    type: Object as PropType<Validator>,
    required: true
  }
})

const validatorData = computed<LaunchGenesisValidator>(() => {
  return {
    ...props.validator,
    details: JSON.parse(atob(props.validator.genTx))
  }
})
</script>

<template>
  <div class="w-full flex-none p-4 md:w-[50%] md:p-5 lg:w-[33.33%] xl:w-[25%]">
    <IgniteCard class="flex flex-col justify-between p-5 text-left md:p-6">
      <div>
        <img :src="validatorAvatar" class="h-9.5 w-9.5 rounded-circle" />

        <IgniteText class="mt-6 text-4 font-bold">
          {{
            validatorData.details.body?.messages[0]?.description?.moniker || '-'
          }}
        </IgniteText>
        <IgniteText class="mt-5 break-words pb-4 text-2 leading-5 text-muted">
          {{
            validatorData.details.body?.messages[0]?.description?.details || '-'
          }}
        </IgniteText>
      </div>

      <div class="mt-8 border-t border-border pt-6">
        <IgniteText class="text-2 leading-5 text-muted">
          Also validates
        </IgniteText>
        <div class="mt-3">
          <IgniteLink to="#" class="text-primary">
            0 other projects
          </IgniteLink>
        </div>
      </div>
    </IgniteCard>
  </div>
</template>

<style scoped lang="scss"></style>
