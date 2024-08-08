<script setup lang="ts">
import BooksInput from '@/components/autocomplete/variants/BooksInput.vue'
import CitiesInput from '@/components/autocomplete/variants/CitiesInput.vue'
</script>

<template>
  <main class="px-2 mx-auto py-4 w-full max-w-2xl">
    <div class="grid sm:grid-cols-2 gap-8">
      <BooksInput class="flex-grow shrink-0" />
      <CitiesInput class="flex-grow shrink-0" />
    </div>
  </main>
</template>
