import { useEffect, useState } from 'react';
import moment, { Moment, Duration } from 'moment';

export function useCountown(startTime: Moment, delay = 1000) {
  const [time, setTime] = useState(startTime || moment());
  const [duration, setDuration] = useState<Duration>();
  const [isRunning, setIsRunning] = useState(true);

  function pause() {
    setIsRunning(false);
  }

  function resume() {
    setIsRunning(true);
  }

  useEffect(() => {
    const interval = setInterval(
      () => {
        const diff = time.diff(moment());
        const dur = moment.duration(diff);
        setDuration(dur);
      },
      isRunning ? delay : 0
    );

    return () => clearInterval(interval);
  }, [time, delay, isRunning]);

  useEffect(() => {
    setTime(startTime);
  }, [startTime]);

  return { duration, isRunning, pause, resume };
}
