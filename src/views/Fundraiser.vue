<script lang="ts">
export default {
  name: 'FundraiserView'
}
</script>

<script lang="ts" setup>
import { useSpn } from 'tendermint-spn-vue-client'
import IgniteInput from '~/components/IgniteInput.vue'
import IgniteText from '~/components/IgniteText.vue'
import IgniteLink from '../components/IgniteLink.vue'
import IgniteTextArea from '~/components/IgniteTextArea.vue'
import IgniteButton from '~/components/IgniteButton.vue'
import { OfflineDirectSigner } from '@cosmjs/proto-signing'

async function create() {
  let { spn, signIn } = useSpn()

  let off: OfflineDirectSigner = window.keplr.getOfflineSigner(
    spn.env.value.chainID ?? ''
  )

  console.log('off', off)

  await signIn(off)

  let today = new Date()
  let oneYfromNow = new Date(
    new Date().setFullYear(new Date().getFullYear() + 1)
  )
  let twoYfromNow = new Date(
    new Date().setFullYear(new Date().getFullYear() + 2)
  )
  let threeYfromNow = new Date(
    new Date().setFullYear(new Date().getFullYear() + 3)
  )

  let msg = spn.tendermintFundraising.value.msgCreateFixedPriceAuction({
    value: {
      auctioneer: 'spn1fpx8hs0xxktelpym44gk3s3mnk8u4p729mlv8q',
      start_price: '1',
      start_time: today,
      end_time: oneYfromNow,
      paying_coin_denom: 'spn',
      selling_coin: { amount: '1000', denom: 'uspn' },
      vesting_schedules: [
        {
          release_time: twoYfromNow,
          weight: '500000000000000000'
        },
        {
          release_time: threeYfromNow,
          weight: '500000000000000000'
        }
      ]
    }
  })

  let auctions = await spn.tendermintFundraising.value.queryAuctions()

  console.log('auctions', auctions.data.auctions)

  spn.signer.value.client.signAndBroadcast(spn.signer.value.addr, [msg], 20000)
}
</script>

<template>
  <div>Create fundraiser</div>
  <div>
    Create a fundraiser for your project. Once a fundraiser has been published,
    it cannot be edited. A fundraiser may be cancelled at any time prior to the
    start date and time of the fundraiser.
    <IgniteInput type="text" placeholder="Find a project" />
    <IgniteText as="li" class="item flex items-center justify-center text-2">
      <IgniteLink
        to="/"
        inactive-class="text-muted hover:text-title"
        active-class="font-medium text-primary pointer-events-none"
      >
        Explore
      </IgniteLink>
    </IgniteText>
    <IgniteTextArea></IgniteTextArea>
    <IgniteButton
      variant="primary"
      color="primary"
      class="px-6"
      @click="create"
    >
      <span>Create Fundraiser</span>
    </IgniteButton>
  </div>
</template>
