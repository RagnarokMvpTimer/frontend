import { ReactNode } from 'react';
import { Container } from './styles';

interface Props {
  children: ReactNode;
}

export function ModalBase({ children }: Props) {
  return <Container>{children}</Container>;
}
