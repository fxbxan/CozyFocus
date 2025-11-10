<template>
  <input
    :disabled="isRunning"
    type="number"
    v-model="minutesInputModel"
    @input="onInput('minutes', $event)"
  />
  <input
    :disabled="isRunning"
    type="number"
    v-model="secondsInputModel"
    @input="onInput('seconds', $event)"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ETimerStatus } from '@/composables/useTimer/useTimer.types'
import type { ITimerDisplayProps } from './TimerDisplay.types'

const minutesInputModel = defineModel<number>('minutes', { default: 0 })
const secondsInputModel = defineModel<number>('seconds', { default: 0 })

const props = defineProps<ITimerDisplayProps>()

//!TODO I don't like this approach, we should change it.
const onInput = (field: 'minutes' | 'seconds', event: Event) => {
  const el = event.target as HTMLInputElement
  if (el.value == typeof String) parseInt(el.value)
  const maxInputLength = el.value.slice(0, 2)

  if (field === 'minutes') minutesInputModel.value = Number(maxInputLength)
  else secondsInputModel.value = Number(maxInputLength)

  if (field === 'seconds' && secondsInputModel.value > 60) secondsInputModel.value = 60
}

const isRunning = computed(() => props.status === ETimerStatus.RUNNING)
</script>
