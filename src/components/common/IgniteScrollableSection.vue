<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteScrollableSection'
})
</script>

<script lang="ts" setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue'
const state = reactive({
  value: 0,
  scrollWidth: 0,
  isRange: false,
  isScroll: false,
  isGrabbing: false
})

const section = ref()
const inner = ref()

onMounted(() => {
  window.addEventListener('resize', getWidth)
  getWidth()
})

onUnmounted(() => {
  window.removeEventListener('resize', getWidth)
})

const getWidth = () => {
  const sectionWidth = section.value.offsetWidth
  const innerWidth = inner.value.offsetWidth
  state.scrollWidth = innerWidth - sectionWidth
}

const onScroll = () => {
  if (state.isRange) {
    state.isRange = false
    return false
  }
  state.isScroll = true
  const scrollPosition = section.value.scrollLeft
  const rangePosition = (scrollPosition * 100) / state.scrollWidth
  state.value = rangePosition
}

const onRange = () => {
  if (state.isScroll) {
    state.isScroll = false
    return false
  }
  state.isRange = true
  const rangePosition = state.value
  const scrollPosition = (rangePosition / 100) * state.scrollWidth
  section.value.scrollLeft = scrollPosition
}
</script>

<template>
  <div
    class="wrapper"
    :class="[
      state.scrollWidth <= 0 && '_no-scroll',
      !(state.value * 1) && '_start',
      state.value * 1 === 100 && '_end'
    ]"
  >
    <div
      ref="section"
      class="invisible-scrollbar overflow-auto"
      @scroll="onScroll"
    >
      <div
        ref="inner"
        class="mx-auto w-max pt-5 md:pt-7"
        :class="state.scrollWidth > 0 && ['pb-7', 'md:pb-9']"
      >
        <slot />
      </div>
    </div>
    <div
      v-if="state.scrollWidth > 0"
      class="relative z-[2] mx-auto w-full md:w-10/12"
      :class="state.isGrabbing && 'grabbing'"
    >
      <input
        v-model="state.value"
        type="range"
        min="0"
        max="100"
        step="1"
        class="range w-full"
        @input="onRange"
        @change="onRange"
        @mousedown="state.isGrabbing = true"
        @mouseup="state.isGrabbing = false"
      />
    </div>
  </div>
</template>

