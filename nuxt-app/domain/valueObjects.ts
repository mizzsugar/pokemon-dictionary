const TypeIndex = {
  bug: "bug",
  dragon: "dragon",
  fairy: "fairy",
  fire: "fire",
  ghost: "ghost",
  ground: "ground",
  normal: "normal",
  psychic: "psychic",
  steel: "steel",
  dark: "dark",
  electric: "electric",
  fighting: "fighting",
  flying: "flying",
  grass: "grass",
  ice: "ice",
  poison: "poison",
  rock: "rock",
  water: "water" 
} as const;


export type Type = typeof TypeIndex[keyof typeof TypeIndex];
// 上は type Type = 'bug' | 'dragon' | ... と同じ意味になります

export function isType(value: string): boolean {
  return value in TypeIndex;
}


// NOTE: 日本語訳にするのってvalueobjectの責務なのかな？
export function toJapanese(from: Type) {
switch (from) {
    case TypeIndex.bug:
      return "むし"
    case TypeIndex.dragon:
      return "ドラゴン"
    case TypeIndex.fairy:
      return "フェアリー"
    case TypeIndex.fire:
      return "ほのお"
    case TypeIndex.ghost:
      return "ゴースト"
    case TypeIndex.ground:
      return "じめん"
    case TypeIndex.normal:
      return "ノーマル"
    case TypeIndex.psychic:
      return "エスパー"
    case TypeIndex.steel:
      return "はがね"
    case TypeIndex.dark:
      return "あく"
    case TypeIndex.electric:
      return "でんき"
    case TypeIndex.fighting:
      return "かくとう"
    case TypeIndex.flying:
      return "ひこう"
    case TypeIndex.grass:
      return "くさ"
    case TypeIndex.ice:
      return "こおり"
    case TypeIndex.poison:
      return "どく"
    case TypeIndex.rock:
      return "いわ"
    case TypeIndex.water:
      return "みず"
  }
}
