import { createSpawnPoint } from './world/spawn.js';

export function bootstrap() {
  return {
    world: createSpawnPoint(),
    startedAt: new Date().toISOString(),
  };
}
