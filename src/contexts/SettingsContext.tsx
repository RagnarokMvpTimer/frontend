import { createContext, useState, useEffect, ReactNode } from 'react';

import { usePersistedState } from '../hooks/usePersistedState';
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
  const [theme, setTheme] = usePersistedState<string>('theme', Themes.dark.id);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [respawnAsCountdown, setRespawnAsCountdown] = useState(true);
  const [animatedSprites, setAnimatedSprites] = useState(false);
  const [language, setLanguage] = useState('en');

  function toggleTheme() {
    setTheme(theme === 'light' ? Themes.dark.id : Themes.light.id);
  }

  function toggleSettingsModal() {
    setIsSettingsModalOpen((prev) => !prev);
  }

  function toggleRespawnCountdown() {
    setRespawnAsCountdown((prev) => !prev);
  }

  function toggleAnimatedSprites() {
    setAnimatedSprites((prev) => !prev);
  }

  function changeLanguage(id: string) {
    setLanguage(id);
  }

  function resetSettings() {
    setTheme(Themes.dark.id);
    setRespawnAsCountdown(true);
    setAnimatedSprites(false);
    setLanguage('en');
  }

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
