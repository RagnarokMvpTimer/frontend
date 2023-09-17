function getFastestRespawn(mvp: IMvp) {
  if (mvp.spawn.length === 0) return 0;
  return mvp.spawn.sort((i) => i.respawnTime)[0].respawnTime;
}

export function sortBy(field?: string) {
  if (!field || field === 'none') {
    return (a: IMvp, b: IMvp) => a.id - b.id;
  }

  if (['level', 'health', 'baseExperience', 'jobExperience'].includes(field)) {
    return (a: IMvp, b: IMvp) => a.stats[field] - b.stats[field];
  }

  if (field === 'respawnTime') {
    return (a: IMvp, b: IMvp) => getFastestRespawn(a) - getFastestRespawn(b);
  }

  if (field === 'name') {
    return (a: IMvp, b: IMvp) => a.name.localeCompare(b.name);
  }

  return (a: IMvp, b: IMvp) => a[field] - b[field];
}
