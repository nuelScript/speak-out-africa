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
      <div className="flex w-[1500px] justify-center p-28">
        <div className="flex w-1/2 flex-col gap-y-8">
          <h1 className="text-sm font-bold uppercase text-gray-400">
            Our Campaigns
          </h1>
          <h3 className="text-6xl font-bold leading-tight">
            Our Featured <br /> Campaigns
          </h3>
          <p className="w-3/5 font-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum sunt
            totam mollitia hic neque provident nemo officia veritatis vero
            laborum. Necessitatibus doloremque minima inventore cum excepturi
            rem culpa reprehenderit ea?
          </p>
          <div className="flex w-full ">
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
        <div className="flex w-1/2 justify-center">
          <Sections image={service} />
        </div>
      </div>
    </div>
  );
};

export default OurCampaigns;
