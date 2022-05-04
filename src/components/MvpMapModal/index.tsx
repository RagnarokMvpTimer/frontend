import { useEffect } from 'react';
import { Copy } from '@styled-icons/feather';

import { IMapMark } from '../../interfaces';
import { Map } from '../Map';

import { Container, Modal, Name, NavCommand, CloseButton } from './styles';

interface MvpMapModalProps {
  deathMap: string;
  deathPosition?: IMapMark;
  close: () => void;
}

export function MvpMapModal({
  deathMap,
  deathPosition,
  close,
}: MvpMapModalProps) {
  const navString = `/navi ${deathMap} 50/50`;

  function copyToClipboard() {
    navigator.clipboard.writeText(navString);
  }

  useEffect(() => {
    const handleClose = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handleClose);
    return () => document.removeEventListener('keydown', handleClose);
  }, []);

  return (
    <Container>
      <Modal>
        <Name>{deathMap}</Name>
        <Map mapName={deathMap} coordinates={deathPosition} />
        <NavCommand onClick={copyToClipboard}>
          <Copy size={18} /> {navString}
        </NavCommand>

        <CloseButton onClick={close}>Close</CloseButton>
      </Modal>
    </Container>
  );
}
