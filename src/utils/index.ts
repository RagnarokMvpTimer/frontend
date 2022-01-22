import moment, { Moment } from 'moment';

export const milisecondsToHours = (miliseconds: number) =>
  moment.duration(miliseconds, 'milliseconds').asHours();

export const respawnCountdown = (time: Moment) => time.format('HH:mm:ss');

export const respawnAt = (time: Moment) =>
  `${time.format('HH:mm')} ~ ${time.add(10, 'm').format('HH:mm')}`;
