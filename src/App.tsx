import { ThemeProvider, DefaultTheme } from 'styled-components';

import { Header } from './components/Header';
import { Main } from './pages/Main';
import { GlobalStyle } from './styles/Global';

import usePeristedState from './utils/usePersistedState';
import { Themes } from './styles/Themes';
import { MvpProvider } from './contexts/MvpsContext';

export default function App() {
  const [theme, setTheme] = usePeristedState<DefaultTheme>(
    'theme',
    Themes.dark
  );

  const toggleTheme = () =>
    setTheme(theme.id === 'light' ? Themes.dark : Themes.light);

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <MvpProvider>
        <Main />
      </MvpProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
