interface ItemImage {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

interface ItemGold {
  base: number;
  purchasable: boolean;
  total: number;
  sell: number;
}

interface ItemMaps {
  [key: string]: boolean;
}

interface ItemStats {
  [key: string]: number;
}

export interface Item {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into?: string[];
  image: ItemImage;
  gold: ItemGold;
  tags: string[];
  maps: ItemMaps;
  stats: ItemStats;
}

export interface Items {
  [key: string]: Item;
}

export interface ItemsData {
  data: Items;
}
