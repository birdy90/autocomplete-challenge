import { defineStore } from 'pinia'
import { books } from '@/data/books'
import { useSearchableCollection } from '@/composables/useSearchableCollection'
import type { Book } from '@/types'

export const useBooksStore = defineStore('books', () => {
  return useSearchableCollection<Book>(books, (item) => item.title)
})
