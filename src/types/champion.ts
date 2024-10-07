// =========== 기본정보 타입 ===============
interface ChampionInfo {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}

interface Image {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

interface ChampionStats {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
}

//챔피언 정보 타입
export interface Champion {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: ChampionInfo;
  image: Image;
  tags: string[];
  partype: string;
  stats: ChampionStats;
}

//챔피언 목록 타입
export interface ChampionTable {
  [key: string]: Champion;
}

// =========== 상세정보 타입 ===============

interface ChampionSkin {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
}

interface ChampionStats {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
}

interface ChampionSpellLevelTip {
  label: string[];
  effect: string[];
}

interface ChampionSpell {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  leveltip: ChampionSpellLevelTip;
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  datavalues: Record<string, unknown>;
  effect: (number[] | null)[];
  effectBurn: (string | null)[];
  vars: unknown[];
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: Image;
  resource: string;
}

interface ChampionPassive {
  name: string;
  description: string;
  image: Image;
}

export interface ChampionDetail {
  id: string;
  key: string;
  name: string;
  title: string;
  image: Image;
  skins: ChampionSkin[];
  lore: string;
  blurb: string;
  allytips: string[];
  enemytips: string[];
  tags: string[];
  partype: string;
  info: ChampionInfo;
  stats: ChampionStats;
  spells: ChampionSpell[];
  passive: ChampionPassive;
  recommended: unknown[];
}

export interface ChampionDetailTable {
  [key: string]: ChampionDetail;
}
