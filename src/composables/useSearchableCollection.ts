import { computed, ref, watch } from 'vue'
import { performSearch } from '@/utilities'
import { useDebounceFn } from '@vueuse/core'

export const useSearchableCollection = <T = unknown>(
  data: T[],
  accessorFn?: (item: T) => string
) => {
  const minSearchLength = 3

  const searchInput = ref('')
  const loading = ref(false)
  const exactMatch = ref<T[]>([])
  const fuzzyMatch = ref<T[]>([])
  const stringifiedItems = computed(() => (accessorFn ? data.map(accessorFn) : (data as string[])))

  const search = useDebounceFn(() => {
    const results = performSearch(searchInput.value, stringifiedItems.value)

    const getItemsFromData = (items: string[]): T[] => {
      return items
        .map((item) =>
          data.find((dataItem) => (accessorFn ? accessorFn(dataItem) : dataItem) === item)
        )
        .filter(Boolean) as T[]
    }

    exactMatch.value = getItemsFromData(results.exact)
    fuzzyMatch.value = getItemsFromData(results.fuzzy)
    loading.value = false
  }, 500)

  function clearResults() {
    searchInput.value = ''
    exactMatch.value = []
    fuzzyMatch.value = []
  }

  watch(searchInput, () => {
    if (!canSearch.value) return
    loading.value = true
    search()
  })

  const canSearch = computed(() => {
    return searchInput.value.length >= minSearchLength
  })

  return {
    searchInput,
    minSearchLength,
    canSearch,
    clearResults,
    loading,
    exactMatch,
    fuzzyMatch
  }
}
