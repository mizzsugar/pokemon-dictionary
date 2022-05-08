import { Type } from "@/domain/valueObjects";

export class Pokemon {
  id: number;
  name: string;
  types?: Type[];

  constructor(id: number, name: string, types: Type[]) {
    if (types.length === 0 || types.length > 2) {
      throw TypeError('ポケモンのタイプは1または2種類です')
    }
    this.id = id;
    this.name = name;
    this.types = types;
  }

  public equals(other: Pokemon): boolean {
    return other.id == this.id
  }
}
