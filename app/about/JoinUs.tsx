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
    <div
      className={twMerge(
        "mt-40 flex w-full bg-black px-24 py-20 text-white",
        className
      )}
    >
      <div className="flex w-1/2 flex-col gap-2">
        <h1 className="text-5xl font-bold leading-tight">
          {" "}
          We are helping children <br /> of all ages have a voice.
        </h1>
        <p className="text-sm font-medium">
          Join us let{"'"}s change the world together
        </p>
      </div>
      <div className="flex w-1/2 items-center justify-center">
        <Link href={"/joinUs"} passHref>
          <Button
            variant="destructive"
            className="text-neutrl rounded-full px-20 py-8 text-sm font-bold uppercase hover:opacity-70"
          >
            {description}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default JoinUs;
