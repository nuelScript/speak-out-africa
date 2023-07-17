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
    <div className="min-h-full w-full overflow-x-auto overflow-y-scroll">
      <Banner title="FAQS" />
      <div className="flex h-full w-full flex-col gap-8 p-28">
        <div className="ml-2 flex flex-col">
          <h1 className="text-sm font-semibold uppercase text-gray-400">
            Frequently Asked Questions
          </h1>
          <h3 className="text-6xl font-bold">Have any questions?</h3>
        </div>
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
          <AccordionItem
            value="item-4"
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
            value="item-5"
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
            value="item-6"
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
        <h1 className="inline-flex items-center gap-1 text-sm font-semibold uppercase hover:cursor-pointer">
          Still Need Help?
          <span className="hover:underline">Send us a message here</span>{" "}
          <MdOutlineKeyboardDoubleArrowRight
            size={15}
            className="inline-block "
          />
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default Faqs;
