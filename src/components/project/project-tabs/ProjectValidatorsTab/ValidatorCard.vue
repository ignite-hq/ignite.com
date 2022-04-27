<script lang="ts" setup>
import { Validator } from 'tendermint-spn-ts-client/cosmos.staking.v1beta1'
import { LaunchGenesisValidator } from 'tendermint-spn-ts-client/tendermint.spn.launch/rest'
import { computed, PropType } from 'vue'

import validatorAvatar from '~/assets/svg/validatorAvatar.svg'
import IgniteText from '~/components/ui/IgniteText.vue'
import useValidatorLaunchesCount from '~/composables/validator/useValidatorLaunchesCount'

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
const { validatorLaunchesCount } = useValidatorLaunchesCount(
  validatorData.value.address
)
</script>

<template>
  <div
    class="mx-2 mb-6 flex flex-col justify-start rounded border border-gray-70 p-5 text-left"
    style="width: 292px"
  >
    <img
      :src="validatorAvatar"
      style="width: 80px; height: 80px"
      class="mb-6"
    />

    <IgniteText class="mb-4 text-4 font-bold">
      {{ validatorData.details.body?.messages[0]?.description?.moniker || '-' }}
    </IgniteText>
    <IgniteText class="break-words text-2 leading-5 text-muted">
      {{ validatorData.details.body?.messages[0]?.description?.details || '-' }}
    </IgniteText>

    <div class="mb-2 mt-4 w-full border-b border-gray-70" />
    <IgniteText class="mb-1 text-2 leading-5 text-muted">
      Also validates
    </IgniteText>
    <div>
      <IgniteText
        class="inline-block text-2 font-semibold leading-5 text-muted"
      >
        {{ validatorLaunchesCount }} project{{
          validatorLaunchesCount > 1 ? 's' : ''
        }}
      </IgniteText>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
