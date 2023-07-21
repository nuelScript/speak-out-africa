import React from "react";
import StoreItem from "../ourStore/StoreItem";
import { Books, Brainstorm, Pencil } from "@/public/images";

const OurStore = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-8 p-8 sm:p-12 md:p-20 lg:p-28">
      <h1 className="text-center text-lg font-bold uppercase text-gray-400 sm:text-center sm:text-lg md:text-center md:text-sm lg:text-left lg:text-sm">
        Visit Our Store
      </h1>
      <h3 className="px-4 text-center text-xl font-bold leading-tight sm:px-4 sm:text-center sm:text-4xl md:px-4 md:text-center md:text-5xl lg:px-4 lg:text-left lg:text-6xl">
        Our Educative Resources
      </h3>
      <p className="text-center text-lg font-light sm:text-lg md:text-base lg:text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, facere! Nam
        nemo accusantium, consectetur quam{" "}
      </p>
      <div className="flex flex-col gap-y-8 sm:flex-col sm:gap-y-8 md:flex-col md:gap-y-8 lg:flex-row lg:gap-x-8">
        <StoreItem image={Brainstorm} name="Book1" />
        <StoreItem image={Books} name="Book2" />
        <StoreItem image={Pencil} name="Book3" />
      </div>
    </div>
  );
};

export default OurStore;
