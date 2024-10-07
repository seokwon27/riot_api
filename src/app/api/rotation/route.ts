import { ChampionRotation } from "@/types/rotation";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const API_KEY: string | undefined = process.env.NEXT_PUBLIC_RIOT_API_KEY;
    const res = await fetch("https://kr.api.riotgames.com/lol/platform/v3/champion-rotations", {
      headers: {
        "X-Riot-Token": API_KEY || "",
      },
    });
    // console.log(API_KEY);

    const data: ChampionRotation = await res.json();
    // console.log(data);

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
  }
}
