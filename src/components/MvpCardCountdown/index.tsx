import { useEffect, useState } from 'react';
import type { Dayjs } from 'dayjs';

import { useCountdown } from '../../hooks';
import { GetTranslateText } from '../../utils/GetTranslateText';

import { Container, Text, Bold } from './styles';

interface MvpCardCountdownProps {
  nextRespawn: Dayjs;
}

const SOON_THRESHOLD = 600000; // 10 minutes

export function MvpCardCountdown({ nextRespawn }: MvpCardCountdownProps) {
  const { duration, isRunning } = useCountdown(nextRespawn.add(10, 'm'));
  const [respawningSoon, setRespawningSoon] = useState(false);
  const [isBefore, setIsBefore] = useState(false);

  const respawnText = respawningSoon
    ? GetTranslateText('respawning')
    : isBefore
    ? GetTranslateText('already_respawned')
    : GetTranslateText('respawn_in');

  useEffect(() => {
    if (!duration || !isRunning) return;

    const durationAsMs = duration.asMilliseconds();
    const soon = durationAsMs >= 0 && durationAsMs <= SOON_THRESHOLD;

    soon
      ? (setIsBefore(false), setRespawningSoon(true))
      : durationAsMs <= 0
      ? (setIsBefore(true), setRespawningSoon(false))
      : null;
  }, [duration, isRunning]);

  const missedRespawn = duration && duration.asMilliseconds() < 0;
  const timeString =
    duration &&
    isRunning &&
    `${missedRespawn ? '-' : ''}${[
      duration.hours(),
      duration.minutes(),
      duration.seconds(),
    ]
      .map((time) => String(time).replace('-', '').padStart(2, '0'))
      .join(':')}`;

  useEffect(() => {
    setRespawningSoon(false);
    setIsBefore(false);
  }, [nextRespawn]);

  return (
    <Container>
      <Text>{respawnText}</Text>
      <Bold respawningSoon={respawningSoon} isBefore={isBefore}>
        {timeString || '-- : -- : --'} {'\n'}
      </Bold>
    </Container>
  );
}
