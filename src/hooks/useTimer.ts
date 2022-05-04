import { useEffect, useState } from 'react';
import moment, { Moment } from 'moment';

const currentTime = () => moment();

export function useTimer(startTime?: Moment) {
  const [time, setTime] = useState(startTime || currentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(currentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { time };
}
