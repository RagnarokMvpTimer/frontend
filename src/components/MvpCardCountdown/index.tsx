import { FormattedMessage } from 'react-intl';
import dayjs, { type Dayjs } from 'dayjs';
import type { Duration } from 'dayjs/plugin/duration';

import { useCountdown } from '@/hooks';
import { RESPAWN_TIMER_SOON_THRESHOLD_MS } from '@/constants';
import { respawnAt } from '@/utils';

import { Container, RespawnTimeText } from './styles';

interface MvpCardCountdownProps {
  nextRespawn: Dayjs;
  respawnAsCountdown?: boolean;
  onTriggerNotification?: () => void;
}

function getTimeString(
  nextRespawn: Dayjs,
  duration: Duration,
  respawnAsCountdown?: boolean,
  missedRespawn?: boolean
) {
  if (respawnAsCountdown && duration) {
    const isMoreThan24Hours = dayjs().diff(nextRespawn, 'h') >= 24;

    if (isMoreThan24Hours) return duration.humanize(true);

    return duration
      .format('HH:mm:ss')
      .split(':')
      .map((time) => time.replace('-', '').padStart(2, '0'))
      .join(':');
  }

  if (missedRespawn) return duration.humanize(true);

  return respawnAt(nextRespawn);
}

export function MvpCardCountdown({
  nextRespawn,
  respawnAsCountdown,
  onTriggerNotification,
}: MvpCardCountdownProps) {
  const { duration } = useCountdown(nextRespawn);

  const durationWithRespawnDelay = duration.add(
    RESPAWN_TIMER_SOON_THRESHOLD_MS,
    'ms'
  );
  const durationAsMs = durationWithRespawnDelay.asMilliseconds();
  const respawningSoon =
    durationAsMs >= 0 && durationAsMs <= RESPAWN_TIMER_SOON_THRESHOLD_MS;
  const missedRespawn = durationAsMs < 0;

  const formattedTimeString = getTimeString(
    nextRespawn,
    respawningSoon || missedRespawn ? durationWithRespawnDelay : duration,
    respawnAsCountdown,
    missedRespawn
  );

  const shouldTriggerNotification =
    Math.trunc(durationWithRespawnDelay.asSeconds()) ===
    RESPAWN_TIMER_SOON_THRESHOLD_MS / 1000;

  if (onTriggerNotification && shouldTriggerNotification) {
    onTriggerNotification();
  }

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
        title={nextRespawn.format('HH:mm:ss')}
      >
        {formattedTimeString || '-- : -- : --'} {'\n'}
      </RespawnTimeText>
    </Container>
  );
}
