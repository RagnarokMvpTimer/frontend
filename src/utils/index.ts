import type { Dayjs } from 'dayjs';

import Question from '../assets/question.gif';

function remapGlobImport(data) {
  return Object.entries(data).reduce((acc, [key, value]) => {
    const newKey = key.split('/').slice(-1)[0].split('.')[0];
    acc[newKey] = value;
    return acc;
  }, {});
}

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

const mvpSprites = remapGlobImport(MVP_SPRITES);
const animatedMvpSprites = remapGlobImport(ANIMATED_MVP_SPRITES);
const mapImages = remapGlobImport(MAP_IMAGES);

const SERVERS_DATA = import.meta.glob('../data/*.json', {
  import: 'default',
  eager: true,
});

type IServers = {
  [key: string]: IMvp[];
};

export const SERVERS: IServers = Object.entries(SERVERS_DATA).reduce(
  (acc, [key, value]) => {
    const newKey = key.split('/')[2].split('.')[0];
    acc[newKey] = value;
    return acc;
  },
  {}
);

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

/**
 * Clear the local storage
 */
export function clearData() {
  localStorage.clear();
}
