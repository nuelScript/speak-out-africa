import { Unicef1, Unicef2, Wfo, Who } from "@/public/images";
import Image from "next/image";
import React from "react";

const OurPartners = () => {
  return (
    <div className="my-20 flex w-full flex-col items-center gap-y-8 xl:my-40">
      <h1 className="text-xl font-bold uppercase text-gray-400 xl:text-sm">
        Our Partners
      </h1>
      <h3 className="text-3xl font-bold xl:text-5xl">Meet Our Partners</h3>
      <div className="flex w-full flex-col items-center justify-center gap-32 xl:flex-row xl:items-start xl:gap-56">
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