<style lang="postcss">
.wrapper {
  &:before,
  &:after {
    content: '';
    z-index: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 11.125rem;
    width: 1.125rem;
    background: linear-gradient(
      270deg,
      #ffffff 13.02%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  &:before {
    left: 0;
    transform: scale(-1, 1);
  }
  &:after {
    right: 0;
  }
  &._start {
    &:before {
      display: none;
    }
  }
  &._end {
    &:after {
      display: none;
    }
  }
  &._no-scroll {
    &:before,
    &:after {
      display: none;
    }
  }
}

.invisible-scrollbar::-webkit-scrollbar {
  display: none;
}

.range {
  --track-color: rgba(0, 0, 0, 0.15);
  --thumb-color: #094efd;
  --thumb-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAABACAYAAADbPd8FAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANhSURBVHgB7d2xUxNBFAbw9/aCgDMyqWiNpZWhshQKZ6w0/AWhsTa9hVhYazpnLMTCmoyVHVBZEitLY2t1nUTIPvfdmcxtSICKXbLfb4a5mYQws9kve293gWW6onpL6iejUcsYfkTCTSFp6MN0w7Ufm+L6/vO34rq6/pAWQM7EA2Lps5WjpSzr5T3Or/LC2mXfsNKSRmZtZ2htm5nrIvqoEESt7j6wTddNTWHecX338faz0Z5l8/qk54JyATP3J7oRYfWpvGVrf1qiF7QAo0HK3Ad5R/tS+7S+KXP7cmYgdFQYWjkmsh2CBeNG+zV7rH0869lzgVhq/W26+84B0ewXwEJouNHiQPt6+gkvEJqamq3tIwxJcH2d7U+PFJNAaM2AkSE5xUhRrSkmgRhaeoUwJKkxXNO+LxWBKIcNFJDpsp3xraMIhBnZXYKk6VqTXo3WDsLUJkiaW2tqay1hdDmaANy84vSObk0QbxKAI26fyuWBHxAA6fI2N40wppowJg3jdsSwaQVjdUMAFQgEeBAI8CAQ4EEgwINAgAeBAA8CAR4EAjzRBOLuOtOPD6b4SsW4vdr2WETx7usb8vUNuyslR9tctj2OUAQPRDUMv34TPXlpKRXaVm1zTKEIGohZYdBrKqptjiUUwQKRehjGYgtFkEAgDL6YQhEkEAjDebNCEUIEs4x4plzhJVpUxlhdhxbLbCtIIGKsrkOKqaYKdstAKEqxFdhBa4jUQxHjbCt4URlLdR1CjLOtKPYysDAVT9sv/S9010XfkPvP09nHUDG2F78PAR4EAjwIBHgQCPAgEOBBIMCDQIAHgQAPAgEeQ0xXOlgDkpAblosP1ICU8MDdMuQ7ATjM0jdW5JAAqAjEkVnJsh7qCFBLedYzxWltQp8IksZMe/kh58W0U4x5R5A0PbFPr0UgyqP7pEuQKOmOj2+cLEwtm2xXpx0EqRmUfV+aBEJrCTG8hVAkZeDKha3qqb/e0rUOG2fmbBuhSILr69H29Em/5/YyTnu3+hgpFl4xMmhfTz8xc3NLU7NseAOF5iKS7rIxG/POAJ+726n3lT9fah2XpHtMWKe44XR9oat9qX1arRmmXfp3Gf+TtFNvSeeERi1jeVNP4REpDl7BWRtxypmLpYS+tXKkq9EXhaDqH/pcl6jj309LAAAAAElFTkSuQmCC');

  --thumb-radius: 0.5rem;
  --thumb-height: 2rem;
  --thumb-width: 4rem;
  --thumb-border-width: 1px;
  --thumb-border-color: rgba(255, 255, 255, 0);

  --track-width: 100%;
  --track-height: 21px;
  --track-border-width: 10px;
  --track-border-color: rgba(255, 255, 255, 1);

  --track-radius: 5px;
  --contrast: 5%;
}

.range {
  -webkit-appearance: none;
  margin: var(--thumb-height) / 2 0;
  width: var(--track-width);

  &::-webkit-slider-runnable-track {
    width: var(--track-width);
    height: var(--track-height);
    cursor: pointer;
    background: var(--track-color);
    border-radius: var(--track-radius);
    border-top: var(--track-border-width) solid var(--track-border-color);
    border-bottom: var(--track-border-width) solid var(--track-border-color);
  }
  &::-webkit-slider-thumb {
    border: var(--thumb-border-width) solid var(--thumb-border-color);
    height: var(--thumb-height);
    width: var(--thumb-width);
    border-radius: var(--thumb-radius);
    background: var(--thumb-color);
    background-image: var(--thumb-image);
    background-size: cover;
    background-position: center;
    cursor: grab;
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-height) * -1 / 2);
    .grabbing & {
      cursor: grabbing;
    }
  }

  &::-moz-range-track {
    width: var(--track-width);
    height: var(--track-height);
    cursor: pointer;
    background: var(--track-color);
    border-radius: var(--track-radius);
    border-top: var(--track-border-width) solid var(--track-border-color);
    border-bottom: var(--track-border-width) solid var(--track-border-color);
  }
  &::-moz-range-thumb {
    border: var(--thumb-border-width) solid var(--thumb-border-color);
    height: var(--thumb-height);
    width: var(--thumb-width);
    border-radius: var(--thumb-radius);
    background: var(--thumb-color);
    background-image: var(--thumb-image);
    background-size: cover;
    background-position: center;
    cursor: grab;
    .grabbing & {
      cursor: grabbing;
    }
  }

  &::-ms-track {
    width: var(--track-width);
    height: var(--track-height);
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: var(--thumb-width) 0;
    color: transparent;
  }
  &::-ms-fill-lower {
    background: darken(var(--track-color), $contrast);
    border-top: var(--track-border-width) solid var(--track-border-color);
    border-bottom: var(--track-border-width) solid var(--track-border-color);
    border-radius: calc(var(--track-radius) * 2);
  }
  &::-ms-fill-upper {
    background: var(--track-color);
    border-top: var(--track-border-width) solid var(--track-border-color);
    border-bottom: var(--track-border-width) solid var(--track-border-color);
    border-radius: calc(var(--track-radius) * 2);
  }
  &::-ms-thumb {
    border: var(--thumb-border-width) solid var(--thumb-border-color);
    height: var(--thumb-height);
    width: var(--thumb-width);
    border-radius: var(--thumb-radius);
    background: var(--thumb-color);
    background-image: var(--thumb-image);
    background-size: cover;
    background-position: center;
    cursor: grab;
    .grabbing & {
      cursor: grabbing;
    }
  }
}
</style>
