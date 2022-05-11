import { useContext } from 'react';
import { X, Trash } from '@styled-icons/feather';
import Switch from 'react-switch';

import { Themes } from '../../styles/Themes';
import { SettingsContext } from '../../contexts/SettingsContext';

import { clearData } from '../../utils';

import {
  Container,
  Modal,
  CloseButton,
  Title,
  Subtitle,
  SettingsContainer,
  Setting,
  ClearButton,
} from './styles';

interface SwitchProps {
  checked: boolean;
  onChange: () => void;
}

export function SettingsModal() {
  const {
    theme,
    toggleTheme,
    toggleSettingsModal,
    respawnAsCountdown,
    toggleRespawnCountdown,
    animatedSprites,
    toggleAnimatedSprites,
  } = useContext(SettingsContext);

  const ctheme = theme ? Themes[theme] : Themes.dark;

  const Switch2 = ({ onChange, checked }: SwitchProps) => (
    <Switch
      onChange={onChange}
      checked={checked}
      height={25}
      width={50}
      handleDiameter={15}
      checkedIcon={false}
      uncheckedIcon={false}
      offColor={ctheme.colors.switch.bg}
      onColor={ctheme.colors.switch.bg}
      offHandleColor={ctheme.colors.switch.handle}
      onHandleColor={ctheme.colors.switch.handle}
    />
  );

  function handleClearData() {
    const confirmed = confirm('Are you sure you want to clear all data?');

    confirmed && clearData();
  }

  return (
    <Container>
      <Modal>
        <CloseButton onClick={toggleSettingsModal}>
          <X size={20} />
        </CloseButton>

        <Title>Settings</Title>

        <SettingsContainer>
          <Setting>
            <Subtitle>Theme</Subtitle>
            <Switch2 onChange={toggleTheme} checked={theme !== 'light'} />
          </Setting>

          <Setting>
            <Subtitle>Respawn time as countdown</Subtitle>
            <Switch2
              onChange={toggleRespawnCountdown}
              checked={respawnAsCountdown}
            />
          </Setting>

          <Setting>
            <Subtitle>Animated MVP Sprites</Subtitle>
            <Switch2
              onChange={toggleAnimatedSprites}
              checked={animatedSprites}
            />
          </Setting>

          <Setting>
            <Subtitle>Clear data</Subtitle>
            <ClearButton onClick={handleClearData}>
              <Trash /> Clear
            </ClearButton>
          </Setting>
        </SettingsContainer>
      </Modal>
    </Container>
  );
}
