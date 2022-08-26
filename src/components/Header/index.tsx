import { useContext } from 'react';

import { SettingsButton } from '../SettingsButton';
import { HeaderTimer } from '../HeaderTimer';
import { SettingsModal } from '../SettingsModal';

import { SettingsContext } from '../../contexts/SettingsContext';
import mvpImg from '../../assets/mvp.png';

import { Container, Customization, Logo, LogoContainer, Title } from './styles';

export function Header() {
  const { isSettingsModalOpen } = useContext(SettingsContext);

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

      {isSettingsModalOpen && <SettingsModal />}
    </Container>
  );
}
