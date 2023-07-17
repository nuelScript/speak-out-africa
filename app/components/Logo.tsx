"use client";

import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public/images";
import { twMerge } from "tailwind-merge";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Link href={"/"}>
      <Image
        src={logo}
        alt="logo"
        width={100}
        height={100}
        className={twMerge("block cursor-pointer", className)}
      />
    </Link>
  );
};

export default Logo;
