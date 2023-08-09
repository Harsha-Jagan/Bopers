"use client";
import React, { useState } from "react";
import {
  CANVAS_ID,
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
} from "../utils/canvasConstants";
import UserInput from "./UserInput";
import DisplayCorrectAnswer from "./DisplayCorrectAnswer";
import { SkinMap } from "@/data/types";
import useGameRound from "../hooks/useGameRound";
import { Champion } from "../utils/types";

/**
 *  Skinmap fetched from riot's api containing list of skins for each champion
 */
type GameClientProps = {
  skinMap: SkinMap;
};

/**
 *  Handles logic for game state for Boldle
 * @param props
 * @returns renders components for game page
 */
export default function GameClient(props: GameClientProps) {
  /**
   *  init state for tracking user's score, guess, and roundData
   */
  const [score, setScore] = useState<number>(0);
  const { roundData, goToNextRound } = useGameRound({
    skinMap: props.skinMap,
  });
  const [userGuess, setUserGuess] = useState<string>("");

  /**
   *  update score and show next round if user guesses correctly.
   * @returns true if use guesses correctly, false otherwise
   */
  function tryUpdateScore() {
    if (verifyAnswer(userGuess, roundData.correctAnswer)) {
      setScore((prevScore) => prevScore + 1);
      goToNextRound();
      return true;
    } else {
      console.log("correct ans is ", roundData.correctAnswer);
      return false;
    }
  }

  /**
   * Verifies that the guess made by user matches the target skin name
   * @param answer user's guess
   * @param target correct answer
   * @returns boolean true if guess is right, false otherwise
   */
  function verifyAnswer(answer: string, target: Champion) {
    return answer.toLowerCase() === target.skinName.toLowerCase();
  }

  return (
    <div className="grow flex-col flex align-middle justify-center text-center m-auto [&>*]:font-beaufort">
      <p className="text-dark-white text-score p-2 bg-gray-700">
        Your Score: {score}
      </p>
      <div className="bg-gray-800 px-16 py-12 flex-col flex align-middle justify-center text-center mx-auto">
        <h4 className="text-whiteish text-cardTitle font-bold">
          This splash art belongs to which champion?
        </h4>
        <canvas
          id={CANVAS_ID}
          width={`${CANVAS_WIDTH}px`}
          height={`${CANVAS_HEIGHT}px`}
          className="border border-black rounded-m mt-4"
        />

        <UserInput setAnswer={setUserGuess} verifyAnswer={tryUpdateScore} />

        <DisplayCorrectAnswer
          answer={roundData.correctAnswer.skinName}
          imgUrl={roundData.imageURL}
          goToNextRound={goToNextRound}
        />
      </div>
    </div>
  );
}
