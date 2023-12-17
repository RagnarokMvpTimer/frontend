import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Trash, Sun, Moon } from '@styled-icons/feather';

import { ModalBase } from '../ModalBase';
import { Switch } from '../../components/Switch';
import { LanguageSelector } from '../../components/LanguageSelector';
import { ModalWarning } from '../ModalWarning';
import { ModalCloseIconButton } from '@/ui/ModalCloseIconButton';

import { useSettings } from '@/contexts/SettingsContext';
import { useMvpsContext } from '@/contexts/MvpsContext';
import { useScrollBlock, useClickOutside } from '@/hooks';
import { clearData } from '@/utils';
import { GetTranslateText } from '@/utils/GetTranslateText';
import { Themes } from '@/styles/Themes';

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
              <Subtitle>
                <FormattedMessage id='theme' />
              </Subtitle>

              <ThemeContainer>
                <Sun />
                <Switch
                  onChange={toggleTheme}
                  checked={theme === Themes.dark.id}
                />
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

              <ClearButton onClick={() => setIsConfirmationModalOpen(true)}>
                <FormattedMessage id='clear' />
                <Trash />
              </ClearButton>
            </Setting>
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
