import type { Ref, WritableComputedRef } from 'vue'

export interface ITimerContext {
  readonly status: Ref<ETimerStatus>
  readonly remainingSeconds: Ref<number>
  start: () => void
  stop: () => void
  minutes: WritableComputedRef<number>
  seconds: WritableComputedRef<number>
}

export enum ETimerStatus {
  RUNNING = 'Running',
  STOP = 'Stop',
}
