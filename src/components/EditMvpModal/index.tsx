import { useContext } from 'react';

import { MvpsContext } from '../../contexts/MvpsContext';
import { Container, Modal } from './styles';

export function EditMvpModal() {
  const { toggleEditModal } = useContext(MvpsContext);

  return (
    <Container>
      <Modal>
        editmvpmodal
        <button onClick={() => {}}>x</button>
      </Modal>
    </Container>
  );
}
