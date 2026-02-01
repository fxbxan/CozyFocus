import type { Ref, WritableComputedRef } from 'vue'

export interface ITimerContext {
  readonly status: Ref<ETimerStatus>
  seconds: WritableComputedRef<number>
  start: () => void
  stop: () => void
  displayMinutes: WritableComputedRef<number>
  displaySeconds: WritableComputedRef<number>
}

export enum ETimerStatus {
  RUNNING = 'Running',
  STOP = 'Stop',
}
