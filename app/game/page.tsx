import React from "react";
import { getSkinMap } from "@/data/api";
import { SkinMap } from "@/data/types";
import GameClient from "./components/GameClient";
export default async function Game() {
  let championMap: SkinMap = await getSkinMap();
  // console.log(championMap);
  return <GameClient skinMap={championMap} />;
}
