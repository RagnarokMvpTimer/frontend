import { HeaderTimer } from '../HeaderTimer';
import { ServerButton } from '../ServerButton';
import { SettingsButton } from '../SettingsButton';

import mvpImg from '@/assets/mvp.png';

import { Container, Customization, Logo, LogoContainer, Title } from './styles';

export function Header() {
  return (
    <Container>
      <LogoContainer>
        <Logo src={mvpImg} alt='mvp' />
        <Title>Ragnarok MVP Timer</Title>
      </LogoContainer>

      <HeaderTimer />

      <Customization>
        <ServerButton />
        <SettingsButton />
      </Customization>
    </Container>
  );
}
