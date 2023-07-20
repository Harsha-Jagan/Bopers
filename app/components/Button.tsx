import Link from "next/link";
import React from "react";

type Props = {
  label: string;
  href: string;
};

function Button(props: Props) {
  return (
    <button className="text-gold font-beaufortLight text-sm uppercase tracking-widest bg-black mt-6 px-10 border-gold border py-1 hover:text-whiteish bg-gradient-to-t from">
      <Link href={`/${props.href}`}>{props.label}</Link>
    </button>
  );
}

export default Button;
