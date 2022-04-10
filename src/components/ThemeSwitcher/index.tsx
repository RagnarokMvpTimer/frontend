import { useState, useContext } from 'react';
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
      {id === 'light' ? (
        <Moon size={24} color={'#fff'} />
      ) : (
        <Sun size={24} color={'#fff'} />
      )}
    </Container>
  );
}
