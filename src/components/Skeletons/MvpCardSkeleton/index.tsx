import {
  Container,
  Header,
  ID,
  Name,
  Sprite,
  Controls,
  Button,
} from './styles';

export function MvpCardSkeleton() {
  return (
    <Container>
      <Header>
        <ID />
        <Name />
      </Header>

      <Sprite />

      <Controls>
        <Button />
        <Button />
      </Controls>
    </Container>
  );
}
