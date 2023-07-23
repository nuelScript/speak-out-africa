"use client";

import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import { DonationCard } from "./DonationCard";

const DonationPage = () => {
  return (
    <div className="min-h-full w-full">
      <Banner title="Donation" />
      <div className="flex w-full flex-col items-center gap-4 xl:p-32">
        <h1 className="p-8 text-center text-4xl font-bold uppercase xl:p-32 xl:text-6xl">
          Donate Now
        </h1>
        <p className="mb-10 p-8 text-center xl:p-32">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          vel facilis, fugit cumque, minima nemo quae alias quod officia nostrum{" "}
          <br />
          placeat sed atque nisi aspernatur, saepe temporibus consequuntur quasi
          earum!
        </p>
        <DonationCard />
      </div>
      <Footer />
    </div>
  );
};

export default DonationPage;
