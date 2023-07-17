"use client";

import React from "react";
import Banner from "../components/Banner/Banner";
import EventCard from "./EventCard";
import Footer from "../components/Footer/Footer";

const EventsPage = () => {
  return (
    <div className="min-h-full w-full">
      <Banner title="Events" />
      <h1 className="mx-28 my-20 text-6xl font-bold uppercase">
        Upcoming Events
      </h1>
      <div className="mb-10 flex w-full justify-center">
        <EventCard />
      </div>
      <h1 className="mx-28 my-20 text-6xl font-bold uppercase">
        Recent Events
      </h1>
      <Footer />
    </div>
  );
};

export default EventsPage;
