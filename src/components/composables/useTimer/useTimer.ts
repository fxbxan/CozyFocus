import { ref, computed, onBeforeUnmount } from 'vue'
import type { ITimerContext } from './useTimer.types'

export function useTimer(): ITimerContext {
  // if (!minutes || !seconds) console.error('useTimer is missing seconds argument!')

  const minutes = ref(0)
  const seconds = ref(0)

  const isRunning = ref(false)
  const intervalMs = 1000
  const totalSecondsLeft = ref(0)
  const initialTime = minutes.value * 60 + seconds.value
  let timerId: number

  const set = (m: number, s: number) => {
    minutes.value = m
    seconds.value = s
    totalSecondsLeft.value = m * 60 + s
  }

  const tick = () => {
    if (totalSecondsLeft.value == 0) {
      end()
      return
    }
    totalSecondsLeft.value -= 1
  }

  const start = () => {
    if (isRunning.value) return
    isRunning.value = true
    timerId = setInterval(tick, intervalMs)
    tick()
    console.log(minutes, seconds)
  }

  const stop = () => {
    if (timerId === null) return
    clearInterval(timerId)
    isRunning.value = false
  }

  const end = () => {
    clearInterval(timerId)
    isRunning.value = false
    console.log('Finished')
  }

  const reset = () => {
    stop()
    totalSecondsLeft.value = initialTime
  }

  // format to 00:00
  const formattedTime = computed(() => {
    const mm = Math.floor(totalSecondsLeft.value / 60)
    const ss = totalSecondsLeft.value % 60

    const formatted = `${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`
    return formatted
  })

  onBeforeUnmount(end)

  return { formattedTime, totalSecondsLeft, start, stop, reset, end, set, isRunning }
}
