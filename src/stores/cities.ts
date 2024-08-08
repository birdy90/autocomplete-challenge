import { defineStore } from 'pinia'
import { useSearchableCollection } from '@/composables/useSearchableCollection'
import type { City } from '@/types'
import { cities } from '@/data/cities'

export const useCitiesStore = defineStore('cities', () => {
  return useSearchableCollection<City>(cities)
})
