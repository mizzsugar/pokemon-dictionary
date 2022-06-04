import pkg from '@prisma/client';

import { Pokemon } from "@/domain/entities";
import { PokemonFilter } from '@/domain/dto';
import { convertPokemonFromRepository } from "@/domain/converter";


const { PrismaClient } = pkg;

const prisma = new PrismaClient({
  log: ['query']
})


export class PokemonRepository {
  static async fetchPokemonById(id: number): Promise<Pokemon> {
    const pokemon = await prisma.pokemon.findUnique({
      where: {
        id: id,
      },
      include: { types: { include: { type: true } } },
    })
    if (!pokemon) {
      throw new Error('指定されたIDのポケモンが見つかりませんでした')
    }
    return convertPokemonFromRepository(pokemon);
  }

  static async query(filter?: PokemonFilter): Promise<Pokemon[]> {
    if (!filter) {
      return PokemonRepository.all();
    }
    const pokemons = await prisma.pokemon.findMany({
      where: {name: {contains: filter.name}},
      include: { types: { include: { type: true } } },
    })
    return pokemons.map(pokemon => convertPokemonFromRepository(pokemon));
  }
  static async all(): Promise<Pokemon[]> {
    const pokemons = await prisma.pokemon.findMany({
      include: { types: { include: { type: true } } },
    })
    return pokemons.map(pokemon => convertPokemonFromRepository(pokemon));
  }
}
