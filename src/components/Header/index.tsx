import { SettingsButton } from '../SettingsButton';

import mvpImg from '../../assets/mvp.png';
import { Container, LogoContainer, Logo, Title, Customization } from './styles';
import { HeaderTimer } from '../HeaderTimer';

export function Header() {
  return (
    <Container>
      <LogoContainer>
        <Logo src={mvpImg} alt='mvp' />
        <Title>Ragnarok MVP Timer</Title>
      </LogoContainer>

      <HeaderTimer />

      <Customization>
        <SettingsButton />
      </Customization>
    </Container>
  );
}
