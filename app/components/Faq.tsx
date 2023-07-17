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
    <div className="flex w-full justify-center pt-28">
      <div className="flex w-[1400px] flex-col gap-y-6">
        <h1 className="text-sm font-bold uppercase text-gray-400">
          Frequently Asked Questions
        </h1>
        <h3 className="text-6xl font-bold leading-tight">
          Have any questions?
        </h3>
        <Accordion
          type="single"
          collapsible
          className="flex w-full flex-col gap-y-6"
        >
          <AccordionItem
            value="item-1"
            className="rounded-lg bg-neutral-200 px-4 py-4"
          >
            <AccordionTrigger>
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
            <AccordionTrigger>
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
            <AccordionTrigger>
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

        <Link className="flex gap-x-4 hover:underline" href={"/faqs"} passHref>
          <h1 className="text-sm font-bold uppercase">More Questions?</h1>
          <BsArrowRight className="mt-0.5 inline h-4 w-4 hover:scale-110" />
        </Link>
      </div>
    </div>
  );
};

export default Faq;
