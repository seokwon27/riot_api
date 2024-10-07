"use client";

import React, { useEffect, useState } from "react";
import { ChampionRotation } from "@/types/rotation";
import { getChampionsData } from "../api/utils/serverApi";
import { Champion } from "@/types/champion";
import Link from "next/link";
import LoadingRotate from "@/components/LoadingRotate";

const RotationPage = () => {
  //데이터 상태관리
  const [championKeys, setChampionKeys] = useState<ChampionRotation>();
  const [champions, setChampions] = useState<Champion[]>();
  const [freeChampions, setFreeChampions] = useState<Champion[]>();
  const [newPlayerFreeChampions, setNewPlayerFreeChampions] = useState<Champion[]>();

  //로딩 상태관리(스켈레톤 UI)
  const [isLoadingFreeChampions, setIsLoadingFreeChampions] = useState(true);
  const [isLoadingNewPlayerChampions, setIsLoadingNewPlayerChampions] = useState(true);

  // 챔피언데이터
  const getChampion = async () => {
    const res = await getChampionsData();
    setChampions(res);
  };

  // 로테이션 정보
  const getRotate = async () => {
    const res = await fetch("/api/rotation", {
      method: "GET",
    });
    const data: ChampionRotation = await res.json();
    setChampionKeys(data);
  };

  // 챔피언, 로테이션 정보 가져오기
  useEffect(() => {
    getChampion();
    getRotate();
  }, []);

  // 로테이션 챔피언 배열 만들기
  useEffect(() => {
    if (champions && championKeys) {
      //로테이션 챔피언
      const freeData = champions?.filter((champion) =>
        championKeys?.freeChampionIds.includes(Number(champion.key))
      );
      setFreeChampions(freeData);
      setIsLoadingFreeChampions(false);

      //신규이용자 추가 챔피언
      const newPlayerRC = champions?.filter((champion) =>
        championKeys?.freeChampionIdsForNewPlayers.includes(Number(champion.key))
      );
      setNewPlayerFreeChampions(newPlayerRC);
      setIsLoadingNewPlayerChampions(false);
    }
  }, [championKeys, champions]);

  return (
    <div className="p-5">
      <div>
        <p className="text-center font-bold text-3xl text-red-500">로테이션 챔피언</p>
        {/* 로테이션챔피언 */}
        {isLoadingFreeChampions ? (
          <LoadingRotate />
        ) : (
          <div className="grid grid-cols-5 gap-4 items-center my-[20px]">
            {freeChampions?.map((champion) => {
              const imageurl = `https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.id}.png`;
              return (
                <div key={champion.id} className="flex flex-col justify-center items-center">
                  <Link href={`/champions/${champion.id}`}>
                    <img src={imageurl} />
                  </Link>
                  <div>{champion.name}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div>
        <p className="text-center font-bold text-3xl text-red-500">신규 이용자 추가 챔피언</p>
        {/* 신규 이용자 추가 챔피언 */}
        {isLoadingNewPlayerChampions ? (
          <LoadingRotate />
        ) : (
          <div className="grid grid-cols-5 gap-4 items-center my-[20px]">
            {newPlayerFreeChampions?.map((champion) => {
              const imageurl = `https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.id}.png`;
              return (
                <div key={champion.id} className="flex flex-col justify-center items-center">
                  <Link href={`/champions/${champion.id}`}>
                    <img src={imageurl} />
                  </Link>
                  <div>{champion.name}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default RotationPage;
