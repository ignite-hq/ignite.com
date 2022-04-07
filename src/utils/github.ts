export function getUserAndRepositoryFromUrl(githubUrl: string): {
  githubUser: string
  githubRepo: string
  redirectGithubUrl: string
} {
  if (!githubUrl) {
    return { githubUser: '', githubRepo: '', redirectGithubUrl: '' }
  }

  const githubUrlIndex = githubUrl.indexOf('github.com')
  const githubUrlWithoutProtocol = githubUrl.slice(githubUrlIndex)
  const githubUrlWithProtocol = !githubUrlWithoutProtocol.startsWith('https://')
    ? `https://${githubUrlWithoutProtocol}`
    : githubUrlWithoutProtocol

  const splitPathname = githubUrlWithoutProtocol.split('/')
  const githubUser = splitPathname[1] ?? ''
  const githubRepo = splitPathname[2] ?? ''

  return {
    githubUser,
    githubRepo,
    redirectGithubUrl: githubUrlWithProtocol
  }
}
