import { getPathname } from './url'

export function getUserAndRepositoryFromUrl(githubUrl: string) {
  const githubUrlPathname = getPathname(githubUrl)
  const splitPathname = githubUrlPathname.split('/')
  const githubUser = splitPathname[1] ?? ''
  const githubRepo = splitPathname[2] ?? ''

  return { githubUser, githubRepo }
}
