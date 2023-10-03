import dayjs, { Dayjs } from 'dayjs';

import { useCountdown } from '../../hooks';
import { GetTranslateText } from '../../utils/GetTranslateText';

import { Container, Text, Bold } from './styles';

interface MvpCardCountdownProps {
  nextRespawn: Dayjs;
}

const SOON_THRESHOLD = 600000; // 10 minutes

export function MvpCardCountdown({ nextRespawn }: MvpCardCountdownProps) {
  const { duration } = useCountdown(nextRespawn.add(10, 'm'));

  const durationAsMs = duration?.asMilliseconds();
  const respawningSoon = durationAsMs >= 0 && durationAsMs <= SOON_THRESHOLD;
  const missedRespawn = durationAsMs < 0;

  const respawnText = respawningSoon
    ? GetTranslateText('respawning')
    : missedRespawn
    ? GetTranslateText('already_respawned')
    : GetTranslateText('respawn_in');

  const isMoreThan24Hours = dayjs().diff(nextRespawn, 'h') >= 24;

  const formattedTimeString =
    duration &&
    (isMoreThan24Hours
      ? duration?.humanize(true)
      : `${missedRespawn ? '-' : ''}${duration
          .format('HH:mm:ss')
          .split(':')
          .map((time) => time.replace('-', '').padStart(2, '0'))
          .join(':')}`);

  return (
    <Container>
      <Text>{respawnText}</Text>
      <Bold respawningSoon={respawningSoon} missedRespawn={missedRespawn}>
        {formattedTimeString || '-- : -- : --'} {'\n'}
      </Bold>
    </Container>
  );
}
