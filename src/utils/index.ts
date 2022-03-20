import moment, { Moment } from 'moment';

import { mvpIcons } from '../assets/mvp_icons';
import { mvpMaps } from '../assets/mvp_maps';
import Question from '../assets/question.gif';

export const milisecondsToHours = (miliseconds: number) =>
  moment.duration(miliseconds, 'milliseconds').asHours();

export const respawnCountdown = (time: Moment) => time.format('HH:mm:ss');

export const respawnAt = (time: Moment) =>
  `${time.format('HH:mm')} ~ ${time.add(10, 'm').format('HH:mm')}`;

/**
 * Returns the MVP sprite
 * @param id mvp id
 * @returns the sprite of the mvp
 */
export const getMvpSprite = (id: number): string => mvpIcons[id] || Question;

/**
 * Returns the MVP map image
 * @param mapname name of the map
 * @returns the sprite of the map
 */
export const getMapImg = (mapname: string): string =>
  mvpMaps[mapname] || Question;
