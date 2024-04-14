import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Trash } from '@styled-icons/feather';

import { ModalBase } from '../ModalBase';
import { Switch } from '../../components/Switch';
import { LanguageSelector } from '../../components/LanguageSelector';
import { ModalWarning } from '../ModalWarning';
import { ModalCloseIconButton } from '@/ui/ModalCloseIconButton';

import { useSettings } from '@/contexts/SettingsContext';
import { useScrollBlock, useClickOutside, useKey, useTheme } from '@/hooks';
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

type Props = {
  onClose: () => void;
};

export function ModalSettings({ onClose }: Props) {
  const { theme, toggleTheme } = useTheme();
  const {
    respawnAsCountdown,
    toggleRespawnCountdown,
    animatedSprites,
    toggleAnimatedSprites,
    use24HourFormat,
    toggle24HourFormat,
    isNotificationSoundEnabled,
    toggleNotificationSound,
  } = useSettings();
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  useScrollBlock(true);
  useKey('Escape', onClose);

  const modalRef = useClickOutside(
    !isConfirmationModalOpen ? onClose : () => null
  );

  function handleClearData() {
    clearData();
    setIsConfirmationModalOpen(false);
    window.location.reload();
  }

  return (
    <>
      <ModalBase>
        <Modal ref={modalRef}>
          <ModalCloseIconButton onClick={onClose} />

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
