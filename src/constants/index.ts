import { LOCALES } from '../locales';

export const DEFAULT_THEME = 'light';

export const RESPAWN_TIMER_SOON_THRESHOLD_MS = 1000 * 60 * 10; // 10 minutes
export const DEFAULT_LANG = LOCALES.ENGLISH;
export const DEFAULT_SERVER = 'iRO';

export const DEFAULT_SETTINGS = {
  respawnAsCountdown: true,
  animatedSprites: false,
  use24HourFormat: true,
  isNotificationSoundEnabled: true,
  language: DEFAULT_LANG,
  server: DEFAULT_SERVER,
};

export const LOCAL_STORAGE_THEME_KEY = 'theme';
export const LOCAL_STORAGE_SETTINGS_KEY = 'settings';
export const LOCAL_STORAGE_ACTIVE_MVPS_KEY = 'activeMvps';

export const SUPPORTED_SERVERS = [
  'bRO',
  'cRO',
  'dpRO',
  'GGH',
  'idRO',
  'iRO',
  'jRO',
  'kROM',
  'kROS',
  'kROZ',
  'kROZS',
  'LATAM',
  'ropEU',
  'ropRU',
  'thROC',
  'thROG',
  'twRO',
  'twROZ',
  'vnRO',
];
