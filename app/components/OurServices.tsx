"use client";

import { dummypicture1, dummypicture2, dummypicture3 } from "@/public/images";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const OurServices = () => {
  return (
    <section className="flex w-full justify-center">
      <div className="flex w-[1400px] flex-col items-center bg-[#F5F2F0] py-16 sm:py-20 md:py-24 lg:py-28">
        <h1 className="mb-2 text-center text-lg font-bold uppercase text-gray-400 sm:text-center sm:text-lg md:text-center md:text-sm lg:text-left lg:text-sm">
          Our Services
        </h1>
        <h3 className="text-center text-4xl font-bold sm:text-center sm:text-4xl md:text-center md:text-5xl lg:text-left lg:text-6xl">
          What we Do
        </h3>
        <div className="mt-8 flex w-full flex-col items-center gap-12 sm:flex-col sm:items-center md:flex-col md:items-center lg:flex-col lg:justify-center xl:flex-row 2xl:flex-row">
          <div className="flex w-[300px] flex-col items-center rounded-bl-[100px] rounded-tr-[100px] bg-white sm:w-[300px] md:w-[330px] lg:w-[360px] xl:w-[360px] 2xl:w-[360px]">
            {" "}
            <Image
              src={dummypicture1}
              alt="1"
              width={360}
              height={300}
              className="rounded-bl-[100px] rounded-tr-[100px] object-contain"
            />
            <div className="flex w-full flex-col items-center gap-y-2 pb-16 ">
              <h1 className="mt-4 text-xl font-semibold tracking-wider">
                Lorem ipsum dolor
              </h1>
              <p className="w-4/5 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                assumenda blanditiis officia dolorum sequi excepturi rem
                obcaecati
              </p>
            </div>
          </div>
          <div className="flex w-[300px] flex-col items-center rounded-bl-[100px] rounded-tr-[100px] bg-white sm:w-[300px] md:w-[330px] lg:w-[360px]">
            {" "}
            <Image
              src={dummypicture2}
              alt="2"
              width={360}
              height={300}
              className="rounded-bl-[100px] rounded-tr-[100px] object-contain"
            />
            <div className="flex w-full flex-col items-center gap-y-2 pb-16 ">
              <h1 className="mt-4 text-xl font-semibold tracking-wider">
                Lorem ipsum dolor
              </h1>
              <p className="w-4/5 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                assumenda blanditiis officia dolorum sequi excepturi rem
                obcaecati
              </p>
            </div>
          </div>
          <div className="flex w-[300px] flex-col items-center rounded-bl-[100px] rounded-tr-[100px] bg-white sm:w-[300px] md:w-[330px] lg:w-[360px]">
            {" "}
            <Image
              src={dummypicture3}
              alt="3"
              width={360}
              height={300}
              className="rounded-bl-[100px] rounded-tr-[100px] object-contain"
            />
            <div className="flex w-full flex-col items-center gap-y-2 pb-16 ">
              <h1 className="mt-4 text-xl font-semibold tracking-wider">
                Lorem ipsum dolor
              </h1>
              <p className="w-4/5 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                assumenda blanditiis officia dolorum sequi excepturi rem
                obcaecati
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex w-[83%] justify-center sm:justify-center md:justify-center lg:justify-center xl:justify-end">
          <Link href={"/ourServices"}>
            <button
              type="button"
              className="rounded-full border-none bg-black p-4 font-semibold uppercase text-white outline-none hover:scale-110 hover:bg-neutral-800 hover:shadow-md"
            >
              Read More
              <span>
                <BsArrowRight
                  size={25}
                  className="ml-3 inline-flex hover:scale-110"
                />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
