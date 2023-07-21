"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Sections from "../ourCampaigns/Sections";
import { service } from "@/public/images";
import Link from "next/link";

const OurCampaigns = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-[1500px] flex-col justify-center gap-y-8 px-10 py-10 sm:flex-col sm:gap-y-8 sm:px-10 sm:py-20 md:flex-col md:gap-y-8 md:px-10 md:py-24 lg:flex-row lg:p-28 ">
        <div className="flex w-full flex-col items-center gap-y-8 sm:w-full sm:items-center md:w-full md:items-center lg:w-1/2 lg:items-start">
          <h1 className="text-center text-lg font-bold uppercase text-gray-400 sm:text-center sm:text-lg md:text-center md:text-sm lg:text-left lg:text-sm">
            Our Campaigns
          </h1>
          <h3 className="text-center text-4xl font-bold leading-tight sm:text-center sm:text-4xl md:text-center md:text-5xl lg:text-left lg:text-6xl">
            Our Featured <br /> Campaigns
          </h3>
          <p className="w-4/5 text-center font-light sm:w-4/5 sm:text-center md:w-3/5 md:text-start lg:w-3/5 lg:text-start">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum sunt
            totam mollitia hic neque provident nemo officia veritatis vero
            laborum. Necessitatibus doloremque minima inventore cum excepturi
            rem culpa reprehenderit ea?
          </p>
          <div className="flex">
            <Link href={"/ourCampaigns"} passHref>
              <Button
                variant="default"
                className="rounded-full bg-black px-12 py-8 text-sm font-semibold uppercase"
              >
                See More
                <BsArrowRight className="ml-4 inline-block h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex w-full justify-center sm:w-full md:w-full lg:w-1/2">
          <Sections image={service} />
        </div>
      </div>
    </div>
  );
};

export default OurCampaigns;
