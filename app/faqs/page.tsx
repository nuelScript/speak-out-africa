"use client";

import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => {
  return (
    <div className="min-h-full w-full">
      <Banner title="FAQS" />
      <div className="m-auto flex h-full w-full flex-col gap-8 p-4 xl:p-28">
        <div className="flex flex-col xl:ml-2">
          <h1 className="mb-4 text-center text-lg font-bold uppercase text-gray-500 sm:text-left lg:text-left xl:mb-0 xl:font-semibold">
            Frequently Asked Questions
          </h1>
          <h3 className="text-center text-3xl font-bold xl:text-left xl:text-6xl">
            Have any questions?
          </h3>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mb-8 flex w-full flex-col gap-y-6 xl:mb-0"
        >
          <AccordionItem
            value="item-1"
            className="rounded-lg bg-neutral-200 px-1 py-2 xl:px-4 xl:py-4"
          >
            <AccordionTrigger className="text-sm font-semibold xl:text-base xl:font-normal">
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
            className="rounded-lg bg-neutral-200 px-1 py-2 xl:px-4 xl:py-4"
          >
            <AccordionTrigger className="text-sm font-semibold xl:text-base xl:font-normal">
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
            className="rounded-lg bg-neutral-200 px-1 py-2 xl:px-4 xl:py-4"
          >
            <AccordionTrigger className="text-sm font-semibold xl:text-base xl:font-normal">
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
            value="item-4"
            className="rounded-lg bg-neutral-200 px-1 py-2 xl:px-4 xl:py-4"
          >
            <AccordionTrigger className="text-sm font-semibold xl:text-base xl:font-normal">
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
            value="item-5"
            className="rounded-lg bg-neutral-200 px-1 py-2 xl:px-4 xl:py-4"
          >
            <AccordionTrigger className="text-sm font-semibold xl:text-base xl:font-normal">
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
            value="item-6"
            className="rounded-lg bg-neutral-200 px-1 py-2 xl:px-4 xl:py-4"
          >
            <AccordionTrigger className="text-sm font-semibold xl:text-base xl:font-normal">
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
        <div className="inline-flex items-center justify-center gap-1 text-xs font-bold uppercase hover:cursor-pointer xl:justify-start xl:text-sm xl:font-semibold">
          Still Need Help?
          <span className="hover:underline">Send us a message here</span>{" "}
          <MdOutlineKeyboardDoubleArrowRight
            size={15}
            className="inline-block "
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faqs;
