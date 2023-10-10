import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
registerLocale('pt-BR', ptBR);

import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(duration);
dayjs.extend(relativeTime);

import { GlobalStyle } from './styles/Global';
import { Themes } from './styles/Themes';

import { Main } from './pages/Main';

import { Header } from './components/Header';
import { WarningHeader } from './components/WarningHeader';
import { Footer } from './components/Footer';
import { ModalSettings } from './components/ModalSettings';

import { useSettings } from './contexts/SettingsContext';
import { MvpProvider } from './contexts/MvpsContext';

import { LOCALES } from './locales';
import { messages } from './locales/messages';

import { DEFAULT_THEME } from './constants';

export default function App() {
  const { theme, language, isSettingsModalOpen } = useSettings();

  useEffect(() => {
    dayjs.locale(language);
    setDefaultLocale(language);
  }, [language]);

  return (
    <ThemeProvider theme={Themes[theme || DEFAULT_THEME]}>
      <IntlProvider
        messages={messages[language]}
        locale={language}
        defaultLocale={LOCALES.ENGLISH}
      >
        <WarningHeader text={messages[language]['under_development']} />
        {Notification.permission !== 'granted' && (
          <WarningHeader text={messages[language]['disabled_notifications']} />
        )}

        <Header />

        <MvpProvider>
          <Main />
        </MvpProvider>

        <Footer />

        {isSettingsModalOpen && <ModalSettings />}
      </IntlProvider>

      <GlobalStyle />
    </ThemeProvider>
  );
}
