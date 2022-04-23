import { IMapMark } from '../../interfaces';
import { Map } from '../Map';

import { Container, Modal, Name, CloseButton } from './styles';

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
  return (
    <Container>
      <Modal>
        <Name>{deathMap}</Name>
        <Map mapName={deathMap} coordinates={deathPosition} />
        <CloseButton onClick={close}>Close</CloseButton>
      </Modal>
    </Container>
  );
}
