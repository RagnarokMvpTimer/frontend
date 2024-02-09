import { useCallback, useEffect, useState } from 'react';
import dayjs, { type Dayjs } from 'dayjs';
import type { Duration } from 'dayjs/plugin/duration';

function timeToDuration(startTime: Dayjs) {
  const diff = startTime.diff(dayjs());
  return dayjs.duration(diff);
}

export function useCountdown(startTime = dayjs(), delay = 1000) {
  const [duration, setDuration] = useState<Duration>(timeToDuration(startTime));
  const [isRunning, setIsRunning] = useState(true);

  const pause = useCallback(() => setIsRunning(false), []);
  const resume = useCallback(() => setIsRunning(true), []);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setDuration(timeToDuration(startTime));
      },
      isRunning ? delay : 99999999999999
    );

    return () => clearInterval(interval);
  }, [startTime, delay, isRunning]);

  return { duration, isRunning, pause, resume };
}
