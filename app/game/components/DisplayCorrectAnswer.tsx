"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PromptStatus } from "../hooks/usePrompt";
type Props = {
  answer: string;
  imgUrl: string;
  setPromptStatus: (p: PromptStatus) => void;
};
export default function DisplayCorrectAnswer(props: Props) {
  const [show, setShow] = useState<boolean>(false);
  console.log("display", props.imgUrl);
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setShow(true);
        }}
        className="text-dark-white"
      >
        Check Answer
      </button>

      {/* {show && (
        <div>
          <p>Answer: {props.answer}</p>
          <Image
            src={props.imgUrl}
            width={500}
            height={500}
            alt="Picture of the answer"
          />
          <button
            onClick={(e) => {
              props.setPromptStatus(PromptStatus.REFRESH);
              setShow(false);
            }}
          >
            Next
          </button>
        </div>
      )} */}
    </div>
  );
}
