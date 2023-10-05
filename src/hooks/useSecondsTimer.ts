import { useEffect, useState } from 'react';

export function useSecondsTimer(initialSeconds: number) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s - 1), 1000);
    if (seconds === 0) clearInterval(interval);
    return () => clearInterval(interval);
  }, [seconds]);

  return [seconds];
}
