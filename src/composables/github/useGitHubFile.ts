import { computed, unref } from 'vue'
import { useQuery } from 'vue-query'

import { getUserAndRepositoryFromUrl } from '~/utils/github'
import { RefOrValue } from '~/utils/types'

async function fetchGitHubRawFile(
  organization: string,
  repositoryName: string,
  filename: string
) {
  const res = await fetch(
    `https://raw.githubusercontent.com/${organization}/${repositoryName}/master/${filename}`
  )

  return res.text()
}

export default function useGitHubFile(
  sourceUrl: RefOrValue<string | undefined>,
  filename: RefOrValue<string | undefined>
) {
  const github = computed(() => {
    const url = unref(sourceUrl)

    if (!url) return
    return getUserAndRepositoryFromUrl(url)
  })

  const isEnabled = computed(() => {
    return Boolean(unref(sourceUrl)) && Boolean(unref(filename))
  })

  const { data: file, ...other } = useQuery(
    ['github-file', sourceUrl, filename],
    () => {
      return fetchGitHubRawFile(
        github.value?.user as string,
        github.value?.repository as string,
        unref(filename) as string
      )
    },
    {
      enabled: isEnabled
    }
  )

  return { file, ...other }
}
