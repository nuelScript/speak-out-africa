"use client";
import React from "react";
// import { useState } from "react";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import MenuItem from "./MenuItem";
import Link from "next/link";
import { ListItem } from "@/components/ui/listItem";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const aboutUs: { title: string; href: string }[] = [
  {
    title: "Who we are",
    href: "/about",
  },
  {
    title: "Our Services",
    href: "/ourServices",
  },
];

const programmes: { title: string; href: string }[] = [
  {
    title: "Our Campaigns",
    href: "/ourCampaigns",
  },
  {
    title: "Events",
    href: "/events",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
];

const updates: { title: string; href: string }[] = [
  {
    title: "News & Articles",
    href: "/news&article",
  },
  {
    title: "Our Store",
    href: "/ourStore",
  },
  {
    title: "FAQS",
    href: "/faqs",
  },
];

const contactUs: { title: string; href: string }[] = [
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Join Us",
    href: "/joinUs",
  },
  {
    title: "Donate",
    href: "/donation",
  },
];

const UserMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] grid-cols-1 gap-3 p-4 md:w-[450px] lg:w-[500px]">
              {aboutUs.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Programmes</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] grid-cols-1 gap-3 p-4 md:w-[450px] lg:w-[500px]">
              {programmes.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="">Updates</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] grid-cols-1 gap-3 p-4 md:w-[450px] lg:w-[500px]">
              {updates.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Contact Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] grid-cols-1 gap-3 p-4 md:w-[450px] lg:w-[500px]">
              {contactUs.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/donation" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Donate
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
  // const [aboutUs, setAboutUs] = useState(false);
  // const [programmes, setProgrammes] = useState(false);
  // const [updates, setUpdates] = useState(false);
  // const [contactUs, setContactUs] = useState(false);
  // return (
  //   <div className="hidden items-center gap-8 text-white md:inline-flex">
  //     <ul className="flex gap-8 text-[13px]">
  //       <Link
  //         href="/"
  //         className="flex cursor-pointer items-center text-base font-semibold uppercase"
  //         passHref
  //       >
  //         <li>Home</li>
  //       </Link>
  //       <li
  //         onClick={() => setAboutUs(!aboutUs)}
  //         className="relative flex cursor-pointer items-center text-base font-semibold uppercase "
  //       >
  //         About Us{" "}
  //         <span>
  //           <RiArrowDropDownLine
  //             className={`${
  //               aboutUs
  //                 ? "rotate-0 text-[#DC0A00] transition"
  //                 : "rotate-180 text-white transition"
  //             }`}
  //             size={40}
  //           />
  //           {aboutUs && (
  //             <div className="absolute left-0 top-[168%] overflow-hidden text-sm">
  //               <div className="flex w-fit cursor-pointer flex-col items-center">
  //                 <>
  //                   <MenuItem className="block" href="/">
  //                     Who we are
  //                   </MenuItem>
  //                   <MenuItem className="block" href="/">
  //                     Our Services
  //                   </MenuItem>
  //                 </>
  //               </div>
  //             </div>
  //           )}
  //         </span>
  //       </li>
  //       <li
  //         onClick={() => setProgrammes(!programmes)}
  //         className="relative flex cursor-pointer items-center text-base font-semibold uppercase"
  //       >
  //         Programmes{" "}
  //         <span>
  //           <RiArrowDropDownLine
  //             className={`${
  //               programmes
  //                 ? "rotate-0 text-[#DC0A00] transition"
  //                 : "rotate-180 text-white transition"
  //             }`}
  //             size={40}
  //           />
  //         </span>
  //         {programmes && (
  //           <div className="absolute left-0 top-[168%] overflow-hidden text-sm">
  //             <div className="flex w-fit cursor-pointer flex-col items-center">
  //               <>
  //                 <MenuItem className="block" href="/">
  //                   Our Campaigns
  //                 </MenuItem>
  //                 <MenuItem className="block" href="/">
  //                   Events
  //                 </MenuItem>
  //                 <MenuItem className="block" href="/gallery">
  //                   Gallery
  //                 </MenuItem>
  //               </>
  //             </div>
  //           </div>
  //         )}
  //       </li>
  //       <li
  //         onClick={() => setUpdates(!updates)}
  //         className="relative flex cursor-pointer items-center text-base font-semibold uppercase"
  //       >
  //         Updates{" "}
  //         <span>
  //           <RiArrowDropDownLine
  //             className={`${
  //               updates
  //                 ? "rotate-0 text-[#DC0A00] transition"
  //                 : "rotate-180 text-white transition"
  //             }`}
  //             size={40}
  //           />
  //         </span>
  //         {updates && (
  //           <div className="absolute left-0 top-[168%] overflow-hidden text-xs">
  //             <div className="flex w-fit cursor-pointer flex-col items-center">
  //               <>
  //                 <MenuItem className="block" href="/">
  //                   News & Articles
  //                 </MenuItem>
  //                 <MenuItem className="block" href="/">
  //                   Our Store
  //                 </MenuItem>
  //                 <MenuItem className="block" href="/faqs">
  //                   FAQS
  //                 </MenuItem>
  //               </>
  //             </div>
  //           </div>
  //         )}
  //       </li>
  //       <li
  //         onClick={() => setContactUs(!contactUs)}
  //         className="relative flex cursor-pointer items-center text-base font-semibold uppercase"
  //       >
  //         Contact Us{" "}
  //         <span>
  //           <RiArrowDropDownLine
  //             className={`${
  //               contactUs
  //                 ? "rotate-0 text-[#DC0A00] transition"
  //                 : "rotate-180 text-white transition"
  //             }`}
  //             size={40}
  //           />
  //         </span>
  //         {contactUs && (
  //           <div className="absolute left-0 top-[168%] overflow-hidden text-xs">
  //             <div className="flex w-fit cursor-pointer flex-col items-center">
  //               <>
  //                 <MenuItem className="block" href="/contact">
  //                   Contact
  //                 </MenuItem>
  //                 <MenuItem className="block" href="/joinUs">
  //                   Join us
  //                 </MenuItem>
  //                 <MenuItem className="block" href="/donation">
  //                   Donate
  //                 </MenuItem>
  //               </>
  //             </div>
  //           </div>
  //         )}
  //       </li>
  //     </ul>
  //     <Link href={"/donation"} passHref>
  //       <button className="rounded-full bg-[#D90A01] px-8 py-3 text-sm font-medium uppercase text-white hover:bg-rose-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
  //         Donate
  //       </button>
  //     </Link>
  //   </div>
  // );
};

export default UserMenu;
