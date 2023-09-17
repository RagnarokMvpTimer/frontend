import { Button } from './styles';

interface ModalPrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function ModalPrimaryButton({
  children,
  ...props
}: ModalPrimaryButtonProps) {
  return <Button {...props}>{children}</Button>;
}
