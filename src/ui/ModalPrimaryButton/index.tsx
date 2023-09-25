import { Button, Sizes } from './styles';

interface ModalPrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: Sizes;
}

export function ModalPrimaryButton({
  children,
  ...props
}: ModalPrimaryButtonProps) {
  return <Button {...props}>{children}</Button>;
}
