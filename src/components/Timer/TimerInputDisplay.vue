<template>
  <p>Status: {{ status }}</p>
  <p>Remaining Seconds: {{ remainingSeconds }}</p>

  <input type="number" :disabled="isInputDisabled" v-model.number="minutes" />
  <input type="number" :disabled="isInputDisabled" v-model.number="seconds" />

  <TimerActions @onStart="start" @onStop="stop" />
</template>

<script setup lang="ts">
import { useCountdown } from '@/composables/useCountdown/useCountdown'
import TimerActions from './TimerActions.vue'
import { ETimerStatus } from '@/composables/useCountdown/useCountdown.types'
import { computed } from 'vue'

const { start, stop, status, minutes, seconds, remainingSeconds } = useCountdown()

const isInputDisabled = computed(() => status.value === ETimerStatus.RUNNING)
</script>
