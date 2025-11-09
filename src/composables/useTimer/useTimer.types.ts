import type { ComputedRef, Ref } from 'vue'

export interface ITimerContext {
  formattedTime: ComputedRef<string>
  totalSecondsLeft: Ref<number>
  status: Ref<ETimerStatus>
  minutes: Ref<number>
  seconds: Ref<number>
  set: (minutes: number, seconds: number) => void
  start: () => void
  stop: () => void
  reset: () => void
  end: () => void
  onFinish?: () => void
}

export enum ETimerStatus {
  RUNNING = 'Running',
  STOP = 'Stopped',
  FINISH = 'Finished',
}
