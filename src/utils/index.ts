import moment, { Moment } from 'moment';

import { mvpIcons } from '../assets/mvp_icons';
import { mvpIconsAnimated } from '../assets/mvp_icons_animated';
import { mvpMaps } from '../assets/mvp_maps';
import Question from '../assets/question.gif';

/**
 * Convert Moment object to string with this format 'HH:mm:ss'
 * @param milliseconds time in milliseconds
 * @returns string with this format 'HH:mm:ss' ex: '16:10:20'
 */
export const millisecondsToHours = (milliseconds: number) =>
  moment.duration(milliseconds, 'milliseconds').asHours();

/**
 * Convert Moment object to string with this format 'HH:mm:ss'
 * @param time Moment object
 * @returns string with this format 'HH:mm:ss' ex: '16:10:20'
 */
export const respawnIn = (time: Moment) => time.format('HH:mm:ss');

/**
 * Convert Moment object to string with the interval that MVP can respawn
 * @param time Moment object
 * @returns string with this format 'HH:mm ~ HH:mm' ex: '16:00 ~ 16:10'
 */
export const respawnAt = (time: Moment) =>
  `${time.format('HH:mm')} ~ ${time.add(10, 'm').format('HH:mm')}`;

/**
 * Returns the MVP sprite or question emoticon
 * @param id mvp id
 * @returns image url
 */
export const getMvpSprite = (id: number): string => mvpIcons[id] || Question;

/**
 * Returns the animated MVP sprite or default sprite or question emoticon
 * @param id mvp id
 * @returns image url
 */
export const getAnimatedMvpSprite = (id: number): string =>
  mvpIconsAnimated[id] || getMvpSprite(id);

/**
 * Returns the map image or question emoticon
 * @param mapname name of the map
 * @returns image url
 */
export const getMapImg = (mapname: string): string =>
  mvpMaps[mapname] || Question;

/**
 * Returns the death map respawn time
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

export function getServers() {
  return [
    'aRO',
    'bRO',
    'fRO',
    'idRO',
    'iRO',
    'jRO',
    'kROM',
    'kROZ',
    'kROZS',
    'GGH',
    'ruRO',
    'thROG',
    'twRO',
    'cRO',
    'iROC',
  ];
}
