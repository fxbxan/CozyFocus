<template>
  <input :disabled="isRunning" type="number" v-model="minutes" />
  <input :disabled="isRunning" type="number" v-model="seconds" />
  {{ formattedTime }}
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ETimerStatus } from '@/composables/useTimer/useTimer.types'

const minutes = defineModel('minutes')
const seconds = defineModel('seconds')

// !TODO Fix double type check for formattedTime
const props = defineProps<{
  status: ETimerStatus
  formattedTime: string
}>()

const isRunning = computed(() => props.status === ETimerStatus.RUNNING)
</script>
