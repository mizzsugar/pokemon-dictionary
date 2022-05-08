import { Pokemon as RepositoryPokemon, PokemonType as RepositoryPokemonTypeType } from "@prisma/client";
import { Pokemon } from "@/domain/entities";
import { Type, isType } from "@/domain/valueObjects";


export type PokemonValue = RepositoryPokemon & {
    types?: RepositoryPokemonTypeType[]
  }

export function convertPokemonFromRepository(from: PokemonValue): Pokemon {
  const {
    id,
    name,
    types,
  } = from;

  return new Pokemon(
    id,
    name,
    types ? types.map(type => convertTypeFromPokemonTypeRepository(type)) : []
  )
}


function convertTypeFromPokemonTypeRepository(from: RepositoryPokemonTypeType): Type {
  if (isType(from.typeKey)) {
    return <Type>from.typeKey;
  }
  throw new TypeError('想定されないTypeが含まれています。')
}
