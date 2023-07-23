"use client";

import { Books, Brainstorm, Pencil } from "@/public/images";
import Banner from "../components/Banner/Banner";
import Book from "./Book";
import StoreItem from "./StoreItem";
import SupportUs from "../components/SupportUs";
import Footer from "../components/Footer/Footer";

const OurStorePage = () => {
  return (
    <div className="min-h-full w-full">
      <Banner title="Our Store" />
      <div className="flex w-full justify-center p-8 xl:p-28">
        <Book />
      </div>
      <div className="mb-32 flex flex-col gap-y-20">
        <div className="flex w-full flex-col justify-center gap-8 xl:flex-row">
          <StoreItem
            className="hover:scale-110 hover:cursor-pointer"
            image={Brainstorm}
            name="Book 1"
          />
          <StoreItem
            className="hover:scale-110 hover:cursor-pointer"
            image={Books}
            name="Book 2"
          />
          <StoreItem
            className="hover:scale-110 hover:cursor-pointer"
            image={Pencil}
            name="Book 3"
          />
        </div>
        <div className="flex w-full flex-col justify-center gap-8 xl:flex-row">
          <StoreItem
            className="hover:scale-110 hover:cursor-pointer"
            image={Brainstorm}
            name="Book 1"
          />
          <StoreItem
            className="hover:scale-110 hover:cursor-pointer"
            image={Books}
            name="Book 2"
          />
          <StoreItem
            className="hover:scale-110 hover:cursor-pointer"
            image={Pencil}
            name="Book 3"
          />
        </div>
      </div>
      <SupportUs className="mb-32" />
      <Footer />
    </div>
  );
};

export default OurStorePage;
