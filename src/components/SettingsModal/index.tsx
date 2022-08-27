import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { X, Trash, Sun, Moon } from '@styled-icons/feather';

import { Switch } from '../Switch';
import { LanguageSelector } from '../LanguageSelector';

import { SettingsContext } from '../../contexts/SettingsContext';
import { MvpsContext } from '../../contexts/MvpsContext';
import { useScrollBlock } from '../../hooks/useScrollBlock';
import { clearData } from '../../utils';
import { GetTranslateText } from '../../utils/GetTranslateText';

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

  const clearDataMessage = GetTranslateText('clear_data_message');

  function handleClearData() {
    const confirmed = confirm(clearDataMessage);
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

        <Title>
          <FormattedMessage id='settings' />
        </Title>

        <SettingsContainer>
          <Setting>
            <Subtitle>
              <FormattedMessage id='theme' />
            </Subtitle>
            <ThemeContainer>
              <Sun />
              <Switch onChange={toggleTheme} checked={theme !== 'light'} />
              <Moon />
            </ThemeContainer>
          </Setting>

          <Setting>
            <Subtitle>
              <FormattedMessage id='respawn_as_countdown' />
            </Subtitle>
            <Switch
              onChange={toggleRespawnCountdown}
              checked={respawnAsCountdown}
            />
          </Setting>

          <Setting>
            <Subtitle>
              <FormattedMessage id='animate_sprites' />
            </Subtitle>
            <Switch
              onChange={toggleAnimatedSprites}
              checked={animatedSprites}
            />
          </Setting>

          <Setting>
            <Subtitle>
              <FormattedMessage id='language' />
            </Subtitle>
            <LanguageSelector />
          </Setting>

          <Setting>
            <Subtitle>
              <FormattedMessage id='clear_data' />
            </Subtitle>
            <ClearButton onClick={handleClearData}>
              <FormattedMessage id='clear' />
              <Trash />
            </ClearButton>
          </Setting>
        </SettingsContainer>
      </Modal>
    </Container>
  );
}
