import { FaRegCheckCircle } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface WhyUsProps {
  className?: string;
}

const WhyUs = ({ className }: WhyUsProps) => {
  return (
    <div
      className={twMerge(
        "flex w-full flex-col items-center justify-center",
        className
      )}
    >
      <p className="2xl mb-2 text-xl font-bold uppercase text-neutral-500 xl:text-sm xl:font-semibold">
        Why Us?
      </p>
      <h1 className="text-center text-3xl font-bold xl:text-start xl:text-5xl">
        What Makes Us Different?
      </h1>
      <div className="mt-8 grid w-full auto-rows-fr grid-cols-1 place-items-center gap-y-20 px-8 md:grid-cols-2 lg:grid-cols-2 xl:w-3/4 2xl:grid-cols-3 2xl:place-items-start 2xl:px-12">
        <div className="flex w-[300px] flex-col items-center rounded-bl-[100px] rounded-tr-[100px] bg-neutral-200 px-2 py-4 xl:w-[360px]">
          <FaRegCheckCircle className="mb-4 mt-4 inline-block h-10 w-10 font-medium text-[#D90A01]" />
          <h1 className="mt-4 text-xl font-semibold tracking-wider">
            Lorem ipsum dolor
          </h1>
          <p className="w-4/5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            assumenda blanditiis officia
          </p>
        </div>
        <div className="flex w-[300px] flex-col items-center rounded-bl-[100px] rounded-tr-[100px] bg-neutral-200 px-2 py-4 xl:w-[360px]">
          <FaRegCheckCircle className="mb-4 mt-4 inline-block h-10 w-10 font-medium text-[#D90A01]" />
          <h1 className="mt-4 text-xl font-semibold tracking-wider">
            Lorem ipsum dolor
          </h1>
          <p className="w-4/5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            assumenda blanditiis officia
          </p>
        </div>
        <div className="flex w-[300px] flex-col items-center rounded-bl-[100px] rounded-tr-[100px] bg-neutral-200 px-2 py-4 xl:w-[360px]">
          <FaRegCheckCircle className="mb-4 mt-4 inline-block h-10 w-10 font-medium text-[#D90A01]" />
          <h1 className="mt-4 text-xl font-semibold tracking-wider">
            Lorem ipsum dolor
          </h1>
          <p className="w-4/5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            assumenda blanditiis officia
          </p>
        </div>
        <div className="flex w-[300px] flex-col items-center rounded-bl-[100px] rounded-tr-[100px] bg-neutral-200 px-2 py-4 xl:w-[360px]">
          <FaRegCheckCircle className="mb-4 mt-4 inline-block h-10 w-10 font-medium text-[#D90A01]" />
          <h1 className="mt-4 text-xl font-semibold tracking-wider">
            Lorem ipsum dolor
          </h1>
          <p className="w-4/5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            assumenda blanditiis officia
          </p>
        </div>
        <div className="flex w-[300px] flex-col items-center rounded-bl-[100px] rounded-tr-[100px] bg-neutral-200 px-2 py-4 xl:w-[360px]">
          <FaRegCheckCircle className="mb-4 mt-4 inline-block h-10 w-10 font-medium text-[#D90A01]" />
          <h1 className="mt-4 text-xl font-semibold tracking-wider">
            Lorem ipsum dolor
          </h1>
          <p className="w-4/5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            assumenda blanditiis officia
          </p>
        </div>
        <div className="flex w-[300px] flex-col items-center rounded-bl-[100px] rounded-tr-[100px] bg-neutral-200 px-2 py-4 xl:w-[360px]">
          <FaRegCheckCircle className="mb-4 mt-4 inline-block h-10 w-10 font-medium text-[#D90A01]" />
          <h1 className="mt-4 text-xl font-semibold tracking-wider">
            Lorem ipsum dolor
          </h1>
          <p className="w-4/5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            assumenda blanditiis officia
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
