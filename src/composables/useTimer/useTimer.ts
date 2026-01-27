import { ref, onBeforeUnmount, onMounted } from 'vue'
import { type ITimerContext, ETimerStatus } from './useTimer.types'

export function useTimer(): ITimerContext {
  const seconds = ref(12)
  const status = ref<ETimerStatus>(ETimerStatus.STOP)
  const timerIntervalId = ref<ReturnType<typeof setInterval> | null>(null)

  // const set = (s: number) => {
  //   if (status.value == ETimerStatus.RUNNING) return

  //   seconds.value = s
  // }

  const tick = () => {
    if (seconds.value == 0) {
      end()
      return
    }
    seconds.value -= 1

    console.log(seconds.value)
  }

  const start = () => {
    if (status.value == ETimerStatus.RUNNING) return
    status.value = ETimerStatus.RUNNING
    timerIntervalId.value = setInterval(tick, 1000)
    tick()
  }

  const stop = () => {
    if (timerIntervalId.value === null) return

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

  onMounted(start)
  onBeforeUnmount(end)

  return {
    start,
    stop,
    // reset,
    end,
    // set,
    status,
    seconds,
    // timerIntervalId,
  }
}
