export function getUserAndRepositoryFromUrl(githubUrl: string): {
  user: string
  repository: string
  redirectGithubUrl: string
} {
  if (!githubUrl) {
    return { user: '', repository: '', redirectGithubUrl: '' }
  }

  const githubUrlIndex = githubUrl.indexOf('github.com')
  const githubUrlWithoutProtocol = githubUrl.slice(githubUrlIndex)
  const githubUrlWithProtocol = !githubUrlWithoutProtocol.startsWith('https://')
    ? `https://${githubUrlWithoutProtocol}`
    : githubUrlWithoutProtocol

  const splitPathname = githubUrlWithoutProtocol.split('/')
  const user = splitPathname[1] ?? ''
  const repository = splitPathname[2] ?? ''

  return {
    user,
    repository,
    redirectGithubUrl: githubUrlWithProtocol
  }
}
