import { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import dayjs, { type Dayjs } from 'dayjs';

import { useCountdown } from '@/hooks';
import { RESPAWN_TIMER_SOON_THRESHOLD_MS } from '@/constants';
import { respawnAt } from '@/utils';

import { Container, RespawnTimeText } from './styles';

interface MvpCardCountdownProps {
  nextRespawn: Dayjs;
  respawnAsCountdown?: boolean;
}

export function MvpCardCountdown({
  nextRespawn,
  respawnAsCountdown,
}: MvpCardCountdownProps) {
  const { duration } = useCountdown(
    nextRespawn.add(RESPAWN_TIMER_SOON_THRESHOLD_MS, 'ms')
  );

  const durationAsMs = duration?.asMilliseconds();
  const respawningSoon =
    durationAsMs >= 0 && durationAsMs <= RESPAWN_TIMER_SOON_THRESHOLD_MS;
  const missedRespawn = durationAsMs < 0;

  const isMoreThan24Hours = dayjs().diff(nextRespawn, 'h') >= 24;

  const respawnTime = useMemo(() => respawnAt(nextRespawn), [nextRespawn]);

  const formattedTimeString =
    respawnAsCountdown && duration
      ? isMoreThan24Hours
        ? duration.humanize(true)
        : duration
            .format('HH:mm:ss')
            .split(':')
            .map((time) => time.replace('-', '').padStart(2, '0'))
            .join(':')
      : missedRespawn
      ? duration.humanize(true)
      : respawnTime;

  return (
    <Container>
      <FormattedMessage
        id={
          respawningSoon
            ? 'respawning'
            : missedRespawn
            ? 'already_respawned'
            : respawnAsCountdown
            ? 'respawn_in'
            : 'respawn_at'
        }
      />

      <RespawnTimeText
        respawningSoon={respawningSoon}
        missedRespawn={missedRespawn}
      >
        {formattedTimeString || '-- : -- : --'} {'\n'}
      </RespawnTimeText>
    </Container>
  );
}
