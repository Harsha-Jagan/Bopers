"use client";

import React from "react";
export default function Button(props: { helloData: string }) {
  return <button>{JSON.stringify(props.helloData)}</button>;
}
