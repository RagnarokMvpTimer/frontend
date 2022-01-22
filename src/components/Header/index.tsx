import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';

import mvpImg from '../../assets/mvp.png';
import {
  Container,
  LogoContainer,
  Logo,
  Title,
  Hour,
  SwitchContainer,
} from './styles';

interface Props {
  toggleTheme(): void;
}

export const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, id } = useContext(ThemeContext);

  const currentTime = () => new Date();
  const [time, setTime] = useState(currentTime());

  useEffect(() => {
    setInterval(() => {
      setTime(currentTime());
    }, 1000);
  }, []);

  return (
    <Container>
      <LogoContainer>
        <Logo src={mvpImg} alt='mvp' />
        <Title>Ragnarok MVP Timer</Title>
      </LogoContainer>

      <Hour>{time.toLocaleTimeString()}</Hour>

      <SwitchContainer>
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
      </SwitchContainer>
    </Container>
  );
};
