export const typeToJapanese = (from: string): string => {
  switch (from) {
    case 'bug':
      return 'むし';
    case 'dragon':
      return 'ドラゴン';
    case 'fairy':
      return 'フェアリー';
    case 'fire':
      return 'ほのお';
    case 'ghost':
      return 'ゴースト';
    case 'ground':
      return 'じめん';
    case 'normal':
      return 'ノーマル';
    case 'psychic':
      return 'エスパー';
    case 'steel':
      return 'はがね';
    case 'dark':
      return 'あく';
    case 'electric':
      return 'でんき';
    case 'fighting':
      return 'かくとう';
    case 'flying':
      return 'ひこう';
    case 'grass':
      return 'くさ';
    case 'ice':
      return 'こおり';
    case 'poison':
      return 'どく';
    case 'rock':
      return 'いわ';
    case 'water':
      return 'みず';
    default:
      return '不明';
  }
}
