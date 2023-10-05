import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from 'react';

import { usePersistedState } from '../hooks';
import {
  LOCAL_STORAGE_THEME_KEY,
  DEFAULT_THEME,
  DEFAULT_LANG,
  DEFAULT_SERVER,
  LOCAL_STORAGE_SETTINGS_KEY,
} from '../constants';
import { Themes } from '../styles/Themes';

interface SettingsProviderProps {
  children: ReactNode;
}

interface SettingsContextData {
  theme: string;
  toggleTheme: () => void;
  isSettingsModalOpen: boolean;
  toggleSettingsModal: () => void;
  respawnAsCountdown: boolean;
  toggleRespawnCountdown: () => void;
  animatedSprites: boolean;
  toggleAnimatedSprites: () => void;
  language: string;
  changeLanguage: (id: string) => void;
  server: string;
  changeServer: (id: string) => void;
  resetSettings: () => void;
}

export const SettingsContext = createContext({} as SettingsContextData);

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = usePersistedState<string>(
    LOCAL_STORAGE_THEME_KEY,
    DEFAULT_THEME
  );
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [respawnAsCountdown, setRespawnAsCountdown] = useState(true);
  const [animatedSprites, setAnimatedSprites] = useState(false);
  const [language, setLanguage] = useState(DEFAULT_LANG);
  const [server, setServer] = useState(DEFAULT_SERVER);

  const toggleTheme = useCallback(
    () =>
      setTheme((prev) =>
        prev === Themes.light.id ? Themes.dark.id : Themes.light.id
      ),
    [setTheme]
  );

  const toggleSettingsModal = useCallback(
    () => setIsSettingsModalOpen((prev) => !prev),
    []
  );

  const toggleRespawnCountdown = useCallback(
    () => setRespawnAsCountdown((prev) => !prev),
    []
  );

  const toggleAnimatedSprites = useCallback(() => {
    setAnimatedSprites((prev) => !prev);
  }, []);

  const changeLanguage = useCallback((id: string) => {
    setLanguage(id);
  }, []);

  const changeServer = useCallback((id: string) => {
    setServer(id);
  }, []);

  const resetSettings = useCallback(() => {
    setTheme(DEFAULT_THEME);
    setRespawnAsCountdown(true);
    setAnimatedSprites(false);
    setLanguage(DEFAULT_LANG);
    setServer(DEFAULT_SERVER);
  }, [setTheme]);

  useEffect(() => {
    if (!isLoading) return;

    try {
      const settings = localStorage.getItem(LOCAL_STORAGE_SETTINGS_KEY);
      if (!settings) return;

      const settingsParse = JSON.parse(settings);
      if (!settingsParse) return;

      const { respawnAsCountdown, animatedSprites, language, server } =
        settingsParse;

      setRespawnAsCountdown(respawnAsCountdown);
      setAnimatedSprites(animatedSprites);
      setLanguage(language || DEFAULT_LANG);
      setServer(server || DEFAULT_SERVER);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  useEffect(() => {
    if (isLoading) return;

    const settings = {
      respawnAsCountdown,
      animatedSprites,
      language,
      server,
    };
    localStorage.setItem(LOCAL_STORAGE_SETTINGS_KEY, JSON.stringify(settings));
  }, [respawnAsCountdown, animatedSprites, language, server]);

  return (
    <SettingsContext.Provider
      value={{
        theme,
        toggleTheme,
        isSettingsModalOpen,
        toggleSettingsModal,
        respawnAsCountdown,
        toggleRespawnCountdown,
        animatedSprites,
        toggleAnimatedSprites,
        language,
        changeLanguage,
        server,
        changeServer,
        resetSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}
