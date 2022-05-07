import styled from 'styled-components';
import { Themes } from '../../styles/Themes';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 5px 0;

  background: ${({ theme }) =>
    theme.id === 'dark'
      ? Themes.light.colors.primary
      : Themes.dark.colors.primary};

  color: ${({ theme }) => (theme.id === 'dark' ? 'black' : 'white')};
  font-weight: bold;
`;
