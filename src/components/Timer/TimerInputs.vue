<template>
  <div class="inputs-timer">
    <div v-if="isInputDisabled" class="time-overlay">
      {{ formattedTime }}
    </div>

    <div v-else class="input-wrapper">
      <input type="number" v-model="minutes" />
      <span>:</span>
      <input type="number" v-model="seconds" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ETimerStatus, useTimerContext } from '@/composables/useCountdown/useCountdown.types'
import { formatTime } from '@/utils/time'
import { computed } from 'vue'

const { remainingSeconds, minutes, seconds, status } = useTimerContext()

const formattedTime = computed(() => formatTime(remainingSeconds.value))
const isInputDisabled = computed(() => status.value === ETimerStatus.RUNNING)
</script>

<style lang="scss" scoped>
.inputs-timer {
  .time-overlay {
    font-size: 6rem;
    color: #5c5c5c;
    display: flex;
    align-items: center;
  }

  input[type='number'] {
    width: 120px;
    font-size: 6rem;
    border: none;
    text-align: center;
    color: #000000;

    &:focus {
      outline: none;
    }

    &:disabled {
      color: #4e4e4e;
      cursor: default;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    appearance: textfield;
  }
  .input-wrapper {
    display: flex;
    align-items: center;

    span {
      font-size: 4rem;
      margin: 0 0.5rem;
      color: black;
    }
  }
}
</style>
