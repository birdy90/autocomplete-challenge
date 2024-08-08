<script setup lang="ts">
import AutoCompleteInput from '../AutoCompleteInput.vue'
import { useBooksStore } from '@/stores/books'
import { provide } from 'vue'
import type { Book } from '@/types'

provide('store', useBooksStore())

const BookAutoComplete = AutoCompleteInput<Book>
</script>

<template>
  <BookAutoComplete title="Books">
    <template #item="{ item }">
      <div class="flex flex-col">
        <b>{{ item.title }}</b>
        <small>{{ item.author }}</small>
      </div>
    </template>
  </BookAutoComplete>
</template>
