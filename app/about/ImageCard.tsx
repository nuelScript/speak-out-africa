import Image, { StaticImageData } from "next/image";
import React from "react";

interface ImageCardProps {
  image: StaticImageData;
  name: string;
}

const ImageCard = ({ image, name }: ImageCardProps) => {
  return (
    <div className="flex w-[300px] flex-col items-center gap-y-4 rounded-2xl rounded-tr-[100px] hover:scale-105 hover:shadow-md">
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        loading="lazy"
        className="rounded-bl-[100px] rounded-tr-[100px] "
      />
      <h1 className="text-2xl font-medium">Lorem ipsum dolor</h1>
      <p className="font-light text-gray-400">Role</p>
      <p className="mb-4 w-4/5 text-center font-light">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut in
        temporibus praesentium ipsa cum veritatis, optio asperiores, sint
        nostrum
      </p>
    </div>
  );
};

export default ImageCard;
