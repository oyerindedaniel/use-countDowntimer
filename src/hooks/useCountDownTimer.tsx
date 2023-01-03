import { useState, useCallback, useMemo, useEffect } from "react";
import { UseTimer, TimerValuesState } from "../types";

const useTimer: UseTimer = ({
  days = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
  executeFunctionOnExpired,
}) => {
  const [dateNow, setDateNow] = useState<Date>(new Date());

  const setTimeAhead: number = useMemo(() => {
    let date = dateNow;
    date.setDate(date.getDate() + days);
    date.setHours(date.getHours() + hours);
    date.setMinutes(date.getMinutes() + minutes);
    date.setSeconds(date.getSeconds() + seconds);

    return date.getTime();
  }, [days, hours, minutes, seconds, dateNow]);

  const [timerValues, setTimerValues] = useState<TimerValuesState>({
    days,
    hours,
    minutes,
    seconds,
    distance: setTimeAhead - Date.now(),
  });

  const timerFunction: () => void = useCallback(() => {
    const distance = setTimeAhead - Date.now() + 1000;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setTimerValues({ days, hours, minutes, seconds, distance });
  }, [setTimeAhead]);

  const resetTimeFunction: () => void = () => {
    setDateNow(new Date(Date.now() + 1000));
  };

  useEffect(() => {
    let timerInterval: any;

    if (timerValues?.distance <= 1000) {
      executeFunctionOnExpired();
      return clearInterval(timerInterval);
    }

    timerInterval = setInterval(timerFunction, 1000);

    return () => clearInterval(timerInterval);
  }, [timerFunction, timerValues?.distance, executeFunctionOnExpired]);

  return {
    ...timerValues,
    resetTimeFunction,
  };
};

export default useTimer;
