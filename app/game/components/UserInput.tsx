"use client";

import Input from "@/app/components/Input";
import React, { useState } from "react";

type Props = {
  verifyAnswer: () => boolean;
  setAnswer: (answer: string) => void;
};
export default function UserInput(props: Props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (props.verifyAnswer()) {
          console.log("you got it right");
        } else {
          console.log("you got it wrong");
        }
      }}
      className="p-3"
    >
      <Input
        onInput={(e) => {
          const element = e.target as HTMLInputElement;
          const value = element.value;
          props.setAnswer(value);
        }}
        id="answer"
        placeHolder="Enter Champion Name"
        size="text-md"
      />
      <button type="submit" className="text-dark-white pl-3">
        Submit
      </button>
    </form>
  );
}
