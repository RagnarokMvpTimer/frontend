import { useEffect, useState } from 'react';
import moment, { Moment } from 'moment';

import { useCountown } from '../../hooks/useCountdown';

import { Bold } from './styles';

interface MvpCardCountdownProps {
  nextRespawn: Moment;
}

const SOON_THRESHOLD = 300000; // 5 minutes

export function MvpCardCountdown({ nextRespawn }: MvpCardCountdownProps) {
  const { duration, isRunning } = useCountown(nextRespawn);
  const [timeString, setTimeString] = useState<string>('');
  const [respawningSoon, setRespawningSoon] = useState(false);
  const [isBefore, setIsBefore] = useState(false);

  useEffect(() => {
    if (!duration || !isRunning) return;

    const durationAsMs = duration.asMilliseconds();
    const soon = durationAsMs >= 0 && durationAsMs <= SOON_THRESHOLD;

    soon
      ? setRespawningSoon(true)
      : durationAsMs <= 0
      ? (setIsBefore(true), setRespawningSoon(false))
      : null;
  }, [duration, isRunning]);

  useEffect(() => {
    if (!duration || !isRunning) return;

    const negative = duration.asMilliseconds() < 0;

    const time = [duration.hours(), duration.minutes(), duration.seconds()]
      .map((time) => String(time).replace('-', '').padStart(2, '0'))
      .join(':');

    setTimeString(`${negative ? '-' : ''}${time}`);
  }, [duration, isRunning]);

  return (
    <Bold respawningSoon={respawningSoon} isBefore={isBefore}>
      {timeString}
    </Bold>
  );
}
