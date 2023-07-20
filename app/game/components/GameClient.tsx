"use client";
import React, { useEffect, useState } from "react";
import {
  CANVAS_ID,
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
} from "../utils/canvasConstants";
import UserInput from "./UserInput";
import DisplayCorrectAnswer from "./DisplayCorrectAnswer";
import { SkinMap } from "@/data/types";
import usePrompt from "../hooks/usePrompt";
import { PromptStatus } from "../hooks/usePrompt";
import { Champion } from "../utils/types";
import NextButton from "./NextButton";
import Card from "../../components/Card";
/**
 *
 */
type GameClientProps = {
  skinMap: SkinMap;
};

/**
 *
 */
enum RoundStatus {
  STARTED,
  TIMEDOUT,
  GIVEUP,
  FINISHED,
}

/**
 *
 * @param props
 * @returns
 */
export default function GameClient(props: GameClientProps) {
  /**
   *
   */
  const [score, setScore] = useState<number>(0);

  const { setPromptStatus, currPromptAnswer, currPromptURL } = usePrompt({
    skinMap: props.skinMap,
  });
  const [roundStatus, setRoundStatus] = useState<RoundStatus>(
    RoundStatus.STARTED
  );
  const [answer, setAnswer] = useState<string>("");

  /**
   *
   */
  useEffect(() => {
    if (!RoundStatus.FINISHED) return;

    console.log("Game client use effect - create prompt");
    setPromptStatus(PromptStatus.REFRESH);

    setRoundStatus(RoundStatus.STARTED);
  }, [roundStatus]);

  useEffect(() => {
    console.log(score);
  }, [score]);

  /**
   *
   * @returns
   */
  function isCorrect() {
    console.log(currPromptAnswer);
    if (roundStatus !== RoundStatus.STARTED) return true;
    if (verifyAnswer(answer, currPromptAnswer)) {
      setScore((prevScore) => prevScore + 1);
      setRoundStatus(RoundStatus.FINISHED);
      return true;
    } else {
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

        <UserInput setAnswer={setAnswer} verifyAnswer={isCorrect} />

        <DisplayCorrectAnswer
          answer={currPromptAnswer.skinName}
          imgUrl={currPromptURL}
          setPromptStatus={setPromptStatus}
        />

        <NextButton promptStatus={setPromptStatus} />
      </div>
    </div>
  );
}
