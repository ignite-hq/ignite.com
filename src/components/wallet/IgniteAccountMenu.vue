<script lang="ts">
export default {
  name: 'IgniteAccountDropdown'
}
</script>

<script lang="ts" setup>
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
import { useSpn } from 'tendermint-spn-vue-client'
import { computed } from 'vue'

import IgniteButton from '~/components/ui/IgniteButton.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteLink from '~/components/ui/IgniteLink.vue'
import IgniteLoader from '~/components/ui/IgniteLoader.vue'
import IgniteNumber from '~/components/ui/IgniteNumber.vue'
import IgniteProfileIcon from '~/components/ui/IgniteProfileIcon.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import useAccount from '~/composables/wallet/useAccount'
import useAddress from '~/composables/wallet/useAddress'
import useBalances from '~/composables/wallet/useBalances'

// ignite
const { signOut } = useSpn()

// composables
const { address } = useAddress()
const { account } = useAccount()
const { balances, isFetching: isFetchingBalances } = useBalances(address)

// computed
const mainCoinBalance = computed(() => {
  if (balances?.value?.length === 0 || !balances.value) return undefined
  return balances.value[0]
})
</script>

<template>
  <Menu as="div" class="relative z-[2]">
    <MenuButton class="flex items-center space-x-4">
      <IgniteProfileIcon :address="address" />

      <div class="text-left">
        <IgniteHeading class="text-3 font-semibold">
          {{ account?.name }}
        </IgniteHeading>

        <IgniteLoader v-if="isFetchingBalances" class="mt-2 h-5" />
        <IgniteText v-else-if="mainCoinBalance" class="text-2 text-muted">
          <IgniteNumber :number="mainCoinBalance.amount?.toUpperCase()" />
          {{ mainCoinBalance.denom?.toUpperCase() }}
        </IgniteText>
      </div>
    </MenuButton>

    <MenuItems class="account-menu">
      <div class="space-y-5">
        <IgniteText class="text-2 text-muted">Connected Wallet</IgniteText>

        <div>
          <IgniteHeading class="text-2 font-semibold">
            {{ account?.name }}
          </IgniteHeading>

          <IgniteLoader v-if="isFetchingBalances" class="mt-2 h-5" />
          <IgniteText v-else-if="mainCoinBalance" class="text-2 text-muted">
            <IgniteNumber :number="mainCoinBalance.amount?.toUpperCase()" />
            {{ mainCoinBalance.denom?.toUpperCase() }} · Keplr
          </IgniteText>
        </div>

        <IgniteButton
          variant="primary"
          class="!px-0 !py-0 text-3 font-normal text-gray-0"
          @click="signOut"
        >
          Disconnect wallet
        </IgniteButton>

        <div class="-mx-6 h-[1px] w-screen bg-gray-70" />

        <IgniteButton variant="primary" color="black" class="w-full !px-3">
          Turn in challenges
        </IgniteButton>

        <div class="space-x-1 text-muted">
          <IgniteLink class="text-2 text-muted hover:text-gray-0" to="/privacy">
            Privacy
          </IgniteLink>

          <span>·</span>

          <IgniteLink class="text-2 text-muted hover:text-gray-0" to="/terms">
            Terms of use
          </IgniteLink>

          <span>·</span>

          <IgniteLink class="text-2 text-muted hover:text-gray-0" to="/cookies">
            Cookies
          </IgniteLink>
        </div>
      </div>
    </MenuItems>
  </Menu>
</template>

<style lang="postcss" scoped>
.account-menu {
  @apply absolute left-0 mt-4 flex w-screen max-w-[288px] flex-col overflow-hidden rounded-sm bg-white-1000 px-6 py-5 md:left-auto md:right-0;

  box-shadow: 40px 64px 128px -8px rgba(0, 0, 0, 0.14);
}
</style>
