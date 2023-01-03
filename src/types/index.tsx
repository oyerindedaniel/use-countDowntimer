interface UseTimerProps {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds: number;
  executeFunctionOnExpired: any;
}

interface UseTimerReturn {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  distance: number;
  resetTimeFunction: () => void;
}

export type UseTimer = (props: UseTimerProps) => UseTimerReturn;

export interface TimerValuesState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  distance: number;
}
