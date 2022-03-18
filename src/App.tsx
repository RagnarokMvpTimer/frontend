import { ThemeProvider, DefaultTheme } from 'styled-components';

import { GlobalStyle } from './styles/Global';
import { Themes } from './styles/Themes';

import { Main } from './pages/Main';

import { Header } from './components/Header';
import { WarningHeader } from './components/WarningHeader';
import { Footer } from './components/Footer';

import { usePersistedState } from './utils/usePersistedState';
import { MvpProvider } from './contexts/MvpsContext';

export default function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    'theme',
    Themes.dark
  );

  const toggleTheme = () =>
    setTheme(theme.id === 'light' ? Themes.dark : Themes.light);

  return (
    <ThemeProvider theme={theme}>
      <WarningHeader />
      <Header toggleTheme={toggleTheme} />
      <MvpProvider>
        <Main />
      </MvpProvider>
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
}
