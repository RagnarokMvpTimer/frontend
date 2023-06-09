import { X } from '@styled-icons/feather';
import { CloseButton } from './styles';

interface ModalCloseButtonProps {
  onClick: () => void;
}

export function ModalCloseButton({ onClick }: ModalCloseButtonProps) {
  return (
    <CloseButton onClick={onClick}>
      <X />
    </CloseButton>
  );
}
