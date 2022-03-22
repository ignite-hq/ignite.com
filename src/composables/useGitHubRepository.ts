import { useQuery } from 'vue-query'

const GITHUB_API_URL = 'https://api.github.com'

interface Repository {
  stargazers_count: number
}

const ONE_DAY = 1000 * 60 * 60 * 24

async function fetchRepository(
  organization: string,
  repoName: string
): Promise<Repository> {
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
      staleTime: ONE_DAY
    }
  )

  return {
    repository: data,
    ...other
  }
}
