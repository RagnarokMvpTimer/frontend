import mvp_tomb from '../../assets/mvp_tomb.png';

import { IMapMark } from '../../interfaces';

import { Container, Tomb } from './styles';

export function MapMark({ x, y }: IMapMark) {
  return (
    <Container coordinates={{ x, y }}>
      <Tomb src={mvp_tomb} />
    </Container>
  );
}
