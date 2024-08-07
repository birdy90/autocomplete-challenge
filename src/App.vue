<script setup lang="ts">
import AutoCompleteInput from '@/components/autocomplete/AutoCompleteInput.vue'
</script>

<template>
  <main class="mx-auto py-4 w-full max-w-xl">
    <div class="flex gap-4 items-stretch">
      <AutoCompleteInput class="flex-grow" />
      <AutoCompleteInput class="flex-grow" />
    </div>
  </main>
</template>
