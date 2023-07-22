import React from "react";

const OurObjectives = () => {
  return (
    <div className="flex w-full flex-col gap-10 bg-[#DC0A00] px-8 py-10 xl:flex-row xl:px-20 xl:py-20 xl:pb-32">
      <div className="flex w-full justify-center xl:w-1/2">
        <h1 className="text-4xl font-bold uppercase xl:text-6xl">
          Our Services
        </h1>
      </div>
      <div className="flex w-full flex-col items-center space-y-8 xl:w-1/2 xl:items-start">
        <p className="w-full text-center font-medium xl:w-3/5 xl:text-start xl:font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, facere
          illo debitis ducimus id atque fugiat eum quibusdam, harum qui
          repellat, in sint amet dolorum sequi suscipit ex aut. Consequatur?
        </p>
        <p className="w-full text-center font-medium xl:w-3/5 xl:text-start xl:font-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          totam explicabo blanditiis labore aperiam et culpa, repudiandae
          commodi ex esse, iusto sunt fuga minus? Provident, aliquam facilis.
          Neque, unde perspiciatis!
        </p>
      </div>
    </div>
  );
};

export default OurObjectives;
