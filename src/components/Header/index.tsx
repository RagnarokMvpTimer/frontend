import { useTimer } from '../../hooks/useTimer';
import { SettingsButton } from '../SettingsButton';

import mvpImg from '../../assets/mvp.png';
import {
  Container,
  LogoContainer,
  Logo,
  Title,
  Hour,
  Customization,
} from './styles';

export function Header() {
  const { time } = useTimer();

  return (
    <Container>
      <LogoContainer>
        <Logo src={mvpImg} alt='mvp' />
        <Title>Ragnarok MVP Timer</Title>
      </LogoContainer>

      <Hour>{time.format('HH:mm:ss')}</Hour>

      <Customization>
        <SettingsButton />
      </Customization>
    </Container>
  );
}
