<template>
  <SpModal :visible="true">
    <template #header>
      <div class="flex flex-col items-center space-y-4">
        <IconWarning />
        <h1 class="text-5">Confirm decline</h1>
        <p class="leading-normal text-center text-muted text-3">
          Select the reason for<br />declining the request
        </p>
      </div>
    </template>

    <template #body>
      <div class="flex flex-col items-start mt-6 space-y-5 text-3">
        <IgniteRadio name="pizza"> Too many tokens requested </IgniteRadio>
        <IgniteRadio name="pizza">
          Not currently distributing tokens
        </IgniteRadio>
        <IgniteRadio name="pizza">
          No longer accepting token requests
        </IgniteRadio>
        <IgniteRadio name="pizza"> Other</IgniteRadio>
      </div>
    </template>
  </SpModal>
</template>

<script lang="ts">
export default {
  name: 'IgniteRequestsDeclineModal'
}
</script>

<script lang="ts" setup>
import { SpModal } from '@starport/vue'

import IconWarning from './icons/IconWarning.vue'
import IgniteRadio from './IgniteRadio.vue'
</script>
