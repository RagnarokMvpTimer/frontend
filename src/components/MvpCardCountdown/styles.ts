import styled from 'styled-components';

interface Props {
  isBefore: boolean;
  respawningSoon: boolean;
}
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span``;

export const Bold = styled.span<Props>`
  font-weight: bold;

  color: ${({ theme, respawningSoon, isBefore }) =>
    respawningSoon
      ? theme.colors.timers.respawning
      : isBefore
      ? theme.colors.timers.passed
      : theme.colors.timers.normal};
`;
