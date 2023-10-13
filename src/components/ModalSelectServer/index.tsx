import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { ModalBase } from '../ModalBase';
import { ModalCloseIconButton } from '../../ui/ModalCloseIconButton';

import { useSettings } from '../../contexts/SettingsContext';
import { SERVERS } from '../../utils';
import { useClickOutside, useScrollBlock } from '../../hooks';

import { ModalPrimaryButton } from '../../ui/ModalPrimaryButton';
import { Modal, Title, ServerList, ServerItem } from './styles';

interface ModalSelectServerProps {
  close: () => void;
}

const serversNames = Object.keys(SERVERS).sort((a, b) =>
  a.toLowerCase().localeCompare(b.toLowerCase())
);

export function ModalSelectServer({ close }: ModalSelectServerProps) {
  const { server, changeServer } = useSettings();
  const [selectedServer, setSelectedServer] = useState(server);

  useScrollBlock(true);

  const modalRef = useClickOutside(close);

  function confirmChange() {
    changeServer(selectedServer);
    close();
  }

  return (
    <ModalBase>
      <Modal ref={modalRef}>
        <ModalCloseIconButton onClick={close} />

        <Title>
          <FormattedMessage id='select_server' />
        </Title>

        <ServerList>
          {serversNames.map((i) => (
            <ServerItem
              key={i}
              onClick={() => setSelectedServer(i)}
              active={selectedServer === i}
            >
              {i}
            </ServerItem>
          ))}
        </ServerList>

        <ModalPrimaryButton onClick={confirmChange}>
          <FormattedMessage id='confirm' />
        </ModalPrimaryButton>
      </Modal>
    </ModalBase>
  );
}
