<template>
  <SpModal>
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
      <form
        class="mt-7 flex flex-col items-start space-y-6 text-3"
        @submit="onSubmit"
      >
        <IgniteRadio
          v-for="reason in tokenRequestsRadios"
          :key="reason.id"
          v-model="choice"
          name="reason"
          :value="reason.id"
        >
          {{ reason.name }}
        </IgniteRadio>

        <template v-if="choice === 'other'">
          <IgniteTextArea
            v-model="otherText"
            rows="4"
            placeholder="Please provide a reason"
            class="w-full"
          />
          <p
            class="self-end text-2 text-gray-660"
            :class="{ 'text-error': remainingCharacters < 0 }"
          >
            {{ remainingCharacters }} Characters remaining
          </p>
        </template>

        <p
          v-if="Boolean(errors.otherText)"
          role="alert"
          class="flex items-center space-x-4 self-center text-error"
        >
          <IconDanger /> <span>{{ errors.otherText }}</span>
        </p>

        <div class="mt-7 flex w-full space-x-4">
          <SpButton
            class="flex-1 !border-none !bg-transparent !text-gray-0"
            @click="$emit('close')"
          >
            Cancel
          </SpButton>
          <SpButton type="submit" class="flex-1 !border-primary !bg-primary">
            Confirm
          </SpButton>
        </div>
      </form>
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
import { useField, useForm } from 'vee-validate'
import { computed } from 'vue'
import * as yup from 'yup'

import IconDanger from './icons/IconDanger.vue'
import IconWarning from './icons/IconWarning.vue'
import IgniteRadio from './IgniteRadio.vue'
import IgniteTextArea from './IgniteTextArea.vue'

interface Emits {
  (e: 'close'): void
}

defineEmits<Emits>()

// variables
const tokenRequestsRadios = [
  { id: 'too-many', name: 'Too many tokens requested' },
  { id: 'not-distributing', name: 'Not currently distributing tokens' },
  { id: 'not-accepting', name: 'No longer accepting token requests' },
  { id: 'other', name: 'Other' }
]
const MAX_CHARACTER_LIMIT = 97

const validationSchema = yup.object({
  choice: yup.string().required(),
  otherText: yup.string().when('choice', {
    is: 'other',
    then: yup.string().required('You must enter a custom reason.')
  })
})

// composables
const { handleSubmit, errors } = useForm({
  validationSchema,
  initialValues: {
    choice: tokenRequestsRadios[0].id,
    otherText: ''
  },
  validateOnMount: true
})

const { value: choice } = useField<string>('choice')
const { value: otherText } = useField<string>('otherText')

// methods
const onSubmit = handleSubmit((values) => {
  console.log(JSON.stringify(values, null, 2))
})

// computed
const remainingCharacters = computed(() => {
  const currentValue = otherText?.value ?? ''
  const diff = MAX_CHARACTER_LIMIT - currentValue.length

  return diff
})
</script>
