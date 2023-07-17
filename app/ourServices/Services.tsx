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
      <p className="mb-2 text-sm font-semibold uppercase text-neutral-500">
        Our Services
      </p>
      <h1 className="text-5xl font-bold">What we Do</h1>
      <div className="mt-8 grid w-3/4 auto-rows-fr grid-cols-3 gap-y-20 px-12">
        <div className="flex w-[360px] flex-col items-center rounded-bl-[100px] rounded-tr-[100px]">
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
        <div className="flex w-[360px] flex-col items-center rounded-bl-[100px] rounded-tr-[100px]">
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
        <div className="flex w-[360px] flex-col items-center rounded-bl-[100px] rounded-tr-[100px]">
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
        <div className="flex w-[360px] flex-col items-center rounded-bl-[100px] rounded-tr-[100px]">
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
        <div className="flex w-[360px] flex-col items-center rounded-bl-[100px] rounded-tr-[100px]">
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
        <div className="flex w-[360px] flex-col items-center rounded-bl-[100px] rounded-tr-[100px]">
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
