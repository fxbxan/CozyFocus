export const timeToSeconds = (minutes: number = 0, seconds: number = 0): number => {
  return minutes * 60 + seconds
}

export const formatTime = (s: number) =>
  `${Math.floor(s / 60)}`.padStart(2, '0') + ':' + `${s % 60}`.padStart(2, '0')
