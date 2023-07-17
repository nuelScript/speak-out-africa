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
    <Tabs defaultValue="all" className="w-[1200px]">
      <TabsList className="grid w-full grid-cols-4 ">
        <TabsTrigger value="all" className="uppercase">
          All
        </TabsTrigger>
        <TabsTrigger value="2022" className="uppercase">
          2022
        </TabsTrigger>
        <TabsTrigger value="2021" className="uppercase">
          2021
        </TabsTrigger>
        <TabsTrigger value="2020" className="uppercase">
          2020
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <Card>
          <CardContent className="grid grid-cols-2 p-8 lg:auto-rows-fr lg:grid-cols-3 lg:gap-x-6 lg:gap-y-20">
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture1}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture2}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture3}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture4}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture1}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture2}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture3}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture4}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture8}
            />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="2022">
        <Card>
          <CardContent className="grid grid-cols-2 p-8 lg:auto-rows-fr lg:grid-cols-3 lg:gap-x-6 lg:gap-y-20">
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture1}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture2}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture3}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture4}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture1}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture2}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture3}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture4}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture8}
            />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="2021">
        <Card>
          <CardContent className="grid grid-cols-2 p-8 lg:auto-rows-fr lg:grid-cols-3 lg:gap-x-6 lg:gap-y-20">
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture1}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture2}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture3}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture4}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture1}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture2}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture3}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture4}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture8}
            />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="2020">
        <Card>
          <CardContent className="grid grid-cols-2 p-8 lg:auto-rows-fr lg:grid-cols-3 lg:gap-x-6 lg:gap-y-20">
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture1}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture2}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture3}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture4}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture1}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture2}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture3}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture4}
            />
            <Sections
              className="transition hover:scale-110 hover:cursor-pointer hover:shadow-md"
              image={dummypicture8}
            />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default CampaignCard;
