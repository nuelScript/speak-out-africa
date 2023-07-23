import { event } from "@/public/images";
import Image from "next/image";
import { BsFillClockFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

const EventCard = () => {
  return (
    <div className="flex">
      <div className="flex w-full flex-col gap-10 xl:flex-row">
        <div className="flex w-full flex-col space-y-6 p-8 xl:w-1/2 xl:p-0">
          <h1 className="mb-2 text-xl font-semibold">
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
        </div>
        <div className="flex w-full xl:w-1/2">
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
  );
};

export default EventCard;
