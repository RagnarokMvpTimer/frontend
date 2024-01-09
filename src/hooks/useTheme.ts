import { useEffect } from 'react';
import { usePersistedState } from './usePersistedState';
import { DEFAULT_THEME, LOCAL_STORAGE_THEME_KEY } from '@/constants';

function updateHTML() {
  const currentLocalStorageTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY)
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || '')
    : '';

  const isLocalStorageDark = currentLocalStorageTheme === 'dark';
  const missingLocalStorageTheme = !(LOCAL_STORAGE_THEME_KEY in localStorage);

  const userPrefersDarkTheme = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  const useDark =
    isLocalStorageDark || (missingLocalStorageTheme && userPrefersDarkTheme);

  document.documentElement.dataset.theme = useDark ? 'dark' : 'light';
}

export function useTheme() {
  const [theme, setTheme] = usePersistedState(
    LOCAL_STORAGE_THEME_KEY,
    DEFAULT_THEME
  );

  function toggleTheme() {
    switch (theme) {
      case 'system':
        setTheme('dark');
        break;
      case 'dark':
        setTheme('light');
        break;
      case 'light':
        setTheme('dark');
        break;
    }
  }

  function resetTheme() {
    setTheme('light');
  }

  useEffect(() => {
    updateHTML();
  }, [theme]);

  return { theme, toggleTheme, resetTheme };
}
