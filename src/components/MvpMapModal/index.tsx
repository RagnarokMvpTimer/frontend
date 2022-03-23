import { getMapImg } from '../../utils';
import { IMapMark } from '../../interfaces';
import { MapMark } from '../MapMark';

import { Container, Modal, Name, Map, CloseButton } from './styles';

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
        <div>
          <Map src={getMapImg(deathMap)} alt={deathMap} />
          {deathPosition &&
            (deathPosition.x !== -1 || deathPosition.y !== -1) && (
              <MapMark x={deathPosition.x} y={deathPosition.y} />
            )}
        </div>
        <CloseButton onClick={close}>Close</CloseButton>
      </Modal>
    </Container>
  );
}
