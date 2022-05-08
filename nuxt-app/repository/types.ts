import { Pokemon, PokemonType as _PokemonType, Type as _Type } from '@prisma/client';

export type PokemonType = Pokemon & {
  id: number;
  name: string;
  types?: Array<PokemonTypeType>;
};


export type PokemonTypeType = _PokemonType & {
  typeKey: string;
  pokemonId: number;
  type: Type;
}


export type Type = _Type & {
  key: number;
  displayName: string;
};
