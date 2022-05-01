import { computed, Ref, unref } from 'vue'
import { useQuery } from 'vue-query'

import { getUserAndRepositoryFromUrl } from '~/utils/github'

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
  sourceUrl?: Ref<string | undefined> | string
) {
  const github = computed(() => {
    const url = unref(sourceUrl)

    if (!url) return
    return getUserAndRepositoryFromUrl(url)
  })

  const repositoryName = computed(() => {
    return github.value?.repository
  })

  const organization = computed(() => {
    return github.value?.user
  })

  const isEnabled = computed(() => {
    return Boolean(unref(repositoryName)) && Boolean(unref(organization))
  })

  const { data, ...other } = useQuery(
    ['github', 'repositories', organization, repositoryName],
    () =>
      fetchRepository(
        unref(organization) as string,
        unref(repositoryName) as string
      ),
    {
      cacheTime: ONE_DAY,
      staleTime: ONE_DAY,
      enabled: isEnabled
    }
  )

  return {
    repository: data,
    repositoryName,
    organization,
    ...other
  }
}
