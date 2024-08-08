import { distance } from 'fastest-levenshtein'
import type { WeighedItem } from '@/types'

export const pluralize = (count: number, word: string, pluralForm = word + 's') => {
  return count === 1 ? word : pluralForm
}

export const performSearch = (
  searchWord: string,
  collection: string[]
): { exact: string[]; fuzzy: string[] } => {
  if (searchWord.length < 3) {
    return { exact: [], fuzzy: [] }
  }

  const exactMatches: string[] = []

  const normalizeString = (s: string) => {
    return s.toLowerCase()
  }

  const getLevensteinsDistance = (search: string, item: string): number => {
    const normalizedSearch = normalizeString(search)
    const normalizedItem = normalizeString(item.slice(0, normalizedSearch.length))
    return distance(normalizedSearch, normalizedItem)
  }

  const weighedCollection = collection
    .map<WeighedItem | undefined>((item) => {
      const levensteinsDistance = getLevensteinsDistance(searchWord, item)

      if (levensteinsDistance === 0) {
        exactMatches.push(item)
        return
      }

      return {
        value: item,
        weight: levensteinsDistance
      }
    })
    .filter(Boolean) as WeighedItem[]

  weighedCollection.sort((a, b): number => {
    return a.weight - b.weight
  })

  const fuzzyMatches = weighedCollection
    .filter((t) => t.weight <= Math.floor(searchWord.length / 2))
    .slice(0, 10)
    .map((t) => t.value)

  return { exact: exactMatches, fuzzy: fuzzyMatches }
}
