import type { Ref } from 'vue'

export interface ITimerContext {
  readonly status: Ref<ETimerStatus>
  readonly seconds: Ref<number>
  set: (s: number) => void
  start: () => void
  stop: () => void
}

export enum ETimerStatus {
  RUNNING = 'Running',
  STOP = 'Stop',
}
