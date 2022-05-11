import axios, { AxiosError } from 'axios'
import { computed, unref } from 'vue'
import { useQuery } from 'vue-query'

import { RefOrValue } from '~/utils/types'

import useGithubMetadata from './useGithubMetadata'

export const STATIC_GITHUB_FILE_URL = 'https://raw.githubusercontent.com'

async function fetchGitHubRawFile(
  organization: string,
  repositoryName: string,
  filename: string,
  branch: string
) {
  const res = await axios.get(
    `${STATIC_GITHUB_FILE_URL}/${organization}/${repositoryName}/${branch}/${filename}`
  )

  return res.data
}

export default function useGitHubFile(
  sourceUrl: RefOrValue<string | undefined>,
  filename: RefOrValue<string | undefined>,
  branch: RefOrValue<string | undefined> = 'main'
) {
  const { organization, repository } = useGithubMetadata(sourceUrl)

  const isEnabled = computed(() => {
    return (
      Boolean(unref(sourceUrl)) &&
      Boolean(unref(filename)) &&
      Boolean(unref(branch))
    )
  })

  const { data: file, ...other } = useQuery(
    ['github-file', sourceUrl, filename],
    () => {
      return fetchGitHubRawFile(
        organization.value as string,
        repository.value as string,
        unref(filename) as string,
        unref(branch) as string
      )
    },
    {
      enabled: isEnabled,
      retry(failureCount, error: AxiosError) {
        if (error.response?.status === 404) return false
        else if (failureCount < 2) return true
        else return false
      }
    }
  )

  return {
    file,
    ...other
  }
}
