"use client";

import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

const HelpLine = () => {
  return (
    <div className="sticky top-0 z-10 flex w-full flex-row items-center justify-between gap-x-4 bg-[#DC0A00] px-8 py-3 sm:gap-x-8 sm:px-12 md:px-16 lg:px-20">
      <div className="flex w-fit flex-col-reverse italic text-white sm:flex sm:flex-col-reverse sm:justify-between md:inline-flex md:flex-row md:gap-x-8 lg:inline-flex lg:flex-row lg:justify-between lg:gap-x-16">
        <p>Child help-line</p>
        <p>(+234)915-199-6062</p>
      </div>
      <div className="inline-flex w-fit flex-row justify-between [&>*]:mx-2">
        <Link
          target="_blank"
          href={
            "https://www.facebook.com/profile.php?id=100091230700459&mibextid=ZbWKwL"
          }
        >
          <BiLogoFacebookSquare className="h-8 w-8 text-white hover:opacity-70 sm:h-8 sm:w-8 md:h-6 md:w-6 lg:h-4  lg:w-4" />
        </Link>
        <Link
          target="_blank"
          href={
            "https://instagram.com/speakoutafricaorganisation?igshid=MzRlODBiNWFlZA=="
          }
        >
          <AiOutlineInstagram className="h-8 w-8 text-white hover:opacity-70 sm:h-8 sm:w-8 md:h-6 md:w-6 lg:h-4 lg:w-4" />
        </Link>
        <Link
          target="_blank"
          href={
            "https://www.linkedin.com/company/speakout-africa-organisation/"
          }
        >
          <FaLinkedin className="h-8 w-8 text-white hover:opacity-70 sm:h-8 sm:w-8 md:h-6 md:w-6 lg:h-4 lg:w-4" />
        </Link>
      </div>
    </div>
  );
};

export default HelpLine;
