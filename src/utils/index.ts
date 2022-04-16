import moment, { Moment } from 'moment';

import { mvpIcons } from '../assets/mvp_icons';
import { mvpMaps } from '../assets/mvp_maps';
import Question from '../assets/question.gif';

/**
 * Convert Moment object to string with this format 'HH:mm:ss'
 * @param miliseconds time in miliseconds
 * @returns string with this format 'HH:mm:ss' ex: '16:10:20'
 */
export const milisecondsToHours = (miliseconds: number) =>
  moment.duration(miliseconds, 'milliseconds').asHours();

/**
 * Convert Moment object to string with this format 'HH:mm:ss'
 * @param time Moment object
 * @returns string with this format 'HH:mm:ss' ex: '16:10:20'
 */
export const respawnCountdown = (time: Moment) => time.format('HH:mm:ss');

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
 * Returns the map image or question emoticon
 * @param mapname name of the map
 * @returns image url
 */
export const getMapImg = (mapname: string): string =>
  mvpMaps[mapname] || Question;
