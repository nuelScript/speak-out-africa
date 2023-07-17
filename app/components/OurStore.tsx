import React from "react";
import StoreItem from "../ourStore/StoreItem";
import { Books, Brainstorm, Pencil } from "@/public/images";

const OurStore = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-8 p-28">
      <h1 className="text-sm font-bold uppercase text-gray-400">
        Visit Our Store
      </h1>
      <h3 className="text-center text-6xl font-bold">
        Our Educative Resources
      </h3>
      <p className="text-center font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, facere! Nam
        nemo accusantium, consectetur quam{" "}
      </p>
      <div className="flex gap-x-8">
        <StoreItem image={Brainstorm} name="Book1" />
        <StoreItem image={Books} name="Book2" />
        <StoreItem image={Pencil} name="Book3" />
      </div>
    </div>
  );
};

export default OurStore;
