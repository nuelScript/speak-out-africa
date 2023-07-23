"use client";

import { News1, News2, News3 } from "@/public/images";
import Banner from "../components/Banner/Banner";
import NewsCard from "./NewsCard";
import SupportUs from "../components/SupportUs";
import Footer from "../components/Footer/Footer";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const NewsandArticlesPage = () => {
  return (
    <div className="min-h-full w-full">
      <Banner title="News & Articles" />
      <div className="flex flex-col gap-y-20 p-4 lg:p-28">
        <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row lg:flex-row lg:items-start">
          <NewsCard
            className="p-4 transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
            name=""
            image={News1}
          />
          <NewsCard
            className="p-4 transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
            name=""
            image={News3}
          />
          <NewsCard
            className="p-4 transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
            name=""
            image={News2}
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row lg:flex-row lg:items-start">
          <NewsCard
            className="p-4 transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
            name=""
            image={News1}
          />
          <NewsCard
            className="p-4 transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
            name=""
            image={News3}
          />
          <NewsCard
            className="p-4 transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
            name=""
            image={News2}
          />
        </div>
        <div className="hidden w-full justify-center gap-10 lg:flex">
          <button
            onClick={() => {}}
            type="button"
            className="text-lg font-bold uppercase hover:underline hover:opacity-70"
          >
            <MdKeyboardDoubleArrowLeft className="mr-2 inline-block h-4 w-4" />
            Previous
          </button>
          <button
            onClick={() => {}}
            type="button"
            className="text-lg font-bold uppercase hover:underline hover:opacity-70"
          >
            Next
            <MdKeyboardDoubleArrowRight className="ml-2 inline-block h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="mb-8 flex w-full justify-center gap-10 lg:hidden">
        <button
          onClick={() => {}}
          type="button"
          className="text-lg font-bold uppercase hover:underline hover:opacity-70"
        >
          <MdKeyboardDoubleArrowLeft className="mr-2 inline-block h-4 w-4" />
          Previous
        </button>
        <button
          onClick={() => {}}
          type="button"
          className="text-lg font-bold uppercase hover:underline hover:opacity-70"
        >
          Next
          <MdKeyboardDoubleArrowRight className="ml-2 inline-block h-4 w-4" />
        </button>
      </div>
      <SupportUs />
      <Footer />
    </div>
  );
};

export default NewsandArticlesPage;
