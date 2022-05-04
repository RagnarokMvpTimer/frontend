import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Moon, Sun } from '@styled-icons/feather';

import { Container } from './styles';

interface Props {
  toggleTheme(): void;
}

export function ThemeSwitcher({ toggleTheme }: Props) {
  const { id } = useContext(ThemeContext);

  return (
    <Container onClick={toggleTheme}>
      {id === 'dark' ? <Sun /> : <Moon />}
    </Container>
  );
}
