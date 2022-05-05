import { Pokemon, PokemonType as _MonsterType, Type as _Type } from '@prisma/client';

export type MonsterType = Pokemon & {
  id: number;
  name: string;
  types: Array<Type>;
};

export type Type = _Type & {
  key: number;
  name: string;
};
