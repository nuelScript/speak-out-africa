import { Button } from "@/components/ui/button";
import { Smiling } from "@/public/images";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const WhoWeAre = () => {
  return (
    <div className="flex w-full gap-32   p-28">
      <div className="flex w-1/2 flex-col">
        <div className="flex w-full justify-start">
          <div className="h-[72px] w-[72px] rounded-full bg-[#DC0A00]"></div>
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
          <div className="h-[72px] w-[72px] rounded-full bg-black"></div>
        </div>
      </div>
      <div className=" flex w-1/2 grow-0 flex-col">
        <h1 className="mb-8 text-6xl font-bold leading-tight">
          Lorem ipsum <br /> dolor sit amet{" "}
          <span className="text-[#DC0A00]">consectetur</span>.
        </h1>
        <p className="mb-8 w-3/5 font-light">
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
