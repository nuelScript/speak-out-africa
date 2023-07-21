"use client";

import React from "react";
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
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

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
    <div>
      <NavigationMenu className="hidden min-[1000px]:inline-flex ">
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
      <Sheet>
        <SheetTrigger asChild className="min-[1000px]:hidden">
          <div className="group flex h-5 w-6 cursor-pointer flex-col items-center justify-between overflow-hidden text-4xl text-white min-[1000px]:hidden">
            <span className="inline-flex h-[2px] w-full transform bg-white transition-all duration-300 ease-in-out group-hover:translate-x-2 group-hover:bg-[#D90A01] group-active:bg-[#D90A01]"></span>
            <span className="group-focus: inline-flex h-[2px] w-full translate-x-3 transform bg-white transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:bg-[#D90A01] group-active:bg-[#D90A01]"></span>
            <span className="inline-flex h-[2px] w-full translate-x-1 transform bg-white transition-all duration-300 ease-in-out group-hover:translate-x-3 group-hover:bg-[#D90A01] group-active:bg-[#D90A01]"></span>
          </div>
        </SheetTrigger>
        <SheetContent side="top" className="flex justify-center bg-black">
          <NavigationMenu className="min-[1000px]:hidden">
            <NavigationMenuList className="flex-col gap-y-8">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <SheetClose className="uppercase">Home</SheetClose>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                <NavigationMenuContent className="">
                  <ul className="grid w-[400px] grid-cols-1 gap-3 p-4 md:w-[450px] lg:w-[500px]">
                    <SheetClose className="uppercase">
                      {aboutUs.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        ></ListItem>
                      ))}
                    </SheetClose>
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
                <NavigationMenuTrigger className="">
                  Updates
                </NavigationMenuTrigger>
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
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default UserMenu;
