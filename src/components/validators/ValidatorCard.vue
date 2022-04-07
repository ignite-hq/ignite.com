<template>
  <div
    class="flex text-left justify-start flex-col border border-gray-70 rounded mx-2 mb-6 p-5"
    style="width: 292px"
  >
    <img :src="validatorAvatar" style="width: 80px" class="mb-6" />

    <span class="text-4 font-bold mb-4">
      {{ validatorData.details.body?.messages[0]?.description?.moniker || '-' }}
    </span>
    <span class="text-2 text-muted leading-5 break-words">
      {{ validatorData.details.body?.messages[0]?.description?.details || '-' }}
    </span>

    <LayoutSpacer size="sm" />

    <div class="mb-2 w-full border-b border-gray-70" />
    <span class="text-2 text-muted leading-5 mb-1"> Also validates </span>
    <div>
      <a
        href="#"
        class="text-2 inline-block text-primary hover:brightness-90 active:brightness-75 hover:underline"
      >
        2 other projects
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import LayoutSpacer from '../atoms/LayoutSpacer.vue'
import validatorAvatar from '../..//assets/svg/validatorAvatar.svg'
import { Validator } from 'tendermint-spn-ts-client/cosmos.staking.v1beta1'
import { LaunchGenesisValidator } from 'tendermint-spn-ts-client/tendermint.spn.launch/rest'

export default defineComponent({
  components: {
    LayoutSpacer
  },
  props: {
    validator: {
      type: Object as PropType<Validator>,
      required: true
    }
  },
  setup(props) {
    const validatorData = computed<LaunchGenesisValidator>(() => {
      return {
        ...props.validator,
        details: JSON.parse(atob(props.validator.genTx))
      }
    })

    return {
      validatorData,
      validatorAvatar
    }
  }
})
</script>

<style scoped lang="scss"></style>
