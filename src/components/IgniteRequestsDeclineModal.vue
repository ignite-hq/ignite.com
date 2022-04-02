<template>
  <SpModal :visible="true">
    <template #header>
      <div class="flex flex-col items-center space-y-4">
        <IconWarning />
        <h1 class="text-5">Confirm decline</h1>
        <p class="text-center text-3 leading-normal text-muted">
          Select the reason for<br />declining the request
        </p>
      </div>
    </template>

    <template #body>
      <div class="mt-7 flex flex-col items-start space-y-6 text-3">
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
        <p class="self-end text-2 text-gray-660">97 Characters remaining</p>
      </div>
    </template>

    <template #footer>
      <div class="mt-7 flex space-x-4">
        <SpButton class="flex-1 !border-none !bg-transparent !text-gray-0">
          Cancel
        </SpButton>
        <SpButton class="flex-1 !border-primary !bg-primary">Confirm</SpButton>
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
import { SpButton, SpModal } from '@starport/vue'

import IconWarning from './icons/IconWarning.vue'
import IgniteRadio from './IgniteRadio.vue'
import IgniteTextArea from './IgniteTextArea.vue'
</script>
