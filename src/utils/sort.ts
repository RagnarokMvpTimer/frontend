import { Mvp } from '../interfaces';

function getFastestRespawn(mvp: Mvp) {
  if (mvp.spawn.length === 0) return 0;
  return mvp.spawn.sort((i) => i.respawnTime)[0].respawnTime;
}

export function sortBy(field: string) {
  if (!field || field === 'none') {
    return () => 0;
  }

  if (['level', 'health', 'baseExperience', 'jobExperience'].includes(field)) {
    return (a: Mvp, b: Mvp) => a['stats'][field] - b['stats'][field];
  }

  if (field === 'respawnTime') {
    return (a: Mvp, b: Mvp) => getFastestRespawn(a) - getFastestRespawn(b);
  }

  return (a: Mvp, b: Mvp) => a[field] - b[field];
}
