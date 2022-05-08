import pkg from '@prisma/client';

import { Pokemon } from "@/domain/entities";
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

  static async query(name: string): Promise<Pokemon[]> {
    const pokemons = await prisma.pokemon.findMany({
      where: {name: {contains: name}},
      include: { types: { include: { type: true } } },
    })
    return pokemons.map(pokemon => convertPokemonFromRepository(pokemon));
  }
}
