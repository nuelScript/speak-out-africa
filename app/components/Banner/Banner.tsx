"use client";

interface BannerProps {
  title: string;
}

const Banner = ({ title }: BannerProps) => {
  return (
    <div className="flex h-[80vh] w-full flex-col justify-center bg-[url('/images/dummypicture11.png')] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="flex h-full w-full flex-col justify-center bg-neutral-950 bg-opacity-70 p-20">
        <div className="flex h-full w-full items-center justify-center text-6xl font-bold uppercase text-white">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Banner;
