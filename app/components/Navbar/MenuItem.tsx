"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface MenuItemProps {
  onClick?: () => void;
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

const MenuItem = (props: MenuItemProps) => {
  const { onClick, href, className, children } = props;
  return (
    <Link
      href={href || "#"}
      onClick={onClick}
      className={twMerge(
        "w-[150px] bg-black px-4 py-4 font-semibold text-white transition hover:bg-neutral-600",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default MenuItem;
