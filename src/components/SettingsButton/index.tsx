import { useContext } from 'react';
import { Settings } from '@styled-icons/feather';

import { Container } from './styles';
import { SettingsContext } from '../../contexts/SettingsContext';

export function SettingsButton() {
  const { toggleSettingsModal } = useContext(SettingsContext);

  return (
    <Container onClick={toggleSettingsModal}>
      <Settings />
    </Container>
  );
}
