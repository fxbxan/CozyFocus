import { inject, type InjectionKey, type Ref, type WritableComputedRef } from 'vue'

export const TimerContextKey = Symbol('TimerContext') as InjectionKey<ITimerContext>
export interface ITimerContext {
  readonly status: Ref<ETimerStatus>
  readonly remainingSeconds: Ref<number>
  readonly totalDuration: Ref<number>
  start: () => void
  stop: () => void
  minutes: WritableComputedRef<number>
  seconds: WritableComputedRef<number>
}

export enum ETimerStatus {
  RUNNING = 'Running',
  STOP = 'Stop',
  IDLE = 'Idle',
}

export function useTimerContext() {
  const context = inject(TimerContextKey)
  if (!context) {
    throw new Error('useTimerContext must be used within a TimerProvider')
  }
  return context
}
