import { getMapImg } from '../../utils';

import { Container, Modal, Map, CloseButton } from './styles';

interface MvpMapModalProps {
  deathMap: string;
  close: () => void;
}

export function MvpMapModal({ deathMap, close }: MvpMapModalProps) {
  return (
    <Container>
      <Modal>
        <Map src={getMapImg(deathMap)} alt={deathMap} />
        <CloseButton onClick={close}>Close</CloseButton>
      </Modal>
    </Container>
  );
}
