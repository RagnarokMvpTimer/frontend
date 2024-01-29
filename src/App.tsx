import { useEffect } from 'react';
import { IntlProvider } from 'react-intl';

import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(duration);
dayjs.extend(relativeTime);

import { GlobalStyle } from './styles/Global';

import { Main } from './pages/Main';

import { Header } from './components/Header';
import { WarningHeader } from './components/WarningHeader';
import { Footer } from './components/Footer';
import { ModalSettings } from './modals';

import { useSettings } from './contexts/SettingsContext';
import { MvpProvider } from './contexts/MvpsContext';
import { useNotification } from './hooks';

import { LOCALES } from './locales';
import { messages } from './locales/messages';

export default function App() {
  const { language, isSettingsModalOpen } = useSettings();
  const {
    hasNotificationPermission,
    isNotificationPermissionDenied,
    browserSupportsNotifications,
  } = useNotification();

  useEffect(() => {
    dayjs.locale(language);
  }, [language]);

  return (
    <>
      <IntlProvider
        messages={messages[language]}
        locale={language}
        defaultLocale={LOCALES.ENGLISH}
      >
        {!hasNotificationPermission && (
          <WarningHeader
            text={
              messages[language][
                !browserSupportsNotifications
                  ? 'notifications_not_supported'
                  : isNotificationPermissionDenied
                  ? 'denied_notifications'
                  : 'disabled_notifications'
              ]
            }
          />
        )}

        <Header />

        <MvpProvider>
          <Main />
        </MvpProvider>

        <Footer />
        <WarningHeader text={messages[language]['under_development']} />

        {isSettingsModalOpen && <ModalSettings />}
      </IntlProvider>

      <GlobalStyle />
    </>
  );
}
