<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteProjectInvestTitle'
})
</script>

<script lang="ts" setup>
import { ProgressBarItem } from '../utils/types'
import IconHelp from './icons/IconHelp.vue'
import IconStack from './icons/IconStack.vue'
import IgniteButton from './IgniteButton.vue'
import IgniteCard from './IgniteCard.vue'
import IgniteHeading from './IgniteHeading.vue'
import IgniteInput from './IgniteInput.vue'
import IgniteLink from './IgniteLink.vue'
import IgniteNumber from './IgniteNumber.vue'
import IgniteProgressBar from './IgniteProgressBar.vue'
import IgniteText from './IgniteText.vue'
import IgniteTooltip from './IgniteTooltip.vue'
import IgniteDenom from './ui/IgniteDenom.vue'

defineProps({
  status: { type: String, required: true },
  wallet: { type: Boolean },
  invested: { type: Boolean },
  sufficient: { type: Boolean }
})

const progressBar = {
  items: [
    {
      value: '25',
      bgColor: 'bg-primary',
      split: true
    },
    {
      value: '25',
      bgColor: 'bg-secondary'
    },
    {
      value: '50'
    }
  ] as ProgressBarItem[]
}
</script>

<template>
  <IgniteCard
    :shadow="true"
    class="flex flex-col px-5 py-7 md:min-h-[25.8125rem] md:p-8"
    :class="[status === 'saleCanceled' ? 'justify-center' : 'justify-between']"
  >
    <div
      :class="
        status !== 'registrationConfirmed' &&
        status !== 'saleOngoing' &&
        'max-w-[29.5rem]'
      "
    >
      <div
        :class="
          (status === 'registrationConfirmed' || status === 'saleOngoing') &&
          'md:flex md:justify-between'
        "
      >
        <div>
          <div class="flex items-center">
            <IgniteHeading as="div" class="font-title text-5 md:text-7">
              <span v-if="status === 'registrationNotOpen'"
                >How to<br />participate</span
              >
              <span v-if="status === 'registrationOpen'"
                >Register to participate</span
              >
              <span v-if="status === 'selectTier'">Select a tier</span>
              <span v-if="status === 'registrationConfirmed'"
                >Registration<br />confirmed</span
              >
              <span v-if="status === 'saleStarted'"
                >Fundraiser<br />has begun</span
              >
              <span v-if="status === 'saleStartedNotRegistered'"
                >Registration<br />over</span
              >
              <span v-if="status === 'saleOngoing' && !invested">Invest</span>
              <span v-if="status === 'saleOngoing' && invested"
                >Investment<br />confirmed</span
              >
              <span v-if="status === 'saleEnded'">Sale Finished</span>
              <span v-if="status === 'soldOut'">Sold Out</span>
              <span v-if="status === 'saleFinished'">Sale<br />Finished</span>
              <span v-if="status === 'saleCanceled'"
                >Fundraiser<br />canceled</span
              >
            </IgniteHeading>
            <div class="ml-3 text-0">
              <IgniteTooltip v-if="status === 'selectTier'">
                <IconHelp class="text-primary" />
                <template #content>
                  <IgniteHeading as="div" class="font-title text-3"
                    >Tiers</IgniteHeading
                  >
                  <IgniteText as="p" class="font-text mt-4 text-3 text-muted">
                    Investment tiers represent your investing power for a
                    fundraiser. Confirming a tier reserves your buying power for
                    this fundraiser.
                  </IgniteText>
                  <IgniteText as="p" class="font-text mt-4 text-3 text-muted">
                    Reserved investment power becomes available to use again for
                    other fundraisers 14 days after this fundraiser has begun.
                  </IgniteText>
                </template>
              </IgniteTooltip>
            </div>
          </div>

          <IgniteText
            v-if="status !== 'registrationConfirmed'"
            as="div"
            class="text-muted"
            :class="[
              status === 'selectTier' || status === 'saleOngoing'
                ? 'mt-3'
                : 'mt-6'
            ]"
          >
            <span v-if="status === 'registrationNotOpen'"
              >Become eligible to participate in the fundraiser by staking IGNT
              tokens. The more IGNT you stake, the bigger your investment power
              will be for this project.</span
            >
            <span v-if="status === 'registrationOpen'">
              Register to participate and reserve your investment power for this
              fundraiser. Reserved investment power becomes available again 14
              days after a fundraiser has begun.
              <IgniteLink to="/" class="text-primary">Learn more</IgniteLink>
            </span>
            <span v-if="status === 'selectTier'"
              >Select a tier to reserve your investment power.</span
            >
            <span v-if="status === 'saleStarted'">
              This project’s fundraiser has begun. If you reserved your spot to
              participate in this fundraiser, connect your wallet to begin.
              Registration is required prior to fundraisers.
              <IgniteLink to="/" class="text-primary">Learn more</IgniteLink>
            </span>
            <span v-if="status === 'saleStartedNotRegistered'">
              Registration has closed for this fundraiser. Become eligible to
              participate in future fundraisers by staking IGNT tokens and
              register starting one week before the fundraiser begins.
            </span>
            <span v-if="status === 'saleOngoing' && !invested">
              Invest 0.5 UST per vTOKEN
            </span>
            <span v-if="status === 'saleEnded'"
              >Thank you for participating. Your vTokens have been sent to your
              IGNT wallet address.
              <IgniteLink to="/" class="text-primary"
                >View Confirmation</IgniteLink
              ></span
            >
            <span v-if="status === 'soldOut'"
              >Project Name token vouchers have sold out and the fundraiser has
              concluded. Check back for future investing opportunities from
              Project Name.</span
            >
            <span v-if="status === 'saleFinished'"
              >The sale has concluded for this fundraiser. Check back for future
              investing opportunities from Project Name.</span
            >
            <span v-if="status === 'saleCanceled'"
              >This fundraiser was canceled by Project Name. Check back for
              future investing opportunities from Project Name.</span
            >
          </IgniteText>
          <IgniteText
            v-if="status === 'registrationNotOpen'"
            as="div"
            class="mt-3 text-error"
            >Stake at least 60 IGNT more to participate in this
            fundraiser.</IgniteText
          >
        </div>

        <div
          v-if="status === 'registrationConfirmed'"
          class="mt-4 flex flex-col md:mt-0 md:justify-end md:text-right"
        >
          <IgniteText as="div" class="text-2 text-muted"
            >Sale begins in</IgniteText
          >
          <IgniteHeading
            as="div"
            class="mt-1 font-title text-4 font-semibold md:mt-3"
            >7 days</IgniteHeading
          >
        </div>

        <div
          v-if="status === 'saleOngoing'"
          class="mt-5 flex flex-col md:mt-0 md:w-[12.5rem] md:text-right"
          :class="!invested ? 'md:justify-end' : 'md:justify-center'"
        >
          <div class="flex items-center md:justify-end">
            <IgniteText as="div" class="text-2 text-muted">
              <span v-if="status === 'saleOngoing' && !invested">Limit</span>
              <span v-if="status === 'saleOngoing' && invested"
                >Remaining limit</span
              >
            </IgniteText>
            <div class="mx-1 text-left text-0">
              <IgniteTooltip>
                <IconHelp class="h-5 w-5 text-primary" />
                <template #content>
                  <IgniteHeading as="div" class="font-title text-3"
                    >Limit</IgniteHeading
                  >
                  <IgniteText as="p" class="font-text mt-4 text-3 text-muted">
                    Calculated based on vTOKEN available up to your registered
                    tier (tier 1) less any previous investment.
                  </IgniteText>
                </template>
              </IgniteTooltip>
            </div>
            <IgniteHeading
              as="div"
              class="text-3 font-semibold text-title text-muted"
            >
              <IgniteNumber number="1000" /> UST
            </IgniteHeading>
          </div>
          <IgniteProgressBar
            :items="progressBar.items"
            :label="false"
            class="mt-3 mb-1"
          />
        </div>
      </div>
    </div>

    <div
      v-if="status === 'selectTier'"
      class="mt-5 flex items-center justify-between rounded-xs border border-border p-4 md:mt-0 md:py-6 md:pl-7 md:pr-9"
    >
      <div class="">
        <IgniteHeading as="div" class="font-title text-4">
          Tier 3
        </IgniteHeading>
        <IgniteText as="div" class="mt-3 text-2">
          Up to <IgniteNumber number="100000000" /> vTOKEN
        </IgniteText>
      </div>
      <div class="text-right">
        <IgniteText as="div" class="mt-3 text-2 text-muted"
          ><IgniteNumber number="100000" /> IGNT staked</IgniteText
        >
        <IgniteText
          v-if="!sufficient"
          as="div"
          class="flex items-center text-2 text-error"
        >
          <IconStack class="mr-2 shrink-0" />
          <span>
            <span>Stake </span>
            <IgniteNumber number="90000" />
            <span> IGNT more to unlock</span>
          </span>
        </IgniteText>
      </div>
    </div>

    <div
      v-if="status === 'registrationConfirmed'"
      class="mt-5 flex items-center justify-between rounded-xs border border-border p-4 md:mt-0 md:px-7 md:py-8.5"
    >
      <div class="">
        <IgniteHeading as="div" class="font-title text-4">
          Tier 2
        </IgniteHeading>
        <IgniteText as="div" class="mt-3 text-2">
          Up to <IgniteNumber number="500000" /> vTOKEN
        </IgniteText>
      </div>
      <div class="text-right">
        <IgniteText as="div" class="mt-3 text-2 text-muted"
          ><IgniteNumber number="50000" /> IGNT staked</IgniteText
        >
      </div>
    </div>

    <div v-if="status !== 'saleCanceled' && status !== 'registrationConfirmed'">
      <div
        v-if="
          status === 'registrationNotOpen' ||
          status === 'registrationOpen' ||
          status === 'selectTier' ||
          status === 'saleStarted' ||
          status === 'saleStartedNotRegistered'
        "
        class="mt-5 md:mt-0 md:flex md:flex-row-reverse md:justify-end"
      >
        <div class="flex flex-col justify-between md:ml-6">
          <div class="flex">
            <IgniteText as="div" class="text-2 text-muted">
              <span v-if="status === 'registrationNotOpen'"
                >Registration opens</span
              >
              <span v-if="status === 'registrationOpen'"
                >Registration ends in</span
              >
              <span v-if="status === 'selectTier'"
                >Eligible staked balance</span
              >
              <span v-if="status === 'saleStarted'">Sale ends in</span>
            </IgniteText>
            <div class="ml-1">
              <IgniteTooltip v-if="status === 'selectTier'">
                <IconHelp class="h-5 w-5 text-primary" />
                <template #content>
                  <IgniteHeading as="div" class="font-title text-3"
                    >Eligible staked balance</IgniteHeading
                  >
                  <IgniteText as="p" class="font-text mt-4 text-3 text-muted"
                    >Your eligible staked balance is determined by the number of
                    IGNT you have staked less any reserved investing power. The
                    more you stake, the more tiers become available to
                    participate in this fundraiser.</IgniteText
                  >
                </template>
              </IgniteTooltip>
            </div>
          </div>
          <IgniteHeading
            v-if="
              status === 'registrationNotOpen' ||
              status === 'registrationOpen' ||
              status === 'saleStarted'
            "
            as="div"
            class="font-title text-4"
            >3 days</IgniteHeading
          >
          <IgniteHeading
            v-if="status === 'selectTier'"
            as="div"
            class="flex items-center font-title text-4"
          >
            <IgniteDenom
              modifier="avatar"
              denom="denom"
              title="denom"
              size="small"
              class="mr-4"
            />
            <IgniteNumber number="1000" />
          </IgniteHeading>
        </div>
        <IgniteButton
          v-if="status === 'registrationNotOpen'"
          color="primary"
          variant="primary"
          class="mt-5 w-full min-w-[14rem] md:mt-0 md:w-auto"
          >Learn more</IgniteButton
        >
        <IgniteButton
          v-if="status === 'registrationOpen' && wallet"
          color="primary"
          variant="primary"
          class="mt-5 w-full min-w-[14rem] md:mt-0 md:w-auto"
          >Begin registry</IgniteButton
        >
        <IgniteButton
          v-if="status === 'selectTier'"
          color="primary"
          variant="primary"
          class="mt-5 w-full min-w-[14rem] md:mt-0 md:w-auto"
          :disabled="!sufficient"
          >Confirm</IgniteButton
        >
        <IgniteButton
          v-if="
            (status === 'registrationOpen' && !wallet) ||
            status === 'saleStarted'
          "
          color="primary"
          variant="primary"
          class="mt-5 w-full min-w-[14rem] md:mt-0 md:w-auto"
          >Connect wallet</IgniteButton
        >
        <IgniteButton
          v-if="status === 'saleStartedNotRegistered'"
          color="primary"
          variant="primary"
          class="mt-5 w-full min-w-[14rem] md:mt-0 md:w-auto"
          >Learn more</IgniteButton
        >
      </div>

      <div
        v-if="status === 'saleOngoing' && invested"
        class="mt-5 rounded-xs border border-border px-7 py-6 text-center md:mt-0"
      >
        <IgniteHeading
          as="div"
          class="flex items-center justify-center font-title text-4 md:text-6"
        >
          <IgniteDenom
            modifier="avatar"
            denom="denom"
            title="denom"
            class="mr-4 shrink-0"
          />
          <span> <IgniteNumber number="1000" /> vToken </span>
        </IgniteHeading>
        <IgniteText as="div" class="mt-3 text-2 text-muted">
          From an investment of
          <strong><IgniteNumber number="500" /> UST</strong>
        </IgniteText>
      </div>

      <div
        v-if="status === 'saleOngoing' && !invested"
        class="mt-5 flex flex-col rounded-xs border border-border md:mt-0 md:flex-row"
      >
        <IgniteText
          as="div"
          class="flex items-center border-b border-border p-5 text-2 md:border-b-0 md:border-r md:py-0"
        >
          <IgniteDenom
            modifier="avatar"
            denom="denom"
            title="denom"
            size="small"
            class="mr-3"
          />
          UST
        </IgniteText>
        <IgniteInput placeholder="0" style="bg-bg" size="lg" class="w-full" />
        <IgniteText
          as="div"
          class="flex flex-col justify-center px-5 pb-5 text-3 font-medium text-primary md:py-0 md:pl-2 md:pr-5"
        >
          max
        </IgniteText>
      </div>

      <div
        v-if="status === 'saleEnded'"
        class="mt-5 rounded-xs border border-border px-7 py-8.5 text-center md:mt-0"
      >
        <IgniteHeading
          as="div"
          class="flex items-center justify-center font-title text-4 md:text-6"
        >
          <IgniteDenom
            modifier="avatar"
            denom="denom"
            title="denom"
            class="mr-4 shrink-0"
          />
          <span> <IgniteNumber number="1000" /> vToken </span>
        </IgniteHeading>
        <IgniteText as="div" class="mt-3 text-2 text-muted">
          Acquired from an investment of
          <strong><IgniteNumber number="500" /> UST</strong>
        </IgniteText>
      </div>

      <div
        v-if="status === 'soldOut' || status === 'saleFinished'"
        class="mt-5 md:mt-0"
      >
        <IgniteLink to="/" type="button" color="primary"
          >Explore other fundraisers</IgniteLink
        >
      </div>
    </div>

    <div
      v-if="status === 'saleOngoing'"
      class="md:flex"
      :class="invested ? 'md:justify-end' : 'md:justify-between'"
    >
      <div v-if="!invested" class="mt-5 flex flex-col justify-between md:mt-0">
        <IgniteText as="div" class="text-2 text-muted"> Receive </IgniteText>
        <IgniteHeading
          as="div"
          class="mt-3 flex items-center font-title text-3 font-semibold md:text-4"
        >
          <IgniteDenom
            modifier="avatar"
            denom="denom"
            title="denom"
            size="small"
            class="mr-4 shrink-0"
          />
          <strong><IgniteNumber number="1000" /> vTOKEN</strong>
        </IgniteHeading>
      </div>
      <IgniteButton
        v-if="invested"
        color="primary"
        variant="primary"
        class="mt-5 w-full min-w-[14rem] md:mt-0 md:w-auto"
        >Invest again</IgniteButton
      >
      <IgniteButton
        v-if="!invested"
        color="primary"
        variant="primary"
        class="mt-5 w-full min-w-[14rem] md:mt-0 md:w-auto"
        >Invest</IgniteButton
      >
    </div>
  </IgniteCard>
</template>

<style scoped lang="postcss"></style>
