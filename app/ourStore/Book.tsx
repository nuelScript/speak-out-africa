import { Brainstorm } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowDown } from "react-icons/bs";

const Book = () => {
  return (
    <div className="flex w-[1000px] flex-col gap-4 xl:flex-row">
      <div className="flex w-full items-center justify-center xl:w-1/2">
        <Image
          src={Brainstorm}
          alt="Brainstorm"
          width={400}
          height={400}
          className=""
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center xl:w-1/2 xl:items-start">
        <h1 className="mb-4 text-center text-3xl font-medium xl:text-start xl:text-xl">
          Lorem ipsum dolor sit amet
        </h1>
        <p className="mb-4 text-center font-light xl:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          explicabo illo nisi, repudiandae, illum repellat optio repellendus
          atque impedit doloremque voluptatem praesentium ipsam omnis.
        </p>
        <Link href={""} download={"Book"} passHref>
          <button
            type="button"
            className="rounded-full bg-[#DC0A00] px-8 py-4 text-xs font-semibold uppercase text-white transition hover:scale-110"
          >
            Download
            <BsArrowDown className="ml-2 inline-block h-4 w-4 " />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Book;
