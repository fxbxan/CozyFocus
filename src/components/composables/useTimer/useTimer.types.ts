import type { ComputedRef, Ref } from 'vue'

export interface ITimerContext {
  formattedTime: ComputedRef<string>
  totalSecondsLeft: Ref<number>
  isRunning: Ref<boolean>
  // mm: Ref<number>
  // ss: Ref<number>
  set: (minutes: number, seconds: number) => void
  start: () => void
  stop: () => void
  reset: () => void
  end: () => void
  onFinish?: () => void
}

export interface ITime {
  minutes: number
  seconds: number
}
