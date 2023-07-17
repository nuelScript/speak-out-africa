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
      <p className="mb-2 text-sm font-semibold uppercase text-neutral-500">
        Why Us?
      </p>
      <h1 className="text-5xl font-bold">What Makes Us Different?</h1>
      <div className="mt-8 grid w-3/4 auto-rows-fr grid-cols-3 gap-y-20 px-12">
        <div className="flex w-[360px] flex-col items-center rounded-bl-[100px] rounded-tr-[100px] bg-neutral-200 px-2 py-4">
          <FaRegCheckCircle className="mb-4 mt-4 inline-block h-10 w-10 font-medium text-[#D90A01]" />
          <h1 className="mt-4 text-xl font-semibold tracking-wider">
            Lorem ipsum dolor
          </h1>
          <p className="w-4/5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            assumenda blanditiis officia
          </p>
        </div>
        <div className="flex w-[360px] flex-col items-center rounded-bl-[100px] rounded-tr-[100px] bg-neutral-200 px-2 py-4">
          <FaRegCheckCircle className="mb-4 mt-4 inline-block h-10 w-10 font-medium text-[#D90A01]" />
          <h1 className="mt-4 text-xl font-semibold tracking-wider">
            Lorem ipsum dolor
          </h1>
          <p className="w-4/5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            assumenda blanditiis officia
          </p>
        </div>
        <div className="flex w-[360px] flex-col items-center rounded-bl-[100px] rounded-tr-[100px] bg-neutral-200 px-2 py-4">
          <FaRegCheckCircle className="mb-4 mt-4 inline-block h-10 w-10 font-medium text-[#D90A01]" />
          <h1 className="mt-4 text-xl font-semibold tracking-wider">
            Lorem ipsum dolor
          </h1>
          <p className="w-4/5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            assumenda blanditiis officia
          </p>
        </div>
        <div className="flex w-[360px] flex-col items-center rounded-bl-[100px] rounded-tr-[100px] bg-neutral-200 px-2 py-4">
          <FaRegCheckCircle className="mb-4 mt-4 inline-block h-10 w-10 font-medium text-[#D90A01]" />
          <h1 className="mt-4 text-xl font-semibold tracking-wider">
            Lorem ipsum dolor
          </h1>
          <p className="w-4/5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            assumenda blanditiis officia
          </p>
        </div>
        <div className="flex w-[360px] flex-col items-center rounded-bl-[100px] rounded-tr-[100px] bg-neutral-200 px-2 py-4">
          <FaRegCheckCircle className="mb-4 mt-4 inline-block h-10 w-10 font-medium text-[#D90A01]" />
          <h1 className="mt-4 text-xl font-semibold tracking-wider">
            Lorem ipsum dolor
          </h1>
          <p className="w-4/5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            assumenda blanditiis officia
          </p>
        </div>
        <div className="flex w-[360px] flex-col items-center rounded-bl-[100px] rounded-tr-[100px] bg-neutral-200 px-2 py-4">
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
