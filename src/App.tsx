import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/Global';
import { Themes } from './styles/Themes';

import { Main } from './pages/Main';

import { Header } from './components/Header';
import { WarningHeader } from './components/WarningHeader';
import { Footer } from './components/Footer';

import { SettingsContext } from './contexts/SettingsContext';
import { MvpProvider } from './contexts/MvpsContext';

export default function App() {
  const { theme } = useContext(SettingsContext);

  return (
    <ThemeProvider theme={Themes[theme] || Themes.dark}>
      <WarningHeader text='Under development' />
      {Notification.permission !== 'granted' && (
        <WarningHeader text='Notifications are disabled' />
      )}

      <Header />

      <MvpProvider>
        <Main />
      </MvpProvider>
      <Footer />

      <GlobalStyle />
    </ThemeProvider>
  );
}
