"use server";

import { Champion, ChampionDetailTable, ChampionTable } from "@/types/champion";
import { Item, ItemsData } from "@/types/items";

//버전정보
const getVersion = async (): Promise<string> => {
  const res = await fetch("https://ddragon.leagueoflegends.com/api/versions.json").then((data) =>
    data.json()
  );
  if (!res.ok) {
    throw new Error("버전정보 확인 실패");
  }
  return res[0];
};

//챔피언 데이터(ISR)
export const getChampionsData = async () => {
  try {
    const version = await getVersion();

    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
      {
        next: {
          revalidate: 86400,
        },
      }
    );
    if (!res.ok) {
      throw new Error("챔피언데이터 확인 실패");
    }
    const data: ChampionTable = await res.json();

    //배열형태로 전환 후 리턴
    const newData: Champion[] = Object.values(data.data).map((value) => {
      return value;
    });
    return newData.sort((a: Champion, b: Champion) =>
      a.name < b.name ? -1 : a.name > b.name ? 1 : 0
    );
  } catch (error) {
    console.error("챔피언 api 에러", error);
  }
  return [];
};

//챔피언 상세정보
export const getChampionDetail = async (id: string): Promise<ChampionDetailTable> => {
  try {
    const version = await getVersion();
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`
    );
    if (!res.ok) {
      throw new Error("상세정보 확인 실패");
    }
    const data = await res.json();
    const value: ChampionDetailTable = data.data;

    return value;
  } catch (error) {
    console.error(error);
  }
  return {};
};

// 아이템 정보
export const getItemsData = async () => {
  try {
    const version = await getVersion();

    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`
    );

    if (!res.ok) {
      throw new Error("아이템정보 확인 실패");
    }
    const data: ItemsData = await res.json();

    const items: Item[] = Object.values(data.data).map((value) => value);
    return items;
  } catch (error) {
    console.error(error);
  }
  return [];
};
