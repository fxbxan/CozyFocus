import type { Ref } from 'vue'

export interface ITimerContext extends ITime {
  status: Ref<ETimerStatus>
  // set: (minutes: number, seconds: number) => void
  start: () => void
  stop: () => void
  // reset: () => void
  end: () => void
  // onFinish?: () => void
}

export enum ETimerStatus {
  RUNNING = 'Running',
  STOP = 'Stopped',
  FINISH = 'Finished',
}

// seconds should be read-only to avoid mutation
export interface ITime {
  // minutes: Ref<number>
  seconds: Ref<number>
  // totalSecondsLeft: Ref<number>
  // isUnderMaxTime: ComputedRef<boolean>
}
