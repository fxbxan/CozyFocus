import type { Ref } from 'vue'

export interface ITimerContext extends ITime {
  readonly status: Ref<ETimerStatus>
  set: (s: number) => void
  start: () => void
  stop: () => void
  // reset: () => void
  end: () => void
}

export enum ETimerStatus {
  RUNNING = 'Running',
  STOP = 'Stopped',
  FINISH = 'Finished',
}

// seconds should be read-only to avoid mutation
export interface ITime {
  readonly seconds: Ref<number>
}
