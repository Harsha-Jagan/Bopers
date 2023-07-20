import React from "react";

type Props = {
  children: React.ReactNode;
};

function Card(props: Props) {
  return <div>{props.children}</div>;
}

export default Card;
