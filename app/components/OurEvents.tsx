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
      <div className="flex w-[1400px] flex-col gap-8 bg-[#F5F2F0] py-20">
        <h1 className="text-sm font-bold uppercase text-gray-400">
          Our Events
        </h1>
        <h3 className="text-6xl font-bold">Upcoming Events</h3>
        <div className="flex justify-center px-20 pt-5">
          <div className="flex w-1/2 flex-col justify-center space-y-6">
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
            <div className="inline-flex gap-x-8">
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
          <div className="flex w-1/2">
            <Image
              src={event}
              alt="Event"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEvents;
