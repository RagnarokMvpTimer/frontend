import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

const currentTime = () => dayjs();

export function useTimer(startTime = currentTime()) {
  const [time, setTime] = useState(startTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(currentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return [time];
}
