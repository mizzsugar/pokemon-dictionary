import { Pokemon } from "@/domain/entities"
import { PokemonRepository } from "@/repository/repository"

export class Guest {
  static fetchPokemonById(id: number): Promise<Pokemon> {
    return PokemonRepository.fetchPokemonById(id)
  }

  static query(name: string): Promise<Pokemon[]> {
    return PokemonRepository.query(name)
  }
}
