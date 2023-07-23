"use client";

import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import GalleryCard from "./GalleryCard";

const GalleryPage = () => {
  return (
    <div className="min-h-full w-full">
      <Banner title="Gallery" />
      <div className="flex w-full justify-center p-4 xl:p-28">
        <GalleryCard />
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;
