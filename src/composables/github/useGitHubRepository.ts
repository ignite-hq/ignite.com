import { computed, unref } from 'vue'
import { useQuery } from 'vue-query'

import { RefOrValue } from '~/utils/types'

import useGithubMetadata from './useGithubMetadata'

const GITHUB_API_URL = 'https://api.github.com'

interface Repository {
  stargazers_count: number
  description: string
}

const ONE_DAY = 1000 * 60 * 60 * 24

async function fetchRepository(
  organization: string,
  repositoryName: string
): Promise<Repository> {
  const repoName = repositoryName.endsWith('.git')
    ? repositoryName.replace('.git', '')
    : repositoryName

  const res = await fetch(`${GITHUB_API_URL}/repos/${organization}/${repoName}`)
  return res.json()
}

export default function useGitHubRepository(
  sourceUrl: RefOrValue<string | undefined>
) {
  const { repository, organization } = useGithubMetadata(sourceUrl)

  const isEnabled = computed(() => {
    return Boolean(unref(repository)) && Boolean(unref(organization))
  })

  const { data, ...other } = useQuery(
    ['github', 'repositories', organization, repository],
    () =>
      fetchRepository(
        unref(organization) as string,
        unref(repository) as string
      ),
    {
      cacheTime: ONE_DAY,
      staleTime: ONE_DAY,
      enabled: isEnabled
    }
  )

  return {
    repository: data,
    repositoryName: repository,
    organization,
    ...other
  }
}
