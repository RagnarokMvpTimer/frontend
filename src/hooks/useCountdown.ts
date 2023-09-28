import { useCallback, useEffect, useState } from 'react';
import moment, { Duration } from 'moment';

export function useCountdown(startTime = moment(), delay = 1000) {
  const [duration, setDuration] = useState<Duration>();
  const [isRunning, setIsRunning] = useState(true);

  const pause = useCallback(() => setIsRunning(false), []);
  const resume = useCallback(() => setIsRunning(true), []);

  useEffect(() => {
    const interval = setInterval(
      () => {
        const diff = startTime.diff(moment());
        const dur = moment.duration(diff);
        setDuration(dur);
      },
      isRunning ? delay : 0
    );

    return () => clearInterval(interval);
  }, [startTime, delay, isRunning]);

  return { duration, isRunning, pause, resume };
}
