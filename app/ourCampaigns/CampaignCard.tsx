"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  dummypicture1,
  dummypicture2,
  dummypicture3,
  dummypicture4,
  dummypicture8,
} from "@/public/images";
import Sections from "./Sections";

const CampaignCard = () => {
  return (
    <Tabs defaultValue="all" className="w-fit 2xl:w-[1200px]">
      <TabsList className="grid w-full grid-cols-4 ">
        <TabsTrigger
          value="all"
          className="text-sm font-bold uppercase 2xl:font-semibold"
        >
          All
        </TabsTrigger>
        <TabsTrigger
          value="2022"
          className="text-sm font-bold uppercase 2xl:font-semibold"
        >
          2022
        </TabsTrigger>
        <TabsTrigger
          value="2021"
          className="text-sm font-bold uppercase 2xl:font-semibold"
        >
          2021
        </TabsTrigger>
        <TabsTrigger
          value="2020"
          className="text-sm font-bold uppercase 2xl:font-semibold"
        >
          2020
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <Card>
          <CardContent className="grid auto-rows-fr grid-cols-1 place-items-center gap-x-4 gap-y-16 p-8 sm:grid-cols-2 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-20 xl:grid-cols-2 2xl:grid-cols-3 2xl:place-content-start">
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture1}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture2}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture3}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture4}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture1}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture2}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture3}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture4}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture8}
            />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="2022">
        <Card>
          <CardContent className="grid auto-rows-fr grid-cols-1 place-items-center gap-x-4 gap-y-16 p-8 sm:grid-cols-2 lg:auto-rows-fr lg:grid-cols-2 lg:gap-x-6 lg:gap-y-20 xl:grid-cols-2 2xl:grid-cols-3 2xl:place-content-start">
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture1}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture2}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture3}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture4}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture1}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture2}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture3}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture4}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture8}
            />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="2021">
        <Card>
          <CardContent className="grid auto-rows-fr grid-cols-1 place-items-center gap-x-4 gap-y-16 p-8 sm:grid-cols-2 lg:auto-rows-fr lg:grid-cols-2 lg:gap-x-6 lg:gap-y-20 xl:grid-cols-2 2xl:grid-cols-3 2xl:place-content-start">
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture1}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture2}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture3}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture4}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture1}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture2}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture3}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture4}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture8}
            />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="2020">
        <Card>
          <CardContent className="grid auto-rows-fr grid-cols-1 place-items-center gap-x-4 gap-y-16 p-8 sm:grid-cols-2 lg:auto-rows-fr lg:grid-cols-2 lg:gap-x-6 lg:gap-y-20 xl:grid-cols-2 2xl:grid-cols-3 2xl:place-content-start">
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture1}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture2}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture3}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture4}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture1}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture2}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture3}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture4}
            />
            <Sections
              className="transition hover:scale-105 hover:cursor-pointer hover:shadow-md xl:hover:scale-110"
              image={dummypicture8}
            />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default CampaignCard;
