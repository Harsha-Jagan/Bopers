"use client";
import { SkinMap } from "@/data/types";
import { useEffect, useState } from "react";
import { Champion } from "../utils/types";
import { getPromptURL } from "@/data/utils";
import {
  RIOT_IMG_WIDTH,
  RIOT_IMG_HEIGHT,
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  CANVAS_ID,
} from "../utils/canvasConstants";
import useCanvas from "./useCanvas";

enum RoundStatus {
  START, //indicates that new round needs to be started
  ONGOING,
}

type Params = {
  skinMap: SkinMap; //champion names to skins map
};

/**
 * indices used for useCanvas hook to crop image
 */
type CropIndices = {
  sx: number;
  sy: number;
};

export type RoundData = {
  imageURL: string;
  cropIndices: CropIndices;
  correctAnswer: Champion;
};

/**
 * A boldle game prompt hook that manages state for game rounds
 * @param params
 * @returns
 */
export default function useGameRound(params: Params) {
  const [roundStatus, setRoundStatus] = useState<RoundStatus>(
    RoundStatus.START
  );

  //init roundData with placeholder. Will be replaced with data from api for round 1
  const [roundData, setRoundData] = useState<RoundData>({
    imageURL: "",
    cropIndices: { sx: 0, sy: 0 },
    correctAnswer: { name: "", skinName: "", skinNum: -1 },
  });

  //init canvas
  useCanvas({
    canvasID: CANVAS_ID,
    imageURL: roundData.imageURL,
    ...roundData.cropIndices,
  });

  useEffect(() => {
    if (roundStatus !== RoundStatus.START) return;
    setRoundData({ ...roundData, cropIndices: generateCropIndices() });
    console.log("useEffect prompt status inside hook - preparing prompt");
    preparePrompt();
    setRoundStatus(RoundStatus.ONGOING);
  }, [roundStatus]);

  /**
   * generate new prompt image
   */
  function preparePrompt() {
    const champ = getChampion(params.skinMap);
    setRoundData({
      ...roundData,
      correctAnswer: champ,
      imageURL: getPromptURL(champ.name, champ.skinNum),
    });
    console.log("finished creaitng new prompt!");
  }

  /**
   * Selects a random champion from given champion list
   * @param championNames list of champions
   * @returns random champion object
   */
  function getChampion(skinMap: SkinMap): Champion {
    let targetChampionName =
      Object.keys(skinMap)[
        Math.floor(Math.random() * Object.keys(skinMap).length)
      ];

    const numSkins = skinMap[targetChampionName].length;
    const tSkin =
      skinMap[targetChampionName][Math.floor(Math.random() * numSkins)];

    const result: Champion = {
      name: targetChampionName,
      skinName: tSkin.name,
      skinNum: tSkin.num,
    };

    return result;
  }

  /**
   * Helper function for generating random crop indices
   * @returns cropped indices sx and sy for context.drawImage function
   */
  function generateCropIndices() {
    let sx = Math.random() * (RIOT_IMG_WIDTH - CANVAS_WIDTH);
    let sy = Math.random() * (RIOT_IMG_HEIGHT - CANVAS_HEIGHT);
    return { sx, sy } as CropIndices;
  }

  /**
   * go to next round
   */
  function goToNextRound(){
    setRoundStatus(RoundStatus.START);
  }

  return { roundData, goToNextRound };
}
