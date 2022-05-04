<script lang="ts">
/* eslint-disable vue/no-v-html */
export default {
  name: 'ProjectDescription'
}
</script>

<script lang="ts" setup>
import DOMPurify from 'isomorphic-dompurify'
import { marked } from 'marked'
import { computed, toRef } from 'vue'

import IgniteLoader from '~/components/ui/IgniteLoader.vue'
import { STATIC_GITHUB_FILE_URL } from '~/composables/github/useGitHubFile'
import useGithubMetadata from '~/composables/github/useGithubMetadata'

interface Props {
  rawMarkdown?: string
  sourceUrl?: string
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  rawMarkdown: '',
  sourceUrl: ''
})

const { organization, repository } = useGithubMetadata(
  toRef(props, 'sourceUrl')
)

function relativeImageToAbsolute(href: string | null) {
  if (!href) return ''
  if (!href.startsWith('/')) return href
  return `${STATIC_GITHUB_FILE_URL}/${organization.value}/${repository.value}/main/assets${href}`
}

const markdown = computed(() => {
  marked.use({
    renderer: {
      image(href, title, text) {
        const absoluteHref = relativeImageToAbsolute(href)
        const cleanedHref = DOMPurify.sanitize(absoluteHref ?? '')

        if (cleanedHref === null) {
          return text
        }

        let out = `<img src="${cleanedHref}" alt="${text}"`

        if (title) {
          out += ` title="${title}"`
        }

        out += '/>'

        return out
      },
      paragraph: (text) => {
        if (text.startsWith('<img')) {
          return text + '\n'
        }
        return '<p>' + text + '</p>'
      }
    }
  })

  return marked(props.rawMarkdown, {
    sanitizer: (html: string) => DOMPurify.sanitize(html)
  })
})

const isEmpty = computed(() => {
  return props.rawMarkdown === '404: Not Found'
})
</script>

<template>
  <template v-if="loading">
    <div class="container px-5 sm:px-5.5 lg:px-7">
      <div class="project-description-markdown-content gap-y-8">
        <IgniteLoader class="heading h-8 w-full !max-w-xs" />
        <div class="text w-full space-y-2 !px-0">
          <IgniteLoader class="text h-4 w-11/12 !max-w-none" />
          <IgniteLoader class="text h-4 w-full !max-w-none" />
          <IgniteLoader class="text h-4 w-10/12 !max-w-none" />
          <IgniteLoader class="text h-4 w-11/12 !max-w-none" />
        </div>

        <IgniteLoader class="heading h-8 w-12 !max-w-xs" />
        <IgniteLoader class="text h-12 w-full !max-w-none" />

        <IgniteLoader class="heading h-8 w-full !max-w-xs" />
        <div class="text w-full space-y-2 !px-0">
          <IgniteLoader class="text h-4 w-11/12 !max-w-none" />
          <IgniteLoader class="text h-4 w-full !max-w-none" />
          <IgniteLoader class="text h-4 w-10/12 !max-w-none" />
          <IgniteLoader class="text h-4 w-11/12 !max-w-none" />
        </div>

        <IgniteLoader class="heading h-8 w-12 !max-w-xs" />
        <IgniteLoader class="text h-12 w-full !max-w-none" />
      </div>
    </div>
  </template>

  <template v-else-if="isEmpty"></template>

  <template v-else>
    <div class="container px-5 sm:px-5.5 lg:px-7">
      <div class="project-description-markdown-content" v-html="markdown"></div>
    </div>
  </template>
</template>

<style lang="postcss">
.project-description-markdown-content {
  @apply grid grid-cols-1 gap-x-6 md:gap-x-7 lg:grid-cols-12;

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
  h2,
  .heading {
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
  iframe,
  .text {
    @apply lg:col-span-8 lg:col-start-5 xl:col-span-6 xl:col-start-6;
  }

  h1,
  .heading {
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
  ul,
  .text {
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
