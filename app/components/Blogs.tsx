import React from "react";
import NewsCard from "../news&article/NewsCard";
import { News1, News2, News3 } from "@/public/images";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-[1400px] flex-col items-center gap-y-8 bg-[#F5F2F0] py-32">
        <h1 className="text-xl font-bold uppercase text-neutral-400 sm:text-lg md:text-sm lg:text-sm">
          Blogs & Updates
        </h1>
        <h3 className="mb-12 text-center text-4xl font-bold leading-tight sm:mb-0 sm:text-center sm:text-6xl md:mb-0 md:text-center md:text-6xl lg:mb-0 lg:text-center lg:text-6xl xl:text-center 2xl:text-center">
          Follow Our Latest <br /> News & Articles
        </h3>
        <div className="mb-16 flex flex-col gap-y-24 md:mb-16 lg:flex-row lg:gap-x-8">
          <NewsCard
            image={News1}
            name=""
            className="rounded-xl rounded-tr-[100px] bg-white transition hover:scale-105 hover:cursor-pointer hover:shadow-md"
          />
          <NewsCard
            image={News2}
            name=""
            className="rounded-xl rounded-tr-[100px] bg-white transition hover:scale-105 hover:cursor-pointer hover:shadow-md"
          />
          <NewsCard
            image={News3}
            name=""
            className="rounded-xl rounded-tr-[100px] bg-white transition hover:scale-105 hover:cursor-pointer hover:shadow-md"
          />
        </div>
        <div className="flex w-full justify-center">
          <Link href={"/"}></Link>
          <Button
            variant="default"
            className="rounded-full bg-black px-16 py-8 text-sm font-bold uppercase transition hover:scale-105"
          >
            See More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
