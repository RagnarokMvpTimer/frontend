import { FormattedMessage } from 'react-intl';
import { Trash, Sun, Moon } from '@styled-icons/feather';

import { ModalBase } from '../ModalBase';
import { Switch } from '../Switch';
import { LanguageSelector } from '../LanguageSelector';
import { ModalCloseIconButton } from '../../ui/ModalCloseIconButton';

import { useSettings } from '../../contexts/SettingsContext';
import { useMvpsContext } from '../../contexts/MvpsContext';
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

export function ModalSettings() {
  useScrollBlock(true);
  const {
    toggleTheme,
    toggleSettingsModal,
    respawnAsCountdown,
    toggleRespawnCountdown,
    animatedSprites,
    toggleAnimatedSprites,
    resetSettings,
    theme,
  } = useSettings();
  const { clearActiveMvps } = useMvpsContext();

  const modalRef = useClickOutside({
    onClick: toggleSettingsModal,
  });

  function handleClearData() {
    const clearDataMessage = GetTranslateText('clear_data_message');
    const confirmed = confirm(clearDataMessage);
    if (!confirmed) return;
    clearData();
    clearActiveMvps();
    resetSettings();
    toggleSettingsModal();
  }

  return (
    <ModalBase>
      <Modal ref={modalRef}>
        <ModalCloseIconButton onClick={toggleSettingsModal} />

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
