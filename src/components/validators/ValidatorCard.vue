<template>
  <div
    class="flex text-left justify-start flex-col border border-gray-70 rounded mx-2 mb-6 p-5"
    style="width: 292px"
  >
    <img :src="validatorAvatar" style="width: 80px" class="mb-6" />

    <span class="text-4 font-bold mb-4"> Validator Name </span>
    <span class="text-2 text-muted leading-5">
      Description consequat efficitur iaculis. Nam eu tincidunt nunc. Cras sit
      amet pulvinar tortor, a porta purus. Orci varius natoque penatibus...
    </span>

    <LayoutSpacer size="sm" />

    <div class="mb-2 w-full border-b border-gray-70" />
    <span class="text-2 text-muted leading-5 mb-1"> Also validates </span>
    <a
      href="#"
      class="text-2 inline-block text-primary hover:brightness-90 active:brightness-75 hover:underline"
    >
      2 other projects
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutSpacer from '../atoms/LayoutSpacer.vue'
import validatorAvatar from '../..//assets/svg/validatorAvatar.svg'

export default defineComponent({
  components: {
    LayoutSpacer
  },
  props: {},
  setup() {
    return {
      validatorAvatar
    }
  }
})
</script>

<style scoped lang="scss"></style>
