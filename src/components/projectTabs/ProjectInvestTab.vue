<script lang="ts">
export default {
  name: 'ProjectInvestTab'
}
</script>

<script lang="ts" setup>
import IgniteButton from '../IgniteButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToCreateFundraiser() {
  router.push('/fundraiser')
}
</script>

<template>
  <div class="p-12 text-center">
    <IgniteButton
      variant="primary"
      color="primary"
      class="px-6"
      @click="goToCreateFundraiser"
    >
      <span>Go to Fundraiser</span>
    </IgniteButton>
  </div>
</template>
