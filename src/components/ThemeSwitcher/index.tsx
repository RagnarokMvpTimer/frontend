import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Moon, Sun } from '@styled-icons/feather';

import { Container } from './styles';
import { SettingsContext } from '../../contexts/SettingsContext';

export function ThemeSwitcher() {
  const { id } = useContext(ThemeContext);
  const { toggleTheme } = useContext(SettingsContext);

  return (
    <Container onClick={toggleTheme}>
      {id === 'dark' ? <Sun /> : <Moon />}
    </Container>
  );
}
