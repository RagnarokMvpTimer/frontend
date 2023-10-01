import { useCallback, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import type { Duration } from 'dayjs/plugin/duration';

export function useCountdown(startTime = dayjs(), delay = 1000) {
  const [duration, setDuration] = useState<Duration>();
  const [isRunning, setIsRunning] = useState(true);

  const pause = useCallback(() => setIsRunning(false), []);
  const resume = useCallback(() => setIsRunning(true), []);

  useEffect(() => {
    const interval = setInterval(
      () => {
        const diff = startTime.diff(dayjs());
        const dur = dayjs.duration(diff);
        setDuration(dur);
      },
      isRunning ? delay : 0
    );

    return () => clearInterval(interval);
  }, [startTime, delay, isRunning]);

  return { duration, isRunning, pause, resume };
}
