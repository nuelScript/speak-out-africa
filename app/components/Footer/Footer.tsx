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
        "flex min-h-full w-screen flex-col bg-neutral-600 px-20 py-6 text-white",
        className
      )}
    >
      <div className="mb-8 flex h-2/5 w-full items-center justify-between">
        <div className="flex w-1/2 flex-col">
          <h1 className="text-2xl font-semibold">NewsLetter</h1>
          <p className="text-base">
            Signup for regular newsletter and stay up to date
          </p>
        </div>
        <div className="w-1/2">
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
                        className="w-[20vw] rounded-s-full border-none px-4 py-2 text-base text-black outline-none"
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
      <Separator className="bg-neutral-400" />
      <div className="mb-4 mt-10 flex h-3/5 justify-between">
        <div className="flex w-1/2 flex-col items-start">
          <Logo className="" />
          <p className="mb-4 w-[65%] text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            expedita at alias dolorem, quae corrupti blanditiis enim eius porro
            esse commodi maxime repellat ullam est aliquam pariatur aut cumque
            maiores.
          </p>
          <Separator className="mb-8 w-11/12 bg-neutral-400" />
          <div className="inline-flex">
            <Link href={"/"} passHref>
              <AiOutlineLinkedin className="h-6 w-6 text-white hover:opacity-70" />
            </Link>
            <Link href={"/"} passHref>
              <PiFacebookLogoBold className="ml-8 h-6 w-6 text-white hover:opacity-70" />
            </Link>
            <Link href={"/"} passHref>
              <AiOutlineInstagram className="ml-8 h-6 w-6 text-white hover:opacity-70" />
            </Link>
          </div>
        </div>
        <div className="mt-4 flex h-full w-1/2 items-start justify-between">
          <SectionList title="Quick Link" className="w-1/2">
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
          <SectionList title="Organisational Info" className="w-1/2">
            <p className="mb-8">
              <BsTelephone size={25} className="mr-4 inline-flex text-white" />
              <span>(+234)915-199-6062</span>
            </p>
            <p className="">
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
