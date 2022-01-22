export interface Mvp {
  id: number;
  name: string;
  maps: Array<{
    mapName: string;
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
}
