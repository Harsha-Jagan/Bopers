import "server-only";
import { SkinMap } from "./types";
const RIOT_API_DATA_URL = process.env.RIOT_API_DATA_URL;

// async function http<T>(request: RequestInfo): Promise<T> {
//   const response = await fetch(request, { method: "POST" });
//   const body = await response.json();
//   return body;
// }

/**
 * Fetches list of champion names from Riot's data dragon api
 * @returns champion names array
 */
async function getChampionNames(): Promise<string[]> {
  try {
    const response = await fetch(RIOT_API_DATA_URL + "/champion.json");
    const data = await response.json();
    const names = Object.keys(data.data);

    return names;
  } catch (e) {
    console.error(e);
    return [];
  }
}

/**
 * Constructs a mapping of champion name to list of skins
 * @returns skinmap
 */
async function getSkinMap(): Promise<SkinMap> {
  const championNames = await getChampionNames();
  const championMap: SkinMap = {};
  for (const champ of championNames) {
    championMap[champ] = await getSkins(champ);
  }
  return championMap;
}

/**
 * Fetches a list of skins for a champion from Riot's data dragon api
 * @param championName name of champion
 * @returns list of skins
 */
async function getSkins(championName: string) {
  if (!championName) return;

  const response = await fetch(
    RIOT_API_DATA_URL + `/champion/${championName}.json`
  );
  const data = await response.json();
  const skins = data.data[championName].skins;
  return skins;
}

export { getSkinMap };
