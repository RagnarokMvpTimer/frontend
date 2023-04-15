import { useCallback, useMemo, useState } from 'react';
import { Clipboard, Check } from '@styled-icons/feather';
import { FormattedMessage } from 'react-intl';

import { IMapMark } from '../../interfaces';
import { useKey } from '../../hooks';

import { ModalBase } from '../ModalBase';
import { Map } from '../Map';

import { Modal, Name, NavCommand, Warning, CloseButton } from './styles';

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

  const navString = useMemo(() => `/navi ${deathMap} 50/50`, [deathMap]);

  const copyToClipboard = useCallback(() => {
    if (copied) return;

    setCopied(true);
    navigator.clipboard.writeText(navString);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }, [copied, navString]);

  useKey('Escape', close);

  return (
    <ModalBase>
      <Modal>
        <Name>{deathMap}</Name>

        <Map mapName={deathMap} coordinates={deathPosition} />

        <NavCommand
          onClick={copyToClipboard}
          disabled={copied}
          title='Copy to Clipboard'
        >
          {copied ? (
            <>
              <Check />
              <FormattedMessage id='copied' />
            </>
          ) : (
            <>
              <Clipboard />
              {navString}
            </>
          )}
        </NavCommand>

        <Warning>
          <FormattedMessage id='nav_command_warning' />
        </Warning>

        <CloseButton onClick={close}>
          <FormattedMessage id='close' />
        </CloseButton>
      </Modal>
    </ModalBase>
  );
}
