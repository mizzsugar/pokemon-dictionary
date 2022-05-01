import { Monster, MonsterType as _MonsterType, Type as _Type } from '@prisma/client';

export type MonsterType = Monster & {
  id: number;
  name: string;
  types: Array<Type>;
};

export type Type = _Type & {
  key: number;
  name: string;
};
