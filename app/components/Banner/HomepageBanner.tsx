"use client";

import Link from "next/link";

const BannerOne = () => {
  return (
    <div className="flex h-[70vh] w-full flex-col justify-center bg-[url('/images/dummypicture10.jpg')] bg-cover bg-scroll bg-center bg-no-repeat sm:h-[80vh] sm:bg-fixed md:h-[90vh] md:bg-fixed lg:h-screen lg:bg-fixed">
      <div className="flex h-full w-full flex-col justify-center bg-neutral-950 bg-opacity-70 p-8 sm:p-12 md:p-16 lg:p-20">
        <div className="flex h-[300px] w-full flex-col items-center gap-y-8 p-1 sm:h-[300px] sm:w-full sm:items-center md:h-[300px] md:w-full md:items-center lg:h-[300px] lg:w-[400px] lg:items-start">
          <h1 className="text-2xl font-bold uppercase text-white sm:text-4xl md:text-5xl lg:text-5xl">
            Educate & Prevent
          </h1>
          <p className="text-center text-xl text-white sm:text-center sm:text-2xl md:text-center md:text-2xl lg:text-left lg:text-base">
            Children that are believed and supported when they tell, recover and
            do not have lasting negative psychological effects
          </p>
          <div className="flex justify-between lg:w-full">
            <Link href={"/contact"} passHref>
              <button className="rounded-full bg-[#D90A01] px-8 py-4 font-semibold uppercase text-white transition hover:scale-110 hover:opacity-70">
                Contact Us
              </button>
            </Link>
            <Link href={"/about"} passHref>
              <button className="ml-4 rounded-full border border-white bg-transparent px-8 py-4 font-semibold uppercase text-white transition hover:scale-110 hover:opacity-70">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerOne;
