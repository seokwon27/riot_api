"use server";

//버전정보
const getVersion = async (): Promise<string> => {
  const res = await fetch("https://ddragon.leagueoflegends.com/api/versions.json").then((data) =>
    data.json()
  );
  return res[0];
};

//챔피언 데이터(ISR)
export const getChampionsData = async (): Promise<object | undefined> => {
  try {
    const version = await getVersion();

    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
      {
        next: {
          revalidate: 60,
        },
      }
    ).then((data) => data.json());
    // console.log(res.data);

    return res.data;
  } catch (error) {
    console.error("챔피언 api 에러", error);
  }
};
