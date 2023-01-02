import { useState, useCallback, useMemo, useEffect } from "react";
import { UseTimer, TimerValuesState } from "../types";

const useTimer: UseTimer = ({ hours = 0, minutes = 0, seconds = 0 }) => {
  const [dateNow, setDateNow] = useState<Date>(new Date());

  const setTimeAhead: number = useMemo(() => {
    let date = dateNow;
    date.setHours(
      date.getHours() + hours,
      date.getMinutes() + minutes,
      date.getSeconds() + seconds
    );
    return date.getTime();
  }, [hours, minutes, seconds, dateNow]);

  const [timerValues, setTimerValues] = useState<TimerValuesState>({
    hours,
    minutes,
    seconds,
    distance: setTimeAhead - new Date().getTime(),
  });

  const timerFunction: () => void = useCallback(() => {
    const distance = setTimeAhead - new Date().getTime() + 1000;

    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setTimerValues({ hours, minutes, seconds, distance });
  }, [setTimeAhead]);

  const resetTimeFunction: () => void = () => {
    setDateNow(new Date(new Date().getTime() + 1000));
  };

  useEffect(() => {
    let timerInterval: any;

    if (timerValues?.distance <= 1000) {
      console.log(timerValues?.distance);
      return clearInterval(timerInterval);
    }

    timerInterval = setInterval(timerFunction, 1000);

    return () => clearInterval(timerInterval);
  }, [timerFunction, timerValues?.distance]);

  return {
    hoursLeft: timerValues.hours,
    minutesLeft: timerValues.minutes,
    secondsLeft: timerValues.seconds,
    distance: timerValues.distance,
    resetTimeFunction,
  };
};

export default useTimer;
