import { useTimer } from '../../hooks/useTimer';

import { LanguageSelector } from '../LanguageSelector';
import { ThemeSwitcher } from '../ThemeSwitcher';

import mvpImg from '../../assets/mvp.png';
import {
  Container,
  LogoContainer,
  Logo,
  Title,
  Hour,
  Customization,
  SwitchContainer,
} from './styles';

interface Props {
  toggleTheme(): void;
}

export function Header({ toggleTheme }: Props) {
  const { time } = useTimer();

  return (
    <Container>
      <LogoContainer>
        <Logo src={mvpImg} alt='mvp' />
        <Title>Ragnarok MVP Timer</Title>
      </LogoContainer>

      <Hour>{time.format('HH:mm:ss')}</Hour>

      <Customization>
        <LanguageSelector />

        <ThemeSwitcher toggleTheme={toggleTheme} />

        {/* <SwitchContainer>
          <Switch
            onChange={toggleTheme}
            checked={id === 'dark'}
            height={25}
            width={50}
            handleDiameter={15}
            checkedIcon={false}
            uncheckedIcon={false}
            offColor={colors.switch.bg}
            onColor={colors.switch.bg}
            offHandleColor={colors.switch.handle}
            onHandleColor={colors.switch.handle}
          />
        </SwitchContainer> */}
      </Customization>
    </Container>
  );
}
