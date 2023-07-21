import { Button } from "@/components/ui/button";
import { Smiling } from "@/public/images";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const WhoWeAre = () => {
  return (
    <div className="flex w-full flex-col items-center gap-8 p-14 sm:flex-col sm:items-center sm:gap-16 sm:p-20 md:flex-col md:items-center md:gap-24 md:p-24 lg:flex-row lg:gap-32 lg:p-28">
      <div className="flex w-full flex-col sm:w-full md:w-full lg:w-1/2">
        <div className="flex w-full justify-start">
          <div className="h-[40px] w-[40px] rounded-full bg-[#DC0A00] sm:h-[45px] sm:w-[45px] md:h-[50px] md:w-[50px] lg:h-[72px] lg:w-[72px]"></div>
        </div>
        <div className="flex w-full justify-center">
          <Image
            src={Smiling}
            width={524}
            height={454}
            alt="Image"
            className="object-contain"
          />
        </div>
        <div className="flex w-full justify-end">
          <div className="h-[40px] w-[40px] rounded-full bg-black sm:h-[45px] sm:w-[45px] md:h-[50px] md:w-[50px] lg:h-[72px] lg:w-[72px]"></div>
        </div>
      </div>
      <div className="flex w-full grow-0 flex-col sm:w-full md:w-full lg:w-1/2">
        <h1 className="mb-4 text-start text-3xl font-bold leading-tight sm:text-start sm:text-4xl md:text-start md:text-5xl lg:mb-8 lg:text-start lg:text-6xl">
          Lorem ipsum <br /> dolor sit amet{" "}
          <span className="text-[#DC0A00]">consectetur</span>.
        </h1>
        <p className="mb-8 font-light lg:w-3/5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat,
          tempore? Exercitationem explicabo saepe vero non iusto consequatur
          culpa ea, architecto, eligendi id, at accusamus odio consectetur
          blanditiis laudantium eius fuga!
          <br className="mb-8" />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque eius
          consequatur consectetur impedit, reprehenderit vitae debitis quia
          iusto, asperiores suscipit expedita veritatis aperiam laboriosam
          commodi. Ea corrupti voluptates rem dolor!
        </p>
        <div className="flex w-full grow-0">
          <Button
            className="rounded-full px-8 py-4 text-xs font-semibold uppercase "
            variant="default"
          >
            Read More
            <BsArrowRight className="ml-2 inline-block" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
