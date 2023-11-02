import { Settings } from '@styled-icons/feather';

import { Container } from './styles';
import { useSettings } from '@/contexts/SettingsContext';

export function SettingsButton() {
  const { toggleSettingsModal } = useSettings();

  return (
    <Container onClick={toggleSettingsModal}>
      <Settings />
    </Container>
  );
}
