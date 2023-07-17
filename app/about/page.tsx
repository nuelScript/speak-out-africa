"use client";

import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import SupportUs from "../components/SupportUs";
import JoinUs from "./JoinUs";
import OurMission from "./OurMission";
import OurObjectives from "./OurObjectives";
import OurPartners from "./OurPartners";
import OurTeam from "./OurTeam";
import OurVision from "./OurVision";
import WhoWeAre from "./WhoWeAre";

const AboutPage = () => {
  return (
    <div className="min-h-full w-full">
      <Banner title="Who We Are" />
      <WhoWeAre />
      <OurVision />
      <OurMission />
      <OurObjectives />
      <OurTeam />
      <JoinUs description="Join Us" />
      <OurPartners />
      <SupportUs />
      <Footer />
    </div>
  );
};

export default AboutPage;
