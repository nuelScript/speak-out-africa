"use client";

import React from "react";
import Banner from "../components/Banner/Banner";
import EventCard from "./EventCard";
import Footer from "../components/Footer/Footer";

const EventsPage = () => {
  return (
    <div className="min-h-full w-full">
      <Banner title="Events" />
      <h1 className="mx-4 my-4 text-center text-3xl font-bold uppercase xl:mx-28 xl:my-20 xl:text-start xl:text-6xl">
        Upcoming Events
      </h1>
      <div className="mb-10 flex w-full justify-center">
        <EventCard />
      </div>
      <h1 className="mx-4 my-4 mt-10 text-center text-3xl font-bold uppercase xl:mx-28 xl:my-20 xl:mt-0 xl:text-start xl:text-6xl">
        Recent Events
      </h1>
      <Footer />
    </div>
  );
};

export default EventsPage;
