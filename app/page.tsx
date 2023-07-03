import React from "react";
import Button from "./components/Button/Button";
import { ping } from "@/data/api";
export default async function Home() {
  const helloPromise = ping().catch((e) => {
    console.error(e);
    return "promise failed";
  });

  const helloData = (await Promise.all([helloPromise]))[0];

  return (
    <div>
      <h1>hello, world!x</h1>
      <Button helloData={helloData} />
    </div>
  );
}
