import styled from 'styled-components';

interface TimerProps {
  respawningSoon: boolean;
  missedRespawn: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.colors.mvpCard.text};
`;

export const RespawnTimeText = styled.span<TimerProps>`
  font-weight: bold;

  color: ${({ theme, respawningSoon, missedRespawn }) =>
    respawningSoon
      ? theme.colors.timers.respawning
      : missedRespawn
      ? theme.colors.timers.passed
      : theme.colors.timers.normal};
`;
