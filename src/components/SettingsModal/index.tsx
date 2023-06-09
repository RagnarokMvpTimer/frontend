import { useCallback, useContext, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { Trash, Sun, Moon } from '@styled-icons/feather';

import { ModalBase } from '../ModalBase';
import { Switch } from '../Switch';
import { LanguageSelector } from '../LanguageSelector';
import { ModalCloseButton } from '../ModalCloseButton';

import { SettingsContext } from '../../contexts/SettingsContext';
import { MvpsContext } from '../../contexts/MvpsContext';
import { useScrollBlock, useClickOutside } from '../../hooks';
import { clearData } from '../../utils';
import { GetTranslateText } from '../../utils/GetTranslateText';

import {
  Modal,
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

  const modalRef = useClickOutside({
    onClick: toggleSettingsModal,
  });

  const clearDataMessage = useMemo(
    () => GetTranslateText('clear_data_message'),
    []
  );

  const handleClearData = useCallback(() => {
    const confirmed = confirm(clearDataMessage);
    if (!confirmed) return;
    clearData();
    clearActiveMvps();
    resetSettings();
    toggleSettingsModal();
  }, [clearActiveMvps, clearDataMessage, resetSettings, toggleSettingsModal]);

  return (
    <ModalBase>
      <Modal ref={modalRef}>
        <ModalCloseButton onClick={toggleSettingsModal} />

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
    </ModalBase>
  );
}
