import { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

const currentTime = () => dayjs();

export function useTimer(startTime?: Dayjs) {
  const [time, setTime] = useState(startTime || currentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(currentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return [time];
}
