import { useState } from 'react';
import { Settings } from '@styled-icons/feather';
import { ModalSettings } from '@/modals';
import { Container } from './styles';

export function SettingsButton() {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  return (
    <>
      <Container>
        <Settings onClick={() => setIsSettingsModalOpen(true)} />
      </Container>

      {isSettingsModalOpen && (
        <ModalSettings onClose={() => setIsSettingsModalOpen(false)} />
      )}
    </>
  );
}
