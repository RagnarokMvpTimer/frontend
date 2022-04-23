import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/Global';
import { Themes } from './styles/Themes';

import { Main } from './pages/Main';

import { Header } from './components/Header';
import { WarningHeader } from './components/WarningHeader';
import { Footer } from './components/Footer';

import { usePersistedState } from './utils/usePersistedState';
import { MvpProvider } from './contexts/MvpsContext';

export default function App() {
  const [theme, setTheme] = usePersistedState<string>('theme', Themes.dark.id);

  const toggleTheme = () =>
    setTheme(theme === 'light' ? Themes.dark.id : Themes.light.id);

  return (
    <ThemeProvider theme={Themes[theme] || Themes.dark}>
      <WarningHeader text='Under development' />
      {Notification.permission !== 'granted' && (
        <WarningHeader text='Notifications are disabled' />
      )}

      <Header toggleTheme={toggleTheme} />

      <MvpProvider>
        <Main />
      </MvpProvider>
      <Footer />

      <GlobalStyle />
    </ThemeProvider>
  );
}
