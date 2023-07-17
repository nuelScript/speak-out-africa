import React from "react";
import { photo2, photo3, photo6 } from "@/public/images";
import ImageCard from "./ImageCard";

const OurTeam = () => {
  return (
    <div className="mt-40 flex w-full flex-col items-center gap-y-8">
      <h1 className="text-sm font-bold uppercase text-gray-400">Our Team</h1>
      <h3 className="text-5xl font-bold">Meet Our Leaders</h3>
      <div className="mt-10 flex w-full flex-col justify-center space-y-12">
        <div className="flex w-full justify-center gap-2">
          <ImageCard image={photo6} name="Dr Ugwuanyi Chimdindu" />
          <ImageCard image={photo2} name="Dr Ugwuanyi Chimdindu" />
          <ImageCard image={photo3} name="Dr Ugwuanyi Chimdindu" />
        </div>
        <div className="flex w-full justify-center gap-2">
          <ImageCard image={photo3} name="Dr Ugwuanyi Chimdindu" />
          <ImageCard image={photo2} name="Dr Ugwuanyi Chimdindu" />
          <ImageCard image={photo6} name="Dr Ugwuanyi Chimdindu" />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
