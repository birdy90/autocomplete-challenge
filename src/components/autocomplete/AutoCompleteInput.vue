<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/solid'
import { useId } from '@/composables/useId'

const inputId = useId()

const wrapperClasses = [
  'flex items-center justify-between',

  'px-2 py-1 rounded border border-gray-300',
  'has-[:focus-visible]:outline has-[:focus-visible]:outline-blue-500'
]
</script>

<template>
  <div>
    <label :for="inputId">Input title</label>
    <div :class="wrapperClasses" v-bind="$attrs">
      <input :id="inputId" autofocus class="focus-visible:outline-0 flex-grow border-0" />
      <XMarkIcon class="size-6 p-0.5 cursor-pointer text-gray-400 hover:text-gray-700" />
    </div>
    <small class="text-gray-600">At least 3 characters needed</small>
  </div>
</template>
