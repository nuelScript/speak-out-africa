import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface JoinUsProps {
  description: string;
  className?: string;
}

const JoinUs = ({ description, className }: JoinUsProps) => {
  return (
    <section
      className={twMerge(
        "mt-40 flex w-full flex-col gap-x-4 bg-black px-12 py-12 text-white sm:flex-row sm:px-16 sm:py-16 md:flex-row md:px-20 md:py-20 lg:flex-row lg:px-24 lg:py-20",
        className
      )}
    >
      <div className="mb-8 flex w-full flex-col gap-2 sm:mb-0 sm:w-full md:mb-0 md:w-1/2 lg:mb-0 lg:w-1/2">
        <h1 className="text-center text-2xl font-bold leading-tight sm:text-left sm:text-3xl md:text-left md:text-4xl lg:text-left lg:text-5xl">
          {" "}
          We are helping children of all ages have a voice.
        </h1>
        <p className="text-center text-sm font-medium sm:text-left md:text-left lg:text-left">
          Join us let{"'"}s change the world together
        </p>
      </div>
      <div className="flex w-full items-center  justify-center sm:w-full md:w-1/2 lg:w-1/2">
        <Link href={"/joinUs"} passHref>
          <Button
            variant="destructive"
            className="rounded-full px-8 py-8 text-sm font-bold uppercase text-neutral-100 hover:opacity-70 sm:px-12 md:px-16 lg:px-20"
          >
            {description}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default JoinUs;
