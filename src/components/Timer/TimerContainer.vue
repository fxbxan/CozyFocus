<template>
  <div class="wrapper">
    <div class="circle">Time: {{ formattedTime }}</div>
    <p>Status: {{ status }}</p>
    <TimerDisplay
      v-model:minutes="minutes"
      v-model:seconds="seconds"
      :status="status"
      :formattedTime
    />
    <TimerActions @onStart="handleStart" @onResume="handleResume" @onStop="stop" @onReset="reset" />
  </div>
</template>
<script setup lang="ts">
import { useTimer } from '../../composables/useTimer/useTimer.ts'
import TimerActions from './TimerActions.vue'
import TimerDisplay from './TimerDisplay.vue'

const { start, stop, reset, formattedTime, set, status, minutes, seconds } = useTimer()

const handleStart = () => {
  set(minutes.value, seconds.value)
  start()
}

const handleResume = () => {
  start()
}
</script>

<style scoped>
.wrapper {
  display: grid;
  justify-content: center;
}

.circle {
  height: 367px;
  width: 367px;
  background-color: #272727af;
  border-radius: 50%;
  display: inline-block;
}
</style>
