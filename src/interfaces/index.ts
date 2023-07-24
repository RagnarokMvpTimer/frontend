interface IMapMark {
  x: number;
  y: number;
}

interface IMvp {
  id: number;
  name: string;
  spawn: Array<{
    mapname: string;
    respawnTime: number;
  }>;
  stats: {
    level: number;
    health: number;
    baseExperience: number;
    jobExperience: number;
  };
  deathTime?: Date;
  deathMap?: string;
  deathPosition?: IMapMark;
}
