import { FormattedMessage } from 'react-intl';

import { IMapMark } from '../../interfaces';
import { useKey } from '../../hooks';

import { ModalBase } from '../ModalBase';
import { Map } from '../Map';

import { Modal, Name, Warning, CloseButton } from './styles';
import { NaviCommand } from '../NaviCommand';

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
  useKey('Escape', close);

  return (
    <ModalBase>
      <Modal>
        <Name>{deathMap}</Name>

        <Map mapName={deathMap} coordinates={deathPosition} />

        <NaviCommand mapName={deathMap} />

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
