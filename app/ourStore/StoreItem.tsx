import Image, { StaticImageData } from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface StoreItemProps {
  name: string;
  image: StaticImageData;
  className?: string;
}

const StoreItem = ({ name, image, className }: StoreItemProps) => {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center p-4 sm:items-center md:items-center lg:items-start",
        className
      )}
    >
      <div className="mb-4">
        <Image src={image} alt={name} width={300} height={300} />
      </div>
      <p className="mb-4 w-9/12 text-center text-2xl font-medium sm:text-center sm:text-2xl md:text-center md:text-2xl lg:text-left lg:text-xl">
        Lorem ipsum dolor sit amet{" "}
      </p>
      <div>
        <button
          type="button"
          className="rounded-full bg-black px-10 py-4 text-xs font-semibold uppercase text-white transition hover:scale-110"
        >
          Review
        </button>
      </div>
    </div>
  );
};

export default StoreItem;
