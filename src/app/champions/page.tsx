import React from "react";
import { getChampionsData } from "../api/utils/serverApi";
import { Champion } from "@/types/champion";

const championPage = async () => {
  const datas = await getChampionsData();
  // console.log("==========시작==========");
  // console.log(datas);
  // console.log("========끝=======");

  const champions: { key: string; value: Champion }[] = Object.entries(datas).map(
    ([key, value]) => {
      return {
        key: value,
      };
    }
  );
  console.log(champions);

  return (
    <div>
      <div>챔피언페이지</div>
    </div>
  );
};

export default championPage;
