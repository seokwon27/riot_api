"use server";

import { Champion, ChampionTable } from "@/types/champion";

//버전정보
const getVersion = async (): Promise<string> => {
  const res = await fetch("https://ddragon.leagueoflegends.com/api/versions.json").then((data) =>
    data.json()
  );
  return res[0];
};

//챔피언 데이터(ISR)
export const getChampionsData = async (): Promise<Champion[]> => {
  try {
    const version = await getVersion();

    const res: { type: string; format: string; version: string; data: ChampionTable } = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
      {
        next: {
          revalidate: 60,
        },
      }
    ).then((data) => data.json());
    // console.log(res.data);

    const data: Champion[] = Object.values(res.data).map((value) => {
      return value;
    });

    return data;
  } catch (error) {
    console.error("챔피언 api 에러", error);
  }
  return [];
};
