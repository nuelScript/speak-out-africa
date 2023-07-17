"use client";

const ImageBanner = () => {
  return (
    <div className="flex h-[40vh] w-full flex-col justify-center bg-[url('/images/maps.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="flex h-full w-full flex-col justify-center bg-neutral-950 bg-opacity-70 p-20"></div>
    </div>
  );
};

export default ImageBanner;
