<template>
  <TransitionRoot appear :show="visible" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="fixed inset-0 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-200 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0 bg-gray-330" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-200 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="my-8 inline-block w-full max-w-sm transform overflow-hidden rounded-md bg-white-1000 p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle v-if="$slots['title']">
                <slot name="title" />
              </DialogTitle>

              <DialogDescription v-if="$slots['description']">
                <slot name="description" />
              </DialogDescription>

              <slot name="body"></slot>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts">
export default {
  name: 'IgniteModal'
}
</script>

<script lang="ts" setup>
import {
  Dialog,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue'

interface Emits {
  (e: 'close'): void
}

interface Props {
  visible: boolean
}

withDefaults(defineProps<Props>(), {
  visible: false
})

const emit = defineEmits<Emits>()

function closeModal() {
  emit('close')
}
</script>
