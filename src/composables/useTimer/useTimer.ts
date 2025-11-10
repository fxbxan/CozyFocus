import { ref, computed, onBeforeUnmount } from 'vue'
import { type ITimerContext, ETimerStatus } from './useTimer.types'

export function useTimer(): ITimerContext {
  const minutes = ref(0)
  const seconds = ref(0)

  const status = ref<ETimerStatus>(ETimerStatus.STOP)
  const intervalMs = 1000
  const totalSecondsLeft = ref(0)

  let lastSavedMinute: number
  let lastSavedSecond: number

  let timerId: number

  // Made to prevent user from typing enormous numbers.
  const isUnderMaxTime = computed(() => minutes.value > 99 || seconds.value > 60)

  const set = (m: number, s: number) => {
    if (status.value == ETimerStatus.RUNNING) return

    minutes.value = m
    seconds.value = s

    lastSavedMinute = m
    lastSavedSecond = s
  }

  const tick = () => {
    if (seconds.value == 0 && minutes.value == 0) {
      end()
      return
    }

    if (seconds.value == 0 && minutes.value > 0) {
      seconds.value = 60
      minutes.value -= 1
    }
    seconds.value -= 1
    console.log(minutes.value, seconds.value)
  }

  const start = () => {
    if (status.value == ETimerStatus.RUNNING || isUnderMaxTime.value) return
    status.value = ETimerStatus.RUNNING
    timerId = setInterval(tick, intervalMs)
    tick()
  }

  const stop = () => {
    if (timerId === null) return

    clearInterval(timerId)
    const lastKnownMinute = minutes.value
    const lastKnownSecond = seconds.value
    set(lastKnownMinute, lastKnownSecond)
    status.value = ETimerStatus.STOP
  }

  const end = () => {
    clearInterval(timerId)
    status.value = ETimerStatus.FINISH
  }

  const reset = () => {
    if (status.value == ETimerStatus.RUNNING) return
    set(lastSavedMinute, lastSavedSecond)
  }

  // format to 00:00
  const formattedTime = computed(
    () =>
      `${minutes.value.toString().padStart(2, '0')}:${seconds.value.toString().padStart(2, '0')}`,
  )
  onBeforeUnmount(end)

  return {
    formattedTime,
    totalSecondsLeft,
    start,
    stop,
    reset,
    end,
    set,
    status,
    minutes,
    seconds,
    isUnderMaxTime,
  }
}
