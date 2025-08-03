import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { ModalBase } from '../ModalBase';
import { ModalCloseIconButton } from '@/ui/ModalCloseIconButton';

import { SUPPORTED_SERVERS } from '@/constants';
import { useSettings } from '@/contexts/SettingsContext';
import { SERVERS } from '@/utils';
import { useClickOutside, useScrollBlock, useKey } from '@/hooks';
import { ModalPrimaryButton } from '@/ui/ModalPrimaryButton';
import {
  Modal,
  Title,
  ServerList,
  ServerItem,
  UnsupportedMessage,
} from './styles';

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
  useKey('Escape', close);

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
          {SUPPORTED_SERVERS.map((i) => (
            <ServerItem
              key={i}
              onClick={() => setSelectedServer(i)}
              active={selectedServer === i}
            >
              {i}
            </ServerItem>
          ))}
        </ServerList>

        <UnsupportedMessage>
          <FormattedMessage id='no_longer_supported_servers' />
        </UnsupportedMessage>

        <ServerList>
          {serversNames
            .filter((s) => !SUPPORTED_SERVERS.includes(s))
            .map((i) => (
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
