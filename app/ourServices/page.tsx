"use client";

import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import SupportUs from "../components/SupportUs";
import Services from "./Services";
import WhyUs from "./WhyUs";

const OurServicesPage = () => {
  return (
    <div className="min-h-full w-full">
      <Banner title="Our Services" />
      <Services className="mb-20 mt-10" />
      <WhyUs className="mb-20" />
      <SupportUs />
      <Footer />
    </div>
  );
};

export default OurServicesPage;
