import {
  dummypicture1,
  dummypicture2,
  dummypicture3,
  dummypicture4,
  dummypicture7,
} from "@/public/images";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface ServicesProps {
  className?: string;
}

const Services = ({ className }: ServicesProps) => {
  return (
    <div
      className={twMerge("flex w-full flex-col items-center py-16", className)}
    >
      <p className="mb-8 text-xl font-bold uppercase text-neutral-500 xl:mb-2 xl:text-sm xl:font-semibold">
        Our Services
      </p>
      <h1 className="text-4xl font-bold xl:text-5xl">What we Do</h1>
      <div className="mt-8 grid w-full auto-rows-fr grid-cols-1 place-items-center gap-y-20 px-8 md:grid-cols-2 lg:grid-cols-2 xl:w-3/4 2xl:grid-cols-3 2xl:place-items-start 2xl:px-12">
        <div className="flex w-[300px] flex-col items-center rounded-bl-[100px] rounded-tr-[100px] xl:w-[360px]">
          <Image
            src={dummypicture1}
            alt="1"
            width={360}
            height={300}
            className="rounded-bl-[100px] rounded-tr-[100px] object-contain"
          />
          <h1 className="mt-4 text-xl font-semibold tracking-wider">
            Lorem ipsum dolor
          </h1>
          <p className="w-4/5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            assumenda blanditiis officia dolorum sequi excepturi rem obcaecati
          </p>
        </div>
        <div className="flex w-[300px] flex-col items-center rounded-bl-[100px] rounded-tr-[100px] xl:w-[360px]">
          <Image
            src={dummypicture2}
            alt="1"
            width={360}
            height={300}
            className="rounded-bl-[100px] rounded-tr-[100px] object-contain"
          />
          <h1 className="mt-4 text-xl font-semibold tracking-wider">
            Lorem ipsum dolor
          </h1>
          <p className="w-4/5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            assumenda blanditiis officia dolorum sequi excepturi rem obcaecati
          </p>
        </div>
        <div className="flex w-[300px] flex-col items-center rounded-bl-[100px] rounded-tr-[100px] xl:w-[360px]">
          <Image
            src={dummypicture3}
            alt="1"
            width={360}
            height={300}
            className="rounded-bl-[100px] rounded-tr-[100px] object-contain"
          />
          <h1 className="mt-4 text-xl font-semibold tracking-wider">
            Lorem ipsum dolor
          </h1>
          <p className="w-4/5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            assumenda blanditiis officia dolorum sequi excepturi rem obcaecati
          </p>
        </div>
        <div className="flex w-[300px] flex-col items-center rounded-bl-[100px] rounded-tr-[100px] xl:w-[360px]">
          <Image
            src={dummypicture4}
            alt="1"
            width={360}
            height={300}
            className="rounded-bl-[100px] rounded-tr-[100px] object-contain"
          />
          <h1 className="mt-4 text-xl font-semibold tracking-wider">
            Lorem ipsum dolor
          </h1>
          <p className="w-4/5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            assumenda blanditiis officia dolorum sequi excepturi rem obcaecati
          </p>
        </div>
        <div className="flex w-[300px] flex-col items-center rounded-bl-[100px] rounded-tr-[100px] xl:w-[360px]">
          <Image
            src={dummypicture3}
            alt="1"
            width={360}
            height={300}
            className="rounded-bl-[100px] rounded-tr-[100px] object-contain"
          />
          <h1 className="mt-4 text-xl font-semibold tracking-wider">
            Lorem ipsum dolor
          </h1>
          <p className="w-4/5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            assumenda blanditiis officia dolorum sequi excepturi rem obcaecati
          </p>
        </div>
        <div className="flex w-[300px] flex-col items-center rounded-bl-[100px] rounded-tr-[100px] xl:w-[360px]">
          <Image
            src={dummypicture7}
            alt="1"
            width={360}
            height={300}
            className="rounded-bl-[100px] rounded-tr-[100px] object-contain"
          />
          <h1 className="mt-4 text-xl font-semibold tracking-wider">
            Lorem ipsum dolor
          </h1>
          <p className="w-4/5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            assumenda blanditiis officia dolorum sequi excepturi rem obcaecati
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
