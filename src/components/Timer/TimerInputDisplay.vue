<template>
  <p>{{ status }}</p>
  <p>{{ seconds }}</p>

  <input type="number" v-model="minutesInputModel" @input="onInput" />
  <input type="number" v-model="secondsInputModel" @input="onInput" />
  <TimerActions @onStart="handleStart" @onResume="handleResume" @onStop="stop" />
</template>

<script setup lang="ts">
// !TODO i think this component should be only for presentation view layer
import { toValue } from 'vue'
import { useTimer } from '../../composables/useTimer/useTimer'
import TimerActions from './TimerActions.vue'

const { start, stop, set, status, seconds } = useTimer()

const minutesInputModel = defineModel<number>('minutes', { default: 0 })
const secondsInputModel = defineModel<number>('seconds', { default: 0 })
const MINUTE: number = 60

const handleStart = () => {
  start()
}

const handleResume = () => {
  start()
}

// !TODO Type mutation! if input empty, type of value changes to string
const onInput = () => {
  const totalTime = toValue(minutesInputModel) * MINUTE + toValue(secondsInputModel)

  set(totalTime)
  console.log(minutesInputModel.value)
}
</script>
