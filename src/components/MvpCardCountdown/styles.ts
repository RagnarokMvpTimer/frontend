import styled from 'styled-components';

interface TimerProps {
  respawningSoon: boolean;
  missedRespawn: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span``;

export const Bold = styled.span<TimerProps>`
  font-weight: bold;

  color: ${({ theme, respawningSoon, missedRespawn }) =>
    respawningSoon
      ? theme.colors.timers.respawning
      : missedRespawn
      ? theme.colors.timers.passed
      : theme.colors.timers.normal};
`;
