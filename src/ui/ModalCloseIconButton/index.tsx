import { X } from '@styled-icons/feather';
import { Button } from './styles';

export function ModalCloseIconButton({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button {...props}>
      <X />
    </Button>
  );
}
