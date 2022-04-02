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
      <div class="flex flex-col items-start mt-6 space-y-6 text-3">
        <IgniteRadio name="reason"> Too many tokens requested </IgniteRadio>
        <IgniteRadio name="reason">
          Not currently distributing tokens
        </IgniteRadio>
        <IgniteRadio name="reason">
          No longer accepting token requests
        </IgniteRadio>
        <IgniteRadio name="reason"> Other</IgniteRadio>
        <IgniteTextArea
          rows="4"
          placeholder="Please provide a reason"
          class="w-full"
        />
        <p class="self-end text-gray-660 text-2">97 Characters remaining</p>
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
import IgniteTextArea from './IgniteTextArea.vue'
</script>
