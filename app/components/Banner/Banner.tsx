"use client";

interface BannerProps {
  title: string;
}

const Banner = ({ title }: BannerProps) => {
  return (
    <div className="flex h-[70vh] w-full flex-col justify-center bg-[url('/images/dummypicture11.png')] bg-cover bg-scroll bg-center bg-no-repeat sm:h-[80vh] sm:bg-fixed md:h-[90vh] md:bg-fixed lg:h-screen lg:bg-fixed">
      <div className="flex h-full w-full flex-col justify-center bg-neutral-950 bg-opacity-70 p-8 sm:p-12 md:p-16 lg:p-20">
        <div className="flex h-full w-full items-center justify-center text-2xl font-bold uppercase text-white sm:text-3xl md:text-4xl lg:text-6xl">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Banner;
