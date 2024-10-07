import React from "react";
import { getItemsData } from "../api/utils/serverApi";

const itemsPage = async () => {
  const items = await getItemsData();
  return (
    <div className="p-5">
      <div className="text-center font-bold text-3xl text-red-500">아이템 목록</div>
      <div className="p-5 grid grid-cols-6 gap-2">
        {items.map((item) => {
          return (
            <div key={`${item.name}-${item.image.full}`} className="border-2 rounded-lg  p-4">
              <div className="flex justify-center">
                <img
                  className="h-[108px] w-[108px]"
                  src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item.image.full}`}
                />
              </div>
              <p className="text-red-500 font-bold mt-2">{item.name}</p>
              <p>{item.plaintext}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default itemsPage;
