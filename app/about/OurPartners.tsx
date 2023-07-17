import { Unicef1, Unicef2, Wfo, Who } from "@/public/images";
import Image from "next/image";
import React from "react";

const OurPartners = () => {
  return (
    <div className="my-40 flex w-full flex-col items-center gap-y-8">
      <h1 className="text-sm font-bold uppercase text-gray-400">
        Our Partners
      </h1>
      <h3 className="text-5xl font-bold">Meet Our Partners</h3>
      <div className="flex w-full justify-center gap-56">
        <Image
          src={Unicef1}
          alt="UNICEF"
          width={200}
          className="object-contain transition hover:scale-110 hover:cursor-pointer"
        />
        <Image
          src={Unicef2}
          alt="UNICEF"
          width={200}
          className="object-contain transition hover:scale-110 hover:cursor-pointer"
        />
        <Image
          src={Who}
          alt="WHO"
          width={200}
          className="object-contain transition hover:scale-110 hover:cursor-pointer"
        />
        <Image
          src={Wfo}
          alt="WFO"
          width={200}
          className="object-contain transition hover:scale-110 hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default OurPartners;
