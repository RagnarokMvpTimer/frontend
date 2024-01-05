import { HeaderTimer } from '../HeaderTimer';
import { ServerButton } from '../ServerButton';
import { SettingsButton } from '../SettingsButton';
import { useSettings } from '@/contexts/SettingsContext';

import mvpImg from '@/assets/mvp.png';

import { Container, Customization, Logo, LogoContainer, Title } from './styles';

export function Header() {
  const { use24HourFormat } = useSettings();

  return (
    <Container>
      <LogoContainer>
        <Logo src={mvpImg} alt='mvp' />
        <Title>Ragnarok MVP Timer</Title>
      </LogoContainer>

      <HeaderTimer use24HourFormat={use24HourFormat} />

      <Customization>
        <ServerButton />
        <SettingsButton />
      </Customization>
    </Container>
  );
}
