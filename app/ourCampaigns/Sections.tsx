"use client";

import { Separator } from "@/components/ui/separator";
import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

interface SectionsProps {
  image: StaticImageData;
  className?: string;
}

const Sections = ({ image, className }: SectionsProps) => {
  return (
    <div
      className={twMerge(
        "flex w-[280px] flex-col items-center rounded-tr-[100px] sm:w-[300px] md:w-[320px] lg:w-[360px]",
        className
      )}
    >
      <Image
        src={image}
        alt="1"
        width={400}
        height={300}
        className="rounded-bl-[100px] rounded-tr-[100px] object-contain"
      />
      <div className="mb-3 mt-4 flex w-full justify-center gap-4">
        <p className="flex flex-col text-gray-500">
          Current <span className="text-black">$1000</span>
        </p>
        <Separator orientation="vertical" className="bg-black" />
        <span className="flex shrink-0 items-center text-xl font-medium">
          27%
        </span>
        <Separator orientation="vertical" className="bg-black" />
        <p className="flex flex-col text-gray-500">
          Target <span className="text-black">$1000</span>
        </p>
      </div>
      <Separator className="mb-2 w-4/6 bg-black" />
      <div className="flex w-full flex-col items-center justify-center pb-4">
        <h1 className="text- mt-4 text-xl font-semibold tracking-wider">
          Lorem ipsum dolor
        </h1>
        <p className="w-4/5 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          assumenda blanditiis
        </p>
      </div>
    </div>
  );
};

export default Sections;
