"use client";

import React, { useState } from "react";
import Image from "next/image";

/**
 * param object passed from GameClient
 */
type Props = {
  answer: string; //correct answer
  imgUrl: string; //full image of prompt
  goToNextRound: () => void;
};

/**
 * Displays correct answer to user after they give up.
 * Hope to remove this component soon once other game functionality are developed.
 * @param props
 * @returns component for displaying correct answer and full prompt image to user
 */
export default function DisplayCorrectAnswer(props: Props) {
  //init internal state
  const [show, setShow] = useState<boolean>(false);
  const checkAnswerButton = (
    <button
      onClick={() => {
        setShow(!show);
      }}
    >
      Check Answer
    </button>
  );

  if (!show) return checkAnswerButton;
  return (
    <div>
      <div>
        <p>Answer: {props.answer}</p>
        <Image
          src={props.imgUrl}
          width={500}
          height={500}
          alt="Picture of the answer"
        />
      </div>
      <button
        onClick={() => {
          props.goToNextRound();
          setShow(!show);
        }}
        className="text-dark-white"
      >
        Next
      </button>
    </div>
  );
}
