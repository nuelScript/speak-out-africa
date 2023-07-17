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
    <div className={twMerge("flex flex-col p-4", className)}>
      <div className="mb-4">
        <Image src={image} alt={name} width={300} height={300} />
      </div>
      <p className="mb-4 w-9/12 text-xl font-medium">
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
