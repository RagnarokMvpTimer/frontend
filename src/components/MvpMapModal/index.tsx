import { getMapImg } from '../../utils';

import { Container, Modal, Name, Map, CloseButton } from './styles';

interface MvpMapModalProps {
  deathMap: string;
  close: () => void;
}

export function MvpMapModal({ deathMap, close }: MvpMapModalProps) {
  return (
    <Container>
      <Modal>
        <Name>{deathMap}</Name>
        <Map src={getMapImg(deathMap)} alt={deathMap} />
        <CloseButton onClick={close}>Close</CloseButton>
      </Modal>
    </Container>
  );
}
