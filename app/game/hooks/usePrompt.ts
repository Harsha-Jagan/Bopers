"use client";
import { SkinMap } from "@/data/types";
import React, { useEffect, useState } from "react";
import { Champion, DEFAULT_CHAMPION } from "../utils/types";
import { getPromptURL } from "@/data/utils";
import {
  RIOT_IMG_WIDTH,
  RIOT_IMG_HEIGHT,
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  CANVAS_ID,
} from "../utils/canvasConstants";
import useCanvas from "./useCanvas";

export enum PromptStatus {
  REFRESH, //need to generate new prompt
  REFRESHED, //finished generating prompt, no action needed
}

/**
 * Prop types for usePrompt hook
 */
type Params = {
  skinMap: SkinMap; //champion names to skins map
};

type CropIndices = {
  sx: number;
  sy: number;
}

/**
 * A prompt hook that manages state for generating game prompt and updating canvas
 * @param params
 * @returns
 */
export default function usePrompt(params: Params) {
  const [promptStatus, setPromptStatus] = useState<PromptStatus>(
    PromptStatus.REFRESHED
  );
  const [promptTarget, setPromptTarget] = useState<Champion>(DEFAULT_CHAMPION);
  const [promptImageURL, setPromptImageURL] = useState<string>("");
  const [cropIndices, setCropIndices] = useState<CropIndices>(generateCropIndices());
  useCanvas({
    canvasID: CANVAS_ID,
    imageURL: promptImageURL,
    ...cropIndices
  });

  useEffect(() => {
    if (promptStatus !== PromptStatus.REFRESH) return;
    setCropIndices(generateCropIndices());
    console.log("useEffect prompt status inside hook - preparing prompt");
    preparePrompt();
    setPromptStatus(PromptStatus.REFRESHED);
  }, [promptStatus]);

  /**
   * generate new prompt image
   */
  function preparePrompt() {
    const champ = getChampion(params.skinMap);

    setPromptTarget(champ);
    setPromptImageURL(getPromptURL(champ.name, champ.skinNum));
    console.log("finished creaitng new prompt!");
  }

  /**
   * Selects a random champion from given champion list
   * @param championNames list of champions
   * @returns random champion object
   */
  function getChampion(skinMap: SkinMap): Champion {
    let targetChampionName =
      Object.keys(skinMap)[Math.floor(Math.random() * Object.keys(skinMap).length)];

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
    return {sx, sy} as CropIndices;
  }

  return { setPromptStatus, currPromptAnswer: promptTarget, currPromptURL: promptImageURL };
}
