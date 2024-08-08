<script setup lang="ts" generic="T">
import { inject } from 'vue'
import type { useSearchableCollection } from '@/composables/useSearchableCollection'

const store = inject<ReturnType<typeof useSearchableCollection>>('store')
const results = store?.exactMatch ?? []
const additionalResults = store?.fuzzyMatch ?? []

const listClasses = ['flex flex-col gap-1']
</script>

<template>
  <div>
    <div v-if="results.length === 0" class="text-gray-500">Nothing found</div>
    <div v-else :class="listClasses">
      <div v-for="(result, i) in results" :key="i">
        <slot v-bind="{ item: result }">
          {{ result }}
        </slot>
      </div>
    </div>

    <template v-if="additionalResults && additionalResults.length > 0">
      <small class="flex gap-4 items-center my-2 text-gray-500">
        <span class="grow border border-t-current" />
        Some more results
        <span class="grow border border-t-current" />
      </small>
      <div :class="listClasses">
        <div v-for="(result, i) in additionalResults" :key="i">
          <slot v-bind="{ item: result }">
            {{ result }}
          </slot>
        </div>
      </div>
    </template>
  </div>
</template>
