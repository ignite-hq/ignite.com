import { computed, unref } from 'vue'

import { getUserAndRepositoryFromUrl } from '~/utils/github'
import { RefOrValue } from '~/utils/types'

export default function useGithubMetadata(
  sourceUrl: RefOrValue<string | undefined>
) {
  const github = computed(() => {
    const url = unref(sourceUrl)

    if (!url) return
    return getUserAndRepositoryFromUrl(url)
  })

  const repository = computed(() => {
    return github.value?.repository
  })

  const organization = computed(() => {
    return github.value?.user
  })

  const redirectGithubUrl = computed(() => {
    return github.value?.redirectGithubUrl
  })

  return { organization, repository, redirectGithubUrl }
}
