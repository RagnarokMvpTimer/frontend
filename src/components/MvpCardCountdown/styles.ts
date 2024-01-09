import styled, { css } from 'styled-components';

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
  color: var(--timers_normal);

  ${({ respawningSoon }) =>
    respawningSoon &&
    css`
      color: var(--timers_respawning);
    `}

  ${({ missedRespawn }) =>
    missedRespawn &&
    css`
      color: var(--timers_passed);
    `}
`;
