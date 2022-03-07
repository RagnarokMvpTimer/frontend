import moment, { Moment } from 'moment';

import { mvpIcons } from '../assets/mvp_icons';
import { mvpMaps } from '../assets/mvp_maps';
import Question from '../assets/question.gif';

export const milisecondsToHours = (miliseconds: number) =>
  moment.duration(miliseconds, 'milliseconds').asHours();

export const respawnCountdown = (time: Moment) => time.format('HH:mm:ss');

export const respawnAt = (time: Moment) =>
  `${time.format('HH:mm')} ~ ${time.add(10, 'm').format('HH:mm')}`;

export const getMvpSprite = (id: number) => mvpIcons[id] || Question;

export const getMapImg = (mapname: string) => mvpMaps[mapname] || null;
