import { Pokemon } from "@/domain/entities"
import { PokemonFilter } from "@/domain/dto"
import { PokemonRepository } from "@/repository/repository"


export class Guest {
  static fetchPokemonById(id: number): Promise<Pokemon> {
    return PokemonRepository.fetchPokemonById(id)
  }

  static query(filter?: PokemonFilter): Promise<Pokemon[]> {
    return PokemonRepository.query(filter)
  }
}
