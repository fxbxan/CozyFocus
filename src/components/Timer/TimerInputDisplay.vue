<template>
  <p>Status: {{ status }}</p>
  <p>Total Seconds: {{ seconds }}</p>

  <input type="number" v-model.number="displayMinutes" />
  <input type="number" v-model.number="displaySeconds" />

  <TimerActions @onStart="start" @onStop="stop" />
</template>

<script setup lang="ts">
import { useTimer } from '@/composables/useTimer/useTimer'
import TimerActions from './TimerActions.vue'

const { start, stop, status, seconds, displayMinutes, displaySeconds } = useTimer()
</script>
