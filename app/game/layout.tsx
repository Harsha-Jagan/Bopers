import React from "react";

export const metadata = {
  title: "Boldle Game",
  description: "Guess league of legends skins based on cropped image",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col grow">{children}</div>;
}
