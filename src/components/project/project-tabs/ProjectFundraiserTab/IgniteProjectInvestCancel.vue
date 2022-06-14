<script lang="ts">
import dayjs from 'dayjs'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteProjectInvestTitle'
})
</script>

<script lang="ts" setup>
import { DeliverTxResponse } from '@cosmjs/stargate'
import { useSpn } from 'tendermint-spn-vue-client'
import { computed, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import IgniteButton from '~/components/ui/IgniteButton.vue'
import IgniteCard from '~/components/ui/IgniteCard.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import { FixedPriceAuction } from '~/generated/tendermint-spn-ts-client/tendermint.fundraising'
import { UIStates } from '~/utils/types'

interface Props {
  fundraiser: FixedPriceAuction
}

const props = defineProps<Props>()

// composables
const { spn } = useSpn()
const route = useRoute()
const router = useRouter()

// const
const projectId = route.params.projectId.toString() || '0'

// state
interface State {
  currentUIState: UIStates
  errorMsg?: string
}
const initialState: State = {
  currentUIState: UIStates.Fresh,
  errorMsg: ''
}
const state = reactive(initialState)

// computed
const endDate = computed(() => {
  return dayjs(new Date(props.fundraiser?.base_auction?.start_time ?? ''))
})

// methods
async function cancelFundraiser() {
  let response: DeliverTxResponse

  try {
    state.currentUIState = UIStates.Creating

    const msg = spn.tendermintFundraising.value.msgCancelAuction({
      value: {
        auctioneer: props.fundraiser?.base_auction?.auctioneer ?? '',
        auction_id: props.fundraiser?.base_auction?.id ?? 0
      }
    })

    response = await spn.signer.value.client.signAndBroadcast(
      spn.signer.value.addr,
      [msg],
      'auto'
    )

    if (response.code) {
      throw new Error(`Errored: ${response.code}`)
    }

    state.errorMsg = ''
    state.currentUIState = UIStates.Created
    router.push(`/projects/${projectId}/fundraisers`)
  } catch (err) {
    console.error(err)
    state.errorMsg = `${err}`
    state.currentUIState = UIStates.Error
  }
}
</script>

<template>
  <div class="container">
    <IgniteCard :shadow="true" class="px-5 py-7 md:p-8 lg:p-9">
      <div
        class="grid grid-cols-1 gap-6 md:grid-cols-8 md:gap-7 lg:grid-cols-4"
      >
        <div class="md:col-span-5 lg:col-span-3">
          <IgniteHeading
            as="div"
            class="font-title text-4 font-semibold md:text-4"
          >
            Cancel fundraiser
          </IgniteHeading>
          <IgniteText as="div" class="mt-4 max-w-2xl text-3 text-muted">
            Cancel this fundraiser at any time before
            <strong>
              {{ endDate.format('MMM D, YYYY') }}
            </strong>
            at
            <strong> {{ endDate.format('h:mm A [GMT]Z') }} </strong>.<br />
            The fundraiser cannot be cancelled after it has begun.
            <p
              v-if="state.currentUIState === UIStates.Error"
              class="text-error"
            >
              {{ state.errorMsg }}
            </p>
          </IgniteText>
        </div>
        <div class="flex items-start justify-end md:col-span-3 lg:col-span-1">
          <IgniteButton
            class="w-full md:w-auto"
            variant="primary"
            color="error"
            @click="cancelFundraiser"
          >
            <span>
              {{
                state.currentUIState === UIStates.Creating
                  ? 'Canceling...'
                  : 'Cancel fundraiser'
              }}
            </span>
          </IgniteButton>
        </div>
      </div>
    </IgniteCard>
  </div>
</template>

<style scoped lang="postcss"></style>
