import { Brainstorm } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowDown } from "react-icons/bs";

const Book = () => {
  return (
    <div className="flex w-[1000px] gap-4">
      <div className="flex w-1/2 items-center justify-center">
        <Image
          src={Brainstorm}
          alt="Brainstorm"
          width={400}
          height={400}
          className=""
        />
      </div>
      <div className="flex w-1/2 flex-col justify-center">
        <h1 className="mb-4 text-xl font-medium">Lorem ipsum dolor sit amet</h1>
        <p className="mb-4">
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
