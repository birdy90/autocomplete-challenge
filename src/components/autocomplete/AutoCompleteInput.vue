<script setup lang="ts" generic="T">
import { EllipsisHorizontalIcon, XMarkIcon } from '@heroicons/vue/24/solid'
import { useId } from '@/composables/useId'
import AutoCompleteResults from '@/components/autocomplete/AutoCompleteResults.vue'
import { computed, inject, ref, toValue } from 'vue'
import type { useSearchableCollection } from '@/composables/useSearchableCollection'
import { pluralize } from '@/utilities'
import AutoCompleteHint from '@/components/autocomplete/AutoCompleteHint.vue'

const { title } = defineProps<{
  title: string
}>()

const inputRef = ref<HTMLInputElement | null>(null)
const store = inject<ReturnType<typeof useSearchableCollection>>('store')

const inputId = useId()
const resultsLength = computed(() => toValue(store?.exactMatch)?.length)

const wrapperClasses = [
  'flex items-center justify-between',
  'px-2 py-1 rounded border border-gray-300',
  'has-[:focus-visible]:outline has-[:focus-visible]:outline-blue-500'
]

const onClear = () => {
  inputRef.value?.focus()
  store?.clearResults()
}
</script>

<template>
  <div v-if="store" @keydown.esc="onClear">
    <label :for="inputId">{{ title }}</label>
    <div :class="wrapperClasses" v-bind="$attrs">
      <input
        :id="inputId"
        ref="inputRef"
        autofocus
        class="flex-grow outline-none"
        v-model="store.searchInput"
      />

      <div
        v-if="store.searchInput"
        tabindex="0"
        @click="onClear"
        @keydown.enter.space.prevent="onClear"
      >
        <XMarkIcon class="size-6 p-0.5 cursor-pointer text-gray-400 hover:text-gray-700" />
      </div>
    </div>

    <AutoCompleteHint v-if="store.loading" class="inline-flex items-center gap-2">
      Loading
      <EllipsisHorizontalIcon class="size-4 animate-spin" />
    </AutoCompleteHint>
    <template v-else-if="store.searchInput">
      <AutoCompleteHint v-if="!store.canSearch">
        At least {{ store.minSearchLength }}
        {{ pluralize(store.minSearchLength, 'character') }} needed
      </AutoCompleteHint>
      <AutoCompleteHint v-else-if="resultsLength !== undefined">
        {{ resultsLength }} {{ pluralize(resultsLength, 'record') }} found
      </AutoCompleteHint>
    </template>

    <AutoCompleteResults v-if="store.canSearch && !store.loading" class="mt-4" v-slot="{ item }">
      <slot name="item" v-bind="{ item: item as T }" />
    </AutoCompleteResults>
  </div>
</template>
