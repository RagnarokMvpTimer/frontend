import { Container } from './styles';

interface WarningHeaderProps {
  text: string;
}

export function WarningHeader({ text }: WarningHeaderProps) {
  return <Container>{text}</Container>;
}
