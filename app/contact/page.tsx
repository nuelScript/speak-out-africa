"use client";

import { dummypicture5, maps, woman } from "@/public/images";
import Banner from "../components/Banner/Banner";
import Image from "next/image";
import { MdOutlineLocationOn, MdOutlineEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { useForm, SubmitHandler } from "react-hook-form";
import { PiTelegramLogo } from "react-icons/pi";
import ImageBanner from "./Image";
import Footer from "../components/Footer/Footer";
import Link from "next/link";

type FormData = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  subject: string;
  message: string;
};

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: new URLSearchParams(data),
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      alert("Thanks for contacting us, we will get back to you soon!");
    } catch (err) {
      console.error(err);
      alert("We can't submit the form, try again later?");
    }
  };

  return (
    <div className="min-h-full w-full">
      <Banner title="Contact" />
      <div className="my-20 flex w-full justify-center gap-48">
        <Image
          src={woman}
          alt="photo"
          width={326}
          height={326}
          className=" rounded-bl-lg rounded-tr-lg object-contain"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-sm font-semibold uppercase text-neutral-500">
            Contact Us
          </h1>
          <h1 className="w-full text-6xl font-bold">Get In Touch With Us</h1>
          <p className="text-xl font-medium">Visit Us</p>
          <p>
            <MdOutlineLocationOn
              className="mr-4 inline-block text-[#DC0A00] hover:cursor-pointer"
              size={25}
            />
            <span className="font-light">
              No 7 Orba Road United kingdom, Nigeria
            </span>
          </p>
          <p className="text-xl font-medium">Mail Us</p>
          <p>
            <MdOutlineEmail
              className="mr-4 inline-block text-[#DC0A00] hover:cursor-pointer"
              size={25}
            />
            <Link
              href="mailto:speakoutafrica@gmail.com"
              className="hover:text-gray-600 hover:underline"
              passHref
            >
              <span className="font-light">speakoutafrica@gmail.com</span>
            </Link>
          </p>
          <p className="text-xl font-medium">Call Us</p>
          <p>
            <IoMdCall
              className="mr-4 inline-block text-[#DC0A00] hover:cursor-pointer"
              size={25}
            />
            <Link
              href="tel:+2349151996062"
              className="hover:text-gray-500 hover:underline"
            >
              <span className="font-light">+234-915-199-6062</span>
            </Link>
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-10 flex w-full flex-col items-center"
      >
        <div className="flex w-[1200px] flex-col gap-6">
          <div className="flex w-full justify-start">
            <p className="mb-6 text-xl font-medium"> Send us a message</p>
          </div>
          <div className="flex w-full gap-16">
            <div className="w-full">
              <label
                className="text-md mb-3 block font-medium text-zinc-900"
                htmlFor="FirstName"
              >
                First name
              </label>
              <input
                className={`peer block w-full appearance-none rounded-full bg-neutral-200 px-6 py-4 text-base font-light text-black focus:outline-none focus:ring-0`}
                type="text"
                id="FirstName"
                placeholder="Enter your first name"
                {...register("firstName", {
                  required: "FirstName is Required",
                })}
              />
              {errors.firstName && (
                <span className="text-rose-500">
                  {errors.firstName.message}
                </span>
              )}
            </div>
            <div className="w-full">
              <label
                className="text-md mb-3 block font-medium text-zinc-900"
                htmlFor="LastName"
              >
                Last name
              </label>
              <input
                className={`peer block w-full appearance-none rounded-full bg-neutral-200 px-6 py-4 text-base font-light text-black focus:outline-none focus:ring-0`}
                type="text"
                id="LastName"
                placeholder="Enter your last name"
                {...register("lastName", { required: "LastName is Required" })}
              />
              {errors.lastName && (
                <span className="text-rose-500">{errors.lastName.message}</span>
              )}
            </div>
          </div>
          <div className="w-full">
            <label
              className="text-md mb-3 block font-medium text-zinc-900"
              htmlFor="emailAddress"
            >
              Email Address
            </label>
            <input
              className={`peer block w-full appearance-none rounded-full bg-neutral-200 px-6 py-4 text-base font-light text-black focus:outline-none focus:ring-0`}
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
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              className={`peer block w-full appearance-none rounded-full bg-neutral-200 px-6 py-4 text-base font-light text-black focus:outline-none focus:ring-0`}
              type="text"
              id="subject"
              placeholder="Enter subject"
              {...register("subject", {
                required: "Subject is Required",
              })}
            />
            {errors.subject && (
              <span className="text-rose-500">{errors.subject.message}</span>
            )}
          </div>
          <div className="w-full">
            <label
              className="text-md mb-3 block font-medium text-zinc-900"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className={`peer block w-full resize-none appearance-none rounded-3xl bg-neutral-200 px-6 py-4 text-base font-light text-black focus:outline-none focus:ring-0`}
              rows={6}
              cols={50}
              id="message"
              placeholder="Type your message"
              {...register("message", {
                required: "Message is Required",
              })}
            />
            {errors.message && (
              <span className="text-rose-500">{errors.message.message}</span>
            )}
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="rounded-full bg-[#DC0A00] px-8 py-3 text-xs font-semibold uppercase text-white"
            >
              Send Message
              <PiTelegramLogo
                size={25}
                className="ml-5 inline-block text-white"
              />
            </button>
          </div>
        </div>
      </form>
      <ImageBanner />
      <Footer />
    </div>
  );
};

export default ContactPage;
