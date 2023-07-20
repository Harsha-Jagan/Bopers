import React from "react";
import { PromptStatus } from "../hooks/usePrompt";

type Props = {
  promptStatus: (p: PromptStatus) => void;
};

export default function NextButton(props: Props) {
  return (
    <div>
      <button
        onClick={() => {
          props.promptStatus(PromptStatus.REFRESH);
        }}
        className="text-dark-white"
      >
        Next
      </button>
    </div>
  );
}
