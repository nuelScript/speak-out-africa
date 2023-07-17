"use client";

import JoinUs from "./about/JoinUs";
import WhoWeAre from "./about/WhoWeAre";
import Achievements from "./components/Achievements";
import BannerOne from "./components/Banner/HomepageBanner";
import Blogs from "./components/Blogs";
import Faq from "./components/Faq";
import Footer from "./components/Footer/Footer";
import OurCampaigns from "./components/OurCampaigns";
import OurCommunity from "./components/OurCommunity";
import OurEvents from "./components/OurEvents";
import OurServices from "./components/OurServices";
import OurStore from "./components/OurStore";
import Search from "./components/Search";
import SupportUs from "./components/SupportUs";

export default function Home() {
  return (
    <div className="min-h-full w-full bg-white">
      <BannerOne />
      <WhoWeAre />
      <OurServices />
      <OurCampaigns />
      <Achievements />
      <OurEvents />
      <OurStore />
      <Search />
      <OurCommunity />
      <Faq />
      <JoinUs className="px-[16.5rem]" description="Become a Volunteer" />
      <Blogs />
      <SupportUs className="mt-28" />
      <Footer />
    </div>
  );
}
