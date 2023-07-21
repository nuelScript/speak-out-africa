"use client";

import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import Logo from "../Logo";
import { PiFacebookLogoBold } from "react-icons/pi";
import { BsArrowRightShort, BsTelephone } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import SectionList from "./SectionList";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Separator } from "@/components/ui/separator";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

interface FooterProps {
  className?: string;
}

const formSchema = z.object({
  email: z
    .string({
      required_error: "Enter an email address",
    })
    .email(),
});

const Footer = ({ className }: FooterProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: new URLSearchParams(data),
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      toast({
        title: "You've successfully signed up for our newsletter",
        description: "We'll send you a mail shortly",
        action: <ToastAction altText="Close">Close</ToastAction>,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Something went wrong, please try again",
        action: <ToastAction altText="Close">Close</ToastAction>,
      });
    }
  };
  return (
    <div
      className={twMerge(
        "flex min-w-full flex-col bg-neutral-600 px-10 py-6 text-white sm:px-12 md:px-16 lg:px-20",
        className
      )}
    >
      <div className="mb-8 flex h-2/5 w-full flex-col items-center justify-between sm:flex-row md:flex-row lg:flex-row">
        <div className="mb-8 flex w-full flex-col items-center sm:mb-0 sm:w-1/2 sm:items-start md:mb-0 md:w-1/2 md:items-start lg:mb-0 lg:w-1/2 lg:items-start">
          <h1 className="mb-2 text-2xl font-semibold sm:mb-0 md:mb-0 lg:mb-0">
            NewsLetter
          </h1>
          <p className="text-center text-base sm:text-start md:text-start lg:text-start">
            Signup for regular newsletter and stay up to date
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
          <Form {...form}>
            <form
              className="flex w-full items-center justify-center"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        type="text"
                        id="Name"
                        placeholder="Your email address"
                        className="w-[60vw] rounded-s-full border-none px-4 py-2 text-base text-black outline-none sm:w-[20vw] md:w-[20vw] lg:w-[20vw]"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <button
                type="submit"
                className="rounded-e-full border-none bg-[#DC0A00] px-4 py-2 outline-none"
              >
                Submit
              </button>
            </form>
          </Form>
        </div>
      </div>
      <Separator className="bg-neutral-400 " />
      <div className="mb-4 mt-10 flex flex-col justify-between sm:h-3/5 sm:flex-row md:h-3/5 md:flex-row lg:h-3/5 lg:flex-row">
        <div className="flex w-full flex-col items-center gap-x-2 sm:w-1/2 sm:items-start sm:gap-x-0 md:w-1/2 md:items-start md:gap-x-0 lg:w-1/2 lg:items-start lg:gap-x-0">
          <Logo className="" />
          <p className="mb-4 w-full text-center text-base sm:w-[75%] sm:text-left md:w-[70%] md:text-left lg:w-[65%] lg:text-left ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            expedita at alias dolorem, quae corrupti blanditiis enim eius porro
            esse commodi maxime repellat ullam est aliquam pariatur aut cumque
            maiores.
          </p>
          <div className="flex w-full flex-col-reverse items-center sm:flex-col sm:items-start md:flex-col md:items-start lg:flex-col lg:items-start">
            <Separator className="mb-8 w-full bg-neutral-400 sm:w-11/12 md:w-11/12 lg:w-11/12" />
            <div className="mb-8 inline-flex sm:mb-0 md:mb-0 lg:mb-0">
              <Link
                target="_blank"
                href={
                  "https://www.linkedin.com/company/speakout-africa-organisation/"
                }
                passHref
              >
                <AiOutlineLinkedin className="h-8 w-8 text-white hover:opacity-70 sm:h-6 sm:w-6 md:h-6 md:w-6 lg:h-6 lg:w-6" />
              </Link>
              <Link
                target="_blank"
                href={
                  "https://www.facebook.com/profile.php?id=100091230700459&mibextid=ZbWKwL"
                }
                passHref
              >
                <PiFacebookLogoBold className="ml-8 h-8 w-8 text-white hover:opacity-70 sm:h-6 sm:w-6 md:h-6 md:w-6 lg:h-6 lg:w-6" />
              </Link>
              <Link
                target="_blank"
                href={
                  "https://instagram.com/speakoutafricaorganisation?igshid=MzRlODBiNWFlZA=="
                }
                passHref
              >
                <AiOutlineInstagram className="ml-8 h-8 w-8 text-white hover:opacity-70 sm:h-6 sm:w-6 md:h-6 md:w-6 lg:h-6 lg:w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex h-1/3 w-full flex-col items-center justify-between sm:mt-4 sm:h-full sm:w-1/2 sm:flex-row sm:items-start md:mt-4 md:h-full md:w-1/2 md:flex-row md:items-start lg:mt-4 lg:h-full lg:w-1/2 lg:flex-row lg:items-start">
          <SectionList
            title="Quick Link"
            className="flex flex-col items-start sm:w-1/2 sm:items-start md:w-1/2 md:items-start lg:w-1/2 lg:items-start"
          >
            <Link className="hover:opacity-70" href={"/about"}>
              <BsArrowRightShort size={25} className="mb-1 mr-2 inline-block" />
              About Us
            </Link>
            <Link className="hover:opacity-70" href={"/contact"}>
              <BsArrowRightShort size={25} className="mb-1 mr-2 inline-block" />
              Contact Us
            </Link>
            <Link className="hover:opacity-70" href={"/donation"}>
              <BsArrowRightShort size={25} className="mb-1 mr-2 inline-block" />
              Donate
            </Link>
            <Link className="hover:opacity-70" href={"/news&article"}>
              <BsArrowRightShort size={25} className="mb-1 mr-2 inline-block" />
              Latest News
            </Link>
            <Link className="hover:opacity-70" href={"/ourServices"}>
              <BsArrowRightShort size={25} className="mb-1 mr-2 inline-block" />
              Our Services
            </Link>
            <Link className="hover:opacity-70" href={"/events"}>
              <BsArrowRightShort size={25} className="mb-1 mr-2 inline-block" />
              Recent Events
            </Link>
          </SectionList>
          <SectionList
            title="Organisational Info"
            className="flex flex-col items-center sm:w-1/2 sm:items-start md:w-1/2 md:items-start lg:w-1/2 lg:items-start"
          >
            <p className="mb-8">
              <BsTelephone size={25} className="mr-4 inline-flex text-white" />
              <span>(+234)915-199-6062</span>
            </p>
            <p className="w-[70%] sm:w-full md:w-full lg:w-full">
              <HiOutlineLocationMarker
                size={25}
                className="mr-4 inline-flex text-white"
              />
              <span>No. 7 kingweston lorem imp Nigeria</span>
            </p>
          </SectionList>
        </div>
      </div>
    </div>
  );
};

export default Footer;
