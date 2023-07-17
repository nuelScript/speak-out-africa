"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { FcCheckmark } from "react-icons/fc";
import { PiTelegramLogo } from "react-icons/pi";
import { happy } from "@/public/images";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import { Separator } from "@/components/ui/separator";

type FormData = {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  address: string;
  occupation: string;
};

const JoinUsPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("/api/signUp", {
        method: "POST",
        body: new URLSearchParams(data),
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      alert("You've signed up successfully");
    } catch (error) {
      console.error(error);
      alert("We can't submit the form, please try again");
    }
  };

  return (
    <div className="min-h-full w-full">
      <Banner title="Join Us" />
      <div className="mb-4 flex w-full flex-col sm:items-center sm:px-10 sm:py-28 lg:h-full lg:flex-row lg:items-start lg:justify-center lg:p-32">
        <div className="flex w-full flex-col items-center gap-6 sm:h-1/2 lg:w-1/2 lg:items-start">
          <h1 className="w-full text-center text-6xl font-bold lg:text-left">
            We Need Your <br /> Help!
          </h1>
          <p className="w-7/12 text-center lg:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
            aliquam autem eius officiis molestias at aperiam praesentium, eum
            incidunt quasi temporibus, eveniet alias? Corrupti nam ipsum rem
            quas quasi facere.
          </p>
          <div className="flex w-full flex-col items-center lg:items-start">
            <h3 className="text-lg font-medium">Requirement</h3>
            <p className="mb-4 w-7/12 text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio id
              laudantium quibusdam veritatis dolorem illo, nesciunt hic quae
              consequuntur ullam ducimus saepe voluptates. Numquam nam aliquam
              qui dolor tempore tenetur?
            </p>
            <ul className="">
              <li className="mb-1">
                <FcCheckmark className="mr-4 inline-block font-semibold" />
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </span>
              </li>
              <li className="mb-1">
                <FcCheckmark className="mr-4 inline-block font-semibold" />
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </span>
              </li>
              <li className="mb-1">
                <FcCheckmark className="mr-4 inline-block font-semibold" />
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </span>
              </li>
              <li>
                <FcCheckmark className="mr-4 inline-block font-semibold" />
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <Separator orientation="vertical" className="bg-black" />
        <div className="flex w-full flex-col items-center sm:h-1/2 lg:w-1/2 lg:items-start">
          <h3 className="mb-5 text-5xl font-medium lg:mb-3 lg:text-2xl">
            Sign up form
          </h3>
          <p className="mb-4 text-2xl lg:text-base">
            The following info is required
          </p>
          <form
            className="flex w-full flex-col items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex w-full flex-col gap-6">
              <div className="w-full">
                <label
                  className="text-md mb-3 block font-medium text-zinc-900"
                  htmlFor="FullName"
                >
                  Full name
                </label>
                <input
                  className={`peer block w-full appearance-none rounded-full bg-neutral-200 px-6 py-4 text-base font-light text-black focus:outline-none focus:ring-0 lg:w-5/6`}
                  type="text"
                  id="FullName"
                  placeholder="Enter your full name"
                  {...register("fullName", { required: "Name is Required" })}
                />
                {errors.fullName && (
                  <span className="text-rose-500">
                    {errors.fullName.message}
                  </span>
                )}
              </div>
              <div className="w-full">
                <label
                  className="text-md mb-3 block font-medium text-zinc-900"
                  htmlFor="phoneNumber"
                >
                  Phone Number
                </label>
                <input
                  className={`peer block w-full appearance-none rounded-full bg-neutral-200 px-6 py-4 text-base font-light text-black focus:outline-none focus:ring-0 lg:w-5/6`}
                  type="text"
                  id="phoneNumber"
                  placeholder="Enter your phone number"
                  {...register("phoneNumber", {
                    required: "Phone Number is Required",
                  })}
                />
                {errors.phoneNumber && (
                  <span className="text-rose-500">
                    {errors.phoneNumber.message}
                  </span>
                )}
              </div>
              <div className="w-full">
                <label
                  className="text-md mb-3 block font-medium text-zinc-900"
                  htmlFor="emailAddress"
                >
                  Email Address
                </label>
                <input
                  className={`peer block w-full appearance-none rounded-full bg-neutral-200 px-6 py-4 text-base font-light text-black focus:outline-none focus:ring-0 lg:w-5/6`}
                  type="email"
                  id="emailAddress"
                  placeholder="Enter your email address"
                  {...register("emailAddress", {
                    required: "Email Address is Required",
                  })}
                />
                {errors.emailAddress && (
                  <span className="text-rose-500">
                    {errors.emailAddress.message}
                  </span>
                )}
              </div>
              <div className="w-full">
                <label
                  className="text-md mb-3 block font-medium text-zinc-900"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  className={`peer block w-full appearance-none rounded-full bg-neutral-200 px-6 py-4 text-base font-light text-black focus:outline-none focus:ring-0 lg:w-5/6`}
                  type="text"
                  id="address"
                  placeholder="Enter your address"
                  {...register("address", {
                    required: "Address is Required",
                  })}
                />
                {errors.address && (
                  <span className="text-rose-500">
                    {errors.address.message}
                  </span>
                )}
              </div>
              <div className="w-full">
                <label
                  className="text-md mb-3 block font-medium text-zinc-900"
                  htmlFor="phoneNumber"
                >
                  Occupation
                </label>
                <input
                  className={`peer block w-full appearance-none rounded-full bg-neutral-200 px-6 py-4 text-base font-light text-black focus:outline-none focus:ring-0 lg:w-5/6`}
                  type="text"
                  id="occupation"
                  placeholder="Enter your occupation"
                  {...register("occupation", {
                    required: "Occupation is Required",
                  })}
                />
                {errors.occupation && (
                  <span className="text-rose-500">
                    {errors.occupation.message}
                  </span>
                )}
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="rounded-full bg-[#DC0A00] px-8 py-3 text-xs font-semibold uppercase text-white"
                >
                  Submit
                  <PiTelegramLogo
                    size={25}
                    className="ml-5 inline-block text-white"
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <Image
          src={happy}
          alt="image"
          width={1200}
          className="object-contain"
        />
      </div>
      <Footer />
    </div>
  );
};

export default JoinUsPage;
