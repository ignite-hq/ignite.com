import { computed, unref } from 'vue'
import { useQuery } from 'vue-query'

import { RefOrValue } from '~/utils/types'

import useGithubMetadata from './useGithubMetadata'

export const STATIC_GITHUB_FILE_URL = 'https://raw.githubusercontent.com'

async function fetchGitHubRawFile(
  organization: string,
  repositoryName: string,
  filename: string
) {
  const res = await fetch(
    `${STATIC_GITHUB_FILE_URL}/${organization}/${repositoryName}/master/${filename}`
  )

  return res.text()
}

export default function useGitHubFile(
  sourceUrl: RefOrValue<string | undefined>,
  filename: RefOrValue<string | undefined>
) {
  const { organization, repository } = useGithubMetadata(sourceUrl)

  const isEnabled = computed(() => {
    return Boolean(unref(sourceUrl)) && Boolean(unref(filename))
  })

  const { data: file, ...other } = useQuery(
    ['github-file', sourceUrl, filename],
    () => {
      return fetchGitHubRawFile(
        organization.value as string,
        repository.value as string,
        unref(filename) as string
      )
    },
    {
      enabled: isEnabled
    }
  )

  return {
    file,
    ...other
  }
}
