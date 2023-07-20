import React from "react";

type Props = {
  placeHolder: string;
  onInput?: (e: any) => void;
  id?: string;
  size: string;
};

const Input = (props: Props) => {
  return (
    <input
      className={`mt-12 border-brown block mx-auto text-center bg-whiteish/0 placeholder-dark-white text-dark-white font-beaufortLight  border-b focus:outline-none focus:placeholder-opacity-0 focus:transition-all ${props.size}`}
      placeholder={props.placeHolder}
      id={props.id}
      onInput={props.onInput}
    />
  );
};

export default Input;
