import { useContext } from 'react';
import { X, Trash, Sun, Moon } from '@styled-icons/feather';

import { Switch } from '../Switch';
import { LanguageSelector } from '../LanguageSelector';

import { SettingsContext } from '../../contexts/SettingsContext';
import { MvpsContext } from '../../contexts/MvpsContext';
import { useScrollBlock } from '../../hooks/useScrollBlock';
import { clearData } from '../../utils';

import {
  Container,
  Modal,
  CloseButton,
  Title,
  Subtitle,
  SettingsContainer,
  Setting,
  ThemeContainer,
  ClearButton,
} from './styles';

export function SettingsModal() {
  useScrollBlock(true);
  const {
    toggleTheme,
    toggleSettingsModal,
    respawnAsCountdown,
    toggleRespawnCountdown,
    animatedSprites,
    toggleAnimatedSprites,
    resetSettings,
  } = useContext(SettingsContext);
  const { theme } = useContext(SettingsContext);
  const { clearActiveMvps } = useContext(MvpsContext);

  function handleClearData() {
    const confirmed = confirm('Are you sure you want to clear all data?');
    if (!confirmed) return;
    clearData();
    clearActiveMvps();
    resetSettings();
    toggleSettingsModal();
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
            <ThemeContainer>
              <Sun />
              <Switch onChange={toggleTheme} checked={theme !== 'light'} />
              <Moon />
            </ThemeContainer>
          </Setting>

          <Setting>
            <Subtitle>Respawn time as countdown</Subtitle>
            <Switch
              onChange={toggleRespawnCountdown}
              checked={respawnAsCountdown}
            />
          </Setting>

          <Setting>
            <Subtitle>Animated MVP Sprites</Subtitle>
            <Switch
              onChange={toggleAnimatedSprites}
              checked={animatedSprites}
            />
          </Setting>

          <Setting>
            <Subtitle>Language</Subtitle>
            <LanguageSelector />
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
