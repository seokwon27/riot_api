const apikey = process.env.RIOT_API_KEY;

const routeData = async () => {
  const res = await fetch("https://kr.api.riotgames.com/lol/platform/v3/champion-rotations", {
    method: "GET",
    headers:{
      X-Riot-Token: apikey,
    }

  });
};
