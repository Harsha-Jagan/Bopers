import React from "react";
import Image from "next/image";
import Input from "./components/Input";
import Button from "./components/Button";

/**
 *
 * @returns Home page for the app
 */
export default function Home() {
  return (
    <div className="absolute justify-center text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div>
        <h1 className="font-beaufortHeavy text-whiteish text-xlg font-extrabold">
          LoL Skin Battle
        </h1>
        <Image
          src="/divider.png"
          alt="divider"
          width="634"
          height="50"
          className="mx-auto"
        />
      </div>

      <Input placeHolder="Enter nickname" size="text-md2" />

      <Button label="START" href="game" />
    </div>
  );
}
