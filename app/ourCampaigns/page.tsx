"use client";

import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import SupportUs from "../components/SupportUs";
import CampaignCard from "./CampaignCard";

const OurCampaignsPage = () => {
  return (
    <div className="min-h-full w-full">
      <Banner title="Our Campaigns" />
      <div className="mb-28 flex w-full justify-center p-28">
        <CampaignCard />
      </div>
      <SupportUs className="mb-32" />
      <Footer />
    </div>
  );
};

export default OurCampaignsPage;
