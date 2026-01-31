import { computed, onUnmounted, ref } from 'vue'
import { type ITimerContext, ETimerStatus } from './useTimer.types'
import { INTERVAL_MS } from './useTimer.consts'
import { MINUTE } from './useTimer.consts'
//!TODO Interval is not recommended since it can cause time drift, need other implementation

export function useTimer(): ITimerContext {
  const remaining = ref<number>(0)
  const status = ref<ETimerStatus>(ETimerStatus.STOP)
  const timerIntervalId = ref<ReturnType<typeof setInterval> | null>(null)

  const seconds = computed({
    get: () => remaining.value,
    set: (value: number) => {
      if (status.value === ETimerStatus.RUNNING) return
      remaining.value = value
    },
  })

  const displayMinutes = computed({
    get: () => Math.floor(seconds.value / MINUTE),
    set: (val) => {
      seconds.value = Number(val) * MINUTE + (seconds.value % MINUTE)
    },
  })

  const displaySeconds = computed({
    get: () => seconds.value % MINUTE,
    set: (val) => {
      seconds.value = Math.floor(seconds.value / MINUTE) * MINUTE + Number(val)
    },
  })

  const tick = () => {
    remaining.value -= 1
  }

  const clearTimer = () => {
    if (!timerIntervalId.value) return

    clearInterval(timerIntervalId.value)
    timerIntervalId.value = null
  }

  const start = () => {
    if (status.value === ETimerStatus.RUNNING || remaining.value <= 0) return

    status.value = ETimerStatus.RUNNING

    timerIntervalId.value = setInterval(() => {
      tick()

      if (remaining.value <= 0) stop()
    }, INTERVAL_MS)
  }

  const stop = () => {
    clearTimer()
    status.value = ETimerStatus.STOP
  }

  onUnmounted(clearTimer)

  return {
    start,
    stop,
    status,
    seconds,
    displayMinutes,
    displaySeconds,
  }
}
