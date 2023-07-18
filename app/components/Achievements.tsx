"use client";

import React, { useState } from "react";
import CountUp from "react-countup";
import { BsHeart } from "react-icons/bs";
import { HiOutlineThumbUp } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";

const Achievements = () => {
  const [counter, setCounter] = useState(false);
  return (
    <div className="flex w-full justify-center bg-[#DC0A00] p-12 text-white">
      <div className="flex items-center justify-between gap-x-80">
        <div className="flex flex-col items-center gap-y-2">
          <span>
            <HiOutlineThumbUp className="inline-block h-12 w-12" />
          </span>
          <span className="num text-5xl font-bold">
            <CountUp start={0} end={25} duration={10} delay={0} />
          </span>
          <span className="text-xl font-medium">projects</span>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <span>
            <BsHeart className="inline-block h-12 w-12" />
          </span>
          <span className="text-5xl font-bold">
            <CountUp start={0} end={3050} duration={10} delay={0} />
          </span>
          <span className="text-xl font-medium ">Lives touched</span>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <span>
            <IoIosPeople className="inline-block h-12 w-12" />
          </span>
          <span className="text-5xl font-bold">
            <CountUp start={0} end={10} duration={10} delay={0} />
          </span>
          <span className="text-xl font-medium">Partners</span>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
