"use client";

import { Separator } from "@/components/ui/separator";
import { dummypicture1 } from "@/public/images";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BsDot } from "react-icons/bs";
import { IoIosArrowDropright } from "react-icons/io";
import { twMerge } from "tailwind-merge";

interface NewsCardProps {
  className?: string;
  name: string;
  image: StaticImageData;
}

const NewsCard = ({ className, name, image }: NewsCardProps) => {
  return (
    <div className={twMerge("flex w-[320px] flex-col", className)}>
      <Image
        src={image ? image : dummypicture1}
        alt={name ? name : "News"}
        width={320}
        height={200}
        className="mb-2 object-cover"
      />
      <div className="mb-8 ml-8 w-full">
        <h1 className="mb-2 text-left text-2xl font-medium">
          Lorem ipsum dolor
        </h1>
        <p className="mb-4 w-4/5 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          doloremque soluta harum maiores
        </p>
        <Link href={"/"} passHref className="hover:opacity-70">
          <p className="text-base font-semibold uppercase">
            Read More{" "}
            <span className="mb-1 ml-1">
              <IoIosArrowDropright className="inline-block h-6 w-6" />
            </span>
          </p>
        </Link>
      </div>
      <Separator className="bg-zinc-300" />
      <div className="my-4 inline-flex w-full justify-center gap-x-4">
        <span className="text-sm">January 20, 2023</span>
        <span>
          <BsDot className="mb-1 inline-block h-4 w-4" />
        </span>
        <span className="text-sm">No Comments</span>
      </div>
    </div>
  );
};

export default NewsCard;
