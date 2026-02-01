import { computed, onUnmounted, ref } from 'vue'
import { type ITimerContext, ETimerStatus } from './useCountdown.types'
import { INTERVAL_MS, MINUTE } from './useCountdown.consts'

//!TODO Interval is not recommended since it can cause time drift, need other implementation

export function useCountdown(): ITimerContext {
  const remainingSeconds = ref<number>(0)
  const status = ref<ETimerStatus>(ETimerStatus.STOP)
  const timerIntervalId = ref<ReturnType<typeof setInterval> | null>(null)

  const tick = () => {
    remainingSeconds.value -= 1
  }

  const clearTimer = () => {
    if (!timerIntervalId.value) return

    clearInterval(timerIntervalId.value)
    timerIntervalId.value = null
  }

  const start = () => {
    if (status.value === ETimerStatus.RUNNING || remainingSeconds.value <= 0) return

    status.value = ETimerStatus.RUNNING

    timerIntervalId.value = setInterval(() => {
      tick()

      if (remainingSeconds.value <= 0) stop()
    }, INTERVAL_MS)
  }

  const stop = () => {
    clearTimer()
    status.value = ETimerStatus.STOP
  }

  const minutes = computed({
    get: () => Math.floor(remainingSeconds.value / MINUTE),
    set: (val) => {
      remainingSeconds.value = val * MINUTE + (remainingSeconds.value % MINUTE)
    },
  })

  const seconds = computed({
    get: () => remainingSeconds.value % MINUTE,
    set: (val) => {
      remainingSeconds.value = Math.floor(remainingSeconds.value / MINUTE) * MINUTE + val
    },
  })

  onUnmounted(clearTimer)

  return {
    start,
    stop,
    status,
    remainingSeconds,
    minutes,
    seconds,
  }
}
