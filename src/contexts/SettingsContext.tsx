import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
  useEffect,
} from 'react';

import { usePersistedState } from '../hooks';
import {
  LOCAL_STORAGE_THEME_KEY,
  DEFAULT_THEME,
  DEFAULT_SETTINGS,
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
  use24HourFormat: boolean;
  toggle24HourFormat: () => void;
  isNotificationSoundEnabled: boolean;
  toggleNotificationSound: () => void;
  language: string;
  changeLanguage: (id: string) => void;
  server: string;
  changeServer: (id: string) => void;
  resetSettings: () => void;
}

export const SettingsContext = createContext({} as SettingsContextData);

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [theme, setTheme] = usePersistedState(
    LOCAL_STORAGE_THEME_KEY,
    DEFAULT_THEME
  );
  const [settings, setSettings] = usePersistedState(
    LOCAL_STORAGE_SETTINGS_KEY,
    DEFAULT_SETTINGS
  );
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

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
    () =>
      setSettings((prev) => ({
        ...prev,
        respawnAsCountdown: !prev.respawnAsCountdown,
      })),
    [setSettings]
  );

  const toggleAnimatedSprites = useCallback(() => {
    setSettings((prev) => ({
      ...prev,
      animatedSprites: !prev.animatedSprites,
    }));
  }, [setSettings]);

  const toggle24HourFormat = useCallback(() => {
    setSettings((prev) => ({
      ...prev,
      use24HourFormat: !prev.use24HourFormat,
    }));
  }, [setSettings]);

  const toggleNotificationSound = useCallback(() => {
    setSettings((prev) => ({
      ...prev,
      isNotificationSoundEnabled: !prev.isNotificationSoundEnabled,
    }));
  }, [setSettings]);

  const changeLanguage = useCallback(
    (language: string) => {
      setSettings((prev) => ({
        ...prev,
        language,
      }));
    },
    [setSettings]
  );

  const changeServer = useCallback(
    (server: string) => {
      setSettings((prev) => ({
        ...prev,
        server,
      }));
    },
    [setSettings]
  );

  const resetSettings = useCallback(() => {
    setTheme(DEFAULT_THEME);
    setSettings(DEFAULT_SETTINGS);
  }, [setTheme, setSettings]);

  useEffect(() => {
    if (Notification.permission === 'granted') return;
    Notification.requestPermission();
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        theme,
        toggleTheme,
        isSettingsModalOpen,
        toggleSettingsModal,
        toggleRespawnCountdown,
        toggleAnimatedSprites,
        use24HourFormat: true, // temporary
        toggle24HourFormat,
        toggleNotificationSound,
        changeLanguage,
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
