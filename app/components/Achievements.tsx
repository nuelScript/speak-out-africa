"use client";

import React from "react";
import CountUp from "react-countup";
import { BsHeart } from "react-icons/bs";
import { HiOutlineThumbUp } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";

const Achievements = () => {
  return (
    <div className="flex w-full justify-center bg-[#DC0A00] p-6 text-white sm:p-8 md:p-10 lg:p-12">
      <div className="flex w-full items-center justify-center gap-x-20 sm:gap-x-20 md:gap-x-40 lg:gap-x-80">
        <div className="flex w-full flex-col items-center gap-y-2 sm:w-1/3 md:w-1/3 lg:w-full">
          <span>
            <HiOutlineThumbUp className="inline-block h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
          </span>
          <span className="text-2xl font-bold sm:text-2xl  md:text-3xl lg:text-5xl">
            <CountUp start={0} end={25} duration={10} delay={0} />
          </span>
          <span className="text-sm font-medium sm:text-base md:text-lg lg:text-xl">
            projects
          </span>
        </div>
        <div className="flex w-full flex-col items-center gap-y-2 sm:w-1/3 md:w-1/3 lg:w-full">
          <span>
            <BsHeart className="inline-block h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
          </span>
          <span className="text-2xl font-bold sm:text-2xl md:text-3xl lg:text-5xl">
            <CountUp start={0} end={3050} duration={10} delay={0} />
          </span>
          <span className="text-sm font-medium sm:text-base md:text-lg lg:text-xl">
            Lives touched
          </span>
        </div>
        <div className="flex w-full flex-col items-center gap-y-2 sm:w-1/3 md:w-1/3 lg:w-full">
          <span>
            <IoIosPeople className="inline-block h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
          </span>
          <span className="text-2xl font-bold sm:text-2xl md:text-3xl lg:text-5xl">
            <CountUp start={0} end={10} duration={10} delay={0} />
          </span>
          <span className="text-sm font-medium sm:text-base md:text-lg lg:text-xl">
            Partners
          </span>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
