import { Button } from "@/components/ui/button";
import { event } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import { BsFillClockFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

const OurEvents = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-[800px] flex-col gap-8 bg-[#F5F2F0] py-20 sm:w-[1000px] md:w-[1200px] lg:w-[1400px]">
        <h1 className="text-center text-xl font-bold uppercase text-gray-400 sm:text-center sm:text-lg md:text-center md:text-sm lg:text-left lg:text-sm">
          Our Events
        </h1>
        <h3 className="text-center text-4xl font-bold sm:text-center sm:text-4xl md:text-center md:text-5xl lg:text-left lg:text-6xl">
          Upcoming Events
        </h3>
        <div className="flex flex-col items-center gap-y-8 px-20 pt-5 sm:flex-col sm:items-center sm:gap-y-8 md:flex-col md:items-center md:gap-y-8 lg:flex-row lg:justify-center">
          <div className="flex flex-col justify-center space-y-6 lg:w-1/2">
            <h1 className="mb-2 text-xl font-medium uppercase">
              Give a child money today
            </h1>
            <div className="inline-flex gap-6">
              <FaCalendarAlt className="inline-block h-6 w-6 hover:cursor-pointer hover:opacity-70" />
              <p className="text-base font-light hover:cursor-pointer">
                21st January, 2023
              </p>
            </div>
            <div className="inline-flex gap-6">
              <BsFillClockFill className="inline-block h-6 w-6 hover:cursor-pointer hover:opacity-70" />
              <p className="text-base font-light hover:cursor-pointer">9pm</p>
            </div>
            <div className="inline-flex gap-6">
              <MdOutlineLocationOn className="inline-block h-6 w-6 hover:cursor-pointer hover:opacity-70" />
              <p className="text-base font-light hover:cursor-pointer">
                Faculty of medical outreach, <br /> Enugu State
              </p>
            </div>
            <div className="hidden gap-x-8 sm:hidden md:hidden lg:inline-flex">
              <Link href={"/joinUs"} passHref>
                <Button
                  variant="destructive"
                  className="rounded-full px-14 py-8 text-sm font-bold uppercase"
                >
                  Join Us
                </Button>
              </Link>
              <Link href={"/events"} passHref>
                <Button
                  variant="secondary"
                  className="rounded-full border border-black bg-transparent px-14 py-8 text-sm font-bold uppercase hover:opacity-70"
                >
                  See All
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col lg:w-1/2">
            <Image
              src={event}
              alt="Event"
              width={500}
              height={500}
              className="mb-8 object-contain"
            />
            <div className="inline-flex w-full justify-center gap-x-8 sm:w-full md:w-full lg:hidden">
              <Link href={"/joinUs"} passHref>
                <Button
                  variant="destructive"
                  className="rounded-full px-14 py-8 text-sm font-bold uppercase"
                >
                  Join Us
                </Button>
              </Link>
              <Link href={"/events"} passHref>
                <Button
                  variant="secondary"
                  className="rounded-full border border-black bg-transparent px-14 py-8 text-sm font-bold uppercase hover:opacity-70"
                >
                  See All
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEvents;
