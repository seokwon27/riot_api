import React from "react";
import { getChampionsData } from "../api/utils/serverApi";
import { Champion } from "@/types/champion";
import Link from "next/link";

const championPage = async () => {
  const datas = await getChampionsData();

  // const champions: Champion[] = Object.values(datas).map((value) => {
  //   return value;
  // });

  return (
    <div className="p-5 w-[100%] max-w-[1920px] m-auto">
      <div className="text-center font-bold text-3xl text-red-500">챔피언페이지</div>
      <div className="grid grid-cols-5 gap-4 items-center mt-6">
        {datas.map((champion: Champion) => {
          const imageurl = `https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.id}.png`;
          return (
            <div key={champion.id} className="flex flex-col justify-center items-center">
              <Link href={`/champions/${champion.id}`}>
                <img src={imageurl} />
              </Link>
              <div className="text-titlecolor">{champion.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default championPage;
