"use client";

import { dummypicture1, dummypicture2, dummypicture3 } from "@/public/images";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const OurServices = () => {
  return (
    <div className="flex w-full justify-center">
      <section className="flex w-[1400px] flex-col items-center bg-[#F5F2F0] py-28">
        <p className="mb-2 text-sm font-semibold uppercase text-neutral-500">
          Our Services
        </p>
        <h1 className="text-5xl font-bold">What we Do</h1>
        <div className="mt-8 flex h-full w-full items-center justify-center gap-12">
          <div className="flex h-full w-[360px] flex-col items-center rounded-bl-[100px] rounded-tr-[100px] bg-white">
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
          <div className="flex h-full w-[360px] flex-col items-center rounded-bl-[100px] rounded-tr-[100px] bg-white">
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
          <div className="flex h-full w-[360px] flex-col items-center rounded-bl-[100px] rounded-tr-[100px] bg-white">
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
        <div className="mt-10 flex w-[83%] justify-end">
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
      </section>
    </div>
  );
};

export default OurServices;
