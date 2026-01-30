import { onUnmounted, ref } from 'vue'
import { type ITimerContext, ETimerStatus } from './useTimer.types'
import { INTERVAL_MS } from './useTimer.consts'

//!TODO Interval is not recommended since it can cause time drift, need other implementation

export function useTimer(): ITimerContext {
  const seconds = ref<number>(0)
  const status = ref<ETimerStatus>(ETimerStatus.STOP)
  const timerIntervalId = ref<ReturnType<typeof setInterval> | null>(null)

  const tick = () => {
    seconds.value -= 1
  }

  const clearTimer = () => {
    if (!timerIntervalId.value) return

    clearInterval(timerIntervalId.value)
    timerIntervalId.value = null
  }

  const start = () => {
    if (status.value === ETimerStatus.RUNNING || seconds.value <= 0) return

    status.value = ETimerStatus.RUNNING

    timerIntervalId.value = setInterval(() => {
      tick()

      if (seconds.value <= 0) stop()
    }, INTERVAL_MS)
  }

  const stop = () => {
    clearTimer()
    status.value = ETimerStatus.STOP
  }

  const set = (s: number) => {
    if (status.value === ETimerStatus.RUNNING) return

    seconds.value = s
  }

  onUnmounted(clearTimer)

  return {
    start,
    stop,
    set,
    status,
    seconds,
  }
}
