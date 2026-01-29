import { ref, watch, watchEffect } from 'vue'
import { type ITimerContext, ETimerStatus } from './useTimer.types'
import { INTERVAL_MS } from './useTimer.consts'
//!TODO Interval is not recommended since it can cause time drift, need other implementation
//!TODO Learn more about use toValue()
export function useTimer(): ITimerContext {
  const seconds = ref(0)
  const status = ref<ETimerStatus>(ETimerStatus.STOP)
  const timerIntervalId = ref<ReturnType<typeof setInterval> | null>(null)

  const set = (s: number) => {
    if (status.value === ETimerStatus.RUNNING) return

    seconds.value = s
  }

  const tick = () => {
    seconds.value -= 1
  }

  const start = () => {
    if (status.value === ETimerStatus.RUNNING || seconds.value === 0) return
    status.value = ETimerStatus.RUNNING

    timerIntervalId.value = setInterval(tick, INTERVAL_MS)
  }

  const stop = () => {
    if (!timerIntervalId.value) return

    clearInterval(timerIntervalId.value)
    status.value = ETimerStatus.STOP
  }

  const end = () => {
    if (typeof timerIntervalId.value === 'number') clearInterval(timerIntervalId.value)
    status.value = ETimerStatus.FINISH
  }

  // const reset = () => {
  //   if (status.value == ETimerStatus.RUNNING) return
  // }

  watch(seconds, (val) => {
    if (val === 0) end()
  })

  watchEffect(() => console.log(seconds.value))

  return {
    start,
    stop,
    end,
    set,
    status,
    seconds,
  }
}
