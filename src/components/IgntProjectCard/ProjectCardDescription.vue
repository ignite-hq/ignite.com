<template>
  <div>
    <IgntLoader v-if="loading" class="title-loading mx-auto mb-4" />
    <div v-if="!loading" class="ignt-title sm md-l-up text-center mb-4">
      {{ project.genesisChainID }}
    </div>

    <IgntLoader v-if="loading" class="github-loading mx-auto" />
    <div v-if="!loading" class="github mb-7">
      <IconGithub class="ignt-title mr-1" />
      <span class="ignt-label sm ignt-muted">{{ githubUser }}</span>
      <span class="ignt-label sm ignt-border mx-1">/</span>
      <span class="ignt-label sm ignt-muted">{{ githubRepo }}</span>
    </div>

    <div v-if="!loading" class="ignt-content sm md-l-up ignt-muted">
      A blockchain built with the Cosmos SDK and launched on the Ignite Network.
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProjectCardDescription'
}
</script>

<script lang="ts" setup>
import { LaunchChain } from 'tendermint-spn-ts-client/tendermint.spn.launch/rest'

import IgntLoader from '../IgntLoader.vue'
import IconGithub from '../icons/IconGithub.vue'
import { getPathname } from '../../utils/url'

interface Props {
  loading: boolean
  project: LaunchChain
}

const { project } = defineProps<Props>()

const githubUrlPathname = getPathname(project.sourceURL)
const splitPathname = githubUrlPathname.split('/')
const githubUser = splitPathname[1] ?? ''
const githubRepo = splitPathname[2] ?? ''
</script>

<style scoped lang="scss">
.title-loading {
  width: px2rem(180);
  height: px2rem(26);
  @media #{$breakpoint-large} {
    height: px2rem(36);
  }
}

.github {
  display: flex;
  align-items: center;
  justify-content: center;
}

.github-loading {
  width: px2rem(150);
  height: px2rem(24);
}
</style>
