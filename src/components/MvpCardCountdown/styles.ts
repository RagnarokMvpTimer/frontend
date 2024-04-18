import { styled } from '@linaria/react';

interface TimerProps {
  respawningSoon: boolean;
  missedRespawn: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  white-space: pre-wrap;
  color: var(--mvpCard_text);
`;

export const RespawnTimeText = styled.span<TimerProps>`
  font-weight: bold;
  color: ${({ respawningSoon, missedRespawn }) =>
    respawningSoon
      ? 'var(--timers_respawning)'
      : missedRespawn
      ? 'var(--timers_passed)'
      : 'var(--mvpCard_text)'};
`;
