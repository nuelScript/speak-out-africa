"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface SupportUsProps {
  className?: string;
}

const SupportUs = ({ className }: SupportUsProps) => {
  return (
    <div
      className={twMerge(
        "mb-20 flex w-full flex-col items-center gap-8 ",
        className
      )}
    >
      <h3 className="text-sm font-semibold uppercase text-gray-500">
        Support Us
      </h3>
      <h1 className="text-6xl font-bold">How You Can Help</h1>
      <div className="flex gap-6">
        <Link href={"/donation"} passHref>
          <button
            type="button"
            className="rounded-full bg-[#DC0A00] px-8 py-4 text-xs font-semibold uppercase text-white transition hover:scale-110"
          >
            Donate
          </button>
        </Link>
        <Link href={"/joinUs"} passHref>
          <button
            type="button"
            className="rounded-full bg-black px-8 py-4 text-xs font-semibold uppercase text-white transition hover:scale-110"
          >
            Become a Member
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SupportUs;
