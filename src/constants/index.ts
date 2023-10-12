import { LOCALES } from '../locales';
import { Themes } from '../styles/Themes';

export const DEFAULT_THEME = Themes.light.id;

export const RESPAWN_TIMER_SOON_THRESHOLD_MS = 600000; // 10 minutes
export const DEFAULT_LANG = LOCALES.ENGLISH;
export const DEFAULT_SERVER = 'iRO';

export const DEFAULT_SETTINGS = {
  respawnAsCountdown: true,
  animatedSprites: false,
  language: DEFAULT_LANG,
  server: DEFAULT_SERVER,
};

export const LOCAL_STORAGE_THEME_KEY = 'theme';
export const LOCAL_STORAGE_SETTINGS_KEY = 'settings';
export const LOCAL_STORAGE_ACTIVE_MVPS_KEY = 'activeMvps';
