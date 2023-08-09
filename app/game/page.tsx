import React from "react";
import { getSkinMap } from "@/data/api";
import { SkinMap } from "@/data/types";
import GameClient from "./components/GameClient";

/**
 * Server component wrapper for gameClient
 * @returns gameclient
 */
export default async function Game() {
  //get champion map during server load
  let championMap: SkinMap = await getSkinMap();
  return <GameClient skinMap={championMap} />;
}
