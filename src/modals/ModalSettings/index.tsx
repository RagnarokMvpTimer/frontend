import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Trash } from '@styled-icons/feather';

import { ModalBase } from '../ModalBase';
import { Switch } from '../../components/Switch';
import { LanguageSelector } from '../../components/LanguageSelector';
import { ModalWarning } from '../ModalWarning';
import { ModalCloseIconButton } from '@/ui/ModalCloseIconButton';

import { useSettings } from '@/contexts/SettingsContext';
import { useMvpsContext } from '@/contexts/MvpsContext';
import { useScrollBlock, useClickOutside, useTheme } from '@/hooks';
import { clearData } from '@/utils';
import { GetTranslateText } from '@/utils/GetTranslateText';

import {
  Modal,
  Title,
  SettingsContainer,
  Setting,
  SettingName,
  SettingSecondary,
  ThemeContainer,
  ClearButton,
} from './styles';

export function ModalSettings() {
  const { theme, toggleTheme } = useTheme();
  const {
    toggleSettingsModal,
    respawnAsCountdown,
    toggleRespawnCountdown,
    animatedSprites,
    toggleAnimatedSprites,
    use24HourFormat,
    toggle24HourFormat,
    isNotificationSoundEnabled,
    toggleNotificationSound,
    resetSettings,
  } = useSettings();
  const { clearActiveMvps } = useMvpsContext();
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  useScrollBlock(true);
  const modalRef = useClickOutside(
    !isConfirmationModalOpen ? toggleSettingsModal : () => null
  );

  function handleClearData() {
    try {
      clearActiveMvps();
    } catch (error) {
      //
    }
    clearData();
    resetSettings();
    setIsConfirmationModalOpen(false);
    toggleSettingsModal();
  }

  return (
    <>
      <ModalBase>
        <Modal ref={modalRef}>
          <ModalCloseIconButton onClick={toggleSettingsModal} />

          <Title>
            <FormattedMessage id='settings' />
          </Title>

          <SettingsContainer>
            <Setting>
              <SettingName>
                <FormattedMessage id='theme' />
              </SettingName>

              <ThemeContainer>
                <Switch onChange={toggleTheme} checked={theme === 'dark'} />
              </ThemeContainer>
            </Setting>

            <Setting>
              <SettingName>
                <FormattedMessage id='respawn_as_countdown' />
              </SettingName>

              <Switch
                onChange={toggleRespawnCountdown}
                checked={respawnAsCountdown}
              />
            </Setting>

            <Setting>
              <SettingName>
                <FormattedMessage id='animate_sprites' />
              </SettingName>

              <Switch
                onChange={toggleAnimatedSprites}
                checked={animatedSprites}
              />
            </Setting>

            {/* <Setting>
              <SettingName>
                <FormattedMessage id='use_24_hour_format' />
              </SettingName>

              <Switch onChange={toggle24HourFormat} checked={use24HourFormat} />
            </Setting> */}

            <Setting>
              <SettingName>
                <FormattedMessage id='notification_sound' />
              </SettingName>

              <Switch
                onChange={toggleNotificationSound}
                checked={isNotificationSoundEnabled}
              />
            </Setting>

            <SettingSecondary>
              <SettingName>
                <FormattedMessage id='language' />
              </SettingName>

              <LanguageSelector />
            </SettingSecondary>

            <SettingSecondary>
              <SettingName>
                <FormattedMessage id='clear_data' />
              </SettingName>

              <ClearButton onClick={() => setIsConfirmationModalOpen(true)}>
                <FormattedMessage id='clear' />
                <Trash />
              </ClearButton>
            </SettingSecondary>
          </SettingsContainer>
        </Modal>
      </ModalBase>

      {isConfirmationModalOpen && (
        <ModalWarning
          title={GetTranslateText('clear_data_message')}
          description={GetTranslateText('clear_data_description')}
          onConfirm={handleClearData}
          onCancel={() => setIsConfirmationModalOpen(false)}
        />
      )}
    </>
  );
}
