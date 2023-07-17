"use client";

import Link from "next/link";

const BannerOne = () => {
  return (
    <div className="flex h-[80vh] w-full flex-col justify-center bg-[url('/images/dummypicture10.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="flex h-full w-full flex-col justify-center bg-neutral-800 bg-opacity-70 p-20">
        <div className="flex h-[300px] w-[400px] flex-col justify-between p-1">
          <h1 className="text-5xl font-bold uppercase text-white">
            Educate & Prevent
          </h1>
          <p className="text-white">
            Children that are believed and supported when they tell, recover and
            do not have lasting negative psychological effects
          </p>
          <div className="flex w-full justify-between">
            <Link href={"/contact"} passHref>
              <button className="rounded-full bg-[#D90A01] px-8 py-4 font-semibold uppercase text-white transition hover:scale-110 hover:opacity-70">
                Contact Us
              </button>
            </Link>
            <Link href={"/aboutUs"} passHref>
              <button className="ml-4 rounded-full border border-white bg-transparent px-8 py-4 font-semibold uppercase text-white hover:scale-110 hover:opacity-70">
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
