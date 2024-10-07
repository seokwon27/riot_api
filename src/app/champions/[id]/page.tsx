import { getChampionDetail } from "@/app/api/utils/serverApi";
import { Metadata } from "next";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;

  const data = await getChampionDetail(id);
  const champion = data[id];

  return {
    title: champion.name,
  };
}

const detailPage = async ({ params }: { params: { id: string } }) => {
  // const championDetail = await getChampionDetail(params.id)
  const id = params.id;

  const data = await getChampionDetail(id);
  const champion = data[id];
  // console.log("챔피언 디테일", champion);

  return (
    <>
      <div
        className="h-screen max-w-[1920px] w-[100%]"
        style={{
          backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg)`,
          backgroundSize: "cover",
        }}
      >
        <div className="h-screen bg-gradient-to-r from-black to-black/50 flex flex-col justify-center">
          <div className=" mx-[30px] flex flex-col justify-around h-[70%]">
            <div className="flex flex-col max-w-[700px] gap-5">
              <div className="text-2xl font-bold text-titlecolor">{champion.title}</div>
              <div className="text-5xl font-black text-white">{champion.name}</div>
              <div className="text-lg text-white">{champion.lore}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default detailPage;
