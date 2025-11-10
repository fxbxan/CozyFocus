import type { ComputedRef, Ref } from 'vue'

export interface ITimerContext extends ITime {
  status: Ref<ETimerStatus>
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

export interface ITime {
  minutes: Ref<number>
  seconds: Ref<number>
  formattedTime: ComputedRef<string>
  totalSecondsLeft: Ref<number>
  isUnderMaxTime: ComputedRef<boolean>
}
