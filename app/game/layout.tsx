import React from "react";

/**
 * metadata used for seo
 */
export const metadata = {
  title: "Boldle Game",
  description: "Guess league of legends skins based on cropped image",
};

/**
 * game layout for boldle
 * @param param0 children
 * @returns children wrapped within layout
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col grow">{children}</div>;
}
