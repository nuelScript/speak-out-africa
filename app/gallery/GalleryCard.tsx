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
    <Tabs defaultValue="all" className="w-[1200px]">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="all" className="uppercase">
          All
        </TabsTrigger>
        <TabsTrigger value="activities" className="uppercase">
          Activities
        </TabsTrigger>
        <TabsTrigger value="research" className="uppercase">
          Research
        </TabsTrigger>
        <TabsTrigger value="socials" className="uppercase">
          Socials
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <Card>
          <CardContent className="grid grid-cols-2 gap-4 p-2  lg:auto-rows-fr lg:grid-cols-4 lg:gap-4">
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
          <CardContent className="grid grid-cols-2 gap-6 p-2  lg:auto-rows-fr lg:grid-cols-4 lg:gap-4">
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
          <CardContent className="grid grid-cols-2 gap-6 p-2  lg:auto-rows-fr lg:grid-cols-4 lg:gap-4">
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
          <CardContent className="grid grid-cols-2 gap-6 p-2  lg:auto-rows-fr lg:grid-cols-4 lg:gap-4">
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
