import type { Ref } from 'vue'

export interface Book {
  title: string
  author: string
}

export type City = string

export interface WeighedItem {
  value: string
  weight: number
}

export interface StoreInterface<T> {
  exactMatch: Ref<T[]>
  fuzzyMatch: Ref<T[]>
  search: (str: string) => void
}
