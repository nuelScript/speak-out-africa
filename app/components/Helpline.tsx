"use client";

import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

const HelpLine = () => {
  return (
    <div className="sticky top-0 z-10 flex w-full flex-row items-center justify-between bg-[#DC0A00] px-20 py-3">
      <div className="inline-flex w-fit justify-between gap-16 italic text-white">
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
          <BiLogoFacebookSquare
            size={20}
            className="text-white hover:opacity-70"
          />
        </Link>
        <Link
          target="_blank"
          href={
            "https://instagram.com/speakoutafricaorganisation?igshid=MzRlODBiNWFlZA=="
          }
        >
          <AiOutlineInstagram
            size={20}
            className="text-white hover:opacity-70"
          />
        </Link>
        <Link
          target="_blank"
          href={
            "https://www.linkedin.com/company/speakout-africa-organisation/"
          }
        >
          <FaLinkedin size={20} className="text-white hover:opacity-70" />
        </Link>
      </div>
    </div>
  );
};

export default HelpLine;
