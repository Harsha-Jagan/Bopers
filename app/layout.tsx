import Navbar from "./components/Navbar";
import "./globals.css";
import React from "react";

/**
 * metadata for home page seo
 */
export const metadata = {
  title: "Boldle",
  description: "An app made for bopers",
};

/**
 * layout of navbar and children in homepage
 * @param param0 children
 * @returns homepage
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen w-screen bg-background-img bg-cover bg-no-repeat bg-center">
        <header className="mt-8 mr-16">
          <Navbar />
        </header>

        <div className="grow relative flex flex-col">{children}</div>
      </body>
    </html>
  );
}
