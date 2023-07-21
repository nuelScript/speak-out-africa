import {
  Team1,
  Team2,
  Team3,
  Team4,
  Team5,
  Team6,
  Team7,
  Team8,
  Team9,
} from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsFacebook, BsLinkedin } from "react-icons/bs";

const OurCommunity = () => {
  return (
    <section className="flex w-full justify-center">
      <div className="flex w-[1400px] flex-col items-center gap-y-8 bg-[#F5F2F0] py-32">
        <h1 className="px-4 text-center text-xl font-bold uppercase text-gray-400 sm:px-4 sm:text-center sm:text-lg md:px-4 md:text-center md:text-sm lg:px-4 lg:text-left lg:text-sm">
          Our Community
        </h1>
        <h3 className="px-4 text-center text-3xl font-bold leading-tight sm:px-4 sm:text-center sm:text-4xl md:px-4 md:text-center md:text-5xl lg:px-4 lg:text-left lg:text-6xl">
          We Comprise Of Skilled And Passionate Members
        </h3>
        <div className="flex flex-row gap-y-8 sm:flex-row md:flex-row lg:flex-col">
          <div className="flex w-full flex-col sm:flex-col md:flex-col lg:flex-row">
            <Image
              src={Team1}
              alt="Person1"
              className="transition hover:scale-105 hover:cursor-pointer"
            />
            <Image
              src={Team2}
              alt="Person2"
              className="transition hover:scale-105 hover:cursor-pointer"
            />
            <Image
              src={Team3}
              alt="Person3"
              className="transition hover:scale-105 hover:cursor-pointer"
            />
            <Image
              src={Team4}
              alt="Person4"
              className="transition hover:scale-105 hover:cursor-pointer"
            />
          </div>
          <div className="flex w-full flex-col sm:flex-col md:flex-col lg:flex-row">
            <Image
              src={Team5}
              alt="Person5"
              className="transition hover:scale-105 hover:cursor-pointer"
            />
            <Image
              src={Team6}
              alt="Person6"
              className="transition hover:scale-105 hover:cursor-pointer"
            />
            <Image
              src={Team7}
              alt="Person7"
              className="transition hover:scale-105 hover:cursor-pointer"
            />
            <Image
              src={Team8}
              alt="Person8"
              className="transition hover:scale-105 hover:cursor-pointer"
            />
          </div>
        </div>
        <Link
          className="inline-flex w-full justify-end"
          href={"/gallery"}
          passHref
        >
          <div className="mr-8 hover:scale-110">
            <p className="text-sm font-semibold uppercase">
              Our Gallery
              <span>
                <BsArrowRight className="ml-4 inline-block" />
              </span>
            </p>
          </div>
        </Link>
        <h3 className="text-2xl font-medium">Volunteer of the Month</h3>
        <div className="flex flex-col items-center gap-8 sm:flex-col sm:items-center md:flex-row md:justify-center lg:flex-row lg:justify-center">
          <Image src={Team9} alt="Person9" className="cursor-pointer" />
          <div className="flex w-full flex-col items-center gap-y-2 sm:w-full sm:items-center md:w-1/2 md:items-start lg:w-1/2 lg:items-start">
            <h1 className="text-sm font-bold">Full Name</h1>
            <h3 className="text-base font-bold text-neutral-400">
              Product Manager
            </h3>
            <p className="w-3/5 text-center font-light sm:text-center md:text-left lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              minima laudantium magnam ratione debitis a nesciunt iusto. Tempora
              blanditiis facere excepturi minima totam cumque delectus! Quisquam
              tempore et perferendis molestias!
            </p>
            <div className="inline-flex">
              <Link href={"/"} passHref>
                <BsFacebook className="inline h-8 w-8 hover:opacity-70 sm:h-6 sm:w-6 md:h-4 md:w-4 lg:h-4 lg:w-4" />
              </Link>
              <Link href={"/"}>
                <BsLinkedin className="ml-4 inline h-8 w-8 hover:opacity-70 sm:h-6 sm:w-6 md:h-4 md:w-4 lg:h-4 lg:w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCommunity;
