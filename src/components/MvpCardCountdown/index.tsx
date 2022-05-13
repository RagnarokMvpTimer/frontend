import { useEffect, useState } from 'react';
import moment, { Moment } from 'moment';

import { useCountown } from '../../hooks/useCountdown';

import { Bold } from './styles';

interface MvpCardCountdownProps {
  nextRespawn: Moment;
}

export function MvpCardCountdown({ nextRespawn }: MvpCardCountdownProps) {
  const { duration, isRunning, pause, resume } = useCountown(nextRespawn);
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    if (!duration || !isRunning) return;

    const time = `${String(duration.hours()).padStart(2, '0')}:${String(
      duration.minutes()
    ).padStart(2, '0')}:${String(duration.seconds()).padStart(2, '0')}`;

    setTimeString(time);
  }, [duration, isRunning]);

  return <Bold>{timeString}</Bold>;
}
