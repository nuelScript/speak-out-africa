"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  dummypicture1,
  dummypicture2,
  dummypicture3,
  dummypicture4,
  dummypicture5,
  dummypicture7,
  dummypicture8,
} from "@/public/images";
import Image from "next/image";

const GalleryCard = () => {
  return (
    <Tabs defaultValue="all" className="w-fit xl:w-[1200px]">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger
          value="all"
          className="text-xs font-bold uppercase xl:text-base xl:font-semibold"
        >
          All
        </TabsTrigger>
        <TabsTrigger
          value="activities"
          className="text-xs font-bold uppercase xl:text-base xl:font-semibold"
        >
          Activities
        </TabsTrigger>
        <TabsTrigger
          value="research"
          className="text-xs font-bold uppercase xl:text-base xl:font-semibold"
        >
          Research
        </TabsTrigger>
        <TabsTrigger
          value="socials"
          className="text-xs font-bold uppercase xl:text-base xl:font-semibold"
        >
          Socials
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <Card>
          <CardContent className="grid auto-rows-fr grid-cols-1 gap-4 p-2 sm:grid-cols-2 lg:auto-rows-fr lg:grid-cols-4 lg:gap-4">
            <Image
              src={dummypicture1}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
            <Image
              src={dummypicture2}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
            <Image
              src={dummypicture3}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
            <Image
              src={dummypicture4}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
            <Image
              src={dummypicture5}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
            <Image
              src={dummypicture7}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
            <Image
              src={dummypicture8}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
            <Image
              src={dummypicture4}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="activities">
        <Card>
          <CardContent className="grid auto-rows-fr grid-cols-1 gap-6 p-2 sm:grid-cols-2 lg:auto-rows-fr lg:grid-cols-4 lg:gap-4">
            <Image
              src={dummypicture8}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
            <Image
              src={dummypicture2}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
            <Image
              src={dummypicture1}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
            <Image
              src={dummypicture4}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
            <Image
              src={dummypicture5}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
            <Image
              src={dummypicture7}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
            <Image
              src={dummypicture8}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
            <Image
              src={dummypicture4}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="research">
        <Card>
          <CardContent className="grid auto-rows-fr grid-cols-1 gap-6 p-2 sm:grid-cols-2 lg:auto-rows-fr lg:grid-cols-4 lg:gap-4">
            <Image
              src={dummypicture1}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
            <Image
              src={dummypicture2}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
            <Image
              src={dummypicture3}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
            <Image
              src={dummypicture4}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
            <Image
              src={dummypicture3}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
            <Image
              src={dummypicture7}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
            <Image
              src={dummypicture2}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
            <Image
              src={dummypicture4}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="socials">
        <Card>
          <CardContent className="grid auto-rows-fr grid-cols-1 gap-6 p-2 sm:grid-cols-2 lg:auto-rows-fr lg:grid-cols-4 lg:gap-4">
            <Image
              src={dummypicture4}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
            <Image
              src={dummypicture3}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
            <Image
              src={dummypicture1}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
            <Image
              src={dummypicture4}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
            <Image
              src={dummypicture5}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
            <Image
              src={dummypicture7}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
            <Image
              src={dummypicture8}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
            <Image
              src={dummypicture4}
              alt="picture1"
              className="h-[300px] w-[300px] object-cover"
            />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default GalleryCard;
