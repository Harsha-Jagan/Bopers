import React from "react";
import Link from "next/link";

type NavLink = {
  displayText: string;
  href: string;
};

export default function Navbar() {
  const navLinks: NavLink[] = [
    { displayText: "Home", href: "/" },
    { displayText: "How to play", href: "/how-to-play" },
    { displayText: "About", href: "/about" },
  ];

  return (
    <nav className="h-16 align-middle text-right [&>*]:font-beaufortBold [&>*]:text-whiteish [&>*]:align-middle">
      {navLinks.map((link, i) => {
        return (
          <Link
            key={i}
            id={i + ""}
            className={"m-2 mx-8 text-md hover:text-gold"}
            href={link.href}
          >
            {link.displayText}
          </Link>
        );
      })}
    </nav>
  );
}
