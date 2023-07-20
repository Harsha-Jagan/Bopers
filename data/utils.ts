"use client"

const RIOT_API_IMG_URL = process.env.NEXT_PUBLIC_RIOT_API_IMG_URL;

/**
 * Returns url for getting champion skin image
 * @param championName champion name
 * @param skinNum Riot's skin number
 * @returns url for champion skin image
 */
function getPromptURL(championName: string, skinNum: number): string {
    return RIOT_API_IMG_URL + `/${championName}_${skinNum}.jpg`;
  }

  export {getPromptURL};