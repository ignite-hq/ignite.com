<script lang="ts">
/* eslint-disable vue/no-v-html */
export default {
  name: 'ProjectDescription'
}
</script>

<script lang="ts" setup>
import DOMPurify from 'isomorphic-dompurify'
import { marked } from 'marked'
import { computed } from 'vue'

interface Props {
  rawMarkdown?: string
}

const props = withDefaults(defineProps<Props>(), {
  rawMarkdown: ''
})

const markdown = computed(() => {
  const sanitizedRawMarkdown = DOMPurify.sanitize(props.rawMarkdown)
  return marked(sanitizedRawMarkdown)
})
</script>

<template>
  <div class="container-full container px-5 sm:px-5.5 lg:px-7">
    <div
      class="project-description-markdown-content grid grid-cols-1 gap-x-6 md:gap-x-7 lg:grid-cols-12"
      v-html="markdown"
    ></div>
  </div>
</template>

<style lang="postcss">
.project-description-markdown-content {
  h1,
  h2,
  h3 {
    @apply leading-title tracking-tight;
  }
  p,
  ul {
    @apply leading-text tracking-tighter;
  }

  h1,
  h2 {
    @apply font-title lg:col-span-4 xl:col-start-2;
  }

  h1 {
    + video,
    + img,
    + iframe {
      @apply mt-0;
    }
  }

  h3,
  p,
  ul,
  video,
  img,
  iframe {
    @apply lg:col-span-8 lg:col-start-5 xl:col-span-6 xl:col-start-6;
  }

  h1 {
    @apply mb-6 text-5 font-semibold md:mb-8 md:text-7 lg:mb-0;
  }
  h2 {
    @apply mt-8 mb-0 whitespace-normal text-4 font-semibold md:mt-9 lg:mt-9.5;
  }
  h3 {
    @apply mt-6 mb-0 whitespace-normal text-3 font-semibold md:mt-7 md:text-4 lg:mt-9.5;
  }

  h3,
  p,
  ul {
    @apply md:px-7;
  }

  p,
  ul {
    @apply text-muted;
  }

  p + p,
  h2 + p,
  h3 + p {
    @apply mt-5;
  }

  p + ul,
  li + li {
    @apply mt-4;
  }

  li {
    @apply relative pl-4;
    &:before {
      content: '•';
      @apply absolute left-0 top-0 text-primary;
    }
  }

  video,
  img,
  iframe {
    @apply mb-6 mt-7 w-full rounded md:mb-7 md:mt-8 lg:mb-8 lg:mt-9.5;
    + h3 {
      @apply mt-0;
    }
  }
}
</style>
