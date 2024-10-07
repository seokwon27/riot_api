import { getChampionDetail } from "@/app/api/utils/serverApi";
import tagsSwitch from "@/components/tags";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

const roleIcons: { [key: string]: string } = {
  Tank: "/Tank.png",
  Fighter: "/Fighter.png",
  Mage: "/Mage.png",
  Assassin: "/Assassin.png",
  Support: "/Support.png",
  Marksman: "/Marksman.png",
};

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
    <div className="bg-zinc-950">
      <div
        className="h-screen max-w-[1920px] w-[100%] m-auto"
        style={{
          backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg)`,
          backgroundSize: "cover",
        }}
      >
        <div className="h-screen bg-gradient-to-r from-black to-black/50 flex flex-col justify-center">
          <div className=" mx-[30px] flex flex-col justify-around h-[70%] ">
            <div className="flex flex-col max-w-[700px] gap-5">
              <div className="text-2xl font-bold text-titlecolor">{champion.title}</div>
              <div className="text-5xl font-black text-white">{champion.name}</div>
              <div className="text-lg text-white">{champion.lore}</div>
            </div>
            <div className="flex gap-6">
              <div className="text-center border-[1px] border-amber-200 p-[8px] w-[130px] h-[130px]">
                <div className=" bg-white/25 text-xs w-[112px] h-[112px] flex justify-center items-center">
                  {champion.tags.length === 1 ? (
                    <div className="flex flex-col items-center gap-1">
                      <Image
                        width={32}
                        height={32}
                        src={roleIcons[champion.tags[0]]}
                        alt={champion.tags[0]}
                      />
                      <p className="text-white">역할군</p>
                      <p className="text-titlecolor">{tagsSwitch(champion.tags[0])}</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex space-x-2">
                        <Image
                          src={roleIcons[champion.tags[0]]}
                          alt={champion.tags[0]}
                          width={32}
                          height={32}
                        />
                        <Image
                          src={roleIcons[champion.tags[1]]}
                          alt={champion.tags[1]}
                          width={32}
                          height={32}
                        />
                      </div>
                      <p className="text-white">역할군</p>
                      <p className="text-titlecolor">{`${tagsSwitch(
                        champion.tags[0]
                      )} / ${tagsSwitch(champion.tags[1])}`}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="text-center border-[1px] border-amber-200 p-[8px] w-[130px] h-[130px]">
                <div className=" bg-white/25 text-xs w-[112px] h-[112px] flex flex-col justify-center items-center gap-1">
                  <div className="text-white">난이도</div>
                  <div className="text-titlecolor">
                    {champion.info.difficulty < 4
                      ? "낮음"
                      : champion.info.difficulty < 7
                      ? "보통"
                      : champion.info.difficulty < 9
                      ? "높음"
                      : "매우 높음"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-skillBgColor h-[800px] max-w-[1920px] w-[100%] m-auto content-center">
        <div className="flex flex-col gap-2 mx-[160px] px-[48px]">
          <div className="flex flex-col text-center">
            <div className="font-bold text-6xl text-white">스킬</div>
            <div className="flex gap-3 justify-around mt-6">
              <div>
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/passive/${champion.passive.image.full}`}
                />
                <p className="text-white mt-3">{champion.passive.name}</p>
              </div>
              {champion.spells.map((spell) => {
                return (
                  <div key={spell.id}>
                    <img
                      src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/spell/${spell.image.full}`}
                    />
                    <p className="text-white mt-3">{spell.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default detailPage;
