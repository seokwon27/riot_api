import { getChampionsData } from "@/app/api/utils/serverApi";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const data = await getChampionsData();

  const champion = data.find((champ) => champ.id === params.id);

  return (
    <div
      className="h-screen bg-black/50"
      style={{
        backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion?.id}_0.jpg)`,
        backgroundSize: "cover",
      }}
    >
      <div className="h-screen bg-gradient-to-r from-black to-black/50">
        챔피언 상세페이지 {params.id}
      </div>
    </div>
  );
};

export default page;
