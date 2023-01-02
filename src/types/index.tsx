interface UseTimerProps {
  hours?: number;
  minutes?: number;
  seconds: number;
}

interface UseTimerReturn {
  hoursLeft: number;
  minutesLeft: number;
  secondsLeft: number;
  distance: number;
  resetTimeFunction: () => void;
}

export type UseTimer = (props: UseTimerProps) => UseTimerReturn;

export interface TimerValuesState {
  hours: number;
  minutes: number;
  seconds: number;
  distance: number;
}
