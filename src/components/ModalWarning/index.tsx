import { ModalBase } from '../ModalBase';
import { ModalCloseIconButton } from '@/ui/ModalCloseIconButton';
import { useSecondsTimer } from '@/hooks';

import {
  Modal,
  Title,
  Description,
  Content,
  Alert,
  AlertIcon,
  Footer,
  Wrapper,
  CancelButton,
  DeleteButton,
} from './styles';

interface Props {
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ModalWarning({
  title,
  description,
  onConfirm,
  onCancel,
}: Props) {
  const [seconds] = useSecondsTimer(5);

  return (
    <ModalBase>
      <Modal>
        <ModalCloseIconButton onClick={onCancel} />

        <Wrapper>
          <Alert>
            <AlertIcon />
          </Alert>

          <Content>
            <Title>{title}</Title>

            <Description>{description}</Description>

            <Footer>
              <CancelButton onClick={onCancel}>Cancel</CancelButton>
              <DeleteButton disabled={seconds > 0} onClick={onConfirm}>
                Delete all data {seconds > 0 && `(${seconds})`}
              </DeleteButton>
            </Footer>
          </Content>
        </Wrapper>
      </Modal>
    </ModalBase>
  );
}
