import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Faq = () => {
  return (
    <section className="flex w-full justify-center pt-28">
      <div className="flex w-[1400px] flex-col gap-y-6">
        <h1 className="px-4 text-center text-lg font-bold uppercase text-gray-400 sm:px-4 sm:text-center sm:text-sm md:px-4 md:text-center md:text-sm lg:px-4 lg:text-left lg:text-sm">
          Frequently Asked Questions
        </h1>
        <h3 className="px-4 text-center text-3xl font-bold leading-tight sm:px-4 sm:text-center sm:text-4xl md:px-4 md:text-center md:text-5xl lg:px-4 lg:text-left lg:text-6xl">
          Have any questions?
        </h3>
        <Accordion
          type="single"
          collapsible
          className="flex w-full flex-col gap-y-6 px-4 sm:px-4 md:px-4 lg:px-4 "
        >
          <AccordionItem
            value="item-1"
            className="rounded-lg bg-neutral-200 px-4 py-4"
          >
            <AccordionTrigger className="text-xs sm:text-sm md:text-base lg:text-base">
              Can I become a volunteer from any state?
            </AccordionTrigger>
            <AccordionContent className="font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur dolorem animi, rerum itaque sed nesciunt dolorum
              molestias est! Repellendus sequi, labore repudiandae temporibus
              exercitationem voluptate molestiae ipsam quae. Magni, ducimus.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="rounded-lg bg-neutral-200 px-4 py-4"
          >
            <AccordionTrigger className="text-xs sm:text-sm md:text-base lg:text-base">
              Can I become a volunteer from any state?
            </AccordionTrigger>
            <AccordionContent className="font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur dolorem animi, rerum itaque sed nesciunt dolorum
              molestias est! Repellendus sequi, labore repudiandae temporibus
              exercitationem voluptate molestiae ipsam quae. Magni, ducimus.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="rounded-lg bg-neutral-200 px-4 py-4"
          >
            <AccordionTrigger className="text-xs sm:text-sm md:text-base lg:text-base">
              Can I become a volunteer from any state?
            </AccordionTrigger>
            <AccordionContent className="font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur dolorem animi, rerum itaque sed nesciunt dolorum
              molestias est! Repellendus sequi, labore repudiandae temporibus
              exercitationem voluptate molestiae ipsam quae. Magni, ducimus.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Link
          className="flex w-full justify-end gap-x-4 px-4 hover:underline sm:justify-start sm:px-4 md:justify-start md:px-4 lg:justify-start lg:px-4"
          href={"/faqs"}
          passHref
        >
          <h1 className="text-sm font-bold uppercase ">More Questions?</h1>
          <BsArrowRight className="mt-0.5 inline h-4 w-4 hover:scale-110" />
        </Link>
      </div>
    </section>
  );
};

export default Faq;
