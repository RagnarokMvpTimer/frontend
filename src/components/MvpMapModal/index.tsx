import { useEffect, useState } from 'react';
import { Clipboard, Check } from '@styled-icons/feather';

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
  const [copied, setCopied] = useState(false);

  const navString = `/navi ${deathMap} 50/50`;

  function copyToClipboard() {
    if (copied) return;

    setCopied(true);
    navigator.clipboard.writeText(navString);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
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
        <NavCommand onClick={copyToClipboard} disabled={copied}>
          {copied ? (
            <>
              <Check />
              {'Copied !'}
            </>
          ) : (
            <>
              <Clipboard />
              {navString}
            </>
          )}
        </NavCommand>

        <CloseButton onClick={close}>Close</CloseButton>
      </Modal>
    </Container>
  );
}
