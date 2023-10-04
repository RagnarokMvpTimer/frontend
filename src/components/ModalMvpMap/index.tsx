import { FormattedMessage } from 'react-intl';

import { useClickOutside, useKey, useScrollBlock } from '../../hooks';

import { ModalBase } from '../ModalBase';
import { Map } from '../Map';
import { NaviCommand } from '../NaviCommand';

import { ModalPrimaryButton } from '../../ui/ModalPrimaryButton';
import { Modal, Name, Warning } from './styles';

interface MvpMapModalProps {
  deathMap: string;
  deathPosition?: IMapMark;
  close: () => void;
}

export function ModalMvpMap({
  deathMap,
  deathPosition,
  close,
}: MvpMapModalProps) {
  useScrollBlock(true);
  useKey('Escape', close);
  const modalRef = useClickOutside({ onClick: close });

  return (
    <ModalBase>
      <Modal ref={modalRef}>
        <Name>{deathMap}</Name>

        <Map mapName={deathMap} coordinates={deathPosition} />

        <NaviCommand mapName={deathMap} />

        <Warning>
          <FormattedMessage id='nav_command_warning' />
        </Warning>

        <ModalPrimaryButton onClick={close}>
          <FormattedMessage id='close' />
        </ModalPrimaryButton>
      </Modal>
    </ModalBase>
  );
}
