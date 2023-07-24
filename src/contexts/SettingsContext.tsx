import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from 'react';

import { usePersistedState } from '../hooks';
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
  resetSettings: () => void;
}

export const SettingsContext = createContext({} as SettingsContextData);

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = usePersistedState<string>('theme', Themes.light.id);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [respawnAsCountdown, setRespawnAsCountdown] = useState(true);
  const [animatedSprites, setAnimatedSprites] = useState(false);
  const [language, setLanguage] = useState('en');

  const toggleTheme = useCallback(
    () => setTheme(theme === 'light' ? Themes.dark.id : Themes.light.id),
    [setTheme, theme]
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

  const resetSettings = useCallback(() => {
    setTheme(Themes.dark.id);
    setRespawnAsCountdown(true);
    setAnimatedSprites(false);
    setLanguage('en');
  }, [setTheme]);

  useEffect(() => {
    if (!isLoading) return;

    try {
      const settings = localStorage.getItem('settings');
      if (!settings) return;

      const settingsParse = JSON.parse(settings);
      if (!settingsParse) return;

      const { respawnAsCountdown, animatedSprites, language } = settingsParse;

      setRespawnAsCountdown(respawnAsCountdown);
      setAnimatedSprites(animatedSprites);
      setLanguage(language || 'en');
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
    };
    localStorage.setItem('settings', JSON.stringify(settings));
  }, [respawnAsCountdown, animatedSprites, language]);

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
        resetSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
