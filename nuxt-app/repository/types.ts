import { Monster } from '@prisma/client';

export type MonsterType = Monster & {
  id: number;
  name: string;
};
