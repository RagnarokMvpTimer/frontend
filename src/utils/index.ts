import type { Dayjs } from 'dayjs';

import Question from '../assets/question.gif';

const MVP_SPRITES = import.meta.glob('../assets/mvp_icons/*', {
  import: 'default',
  eager: true,
});

const ANIMATED_MVP_SPRITES = import.meta.glob(
  '../assets/mvp_icons_animated/*',
  {
    import: 'default',
    eager: true,
  }
);

const MAP_IMAGES = import.meta.glob('../assets/mvp_maps/*', {
  import: 'default',
  eager: true,
});

const mvpSprites = Object.entries(MVP_SPRITES).reduce((acc, [key, value]) => {
  const newKey = key.split('/').slice(-1)[0].split('.')[0];
  acc[newKey] = value;
  return acc;
}, {});

const animatedMvpSprites = Object.entries(ANIMATED_MVP_SPRITES).reduce(
  (acc, [key, value]) => {
    const newKey = key.split('/').slice(-1)[0].split('.')[0];
    acc[newKey] = value;
    return acc;
  },
  {}
);

const mapImages = Object.entries(MAP_IMAGES).reduce((acc, [key, value]) => {
  const newKey = key.split('/').slice(-1)[0].split('.')[0];
  acc[newKey] = value;
  return acc;
}, {});

const SERVERS = import.meta.glob('../data/*.json', {
  import: 'default',
  eager: true,
});

/**
 * Convert Dayjs object to string with 'HH:mm:ss' format
 * @param time Dayjs object
 * @returns string with this format 'HH:mm:ss' ex: '16:10:20'
 */
export const respawnIn = (time: Dayjs) => time.format('HH:mm:ss');

/**
 * Convert Dayjs object to string with the interval that MVP can respawn
 * @param time Dayjs object
 * @returns string with this format 'HH:mm ~ HH:mm' ex: '16:00 ~ 16:10'
 */
export const respawnAt = (time: Dayjs) =>
  `${time.format('HH:mm')} ~ ${time.add(10, 'minutes').format('HH:mm')}`;

/**
 * Returns the MVP sprite or question emoticon
 * @param id mvp id
 * @returns image url
 */
export const getMvpSprite = (id: number): string => mvpSprites[id] || Question;

/**
 * Returns the animated MVP sprite or default sprite or question emoticon
 * @param id mvp id
 * @returns image url
 */
export const getAnimatedMvpSprite = (id: number): string =>
  animatedMvpSprites[id] || getMvpSprite(id);

/**
 * Returns the map image or question emoticon
 * @param mapname name of the map
 * @returns image url
 */
export const getMapImg = (mapname: string): string =>
  mapImages[mapname] || Question;

/**
 * Returns the death map respawn time in milliseconds.
 * @param mvp Mvp object
 * @returns respawn time in milliseconds
 */
export function getMvpRespawnTime(mvp: IMvp): number | undefined {
  const deathMap = mvp.spawn.find((spawn) => spawn.mapname === mvp.deathMap);
  const respawnTime = deathMap?.respawnTime;
  return respawnTime;
}

export function respawnNotification(name: string, deathTime: Date) {
  console.log(`Triggering death notification for ${name}`);
  new Audio('./notification1.mp3').play();

  if (Notification.permission !== 'granted') return;
  new Notification(`${name} will respawn soon...`, {
    body: `At ${deathTime?.toLocaleTimeString()}`,
  });
}

/**
 * Clear the local storage
 */
export function clearData() {
  localStorage.clear();
}

type IGetServers = {
  [key: string]: IMvp[];
};

export function getServers(): IGetServers {
  const finalObj = {};

  for (const [key, value] of Object.entries(SERVERS)) {
    const newKey = key.split('/')[2].split('.')[0];
    finalObj[newKey] = value;
  }

  return finalObj;
}
