import { useQuery } from 'vue-query'

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
  organization: string,
  repoName: string
) {
  const { data, ...other } = useQuery(
    ['github', 'repositories', organization, repoName],
    () => fetchRepository(organization, repoName),
    {
      cacheTime: ONE_DAY,
      staleTime: ONE_DAY,
      enabled: Boolean(organization) && Boolean(repoName)
    }
  )

  return {
    repository: data,
    ...other
  }
}
