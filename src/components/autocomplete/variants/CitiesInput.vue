<script setup lang="ts">
import AutoCompleteInput from '../AutoCompleteInput.vue'
import { cities } from '@/data/cities.js'
import { provide } from 'vue'
import { useCitiesStore } from '@/stores/cities'

provide('store', useCitiesStore())
</script>

<template>
  <AutoCompleteInput title="Cities" :data="cities" />
</template>
